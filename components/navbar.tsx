"use client"
import { Heart, User, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
    const router = useRouter()
    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl" onClick={() => router.push("/")}>jb
                <span className="font-bold">axax</span>
            </h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ShoppingCart strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push("/cart")} />

                <Heart
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push("/loved-products")} />

                <User strokeWidth={1} className="cursor-pointer" />
                <ToggleTheme/>
            </div>
        </div>
    );
}

export default Navbar;