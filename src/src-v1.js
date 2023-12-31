alert("sample");

window.onload = (event) => {
    if(!window.jQuery){
        console.log("BCloud : Error Requirements\n\njQuery is not installed. Please install first with a minimum version of 3.6");
    } else {
        $("header").append(`<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>`);
    }
};

if(window.jQuery){
    alert("sample");
}