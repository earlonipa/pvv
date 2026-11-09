"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Client } from "@/lib/clients";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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

export default function ClientList({ clients }: { clients: Client[] }) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    const categories = Array.from(
        new Set(clients.map((client) => client.category))
    );

    return (
        <main className="min-h-screen">
            <div className="bg-pvvTheme py-10">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-white"
                    >
                        OUR CLIENTS
                    </motion.h1>
                </div>
            </div>
            <div className="py-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                                selectedCategory === null
                                    ? "bg-pvvTheme text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        >
                            All Clients
                        </motion.button>
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                                    selectedCategory === category
                                        ? "bg-pvvTheme text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {clients
                            .filter(
                                (client) =>
                                    !selectedCategory ||
                                    client.category === selectedCategory
                            )
                            .map((item) => (
                                <motion.div
                                    key={item.name}
                                    variants={itemVariants}
                                    className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <h2 className="text-lg font-semibold text-center text-gray-800 mb-2">
                                        {item.name}
                                    </h2>
                                </motion.div>
                            ))}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
