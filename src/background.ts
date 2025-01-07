// Download cookies as a JSON file
function downloadCookies(data: any) {
    const cookies = JSON.stringify(data, null, 2);
    let blob = new Blob([cookies], { type: 'application/json' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'discord.com.cookies.json';
    a.click();
}

// Download localStorage as a JSON file
function downloadLocalStorage() {
    let data = JSON.stringify(localStorage, null, 2);
    let blob = new Blob([data], { type: 'application/json' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'discord.com.localStorage.json';
    a.click();
}

chrome.action.onClicked.addListener(async (tab) => {
    const cookies = await chrome.cookies.getAll({ url: 'https://discord.com' });

    chrome.scripting.executeScript({
        target: { tabId: tab.id ? tab.id : -1 },
        func: downloadCookies,
        args: [cookies],
    });

    chrome.scripting.executeScript({
        target: { tabId: tab.id ? tab.id : -1 },
        func: downloadLocalStorage,
    });
});
