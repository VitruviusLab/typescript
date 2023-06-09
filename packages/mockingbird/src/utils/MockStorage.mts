import type { MockedDependency } from "../Type/MockedDependency.mjs";

class MockStorage
{
	private static Mocks: Record<string, MockedDependency> = {};

	public static Set(key: string, mock: MockedDependency): void
	{
		MockStorage.Mocks[key] = mock;
	}

	public static Get(key: string): MockedDependency
	{
		const RESULT: MockedDependency | undefined = MockStorage.Mocks[key];

		if (RESULT === undefined)
		{
			throw new Error(`No mock dependency associated to the key "${key}".`);
		}

		return RESULT;
	}

	public static Remove(key: string): void
	{
		// eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- For clean up only
		delete MockStorage.Mocks[key];
	}
}

export { MockStorage };
