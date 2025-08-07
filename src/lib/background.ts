/**
 * WordPress Admin Bar T - Background Service Worker
 * Modern ES2022+ implementation with Manifest V3 APIs and TypeScript
 */

interface DomainCheckResult {
  found: boolean;
  domain: string | null;
}

interface StorageDomain {
  [domain: string]: boolean;
}

class WpAdminBarManager {
  constructor() {
    this.init();
  }

  async init(): Promise<void> {
    // Set up event listeners
    chrome.action.onClicked.addListener(this.handleActionClick.bind(this));
    chrome.tabs.onActivated.addListener(this.updateBrowserIcon.bind(this));
    chrome.windows.onFocusChanged.addListener(
      this.handleWindowFocusChange.bind(this)
    );
    chrome.tabs.onUpdated.addListener(this.handleTabUpdate.bind(this));
  }

  /**
   * Adds a domain name to Chrome storage
   */
  async addDomain(domain: string): Promise<void> {
    try {
      await chrome.storage.sync.set({ [domain]: true });
      console.log(`${domain} added to storage, admin bar will be hidden.`);
    } catch (error) {
      console.error("Error adding domain to storage:", error);
    }
  }

  /**
   * Removes a domain from Chrome storage
   */
  async removeDomain(domain: string): Promise<void> {
    try {
      await chrome.storage.sync.remove(domain);
      console.log(`${domain} removed from storage, admin bar restored.`);
    } catch (error) {
      console.error("Error removing domain from storage:", error);
    }
  }

  /**
   * Checks for the existence of a domain in Chrome storage
   */
  async checkDomain(tabId: number): Promise<DomainCheckResult> {
    try {
      const tab = await chrome.tabs.get(tabId);

      if (
        !tab.url ||
        tab.url.startsWith("chrome://") ||
        tab.url.startsWith("chrome-extension://")
      ) {
        console.warn("Cannot run on chrome:// or chrome-extension:// pages");
        return { found: false, domain: null };
      }

      const url = new URL(tab.url);
      const domain = url.hostname;
      const result = (await chrome.storage.sync.get(domain)) as StorageDomain;

      return {
        found: Boolean(result[domain]),
        domain,
      };
    } catch (error) {
      console.error("Error checking domain:", error);
      return { found: false, domain: null };
    }
  }

  /**
   * Removes the WordPress admin bar from the page
   */
  async removeBar(tabId: number): Promise<void> {
    try {
      await chrome.scripting.executeScript({
        target: { tabId },
        func: (): void => {
          const adminBar = document.getElementById("wpadminbar");
          if (adminBar) {
            adminBar.style.display = "none";
          }

          const html = document.getElementsByTagName("html")[0];
          if (html) {
            html.style.setProperty("margin-top", "0px", "important");
            html.style.setProperty("padding-top", "0px", "important");
            // Set WordPress admin bar height CSS variable to 0
            html.style.setProperty(
              "--wp-admin--admin-bar--height",
              "0px",
              "important"
            );
          }

          const body = document.getElementsByTagName("body")[0];
          if (body) {
            body.classList.remove("admin-bar");
          }
        },
      });

      await this.setIcon(true);
    } catch (error) {
      console.error("Error removing admin bar:", error);
    }
  }

  /**
   * Restores the WordPress admin bar on the page
   */
  async restoreBar(tabId: number): Promise<void> {
    try {
      await chrome.scripting.executeScript({
        target: { tabId },
        func: (): void => {
          const adminBar = document.getElementById("wpadminbar");
          if (adminBar) {
            adminBar.removeAttribute("style");
          }

          const html = document.getElementsByTagName("html")[0];
          if (html) {
            html.removeAttribute("style");
            // Remove the WordPress admin bar height CSS variable override
            html.style.removeProperty("--wp-admin--admin-bar--height");
          }

          const body = document.getElementsByTagName("body")[0];
          if (body) {
            body.classList.add("admin-bar");
          }
        },
      });

      await this.setIcon(false);
    } catch (error) {
      console.error("Error restoring admin bar:", error);
    }
  }

  /**
   * Updates the extension icon based on the admin bar state
   */
  async setIcon(isHidden: boolean): Promise<void> {
    try {
      const iconPath = {
        16: isHidden ? "img/icon19_1.png" : "img/icon19_0.png",
        32: isHidden ? "img/icon38_1.png" : "img/icon38_0.png",
      };

      await chrome.action.setIcon({ path: iconPath });
    } catch (error) {
      console.error("Error setting icon:", error);
    }
  }

  /**
   * Handles action button clicks
   */
  async handleActionClick(tab: chrome.tabs.Tab): Promise<void> {
    if (!tab.id) return;

    const { found, domain } = await this.checkDomain(tab.id);

    if (!domain) return;

    if (found) {
      await this.removeDomain(domain);
      await this.restoreBar(tab.id);
    } else {
      await this.addDomain(domain);
      await this.removeBar(tab.id);
    }
  }

  /**
   * Updates browser icon when tab is activated
   */
  async updateBrowserIcon(
    activeInfo: chrome.tabs.TabActiveInfo
  ): Promise<void> {
    const { found } = await this.checkDomain(activeInfo.tabId);
    await this.setIcon(found);
  }

  /**
   * Handles window focus changes
   */
  async handleWindowFocusChange(windowId: number): Promise<void> {
    if (windowId === chrome.windows.WINDOW_ID_NONE) return;

    try {
      const [tab] = await chrome.tabs.query({ windowId, active: true });
      if (tab?.id) {
        const { found } = await this.checkDomain(tab.id);
        await this.setIcon(found);
      }
    } catch (error) {
      console.error("Error handling window focus change:", error);
    }
  }

  /**
   * Handles tab updates (page loads)
   */
  async handleTabUpdate(
    tabId: number,
    changeInfo: chrome.tabs.TabChangeInfo,
    tab: chrome.tabs.Tab
  ): Promise<void> {
    if (changeInfo.status === "complete" && tab.url) {
      const { found } = await this.checkDomain(tabId);

      if (found) {
        await this.removeBar(tabId);
      }

      await this.setIcon(found);
    }
  }
}

// Initialize the WordPress Admin Bar Manager
new WpAdminBarManager();
