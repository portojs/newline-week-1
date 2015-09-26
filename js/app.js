/**
 * Created by Peter on 26.09.2015.
 */
function PageNavigation() {
    this.showPage = function() {
        if ($(this).hasClass("button_about_us")){
            $(this).closest(".nav").find("#to_the_moon_page").slideUp();
            $(this).closest(".nav").find("#contacts_page").slideUp();
            $(this).closest(".main_window").find("#about_us_page").slideDown();
        } else if ($(this).hasClass("button_to_the_moon")){
            $(this).closest(".nav").find("#about_us_page").slideUp();
            $(this).closest(".nav").find("#contacts_page").slideUp();
            $(this).closest(".main_window").find("#to_the_moon_page").slideDown();
        } else if ($(this).hasClass("button_contacts")){
            $(this).closest(".nav").find("#to_the_moon_page").slideUp();
            $(this).closest(".nav").find("#about_us_page").slideUp();
            $(this).closest(".main_window").find("#contacts_page").slideDown();
        }
    };
    $(".header").on("click.show_page", ".button", this.showPage);
}

$(document).ready(function(){
    var pageNavigation = new PageNavigation();
});