getCurrentPrice()

// GETTING DATA
let borsiElektriHind = 30
var days_prices = [];
// GETTING MARKET DATA
// GET CURRENT DAY PRICES
function getCurrentPrice(){
	fetch('https://dashboard.elering.ee/api/nps/price?start=2021-12-16T00%3A00%3A00.999Z&end=2021-12-16T23%3A59%3A59.999Z')
  	.then(response => response.json())
  	.then(data => {
		days_prices = data.data.ee
		refresh_data()
 	});
}

// GET A SPECIFIC HOURS PRICE
function getHourPrice(hour){
	return days_prices[hour-1].price
}