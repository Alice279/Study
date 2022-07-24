// 从对象创建map
const obj = {
    'name': 'alice',
    'age': 17
};
const map = new Map(Object.entries(obj));
console.log(map)

// 从 map 创建对象
const obj1 = Object.fromEntries(map);
const obj2 = Object.fromEntries(map.entries());
console.log(obj1);
console.log(obj2);
// 一样的，map 的默认遍历器是 entries