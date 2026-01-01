import { createClient } from "./lib/supabase/client";
import { Suspense } from "react";
import Image from "next/image";

async function DrillsData() {
	const supabase = await createClient();
	const { data: drills } = await supabase
		.from("Drill")
		.select("name, type, skillFocus, notes, difficulty, imageUrl")
		.eq("isPublic", true);
	console.log(drills, "drills");
	return (
		<div>
			{drills?.map((item, index) => (
				<div key={index}>
					<li>{item.name}
                        <ul>{item.notes}</ul>
                        {/* <Image src={item.imageUrl || ""} alt={item.name || "drill image"} width={200} height={200} /> */}
                    </li>
				</div>
			))}
		</div>
	);
}

export default function Drills() {
	return (
		<Suspense fallback={<div>Loading drills...</div>}>
			<DrillsData />
		</Suspense>
	);
}
