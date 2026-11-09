"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { NAV_ITEMS, SITE } from "@/lib/site";

export default function Footer() {
    return (
        <footer className="bg-pvvTheme text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-white">About PVV</h3>
                        <p className="text-gray-200 leading-relaxed mb-6">
                            With years of expertise in marine services, PVV is committed to delivering exceptional ship repair and maintenance solutions. Our team of skilled professionals ensures quality service and customer satisfaction.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {NAV_ITEMS.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link 
                                        href={link.href} 
                                        className="text-gray-200 hover:text-white transition-colors"
                                    >
                                        {link.name.charAt(0) + link.name.slice(1).toLowerCase()}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
                        <ul className="space-y-4">
                            <motion.li 
                                className="flex items-start"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 text-white mt-1 mr-3" />
                                <span className="text-gray-200">{SITE.address}</span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-white mt-1 mr-3" />
                                <div>
                                    {[...SITE.mobiles, SITE.landline].map((phone) => (
                                        <span key={phone} className="text-gray-200 block">{phone}</span>
                                    ))}
                                </div>
                            </motion.li>
                            <motion.li 
                                className="flex items-start"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-white mt-1 mr-3" />
                                <a href={`mailto:${SITE.email}`} className="text-gray-200 hover:text-white transition-colors">
                                    {SITE.email}
                                </a>
                            </motion.li>
                            <motion.li 
                                className="flex items-start"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 text-white mt-1 mr-3" />
                                <a 
                                    href={SITE.facebook} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-200 hover:text-white transition-colors"
                                >
                                    {SITE.facebookLabel}
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div 
                    className="border-t border-white/10 pt-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-300">
                        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
