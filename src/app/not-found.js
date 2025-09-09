import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
    return (
        <section className="flex flex-1 flex-col items-center justify-center text-center gap-6">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-muted-foreground max-w-md">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Button asChild>
                <Link href="/">Back to Home</Link>
            </Button>
        </section>
    );
};

export default NotFound;
