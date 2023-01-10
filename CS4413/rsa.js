	
	/************************************* RSA Start *************************************/
	function rsaValidatePQ() {
		
		var p = parseInt($("#rsaP").val(), 10);
		var q = parseInt($("#rsaQ").val(), 10);
		
		if(isNaN(p) || isNaN(q)) {
			
			showMessage("Please generate P and Q.");
			return false;	
		}
		else {
			hideMessage();
			return true;
		}
	}
	
	function rsaGeneratePQ() {
	
		var p = randomPrime(1000, 5000);
		var q = randomPrime(1000, 5000);

		$("#rsaP").val(p);
		$("#rsaQ").val(q);
	}
	
	function rsaValidateN() {
		
		var n = parseInt($("#rsaN").val(), 10);
		
		if(isNaN(n)) {
			
			showMessage("Please generate n.");
			return false;	
		}
		else {
			hideMessage();
			return true;
		}
	}
	
	function rsaComputeN() {
		
		if(rsaValidatePQ()){
			
			var p = parseInt($("#rsaP").val(), 10);
			var q = parseInt($("#rsaQ").val(), 10);
			var n = p * q;
			
			$("#rsaN").val(n);
		}
	}
	
	function rsaComputeTotientPQ() {
		
		var p = parseInt($("#rsaP").val(), 10);
		var q = parseInt($("#rsaQ").val(), 10);
		var t = (p - 1) * (q - 1);
		
		return t;
	}
	
	function rsaValidateD() {
		
		if(rsaValidatePQ())				
			return rsaValidateE();
		else
			return false;
	}
	
	function rsaValidateE() {
		
		var t = rsaComputeTotientPQ();
		var e = parseInt($("#rsaE").val(), 10);
		
		if(isNaN(e) || e<1 || e>t) {
			showMessage("Please enter a valid e between 1 and " + t + ".");
			return false;	
		}
		else if(gcd(e, t) != 1){
			showMessage("Please enter another e between 1 and " + t + ".");
			return false;	
		}
		else {
			hideMessage();
			return true;
		}
	}
	
	function rsaComputeD() {
	
		if(rsaValidateD()) {
			
			var t = rsaComputeTotientPQ();
			var e = parseInt($("#rsaE").val(), 10);
			var d = generateEEA(t, e);
			
			$("#rsaD").val(d);
		}
	}
	
	function rsaValidateEncrypt() {
	
		var m = parseFloat($("#rsaM").val(), 10);
		var n = parseFloat($("#rsaN").val(), 10);
		
		if(isNaN(m)) {
			showMessage("Please enter a valid message m.");
			return false;	
		}
		else if(isNaN(n))
			return rsaValidateN();
		else
			return rsaValidateD();
	}
	
	function rsaEncrypt() {
		
		if(rsaValidateEncrypt()) {
			
			var m = parseFloat($("#rsaM").val(), 10);
			var e = parseFloat($("#rsaE").val(), 10);
			var n = parseFloat($("#rsaN").val(), 10);
			var c = powMod(m, e, n);
			
			$("#rsaC").val(c);
		}
	}
	
	function rsaValidateDecrypt() {
	
		var c = parseFloat($("#rsaC").val(), 10);
		var d = parseFloat($("#rsaD").val(), 10);
		
		if(isNaN(c)) {
			showMessage("Please generate c.");
			return false;	
		}
		else if(isNaN(d)) {
			showMessage("Please generate d.");
			return false;	
		}
		else
			return rsaValidateEncrypt();
	}
	
	function rsaDecrypt() {
		
		if(rsaValidateDecrypt()) {
			
			var c = parseFloat($("#rsaC").val(), 10);
			var d = parseFloat($("#rsaD").val(), 10);
			var n = parseFloat($("#rsaN").val(), 10);
			var md = powMod(c, d, n);

			$("#rsaMD").val(md);
		}
	}
	/************************************* RSA End *************************************/