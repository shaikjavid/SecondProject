/**
 * 
 */
var app=angular.module('MyApplication',['ngRoute','regmodule','JobModule','loginapp','BlogModule','StudentJobModule','ngCookies']);

app.constant('REST_URI','http://localhost:9090/LetsConnectB/');

app.controller('HomeController',function($scope,$rootScope,$cookies,$location){
	/*$rootScope.Userrole="home";*/
	$rootScope.Userrole=$cookies.get('role');
	console.log($cookies.get('role'));
	var name='ANGULARDB1';
	$scope.name=name;
	console.log(name);
	this.logout=function()
	{
		alert("logout");
		$rootScope.Userrole="";
		$cookies.remove('role');
		$location.path("/")
	}
})


app.config(function($routeProvider)
{
	
	$routeProvider
	.when("/home",{
		templateUrl:'./userdata/Home.html',
		controller :'HomeController',
		controllerAs:'home'
	})
	
	.when("/",{
		templateUrl:'./userdata/Home.html',
		controller :'HomeController',
		controllerAs:'home'
	})
	.when("/contact",
			
	{
		templateUrl :'./userdata/Contact.html',
		controller :'HomeController',
		controllerAs:'home'
	})
		
	
	.when("/signup",
			
	{
		templateUrl :'./userdata/SignUp.html',
		controller : 'RegisterController',
		controllerAs:'regCtrl'
		
			
	})
		.when("/jobposting",
			
	{
		templateUrl :'./AdminData/JobPosting.html',
		controller : 'JobController',
		controllerAs:'jobCtrl'
		
			
	})
		.when("/jobs",
			
	{
		templateUrl :'./userdata/jobs.html',
		controller : 'StudentJobController',
		controllerAs:'stdJobCtrl'
		
			
	})
		.when("/blog",
			
	{
		templateUrl :'./userdata/blog.html',
		controller : 'BlogController',
		controllerAs:'blogCtrl'
		
			
	})
	
	
			

		.when("/allblog",
			
	{
		templateUrl :'./AdminData/blog.html',
		controller : 'BlogController',
		controllerAs:'blogCtrl'
		
			
	})
		.when("/applyjob",
			
	{
		templateUrl :'./userdata/applyjob.html',
		controller : 'StudentJobController',
		controllerAs:'stdJobCtrl'
		
			
	})
		
	}		

)