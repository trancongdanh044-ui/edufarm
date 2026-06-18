import { useEffect, useState } from "react";
import { fetchAPI } from "../../api/post";
import "./Introduction.scss";

function Introduction() {
	const [intro, setIntro] = useState({});

	useEffect(() => {
		const loadData = async () => {
			const data = await fetchAPI("/post/1");
			setIntro(data);
		}
		loadData();
	}, [])
	return (
		<>
			<div className="intro">
				<h3 className="intro__name">Về chúng tôi</h3>

				<div className="intro__detail">
					<p className="intro__detail--paragraph"
						dangerouslySetInnerHTML={{ __html: intro.content }}></p>
					<div className="intro__detail--img" style={{ backgroundImage: `url(${intro.thumbnail})` }}>
					</div>
				</div>
			</div>
		</>
	)
}

export default Introduction;