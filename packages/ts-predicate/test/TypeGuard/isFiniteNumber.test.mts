import { strictEqual } from "node:assert";

import { describe, it } from "node:test";

import { TypeGuard } from "../../src/index.mjs";

import { BaseType, GroupType, getInvertedValues, getValues } from "../common/getValues.mjs";

describe(
	"TypeGuard.isFiniteNumber",
	(): void =>
	{
		it(
			"should return true when given a real number",
			(): void =>
			{
				const VALUES: Array<unknown> = getValues(GroupType.FINITE);

				for (const ITEM of VALUES)
				{
					const RESULT: unknown = TypeGuard.isFiniteNumber(ITEM);

					strictEqual(RESULT, true);
				}
			}
		);

		it(
			"should return false when given +/-Infinity",
			(): void =>
			{
				const VALUES: Array<unknown> = getValues(BaseType.INFINITY);

				for (const ITEM of VALUES)
				{
					const RESULT: unknown = TypeGuard.isFiniteNumber(ITEM);

					strictEqual(RESULT, false);
				}
			}
		);

		it(
			"should return false when given anything else",
			(): void =>
			{
				const VALUES: Array<unknown> = getInvertedValues(GroupType.NUMBER);

				for (const ITEM of VALUES)
				{
					const RESULT: unknown = TypeGuard.isFiniteNumber(ITEM);

					strictEqual(RESULT, false);
				}
			}
		);
	}
);
