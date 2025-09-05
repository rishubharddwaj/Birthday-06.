"use client"

import { motion } from "framer-motion"

export default function Loader() {

    return (
        <motion.div
            className="flex items-center justify-center min-h-screen relative overflow-hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="text-center relative z-10 flex flex-col items-center">
                <div className="cssload-main">
                    <div className="cssload-heart">
                        <span className="cssload-heartL"></span>
                        <span className="cssload-heartR"></span>
                        <span className="cssload-square"></span>
                    </div>
                    <div className="cssload-shadow "></div>
                </div>

                {/* Heading */}
                <motion.h1
                    className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mt-24 py-1.5"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    Preparing Something Special
                </motion.h1>

                <motion.p
                    className="text-purple-300 text-lg mt-4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    For someone very special...
                </motion.p>
            </div>
        </motion.div>
    )
}
