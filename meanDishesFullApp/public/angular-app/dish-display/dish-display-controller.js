angular.module("meanDishes").controller("DishController", DishController);


function DishController(DishesFactory, $routeParams) {

    const vm = this;
    const dishId = $routeParams.id;
    
    DishesFactory.getOneDish(dishId).then(function(dish) {
        
        vm.dish = dish;

    })

}