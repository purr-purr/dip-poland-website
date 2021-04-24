// Import HTML template
$(function(){
    // layout
    $("#included__header").load("template/header.html");
    $("#included__footer").load("template/footer.html");
    // any
    $("#included__contact-block").load("template/contact-block.html");
    $("#included__about-company-block").load("template/about-company-block.html");
    $("#included__services-company-block").load("template/services-company-block.html");
    $("#included__pop-up").load("template/pop-up.html");
});
// ---------------------------------------------------------------------------

// Прелоадер
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

function print_doc(){
    window.print() ;
}

// Плавная прокрутка к якорю
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

// Ограничение количества отображаемых символов на странице Новости
$(document).ready(function(){
    $(".short-news__desc").each(function(){
        if ($(this).prop("innerHTML").length > 300){
            let val = $(this).prop("innerHTML");
            $(this).attr("title", val);
            $(this).prop("innerHTML", val.substr(0,300) + "...")
        }
    });
});

// Для печати только одной конкретно открытой новости
$(".news li").on('click', function(e){
    $(this).attr("id","active-tab");
})