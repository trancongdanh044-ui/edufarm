import { useEffect, useState } from "react";
import "./Reviews.scss";
import { fetchAPI } from "../../api/post";

function Reviews() {
	const [imgReview, setImgReview] = useState({});
	const [cusPostList, setCusPostList] = useState([]);
	const [curPage, setCurPage] = useState(1);

	const limit = 3;
	const offset = (curPage - 1) * limit;

	useEffect(() => {
		const loadImage = async () => {
			const data = await fetchAPI("/imagespage/admin/5");
			setImgReview(data);
		};

		loadImage();
	}, []);

	useEffect(() => {
		const loadReview = async () => {
			const data = await fetchAPI(
				`/post/customers?limit=${limit}&offset=${offset}`
			);

			setCusPostList(data);
		};

		loadReview();
	}, [curPage]);

	return (
		<div className="review">
			<h3 className="review__name">Đánh giá từ khách hàng</h3>
			<div className="review__detail">
				<div className="review__detail--img"
					style={{ backgroundImage: `url(${imgReview.image_url})` }}></div>
				<div className="review__detail--text">
					{cusPostList.map((post, index) => (
						<div className="cus" key={index}>
							<div className="cus__top">
								<div className="cus__avatar">
									<img className="cus__avatar--img"	src={imgReview.image_url} alt={imgReview.type} />
								</div>
								<div className="cus__comment">
									<p className="cus__comment--content">{post.content}</p>
									<h5 className="cus__comment--fullname">{post.full_name}</h5>
								</div>
							</div>
						</div>
					))}
					<div className="cus__navigation">
						<button onClick={() => setCurPage((prev) => Math.max(prev - 1, 1))} disabled={curPage === 1}>
							❮
						</button>
						<button onClick={() => setCurPage((prev) => prev + 1)}>
							❯
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Reviews;