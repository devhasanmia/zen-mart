import { Search, ShoppingCart } from "lucide-react";
import ZmButton from "./ui/ZmButton";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="flex items-center justify-between container m-auto gap-6 p-4 ">
                {/* Logo */}
                <h1 className="text-3xl font-bold text-zm-p cursor-pointer">Zen Mart</h1>
                {/* Search Bar */}
                <div className=" flex-grow max-w-md hidden md:block">
                    <div className="flex items-center gap-2 border rounded-full px-4 py-2 bg-slate-100 hover:bg-slate-200 transition">
                        <Search className="h-5 w-5 text-gray-500" aria-hidden="true" />
                        <input
                            type="text"
                            placeholder="Search anything"
                            className="flex-grow outline-none bg-transparent text-gray-700"
                            aria-label="Search products"
                        />
                        <button className="text-gray-800">Search</button>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {/* Cart */}
                    <button
                        className="relative flex items-center gap-2"
                        aria-label="View cart"
                    >
                        <ShoppingCart className="h-6 w-6 text-gray-700" />
                        <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                            9
                        </span>
                    </button>

                    {/* Login Button */}
                    <ZmButton text="Login" />
                </div>
            </div>
        </header>
    );
};

export default Header;
