
        // 全局变量
        // 求数组里否符合要求的若干对象的某属性的平均值
        const watchList = [
            {
                "Title": "Inception",
                "Year": "2010",
                "Rated": "PG-13",
                "Released": "16 Jul 2010",
                "Runtime": "148 min",
                "Genre": "Action, Adventure, Crime",
                "Director": "Christopher Nolan",
                "Writer": "Christopher Nolan",
                "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
                "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                "Language": "English, Japanese, French",
                "Country": "USA, UK",
                "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                "Metascore": "74",
                "imdbRating": "8.8",
                "imdbVotes": "1,446,708",
                "imdbID": "tt1375666",
                "Type": "movie",
                "Response": "True"
            },
            {
                "Title": "Interstellar",
                "Year": "2014",
                "Rated": "PG-13",
                "Released": "07 Nov 2014",
                "Runtime": "169 min",
                "Genre": "Adventure, Drama, Sci-Fi",
                "Director": "Christopher Nolan",
                "Writer": "Jonathan Nolan, Christopher Nolan",
                "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                "Language": "English",
                "Country": "USA, UK",
                "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                "Metascore": "74",
                "imdbRating": "8.6",
                "imdbVotes": "910,366",
                "imdbID": "tt0816692",
                "Type": "movie",
                "Response": "True"
            },
            {
                "Title": "The Dark Knight",
                "Year": "2008",
                "Rated": "PG-13",
                "Released": "18 Jul 2008",
                "Runtime": "152 min",
                "Genre": "Action, Adventure, Crime",
                "Director": "Christopher Nolan",
                "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                "Language": "English, Mandarin",
                "Country": "USA, UK",
                "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                "Metascore": "82",
                "imdbRating": "9.0",
                "imdbVotes": "1,652,832",
                "imdbID": "tt0468569",
                "Type": "movie",
                "Response": "True"
            },
            {
                "Title": "Batman Begins",
                "Year": "2005",
                "Rated": "PG-13",
                "Released": "15 Jun 2005",
                "Runtime": "140 min",
                "Genre": "Action, Adventure",
                "Director": "Christopher Nolan",
                "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                "Language": "English, Urdu, Mandarin",
                "Country": "USA, UK",
                "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                "Metascore": "70",
                "imdbRating": "8.3",
                "imdbVotes": "972,584",
                "imdbID": "tt0372784",
                "Type": "movie",
                "Response": "True"
            },
            {
                "Title": "Avatar",
                "Year": "2009",
                "Rated": "PG-13",
                "Released": "18 Dec 2009",
                "Runtime": "162 min",
                "Genre": "Action, Adventure, Fantasy",
                "Director": "James Cameron",
                "Writer": "James Cameron",
                "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                "Language": "English, Spanish",
                "Country": "USA, UK",
                "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                "Metascore": "83",
                "imdbRating": "7.9",
                "imdbVotes": "876,575",
                "imdbID": "tt0499549",
                "Type": "movie",
                "Response": "True"
            }
        ];
        function getRating(watchList) {
            // 只修改这一行下面的代码
            let averageRating;
            let sum1 = watchList.filter(x => x["Director"] === 'Christopher Nolan').map(x => parseFloat(x["imdbRating"]))

            console.log(sum1)

            //复习一下类型转换，字符串转数字，前面有 + 号时，使用 + 或者 Number 不起作用
            let sum2 = sum1.reduce((sum, cur) => sum + cur, 0)

            console.log(sum2)

            averageRating = sum2 / sum1.length
            // 只修改这一行上面的代码
            return averageRating;
        }
        console.log(getRating(watchList));


        //返回正整数的平方 组成的数组，正则表达式学的不行啊！
        const squareList = arr => {
            // 只修改这一行下面的代码
            return arr.filter(x => /^[0-9]*[1-9][0-9]*$/.test(x)).map(x => x * x)
            // 只修改这一行上面的代码
        };
        const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
        console.log(squaredIntegers);


        //在不更改原始数组的前提下返回排序后的数组
        const globalArray = [5, 6, 3, 2, 9];
        function nonMutatingSort(arr) {
            // let newA = arr  会报错，就改变原始数组啦
            let newA = [].concat(arr)
            return newA.sort((a, b) => a - b)
            // concat() slice() 方法会返回新数组
        }
        nonMutatingSort(globalArray);


        //使用 split() 方法将字符串拆分为数组
        function splitify(str) {
            // 只修改这一行下面的代码
            return str.split(/\W/)
            // 只修改这一行上面的代码
        }
        splitify("Hello World,I-am code");


        // 只修改这一行下面的代码
        function urlSlug(title) {
            return title.split(' ').filter(x => x !== '')
            .map(x => x.toLowerCase())
            .join('-')
        }
        let ss = urlSlug(" Winter Is  Coming")
        console.log(ss)


        //
        const arr = ['ddd']
        let result  = arr.concat(['fff'])
        console.log(result)
