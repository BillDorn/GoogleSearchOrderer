const ALL_ICON = '<span class="HF9Klc ZYMsjf" style="height:16px;width:16px"><svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.32 14.88a8.04 8.04 0 1 0-1.44 1.44l5.76 5.76 1.44-1.44-5.76-5.76zm-6.36 1.08c-3.36 0-6-2.64-6-6s2.64-6 6-6 6 2.64 6 6-2.64 6-6 6z"></path></svg></span>';
const IMAGES_ICON = '<span class="HF9Klc ZYMsjf" style="height:16px;width:16px"><svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5z"></path></svg></span>';
const MAPS_ICON = '<span class="HF9Klc ZYMsjf" style="height:16px;width:16px"><svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20.08 15.03l-.08.08v3.87c0 .44-.28.8-.67.93L12.41 13l2.2-2.2c-.36-.58-.71-1.18-1.02-1.81L4 18.58V4.99a1 1 0 0 1 1-1h7.57c.09-.72.29-1.39.58-2H5c-1.64 0-3 1.36-3 3v13.99c0 1.64 1.36 3 3 3h14a3 3 0 0 0 3-2.99v-6.21a27.8 27.8 0 0 1-1.92 2.25zM12 19.99H5.41l5.58-5.58 5.57 5.57H12v.01zM19 0c-3 0-5 1.99-5 4.99 0 3.82 5 9 5 9s5-5.18 5-9c0-3-2-4.99-5-4.99zm0 6.74c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75z"></path></svg></span>';
const VIDEOS_ICON = '<span class="HF9Klc ZYMsjf" style="height:16px;width:16px"><svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M0 0h24v24H0z" fill="none"></path><path clip-rule="evenodd" d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5z" fill-rule="evenodd"></path></svg></span>';
const NEWS_ICON = '<span class="HF9Klc ZYMsjf" style="height:16px;width:16px"><svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2z"></path></svg></span>';
const SHOPPING_ICON = '<span class="HF9Klc ZYMsjf" style="height:16px;width:16px"><svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M21.11 2.89A3.02 3.02 0 0 0 18.95 2h-5.8c-.81 0-1.58.31-2.16.89L7.25 6.63 2.9 10.98a3.06 3.06 0 0 0 0 4.32l5.79 5.8a3.05 3.05 0 0 0 4.32.01l8.09-8.1c.58-.58.9-1.34.9-2.16v-5.8c0-.81-.32-1.59-.89-2.16zM20 10.85c0 .28-.12.54-.32.74l-3.73 3.74-4.36 4.36c-.41.41-1.08.41-1.49 0l-2.89-2.9-2.9-2.9a1.06 1.06 0 0 1 0-1.49l8.1-8.1c.2-.2.46-.3.74-.3l5.8-.01A1.05 1.05 0 0 1 20 5.05v5.8zM16 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></svg></span>';
const BOOKS_ICON = '<span class="HF9Klc ZYMsjf" style="height:16px;width:16px"><svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16z"></path></svg></span>';
const FLIGHTS_ICON = '<span class="HF9Klc ZYMsjf" style="height:16px;width:16px"><svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12.98 12.89l-4.03 4.03.42 2.95L8.24 21l-1.87-3.37L3 15.76l1.12-1.12 2.95.42 4.03-4.03L3 6.77l1.5-1.5 10.04 2.32 4.2-4.2a1.32 1.32 0 0 1 1.87 0c.52.52.52 1.36 0 1.87l-4.2 4.2 2.32 10.04-1.5 1.5-4.25-8.11z"></path></svg></span>';
const FINANCE_ICON = '<span class="HF9Klc ZYMsjf" style="height:16px;width:16px"><svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0z" fill="none"></path><path clip-rule="evenodd" d="M6 15.5l-3 2.94V10h3v5.5zm5-1.84l-1.57-1.34L8 13.64V6h3v7.66zM16 12l-3 3V2h3v10zm2.81-.19L17 10h5v5l-1.79-1.79L13 20.36l-3.47-3.02L5.75 21H3l6.47-6.34L13 17.64l5.81-5.83z" fill-rule="evenodd"></path></svg></span>';
const ICON_MAP = {
    All: ALL_ICON,
    Images: IMAGES_ICON,
    Maps: MAPS_ICON,
    Videos: VIDEOS_ICON,
    News: NEWS_ICON,
    Flights: FLIGHTS_ICON,
    Books: BOOKS_ICON,
    Finance: FINANCE_ICON,
    Shopping: SHOPPING_ICON
};
function createTab(name, href, active) {
    let top = document.createElement('div');
    top.className = 'hdtb-mitem hdtb-imb';
    top.setAttribute('role', 'tab');
    let element = top;
    if (active) {
        top.classList.add('hdtb-msel');
    } else {
        let link = document.createElement('a');
        link.className = 'q qs';
        element = link;
        link.href = href;
        top.appendChild(link);
    }
    if (ICON_MAP[name]) {
        element.innerHTML = ICON_MAP[name] + name;
    } else {
        element.innerHTML = name;
    }
    return top;
}
var mainBar = document.getElementById('hdtb-msb');
var mainTabs = mainBar.firstChild.firstChild.childNodes;
var moreTabs = document.querySelectorAll('.f9UGee.q.qs');
var searchMap = {};
for (let i = 0; i < mainTabs.length; i++) {
    let tab = mainTabs[i];
    if (!tab.classList.contains('hdtb-msel')) {
        searchMap[tab.textContent] = tab.firstChild.href;
    } else {
        searchMap[tab.textContent] = null;
    }
}
for (let i = 0; i < moreTabs.length; i++) {
    let tab = moreTabs[i];
    searchMap[tab.textContent] = tab.href;
}
browser.storage.local.get("tabOrder")
    .then((result) => {
        let tabNames = result.tabOrder || ['All', 'Images', 'Videos', 'Maps', 'News', 'Flights', 'Books', 'Finance', 'Shopping'];
        let tabs = [];
        tabNames.forEach((key) => {
            let val = searchMap[key];
            if (val !== undefined) {
                tabs.push(createTab(key, val, val === null));
            }
        });
        mainBar.firstChild.firstChild.innerHTML = '';
        if (mainBar.firstChild.firstChild.nextSibling) {
            mainBar.firstChild.removeChild(mainBar.firstChild.firstChild.nextSibling);
        }
        tabs.forEach((tab) => {
            mainBar.firstChild.firstChild.appendChild(tab);
        });
        mainBar.style.visibility = "visible";
    }, (error) => {
        console.log('Error', error);
        mainBar.style.visibility = "visible";
    });