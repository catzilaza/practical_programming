(()=> {
    //เริ่มเขียนโค้ด
    //1 . Nan ข้อสังเกต Nan จะไม่มีค่าใดๆ ดังนั้น การใช้ก็ต้องระบุ Type ให้ชัดเจนเสมอ
    const result = 1 / 'hello';
    if(Number.isNaN(result)) { // เช่น ระบุ Type ด้วย Number.isNan() 
        console.log('Equal to Nan');
    }

    //2 . Type Coercion ข้อสังเกต JS จะมีการเปลี่ยน Type ให้อัตโนมัติ
    //    ดังนั้นการใช้จะต้องระบุ Type ให้ชัดเจน
    if(3 > 2 > 1) {
        console.log('Inside');
    }
    console.log( 2 - '1');
    console.log( 2 + Number.parseInt('1', 10)); //ระบุ Type ด้วย Number.parsInt() ฟังก์ชัน

    console.log(true + true);

    //3 . Interpreter & Compiler
    function getPerson() {
        return {
            name: 'Ariya'
        }; // อย่าลืมใส่ ; ต้องใส่ ; เสมอ มิเช่นนั้น ระบบ JS จะใส่ ; ให้อัตโนมัติ อาจเกิด Error ได้โดยไม่รู้ตัว
    }
    console.log(getPerson());

    //4 . Checking Object Type 
    //    จะต้องพ่วงการเงื่อนไขการเช็ค null ด้วยเสมอ เพราะ (อ่านว่า object){} === null
    const person = {};
    if(typeof person === 'object' && person !== null) {
        console.log('Yes, object');
    }


})();