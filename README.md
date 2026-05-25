# Portrait AR (MindAR)

Web AR experience: scan the printed portrait with your phone camera and see the overlay video on the image.

## Contents

| File | Role |
|------|------|
| `index.html` | Main page |
| `targets.mind` | MindAR compiled target (from the portrait image) |
| `Gemini_Generated_Image_vngjivngjivngjiv.png` | Image to print or display for tracking |
| `Creat_a_video_of_second_wh.mp4` | Video overlaid when the target is found |

## Local testing

The camera does not work when you open `index.html` directly (`file://`). Use a local server:

```bash
npx --yes serve .
```

Then open `http://localhost:3000` on your computer, or use your PC’s LAN IP on your phone (same Wi‑Fi).

## Publish on GitHub Pages

1. Create a new GitHub repository and push this folder (all files, including `.mp4`, `.mind`, and `.png`).
2. In the repo: **Settings → Pages → Build and deployment → Source**: deploy from branch **`main`**, folder **`/ (root)`**.
3. Wait for the site URL (e.g. `https://yourusername.github.io/your-repo-name/`).
4. Open that URL on your phone, tap **Start camera**, and point at the printed portrait.

GitHub Pages serves over HTTPS, which is required for camera access on mobile.

## Regenerating `targets.mind`

If you change the portrait image, recompile the target with [MindAR Image Target Compiler](https://hiukim.github.io/mind-ar-js-doc/tools/compile) and replace `targets.mind`. The overlay video size in `index.html` uses aspect ratio `2438 / 1728` — update `js/app.js` (`TARGET_ASPECT`) if your new image has different dimensions.

## Tips for scanning

- Print the PNG at a reasonable size (A4 or similar) or show it full-screen on another device.
- Avoid glare and motion blur.
- Keep the whole portrait in view.
