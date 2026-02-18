import { Navbar, SpinnerScreen, Toast } from "@/shared/ui";

export function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 container mx-auto my-6 w-full">
                <main className="px-4">
                    {children}
                </main>
                <SpinnerScreen />
                <Toast />
            </div>
        </div>
    );
}