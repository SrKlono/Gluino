import React, { useState } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router";
import toast from "react-hot-toast";
import api from "../lib/axios";

const CreatePage = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!title.trim() || !content.trim()) {
			toast.error("All field are required");
			return;
		}

		setLoading(true);

		try {
			await api.post("/notes", {
				title,
				content,
			});
			toast.success("Note created");
			navigate("/");
		} catch (error) {
      console.log("Error creating note ", error);
			toast.error("Failed to create note");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-base-300">
			<div className="container mx-auto px-4 py-8">
				<div className="max-w-2xl mx-auto">
					<Link to={"/"} className="btn btn-ghost mb-6">
						<ArrowLeftIcon className="size-5" />
						Back to Notes
					</Link>

					<div className="card bg-base-100 border dark-border">
						<div className="card-body">
							<h2 className="card-title text-2xl mb-4">
								Create New Note
							</h2>
							<form onSubmit={handleSubmit} className="fieldset">
								<label className="label">
									<span className="label-text">Title</span>
								</label>
								<input
									type="text"
									placeholder="Note Title"
									className="input mb-4 w-full"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>

								<label className="label">
									<span className="label-text">Content</span>
								</label>
								<textarea
									type="text"
									placeholder="Write your note here..."
									className="textarea h-32 mb-4 w-full"
									value={content}
									onChange={(e) => setContent(e.target.value)}
								/>

								<div className="card-actions justify-end">
									<button
										type="submit"
										className="btn btn-light text-base-300"
										disabled={loading}
									>
										{loading
											? "Creating..."
											: "Create Note"}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePage;
