import { isDefined as guard } from "../TypeGuard/isDefined.js";

import { hasNullableProperty } from "./hasNullableProperty.js";

import type { ObjectWithProperty } from "../Types/_index.js";

function hasProperty<O extends object, K extends string>(
	value: O,
	property: K,
): asserts value is ObjectWithProperty<O, K>
{
	hasNullableProperty<O, K>(value, property);

	if (!guard(value[property]))
	{
		throw new Error(`value has a property named "${property}", but it is undefined, null, or NaN`);
	}
}

export { hasProperty };
