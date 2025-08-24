import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t py-8 text-center text-sm text-muted-foreground">
            <div className="flex justify-center gap-6 mb-3">
                <Link href="https://github.com/asynctushar" target="_blank">
                    GitHub
                </Link>
                <Link href="https://linkedin.com/in/asynctushar" target="_blank">
                    LinkedIn
                </Link>
                <Link href="https://fiverr.com/asynctushar" target="_blank">
                    Fiverr
                </Link>
                <Link
                    href="https://upwork.com/freelancers/asynctushar"
                    target="_blank"
                >
                    Upwork
                </Link>
                <Link href="mailto:tusarbiswas888@gmail.com">Email</Link>
            </div>
            ©{new Date().getFullYear()} Tushar Biswas. All rights reserved.
        </footer>
    );
};

export default Footer;