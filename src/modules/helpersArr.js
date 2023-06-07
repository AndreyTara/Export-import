
export function getValue(arr, key) {
	let resKey = []
	for (let j = 0; j < arr.length; j++) {
		resKey.push(arr[j][key])
	}
	return resKey
}

export function mapArr(arr, key) {
	let objKey = {};
	for (let i = 0; i < arr.length; i++) {
		objKey[arr[i][key]] = arr[i]
	}
	return objKey
}


