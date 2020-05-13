

            
  
let tlacitko = document.getElementById('tlacitko');
let correct = 0;

tlacitko.addEventListener('click', function() {
    let one = document.getElementById('first');
    let two = document.getElementById('two');
    let three = document.getElementById('three');
    let four = document.getElementById('four');
    let five = document.getElementById('five');
    let six = document.getElementById('six');
    let seven = document.getElementById('seven');
    let eight = document.getElementById('eight');
    let textt= document.getElementById('textt');
    
    correct=0;
    
    if(one.value === '3'){
        correct++;
        one.style.background='green';
    } else {
        one.style.background='red';
    }
    
    if(two.value === '2'){
        correct++;
        two.style.background='green';
    } else {
        two.style.background='red';
    }

    if(three.value === '3'){
        correct++;
        three.style.background='green';
    } else {
        three.style.background='red';
    }

    if(four.value === '4'){
        correct++;
        four.style.background='green';
    } else {
        four.style.background='red';
    }

    if(five.value === '1'){
        correct++;
        five.style.background='green';
    } else {
        five.style.background='red';
    }

    if(six.value === '3'){
        correct++;
        six.style.background='green';
    } else {
        six.style.background='red';
    }

    if(seven.value === '4'){
        correct++;
        seven.style.background='green';
    } else {
        seven.style.background='red';
    }

    if(eight.value === '1'){
        correct++;
        eight.style.background='green';
    } else {
        eight.style.background='red';
    }

    textt.innerHTML = 'Správně: ' + correct + ' / 8';
});
