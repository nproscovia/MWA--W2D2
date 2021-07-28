angular.module("meanGames").directive("gameRating", GameRating);

function GameRating(){
    return{
        restrict:"E",
        templateUrl:"/angularjs-app/game-rating-directive/game-rating.html",
        bindToController:true,
        controller: "GameController",
        controllerAs:"vm"
    }
}