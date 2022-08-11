
        //转为字符串
        var a = 213
        var b = a.toString()
        console.log(b)
        console.log(typeof(b))

        var c = String(a)
        console.log(c)
        console.log(typeof(c))

        var d = a + ''
        console.log(d)
        console.log(typeof(d))

        //转为数值类型
        var a = '123.5555555555'
        var b = Number(a)
        console.log(b)
        console.log(typeof(b))

        var c = parseInt(a)
        console.log(c)
        console.log(typeof(c))

        var d = parseFloat(a)
        console.log(d)
        console.log(typeof(d))

        var e = +a
        console.log(e)
        console.log(typeof(e))
