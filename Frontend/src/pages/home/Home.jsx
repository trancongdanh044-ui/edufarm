import Activities from "../../components/Activites";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header/index";
import News from "../../components/News";

function Home() {
	return (
		<>
			<Header></Header>
			<Carousel></Carousel>
			<Activities></Activities>
			<News></News>
		</>
	)
}

export default Home;