/*
//防抖
function debounce(fn, delay) {
    var timer
    return function () {
        var _this = this
        var args = arguments
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            fn.apply(_this, args)
        }, delay)
    }
}

//节流
function throttle(fn, delay) {
    var timer
    return function () {
        var _this = this
        var args = arguments
        if (timer) {
            return
        }
        timer = setTimeout(function() {
            fn.apply(_this, args)
            timer = null
        }, delay)
    }
}
*/
//防抖
var count = 1
var container = document.getElementById('container')

function getAction() {
    container.innerHTML = count++
}

function debounce(fnc, wait, immediate) {
    var timer, result
    var debounced = function () {
        var _this = this
        var args = arguments
        if (timer) {
            clearTimeout(timer)
        }
        if (immediate) {
            var callNow = !timer
            timer = setTimeout(function(){
                timer = null
            }, wait)
            if (callNow) {
                result = fnc.apply(_this, args)
            }
        }
        else {
            timer = setTimeout(function(){
                fnc.apply(_this, args)
            }, wait)
        }
        return result
    }

    debounced.cancle = function() {
        clearTimeout(timer)
        timer = null
    }

    return debounced

}

var setAction = debounce(getAction, 100, true)

container.onmousemove = setAction

document.getElementById('button').addEventListener('click', function(){
    setAction.cancle()
})



//节流
function throttle (fnc, wait) {
    var timer
    var previous = 0
    return function () {
        _this = this
        args = arguments
        if (!timer) {
            timer = setTimeout(function(){
                timer = null
                fnc.apply(_this, args)
            }, wait)
        }
    }
}

