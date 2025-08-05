import { copyFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";

const copyAssets = () => {
  // Ensure dist directory exists
  if (!existsSync("dist")) {
    mkdirSync("dist");
  }

  // Copy manifest.json
  copyFileSync("src/manifest.json", "dist/manifest.json");
  console.log("✓ Copied manifest.json");

  // Copy icons
  const iconDir = "dist/img";
  if (!existsSync(iconDir)) {
    mkdirSync(iconDir, { recursive: true });
  }

  const icons = [
    "icon19_0.png",
    "icon19_1.png",
    "icon38_0.png",
    "icon38_1.png",
    "icon48.png",
    "icon128.png",
  ];

  icons.forEach((icon) => {
    const srcPath = `src/img/${icon}`;
    const destPath = `dist/img/${icon}`;
    if (existsSync(srcPath)) {
      copyFileSync(srcPath, destPath);
      console.log(`✓ Copied ${icon}`);
    } else {
      console.warn(`⚠ Warning: ${icon} not found`);
    }
  });

  console.log("🎉 Build completed successfully!");
};

copyAssets();
