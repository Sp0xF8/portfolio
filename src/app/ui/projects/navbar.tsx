
import Link from "next/link";

import Projects from "@/app/ui/projects/linkgen";
import GitHubLogo from "@/app/ui/projects/github-logo";


export default function SideNav() {
	return (

		<div className="rounded-right bg-gray-800 w-64 h-full flex flex-col justify-between">

			<span className="flex-none h-16 w-full bg-gray-900 flex items-center justify-center text-2xl font-bold text-orange-500">Projects</span>

			<div className="flex h-full flex-col px-3 py-4 md:px-2">

				<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
					<Projects />
					<div className="hidden h-auto w-full grow rounded-md md:block"></div>
				</div>
			</div>

			<div className="flex-none h-16 w-full bg-gray-900 flex items-center justify-center text-2xl font-bold text-orange-500">
				<GitHubLogo color="rgb(249 115 22)"/>
				<Link href="https://github.com/Sp0xF8">Github</Link>
			</div>

		</div>

	);
}