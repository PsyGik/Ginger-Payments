angular.module('ginger', [])
    .controller('gingerCtrl', ['$http', function($http) {

        var vm = this;
        vm.postData = { merchant: "", currency: "", amount: 0, method: "", status: "" };

        /**
         * Get payment with highest amount
         * @return {[type]} [description]
         */
        vm.doCallback = function() {
            console.log("Getting highest 20 payments");
            $http.get("http://localhost:3000/payments?_sort=amount&_order=DESC&_limit=20").then(function success(resp) {
                console.log(resp.data);
                $("#table").removeClass("hidden");
                vm.payment = resp.data;
            }, function error(error) {
                alert("Error!");
            });
        }
        /**
         * Get payment from merchant Ginger
         * @return {[type]} [description]
         */
        vm.doPromise = function() {
            console.log("Getting highest 20 payments");
            $http.get("http://localhost:3000/payments?merchant=Ginger").then(function success(resp) {
                console.log(resp.data);
                $("#table").removeClass("hidden");
                vm.payment = resp.data;
            }, function error(error) {
                alert("Error!");
            });
        }

        vm.showPayment = function() {
            $("#payment-form-container").removeClass("hidden");
        }

        /**
         * Add Payments to server
         */
        vm.addPayment = function() {
            console.log(vm.postData);
            $http.post("http://localhost:3000/payments", vm.postData).then(function success(data) {
                console.log(data);
                alert("Payment Successful");

            }, function error(error) {

            });
        }
    }]);