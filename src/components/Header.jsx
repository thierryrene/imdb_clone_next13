import { FaHome, FaInfo } from "react-icons/fa";

import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";
import MenuItem from "./MenuItem";

export default function Header() {
	return (
		<div className="flex justify-between mx-2 py-6 max-w-6xl sm:mx-auto items-center">
			<div className="flex ">
				<MenuItem title="HOME" address="/" Icon={FaHome} />
				<MenuItem title="ABOUT" address="/about" Icon={FaInfo} />
			</div>
			<div className="flex items-center space-x-5">
				<DarkModeSwitch />
				<Link href="/">
					<h2 className="text-2xl">
						<span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
							IMDb
						</span>
						<span className="text-xl hidden sm:inline ">Clone</span>
					</h2>
				</Link>
			</div>
		</div>
	);
}
