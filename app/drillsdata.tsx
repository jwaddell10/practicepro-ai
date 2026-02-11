"use client";

import { createClient } from "./lib/supabase/client";
import { Suspense } from "react";
import { FormEvent } from "react";
// import Image from "next/image";

function DrillsData() {
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(event.currentTarget, "event curr target");
		const formData = new FormData(event.currentTarget);
		// console.log(formData, "formdata");
		const response = await fetch(`/api/practice`, {
			method: "POST",
			body: formData,
		});
		const data = await response.json();
		console.log(data, "response from API");
	};
	const supabase = createClient();
	async function getDrills() {
		const { data: drills } = await supabase
			.from("Drill")
			.select("name, type, skillFocus, notes, difficulty, imageUrl")
			.eq("isPublic", true);
	}
	return (
		<form onSubmit={handleSubmit}>
			{/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
			<input type="text" name="name" />
			<button type="submit">Submit</button>
		</form>
	);
}

export default function Drills() {
	return <DrillsData />;
}
