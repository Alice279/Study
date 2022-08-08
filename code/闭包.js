//
function fun(n, o) {
    console.log(o)
    return {
        fun: function(m) {
            return fun(m, n)
        }
    }
}
var a = fun(0) //undefined a = fun
a.fun(1) //fun(1, 0)  0
a.fun(2) //fun(2, 0)  0
a.fun(3) //fun(3, 0)  0

var b = fun(0).fun(1).fun(2).fun(3) 
//undefined   fun(0).fun(1) == fun(1, 0)
//0   fun(0).fun(1).fun(2) == fun(2, 1)
//1   fun(0).fun(1).fun(2).fun(3) == fun(3, 2)
//2

var c = fun(0).fun(1)
c.fun(2)
c.fun(3)
//undefined 0  c = fun(1, 0) = {fun: function}
//fun(2, 1)  1
//fun(3, 1)  1



function createIncrementor(start) {
    return function () {
      return start++;
    };
  }
  
  var inc = createIncrementor(5);
  
  inc() // 5
  inc() // 6
  inc() // 7 