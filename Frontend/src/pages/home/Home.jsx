import Activities from "../../components/Activites";
import Carousel from "../../components/Carousel";
import Introduction from "../../components/Introduction";
import News from "../../components/NewsComponent";
import Reviews from "../../components/Reviews";

function Home() {
	return (
		<>
			<Carousel></Carousel>
			<Introduction></Introduction>
			<Activities></Activities>
			<Reviews></Reviews>
			<News></News>
		</>
	)
}

export default Home;