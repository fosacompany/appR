angular
    .module('enterpriseApp')
    .factory('Enterprise', function($http) {
        var dataSource = 'http://92.222.75.102/entreprise/index.php/api/v1/entreprise';

        return {
            getEnterprises: function() {
                return $http.get(dataSource);
            },
            getEnterprise: function(enterpriseId) {
                return $http.get(dataSource + '/' + enterpriseId, {
                    params: {
                        id: enterpriseId
                    }
                });
            }
        }
    });
