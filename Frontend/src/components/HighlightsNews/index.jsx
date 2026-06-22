import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAPI } from "../../api/post";
import { IoMdSearch } from "react-icons/io";
import "./HighlightsNews.scss";

function HighlightsNews() {
	const [postList, setPostList] = useState([]);
	const [limit, setLimit] = useState(4);

	useEffect(() => {
		const loadData = async () => {
			const data = await fetchAPI(
				`/post/admins?limit=${limit}&offset=0`
			);

			setPostList(data || []);
		};

		loadData();
	}, [limit]);

	const handleClick = () => {
		setLimit(prev => prev + 3);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	// Chưa có dữ liệu
	if (!postList.length) {
		return <div>Đang tải dữ liệu...</div>;
	}

	const hpost = postList[0];
	const otherPosts = postList.slice(1);

	return (
		<>
			<div className="hnews">
				<h3 className="hnews__name">Tin tức nổi bật</h3>
				<div className="hnews__wrap">
					<div className="hnews__wrap--inner">
						<Link to={`/news/${hpost.id}`} className="hpost">
							<div className="hpost__image">
								<img className="hpost__image--thumbnail" src={hpost.thumbnail} alt={hpost.title} />
							</div>
							<h4 className="hpost__name">{hpost.title}</h4>
							<h5 className="hpost__summary">{hpost.summary}</h5>
							<p className="hpost__created">{hpost.created_at}</p>
						</Link>
					</div>
					<div className="hnews__wrap--box">
						<div className="bar">
							<h3 className="bar__name">Tìm kiếm bài viết</h3>
							<form action="" className="bar__search" onSubmit={handleSubmit}>
								<input type="text" className="bar__search--in" />
								<button type="submit" className="bar__search--btn"><IoMdSearch></IoMdSearch></button>
							</form>
						</div>
						<div className="otherpost">
							{otherPosts.map((post, index) =>(
								<Link className="otherpost__detail" to={`/news/${post.id}`} key={index}>
									<div className="otherpost__detail--image">
										<img src={post.thumbnail} alt={post.title} />
									</div>
									<h4 className="otherpost__detail--title">{post.title}</h4>
									<p className="otherpost__detail--created">{post.created_at}</p>
								</Link>
							))}
						</div>
						<button className="more" onClick={handleClick}>Xem thêm</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default HighlightsNews;