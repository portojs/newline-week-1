/**
 * Created by Peter on 26.09.2015.
 */
function PageNavigation() {
    this.showPage = function() {
        if ($(this).hasClass("button_about_us")){

        } else if ($(this).hasClass("button_to_the_moon")){

        } else if ($(this).hasClass("button_contacts")){

        }
    };
    $(".header").on("click.show_page", ".button", this.showPage);
}

$(document).ready(function(){
    var pageNavigation = new PageNavigation();
});