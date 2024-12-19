

import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";


const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/category/cafe-molido" className="block">Cafe Molido</Link>
                <Link href="/category/cafe-grano" className="block">Cafe en grano</Link>
                <Link href="/category/cafe-capsula" className="block">Cafe en capsulas</Link>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile; 