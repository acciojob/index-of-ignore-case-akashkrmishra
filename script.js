function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(s2=="")return -1;
	let newS1=s1.toLowerCase();
	let newS2=s2.toLowerCase();
	return newS1.indexOf(newS2);
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
