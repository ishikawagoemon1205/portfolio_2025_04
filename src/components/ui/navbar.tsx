"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LIGHTBLUE_MODE_COLOR, ORANGE_MODEL_COLOR, LIGHT_MODE_COLOR, DARK_MODE_COLOR, RED_MODE_COLOR } from "@/_constants/colors";

export default function Navbar() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollPercentage(Math.min(progress, 100));
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <>
            {/* 上部バー */}
            <div className="absolute w-full h-[2px] flex fixed top-0 left-0 z-10 bg-[#0B1226] z-[1000]">
                <div
                    className="h-[2px] transition-all duration-100"
                    style={{
                        width: `${scrollPercentage}%`,
                        background: `${RED_MODE_COLOR}`,
                    }}
                ></div>
            </div>

            {/* ナビバー */}
            <div className="absolute w-full h-[80px] flex items-center justify-center">
                <div className="w-[1024px] h-full flex items-center fixed z-[1000]">
                    <div className="pl-[10px]"><p>Atsuhiro Ishikawa</p></div>
                    <div className="flex-grow flex justify-end items-center">
                        <button
                            className="relative w-10 h-10 flex flex-col justify-center items-center"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {/* 上の線 */}
                            <motion.div
                                className="w-8 h-1 rounded absolute"
                                style={{background: DARK_MODE_COLOR}}
                                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* 下の線 */}
                            <motion.div
                                className="w-8 h-1 rounded absolute"
                                style={{background: DARK_MODE_COLOR}}
                                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                                transition={{ duration: 0.3 }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}