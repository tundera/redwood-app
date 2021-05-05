import {Prisma} from "@prisma/client";
import {ResolverArgs} from "@redwoodjs/api/dist/types";
import {db} from "src/lib/db";

export function players() {
	return db.player.findMany();
}

export function player({id}: Prisma.PlayerWhereUniqueInput) {
	return db.player.findUnique({
		where: {id},
	});
}

interface CreatePlayerArgs {
	input: Prisma.PlayerCreateInput;
}

export function createPlayer({input}: CreatePlayerArgs) {
	return db.player.create({
		data: input,
	});
}

interface UpdatePlayerArgs extends Prisma.PlayerWhereUniqueInput {
	input: Prisma.PlayerUpdateInput;
}

export function updatePlayer({id, input}: UpdatePlayerArgs) {
	return db.player.update({
		data: input,
		where: {id},
	});
}

export function deletePlayer({id}: Prisma.PlayerWhereUniqueInput) {
	return db.player.delete({
		where: {id},
	});
}

export const Player = {
	Team: (
		_obj,
		{
			root,
		}: ResolverArgs<Prisma.PlayerWhereUniqueInput>,
	) => db.player.findUnique({where: {id: root.id}}).Team(),
};
