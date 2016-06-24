var myApp = angular.module('myApp', ['ngRoute', 'ngMessages', ]);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'static/partials/logreg.html'
		})
		.when('/dashboard', {
			templateUrl: 'static/partials/dashboard.html'
		})
		.when('/poll/:id', {
			templateUrl: 'static/partials/poll.html'
		})
		.when('/create', {
			templateUrl: 'static/partials/newpoll.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})



