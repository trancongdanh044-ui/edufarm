import { useEffect, useState } from "react";
import "./Footer.scss";
import { fetchAPI } from "../../api/post";
import { MdEmail } from "react-icons/md";


function Footer() {
	const [infors, setInfors] = useState({});

	useEffect(() => {
		const loadData = async () =>{
			const data = await fetchAPI('/infors-page');
			setInfors(data);
		}

		loadData();
	}, [])
	return (
		<>
			<footer className="footer">
				<div className="footer__container">
					<div className="footer__about">
						<h3>Edu Farm</h3>
						<p>
							Trang trại giáo dục giúp trẻ em và gia đình
							trải nghiệm các hoạt động nông nghiệp thực tế.
						</p>
					</div>

					<div className="footer__links">
						<h4>Liên kết</h4>
						<ul>
							<li>Facebook: {infors.facebook}</li>
							<li>Messager: {infors.message}</li>
							<li>Zalo: {infors.zalo}</li>
							<li>Liên hệ: {infors.phone}</li>
						</ul>
					</div>

					<div className="footer__contact">
						<h4>Liên hệ</h4>
						<p>{infors.address}</p>
						<p>{infors.phone}</p>
						<p><MdEmail></MdEmail> edufarm@gmail.com</p>
					</div>
				</div>

				<div className="footer__bottom">
					© 2026 Edu Farm. All Rights Reserved.
				</div>
			</footer>
		</>
	);
}

export default Footer;