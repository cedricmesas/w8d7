// Fonctions recursives

function sum(num) {
    if(num == 1 ) {
        return 1;
    }
    return num + sum(num - 1);
}

console.log(sum(3));


// Fonction Timer

function timer(seconds) {
    if(seconds > 0) {
        console.log(seconds);
        timer(seconds - 1);    
    }
    else {
        console.log(seconds);
    }
}

timer(10);