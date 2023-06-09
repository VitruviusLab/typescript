import { doesNotThrow, throws } from "assert";

import { describe, it } from "node:test";

import { TypeAssertion } from "../../src/index.mjs";

import { BaseType, getInvertedValues, getValues } from "../common/getValues.mjs";

import { testError } from "../common/testError.mjs";

describe(
	"TypeAssertion.isCallable",
	(): void =>
	{
		it(
			"should return when given an arrow function",
			(): void =>
			{
				const VALUES: Array<unknown> = getValues(BaseType.CALLABLE);

				for (const ITEM of VALUES)
				{
					const WRAPPER = (): void =>
					{
						TypeAssertion.isCallable(ITEM);
					};

					doesNotThrow(WRAPPER);
				}
			}
		);

		it(
			"should throw when given anything else",
			(): void =>
			{
				const VALUES: Array<unknown> = getInvertedValues(BaseType.CALLABLE);

				for (const ITEM of VALUES)
				{
					const WRAPPER = (): void =>
					{
						TypeAssertion.isCallable(ITEM);
					};

					throws(WRAPPER, testError);
				}
			}
		);
	}
);
