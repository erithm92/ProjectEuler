var totalsum = 0;

for (var i = 0; i<=1000; i ++)
{
	if(i % 3 ===0 || i % 5 ===0)
	{
		totalsum += i;
	}
}
console.log("The sum of all numbers divisable by 3 or 5 under 1000 is "
 + totalsum);

 //Output: The sum of all numbers divisable by 3 or 5 under 1000 is 234168