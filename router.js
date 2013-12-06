function route(handle, pathname){

	console.log('----------');
	console.log(pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname]();
	}else{
		console.log('404');
	}
	console.log('----------');

}

exports.route = route;