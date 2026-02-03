"use client";

import { useState, useEffect } from "react";
const roles = ["MERN Stack Developer", "Frontend Developer", "Full Stack Developer"];

const AnimatedRole = () => {
    const [currentRole, setCurrentRole] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = roles[roleIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting && charIndex < currentText.length) {
                    setCurrentRole(currentText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else if (!isDeleting && charIndex === currentText.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                } else if (isDeleting && charIndex > 0) {
                    setCurrentRole(currentText.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else if (isDeleting && charIndex === 0) {
                    setIsDeleting(false);
                    setRoleIndex((roleIndex + 1) % roles.length);
                }
            },
            120
        );

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);
    return (
        <div className="h-12 sm:h-14">
            <p className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
                {currentRole}
                <span className="animate-pulse">|</span>
            </p>
        </div>
    );
};

export default AnimatedRole;