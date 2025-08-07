# Privacy Policy for WordPress Admin Bar Toggle

**Last Updated:** January 2025

## Overview

WordPress Admin Bar Toggle ("the Extension") is a Chrome browser extension that allows users to hide and show the WordPress admin bar on websites with a single click. This privacy policy explains how the Extension handles user data and protects user privacy.

## Information We Collect

### Data Collected by the Extension

**Domain Preferences Only:**

- The Extension stores only your hide/show preferences for specific website domains (e.g., "example.com")
- These preferences are stored as simple true/false values indicating whether you want the admin bar hidden on each domain
- No personal information, browsing history, or website content is collected or stored

**What We DO NOT Collect:**

- Personal identifying information (name, email, address, etc.)
- Login credentials or passwords
- Website content or user-generated content
- Browsing history beyond domain preferences
- Financial or payment information
- Location data
- Communication content
- Any data that could identify you personally

## How We Use Information

**Local Storage Only:**

- Domain preferences are stored locally in your browser using Chrome's `storage.sync` API
- This data is used solely to remember your admin bar visibility preference for each website
- Data is synchronized across your Chrome browsers when you're signed into the same Google account (Chrome's built-in sync feature)

**No External Transmission:**

- The Extension does not send any data to external servers
- The Extension does not communicate with any third-party services
- All functionality operates entirely within your browser

## Data Storage and Security

**Local Browser Storage:**

- All data is stored locally in your browser using Chrome's secure storage APIs
- Data is encrypted and managed by Chrome's built-in security mechanisms
- No data is stored on external servers or databases

**Data Retention:**

- Domain preferences are retained until you manually clear them or uninstall the Extension
- You can clear specific domain preferences by toggling the admin bar visibility back to default
- All data is automatically removed when you uninstall the Extension

## Permissions Explanation

The Extension requires the following permissions to function:

**`storage`**

- **Purpose:** Save your hide/show preferences for each website domain
- **Data Stored:** Domain names and boolean (true/false) values only

**`tabs`**

- **Purpose:** Identify the current website domain to apply your preferences
- **Data Accessed:** Only the domain name of the current tab

**`scripting`**

- **Purpose:** Inject CSS/JavaScript to hide or show the WordPress admin bar
- **Scope:** Limited to modifying admin bar visibility only

**`activeTab`**

- **Purpose:** Apply changes only to the tab you're currently viewing
- **Protection:** Ensures the Extension only affects the active tab when you click the icon

**Host Permissions (`*://*/*`)**

- **Purpose:** Detect WordPress admin bars on any website domain
- **Limitation:** Only activates when you manually click the Extension icon

## Your Privacy Rights

**Data Control:**

- You can view and clear all stored preferences by uninstalling and reinstalling the Extension
- Individual domain preferences can be reset by toggling the admin bar visibility
- No account creation or registration is required

**Data Portability:**

- Since all data is stored locally in your browser, it moves with your Chrome profile
- Chrome's sync feature handles data synchronization across your devices

**No Tracking:**

- The Extension does not track your browsing behavior
- No analytics or usage statistics are collected
- No cookies or tracking technologies are used

## Third-Party Services

**No Third Parties:**

- The Extension does not integrate with any third-party services
- No data is shared with external parties
- No advertising or marketing services are used

## Children's Privacy

This Extension does not knowingly collect any information from children under 13 years of age. The Extension's functionality does not require or request personal information from users of any age.

## Data Breaches

Since no data is transmitted to external servers and all data remains local to your browser, there is no risk of data breaches from our end. Your data security depends on your browser's security and your device's security.

## Changes to This Policy

We may update this privacy policy to reflect changes in the Extension's functionality or legal requirements. Any changes will be:

- Posted in the Extension's listing on the Chrome Web Store
- Included with Extension updates
- Effective immediately upon publication

## Geographic Scope

This Extension is designed to comply with privacy laws including:

- General Data Protection Regulation (GDPR) - European Union
- California Consumer Privacy Act (CCPA) - United States
- Other applicable data protection laws

## Contact Information

For questions about this privacy policy or the Extension's data practices:

**Developer:** Emmanuel Kuebu  
**GitHub:** https://github.com/blissguy/wp-admin-bar-toggle  
**Support:** Create an issue on the GitHub repository

## Legal Basis for Processing (GDPR)

For users in the European Union, the legal basis for processing your data is:

- **Legitimate Interest:** Providing the core functionality you requested (hiding/showing admin bars)
- **Consent:** Your voluntary installation and use of the Extension constitutes consent for this limited data processing

## Your Rights Under GDPR

If you are a EU resident, you have the right to:

- **Access:** View what data is stored (domain preferences only)
- **Rectification:** Modify preferences by using the Extension normally
- **Erasure:** Delete all data by uninstalling the Extension
- **Portability:** Data moves with your Chrome profile
- **Object:** Uninstall the Extension to stop all data processing

## Data Protection Officer

Due to the minimal nature of data processing (local domain preferences only), a formal Data Protection Officer is not required for this Extension.

---

**Summary:** WordPress Admin Bar Toggle is designed with privacy as a core principle. We collect only the minimal data necessary (domain preferences) to provide the requested functionality, store everything locally in your browser, and never transmit data to external servers.
