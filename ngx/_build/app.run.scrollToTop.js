(function () {

  /**
   * Scroll to top when state changes
   */
  function scrollToTopOnStateChange($document, $rootScope){

    // Update UI when state changes
    $rootScope.$on('$stateChangeSuccess', function () {

      // Jump to top
      $document.scrollTop(0, 0);
    });
  }

  // Inject dependencies
  scrollToTopOnStateChange.$inject = ['$document', '$rootScope'];

  // Export
  angular.module('app')
    .run(scrollToTopOnStateChange);

})();
