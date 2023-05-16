
const ulElement = document.querySelector('ul');

for (let number = 0; number <= 100; number++){
    if(number % 15 === 0){
        console.log('FizzBuzz');
        const liElement = document.createElement('li');
        liElement.innerHTML = 'FizzBuzz ' + '( ' + number + ' )';
        ulElement.append(liElement);
    }
    else if (number % 3 == 0 ){
        console.log('Fizz');
        const liElement = document.createElement('li');
        liElement.innerHTML = 'Fizz ' + '( ' + number + ' )';
        ulElement.append(liElement);

    }
    else if(number % 5 === 0){
        console.log('Buzz');
        const liElement = document.createElement('li');
        liElement.innerHTML = 'Buzz ' + '( ' + number + ' )';
        ulElement.append(liElement);
    }
    else{
        console.log(number);
        const liElement = document.createElement('li');
        liElement.innerHTML = number;
        ulElement.append(liElement);
    }

}
