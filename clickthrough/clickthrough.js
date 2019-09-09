
var openButton = document.getElementById('openButton');
openButton.onclick = function () {
    var createData = {
        type: "detached_panel",
        url: "../options/options.html",
        width: 700,
        height: 220,
        allowScriptsToClose: true
    };
    browser.windows.create(createData);
};