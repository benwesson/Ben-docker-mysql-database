

import { prisma } from "@/lib/prisma";
export default async function Home() {
	type Post = {
		id: number;
		title: string;
		content: string | null;
		published: boolean;
		authorId: number;
	};
	async function fetchPosts() {
		try {
			const posts: Post[] = await prisma.post.findMany();
			console.log("Fetched posts:", posts);
			return posts;
		} catch (e) {
			console.error("Error fetching posts:", e);
			return [];
		}
		
	}

	const posts: Post[] = await fetchPosts();
	return (
		<div>
			{posts.map((post: Post) => (
				<div key={post.id}>{post.title}</div>
			))}
		</div>
	);
}
