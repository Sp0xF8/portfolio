import Link from "next/link";

import { useEffect, useState } from "react";

import { query } from "@/app/lib/dbconnect";

import { getProjects, getProjectById } from "@/app/lib/dbhandler";



export default async function Projects() {

	// const projects = await query('SELECT * FROM projects');
	// console.log(projects[0].projectName);

	// const project = await getProjectById(1);

	// console.log(project);

	



	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-6xl font-bold">Sp0xF8's Projects</h1>
			<Link href="/">Home</Link>

			
		</main>

	);
}