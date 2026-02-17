import { Navbar } from "@/shared/ui/Navbar";

export function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto">
            <Navbar />
            <main className="pt-16 px-4">
                {children}
            </main>
        </div>
    );
}