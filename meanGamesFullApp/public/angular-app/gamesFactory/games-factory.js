angular.module("meanGames").factory("GamesFactory", GamesFactory);

function GamesFactory($http) {
    return {
      
        getAllGames: getAll,
        getOneGame: getOne
    }

    function getAll() {
        return $http.get("/api/games")
            .then(complete)
            .catch(failed);
    }
    function getOne(id) {
        return $http.get("/api/games/" + id)
            .then(complete)
            .catch(failed)
    }

    function complete(response) {
      
        return response.data;
    }

    function failed(error) {
        return error.status.statusText;
    }
}