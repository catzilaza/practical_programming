(()=>{
    
    //1.How Asynchronous code works in JavaScript
    console.log('กรณี 1.How Asynchronous code works in JavaScript');
    function simulateAsyncAPIwork(text, timeout){
        setTimeout(()=> console.log(text), timeout);
    }
    
    simulateAsyncAPIwork('กรณี 1: Start->Ariya', 10000);
    simulateAsyncAPIwork('กรณี 1: Duan', 5000);
    simulateAsyncAPIwork('กรณี 1: SomO ->End', 1000);
    

    console.log('กรณี 2.Callback and case of the CALLBACK HELL');
    //2. Callback
    function simulateAsyncAPIcallback(text, timeout, callback) {
        
        setTimeout(() => {
            console.log(text);

            if(callback) {
                callback();
            }
           
        }, timeout);
    }
    //This is the CALLBACK HELL    
    simulateAsyncAPIcallback('กรณี 2: Ariya', 10000, () => {
        simulateAsyncAPIcallback('กรณี 2: Duan', 5000, () => {
            simulateAsyncAPIcallback('กรณี 2: SomO', 1000, ()=> {
                // 1 สังเกตว่า ในฟังกชั่นในสุดนี้ callback เป็นฟังก์ชันเปล่า ในกรณีนี้ สามารถละได้ ไม่ต้องใส่ก็ได้ ก็จะได้เป็น simulateAsyncAPI('SomO', 100) แต่มีเงื่อนไขว่า จะต้องไปสร้าง if(callback) { callback();} ในตอนเริ่มต้นที่เรียกใช้ฟังก์ชัน callback ไม่งั้นจะเกิด ERROR ขึ้น
                // 2 สังเกตจะเห็นว่าตอนเรียกใช้ฟังก์ชัน simulateAsyncAPI จะเกิดการซ้อนกัน เรียกว่า  CALLBACK HELL

            })
        });
    });
    
    console.log('กรณี 3 Promise');
   //3. Promise
   function simulateAsyncAPIpromise(text, timeout) {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               if(text === 'D') return reject('Duan got Rejected');
               console.log(text);
               resolve();
           })
       }, timeout);
   }
   
   simulateAsyncAPIpromise('กรณี 3: resolve: Ariya', 5000)
    .then(() => {
        return simulateAsyncAPIpromise('กรณี 3: .then: Duan', 5000);
   })
    .then(() => {
        return simulateAsyncAPIpromise('กรณี 3: .then: SomO', 5000); 
    })
    .catch((error) => {
        console.error(error);
    });

    //4. Async Await
    console.log("กรณี 4 Async Await");
    function simulateAsyncAPIasyncawit(text, timeout) {
        return new Promise((resolve, reject)=> {
            setTimeout(()=> {
                if(text === 'D') return reject('Duan got rejected');
                console.log(text);
                resolve();
            }, timeout);
        });
    }

    async function run() {
        try {
        await simulateAsyncAPIasyncawit('กรณี 4: Ariya', 1000);
        await simulateAsyncAPIasyncawit('D', 1000);
        await simulateAsyncAPIasyncawit('กรณี 4: SomO', 1000);
        } catch (error) {
            console.error(error);
        }
    }

    run();

})();