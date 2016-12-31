var myApp=angular.module('starter.controllers', [])

myApp.factory('Data',function(){
    return{
        id:''
    };
});

myApp.factory('Search',function(){
    return{
        area:'',
        service:''
    };
});

myApp.controller('AppCtrl',['$scope','starter.UserService','$ionicModal','$timeout',function($scope,UserService,$ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
    
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal1 = modal;
  });

   //Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal1.hide();
  };

  // Open the login modal
  $scope.login = function () {

    $scope.modal1.show();
  };
    //create the signup modal that we will use later
  $ionicModal.fromTemplateUrl('templates/signup.html', {
      scope: $scope
  }).then(function (modal) {
      $scope.modal2 = modal;
  });


    //signup form
  $scope.signupForm = function () {
      
      $scope.modal2.show();

  }
  $scope.closesignup = function () {
      $scope.modal2.hide();

  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function (loginData) {
      console.log('Doing login', loginData);

      var ID = UserService.GetsUserID(loginData);
      if (ID != "") {
          $scope.Message = "you are logged in";
          $timeout(function() {
                  $scope.closeLogin();
                }, 2000);
              
      }

      else {
          $scope.Message = "please sign up";
      }
  }
  $scope.dosignup = function (signupdata) {
      UserService.insertUser(signupdata);
      $scope.Message = "Thanks for sign up.Now you can Sign In";
      $timeout(function () {
          $scope.closesignup();
      }, 1000);

  }
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
  //  $timeout(function() {
  //    $scope.closeLogin();
  //  }, 1000);
  //};
}])

myApp.controller('homeCtrl', function($scope,$stateParams,$http,$location,Search) {
  $scope.list_areas = {
        data: [{name: 'Malviya Nagar'},
               {name: 'Sanganer'},
               {name:'Bajaj Nagar'}]
    };
    $scope.list_services = {
        data: [{name: 'Dancing'},
               {name: 'Singing'},
               {name:'Yoga'},
               {name:'Gym'},
               {name:'Music'},
               {name:'Salon'},
               {name:'Club'}]
    };
    $scope.services = [
    { title: 'Have a hot/cold shower combo for a week', id: "Singing", img: '1.jpg' },
    { title: 'Create a Vision Board. Include some of these 52 ideas in it', id: "Dancing", img: '2.jpg' },
    { title: 'Plan your next week diary in detail', id: "Yoga", img: '3.jpg' },
    { title: 'Journal every day for one week', id: "Gym", img: '4.jpg' },
    { title: 'Wake up an hour earlier to work on your goals for a week', id: "Gym", img: '5.jpg' },
{ title: 'Pretend to be a tourist in your own city/town. Take random photographs.', id: "Gym", img: '6.jpg' },
{ title: 'Go away on a SPA break ALONE and leave your phone/laptop behind.', id: "Gym", img: '7.jpg' },
{ title: 'Have a home-made smoothie every day for a week', id: "Gym", img: '8.jpg' },
{ title: 'Meditate for 5 mins a day for a week. Dont worry about how you do it', id: "Gym", img: '9.jpg' },
{ title: 'Surprise your partner with a Bath Treat. If you dont have a partner, surprise yourself', id: "Gym", img: '10.jpg' },
{ title: 'Buy Bluetooth headphones and run around with loud music in your ears', id: "Gym", img: '11.jpg' },
{ title: 'Buy a canvas, throw some paint on it and call it your Signature Painting', id: "Gym", img: '12.jpg' },
{ title: 'Look through your wardrobe, get rid of clothes you havent worn in a year and donate them', id: "Gym", img: '13.jpg' },
{ title: 'Read a book a day for a week. What would be your first?', id: "Gym", img: '14.jpg' },
{ title: 'Bike ride around your local area with someone special', id: "Gym", img: '15.jpg' },
{ title: 'Organise family BBQ for no reason. Woahhh! ', id: "Gym", img: '16.jpg' },
{ title: 'Learn how to solve a Rubik`s Cube ~ I promise you, its easier than you think', id: "Gym", img: '17.jpg' },
{ title: 'Learn a card trick, perform it to your friends', id: "Gym", img: '18.jpg' },
{ title: 'Go skiing. Take the scary slopes and enjoy yourself!', id: "Gym", img: '19.jpg' },
{ title: 'Get re-connected with your favourite school teacher. Tell them about your life', id: "Gym", img: '20.jpg' },
{ title: 'Find someone to take under your wing and mentor them', id: "Gym", img: '21.jpg' },
{ title: 'Learn how to do a perfect push up and do 20 of them', id: "Gym", img: '22.jpg' },
{ title: 'Organise a picnic with your friends in your home city/town', id: "Gym", img: '23.jpg' },
{ title: 'Ride a segway for a day.', id: "Gym", img: '24.jpg' },
{ title: 'Make one of your rooms at home a workout room', id: "Gym", img: '25.jpg' },
{ title: 'Propose to a complete stranger as a joke', id: "Gym", img: '26.jpg' },
{ title: 'Try trampolining for a day', id: "Gym", img: '27.jpg' },
{ title: 'Buy a cheap ticket to a foreign country', id: "Gym", img: '28.jpg' },
{ title: 'Go to an inspirational event such as TED conference', id: "Gym", img: '29.jpg' },
{ title: 'Take a cocktail-making class. Get drunk', id: "Gym", img: '30.jpg' },
{ title: 'Go on a cruise for a week', id: "Gym", img: '31.jpg' },
{ title: 'Live in wilderness for a week. Ohh yeahh!', id: "Gym", img: '32.jpg' },
{ title: 'Fly in a helicopter for a day', id: "Gym", img: '33.jpg' },
{ title: 'Treat yourself to a professional photoshoot for no reason', id: "Gym", img: '34.jpg' },
{ title: 'Learn to do proper pull-ups', id: "Gym", img: '35.jpg' },
{ title: 'Go to a food festival for a day', id: "Gym", img: '36.jpg' },
{ title: 'Be blind for a day', id: "Gym", img: '37.jpg' },
{ title: 'Try to break a Guiness World Record', id: "Gym", img: '38.jpg' },
{ title: 'Dont care what others think/say for one week', id: "Gym", img: '39.jpg' },
{ title: 'Commit to 24 hour silence. Mmmmmmm', id: "Gym", img: '40.jpg' },

  ];
    $scope.selectedChoice = function(){
        // 
        var selectedArea = 'Malviya Nagar';
        var selectedService = 'Dancing';
        Search.area=selectedArea;
        Search.service=selectedService
        
        
        
        $http.post('php/search.php', {
        'area' : selectedArea,
        'service' : selectedService
        
    }).success(function(response){
          console.log(response);
         // $location.path('/app/thankyou')
      });
        $location.path('/app/aftersearch') 
    }
})

myApp.controller('aftersearchController', function($scope, $stateParams, $http,Search,Data) {
     $http.get('json/services'+Search.service+'.json',{}).success(function(data){
        Data.id=Search.service;
        $scope.lists=[];
        var k=0
        //console.log($stateParams.listId);
        console.log("hi");
        for(i=0;i<data.length;i++){
            if(data[i].area==Search.area){
                $scope.lists[k]=data[i];
                k=k+1;
                console.log($scope.lists);
                
            }
        }
            
    });
})

myApp.controller('ListingController', function($scope, $stateParams, $http,Data) {
    console.log($stateParams);
    Data.id=$stateParams.serviceId;
    console.log(Data.id);
    $http.get('json/services'+$stateParams.serviceId+'.json',{}).success(function(data){
			$scope.lists = data;
        console.log($scope.lists);
		});
})

myApp.controller('DetailController',function($scope, $stateParams, $http,Data){
    var x = Data.id;
    console.log(x);
     $http.get('json/services'+Data.id+'.json',{}).success(function(data){
         $scope.lists = data;
         
         for(i=0;i<data.length;i++){
             if(data[i].id==$stateParams.listId){
                 $scope.detail=data[i];
                 //$scope.demo=data[i].id;
                 break;
             }
         }
		});
    console.log("hello");
    $http.get('json/'+Data.id+'_services.json',{}).success(function(data){
        $scope.lists=data;
        $scope.tuples=[];
        var k=0
        console.log($stateParams.listId);
        console.log("hi");
        for(i=0;i<data.length;i++){
            if(data[i].id==$stateParams.listId){
                $scope.tuples[k]=data[i];
                k=k+1;
                console.log($scope.tuples);
                
            }
        }
    });
    
    $http.get('json/'+Data.id+'_gallery.json',{}).success(function(data){
        $scope.lists=data;
        var j=0;
        $scope.images=[];
        console.log($stateParams.listId);
        console.log("hi");
        for(i=0;i<data.length;i++){
            if(data[i].id==$stateParams.listId){
                $scope.images[j]=data[i];
                j=j+1;
                console.log($scope.images);
                
            }
        }
    });       
})
myApp.controller('OrderController',function($scope,$stateParams,Data,$http){
    $scope.message=$stateParams.serviceId;
    $http.get('json/'+Data.id+'_services.json',{}).success(function(data){
        $scope.lists=data;
        for(i=0;i<data.length;i++){
            if(data[i].service_id==$stateParams.serviceId){
                $scope.order=data[i];
                break;
            }
        }
    });
})
myApp.controller('PlaylistCtrl', function($scope, $stateParams) {
});
