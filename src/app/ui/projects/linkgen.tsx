'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';





//read projects from projects.json
import projectsJSON from './projects.json';

type PopulateNavProps = {
	projectInJson: any;
  };


const buildLink = (projectName: string, projectID: number) => {

	console.log(projectName);
	console.log(projectID);

	//replace spaces with hyphens
	projectName = projectName.replace(/\s+/g, '-').toLowerCase();


	const link = `/projects/${projectID}-${projectName}`;

	return link;

}


export const PopulateNav: React.FC<PopulateNavProps> = ({ projectInJson }) => {
  	const pathname = usePathname();


	const json = JSON.parse(JSON.stringify(projectInJson));



	return (
		<>

			{json.map((project: any) => {

				const link = buildLink(project.projectName, project.project_id);

				console.log(link);


				return (
					<>
					
						
					
						<Link 
							key={project.projectName} 
							href={link} 
							className={clsx(
								'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-900 p-3 text-sm font-medium hover:bg-gray-700 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 text-orange-500',
								{
								'bg-gray-800 text-blue-600': pathname === project.HREF,
								},
							)}
						>
							<p className={clsx("text-2xl", {
								"font-bold": pathname === project.HREF,
							})}> {project.projectName} </p>

							
						</Link>

					</>
					
				);
				
			})}
			
			<hr className="w-full border-t-2 border-gray-600 my-2" />
		</>
	);
}

