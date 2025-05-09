import React from "react";

import FormContainer from "../components/Form/FormContainer";
import BeverageContainer from "../components/BeverageContainer/BeverageContainer";

import { getBeverage } from "./api/getBeverage";

export default async function Home() {
	const beverageData = await getBeverage();

	console.log(beverageData);

	return (
		<div
			className="font-sans grid grid-rows-[20px_1fr_20px] 
      items-center 
      justify-items-center 
      min-h-screen 
      p-8 
      pb-20 
      gap-16 "
		>
			<main
				className="flex flex-col gap-8 row-start-2 
        items-center sm:items-start"
			>
				<BeverageContainer beverageData={beverageData} />
				<FormContainer />
			</main>
			<footer
				className="row-start-3 flex gap-6 flex-wrap 
      items-center justify-center"
			></footer>
		</div>
	);
}
