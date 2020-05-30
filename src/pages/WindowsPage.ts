class WindowsPage {
    get open() {
        return browser.url("/windows");
    }

    get openWindowsTab() {
        return $("[href*='windows']").click();
    }

    get switchTab() {
        let window = browser.getWindowHandles()[1];
        return browser.switchToWindow(window)
    }
}

export default new WindowsPage();