import BlogCards from "./BlogCards/BlogCards";
import blogs from "./blogsList.js";
import "./blogs.css";

export default function Blogs() {
	return (
		<section className="resources-blogs">
			<h1 className="resources-blogs-heading">Blogs</h1>
			<p className="resources-blogs-subheading">
				Our blogs cut through the noise to give you the information you . Get a
				fresh perspective with our thought-provoking blog posts.
			</p>

			<div className="blogs-scroll">
				{blogs.map((blog) => (
					<BlogCards {...blog} />
				))}
			</div>

			<button>Read More</button>
		</section>
	);
}
