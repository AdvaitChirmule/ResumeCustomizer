export default function NavBar() {
    return (
        <nav className="w-full absolute bg-transparent h-20 min-h-20 m-0">
            <div className="flex items-center justify-between px-4">
                <div className="hidden space-x-6 text-sm text-[#F2F2F2] md:flex">
                    <div className="text-sm">Resume Customizer</div>
                    <a href="/builder" className="hover:text-[#999999]">Builder</a>
                    <a href="/profile" className="hover:text-[#999999]">Profile</a>
                    <a href="/about" className="hover:text-[#999999]">About</a>
                </div>
                <div className="space-x-6">
                    <a href="/register" className="rounded-md bg-[#398453] px-3 py-1.5 text-sm text-[white] hover:bg-[#004400]">Register</a>
                    <a href="/login" className="rounded-md bg-[#666666] px-3 py-1.5 text-sm text-white hover:[#999999]">Login</a>
                </div>
            </div>
        </nav>

    )
}