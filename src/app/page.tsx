import Image from "next/image";
import styles from '@/app/ui/home.module.css';

import { oswald, inter } from "@/app/ui/fonts";
import Link from "next/link";




export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-6xl font-bold">Sp0xF8's Portfolio</h1>
			<p className={oswald.className}>A collection of projects and blog posts.</p>


			<Image src="/profile.jpg" alt="Next.js logo" width={600} height={600} />

			<Link href="/projects"> Projects</Link>

			<div className={styles.shape} />
		</main>
	);
}
