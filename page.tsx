"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function MainPage() {
    return (
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-screen flex items-center" aria-label="Main banner">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/home_final.webp"
                            alt="PVV Ship Repair team working on marine vessel maintenance"
                            fill
                            className="object-cover brightness-50"
                            priority
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Expert Ship Repair & Marine Services in the Philippines
                            </h1>
                            <p className="text-xl text-gray-200 mb-8">
                                Your trusted partner for comprehensive ship repair, marine maintenance, and vessel services across Mindanao and the Philippines.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" aria-label="Contact PVV Ship Repair">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-pvvTheme text-white px-8 py-4 rounded-lg font-semibold hover:bg-pvvTheme/90 transition-colors flex items-center gap-2"
                                    >
                                        Get Started
                                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                                    </motion.button>
                                </Link>
                                <Link href="/services" aria-label="View our marine services">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-pvvTheme px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                    >
                                        Our Marine Services
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="mission-vision-heading">
                    <div className="container mx-auto px-4">
                        <h2 id="mission-vision-heading" className="sr-only">Our Mission and Vision</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                    <h3 className="text-2xl font-bold mb-4 text-pvvTheme">Our Mission</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To provide exceptional ship repair and marine services through innovative solutions, skilled craftsmanship, and unwavering commitment to quality and safety for vessels throughout the Philippines.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                    <h3 className="text-2xl font-bold mb-4 text-pvvTheme">Our Vision</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To be the leading provider of marine services in the Philippines, recognized for our excellence in ship repair, marine maintenance, and our dedication to customer satisfaction in the maritime industry.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/misvis.webp"
                                        alt="PVV Ship Repair team discussing marine vessel maintenance"
                                        width={800}
                                        height={450}
                                        className="object-cover"
                                        loading="eager"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-20 bg-white" aria-labelledby="why-choose-us-heading">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 id="why-choose-us-heading" className="text-4xl font-bold mb-4 text-pvvTheme">Why Choose PVV Ship Repair</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We stand out in the marine services industry with our commitment to excellence in ship repair, maintenance, and customer satisfaction.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Expert Marine Technicians",
                                    description: "Our skilled professionals with 10+ years experience specialize in ship repair, marine diesel engines, and vessel maintenance.",
                                    icon: "👨‍🔧"
                                },
                                {
                                    title: "24/7 Emergency Repairs",
                                    description: "We understand the urgency of marine repairs and provide prompt, efficient service for all vessel types.",
                                    icon: "⚡"
                                },
                                {
                                    title: "Quality Shipyard Services",
                                    description: "We maintain ISO-quality standards for all marine services including hull repair, engine overhaul, and propulsion systems.",
                                    icon: "✨"
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 text-pvvTheme">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Preview Section */}
                <section className="py-20 bg-gray-50" aria-labelledby="services-heading">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 id="services-heading" className="text-4xl font-bold mb-4 text-pvvTheme">Our Marine Services</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Comprehensive solutions for all your vessel maintenance and repair needs
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Underwater Services",
                                    description: "Expert Z-peller, CPP, and fixed propeller maintenance for optimal vessel propulsion and maneuverability",
                                    link: "/services#underwater"
                                },
                                {
                                    title: "Engine & Machinery",
                                    description: "Comprehensive diesel engine overhaul, transmission, and auxiliary engine services",
                                    link: "/services#engine"
                                },
                                {
                                    title: "Hydraulic & Steering",
                                    description: "Professional hydraulic systems and steering gear maintenance for safe vessel operation",
                                    link: "/services#hydraulic"
                                },
                                {
                                    title: "Hull & Structure",
                                    description: "Expert steel works, hull repair, and structural maintenance services",
                                    link: "/services#hull"
                                },
                                {
                                    title: "Pump & Motor",
                                    description: "Complete maintenance and repair of marine pumps, motors, and electrical systems",
                                    link: "/services#pump"
                                },
                                {
                                    title: "Tank & Piping",
                                    description: "Professional tank cleaning, bilge maintenance, and piping repair services",
                                    link: "/services#tank"
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-pvvTheme">{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <Link href={service.link} className="text-pvvTheme hover:underline font-semibold">
                                        Learn more →
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Contact Section */}
                <section className="py-20 bg-gradient-to-b from-white to-gray-50" aria-labelledby="contact-heading">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 id="contact-heading" className="text-4xl font-bold mb-4 text-pvvTheme">Contact PVV Ship Repair</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Get in touch for professional ship repair and marine service solutions in the Philippines.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="overflow-hidden rounded-xl shadow-lg">
                                    <Image
                                        src="/images/shipyard.webp"
                                        alt="PVV Ship Repair team working in shipyard"
                                        width={800}
                                        height={450}
                                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                                        loading="eager"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-pvvTheme/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white text-xl font-semibold">Quality Marine Services Since 2010</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-pvvTheme">Location</h3>
                                        <p className="text-gray-600">Lower Jasaan, Misamis Oriental, Mindanao, Philippines</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-pvvTheme">Contact Numbers</h3>
                                        {SITE.mobiles.map((phone) => (
                                            <p key={phone} className="text-gray-600">{phone}</p>
                                        ))}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-pvvTheme">Email</h3>
                                        <a href={`mailto:${SITE.email}`} className="text-gray-600 hover:text-pvvTheme transition-colors">
                                            {SITE.email}
                                        </a>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-pvvTheme">Service Areas</h3>
                                        <p className="text-gray-600">Serving all of Mindanao and the Philippines</p>
                                    </div>
                                    <Link href="/contact" className="inline-block">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-pvvTheme text-white px-8 py-3 rounded-lg font-semibold hover:bg-pvvTheme/90 transition-colors"
                                        >
                                            Request a Quote
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
    );
}