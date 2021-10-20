chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^https:\/\/www\/google/.test(current_tab_info.url)) {
            chrome.tabs.executeScript(null, {file: '/popup.js'}, () => console.log('injected'))
        }
    })
});


console.log('background running');
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(){
    console.log("button clicked!")
}