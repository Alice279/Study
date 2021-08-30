var a = 10;
(function () {
    var a
	console.log(a)     //undefined
	a = 5
	console.log(window.a)  //10
    a = 20
	console.log(a)   //20
})()


var a = 123;
(function(){
  console.log(a)  //123
  a = 456   
}());
console.log(a) //456


(function(){
    var a = 456
}());
console.log(a) //error


(function(){
    a = 456
}());
console.log(a) //456
  

//////////////////////////
var name1 = "The Window"
var object1 = {
    name1 : "My Object",
    getNameFunc : function(){
        return function(){
            return this.name1
        }
    }
}
alert(object1.getNameFunc()())  // The Window


////////////////////////////
var name2 = "The Window"
var object2 = {
    name2 : "My Object",
    getNameFunc : function(){
        var that = this
        return function(){
            return that.name2
        }
    }
}
alert(object2.getNameFunc()())  // My Object
