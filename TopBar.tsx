"use client";
import {
    faBars,
    faTimes,
    faPhone,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_ITEMS, SITE } from "@/lib/site";

const contactInfo = [
    { icon: faPhone, text: [...SITE.mobiles, SITE.landline].join(" / ") },
    { icon: faEnvelope, text: SITE.email },
];

const TopBar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
                document.body.style.overflow = "auto";
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.style.overflow = menuOpen ? "auto" : "hidden";
    };

    return (
        <>
            {/* Top Contact Bar */}
            <div className="bg-pvvTheme py-2 ">
                <div className="mx-auto px-4 container">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-white text-sm px-4"
                            >
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    className="w-4 h-4 "
                                />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav
                className={`sticky top-0 z-50 transition-all duration-300 ${
                    scrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/images/pvv_logo_final.webp"
                                    alt={`${SITE.name} Logo`}
                                    width={80}
                                    height={40}
                                    className="mt-2"
                                    priority
                                />
                                <span className="mx-3 text-pvvTheme text-md md:text-lg lg:text-xl font-bold">
                                    PVV SHIP REPAIR AND MARINE SERVICES CO.
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-4 lg:space-x-6">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-3 lg:px-4 py-2 transition-all duration-200 ${
                                        pathname === item.href
                                            ? "text-pvvRed font-extrabold"
                                            : "text-pvvTheme font-bold hover:text-pvvRed"
                                    }`}
                                >
                                    {item.name}
                                    {pathname === item.href && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pvvRed"></span>
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-pvvTheme p-2"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                        >
                            <FontAwesomeIcon
                                icon={menuOpen ? faTimes : faBars}
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
                        menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex flex-col space-y-6">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => {
                                        setMenuOpen(false);
                                        document.body.style.overflow = "auto";
                                    }}
                                    className={`text-2xl font-bold ${
                                        pathname === item.href
                                            ? "text-pvvRed"
                                            : "text-pvvTheme hover:text-pvvRed"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col space-y-4">
                                    {contactInfo.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 text-pvvTheme"
                                        >
                                            <FontAwesomeIcon
                                                icon={item.icon}
                                                className="w-5 h-5"
                                            />
                                            <span className="text-lg">
                                                {item.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default TopBar;
