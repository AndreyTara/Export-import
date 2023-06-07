// import { getValue } from './modules/get_value.js';
// import mapArr from './modules/map.js';
// import { getValue, mapArr } from './modules/helpersArr.js';
// import { getValue, mapArr, p } from './modules/helpersArr2.js';

const numElement = 5;
const countlikes = { min: 15, max: 200 };
const countComments = { min: 2, max: 5 };
let countIdStart = 1;
const decsPictArr = [
	'Володарь', 'Верхи на драконі', 'Зникнув', 'Підтримка', 'Darth Vader', 'NLAW & чоловік', 'Зірковий корабель', 'Косміний Скафандр', 'Darth Maul', 'Кораблекрушение',
	"Підтримка", 'Плащ', 'Авто', 'Великий двигун', 'Протигаз', 'NLAW & жінка', 'Військо', 'Потяг', 'Робот', 'Уламки заводу',
	'Мікроавтобус', 'Променевий меч', 'В лабораторії', 'Велика голова', 'Космодром'];
const messageArr = [
	'Все відмінно!',
	'Загалом все непогано. Але не всі.',
	'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
	'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
	'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
	'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
];
const avatarArr = [
	'Олена', 'Василій', 'Василіса', 'Петро', 'Андрій', 'Сергій', 'Оксана', 'Родогаст', 'Родомир', 'Фродо', 'Елронд', 'Гендальф'
]

function getRamdomNum(rangeMin, rangeMax) {
	return parseFloat((Math.random() * (rangeMax - rangeMin) + rangeMin).toFixed(0));//toFixed - return 'num'
}

function incrementCountId() {
	countIdStart += 1;
	return countIdStart;
}

function getMessageArr() {
	return messageArr[getRamdomNum(0, messageArr.length - 1)];
}

function getCommentsArr() {
	const countRndComments = getRamdomNum(countComments.min, countComments.max);
	const tempCommentsArr = new Array(countRndComments).fill(null).map(() => {
		const curAvatarTemp = getRamdomNum(0, avatarArr.length - 1);
		return {
			id: incrementCountId(),
			avatar: `img/avatar-${curAvatarTemp}.svg`,
			name: avatarArr[curAvatarTemp],
			message: getMessageArr()
		}
	});
	return tempCommentsArr;
}

const arrPhoto = new Array(numElement).fill(null).map((_, i) => {
	return {
		id: incrementCountId(),
		url: `photos/${i + 1}.jpg`,
		descriptions: decsPictArr[i],
		likes: getRamdomNum(countlikes.min, countlikes.max),
		comments: getCommentsArr()
	}
})
console.log(arrPhoto);

// function getValue(arr, key) {
// 	let resKey = []
// 	for (let j = 0; j < arr.length; j++) {
// 		resKey.push(arr[j][key])
// 	}
// 	return resKey
// }
// console.log(getValue(arrPhoto, 'descriptions'));
// console.log(getValue(arrPhoto, 'id'));
// console.log(mapArr(arrPhoto, 'id'));
// console.log(p);