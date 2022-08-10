
//浅拷贝 Object.assign  Object.create
let aa = {
    a: undefined, 
    func: function(){console.log(1)}, 
    b:2, 
    c: {x: 'xxx', xx: undefined},
    d: null,
    e: BigInt(100),
    f: Symbol('s')
}
let bb = Object.assign({}, aa) //  或者 let bb = {...aa}
aa.c.x = 111
console.log(bb)

let bb1 = Object.create(aa, Object.getOwnPropertyDescriptors(aa))
aa.c.x = 111
console.log(bb1)

//深拷贝
function deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
        for (let key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                objClone[key] = deepClone(obj[key]);
            } else {
                objClone[key] = obj[key]
            }
        }
    }
    return objClone;
}

// objClone = JSON.parse(JSON.stringify(obj))

function deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
        for (const key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                objClone[key] = deepClone(obj[key]);
            } else {
                objClone[key] = obj[key];
            }
        }
    }
    return objClone;
}


// 深浅拷贝的实现，深拷贝循环拷贝的解决
// 用 哈希表 检测当前对象是否已经拷贝过，是的话直接返回该对象
// 这个里面不用数组对象分的那么细，for...in 用于遍历对象，数组也是对象呀
const obj = {};
let hashMap = new WeakMap();

// let hashMap = new WeakMap();
function deepCloneCircle(obj, hashMap) {

    if (hashMap.has(obj)) {
        console.log('alice0', obj, hashMap.get(obj), hashMap)
        return hashMap.get(obj);
    }

    const objClone = Array.isArray(obj) ? [] : {};

    hashMap.set(obj, objClone);

    if (obj && typeof obj === 'object') {
        for (const key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                objClone[key] = deepCloneCircle(obj, hashMap);
            } else {
                objClone[key] = obj[key];
            }
        }
    }
    return objClone;
}

 
const arr1 = ['dd', 'ee', 'ff'];
for (const key in arr1) {
    console.log(key);
    console.log(arr1[key])
}

const obj1 = {
    a: '123',
    b: {
        c: '456',
        d: '789'
    }
}
obj1.e = obj1;

const res = deepCloneCircle(obj1, hashMap);

console.log('alice', res);