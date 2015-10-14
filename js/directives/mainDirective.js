app.directive('appDesc', function () {
	return	{
		restrict: 'E',
		scope: { app: '=info' },
		templateUrl: 'js/directives/appDesc.html'
	};
});