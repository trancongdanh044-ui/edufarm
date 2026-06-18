import Activities from "../../components/Activites";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header/index";
import Introduction from "../../components/Introduction";
import News from "../../components/News";

function Home() {
	return (
		<>
			<Header></Header>
			<Carousel></Carousel>
			<Introduction></Introduction>
			<Activities></Activities>
			<News></News>
		</>
	)
}

export default Home;