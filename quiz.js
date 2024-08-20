const question1 = document.getElementById('question1')
const question2 = document.getElementById('question2')
const question3 = document.getElementById('question3')
const correct = document.getElementById('correct')
const wrong = document.getElementById('wrong')
const correctaudio = document.getElementById('correctaudio')
const wrongaudio = document.getElementById('wrongaudio')

const btn11 = document.getElementById('btn11');
const btn12 = document.getElementById('btn12');
const btn13 = document.getElementById('btn13');
const btn14 = document.getElementById('btn14');
const btn21 = document.getElementById('btn21');
const btn22 = document.getElementById('btn22');
const btn23 = document.getElementById('btn23');
const btn24 = document.getElementById('btn24');
const btn31 = document.getElementById('btn31');
const btn32 = document.getElementById('btn32');
const btn33 = document.getElementById('btn33');
const btn34 = document.getElementById('btn34');

let correctlength = 0;

btn11.addEventListener('click', () => {
    correct.style.display = 'block';
    document.getElementById('correctaudio').play();
    setTimeout(function() {
        correct.style.display = 'none';
    }, 1000);
    question1.style.display = 'none';
    setTimeout(function() {
        question2.style.display = 'block';
    }, 1000);
    correctlength++;
})
btn12.addEventListener('click', () => {
    document.getElementById('wrongaudio').play();
    wrong.style.display = 'block';
    setTimeout(function() {
        wrong.style.display = 'none';
    }, 1000);
    correctlength = 0;
})
btn13.addEventListener('click', () => {
    document.getElementById('wrongaudio').play();
    wrong.style.display = 'block';
    setTimeout(function() {
        wrong.style.display = 'none';
    }, 1000);
    correctlength = 0;
})
btn14.addEventListener('click', () => {
    document.getElementById('wrongaudio').play();
    wrong.style.display = 'block';
    setTimeout(function() {
        wrong.style.display = 'none';
    }, 1000);
    correctlength = 0;
})

btn21.addEventListener('click', () => {
    document.getElementById('wrongaudio').play();
    wrong.style.display = 'block';
    setTimeout(function() {
        wrong.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        question2.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        question1.style.display = 'block';
    }, 1000);
    correctlength = 0;
})
btn22.addEventListener('click', () => {
    correct.style.display = 'block';
    document.getElementById('correctaudio').play();
    setTimeout(function() {
        correct.style.display = 'none';
    }, 1000);
    question2.style.display = 'none';
    setTimeout(function() {
        question3.style.display = 'block';
    }, 1000);
    correctlength++;
})
btn23.addEventListener('click', () => {
    document.getElementById('wrongaudio').play();
    wrong.style.display = 'block';
    setTimeout(function() {
        wrong.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        question2.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        question1.style.display = 'block';
    }, 1000);
    correctlength = 0;
})
btn24.addEventListener('click', () => {
    document.getElementById('wrongaudio').play();
    wrong.style.display = 'block';
    setTimeout(function() {
        wrong.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        question2.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        question1.style.display = 'block';
    }, 1000);
    correctlength = 0;
})

btn31.addEventListener('click', () => {
    document.getElementById('wrongaudio').play();
    wrong.style.display = 'block';
    setTimeout(function() {
        wrong.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        question3.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        question1.style.display = 'block';
    }, 1000);
    correctlength = 0;
})
btn32.addEventListener('click', () => {
    document.getElementById('wrongaudio').play();
    wrong.style.display = 'block';
    setTimeout(function() {
        wrong.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        question3.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        question1.style.display = 'block';
    }, 1000);
    correctlength = 0;
})
btn33.addEventListener('click', () => {
    document.getElementById('correctaudio').play();
    correct.style.display = 'block';
    setTimeout(function() {
        correct.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        window.location.href = "success.html";
    }, 1000);
    correctlength++;
})
btn34.addEventListener('click', () => {
    document.getElementById('wrongaudio').play();
    wrong.style.display = 'block';
    setTimeout(function() {
        wrong.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        question3.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        question1.style.display = 'block';
    }, 1000);
    correctlength = 0;
})
