"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function FramerMagnetic({
  children,
}: {
  children: React.ReactNode;
}) {
const ref = useRef<HTMLDivElement>(null);
const [position, setPosition] = useState({ x: 0, y: 0 });
const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
        const { width, height, left, top } = rect;
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    }
};

const mouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        setPosition({ x: 0, y: 0 });
};

    return (
        <motion.div
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
