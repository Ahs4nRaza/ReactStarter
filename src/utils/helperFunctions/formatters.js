export const formatDateTime = (
	dateString,
	dateFormat = "DD/MM/YY",
	{showSeconds = false, showAmPm = false, showDate = true} = {}
) => {
	const dateObj = new Date(dateString);
	if (isNaN(dateObj)) {
		return {date: null, time: "Invalid Date"};
	}

	const options = {
		hour: "2-digit",
		minute: "2-digit",
		second: showSeconds ? "2-digit" : undefined,
		hour12: showAmPm,
	};

	const time = dateObj.toLocaleTimeString(undefined, options);

	let date = null;
	if (showDate) {
		const fullYear = dateObj.getFullYear();
		const parts = {
			YYYY: fullYear,
			YY: String(fullYear).slice(-2),
			MM: String(dateObj.getMonth() + 1).padStart(2, "0"),
			DD: String(dateObj.getDate()).padStart(2, "0"),
		};

		date = dateFormat.replace(/YYYY|YY|MM|DD/g, (match) => parts[match]);
	}

	return {date, time};
};
