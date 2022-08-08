

        ////////////////////////////////////
        var a = 20;

        function fn(b) {
            a = b + 10;
            return a;
        }
        fn(a);
        console.log(a); // 20

        ////////////////////////////////////
        let phrase = "Hello";

        if (true) {
            let user = "John";

            function sayHi() {
                alert(`${phrase}, ${user}`);
            }
        }

        sayHi();  //////err
        ////因为sayHi()函数是在if里面的，if外部没有该函数
