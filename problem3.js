var isPrime = function (number) {
	if ( number === 2 )
		return true;

	for ( i = 2; i < number; i++ ) {
		if ( number % i === 0 ) 
			return false;
	}
	return true;
}

var largestFactor = function (number) {
	var highest = 1;

	for ( i = 2; i < number; i++ ) {
		if ( number % i === 0 ) {
			highest = i;
		}
	}
	return highest;
}

var factorArray = function (number) {
	var array = [];

	for ( i = 3; i < number; i++ ) {
		if ( number % i === 0 ) {
			array.push(i); 
		}
	}
	return array;
}

var array = factorArray(600851475143), largest = 0;

for (index = 0; index < array.length; index++) {
	if (isPrime(array[index]))
		largest = array[index];
}

console.log(largest);