
import Link from "next/link";

import GitHubLogo from "@/app/ui/svgs/github-logo";
import {PopulateNav} from "@/app/ui/projects/linkgen";

import { getProjects } from "@/app/lib/dbhandler";




export default async function SideNav() {


	const projectListArray = await getProjects();

	//convert to standard json format
	const projectList = JSON.parse(JSON.stringify(projectListArray));

	



	return (
		<>
			<div className="rounded-right bg-gray-800 w-64 h-full flex flex-col justify-between">

				<Link href="/projects" className="flex-none h-16 w-full bg-gray-900 flex items-center justify-center text-2xl font-bold text-orange-500">Projects</Link>

				<div className="flex h-full flex-col px-3 py-4 md:px-2">

					<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
						
		

						


						<PopulateNav projectInJson={projectList}  />
						<div className="hidden h-auto w-full grow rounded-md md:block"></div>
					</div>
				</div>

				<div className="sticky last-of-type:bottom-0">

					<div className="flex-none h-16 w-full bg-gray-900 flex items-center justify-center text-2xl font-bold text-orange-500">
						<GitHubLogo color="rgb(249 115 22)"/>
						<Link href="https://github.com/Sp0xF8">Github</Link>
					</div>
				</div>

			</div>
		</>

	);
}