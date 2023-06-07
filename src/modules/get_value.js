export function getValue(arr, key) {
	let resKey = []
	for (let j = 0; j < arr.length; j++) {
		resKey.push(arr[j][key])
	}
	return resKey
}

