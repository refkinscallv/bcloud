
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
    bcloudRenderElement();
    bCloudSetup();
});

function bcloudRenderElement(){
    $("body").append(`<div class="bcloud-panel"></div>`);
    $(".bcloud-panel").hide();
}

function bCloudSetup(){
    const bCloudQuery       = new URLSearchParams(window.location.search);
    const bCloudQueryPanel  = bCloudQuery.get('bcloud');

    if(bCloudQueryPanel != null){
        $(".bcloud-on-panel").hide();
        $(".bcloud-panel").show();
    }
}