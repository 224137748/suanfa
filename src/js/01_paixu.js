const testarr = [11,3,6,9,4,5,7,2,8]
// maopaoSort(testarr)

// 选择排序
function selectSort(arr) {
	
	// 选择数组中最小的值
	// 将最小值插入到数组的最前面
	// 然后递归第二个以后的数据项
	let minPos = 0
	for (let j = 0; j < arr.length; j++) {
		minPos = j
		for (let i = j+1;i<arr.length; i++ ) {
			if (arr[i] < arr[minPos]) {
				minPos = i
			}
		}
		let temp = arr[j]
		arr[j] = arr[minPos]
		arr[minPos] = temp
		console.log(j ,arr)
	}
	return arr
} 



// 冒泡排序
function maopaoSort(arr) {
	// 在一次循环中，对比前后的值，
	// 将最大的值放到当前循环数组的最后面
	
	for (let i = arr.length  ; i>0; i--) {
		for (var j = 0; j < i -1; j++) {
			if (arr[j] > arr[j+1] ) {
				let temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
			// console.log(arr )
		}
		// console.log('\n\n   ====')
	}
}

// 字符串： LC、整数反转
(function reverse (x) {
	let str = ''
	let yu = 0
	let a = x > 0
	x= Math.abs(x)
	while(x > 0) {
		yu = x % 10
		x = Math.floor(x/10)
		str += yu
	}
	console.log(str)
	if (+str > Math.pow(2, 31)) {
		str = 0
	}
	return a ? +str : -str
})(-123)

// 字符串： LC、字符串中的第一个唯一字符
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

let s1 = 'leetcode' // 0
let s2 = 'loveleetcode'	// 2
/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
	
	
	const map = new Map()
	for (let i = 0; i < s.length; i++) {
		if (!map.has(s[i])) {
			map.set(s[i], 1)
		} else {
			map.set(s[i], map.get(s[i])+1)
		}
	}
	for (let i = 0; i < s.length; i++) {
		if (map.get(s[i]) === 1) {
			return i
		}
	}
	
	return -1
	
}
// console.log(firstUniqChar('cc'))
// console.log(firstUniqChar(s1))
// console.log(firstUniqChar(s2))

/* =========================================================================================== */
// 字符串 LC、有效的字母异位词
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
	if (s.length !== t.length) return false
	function addMap(s) {
		const map = {}
		for (var i = 0; i < s.length; i++) {
			if (!map[s[i]]) {
				map[s[i]] = 1
			} else {
				map[s[i]]++
			}
		}
		return map
	}
	const mapS = addMap(s)
	const mapT = addMap(t)
	
	// console.log(mapS, mapT)
	
	for (let key in mapS ) {
		if (mapT[key] !== mapS[key]) {
			return false
		}
	}
	return true
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))