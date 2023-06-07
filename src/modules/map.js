export default function map(arr, key) {
	let arrKey = {};
	for (let i = 0; i < arr.length; i++) {
		arrKey[arr[i][key]] = arr[i]
	}
	return arrKey
}

