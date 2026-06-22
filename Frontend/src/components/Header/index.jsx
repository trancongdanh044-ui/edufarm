import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAPI } from "../../api/post";

function Header() {
	const [logo, setLogo] = useState({});
	useEffect(() => {
		const loadData = async () => {
			const data = await fetchAPI("/imagespage/admin/1");
			setLogo(data);
		}
		loadData();
	}, [])

	return (
		<>
			<header className="header">
				<div className="header__logo">
					<Link to='/'>
						<img src={logo.image_url} alt="logo" />
					</Link>
				</div>
				<ul className="header__inner">
					<li className="header__inner--item">
						<NavLink
							to="/" end
							className={({ isActive }) =>
								isActive ? "active" : ""
							}>Trang chủ</NavLink>
					</li>
					<li className="header__inner--item">
						<NavLink
							to="/news"
							className={({ isActive }) =>
								isActive ? "active" : ""
							}>Tin tức</NavLink>
					</li>
					<li className="header__inner-wrap">
						<NavLink
							to="/booking"
							className={({ isActive }) =>
								isActive ? "active" : ""
							}>Đặt lịch</NavLink>
					</li>
					<li className="header__inner-wrap">
						<NavLink
							to="/profile-client"
							className={({ isActive }) =>
								isActive ? "active" : ""
							}>Tài khoản của bạn</NavLink>
					</li>
				</ul>
				<div className="header__btn">
					<button className="header__btn--login">Đăng nhập</button>
					<button className="header__btn--register ">Đăng ký</button>
				</div>
				{/* <div className="header__btnx">
					<button className="header__btnx--logut">Đăng nhập</button>
				</div> */}
			</header>
		</>
	)
}

export default Header;