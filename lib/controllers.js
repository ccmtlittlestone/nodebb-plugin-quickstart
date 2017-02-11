'use strict';

var Controllers = {};

Controllers.renderAdminPage = function (req, res, next) {
	/*
		Make sure the route matches your path to template exactly.

		If your route was:
			myforum.com/some/complex/route/
		your template should be:
			templates/some/complex/route.tpl
		and you would render it like so:
			res.render('some/complex/route');
	*/
  console.log("adminpage will rend");
	res.render('admin/plugins/quickstart', {});
};
Controllers.renderPage = function(req, res, next){
	res.send("hello quickstart");
};
Controllers.categoriesPage = function(req, res, next){
	var settings = meta.settings.get('quickstart');
	res.render('plugins/categoriesPage',settings);
}

module.exports = Controllers;
