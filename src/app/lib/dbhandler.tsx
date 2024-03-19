import { query } from "@/app/lib/dbconnect";


export async function getProjects() {
	const projects = await query('SELECT * FROM projects');
	return projects;
}

export async function getProjectById(id: number) {
	const projects = await query('SELECT * FROM projects WHERE project_id = ?', [id]);
	return projects;
}


export async function insetProject(projectName: string, projectDescription: string, projectLink: string) {
	const projects = await query('INSERT INTO projects (projectName, projectDescription, projectLink) VALUES (?, ?, ?)', [projectName, projectDescription, projectLink]);
	return projects;
}


