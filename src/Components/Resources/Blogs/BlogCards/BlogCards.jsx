import "./blogCards.css";
import Arrow from "../../../../Assets/Images/Arrow.png";

export default function BlogCards({ img, title, text }) {
	return (
		<section>
			<img src={img} alt="" />
			<img src={Arrow} alt="" />
			<div>
				<p>{title}</p>
				<p>{text}</p>
			</div>
		</section>
	);
}
