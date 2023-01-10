
	/******************************* UI Start *******************************/
	function showTab(tab) {
		
		$(".tab").removeClass("selected");
		$(".tabContainer").hide();
		
		$(tab).addClass("selected");
		$("#"+$(tab).attr("id")+"Container").slideToggle("slow");
	}
	function showMessage(msg) {
		
		$("#message").html(msg);
		$("#message").find("tr:first").slideToggle("slow");
	}
	function hideMessage() {
		
		$("#message").html("");
		$("#message").find("tr:first").slideToggle("slow");
	}
	function clearTab(id) {
		
		$("#"+id).find("input:text").val("");
		hideMessage();
	}
	/******************************** UI End ********************************/
	
	
	
	/******************************* Common functions Start *******************************/
	function randomInt(min, max) {
		
		var range = max - min;
		
		return Math.round(Math.random()*range+min);
	}
	
	function randomPrime(min, max) {
		
		//version 0.9 will be a simple brute force algorithm		
		var primeNumber=0;
		var test=1;
		
		while(test>0) {
			
			primeNumber = randomInt(min, max);
			var factor = 5;
			var maxPrime = Math.floor(Math.sqrt(primeNumber));

			//test = 1 will indicate nonprime		
			test=0;	
	
			//check to see if divisible by 2 or 3		
			if((Math.floor(primeNumber/2)*2 == primeNumber) || (Math.floor(primeNumber/3)*3 == primeNumber)) {
				
				maxPrime=0;
				
				if((primeNumber != 2) && (primeNumber != 3)) {
					test = 1; //of course, 2 and 3 are actually prime numbers...
				}
			}
			while(factor < maxPrime) {
				
				if(Math.floor(primeNumber/factor) * factor == primeNumber) {
					
					test = 1;
				}
				
				factor = factor + 2;
				
				if(Math.floor(primeNumber/factor) * factor == primeNumber) {
					
					test = 1;
				}
				
				factor = factor + 4;
			}
		}
		
		return primeNumber;
	}
	
	function gcd(a, b) {
		
		if (b == 0) {
			return a;
		}
		else {
			return gcd(b, a % b)
		}
	}
	
	function generateEEA(a, b){
		
		// keeps track of the initial value of a.
		var a0 = a;
		// temporary variables
		var x = 1;
		var v = 1;
		var y = 0;
		var u = 0;
		var q;
		var r;
		var newu;
		var newv;
		var d = 0;
		
		while (b != 0) {
			
			q = Math.floor(a/b);
			r = a % b;
			a = b;
			b = r;
			newu = x - q*u
			newv = y - q*v
			x = u;
			y = v;
			u = newu;
			v = newv;
		}
		
		if (y > 0)
			d = y;
		else
			d = y + a0;
		
		return d;
	}
	
	function powMod(base, exp, modulus) {
		
		var accum = 1, i = 0, basepow2 = base;
		// Look at each bit of exp, low to high
		while ((exp>>i)>0) {
			// If the exponent bit of exp is 1 multiply by base^(2^i)
			if(((exp>>i) & 1) == 1) {
				accum = (accum*basepow2) % modulus;
			};
			// In any event compute base^(2^i) for next i value
			basepow2 = (basepow2 * basepow2) % modulus;
			i = i+1;
		};
		
		return accum;
	}
	/******************************* Common functions End *******************************/