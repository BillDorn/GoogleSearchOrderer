const defaultTabs = ['All', 'Images', 'Videos', 'Maps', 'News', 'Flights', 'Books', 'Finance', 'Shopping'];
const sortableOptions = {
    group: "tabs",
    animation: 150,
    ghostClass: "ghost",
    dragClass: "drag"
};

function createTabItem(value) {
    let item = document.createElement('div');
    item.className = 'list-group-item';
    item.textContent = value;
    return item;
}

function setListItems(tabs) {
    let activeTabsList = document.getElementById('activeTabs');
    let hiddenTabList = document.getElementById('hiddenTabs');
    let usedTabs = {};
    for(let i=0; i<tabs.length; i++) {
        activeTabsList.appendChild(createTabItem(tabs[i]));
        usedTabs[tabs[i]] = 1;
    }
    for(let i=0; i<defaultTabs.length; i++) {
        if(usedTabs[defaultTabs[i]] === undefined) {
            hiddenTabList.appendChild(createTabItem(defaultTabs[i]));
        }
    }
}

function saveOrder() {
    let childElements = activeTabs.children;
    let children = [];
    for(let i=0; i<childElements.length; i++) {
        children.push(childElements[i].textContent);
    }
    browser.storage.local.set({
        tabOrder: children
    }).then((result) => {
        window.close();
    }, (error) => {
        console.log('Error', error);
    });
}

var activeTabs = document.getElementById('activeTabs');
var saveButton = document.getElementById('saveButton');
Sortable.create(activeTabs, sortableOptions);
Sortable.create(document.getElementById('hiddenTabs'), sortableOptions);
saveButton.onclick = saveOrder;
document.addEventListener("DOMContentLoaded", () => {
    browser.storage.local.get("tabOrder").then((result) => {
        let tabSettings = result.tabOrder || defaultTabs;
        setListItems(tabSettings);
    }, (error) => {
        console.log('Error', error);
    });
});