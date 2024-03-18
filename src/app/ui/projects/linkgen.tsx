'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';



//read projects from projects.json
import projectsJSON from './projects.json';




export default function Projects() {
  	const pathname = usePathname();

	return (
		<>

			{projectsJSON.map((project) => {
				return (
					
					<Link 
						key={project.Name} 
						href={project.HREF} 
						className={clsx(
							'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-500 p-3 text-sm font-medium hover:bg-gray-700 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 text-orange-500',
							{
							  'bg-gray-800 text-blue-600': pathname === project.HREF,
							},
						  )}
					>
						<p className={clsx("text-2xl", {
							"font-bold": pathname === project.HREF,
						})}> {project.Name} </p>

						
					</Link>
					
				);
				
			})}
			
			<hr className="w-full border-t-2 border-gray-600 my-2" />
		</>
	);
}

