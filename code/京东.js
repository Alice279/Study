// const async1 = async () => {
//     console.log('async1');
//     setTimeout(() => {
//         console.log('timer1')
//     }, 2000)
//     await new Promise(resolve => {
//         console.log('promise1')
//     })
//     console.log('async1 end')
//     return 'async1 success'
// }

// console.log('script start');


// async1().then(res => console.log(res));


// console.log('script end');


// Promise.resolve(1)
//     .then(2)
//     .then(Promise.resolve(3))
//     .catch(4)
//     .then(res => console.log(res))


// setTimeout(() => {
//     console.log('timer2')
// }, 1000)


// script start
// async1
// promise1
// script end
// 1
// timer2
// timer1


const obj = {
	a: 1,
	b: '2',
	c: [], // x
	d: {
		aa: 1,
		bb: '2',
		cc: '',  // x
		dd: {},  // x
		ee: 0,
	},
	e: {},  // x
}


// function filter(data) {
// 	for (const item of Object.keys(data)) {
//         const value = data[item];
//         // console.log(Object.prototype.toString(value))
//         if (value instanceof Object ) {
//             const nums = Object.keys(value)
//             if (nums.length == 0) delete data[item];
//             else {
//                 filter (value);
//             }
//         } else if (value instanceof Array ) {
//             if (value.length == 0) delete data[item];
//         } else {
//             if (value === '') delete data[item];
//         }
//     }
// }

filter(obj);

console.log(obj)

// // Object.prototype.toString() == ['object Object']
// // console.log(obj instanceof obj)