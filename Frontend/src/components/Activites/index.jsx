import { useEffect } from "react";
import { useState } from "react";
import {fetchAPI} from "../../api/post";
import "./Activities.scss";

function Activities() {

	const [actList, setActList] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const data = await fetchAPI('/activities?limit=8offset=0');
			setActList(data);
		}

		loadData();
	}, [])

	return (
		<>
			<div className="act">
				<h3 className="act__name">Các hoạt động của chúng tôi</h3>
				<div className="act__box row">
					{actList.map((act, index) => (
						<div className="act__box--item col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
							<div className="img">
								<img className="img__spec" src={act.image_url} alt={act.name} />
							</div>
							<div className="desc">
								<h5 className="desc__nameact">{act.name}</h5>
								<p className="desc__detail">{act.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Activities;