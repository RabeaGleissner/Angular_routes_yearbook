 (function(){
  var app = angular.module('yearbook', ['ngRoute']);

  function ProjectsController($scope, $routeParams) {
    $scope.projects = projects;

    $scope.projects = projects.sort(function(){
      return .5 - Math.random();
    });

    
  }

  function GalleryController($scope, $routeParams) {
    $scope.students = students;

    $scope.students = students.sort(function(){
      return .5 - Math.random();
    });

    $scope.selectStudent = function(student){
      $scope.selectedStudent = student;
    };

    $scope.studentHoverImage = function(student){
      $scope.hoverStudent = student;
    };

    $scope.clearSelectedStudent = function() {
      $scope.selectedStudent = false;
    };

  }

  function TeachersController($scope, $routeParams) {

  }

  function TechnologyController($scope, $routeParams) {

  }


  app.config(
    function($routeProvider) {
      $routeProvider.
        when('/', {
        controller: GalleryController,
        templateUrl: 'templates/gallery.html'
      }).
        when('/projects', {
        controller: ProjectsController,
        templateUrl: 'templates/projects.html'
      }).
          when('/teachers', {
          controller: ProjectsController,
          templateUrl: 'templates/teachers.html'
        }).
            when('/technology', {
            controller: TechnologyController,
            templateUrl: 'templates/technology.html'
          }).
      otherwise({
        redirectTo: '/'
      });
    }
    );
  
  students = [{
    name: 'Nina',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    image: "http://placehold.it/150x150",
    hoverImage: "http://placebear.com/g/150/150"
  },
  {
    name: 'Tony',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    linkedin: "http://www.linkedin.com",
    image: "http://placehold.it/150x150",
    available: "yes",
    hoverImage: "http://placebear.com/g/150/150"
  },
  {
    name: 'Rabea',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    linkedin: "http://www.linkedin.com",
    available: "yes",
    image: "http://placehold.it/150x150",
    hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Andres',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    linkedin: "http://www.linkedin.com",
    available: "yes",
    image: "http://placehold.it/150x150",
    hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Joel',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    linkedin: "http://www.linkedin.com",
    available: "yes",
      image: "http://placehold.it/150x150",
      hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Julia',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    image: "http://placehold.it/150x150",
    linkedin: "http://www.linkedin.com",
    hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Lisa',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    linkedin: "http://www.linkedin.com",
    github: "http://www.github.com",
    image: "http://placehold.it/150x150",
    hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Mathieu',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    image: "http://placehold.it/150x150",
    hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Sophie',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    image: "http://placehold.it/150x150",
    hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Sadiq',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    image: "http://placehold.it/150x150",
    hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Sebastian',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    image: "http://placehold.it/150x150",
    hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Bruno',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    image: "http://placehold.it/150x150",
    hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Daniel',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    image: "http://placehold.it/150x150",
    available: "yes",
    hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Luke',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    image: "http://placehold.it/150x150",
    available: "yes",
    hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Neil',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    available: "yes",
    image: "http://placehold.it/150x150",
    hoverImage: "http://placebear.com/g/150/150"
  },{
    name: 'Ellie',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    github: "http://www.github.com",
    image: "http://placehold.it/150x150",
    hoverImage: "http://placebear.com/g/150/150"
  }
  ];

  projects = [{
    name: 'Tic Tac Toe XOXO',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
    URL: "http://www.heroku.com",
    screenshot: "http://placehold.it/150x150"
  },
  {
    name: 'Ideas Generator',
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
       URL: "http://www.heroku.com",
       screenshot: "http://placehold.it/150x150"
  },{
    name: 'Dog Dating App',
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
       URL: "http://www.heroku.com",
       screenshot: "http://placehold.it/150x150"
  },
  {
      name: 'Another cool App',
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
         URL: "http://www.heroku.com",
         screenshot: "http://placehold.it/150x150"
    },
    {
        name: 'Music app',
           description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
           URL: "http://www.heroku.com",
           screenshot: "http://placehold.it/150x150"
      },
  {
    name: 'Fitness App',
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem iste quo illo eaque cumque ipsum at repellendus molestiae soluta, natus accusantium aspernatur adipisci accusamus quia, reiciendis mollitia nobis eum.",
       URL: "http://www.heroku.com",
       screenshot: "http://placehold.it/150x150"
  }
  ];



})();