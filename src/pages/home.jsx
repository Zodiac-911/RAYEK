import "../styles/home.css";
import PostCard from "../components/post-card.jsx";
import userIMG1 from "../assets/user-img1.png";
// import postIMG1 from "../assets/post-img1.png";
import NewPostInput from "../components/new-post-input.jsx";
import usePocketBase from "../hooks/usePocketBase.js";
import { useQuery } from "@tanstack/react-query";

function getBiggestTimeAgo(date) {
	const now = new Date();
	const diffInYears = now.getFullYear() - date.getFullYear();
	if (diffInYears > 0) {
		return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
	}
	const diffInMonths = now.getMonth() - date.getMonth();
	if (diffInMonths > 0) {
		return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
	}
	const diffInDays = now.getDate() - date.getDate();
	if (diffInDays > 0) {
		return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
	}

	const diffInHours = now.getHours() - date.getHours();
	if (diffInHours > 0) {
		return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
	}

	const diffInMinutes = now.getMinutes() - date.getMinutes();
	if (diffInMinutes > 0) {
		return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
	}

	const diffInSeconds = now.getSeconds() - date.getSeconds();
	if (diffInSeconds > 5) {
		return `${diffInSeconds} second${diffInSeconds > 1 ? "s" : ""} ago`;
	}

	return "just now";
}

function getImageUrl(image, collection, id) {
	return `${
		import.meta.env.VITE_POCKETBASE_API_URL
	}/api/files/${collection}/${id}/${image}`; // ?thumb=100x300
}

function Home() {
	const { pb } = usePocketBase();

	const { isError, data, error, isLoading } = useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			try {
				// sleep for 1 seconds to simulate a delay
				await new Promise((resolve) => setTimeout(resolve, 1000));
				const resultList = await pb.collection("posts").getList(1, 50, {
					sort: "-created",
					expand: "user",
				});
				return resultList.items;
			} catch (err) {
				console.error("Error fetching posts:", err);
				throw err;
			}
		},
		// initialData: [],
	});

	return (
		<>
			<div className="content-container home-container">
				<NewPostInput />

				{isLoading && <div className="loader"></div>}
				{isError && <div className="error">Error: {error.message}</div>}
				{data && data.length > 0 ? (
					data.map((post) => (
						<PostCard
							key={post.id}
							userIMG={post.expand.user.avatar || userIMG1}
							username={
								post.expand.user.name || post.expand.user.id
							}
							postTime={getBiggestTimeAgo(new Date(post.created))}
							postText={post.post_text}
							postIMG={
								post.post_img
									? getImageUrl(post.post_img, "posts", post.id)
									: null
							}
							postRedFlags={0}
							postGreenFlags={0}
							postUserId={post.expand.user.id} // Pass postUserId for future use
              postComments={0}
              postId={post.id} // Pass postId for future use
						/>
					))
				) : (
					<div className="no-posts">No posts available</div>
				)}

				{/* 
        
        <PostCard
					userIMG={userIMG1}
					username={"John Doe"}
					postTime={"2 hours ago"}
					postText={
						"iPhone is the best phone in the world, there is no doubt about it."
					}
					postIMG={postIMG1}
					postRedFlags={5}
					postGreenFlags={10}
					postComments={15}
				/>
				<PostCard
					userIMG={userIMG1}
					username={"John Doe"}
					postTime={"2 hours ago"}
					postText={
						"iPhone is the best phone in the world, there is no doubt about it."
					}
					postRedFlags={5}
					postGreenFlags={10}
					postComments={15}
				/>{" "}
				<PostCard
					userIMG={userIMG1}
					username={"John Doe"}
					postTime={"2 hours ago"}
					postText={
						"iPhone is the best phone in the world, there is no doubt about it."
					}
					postIMG={postIMG1}
					postRedFlags={5}
					postGreenFlags={10}
					postComments={15}
				/>{" "}
				<PostCard
					userIMG={userIMG1}
					username={"John Doe"}
					postTime={"2 hours ago"}
					postText={
						"iPhone is the best phone in the world, there is no doubt about it."
					}
					postIMG={postIMG1}
					postRedFlags={5}
					postGreenFlags={10}
					postComments={15}
				/>
        */}
			</div>
		</>
	);
}
export default Home;
