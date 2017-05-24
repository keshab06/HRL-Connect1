/// <reference path="c:\users\k.chandra.mandal\documents\visual studio 2015\Projects\HRLConnect\HRLConnect\Scripts/angular.js" />
/// <reference path="C:\Users\k.chandra.mandal\Documents\Visual Studio 2015\Projects\HRLConnect\HRLConnect\Scripts/angular-route.js" />

//angular.module('HRLConnect', []);
"use strict";
 let HRLConnect = angular.module("HRLConnect", ["ngRoute"]);

HRLConnect.config(function ($routeProvider, $locationProvider) {
    $locationProvider
  .html5Mode(true);
 
    $routeProvider
    .when("/", {
        templateUrl: "Views/DashBoard/Dashboard.html",
        controller: 'DashboardCtrl'
    })
    .when("/dashboard", {
        templateUrl: "Views/DashBoard/Dashboard.html",
        controller: 'DashboardCtrl'
    })
    .when("/profilePage", {
        templateUrl: "Views/ProfileDetails/ProfileDetails.html",
        controller: 'ProfileDetailsCtrl'
        
    });
    
});

//HRLConnect.controller('ProfileDetailsCtrl', [              
//    '$scope',                              
//    function ProfileDetailsCtrl($scope) {        
//        $scope.mesg = 'HOME PAGE';
//    }                                                
//]); 
