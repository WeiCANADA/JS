
	/************************************* EG Start *************************************/
	var egP = 65537;
	var egG = 3;
	
	function egValidateY() {
		
		var x = parseInt($("#egX").val(), 10);
		
		if(isNaN(x)) {
			
			showMessage("Please enter a valid x between 1 and " + (egP-1) + ".");
			return false;	
		}
		else {
			hideMessage();
			return true;
		}
	}
	
	function egComputeY() {
	
		if(egValidateY()) {
			
			var x = parseFloat($("#egX").val(), 10);
			var y = powMod(egG, x, egP);
	
			$("#egY").val(y);
		}
	}
	
	function egValidateC1() {
		
		var r = parseFloat($("#egR").val(), 10);
		
		if(isNaN(r)) {
			
			showMessage("Please enter an r.");
			return false;	
		}
		else {
			hideMessage();
			return true;
		}
	}
	
	function egComputeC1() {
	
		if(egValidateC1()) {
		
			var r = parseFloat($("#egR").val(), 10);
			var c1 = powMod(egG, r, egP);
	
			$("#egC1").val(c1);
		}
	}
	
	function egValidateC2() {
		
		var y = parseFloat($("#egY").val(), 10);
		var m = parseFloat($("#egM").val(), 10);
		var r = parseFloat($("#egR").val(), 10);
		
		if(isNaN(y)) {
			
			showMessage("Please generate y.");
			return false;	
		}
		else if(isNaN(m)) {
			
			showMessage("Please enter an m.");
			return false;	
		}
		else if(isNaN(r)) {
			
			showMessage("Please enter an r.");
			return false;	
		}
		else {
			hideMessage();
			return true;
		}
	}
	
	function egComputeC2() {
	
		if(egValidateC2()) {
			
			var y = parseFloat($("#egY").val(), 10);
			var m = parseFloat($("#egM").val(), 10);
			var r = parseFloat($("#egR").val(), 10);
			var K = powMod(y, r, egP);
			var c2 = (m * K) % egP;
	
			$("#egC2").val(c2);
		}
	}
	
	function egValidateDecrypt() {
	
		var c1 = parseFloat($("#egC1").val(), 10);
		var c2 = parseFloat($("#egC2").val(), 10);
		
		if(isNaN(c1)) {
			
			showMessage("Please generate an c1.");
			return false;	
		}
		else if(isNaN(c2)) {
			
			showMessage("Please generate an c2.");
			return false;	
		}
		else {
			hideMessage();
			return true;
		}
	}
	
	function egDecryptM() {
	
		if(egValidateDecrypt()) {
			
			var x = parseFloat($("#egX").val(), 10);
			var c1 = parseFloat($("#egC1").val(), 10);
			var c2 = parseFloat($("#egC2").val(), 10);
			var K = powMod(c1, x, egP);
			var KI = generateEEA(egP, K);
			var dm = (c2 * KI) % egP;
	
			$("#egDecryptM").val(dm);
		}
	}
	/************************************* EG End *************************************/