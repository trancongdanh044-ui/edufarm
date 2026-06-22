import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../../../api/post";
import "./NewsDetail.scss";

function NewsDetail() {
	const { id } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			const data = await fetchAPI(`/post/${id}`);
			setPost(data);
		};

		loadData();
	}, [id]);

	if (!post) {
		return <h2>Đang tải...</h2>;
	}

	return (
		<>
			<div className="post">
				<h1 className="post__title">{post.title}</h1>
				<img className="post__thumbnail" src={post.thumbnail} alt={post.title} />
				<p className="post__content">{post.content}</p>
			</div>

		</>
	);
}

export default NewsDetail;