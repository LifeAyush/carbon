import "./hero.css";
import resourcesimg from "../../../Assets/Images/resources-hero.png";

export default function Hero() {
	return (
		<section className="resources-hero">
			<img className="resources-hero-img" src={resourcesimg} alt="" />
			<div className="resources-overlay"></div>
			<div className="resources-content">
				<h1 className="resources-hero-heading">Get Expert Insights</h1>
				<p className="resources-hero-subheading">
					Fuel your curiosity, ignite your passion. Dive into our library
				</p>
				<p className="resources-hero-para">Blogs | E-Learning Modules</p>
			</div>
		</section>
	);
}
