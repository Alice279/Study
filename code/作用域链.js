

        ////////////////////////////////////
        var a = 20;

        function fn(b) {
            a = b + 10;
            return a;
        }
        fn(a);
        console.log(a); // 30

        ////////////////////////////////////
        let phrase = "Hello";

        if (true) {
            let user = "John";

            function sayHi() {
                console.log(`${phrase}, ${user}`);
            }
        }

        sayHi();  ////// Hello, John 
