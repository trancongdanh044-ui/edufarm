import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "./Contacts.scss";

function Contacts() {
	return (
		<>
			<div className="contact">
				<ul className="contact__list">
					<li className="contact__list--item">
						<a href="#">
					<FaFacebook></FaFacebook></a></li>
					<li className="contact__list--item">
						<a href="#">
							<SiZalo></SiZalo>
						</a>
					</li>
					<li className="contact__list--item">
						<a href="#">
							<FaFacebookMessenger></FaFacebookMessenger>
						</a>
					</li>
					<li className="contact__list--item">
						<a href="">
							<FaPhoneAlt></FaPhoneAlt>
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Contacts;