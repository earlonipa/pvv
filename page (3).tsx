"use client";

import { motion } from "framer-motion";
import {
    faEnvelope,
    faMapMarkerAlt,
    faPhone,
    faClock,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

const { lat, lng } = SITE.geo;
const mapSrc =
    `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01},${lat - 0.009},${lng + 0.01},${lat + 0.009}` +
    `&layer=mapnik&marker=${lat},${lng}`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <motion.div
                className="bg-pvvTheme py-6 sm:py-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                        CONTACTS
                    </h1>
                </div>
            </motion.div>

            <main className="flex-grow">
                <div className="max-w-screen-lg mx-auto px-4 py-6 sm:py-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Contact Information Section */}
                        <motion.div
                            className="bg-white rounded-lg shadow-md p-4 sm:p-6"
                            variants={itemVariants}
                        >
                            <h2 className="text-xl sm:text-2xl font-bold text-pvvTheme mb-4 sm:mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-4 sm:space-y-6">
                                {/* Phone */}
                                <motion.div
                                    className="flex items-start space-x-3 sm:space-x-4 group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-pvvTheme/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-pvvTheme"
                                        />
                                    </div>
                                    <div className="text-gray-700">
                                        <div className="font-semibold mb-1 text-sm sm:text-base">
                                            PHONE
                                        </div>
                                        <div className="text-sm sm:text-base group-hover:text-pvvTheme transition-colors">
                                            {SITE.mobiles.join(" / ")}
                                        </div>
                                    </div>
                                </motion.div>
                                {/* Phone */}
                                <motion.div
                                    className="flex items-start space-x-3 sm:space-x-4 group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-pvvTheme/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-pvvTheme"
                                        />
                                    </div>
                                    <div className="text-gray-700">
                                        <div className="font-semibold mb-1 text-sm sm:text-base">
                                            LANDLINE
                                        </div>
                                        <div className="text-sm sm:text-base group-hover:text-pvvTheme transition-colors">
                                            {SITE.landline}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    className="flex items-start space-x-3 sm:space-x-4 group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-pvvTheme/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-pvvTheme"
                                        />
                                    </div>
                                    <div className="text-gray-700">
                                        <div className="font-semibold mb-1 text-sm sm:text-base">
                                            EMAIL
                                        </div>
                                        <a
                                            href={`mailto:${SITE.email}`}
                                            className="text-sm sm:text-base group-hover:text-pvvTheme transition-colors break-all"
                                        >
                                            {SITE.email}
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Facebook Info */}
                                <motion.div
                                    className="flex items-start space-x-3 sm:space-x-4 group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-pvvTheme/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-pvvTheme"
                                        />
                                    </div>
                                    <div className="text-gray-700">
                                        <div className="font-semibold mb-1 text-sm sm:text-base">
                                            FACEBOOK
                                        </div>
                                        <div className="text-sm sm:text-base group-hover:text-pvvTheme transition-colors">
                                            <a
                                                href={SITE.facebook}
                                                className="hover:text-blue-500 text-gray-700 transition-colors duration-200"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {SITE.facebookLabel}
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Address */}
                                <motion.div
                                    className="flex items-start space-x-3 sm:space-x-4 group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-pvvTheme/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                                        <FontAwesomeIcon
                                            icon={faMapMarkerAlt}
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-pvvTheme"
                                        />
                                    </div>
                                    <div className="text-gray-700">
                                        <div className="font-semibold mb-1 text-sm sm:text-base">
                                            ADDRESS
                                        </div>
                                        <div className="text-sm sm:text-base group-hover:text-pvvTheme transition-colors">
                                            {SITE.address}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Business Hours */}
                                <motion.div
                                    className="flex items-start space-x-3 sm:space-x-4 group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-pvvTheme/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                                        <FontAwesomeIcon
                                            icon={faClock}
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-pvvTheme"
                                        />
                                    </div>
                                    <div className="text-gray-700">
                                        <div className="font-semibold mb-1 text-sm sm:text-base">
                                            BUSINESS HOURS
                                        </div>
                                        <div className="text-sm sm:text-base group-hover:text-pvvTheme transition-colors">
                                            {SITE.hours}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Service Area */}
                                <motion.div
                                    className="flex items-start space-x-3 sm:space-x-4 group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-pvvTheme/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                                        <FontAwesomeIcon
                                            icon={faGlobe}
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-pvvTheme"
                                        />
                                    </div>
                                    <div className="text-gray-700">
                                        <div className="font-semibold mb-1 text-sm sm:text-base">
                                            SERVICE AREA
                                        </div>
                                        <div className="text-sm sm:text-base group-hover:text-pvvTheme transition-colors">
                                            Nationwide Service Coverage
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Map Section */}
                        <motion.div
                            className="relative h-[300px] sm:h-[400px] md:h-full rounded-lg overflow-hidden shadow-md"
                            variants={itemVariants}
                        >
                            <iframe
                                title="PVV Ship Repair and Marine Services location"
                                src={mapSrc}
                                className="absolute inset-0 h-full w-full border-0"
                                loading="lazy"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Additional Information */}
                    <motion.div
                        className="mt-6 sm:mt-8 bg-white rounded-lg shadow-md p-4 sm:p-6"
                        variants={itemVariants}
                    >
                        <h2 className="text-xl sm:text-2xl font-bold text-pvvTheme mb-3 sm:mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            We&apos;re here to help! Whether you need
                            information about our services, want to discuss a
                            project, or have any questions, our team is ready to
                            assist you. Feel free to reach out through any of
                            our contact channels, and we&apos;ll get back to you
                            as soon as possible.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                                <h3 className="font-semibold text-pvvTheme mb-2 text-sm sm:text-base">
                                    For General Inquiries
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Contact us through phone or email for
                                    general information about our services and
                                    company.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                                <h3 className="font-semibold text-pvvTheme mb-2 text-sm sm:text-base">
                                    For Project Proposals
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Reach out to discuss your specific project
                                    requirements and get a detailed proposal.
                                </p>
                            </div>
                        </div>
                        <ContactForm />
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
