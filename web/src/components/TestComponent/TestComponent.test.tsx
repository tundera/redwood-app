import {render} from "@redwoodjs/testing";

import TestComponent from "./TestComponent";

describe(
	"TestComponent",
	() => {
		it(
			"renders successfully",
			() => {
				expect(() => {
					render(<TestComponent />);
				}).not.toThrow();
			},
		);
	},
);
