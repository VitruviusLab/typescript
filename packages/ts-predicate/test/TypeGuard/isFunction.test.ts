import { strictEqual } from "node:assert";

import { describe, it } from "node:test";

import { isFunction } from "../../src/TypeGuard/isFunction.js";

import { GroupType, getInvertedValues, getValues } from "../utils.js";

describe(
	"TypeGuard / isFunction",
	(): void =>
	{
		it(
			"should return true when given a function (arrow, regular, or constructor)",
			(): void =>
			{
				const VALUES: Array<unknown> = getValues(GroupType.FUNCTION_CLASS);

				for (const ITEM of VALUES)
				{
					const RESULT: unknown = isFunction(ITEM);

					strictEqual(RESULT, true);
				}
			}
		);

		it(
			"should return false when given anything else",
			(): void =>
			{
				const VALUES: Array<unknown> = getInvertedValues(GroupType.FUNCTION_CLASS);

				for (const ITEM of VALUES)
				{
					const RESULT: unknown = isFunction(ITEM);

					strictEqual(RESULT, false);
				}
			}
		);
	}
);