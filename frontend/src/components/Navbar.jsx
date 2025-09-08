import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
	return (
		<header className="border-b dark-border min-w-full">
			<div className="mx-auto max-w-6xl p-4">
				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-bold text-base-content font-mono tracking-tighter">
						Gluino
					</h1>

					<div className="flex items-center 	-4">
						<Link to={"/create"} className="btn btn-sm btn-light text-base-300">
							<PlusIcon className="size-5" />
							<span>New Note</span>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
