let count = 0;
document.getElementById ("first").onclick = function () {
    count += 1;

    document.getElementById ("counter").innerHTML = count;
    
}

document.getElementById ("second").onclick = function () {
    count -= 1;

    document.getElementById ("counter").innerHTML = count;
    
}

document.getElementById ("third").onclick = function () {
    count = 0;

    document.getElementById ("counter").innerHTML = count;
    
}






    let num = 100;
    let intervalId;

    let button = document.getElementById('button');
    button.addEventListener('click',()=>{

    num=100;
    
        clearInterval(intervalId);
        function CountDown() {
        num--;
        document.getElementById('for').innerHTML =num;
        if (num <=0) {
            clearInterval(intervalId);

        }
    }
    let stop = document.getElementById('stop');
    stop.addEventListener('click',()=>{
        clearInterval(intervalId)
    })

intervalId=setInterval(CountDown , 1000 );

});


