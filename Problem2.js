var num1 = 1;
var num2 = 2;
var runningSum = 0;
while (num1 + num2 <= 4000000)
{
	var tempsum = num1 + num2;
	if( tempsum % 2 === 0)
		runningSum += tempsum;
	num1 = num2;
	num2 = tempsum;
	console.log("current seq " + tempsum);
}

console.log("Total sum of even numbers in Fibonacci Seq " + runningSum);

/* 
OUTPUT
current seq 3
current seq 5
current seq 8
current seq 13
current seq 21
current seq 34
current seq 55
current seq 89
current seq 144
current seq 233
current seq 377
current seq 610
current seq 987
current seq 1597
current seq 2584
current seq 4181
current seq 6765
current seq 10946
current seq 17711
current seq 28657
current seq 46368
current seq 75025
current seq 121393
current seq 196418
current seq 317811
current seq 514229
current seq 832040
current seq 1346269
current seq 2178309
current seq 3524578
Total sum of even numbers in Fibonacci Seq 4613730
*/

