function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for(let i = 0; i < theArray.length; i++){
		total = total + theArray[i]
	}

	return total;
}

sumTheElements([14,1,8,31])