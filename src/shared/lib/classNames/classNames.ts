type Mods = Record<string, string | boolean>

export function classNames(
	cls: string,
	mods: Mods = {},
	additional: string[] = []
): string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter((item) => {
				return Boolean(item[1])
			})
			.map((item) => item[0]),
	].join(' ')
}
