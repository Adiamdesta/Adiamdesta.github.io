var x = 5; // var is used intentionally
function foo() {console.log(this.x);}
foo();
const obj = {x: 10, bar: function () {console.log(this.x);}};
console.log(obj.bar());
const bar2 = obj.bar;
console.log(bar2());
obj.foo = foo;
console.log(obj.foo());
function makeSizer(size) {
    document.body.style.fontSize = size + 'px';
    }
    
    window.onload=function (){
    document.getElementById('size-12').onclick = makeSizer(12);
    // document.getElementById('size-14').onclick = makeSizer(14);
    // document.getElementById('size-18').onclick = makeSizer(18);}