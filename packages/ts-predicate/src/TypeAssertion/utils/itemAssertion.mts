

import type { Test } from "../../types/_index.mjs";

function itemAssertion<Type>(value: unknown, callable: Test<Type>): asserts value is Type
{
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- assertion return undefined
	const SUCCESS: boolean = callable(value) ?? true;

	if (!SUCCESS)
	{
		throw new Error("The value is incorrect.");
	}
}

export { itemAssertion };
