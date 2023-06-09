import type { Invalid } from "../index.mjs";

function createCopiesWithInvalidProperty<Type extends object>(valid_object: Required<Type>, mapping: Invalid<Type>): Array<Invalid<Type>>
{
	return Object.keys(valid_object).map(
		// @ts-expect-error: Key mapping
		(key: keyof Type): Invalid<Type> =>
		{
			const COPY: Invalid<Type> = { ...valid_object };

			COPY[key] = mapping[key];

			return COPY;
		}
	);
}

export { createCopiesWithInvalidProperty };
