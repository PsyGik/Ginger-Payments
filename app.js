angular.module('ginger', [])
    .factory('gingerFactory', ['$http', function($http) {
        return {
            getPayments: getPayments,
            getPaymentsForGinger: getPaymentsForGinger,
            addPayment: addPayment
        }

        function getPayments(serverURL, callback) {
            $http.get(serverURL + "?_sort=amount&_order=DESC&_limit=20").then(function success(resp) {
                callback(resp.data);
            }, function error(error) {
                alert("Error!!");
            });
        }

        function getPaymentsForGinger(serverURL) {
            return $http.get(serverURL + "?merchant=Ginger");
        }

        function addPayment(serverURL, data) {
            return $http.post("http://localhost:3000/payments", data)
        }
    }])
    .controller('gingerCtrl', ['$http', 'gingerFactory', function($http, gingerFactory) {

        var vm = this;
        vm.postData = { merchant: "", currency: "", amount: 0, method: "", status: "" };
        vm.serverURL = "http://localhost:3000/payments"; //Because not everyone has 3000 port empty


        /**
         * Function which does callback to get 20 highest payment amounts
         * @return {Function} [description]
         */
        vm.callback = function() {
            gingerFactory.getPayments(vm.serverURL, function(data) {
                console.log(data);
                $("#table").removeClass("hidden");
                vm.payment = data;

            })
        }

        /**
         * Function which has a promise, and gets merchant by name "Ginger"
         * @return {[type]} [description]
         */
        vm.promise = function() {
            gingerFactory.getPaymentsForGinger(vm.serverURL).then(function(resp) {
                console.log(resp.data);
                $("#table").removeClass("hidden");
                vm.payment = resp.data;
            })
        }

        vm.showPayment = function() {
            $("#payment-form-container").removeClass("hidden");
        }

        /**
         * Add Payments to server
         */
        vm.addPayment = function() {
            console.log(vm.postData);
            gingerFactory.addPayment(vm.serverURL, vm.postData).then(function success(data) {
                console.log(data);
                alert("Payment Successful");

            }, function error(error) {

            });
        }
    }]);
