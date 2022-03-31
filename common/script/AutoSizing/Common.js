// // number count animation
// function numberCounter(target_frame, target_number) {
//      this.count = 0; this.diff = 0;
//      this.target_count = parseInt(target_number);
//      this.target_frame = document.getElementById(target_frame);
//      this.timer = null;
//      this.counter();
// };
// numberCounter.prototype.counter = function() {
//      var self = this;
//      this.diff = this.target_count - this.count;
//      if(this.diff > 0) {
//           self.count += Math.ceil(this.diff / 10);
//      }
//      this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//      if(this.count < this.target_count) {
//           this.timer = setTimeout(function() { self.counter(); }, 30);
//      } else {
//           clearTimeout(this.timer);
//      }
// };
// $(document).ready(function(){ 
//      $(window).bind("scroll", function(){
//           if($(window).scrollTop() > 2700){
//                new numberCounter("texta", 6714783512);
//                $(this).unbind();
//           }
//           return true;
//      })
// });

// nav fixed
$(function() {
     var didScroll;
     var lastScrollTop = 0;
     var delta = 0;
     var navbarHeight = $('.hdtop').outerHeight();
     $(window).scroll(function(event){
          didScroll = true;
     });
     setInterval(function() {
          if (didScroll) {
               hasScrolled();
               didScroll = false;
          }
     }, 5);
     function hasScrolled() {
          var st = $(this).scrollTop();

          if(Math.abs(lastScrollTop - st) <= delta)
               return;
          if (st > lastScrollTop && st > navbarHeight){
               $('.hdtop').removeClass('down').addClass('up');
          } else {
               if(st + $(window).height() < $(document).height()) {
                    $('.hdtop').removeClass('up').addClass('down');
               }
          } lastScrollTop = st;
     }
});
// Swiper first style
var swiper = new Swiper('.avengersvisual', {
     slidesPerView:2,	//slide mem
     spaceBetween:0,	//margin
     slidesPerGroup:2,	//group
     loop: true,
     initialSlide:0,	//start position
     loopFillGroupWithBlank: true,	//그룹수가 맞지 않는 영역 빈칸 채우기
     pagination: {	//paging set
          el: '.swiper-pagination',
          clickable: true,
     },
     autoplay: {	// autoplay
          delay: 5000, //speed
          disableOnInteraction: false,
     },
     navigation: {	//left right button
          nextEl: '.avengers-button-next',
          prevEl: '.avengers-button-prev',
     },
     breakpoints: {
          640: {
            slidesPerView: 1,
            slidesPerGroup:1,
            spaceBetween:0,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroup:1,
            spaceBetween:0,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup:3,
            spaceBetween:0,
          },
     }
});
$(".avengersvisual").hover(function() {	// mouse over stop
     (this).swiper.autoplay.stop();
     }, function() {
     (this).swiper.autoplay.start();
});

// Swiper first style
var swiper = new Swiper('.anitxtslide', {
     slidesPerView:1,	//slide mem
     spaceBetween:0,	//margin
     slidesPerGroup:1,	//group
     loop: true,
     initialSlide:0,	//start position
     loopFillGroupWithBlank: true,	//그룹수가 맞지 않는 영역 빈칸 채우기
     pagination: {	//paging set
          el: '.anitxtslide-pagination',
          clickable: true,
     },
     autoplay: {	// autoplay
          delay: 5000, //speed
          disableOnInteraction: false,
     },
     navigation: {	//left right button
          nextEl: '.anitxtslide-button-next',
          prevEl: '.anitxtslide-button-prev',
     },
     breakpoints: {
          640: {
            slidesPerView: 1,
            slidesPerGroup:1,
            spaceBetween:0,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroup:1,
            spaceBetween:0,
          },
          1024: {
            slidesPerView: 1,
            slidesPerGroup:1,
            spaceBetween:0,
          },
     }
});
$(".anitxtslide").hover(function() {	// mouse over stop
     (this).swiper.autoplay.stop();
     }, function() {
     (this).swiper.autoplay.start();
});

// Top Bottom Button
$(function() {
     $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
               $('.ScrollButton').fadeIn();
          } else {
               $('.ScrollButton').fadeOut();
          }
     });

     $("#TopButton").click(function() {
          $('html').animate({scrollTop : 0}, 300);
     });

     $("#BottomButton").click(function() {
          $('html').animate({scrollTop : ($('footer').offset().top)}, 400);
     });
});

// Full Screen Nav
function openFullNav(){
     document.getElementById("myNav").style.height = "100%";
}
function closeFullNav(){
     document.getElementById("myNav").style.height = "0%";
}

// Images Zoom
imageZoom("myimage", "myresult");

function imageZoom(imgID, resultID) {
     var img, lens, result, cx, cy;
     img = document.getElementById(imgID);
     result = document.getElementById(resultID);
     lens = document.createElement("DIV");
     lens.setAttribute("class", "img-zoom-lens");
     img.parentElement.insertBefore(lens, img);
     cx = result.offsetWidth / lens.offsetWidth;
     cy = result.offsetHeight / lens.offsetHeight;
     result.style.backgroundImage = "url('" + img.src + "')";
     result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
     lens.addEventListener("mousemove", moveLens);
     img.addEventListener("mousemove", moveLens);
     lens.addEventListener("touchmove", moveLens);
     img.addEventListener("touchmove", moveLens);
     function moveLens(e) {
          var pos, x, y;
          e.preventDefault();
          pos = getCursorPos(e);
          x = pos.x - (lens.offsetWidth / 2);
          y = pos.y - (lens.offsetHeight / 2);
          if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
          if (x < 0) {x = 0;}
          if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
          if (y < 0) {y = 0;}
          lens.style.left = x + "px";
          lens.style.top = y + "px";
          result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
     }
     function getCursorPos(e) {
          var a, x = 0, y = 0;
          e = e || window.event;
          a = img.getBoundingClientRect();
          x = e.pageX - a.left;
          y = e.pageY - a.top;
          x = x - window.pageXOffset;
          y = y - window.pageYOffset;
          return {x : x, y : y};
     }
}

// Password hidden show
function passwordFunction() {
     var x = document.getElementById("myInput");
     if (x.type === "password") {
          x.type = "text";
     } else {
          x.type = "password";
     }
}

//tab
$(document).ready(function(){
     $(".tabmeneu a").on("click",function(e){
          $(this.hash).fadeIn(200).siblings().fadeOut(200);
          e.preventDefault();
     })
     .first().click();
     $(".tabmeneu a").on("click",function(){
          $(".tabmeneu a.active").removeClass("active");
          $(this).addClass("active");
     });
});

// toast message box
function myFunction() {
     var x = document.getElementById("toast");
     x.className = "show";
     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// full screen search box
function openSearch() {
     document.getElementById("fullsearch").style.display = "block";
}
function closeSearch() {
     document.getElementById("fullsearch").style.display = "none";
}

// read more
function readmoreFunction() {
     var dots = document.getElementById("dots");
     var moreText = document.getElementById("more");
     var btnText = document.getElementById("myBtn");
     if (dots.style.display === "none") {
          dots.style.display = "inline-block";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
     } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline-block";
     }
}

// html select design
$("select").on("click" , function() {
     $(this).parent(".selecthtmlbox").toggleClass("open");
});
$(document).mouseup(function (e){
     var container = $(".selecthtmlbox");
     if (container.has(e.target).length === 0){
          container.removeClass("open");
     }
});
$("select").on("change" , function() {
     var selection = $(this).find("option:selected").text(),
     labelFor = $(this).attr("id"),
     label = $("[for='" + labelFor + "']");
     label.find(".label-desc").html(selection);
});

// Drop Down
function dropdownbox(){
     document.getElementById("drpdown").classList.toggle("show");
}
window.onclick = function(event) {
     if (!event.target.matches('.drpbtn')) {
          var dropdowns = document.getElementsByClassName("content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
               var openDropdown = dropdowns[i];
               if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
               }
          }
     }
}

// scroll indicator
window.onscroll = function() {toplinebar()};
function toplinebar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("toplinebar").style.width = scrolled + "%";
}

// element draggable
dragElement(document.getElementById("dragdiv"));
function dragElement(elmnt) {
     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
     if (document.getElementById(elmnt.id + "header")) {
          document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
     } else {
          elmnt.onmousedown = dragMouseDown;
     }
     function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
     }
     function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
     }
     function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
     }
}

// Category Item Selector
filterSelection("all")
function filterSelection(c) {
     var x, i;
     x = document.getElementsByClassName("ctta");
     if (c == "all") c = "";
     for (i = 0; i < x.length; i++) {
          ctgRemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) ctgAddClass(x[i], "show");
     }
}
function ctgAddClass(element, name) {
     var i, arr1, arr2;
     arr1 = element.className.split(" ");
     arr2 = name.split(" ");
     for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
     }
}
function ctgRemoveClass(element, name) {
     var i, arr1, arr2;
     arr1 = element.className.split(" ");
     arr2 = name.split(" ");
     for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
               arr1.splice(arr1.indexOf(arr2[i]), 1);     
          }
     }
     element.className = arr1.join(" ");
}

// button click event add class
$('.btntogle').on('click', function(){
     $('.btntogle').removeClass('select');
     $(this).addClass('select');
 });

// file upload
var fileTarget = $('.file_box .file_hidden');
fileTarget.on('change', function(){
     if(window.FileReader){
          var filename = $(this)[0].files[0].name;
     } 
     else {
          var filename = $(this).val().split('/').pop().split('\\').pop();
     };
     $(this).siblings('.upload_name').val(filename);
});
var imgTarget = $('.file_box .file_hidden');
imgTarget.on('change', function(){
     var parent = $(this).parent();
     parent.children('.upload-display').remove();
     if(window.FileReader){
          if (!$(this)[0].files[0].type.match(/image\//)) return;
          var reader = new FileReader();
          reader.onload = function(e){
               var src = e.target.result;
               console.log(e);
               console.log(e.target);
               parent.prepend('<div class="upload-display"><img src="'+src+'" class="upload-thumb"></div>');
          }
          reader.readAsDataURL($(this)[0].files[0]);
     }
     else {
          $(this)[0].select();
          $(this)[0].blur();
          var imgSrc = document.selection.createRange().text;
          parent.prepend('<div class="upload-display"><img class="upload-thumb"></div>');
          var img = $(this).siblings('.upload-display').find('img');
          img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";
     }
});

// file upload multiple image text
let file_select = document.getElementById("file_select");
let file_upload = document.getElementById("file_upload");
file_select.onchange = () => {
  const selected = [...file_select.files];
  console.log(selected);
  file_upload.innerHTML = selected.map((file) => file.name).join("<br />");
};
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  file_upload.innerHTML = "file select!";
  file_select.value = "";
  console.clear();
});

// file upload multiple image view remove
var imageId = 0;
var baseFiles = [];
$(".browse").on("click", () => {
     $("#Image").click();
});
$(".capture").on("click", () => {
     $("#PhotoImage").click();
});
$('.file-input').change(function (e) {
     var input = e.target;
     var files = input.files;
     var images = $('.images');
     for (var i = 0; i < files.length; i++) {
          imageId++;
          ((file) => {
               var reader = new FileReader();
               var fileName = file.name.replace(/\.[^.]*$/, ''); // without file extension
               var fileId = file.size + imageId;
               var baseFile = '';
               reader.onload = (e) => {
                    var preview = '<div class="image image_' + i + '" data-id="' + fileId + '">' +
                    '<div class="img"><img src="' + e.target.result + '"></div>' +
                    '<span class="btn remove" data-icon="delete_forever"></span>' +
                    '</div>';
                    images.append(preview);
                    baseFile = reader.result;
                    baseFiles.push({
                         id: fileId,
                         name: file.name,
                         file: baseFile,
                         uploaded: 0
                    });
               }
               reader.readAsDataURL(file);
          })(files[i]);
     }
     console.log('after upload :>> ', baseFiles);
});
$(document).on('click', '.remove', function (e) {
     e.preventDefault();
     var parent = $(this).parent();
     var id = parent.data('id');
     var removeIndex = baseFiles.map(function (item) {
          return item.id;
     }).indexOf(id);
     baseFiles.splice(removeIndex, 1);
     parent.remove();
     console.log('after remove :>> ', baseFiles);
});

// file upload multiple image view name remove
document.addEventListener("DOMContentLoaded", init, false);
var AttachmentArray = [];
var arrCounter = 0;
var filesCounterAlertStatus = false;
var ul = document.createElement("ul");
ul.className = "thumb-Images";
ul.id = "imgList";
function init() {
     document
     .querySelector("#files")
     .addEventListener("change", handleFileSelect, false);
}
function handleFileSelect(e) {
     if (!e.target.files) return;
     var files = e.target.files;
     for (var i = 0, f; (f = files[i]); i++) {
          var fileReader = new FileReader();
          fileReader.onload = (function(readerEvt) {
               return function(e) {
                    ApplyFileValidationRules(readerEvt);
                    RenderThumbnail(e, readerEvt);
                    FillAttachmentArray(e, readerEvt);
               };
          })(f);
          fileReader.readAsDataURL(f);
     }
     document
     .getElementById("files")
     .addEventListener("change", handleFileSelect, false);
}
jQuery(function($) {
     $("div").on("click", ".img-wrap .close", function() {
          var id = $(this)
          .closest(".img-wrap")
          .find("img")
          .data("id");
          var elementPos = AttachmentArray.map(function(x) {
               return x.FileName;
          }).indexOf(id);
          if (elementPos !== -1) {
               AttachmentArray.splice(elementPos, 1);
          }
          $(this)
          .parent()
          .find("img")
          .not()
          .remove();
          $(this)
          .parent()
          .find("div")
          .not()
          .remove();
          $(this)
          .parent()
          .parent()
          .find("div")
          .not()
          .remove();
          var lis = document.querySelectorAll("#imgList li");
          for (var i = 0; (li = lis[i]); i++) {
               if (li.innerHTML == "") {
                    li.parentNode.removeChild(li);
               }
          }
     });
});
function ApplyFileValidationRules(readerEvt) {
     if (CheckFileType(readerEvt.type) == false) {
          alert(
               "The file (" +
               readerEvt.name +
               ") does not match the upload conditions, You can only upload jpg/png/gif files"
          );
          e.preventDefault();
          return;
     }
     if (CheckFileSize(readerEvt.size) == false) {
          alert(
               "The file (" +
               readerEvt.name +
               ") does not match the upload conditions, The maximum file size for uploads should not exceed 300 KB"
          );
          e.preventDefault();
          return;
     }
     if (CheckFilesCount(AttachmentArray) == false) {
          if (!filesCounterAlertStatus) {
               filesCounterAlertStatus = true;
               alert(
                    "You have added more than 10 files. According to upload conditions you can upload 10 files maximum"
               );
          }
          e.preventDefault();
          return;
     }
}
function CheckFileType(fileType) {
     if (fileType == "image/jpeg") {
          return true;
     } else if (fileType == "image/png") {
          return true;
     } else if (fileType == "image/gif") {
          return true;
     } else {
          return false;
     }
     return true;
}
function CheckFileSize(fileSize) {
     if (fileSize < 300000) {
          return true;
     } else {
          return false;
     }
     return true;
}
function CheckFilesCount(AttachmentArray) {
     var len = 0;
     for (var i = 0; i < AttachmentArray.length; i++) {
          if (AttachmentArray[i] !== undefined) {
               len++;
          }
     }
     if (len > 9) {
          return false;
     } else {
          return true;
     }
}
function RenderThumbnail(e, readerEvt) {
     var li = document.createElement("li");
     ul.appendChild(li);
     li.innerHTML = [
          '<div class="img-wrap"> <span class="close">&times;</span>' +
          '<img class="thumb" src="',
          e.target.result,
          '" title="',
          escape(readerEvt.name),
          '" data-id="',
          readerEvt.name,
          '"/>' + "</div>"
     ].join("");
     var div = document.createElement("div");
     div.className = "filenamecaption";
     li.appendChild(div);
     div.innerHTML = [readerEvt.name].join("");
     document.getElementById("Filelist").insertBefore(ul, null);
}
function FillAttachmentArray(e, readerEvt) {
     AttachmentArray[arrCounter] = {
          AttachmentType: 1,
          ObjectType: 1,
          FileName: readerEvt.name,
          FileDescription: "Attachment",
          NoteText: "",
          MimeType: readerEvt.type,
          Content: e.target.result.split("base64,")[1],
          FileSizeInBytes: readerEvt.size
     };
     arrCounter = arrCounter + 1;
}

// modal popup
$(".mlpopen").click(function(){
     $(".modal").addClass("visible");
     $('body').css("overflow", "hidden");         // scroll hidden
});
$(".mlpclose").click(function(){
     $(".modal").removeClass("visible");
     $('body').css("overflow", "scroll");         // scroll visible
});
$(document).click(function(event) {
     if (!$(event.target).closest(".modal,.mlpopen").length) {
          $("body").find(".modal").removeClass("visible");
          $('body').css("overflow", "");    // scroll visible
     }
});

// search hidden show
$(document).ready(function(){
animation() 
$.each($('.row'), function() { 
     var c = $(this).attr("data-color");
     $(this).css("background",c);
});
var input = $('#search-wrap input');
var sw = $('#search-wrap');
var tw = $('.tags-wrap');
var sr = $('#search-results');
$('#search-btn').click(function(){
     sw.addClass('active');
     input.focus();
}); 
$('#content-wrap, #li-4').click(function(){
     fcollapse(sw,tw)
     input.val("");
     nsearch(sr) 
});
input.keyup(function(e){
     tw.addClass('active');
     if($(this).val().length == 0){
     tw.removeClass('active');     
     nsearch(sr) 
     }
     if (e.keyCode == 13) {
          fsearch(input, sr, tw)
     }
     if (e.keyCode == 8) {
     nsearch(sr)
     }
});
$('.tags-wrap ul li').click(function(){
     var txt = $(this).text();
     input.val(txt);
     input.focus();    
});
$('#li-3').click(function(){
     fsearch(input, sr, tw)
});
var count = 0;
$(window).scroll(function(event){   
     var scrolled = $(this).scrollTop();   
     if (scrolled > count){  
     count++;
     $('#nav-wrap').addClass('active');    
     } 
     else {      
     count--; 
     $('#nav-wrap').removeClass('active');
     }
     count = scrolled;   
     if(count == 0){
     animation()
     $('#first-row i').removeClass('active');
     }else{
     $('h1 ,h2').removeClass('animationActive');
     $('#first-row i').addClass('active');
     }
     if(count == 200){
     fcollapse(sw,tw)
     }
});
var mob = $('#menu-mob');
mob.click(function(){
     $(this).toggleClass('active');
     $('#nav-wrap ul li').toggleClass('mob');
}); 
});
function animation(){
$('h1').addClass('animationActive');
var count = 0;
var limit = 10;
var interval = setInterval(function(){
     count++;
     if (count === limit) { 
          clearInterval(interval);      
     $('h2').addClass('animationActive');  
     }
}, 50); 
}
function fcollapse(sw, tw){
sw.removeClass('active');
tw.removeClass('active'); 
}
function fsearch(input, sr, tw){
var r = input.val();
$('.tags-wrap ul').css('display', 'none');
sr.html('Sorry, 0 results were found for: <span> "' + r + '"</span>');
tw.addClass('active');  
}
function nsearch(sr){
sr.html('');
$('.tags-wrap ul').css('display', 'inline-block');
}


// slick.js slick slide
// https://github.com/kenwheeler/slick/
$(".slider").slick({
     slide: 'div',                 // 슬라이드 되어야 할 태그
     infinite: true,               // 반복여부
     dots: false,                  // 페이징
     autoplay: false,              // 자동 스크롤
     speed: 300,                   // 슬라이드 속도
     slidesToShow: 1,              // 영역의 슬라이드 갯수
     slidesToScroll: 1,            // 한번에 움직일 콘텐츠 갯수
     arrows: false,             // 좌우버튼
     // dotsClass : "slick-dots",  // 페이징 클래스 지정
     // vertical : false,          // 세로 방향
     // pauseOnHover : true,       // 오버시 멈춤
     // draggable : true,          // 드래그 기능

     // 반응형 웹 구현 옵션
     responsive: [
          {  
               breakpoint: 960, //화면 사이즈 960px
               settings: {
                    // 옵션 추가
                    slidesToShow:1
               } 
          },
          { 
               breakpoint: 768, //화면 사이즈 768px
               settings: {	
                    // 옵션 추가
                    slidesToShow:1
               } 
          }
     ]

});


//ticking machine
var percentTime;
var tick;
var time = .1;
var progressBarIndex = 0;

$('.progressBarContainer .progressBar').each(function(index) {
     var progress = "<div class='inProgress inProgress" + index + "'></div>";
     $(this).html(progress);
});

function startProgressbar() {
     resetProgressbar();
     percentTime = 0;
     tick = setInterval(interval, 10);
}

function interval() {
     if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
          progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
          startProgressbar();
     } else {
          percentTime += 1 / (time + 5);
          $('.inProgress' + progressBarIndex).css({
               width: percentTime + "%"
          });
          if (percentTime >= 100) {
               $('.single-item').slick('slickNext');
               progressBarIndex++;
               if (progressBarIndex > 2) {
                    progressBarIndex = 0;
               }
               startProgressbar();
          }
     }
}

function resetProgressbar() {
$('.inProgress').css({
width: 0 + '%'
});
clearInterval(tick);
}
startProgressbar();
// End ticking machine

$('.item').click(function () {
clearInterval(tick);
var goToThisIndex = $(this).find("span").data("slickIndex");
$('.single-item').slick('slickGoTo', goToThisIndex, false);
startProgressbar();
});


          
// Materialize Code
// Materialize - Parallax
$(document).ready(function(){
     $('.parallax').parallax();
});

// Materialize - collapsible
$(document).ready(function(){
     $('.collapsible').collapsible();
});

// Materialize - modal
$(document).ready(function(){
     $('.modal').modal();
});

// Materialize - Selector
$(document).ready(function(){
     $('select').formSelect();
});