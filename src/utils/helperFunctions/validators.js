export const sanitizeValue = (value, placeholder = "Not Available") => {
	if (
		value === null ||
		value === undefined ||
		(typeof value === "string" &&
			(value.trim().toLowerCase() === "n/a" ||
				value.trim() === "" ||
				value.trim() === "-"))
	) {
		return placeholder;
	}

	return value;
};
