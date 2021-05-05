import {render} from "@redwoodjs/testing";

import ColumnFeatures from "./ColumnFeatures";

describe(
	"ColumnFeatures",
	() => {
		it(
			"renders successfully",
			() => {
				expect(() => {
					render(<ColumnFeatures />);
				}).not.toThrow();
			},
		);
	},
);
