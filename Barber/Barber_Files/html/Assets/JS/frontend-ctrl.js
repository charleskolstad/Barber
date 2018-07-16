angular.module("frontMod").controller("frontCtrl", function($scope, $filter, dataurl){   
    $scope.ImgIndex = 0;
    $scope.GalleryDisplay = {};
    
    $scope.home = { BarberImages: [
        {"image": "https://placeimg.com/350/250/animals", "date": "01/01/2018", "barber": "Mark"},
        {"image": "https://placeimg.com/350/250/arch", "date": "01/01/2018", "barber": "Mark"},
        {"image": "https://placeimg.com/350/250/animals", "date": "01/01/2018", "barber": "Mark"},
        {"image": "https://placeimg.com/350/250/arch", "date": "01/01/2018", "barber": "Mark"},
        {"image": "https://placeimg.com/350/250/tech/sepia", "date": "01/01/2018", "barber": "Luke"},
        {"image": "https://placeimg.com/350/250/people", "date": "01/01/2018", "barber": "Luke"},
        {"image": "https://placeimg.com/350/250/tech/sepia", "date": "01/01/2018", "barber": "Luke"},
        {"image": "https://placeimg.com/350/250/people", "date": "01/01/2018", "barber": "Luke"},
        {"image": "https://placeimg.com/350/250/tech", "date": "01/01/2018", "barber": "James"},
        {"image": "https://placeimg.com/350/250/tech/grayscale", "date": "01/01/2018", "barber": "James"},
        {"image": "https://placeimg.com/350/250/tech", "date": "01/01/2018", "barber": "James"},
        {"image": "https://placeimg.com/350/250/tech/grayscale", "date": "01/01/2018", "barber": "James"}
    ]};
    
    //image gallery functions
    $scope.OpenModal = function(index, gallery){
        $scope.ImgIndex = index;
        $scope.GalleryDisplay = gallery;
        document.getElementById('galModal').style.display = "block";
    }
    
    $scope.CloseModal = function(){
        document.getElementById('galModal').style.display = "none";
    }
    
    $scope.changeSlides = function(index){
        let newIndex = $scope.ImgIndex + index;
        
        if(newIndex <= 0)
            $scope.ImgIndex = 0;
        else if(newIndex > $scope.GalleryDisplay.length - 1)
            $scope.ImgIndex = $scope.GalleryDisplay.length - 1;
        else
            $scope.ImgIndex = newIndex;
    }
    
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            document.getElementById('galModal').style.display = "none";
        }
    };
    //end image gallery functions
});