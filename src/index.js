module.exports = function towelSort (matrix) {
	if (matrix == undefined)
		return [];

	let resultarr = [], flag = 0;

	matrix.forEach(t => {
		if (flag == 1){
			resultarr = resultarr.concat(t.reverse());
			flag = 0;
		} else {
			resultarr = resultarr.concat(t);
			flag = 1;
		}
	});
	return resultarr;
}
