import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./resources.css";
import Hero from "../../Components/Resources/Hero/Hero";
import Blogs from "../../Components/Resources/Blogs/Blogs.jsx";

const Resources = () => {
	return (
		<>
			<Navbar />
			<main className="resources-main">
				<Hero />
				<Blogs />
			</main>
		</>
	);
};

export default Resources;
