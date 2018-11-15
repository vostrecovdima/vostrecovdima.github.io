var tabNav = document.getElementById('tab-shop-nav'),
    tabLinks = tabNav.getElementsByTagName("a"),
    tabConteiner = document.getElementById('tab-shop-items'),
    tabContainers = tabConteiner.getElementsByClassName("tab-content");
for (var i = 0; i < tabLinks.length; i++) {
    var link = tabLinks[i];
    link.addEventListener("click", function(event) {
        event.preventDefault();
        var link = event.target;
        link.classList.add("active");
        for (var j = 0; j < tabLinks.length; j++) {
            if (tabLinks[j] != link) {
                tabLinks[j].classList.remove("active");
            }
        }
        var id = link.href.substr(link.href.lastIndexOf("#") + 1);
        for (var j = 0; j < tabContainers.length; j++) {
            if (tabContainers[j].id == id) {
                tabContainers[j].classList.add("active");
            } else {
                tabContainers[j].classList.remove("active");
            }
        }
    });
}
if (tabLinks.length) {
    tabLinks[0].click();
}



//-----------
var slider = tns({
    container: '#slider-block',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    mouseDrag: true,
});

//----------
ymaps.ready(init);

function init() {
    // Создание карты.    
    var myMap = new ymaps.Map("map", {
        center: [56.086638, 54.237908],
        zoom: 18
    });
    var myPlacemark = new ymaps.Placemark([56.086638, 54.237908], {
        hintContent: 'Содержимое всплывающей подсказки',
        balloonContentHeader: "Мы находимся тут",
        balloonContentBody: '<ul><li>1</li><li>2</li></ul>',
        balloonContentFooter: 'примечание'
    });

    // После того как метка была создана, ее
    // можно добавить на карту.
    myMap.geoObjects.add(myPlacemark);
}

jQuery(function(){
    jQuery('[data-fancybox]').fancybox();
})