'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { CircularFilledAddition } from "@/app/ui/svgs/icons";

import styles from '@/app/ui/projects/navbar.module.css';



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

						<div>
							<button id="new_project_btn" className="flex-none h-10 w-full bg-gray-900 flex items-center justify-center text-2xl font-bold text-orange-500" onClick={
								() => {
									var addProjectContainer = document.getElementById('addProjectContainer');
									var addProjectButton = document.getElementById('new_project_btn');

									if (addProjectContainer?.classList.contains(styles.AddProject_Hidden)) {
										addProjectContainer.classList.remove(styles.AddProject_Hidden);
										addProjectContainer.classList.add(styles.AddProject);
									} else {
										addProjectContainer.classList.remove(styles.AddProject);
										addProjectContainer.classList.add(styles.AddProject_Hidden);
									}
								}
							
							}>
								< CircularFilledAddition color="rgb(249 115 22) " width={30} height={30} class_name="mr"/> New Prject
							</button>


							<div id="addProjectContainer" className={styles.AddProject_Hidden}>
								<div className="text-blue-300 py-2 px-2">

									<form id='newProjectForm' className="flex flex-col gap-2">
										<label htmlFor="projectName">Project Name</label>
										<input type="text" id="projectName" name="projectName" placeholder='Project Alpha' className='text-teal-900 w-full' required/>

										<label htmlFor="projectDescription">Project Description</label>
										<textarea id="projectDescription" name="projectDescription" placeholder='Project Alpha Descriptions ' className='text-teal-900 w-full' required></textarea>

										<label htmlFor="projectURL">Project URL</label>
										<input type="text" id="projectURL" name="projectURL" placeholder='https://github.com/' className='text-teal-900 w-full' required/>

										<button type="submit" className="bg-gray-950 text-blue-300 p-2 rounded-md w-full mb-2">Submit Project</button>
									</form>

									

								</div>

								

							</div>
						</div>

						
					
						
					
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

