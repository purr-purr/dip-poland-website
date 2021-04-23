// Import HTML template
$(function(){
    // layout
    $("#included__header").load("template/header.html");
    $("#included__footer").load("template/footer.html");
    // any
    $("#included__contact-block").load("template/contact-block.html");
    $("#included__about-company-block").load("template/about-company-block.html");
    $("#included__services-company-block").load("template/services-company-block.html");
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