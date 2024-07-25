"use client";
import { useEffect } from "react";
import TopCarousel from "./component/TopCarousel";
import Choice from "./component/Choice";
import Contact from "./component/Contact";
import("bootstrap");

export default function Home() {
	// useEffect(() => {
	// 	require("bootstrap/dist/js/bootstrap.bundle.min.js");
	// }, []);

	return (
		<>
			<main>
				<TopCarousel />
				<Choice />
				<Contact />
			</main>
		</>
	);
}
