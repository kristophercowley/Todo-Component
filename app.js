(function () {
    angular.module('my-faves', ['firebase'])
        .component('myFavesComponent', {
            templateUrl: 'templates/my-faves.html',
            controller:
            function Mine($firebaseArray) {
                var fc = this;
                var db = new Firebase('https://dazzling-torch-8526.firebaseio.com/');
                var favesRef = db.child('/favs');
                // fc.info.type = "all";

                fc.items = new $firebaseArray(favesRef)
                fc.addItem = function (i) {
                    var x = favesRef.child(i.type);
                    fc.items.$add(i);
                    fc.info = null;
                }
                
                fc.removeItem = function (i) {
                    fc.items.$remove(i);
                }
            }
        })



})()