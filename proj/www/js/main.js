MHCI.controller("MainCtrl", function($scope, $timeout){
  $scope.message = "hello";
  $scope.books = [
    {img: "img/how_to_live.jpg", move: false},
    {img: "img/and_then_theres_this.jpg", move: false},
    {img: "img/smothered_in_hugs.jpg", move: false}
  ];

  $scope.move = function(){
    var book = $scope.books[$scope.books.length - 1];
    book.move = true;
    $timeout(function(){
      var book = $scope.books.pop();
      book.move = false;
      $scope.books.unshift(book);
    }, 1000);
  }

  $scope.img = "img/how_to_live.jpg";
});
