angular.module("meanGames").controller("GamesController", GamesController);

function GamesController(GamesFactory) {
    const vm = this;
    vm.title = "MEAN Games";
    GamesFactory.getAllGames().then(function(response) {
        console.log(response);
        vm.games = response;

       // vm.games = response.data;
    });
}