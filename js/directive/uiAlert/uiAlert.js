angular.module("ListaTelefonica").directive("uiAlert", function(){
    return{
        replace : true,
        restrict: "AE",
        templateUrl :  "js/directive/uiAlert/uiAlert.html",
        transclude:true,
        scope:{
            title : "@",
            error : "=condicao"
        }
    }
});
