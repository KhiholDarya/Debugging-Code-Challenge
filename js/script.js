
const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
	console.log(`${arr[i]}°C in ${i + 1} days`);
	}
};

printForecast(temp1);
printForecast(temp2);

