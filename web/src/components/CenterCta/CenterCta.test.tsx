import {render} from "@redwoodjs/testing";

import CenterCta from "./CenterCta";

describe(
	"CenterCta",
	() => {
		it(
			"renders successfully",
			() => {
				expect(() => {
					render(<CenterCta />);
				}).not.toThrow();
			},
		);
	},
);
