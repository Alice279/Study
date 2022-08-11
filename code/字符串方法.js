
        let str = 'hello'
        function reverse(string) {
            return string.split('').reverse().join('')
        }
        // split() 方法不带参数时将整个语句分割为一整条
        // split() 方法参数为 '' 时将每个字符分割，包括空格
        // join() 方法不带参数时 返回每个元素加上逗号的字符串
        // join() 方法参数为 '' 时返回所有元素直接拼接的字符串
        let str2 = reverse(str)
        console.log(str2)


        //重复输出字符串
        function repeatStringNumTimes(str, num) {
            for (let i = 0; i < num; i++) {
                str += str
            }
            return str;
        }

        let result = repeatStringNumTimes("abc", 3);
        console.log(result)


        //截断字符串
        function truncateString(str, num) {
            if (str.length > num) {
                var result = str.slice(0, num)
                //本来用 let 定义的，但是会报错
                //let const 的作用范围是花括号之内
                result += '...'
            }
            else {
                return str
            }
            return result;
        }

        let a = truncateString("A-tisket a-tasket A green and yellow basket", 8);
        console.log(a)


        //按参数过滤数组
        function findElement(arr, func) {
            let results = arr.filter(func)
            return results[0]
        }
        //filter 函数如果一个也没有就返回 undefined

        let b = findElement([1, 5, 3, 7], num => num % 2 === 0);
        console.log(b)
