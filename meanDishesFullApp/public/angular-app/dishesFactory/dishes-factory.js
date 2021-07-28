angular.module("meanDishes").factory("DishesFactory", DishesFactory);

function DishesFactory($http) {
    return {
        getAllDishes: getAll,
        //getOne: getOneDish
        getOneDish: getOne
    }

    function getAll() {
        return $http.get("/api/dishes")
            .then(complete)
            .catch(failed);
    }


    function getOne(id) {
        return $http.get("/api/dishes/" + id)
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