import Activities from "../../components/Activites";
import Carousel from "../../components/Carousel";
import Contacts from "../../components/Contacts";
import Header from "../../components/Header/index";
import Introduction from "../../components/Introduction";
import News from "../../components/News";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";

function Home() {
	return (
		<>
			<Header></Header>
			<Carousel></Carousel>
			<Introduction></Introduction>
			<Activities></Activities>
			<Reviews></Reviews>
			<News></News>
			<Contacts></Contacts>
			<Footer></Footer>
		</>
	)
}

export default Home;