const guess = document.querySelector('.guess');
let number = Math.floor(Math.random() * 100);


guess.addEventListener('click', () => {
    let input = document.querySelector('.input').value;
    let res = ['Correct', 'Too low', 'Too high', 'Please enter a valid number.'];

    if (input == number) { return alert(res[0]) }
    if (input < number) { return alert(res[1]) }
    if (input > number) { return alert(res[2]) }
    else {
        alert(res[3]);
    }

});