//浅拷贝
function shallowCopy(src) {
    var dst = {}
    for (var prop of src) {
        if (src.hasOwnProperty(prop)) {
            dst[prop] = src[prop]
        }
    }
    return dst
}