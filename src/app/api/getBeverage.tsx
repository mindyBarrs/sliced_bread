import { BEVERAGE_RECIPES } from "@/lib/urls.constants";

import { BeverageResponse } from "@/lib/types/response.types";

const transformDrinkData = async (data: any): Promise<BeverageResponse> => {
	const drink = await data.drinks[0];

	return {
		name: drink.strDrink,
		imageSrc: drink.strDrinkThumb,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum aliquet est, et viverra dui 
			egestas ac.Aliquam consequat enim vel tempor maximus.Aliquam luctus eros posuere ligula convallis 
			molestie.Pellentesque nec diam nisl.Vivamus ultrices turpis velit, sit amet euismod tellus porta in.
			Etiam malesuada ligula id mauris iaculis vulputate.Praesent finibus elit eget turpis elementum facilisis.
			Donec ullamcorper sed ligula ac imperdiet.Mauris non purus lorem.Donec ut metus bibendum, imperdiet urna 
			eu, dignissim erat.Vivamus porttitor sodales arcu quis luctus.Sed posuere porttitor tempor.Vestibulum 
			vel varius libero, nec porttitor ante.Integer leo justo, finibus et pharetra tempus, finibus nec lacus.`,
	};
};

export async function getBeverage() {
	const res = fetch(BEVERAGE_RECIPES);
	const data = await (await res).json();

	const beverageData = transformDrinkData(data);

	return beverageData;
}
