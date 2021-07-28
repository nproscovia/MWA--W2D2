angular.module("meanDishes").controller("DishesController", DishesController);

function DishesController(DishesFactory) {
    const vm = this;
    vm.title = "mean Dishes App";

    DishesFactory.getAllDishes()
                  .then(function(response) {
                      console.log(response);
        vm.dishes = response;
    });
}