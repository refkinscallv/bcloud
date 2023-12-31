
/**
 * Checker
 */
document.addEventListener("DOMContentLoaded", () => {
    if(!window.jQuery){
        alert("BCloud : Error Requirements\n\njQuery is not installed. Please install first with a minimum version of 3.6");
        return false;
    }
});

$(document).ready(() => {
    const bCloudQuery       = new URLSearchParams(window.location.search);
    const bCloudQueryParam  = bCloudQuery.get('bcloud');

    bCloud.renderElement();
    bCloud.setup(bCloudQueryParam);
    bCloud.route(bCloudQuery);
});

const bCloud = {
    renderElement : () => {
        $("body").append(`<div class="bcloud-panel"></div>`);
        $(".bcloud-panel").hide();
    },

    setup : (param) => {
        if(param != null){
            $(".bcloud-on-panel").hide();
            $(".bcloud-panel").show();
        }
    },

    route : (path) => {
        console.log(path.get('loc'));
    }
}