
	/************************************* DH Start *************************************/
	var dhP = 65537;
	var dhG = 3;
			
	function dhValidateX() {
		
		var x = parseFloat($("#dhX").val(), 10);
		var maxX = (dhP-1);
		
		if(isNaN(x) || x<1 || x>maxX) {
			
			showMessage("Please enter a valid x between 1 and " + maxX + ".");
			return false;	
		}
		else {
			hideMessage();
			return true;
		}
	}
	
	function dhComputeX() {
		
		if(dhValidateX()) {
		
			var x = parseFloat($("#dhX").val(), 10);
			var cx = powMod(dhG, x, dhP);
			
			$("#dhCX").val(cx);
		}
	}
			
	function dhValidateY() {
		
		var y = parseFloat($("#dhY").val(), 10);
		var maxY = (dhP-1);
		
		if(isNaN(y) || y<1 || y>maxY) {
			
			showMessage("Please enter a valid y between 1 and " + maxY + ".");
			return false;	
		}
		else {
			hideMessage();
			return true;
		}
	}
	
	function dhComputeY() {
		
		if(dhValidateY()) {
			
			var y = parseFloat($("#dhY").val(), 10);
			var cy = powMod(dhG, y, dhP);
			
			$("#dhCY").val(cy);
		}
	}
			
	function dhValidateKY() {
		
		var cy = parseFloat($("#dhCY").val(), 10);
		
		if(isNaN(cy)) {
			
			showMessage("Please generate Y.");
			return false;	
		}
		else
			return dhValidateX();
	}
	
	function dhComputeKY() {
		
		if(dhValidateKY()) {
		
			var x = parseFloat($("#dhX").val(), 10);
			var cy = parseFloat($("#dhCY").val(), 10);
			var ky = powMod(cy, x, dhP);
			
			$("#dhKY").val(ky);
		}
	}
			
	function dhValidateKX() {
		
		var cx = parseFloat($("#dhCX").val(), 10);
		
		if(isNaN(cx)) {
			
			showMessage("Please generate X.");
			return false;	
		}
		else
			return dhValidateY();
	}
	
	function dhComputeKX() {
		
		if(dhValidateKX()) {
		
			var y = parseFloat($("#dhY").val(), 10);
			var cx = parseFloat($("#dhCX").val(), 10);
			var kx = powMod(cx, y, dhP);
			
			$("#dhKX").val(kx);
		}
	}
	/************************************* DH End *************************************/