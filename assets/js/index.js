$(document).ready(function() {
    // Al hacer clic en una pestaña, activarla y mostrar el contenido correspondiente
    $('.nav-link').click(function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    var tabId = $(this).attr('href');
    $('.tab-pane').removeClass('show active');
    $(tabId).addClass('show active');
    });
});