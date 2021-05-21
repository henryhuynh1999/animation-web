

//slider
// let listItemSlider = document.querySelectorAll('.slider__list-item');
// let currentSlider = 0;
// let number = document.querySelector('.paging .number');
// let dotted = document.querySelectorAll('.paging .dotted ul li');

// listItemSlider.forEach(function (itemSlider, index){
//     if (itemSlider.classList.contains('active')) {
//         currentSlider = index;
//     }
// });

// document.querySelector('.control__btn.--next').addEventListener('click', function(){
//     if (currentSlider < listItemSlider.length - 1) {
//     goto(currentSlider+1);
//     } else{
//     goto(0);
//     }
// })

// document.querySelector('.control__btn.--prev').addEventListener('click', function(){
//     if (currentSlider > 0) {
//     goto(currentSlider-1);
//     } else{
//     goto(listItemSlider.length - 1);
//     }
// })

// dotted.forEach(function (li, index){
//     li.addEventListener('click', function (){
//         goto(index);
//     })
// })
// function goto(index) {
//     listItemSlider[currentSlider].classList.remove('active');
//     listItemSlider[index].classList.add('active');
//     dotted[currentSlider].classList.remove('active');
//     dotted[index].classList.add('active');
//     currentSlider = index;
    
//     if (currentSlider+1<9) {
//         number.innerHTML = (currentSlider+1).toString().padStart(2, '0');
//     } else{
//         number.innerHTML = (currentSlider+1).toString();
//     }
// }
$(document).ready(function () {
    $carousel.flickity({
        cellAlign: 'left',
        contain: true,
        autoPlay: 100,
        friction: 0.45,
        wrapAround: true,
        // pageDots: false,
        prevNextButtons: false, 
        on: {
            ready: function () {
                let dotted = $(".flickity-page-dots");
                console.log(dotted);
                let paging = $(".paging .dotted");
                console.log(paging);
                dotted.appendTo(paging);
            },
            change: function (index) {
                let number = $(".number");
                if(index < 10){
                    number.text((index+1).toString().padStart(2, '0'));
                } else{
                    number.text((index+1).toString());
                }
            }
        }
    });
    $(".control .--prev").on('click', function () {
        $carousel.flickity('previous');
    })
    $(".control .--next").on('click', function () {
        $carousel.flickity('next');
    })
})
let $carousel = $(".slider__list");

//click menu


let header = document.querySelector('header');
let heightHeader = header.offsetHeight;
let menu = document.querySelectorAll('.menu li a');
menu.forEach(function (a, index) {
   a.addEventListener('click', function (e) {
        e.preventDefault();
        let href = a.getAttribute('href');
        let className = href.replace('#', '');
        let section = document.querySelector('.'+className);
        let positionSection = section.offsetTop;
        window.scrollTo({
            top: positionSection - heightHeader,
            behavior: 'smooth'
        }
        );
   })
})
//language
let langList = document.querySelectorAll('.lang__select a');
let langCurrent = document.querySelector('.lang__current a');
let lang__select = document.querySelector('.lang__select');
langCurrent.addEventListener('click',function () {
    if(lang__select.classList.contains('active')){
        lang__select.classList.remove('active');
    } else{
        lang__select.classList.add('active');
    }
})
langList.forEach(function (element) {
    if (element.classList.contains('active')){
        langCurrent.innerHTML = element.getAttribute('href').replace('#',"");
    }
    element.addEventListener('click',function () {
        langList.forEach(function (e){
            if (e.classList.contains('active')){
                e.classList.remove('active');
            }
        })
        element.classList.add('active');
        if (element.classList.contains('active')){
            langCurrent.innerHTML = element.getAttribute('href').replace('#',"");
        }
        lang__select.classList.remove('active');
    })
    
})
//scroll menu
function scrollMenu(className, isActiveMenu, isBlackHeader ) {
    let section = document.querySelector('.'+className);
    let positionSection = section.offsetTop;
    window.addEventListener('scroll',function () {
        x = pageYOffset;
        let i;
        if (isBlackHeader){
           i = heightHeader;
        } else{i = 0}
        if (x >= positionSection - i){
            if(isActiveMenu){
                menu.forEach(function (element, i) {
                    if(element.classList.contains('active')){
                        element.classList.remove('active');
                    }
                    if((element.getAttribute('href').replace('#',"")==className)){
                        element.classList.add('active');
                        
                    }
                })
        
            }
            if(header.classList.contains('--black')){
                header.classList.remove('--black');
            }
            if(isBlackHeader){
                header.classList.add('--black');
            }
        } 
        
    })
}
scrollMenu('slider',true, false)
scrollMenu('products', true, true)
scrollMenu('videos', true, true)
scrollMenu('info',false, false)
scrollMenu('about', true, true)
scrollMenu('gallery',true,true)
scrollMenu('news',true,true)
//back to top
let backtotop = document.querySelector('.backtotop');
backtotop.addEventListener('click', function (backtotop) {
    backtotop.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

//botton nav mobile
let btn = document.querySelector('.bottonnav');
let nav = document.querySelector('.menubox');

btn.addEventListener('click', function (){
    if (btn.classList.contains('active')){
        btn.classList.remove('active')
        nav.classList.remove('active')
    } else{
        btn.classList.add('active')
        nav.classList.add('active')
    }
})

let navMobile = document.querySelectorAll('.menubox ul li a');
navMobile.forEach(function (element, index) {
    element.addEventListener('click', function () {
        window.scrollTo({
            top: document.querySelector(('.'+element.getAttribute('href').replace('#',""))).offsetTop - heightHeader,
            behavior: 'smooth'
        })
        btn.classList.remove('active')
        nav.classList.remove('active')
        navMobile.forEach(function (e) {
            e.classList.remove('active')
        })
        element.classList.add('active')
    })
})
// 
//pupup video
let videoImgList = document.querySelectorAll('.video__list-item .item .item__img');
let videoList = document.querySelectorAll('.pupupVideo');
let closeVideo = document.querySelectorAll('.close');
videoImgList.forEach(function (element, index) {
    if (index == 0) {
        element.addEventListener('click',function () {
            document.getElementsByTagName('iframe')[0].setAttribute('src','https://www.youtube.com/embed/' + 'vE9L14cVKP0?autoplay=1&mute=1');
            videoList[index].classList.add('active');
            closeVideo[index].addEventListener('click', function () {
                videoList[index].classList.remove('active');
                document.getElementsByTagName('iframe')[0].setAttribute('src','');
            })
          })
    };
    if (index == 1) {
        element.addEventListener('click',function () {
            document.getElementsByTagName('iframe')[1].setAttribute('src','https://www.youtube.com/embed/' + 'dLQe4qEfVJw?autoplay=1&mute=1');
            videoList[index].classList.add('active');
            closeVideo[index].addEventListener('click', function () {
                videoList[index].classList.remove('active');
                document.getElementsByTagName('iframe')[1].setAttribute('src','');
            })
          })
    };
    if (index == 2) {
        element.addEventListener('click',function () {
            document.getElementsByTagName('iframe')[2].setAttribute('src','https://www.youtube.com/embed/' + 'cUmpJ2zwfVU?autoplay=1&mute=1');
            videoList[index].classList.add('active');
            closeVideo[index].addEventListener('click', function () {
                videoList[index].classList.remove('active');
                document.getElementsByTagName('iframe')[2].setAttribute('src','');
            })
          })
    };
})

//PhotoSwipe JavaScript

$(document).ready(function () {
    var initPhotoSwipeFromDOM = function(gallerySelector) {
        var parseThumbnailElements = function(el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;
            for(var i = 0; i < numNodes; i++) {
                figureEl = thumbElements[i]; // <figure> element
                if(figureEl.nodeType !== 1) {
                    continue;
                }
                linkEl = figureEl.children[0]; // <a> element
                size = linkEl.getAttribute('data-size').split('x');
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
                if(figureEl.children.length > 1) {
                    item.title = figureEl.children[1].innerHTML; 
                }
                if(linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                } 
                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }
            return items;
        };
        var closest = function closest(el, fn) {
            return el && ( fn(el) ? el : closest(el.parentNode, fn) );
        };
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            var eTarget = e.target || e.srcElement;
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });
            if(!clickedListItem) {
                return;
            }
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;
            for (var i = 0; i < numChildNodes; i++) {
                if(childNodes[i].nodeType !== 1) { 
                    continue; 
                }
                if(childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
            if(index >= 0) {
                openPhotoSwipe( index, clickedGallery );
            }
            return false;
        };
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
            params = {};
            if(hash.length < 5) {
                return params;
            }
            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if(!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');  
                if(pair.length < 2) {
                    continue;
                }           
                params[pair[0]] = pair[1];
            }
            if(params.gid) {
                params.gid = parseInt(params.gid, 10);
            }
            return params;
        };
        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;
            items = parseThumbnailElements(galleryElement);
            options = {
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                getThumbBoundsFn: function(index) {
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect(); 
    
                    return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                },
                showAnimationDuration : 0,
                hideAnimationDuration : 0
            };
            if(fromURL) {
                if(options.galleryPIDs) {
                    for(var j = 0; j < items.length; j++) {
                        if(items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }
            if( isNaN(options.index) ) {
                return;
            }
            if(disableAnimation) {
                options.showAnimationDuration = 0;
            }
            gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };
        var galleryElements = document.querySelectorAll( gallerySelector );
        for(var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i+1);
            galleryElements[i].onclick = onThumbnailsClick;
        }
        var hashData = photoswipeParseHash();
        if(hashData.pid && hashData.gid) {
            openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
        }
    };
    initPhotoSwipeFromDOM('.carousel-img');
})
//under
$(document).ready(function () {
    $(".under").flickity({
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        groupCells: true,
        wrapAround: true,
        // friction: 0.8,
        pageDots: false,
        prevNextButtons: false
    });
})