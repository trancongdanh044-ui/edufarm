import { useEffect, useState } from "react";
import "./Carousel.scss";
import { fetchAPI } from "../../api/post";

function Carousel() {

	const [images, setImages] = useState([]);
	const [current, setCurrent] = useState(0);

	// lấy dữ liệu ảnh
	useEffect(() => {
		const loadData = async () => {
			try {
				const data = await fetchAPI("/imagespage/admin?limit=3");
				setImages(data);
			} catch (error) {
				console.log(error);
			}
		};
		loadData();
	}, []);

	// tự động chuyển ảnh
	useEffect(() => {
		if (images.length === 0) return;
		const timer = setInterval(() => {
			setCurrent(prev => {
				if (prev >= images.length - 1) {
					return 0;
				}
				return prev + 1;
			});
		}, 4000);
		return () => clearInterval(timer);
	}, [images]);

	// nút next
	const nextSlide = () => {
		if (images.length === 0) return;
		setCurrent(prev =>
			prev >= images.length - 1 ? 0 : prev + 1
		);
	};

	// nút previous
	const prevSlide = () => {
		if (images.length === 0) return;
		setCurrent(prev =>
			prev === 0 ? images.length - 1 : prev - 1
		);
	};
	// chưa có ảnh
	if (images.length === 0) {
		return null;
	}

	return (
		<div className="carousel">
			<div className="carousel__track"
				style={{
					transform: `translateX(-${current * 100}%)`
				}}
			>
				{images.map((img) => (
					<div className="carousel__item" key={img.id}>
						<img src={img.image_url} alt="Edu Farm" />
					</div>
				))
				}
			</div>
			<button className="carousel__btn carousel__btn--left"
				onClick={prevSlide}
			>
				❮
			</button>
			<button className="carousel__btn carousel__btn--right"
				onClick={nextSlide}
			>
				❯
			</button>
			<div className="carousel__dots">
				{
					images.map((_, index) => (
						<span
							key={index}
							className={index === current ? "active" : ""}
							onClick={() => setCurrent(index)}>
						</span>
					))
				}
			</div>
		</div>
	);
}

export default Carousel;