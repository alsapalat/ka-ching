var ERR = {};

ERR.onError = (err) => {
	return {
		error: true,
		message: err
	}
}

ERR.hasValue = (body, items) => {
	var errs = [];

	for(var i = 0; i< items.length;i++){
		if(typeof body[items[i]] === "undefined")
			errs.push(items[i] + " field is required");
	}

	if(errs.length > 0)
		return errs;
	return true
}

module.exports = ERR;