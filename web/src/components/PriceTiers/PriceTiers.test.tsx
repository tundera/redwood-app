import {render} from "@redwoodjs/testing";

import PriceTiers from "./PriceTiers";

describe(
	"PriceTiers",
	() => {
		it(
			"renders successfully",
			() => {
				expect(() => {
					render(<PriceTiers />);
				}).not.toThrow();
			},
		);
	},
);
