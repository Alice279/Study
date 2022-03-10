
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




function deepClone (obj) {
    const objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
        for (const key of obj) {
            if ( obj[key] && typeof obj[key] === 'object') {
                objClone[key] = deepClone(obj[key]);
            } else {
                objClone[key] = obj[key];
            }
        }
    }
    return objClone;
}