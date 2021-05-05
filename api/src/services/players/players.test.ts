import {
	createPlayer,
	deletePlayer,
	player,
	players,
	updatePlayer,
} from "./players";

describe(
	"players",
	() => {
		scenario(
			"returns all players",
			async (scenario) => {
				const result = await players();

				expect(result.length).toEqual(Object.keys(scenario.player).length);
			},
		);

		scenario(
			"returns a single player",
			async (scenario) => {
				const result = await player({id: scenario.player.one.id});

				expect(result).toEqual(scenario.player.one);
			},
		);

		scenario(
			"creates a player",
			async (scenario) => {
				const result = await createPlayer({
					input: {
						id: "String",
						updatedAt: "2021-05-03T17:35:16Z",
						handle: "String855646",
						name: "String1357611",
						slug: "String99573",
						height: "String",
						weight: "String",
					},
				});

				expect(result.id).toEqual("String");
				expect(result.updatedAt).toEqual("2021-05-03T17:35:16Z");
				expect(result.handle).toEqual("String855646");
				expect(result.name).toEqual("String1357611");
				expect(result.slug).toEqual("String99573");
				expect(result.height).toEqual("String");
				expect(result.weight).toEqual("String");
			},
		);

		scenario(
			"updates a player",
			async (scenario) => {
				const original = await player({id: scenario.player.one.id});
				const result = await updatePlayer({
					id: original.id,
					input: {id: "String2"},
				});

				expect(result.id).toEqual("String2");
			},
		);

		scenario(
			"deletes a player",
			async (scenario) => {
				const original = await deletePlayer({id: scenario.player.one.id});
				const result = await player({id: original.id});

				expect(result).toEqual(null);
			},
		);
	},
);
