function printAvatar(){
	console.log("Avatar: PG-13");
}

function printChappie(){
	console.log("Chappie: R");
}

// include export statement when you want to access a function from another file
module.exports.avatar = printAvatar;