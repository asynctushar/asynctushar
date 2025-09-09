"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.error("Error:", error);
    }, [error]);

    return (
        <section className="flex flex-1 flex-col items-center justify-center text-center gap-6">
            <h1 className="text-3xl font-bold">Something went wrong</h1>
            <p className="text-muted-foreground max-w-md">
                An unexpected error occurred. Please try again or refresh the page.
            </p>
            <Button onClick={() => reset()}>Try Again</Button>
        </section>
    );
};

export default Error;