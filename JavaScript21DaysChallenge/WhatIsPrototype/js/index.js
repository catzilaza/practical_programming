(()=> {

    //1 Class vs Prototype
    class Person {

    }

    const ariya = new Person();
    console.log(ariya);

    //2 What's prototype?
    const name = 'Ariya';
    console.log(name.__proto__);

    const arr = [];
    console.log(arr.__proto__);

    //3 Prototype chain
    const nameDuan = 'Duan';
    console.log(nameDuan.__proto__);
    console.log(nameDuan.toLocaleString());

    //4 Extend a prototype
    const nameDeo = 'Deo';
    function sayHello(val) {
        console.log(`Hello ${val}`);

    }
    //String.prototype.sayHello = sayHello;
    console.log(name.__proto__);
    name.sayHello('World');

    /*
    function run() {


    }

    run();
    */
})();