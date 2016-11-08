angular
    .module('enterpriseApp')
    .controller('EnterpriseController', function(Enterprise, $scope, $ionicLoading) {
        var _this = this;
        $ionicLoading.show();
        $scope.$on('$ionicView.enter', function(){
          Enterprise.getEnterprises().then(function(response){
              _this.enterprise = response.data;
          }).catch(function(response){
              console.log('Error:', response);
          }).finally(function(){
              $ionicLoading.hide();
          });
        });
    })
    .controller('EnterpriseDetailController', function(Enterprise, $stateParams) {
        var _this = this;
        Enterprise.getEnterprise($stateParams.enterpriseId).then(function(response){
            _this.enterprise = response.data;
        }).catch(function(response){
            console.log('Error:', response);
        });
    })
    .controller('EnterpriseAddController', function() {
        

    });
