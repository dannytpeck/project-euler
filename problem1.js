var isMult3 = function (number) {
    if (number % 3 === 0)
		return true;
	else
		return false;
}

var isMult5 = function (number) {
	if (number % 5 === 0)
		return true;
	else
		return false;
}

var sum = 0, limit = 1000;

for (i = 0; i < limit; i++) {
	if (isMult3(i) || isMult5(i)) {
		sum += i;
	}
}

console.log(sum);