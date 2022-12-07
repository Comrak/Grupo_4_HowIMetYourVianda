function guestMiddleware(req,res,next){
	console.log(req.session)
	if (req.session.userLogged){
		return res.redirect('/users/profile')
	}
	next();
}

module.exports=guestMiddleware