export function Navbar() {
    return (
        <nav className="w-full bg-white border-b shadow h-16 flex items-center z-20">
            <div className="container mx-auto flex items-center px-4">
                <img src="vite.svg" className="h-7 mr-3" alt="Logo" />
                <span className="text-xl font-bold">Job Application</span>
            </div>
        </nav>
    );
}