const heloers = {
	getValue: function (arr, key) {
		let resKey = []
		for (let j = 0; j < arr.length; j++) {
			resKey.push(arr[j][key])
		}
		return resKey
	},
	mapArr: function (arr, key) {
		let objKey = {};
		for (let i = 0; i < arr.length; i++) {
			objKey[arr[i][key]] = arr[i]
		}
		return objKey
	},
	p: 5566
}
export const getValue = heloers.getValue;
export const mapArr = heloers.mapArr;
export const p = heloers.p;