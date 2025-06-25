window.onload = function() {
    var text = document.title;
    var timerId;

    function movingtitle() {
        clearTimeout(timerId);
        document.title = text.substring(1, text.length) + text.substring(0, 1);
        text = document.title;
        timerId = setTimeout(movingtitle, 1000);
    }

    movingtitle();
};