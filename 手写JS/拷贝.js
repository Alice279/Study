
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

objClone = JSON.parse(JSON.stringify(obj))




function deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
        for (let key of obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                objClone[key] = deepClone(obj[key]);
            } else {
                objClone[key] = obj[key];
            }
        }
    }
    return objClone;
}

objClone = JSON.parse(JSON.stringify(obj)); 


// 深浅拷贝的实现，深拷贝循环拷贝的解决
// 用 哈希表 检测当前对象是否已经拷贝过，是的话直接返回该对象
const obj = {};
let hashMap = new WeakMap();
function deepCloneCircle(obj, hashMap) {
    const objClone = Array.isArray(obj) ? [] : {};
    if (hashMap.has(obj)) return hashMap.get(obj);
    if (obj && typeof obj === 'object') {
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            hashMap.set(obj, objClone);
            obj.forEach(item => {
                objClone.push(deepCloneCircle(item, hashMap));
            })
        } else {
            hashMap.set(obj, objClone);
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    objClone[key] = deepCloneCircle(obj[key], hashMap);
                }
            }
        }
    } else {
        objClonev = obj;
    }
    return objClone;
}