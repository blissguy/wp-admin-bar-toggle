# WordPress Admin Bar Control - Modern Chrome Extension

> **Modernized for 2025** - Now featuring Manifest V3, TypeScript, Vite build system, and modern ES2022+ code!

A powerful Chrome extension that allows you to hide and show the WordPress admin bar with just one click, on a per-domain basis. Perfect for developers and designers who need to switch between editing and design modes quickly.

## Features

- **One-click toggle** - Hide/show WordPress admin bar instantly
- **Per-domain memory** - Settings saved separately for each website
- **Manifest V3** - Uses the latest Chrome extension standards
- **Modern Security** - Enhanced permissions and security model
- **TypeScript** - Full type safety and better developer experience
- **Vite Build System** - Lightning-fast development and builds

## Quick Start

### Installation for Users

1. Download the latest release from the Chrome Web Store _(coming soon)_
2. Or manually install:
   - Download this repository
   - Run `npm install && npm run build`
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` folder

### Development Setup

```bash
# Clone the repository
git clone https://github.com/emmanuelkuebu/wp-admin-bar-hide.git
cd wp-admin-bar-hide

# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix
```

## Technology Stack

- **Language**: TypeScript (ES2022+)
- **Build Tool**: Vite 6.0+
- **Extension API**: Chrome Extension Manifest V3
- **Code Quality**: ESLint + TypeScript strict mode
- **Browser Support**: Chrome 88+

## Project Structure

```
wp-admin-bar-hide/
├── src/
│   ├── lib/
│   │   └── background.ts      # Service worker (main extension logic)
│   ├── img/                   # Extension icons
│   └── manifest.json          # Extension configuration
├── dist/                      # Built files (auto-generated)
├── build.js                   # Asset copying script
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
└── eslint.config.js           # ESLint configuration
```

## How It Works

1. **Service Worker**: Runs in the background, listening for browser action clicks and tab events
2. **Domain Storage**: Uses Chrome's `chrome.storage.sync` API to remember settings per domain
3. **Content Script Injection**: Dynamically injects JavaScript to hide/show the admin bar
4. **Icon Updates**: Visual feedback through dynamic icon changes

## What's New in 2.0

### Major Modernization (2025)

- **Manifest V3** - Migrated from deprecated Manifest V2
- **TypeScript** - Full type safety with proper Chrome extension types
- **Modern Build System** - Replaced Grunt with Vite for faster builds
- **ES2022+ Syntax** - Modern JavaScript features (async/await, classes, etc.)
- **Enhanced Security** - Updated permissions model and CSP
- **Better Error Handling** - Comprehensive try-catch blocks and logging
- **Code Quality** - ESLint rules and TypeScript strict mode

### API Updates

- `chrome.browserAction` → `chrome.action`
- `chrome.tabs.executeScript` → `chrome.scripting.executeScript`
- Background pages → Service workers
- Enhanced permission declarations

## Permissions Explained

- **`storage`** - Remember your hide/show preferences per domain
- **`tabs`** - Access tab information to determine current domain
- **`scripting`** - Inject code to hide/show the admin bar
- **`activeTab`** - Only access the currently active tab when you click the extension
- **`host_permissions`** - Work on all websites (needed to detect WordPress sites)

## Development & Debugging

1. **Load Extension**: `chrome://extensions/` → Enable Developer Mode → Load Unpacked (`dist` folder)
2. **Debug Service Worker**: Click "Inspect views service worker" in the extension tile
3. **Hot Reload**: Changes require rebuild (`npm run build`) and extension reload
4. **Type Checking**: Run `npm run type-check` for TypeScript validation

## Browser Compatibility

- **Chrome 88+** (Manifest V3 support)
- **Edge 88+** (Chromium-based)
- **Firefox** (Different extension API - would need separate build)
- **Safari** (Different extension system)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the TypeScript and ESLint rules
4. Test thoroughly with `npm run build` and manual testing
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Acknowledgments

- Original concept by [Eran Schoellhorn](https://github.com/EranSch)
- Modernized and maintained by [Emmanuel Kuebu](https://github.com/emmanuelkuebu)
- Built with modern web technologies and Chrome extension best practices

---

**If this extension helps you, please star the repository!**
