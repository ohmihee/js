const pow = (a, b) => {
	if ( b == 1 ) { 
    	return a
    }
    console.log(a, b)
    return a * pow (a, b -1 );
};

console.log(pow(2, 3));