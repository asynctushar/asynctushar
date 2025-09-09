export const metadata = {
    title: "Contact | Tushar Biswas - MERN Stack & Next.js Developer",
    description:
        "Contact Tushar Biswas, a MERN Stack & Next.js developer, for collaborations, freelance projects, or opportunities. Let's build something impactful together.",
    keywords: [
        "Contact Tushar Biswas",
        "Hire MERN stack developer",
        "Next.js freelance developer",
        "React developer contact",
        "Freelance web developer",
        "Full stack developer Bangladesh",
        "Hire Next.js developer",
    ],
    openGraph: {
        title: "Contact Tushar Biswas | MERN Stack & Next.js Developer",
        description:
            "Get in touch with Tushar Biswas for freelance projects, collaborations, or job opportunities. Experienced in React, Next.js, Node.js, and full-stack development.",
        url: "https://asynctushar.vercel.app/contact",
        siteName: "Tushar Biswas Portfolio",
        images: [
            {
                url: "/og-contact.png",
                width: 1200,
                height: 630,
                alt: "Contact Tushar Biswas Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Tushar Biswas | MERN Stack & Next.js Developer",
        description:
            "Reach out to Tushar Biswas for freelance work, collaborations, or development opportunities in MERN stack & Next.js.",
        images: ["/og-contact.png"],
    },
};


export default function ContactLayout({ children }) {
    return <>{children}</>;
}
