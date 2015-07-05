var fibonacciEvenSum = function (max) {
	var first = 0, second = 1, sum = 0;

	for ( i = 0; i <= 1000; i++ ) {
		if ( i <= 1 )
			next = i;
		else {
			next = first + second;
			first = second;
			second = next;

			if ( next >= max )
				return sum;
			else if ( next % 2 === 0 )
				sum += next;
		}
	}
}

console.log(fibonacciEvenSum(4000000));