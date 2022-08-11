
        //判断输出

        var obj = {
            '2': 3,
            '3': 4,
            'length': 2,
            'splice': Array.prototype.splice,
            'push': Array.prototype.push
        }
        obj.push(1)
        obj.push(2)
        console.log(obj)

        /*
        {
            2: 1,
            3: 2,
            length: 4,
            'splice': f splice(),
            'push': f push()
        }
        */
       // push 方法将值追加到数组中
       // push 方法具有通用性，和 call apply 一起使用时可应用在类数组对象上
       // push 方法根据 length 属性来决定从哪里开始插入给定的值
       // 如果 length 不能被转成一个数值，则从索引 0 开始插入
       // 如果根本没有 length 则创建它并从 0 开始
