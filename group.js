//definde
function main() {
	var age = request.getInteger("age") || 0;
	var group = "其他";
	if (age < 7){
		group = "儿童";
	}else if (age < 15){
		group = "青少年";
	}else if (age < 36){
		group = "青年";
	}else if (age < 61){
		group = "中年";
	}else{
		group = "老年";
	}

	return {
		group : group
	}
}

// invoke
main();