let bilmärke = ['audi', 'wolksvagen', 'citroen', 'volvo', 'saab', 'Alfa Romeo', 'Aston Martin', 'BMW', 'Chevrolet', 'Dacia', 'Fiat', 'Ford', 'Honda', 'Jeep', 'Kia', 'Lamborghini', 'Lexus', 'Mercedes-Benz', 'Mitsubishi', 'Peugeot', 'Rover', 'Škoda', 'Subaru', 'Toyota'];

//console.log(bilmärke.length); //hur många items det finns i array
bilmärke.push('Peugeot'); //adderar 'Peugeot' på slutet av array 
//console.log(bilmärke);
//console.log(bilmärke[16]); // kollar vilken bilmärk har 16:plats i arrey

//console.log(bilmärke.indexOf('BMW')); // kollar vilken plats i arry har BMW
bilmärke.pop();
//console.log(bilmärke);
bilmärke.push('Honda'); //adderar en elemnet på slutet av arrey
//console.log(bilmärke);
bilmärke.reverse('volvo');
//console.log(bilmärke);
bilmärke.shift();
//console.log(bilmärke);
console.log(bilmärke.slice(2, 7));
bilmärke.sort();
console.log(bilmärke); //sortear alfabetisk
bilmärke.splice(3, 6);
console.log(bilmärke);
bilmärke.unshift('Trabant');
console.log(bilmärke);
bilmärke.valueOf('audi');
console.log(bilmärke);