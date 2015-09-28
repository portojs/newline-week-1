/**
 * Created by Peter on 26.09.2015.
 */
function PageNavigation() {
    this.showPage = function() {
        if ($(this).hasClass("button_about_us")){
            $(this).closest(".main_window").find("#to_the_moon_page").hide();
            $(this).closest(".main_window").find("#contacts_page").hide();
            $(this).closest(".main_window").find("#about_us_page").fadeIn("slow");
        } else if ($(this).hasClass("button_to_the_moon")){
            $(this).closest(".main_window").find("#about_us_page").hide();
            $(this).closest(".main_window").find("#contacts_page").hide();
            $(this).closest(".main_window").find("#to_the_moon_page").fadeIn("slow");
        } else if ($(this).hasClass("button_contacts")){
            $(this).closest(".main_window").find("#to_the_moon_page").hide();
            $(this).closest(".main_window").find("#about_us_page").hide();
            $(this).closest(".main_window").find("#contacts_page").fadeIn("slow");
        }
    };
    $(".header").on("click.show_page", ".button", this.showPage);
}

$(document).ready(function(){
    var pageNavigation = new PageNavigation();
});