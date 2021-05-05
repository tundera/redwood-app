import {Prisma} from "@prisma/client";
import {ResolverArgs} from "@redwoodjs/api/dist/types";
import {db} from "src/lib/db";

export function colorSchemes() {
	return db.colorScheme.findMany();
}

export function colorScheme({id}: Prisma.ColorSchemeWhereUniqueInput) {
	return db.colorScheme.findUnique({
		where: {id},
	});
}

interface CreateColorSchemeArgs {
	input: Prisma.ColorSchemeCreateInput;
}

export function createColorScheme({input}: CreateColorSchemeArgs) {
	return db.colorScheme.create({
		data: input,
	});
}

interface UpdateColorSchemeArgs extends Prisma.ColorSchemeWhereUniqueInput {
	input: Prisma.ColorSchemeUpdateInput;
}

export function updateColorScheme({id, input}: UpdateColorSchemeArgs) {
	return db.colorScheme.update({
		data: input,
		where: {id},
	});
}

export function deleteColorScheme(
	{
		id,
	}: Prisma.ColorSchemeWhereUniqueInput,
) {
	return db.colorScheme.delete({
		where: {id},
	});
}

export const ColorScheme = {
	Team: (
		_obj,
		{
			root,
		}: ResolverArgs<Prisma.ColorSchemeWhereUniqueInput>,
	) => db.colorScheme.findUnique({where: {id: root.id}}).Team(),
};
