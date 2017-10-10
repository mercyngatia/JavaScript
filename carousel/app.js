 var slideIndex = 1;
showImages(slideIndex);


function plusDivs(n) {
    showImages(slideIndex += n);
}

function currentSlide(n){
    showImages(slideIndex = n);
}

function showImage(n){
    var i;
    var posts = document.getElementsByClassName("post");
    var dots = document.getElementsByClassName("dot");
    if (n > posts.length) {slideIndex = 1}
    if (n < 1) {slideIndex = posts.length}
    for (i = 0; i < posts.length; i++){
        posts[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dot[i].className.replace("active", "");
    }

    posts[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}


















// var index = 1;

//  function plusIndex(m){
//     index = index + 1;
//     showImage(index);

// }

// showImage(1);

// function showImage(m){
//     var i;
//     var x = document.getElementsByTagName('posts');
//     var dots = document.getElementsByTagName('dot');
//      if (m > x.length) {index =1};
//    if (m < 1) {index =x.length};
//     for (i = 0;i<x.length; i++)
//     {
//         x[i].style.display = "none";
//     }
//     x[index-1].style.display = "block";
// }


















// var index = 1;
// function plusIndex(m){
//     index = index + 1;
//     showImage(index);

// }
// showImage(1);
// function showImage(m){
//     var i;
//     var x = document.getElementsByClassName("posts");
//     if (m > x.length) {index =1};
//     if (m < 1) {index =x.length};
//     for (i = 0;i<x.length; i++)
//     {
//         x[i].style.display = "none";
//     }
//     x[index-1].style.display = "block";
// }