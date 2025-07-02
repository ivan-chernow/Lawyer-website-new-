import React from "react";
import {usePathname} from "next/navigation";
import {Link as ScrollLink} from "react-scroll/modules";
import Link from "next/link";
import {NavLinkProps} from "@/components/NavLink/types";


export function NavLink({to, children}: NavLinkProps) {
	const pathname = usePathname();


	if (pathname === '/') {
		return (
			<ScrollLink to={to} smooth={true} duration={500} className='hover:text-blue hover:transition-all cursor-pointer'>
				{children}
			</ScrollLink>
		);
	}
	return (
		<Link href={`/#${to}`} className='hover:text-blue hover:transition-all cursor-pointer'>
			{children}
		</Link>
	);
}
