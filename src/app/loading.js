const Loading = () => {
    return (
        <section className="flex flex-1 flex-col items-center justify-center text-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="text-muted-foreground">Loading, please wait...</p>
        </section>
    );
};

export default Loading;