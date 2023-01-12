function display(data){
    console.log(data);
}
function printHello(){
    console.log('hello');
}
setTimeout(printHello, 0);//this will go to our CallBack Queue and print last
function blockFor300ms(){
    // blocks js thread for 300ms
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < 300);
}
const futureData = fetch('https://twitter.com/will/tweets/1');//this will trigger a XHR request and go to the Web API
futureData.then(display);//this will go to the Microtask Queue and print second
blockFor300ms();// this will delay our gobal call stack queue and delay synchronous code for 300 ms.
console.log('Me first!');// this will print first