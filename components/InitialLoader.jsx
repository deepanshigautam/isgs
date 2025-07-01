// components/InitialLoader.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import isgs from '../public/assets/isgs_logo.png';

function InitialLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    // Fixed particle positions to avoid hydration mismatch
    const particlePositions = [
        { top: 20, left: 15 },
        { top: 80, left: 85 },
        { top: 45, left: 25 },
        { top: 65, left: 75 },
        { top: 30, left: 90 },
        { top: 75, left: 10 },
        { top: 10, left: 60 },
        { top: 90, left: 40 },
        { top: 55, left: 5 },
        { top: 35, left: 95 },
        { top: 15, left: 45 },
        { top: 85, left: 55 },
        { top: 60, left: 20 },
        { top: 25, left: 80 },
        { top: 70, left: 65 },
        { top: 40, left: 35 },
        { top: 95, left: 25 },
        { top: 5, left: 70 },
        { top: 50, left: 90 },
        { top: 80, left: 30 }
    ];

    useEffect(() => {
        setIsMounted(true);

        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Delay before hiding loader
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        // Minimum loading time
        const minLoadTime = setTimeout(() => {
            setProgress(100);
        }, 2000);

        return () => {
            clearInterval(interval);
            clearTimeout(minLoadTime);
        };
    }, []);

    // Don't render anything until mounted (prevents hydration mismatch)
    if (!isMounted) {
        return null;
    }

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-br from-isgs-black via-isgs-dark to-isgs-charcoal"
                >
                    {/* Background particles with fixed positions */}
                    <div className="absolute inset-0 overflow-hidden">
                        {particlePositions.map((position, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
                                style={{
                                    top: `${position.top}%`,
                                    left: `${position.left}%`,
                                }}
                                animate={{
                                    opacity: [0.3, 0.8, 0.3],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 3 + (i % 3),
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </div>

                    <motion.div
                        className="flex flex-col items-center relative z-10"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Logo container with enhanced animations */}
                        <div className="relative w-32 h-32 mb-8">
                            {/* Outer ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-4 border-blue-500/20"
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />

                            {/* Middle ring */}
                            <motion.div
                                className="absolute inset-2 rounded-full border-2 border-blue-400/40"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Inner spinning ring */}
                            <motion.div
                                className="absolute inset-2 rounded-full border-t-3 border-r-3 border-blue-500"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Center glow */}
                            <motion.div
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-blue-500/30 blur-xl"
                                animate={{
                                    opacity: [0.3, 0.7, 0.3],
                                    scale: [0.8, 1.2, 0.8]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Logo */}
                            <motion.div
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-isgs-dark to-isgs-charcoal flex items-center justify-center shadow-2xl border border-blue-500/30"
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image src={isgs} alt='ISGS Logo' width={40} height={40} />
                            </motion.div>
                        </div>

                        {/* Company name with typewriter effect */}
                        <motion.div
                            className="text-center mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold text-isgs-white mb-2 tracking-wider"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            >
                                ISGS
                            </motion.h1>
                            <motion.p
                                className="text-sm md:text-base text-blue-400 font-medium tracking-widest"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                            >
                                TECHNOLOGY
                            </motion.p>
                        </motion.div>





                        {/* Loading text */}
                        <motion.p
                            className="text-isgs-silver text-sm"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Preparing your experience...
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default InitialLoader;