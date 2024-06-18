// let myDiv = document.getElementsByTagName('div')[0];
// let myXbutton1= document.querySelector('button');
// let myYbutton1 = document.querySelector('input');
// let myh1 = document.querySelector('h1')[0];

// myDiv.addEventListener('mousemove', function (event) {
//     let x = event.clientX;
//     let y = event.clientY;

//     myXbutton1.innerText = 'x=' + x;
//     myYbutton1.value = 'Y=' + y;

//     if(y>250){
//         myDiv.style.backgroundColor = 'red';
//         myDiv.innerHTML = '<h1>nima gaplar</h1>';
        
//     }
// });

ScrollReveal({
     reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
}); 

ScrollReveal().reveal('.matin_title, .section_title', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.sec_01, .image', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.text_box', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.media_icone i', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.sec-02 .image .sec_03 .image', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.media_info li', { delay: 500, origin: 'left',  interval: 200  });


function sonlar(n) {
    let ixtiyoriyson = [];
    for (let i = 0; i < n; i++) {
        ixtiyoriyson.push(2 * i + 1);
    }
    return ixtiyoriyson;
}

console.log(sonlar(5));

function d(n) {
    let b = [];
    for (let i = 0; i < n; i++) {
        b.push(Math.pow(2, i));
    }
    return b;
}

console.log(d(5));

function hariplar (n, A, D) {
    let hariplar = [A];
    for (let i = 1; i < n; i++) {
        hariplar.push(hariplar[i - 1] + D);
    }
    return hariplar;
}

console.log(hariplar(5, 1, 2));

function generateFibonacciNumbers(n) {
    let fibonacci = [1, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci.slice(0, n); // Adjust in case n is less than 2
}

console.log(generateFibonacciNumbers(5)); // Example: [1, 1, 2, 3, 5]






