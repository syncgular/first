var connect = require("connect");

console.log("HELLO WORLD");

var ref = {
	name : "JS",
	ameth : function(){
		console.log("AMETH");
		console.log(this);
	}
};

function prepareOrder(orderno, mycallback) {
	setTimeout(function(){
		mycallback(orderno);
	}, 4000);
}

function planceOrder(orderno) {
	// console.log(this);
	console.log(orderno);
	
	prepareOrder(orderno, function(res){
		console.log("Order processed :: "+ orderno + " :: " + res);
	});
}


// placing order
planceOrder(1);
planceOrder(2);
planceOrder(3);
planceOrder(4);
planceOrder(5);