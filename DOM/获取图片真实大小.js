function getRealImgSize(img) {
    var obj = {};
    if (typeof img.naturalWidth == "undefined"
        || typeof img.naturalHeight == "undefined") {// IE 6/7/8
        var i = new Image();
        i.src = myimage.src;
        obj["width"] = i.width;
        obj["height"] = i.height;
    } else {// 支持HTML5的浏览器
        obj["width"] = img.naturalWidth;
        obj["height"] = img.naturalHeight;
    }
    return obj;
}
var obj = getRealImgSize(document.getElementById("img1"));
console.log(obj);

// js 的 innerWidth 获取的是元素盒模型的实际渲染的宽度
// 要想获取图片的真实大小，可以使用 h5 提供的 naturalWidth


//异步加载图片
function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        const image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}