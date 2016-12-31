app.controller('mainController', function($scope, $timeout) {
    $scope.finalDate = new Date('2016', '02', '13');

    countdown.setLabels(
        ' millisegundos| segundo| minuto| hora| dia| semana| mes| ano| decade| century| millennium',
        ' millisegundos| segundos| minutos| horas| dias| semanas| meses| anos| decades| centuries| millennia',
        ' e ', ', ', '',
        function(n) {
            return n.toString();
        });

    $scope.onTimeout = function() {
        $scope.days = countdown($scope.finalDate, null).toString();
        mytimeout = $timeout($scope.onTimeout, 1000);
    };
    var mytimeout = $timeout($scope.onTimeout, 1000);

    $scope.showMessage = false;
    $scope.showMessageBox = function() {
        $scope.showMessage = true;
    };

});