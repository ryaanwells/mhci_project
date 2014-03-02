MHCI.controller("MainCtrl", function($scope, $timeout){
  
  $scope.books = [
    {img: "img/how_to_live.jpg", move: false, desc: "In here could be the back of the book or the first page.", open: false, opening: false, title: "How To Live"},
    {img: "img/and_then_theres_this.jpg", move: false, desc: "How stories live and die in viral culture.", open: false, opening: false, title: "And then there's this"},
    {img: "img/smothered_in_hugs.jpg", move: false, desc: "I don't think hugging the bear is a good idea.", open: false, opening: false, title:"Smothered in Hugs"},
    {img: "img/marvelage17.jpg", move: false, desc: "Inspired by comic book browsing", open: false, opening: false, title: "Captain America Annual"},
    {img: "img/marvelage5.jpg", move: false, desc: "Browsing comics usually involves flicking through a box, always drawing the book towards you", open: false, opening: false, title:"New X-Men"},
    {img: "img/marvelage41.jpg", move: false, desc: "This downward scroll could be categorised by the user, or used as a discover feed for new books", open: false, opening: false, title: "The Incredible Hulk and now... the Wolverine!"}
  ];

  $scope.detail = false;
  $scope.selected = null;

  var shouldCycle = false;

  $scope.next = function(){
    var book = $scope.books[$scope.books.length - 1];
    book.move = true;
    $timeout(function(){
      var book = $scope.books.pop();
      book.move = false;
      $scope.books.unshift(book);
    }, 1000);
  };

  $scope.open = function(){
    var book = $scope.books[$scope.books.length - 1];
    $scope.selected = book;
    book.open = true;
    book.opening = true;
    $scope.detail = true;
  };

  $scope.close = function(){
    var book = $scope.books[$scope.books.length -1];
    book.open = false;
    $timeout(function(){
      $scope.detail = false;
      book.opening = false;
    }, 1000);
  }

  $scope.cycle = function(){
    shouldCycle = !shouldCycle;
    cycle();
  };

  $scope.cancelCycle = function(){
    shouldCycle = false;
  };

  function cycle(){
    if (shouldCycle){
      $scope.next();
      $timeout(cycle, 3500);
    }
  }

  $scope.img = "img/how_to_live.jpg";
});
