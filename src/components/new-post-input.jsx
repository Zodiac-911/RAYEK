import { useRef, useState } from "react";
import { FaImage, FaTimes } from "react-icons/fa";
import "../styles/new-post-input.css";
import usePocketBase from "../hooks/usePocketBase";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function NewPostInput() {
	const { user, pb } = usePocketBase();
	const queryClient = useQueryClient();

	const textareaRef = useRef(null);
	const fileInputRef = useRef(null);
	const [imagePreview, setImagePreview] = useState(null);
	const [postText, setPostText] = useState("");
	// Auto-resize textarea
	const adjustTextareaHeight = () => {
		textareaRef.current.style.height = "auto";
		textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
	};

	// Handle image selection
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	// Remove selected image
	const removeImage = () => {
		setImagePreview(null);
		fileInputRef.current.value = "";
	};

	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit() {
		setIsSubmitting(true);

		try {
			// sleep for 1 seconds to simulate a delay
			await new Promise((resolve) => setTimeout(resolve, 1000));
			// handle submit
			const form = new FormData();
			form.append("post_text", postText);
			if (imagePreview) {
				form.append("post_img", fileInputRef.current.files[0]);
			}
			form.append("user", user.id);

			const post = await pb.collection("posts").create(form);
			console.log("Post created:", post);
			toast.success("Post created successfully!");
			queryClient.invalidateQueries(["posts"]);
		} catch (error) {
			console.error("Error creating post:", error);
			toast.error("Failed to create post: " + error.message);
		} finally {
			setIsSubmitting(false);
			setPostText("");
			setImagePreview(null);
			textareaRef.current.style.height = "auto"; // Reset height after submission
		}
	}

	return (
		<div className="newpost-container">
			<div className="post-content">
				<textarea
					disabled={isSubmitting}
					maxLength={400}
					ref={textareaRef}
					placeholder="Add Rayek!"
					className="auto-expand-textarea"
					rows={1}
					value={postText}
					onInput={adjustTextareaHeight}
					onChange={(e) => {
						if (e.target.value.length <= 400) {
							setPostText(e.target.value);
						}
					}}
				/>

				{imagePreview && (
					<div className="image-preview">
						<img src={imagePreview} alt="Preview" />
						<button
							className="remove-image"
							onClick={removeImage}
							disabled={isSubmitting}
						>
							<FaTimes />
						</button>
					</div>
				)}
			</div>

			<div className="post-actions">
				<div className="action-buttons">
					<button
						disabled={isSubmitting}
						type="button"
						className="image-upload-btn"
						onClick={() => fileInputRef.current.click()}
					>
						<FaImage size={30} />
						<input
							disabled={isSubmitting}
							type="file"
							ref={fileInputRef}
							onChange={handleImageChange}
							accept="image/*"
							style={{ display: "none" }}
						/>
					</button>
					<button
						className="publish-btn"
						onClick={handleSubmit}
						disabled={isSubmitting}
					>
						{isSubmitting && <span className="loader"></span>}
						Publish
					</button>
				</div>
			</div>
		</div>
	);
}

export default NewPostInput;
