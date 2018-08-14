var selectedIndex;
var galleryImages;
var columnCount = 1;

//add array images to gallery
function genImages(element,index) {
  var imageHtml = `
    <div class="galleryContainer">
      <img class="image" src="images/${element}" arrayid=${index}>
    </div>
  `;
  if (columnCount === 1){
    $('.column1').append(imageHtml);
    columnCount = 2;
  } else if (columnCount === 2){
    $('.column2').append(imageHtml);
    columnCount = 3;
  } else if (columnCount === 3){
    $('.column3').append(imageHtml);
    columnCount = 1;
  }

//get the pathname to determine which images should be in the array
var currentPath = window.location.pathname;
if (currentPath.includes('people.html')){
 galleryImages = [
   'people1.jpg',
   'people2.jpg',
   'people3.jpg',
   'people4.jpg',
   'people5.jpg',
   'people6.jpg',
   'people7.jpg',
   'people8.jpg',
   'people9.jpg',
   'people10.jpg'
 ];
} else if (currentPath.includes('lifestyle.html')){
  galleryImages = [
    'lifestyle1.jpg',
    'lifestyle2.jpg',
    'lifestyle3.jpg',
    'lifestyle4.jpg',
    'lifestyle5.jpg'
  ];
} else if (currentPath.includes('live.html')){
  galleryImages = [
    'live1.jpg',
    'live2.jpg',
    'live3.jpg',
    'live4.jpg',
    'live5.jpg',
    'live6.jpg',
    'live7.jpg',
    'live8.jpg',
    'live9.jpg',
    'live10.jpg',
    'live11.jpg',
    'live12.jpg',
    'live13.jpg',
    'live14.jpg',
    'live15.jpg',
    'live16.jpg',
    'live17.jpg',
    'live18.jpg',
    'live19.jpg',
    'live20.jpg',
    'live21.jpg',
    'live22.jpg',
    'live23.jpg',
    'live24.jpg',
    'live25.jpg',
    'live26.jpg'
  ];
} else {
 galleryImages = [
   'featured1.jpg',
   'featured2.jpg',
   'featured3.jpg',
   'featured4.jpg',
   'featured5.jpg',
   'featured6.jpg',
   'featured7.jpg',
   'featured8.jpg',
   'featured9.jpg',
   'featured10.jpg',
   'featured11.jpg',
   'featured12.jpg'
 ];
}
galleryImages.forEach(genImages);

//display modal
$('.image').click(function (){
  $('.lightbox').removeClass('hidden');
  $('body').addClass('modalOn');
  var selectedIndexString = $(this).attr('arrayid');
  selectedIndex = parseInt(selectedIndexString,10);
  var selectedImage = galleryImages[selectedIndex];
  var newHtml = `<img src="images/${selectedImage}">`;
  $('.fullImage').html(newHtml);
  });

//close modal
$('.close').click(function (){
  $('.lightbox').addClass('hidden');
  $('body').removeClass('modalOn');
});

function nextImage(){
  selectedIndex = selectedIndex + 1;

  if (selectedIndex > galleryImages.length - 1) {
    selectedIndex = 0;
  }

  var selectedImage = galleryImages[selectedIndex];
  var newHtml = `<img src="images/${selectedImage}">`;
  $('.fullImage').html(newHtml);
}

function previousImage() {
  selectedIndex = selectedIndex - 1;

  if (selectedIndex < 0) {
    selectedIndex = galleryImages.length - 1;
  }

  var selectedImage = galleryImages[selectedIndex];
  var newHtml = `<img src="images/${selectedImage}">`;
  $('.fullImage').html(newHtml);
}

//slideshow next/previous listeners
$('.rightArrow').click(nextImage);
$('.leftArrow').click(previousImage);

$(document).keydown(function(e){
    if (e.which == 37) {
       nextImage();
    } else if (e.which == 39) {
       previousImage();
    }
});

$('.hamburgerIcon').click(function(){
  $('.bar1, .bar2, .bar3').toggleClass('change');
  $('.mobileMenu').toggleClass('hidden');
  $('body').addClass('modalOn');
});
