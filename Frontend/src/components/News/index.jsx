import { Link } from "react-router-dom";
import "./News.scss";
import { fetchAPI } from "../../api/post";
import { useEffect, useState } from "react";

function News() {

	const [postList, setPostList] = useState([]);

	const limit = 6;
	const offset = 0;

	useEffect(() => {
		const loadData = async () => {
			const data = await fetchAPI(
				`/post/admins?limit=${limit}&offset=${offset}`
			);

			setPostList(data);
		};

		loadData();
	}, []);

	return (
		<div className="news">
			<h3 className="news__title">
				Tin tức mới
			</h3>
			<div className="news__list">
				{postList.map((post) => (
					<div className="news-card" key={post.id}>
						<div className="news-card__image">
							<img
								src={post.thumbnail}
								alt={post.title}
							/>
						</div>
						<div className="news-card__content">
							<h5 className="news-card__title">
								{post.title}
							</h5>
							<p className="news-card__date">
								{post.created_at}
							</p>
							<Link
								className="news-card__link"
								to={`${post.id}`}
							>
								Xem thêm
							</Link>
						</div>
					</div>
				))}
			</div>
			<Link
				className="news__more"
				to="/"
			>
				Xem thêm
			</Link>
		</div>
	);
}

export default News;