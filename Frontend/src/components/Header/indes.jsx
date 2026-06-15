import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
	return (
		<>
			<header className="header">	
					<div className="header__logo">
						<Link to='/'>
							<img src="" alt="" />
						</Link>
					</div>
					<ul className="header__inner">
						<li className="header__inner--item">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? "active" : ""
								}>Về chúng tôi</NavLink>
						</li>
						<li className="header__inner-wrap">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? "active" : ""
								}>Đánh giá</NavLink>
						</li>
						<li className="header__inner-wrap">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? "active" : ""
								}>Đặt lịch</NavLink>
						</li>
						<li className="header__inner-wrap">
							<NavLink
								to="/"
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