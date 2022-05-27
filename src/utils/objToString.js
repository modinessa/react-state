const KEYS_TO_IGNORE = ["viewState"];

 
export function objToString(obj,level = 0) {
	let objValue = "";
	const space = " ".repeat((level + 1) * 2);
	const closeSpace = " ".repeat(level * 2);

	if (Object.keys(obj).length === 0) {
		return objValue;
	}

	objValue += "{";
	for (const [key,value] of Object.entries(obj)) {
		if (value === "" || value === "none" || KEYS_TO_IGNORE.includes(key)) {
			continue;
		}
		let formattedValue = `"${value}"`;

		if (typeof value === "object") {
			formattedValue = objToString(value,level + 1);
		}
		if (Array.isArray(value)) {
			if (value.length === 0) {
				continue;
			}
			formattedValue = arrayToString(value,level + 1);
		}

		objValue += `\n${space}"${key}": ${formattedValue},`;
	}
	objValue = objValue.slice(0,-1);
	return `${objValue}\n${closeSpace}}`;
}

function arrayToString(arr,level = 0) {
	let arrString = "[";
	const closeSpace = " ".repeat(level * 2)
	const space = " ".repeat((level + 1) * 2);

	for (const value of arr) {
		let formattedValue = `"${value}"`;

		if (typeof value === Object) {
			formattedValue = objToString(value);
		}
		if (Array.isArray(value)) {
			if (value.length === 0) {
				continue;
			}
			formattedValue = arrayToString(value);
		}

		arrString += `\n${space}${formattedValue},`;
	}
	return `${arrString}\n${closeSpace}]`;
}
