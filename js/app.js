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
    this.showAddPage = function() {
        if ($(this).hasClass("our_mission")) {
            $(this).closest(".main_body").find("#our_future_add").hide();
            $(this).closest(".main_body").find("#our_sponsors_add").hide();
            $(this).closest(".main_body").find("#our_mission_add").fadeIn();
        } else if ($(this).hasClass("our_sponsors")) {
            $(this).closest(".main_body").find("#our_future_add").hide();
            $(this).closest(".main_body").find("#our_mission_add").hide();
            $(this).closest(".main_body").find("#our_sponsors_add").fadeIn();
        } else if ($(this).hasClass("our_future")) {
            $(this).closest(".main_body").find("#our_sponsors_add").hide();
            $(this).closest(".main_body").find("#our_mission_add").hide();
            $(this).closest(".main_body").find("#our_future_add").fadeIn();
        }
    };
    $(".header").on("click.show_page", ".button", this.showPage);
    $(".about_us_page_list").on("click.show_add", "li", this.showAddPage);
}

$(document).ready(function(){
    var pageNavigation = new PageNavigation();
});