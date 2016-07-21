var number = 600851475143;

var highestPrime;
highestPrime = function(number)
{
	var lowFactor = 2;
	while(lowFactor * lowFactor <= number)
	{
		if (number % lowFactor === 0)
		{
			number /= lowFactor;
		}
		else
			lowFactor ++;
	}
	return number;
}
var prime = highestPrime(number);
console.log("The highest prime factor is " + prime);