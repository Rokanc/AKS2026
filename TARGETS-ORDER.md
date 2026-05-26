# MindAR target index order

`targets.mind` maps each photo to a `targetIndex` (0, 1, 2, …).  
The app assumes **the same order as sorting PNG names A→Z** in the MindAR compiler.

| Index | Name | Video |
|------:|------|-------|
| 0 | Airida | Airida.mp4 |
| 1 | Albertas | Albertas.mp4 |
| 2 | Dalius | Dalius.mp4 |
| 3 | Dija | Dija.mp4 |
| 4 | Ema | Ema.mp4 |
| 5 | Gabriele | Gabriele.mp4 |
| 6 | Greta | Greta.mp4 |
| 7 | Kamila | Kamila.mp4 |
| 8 | Liana | Liana.mp4 |
| 9 | Lukrecija | Lukrecija.mp4 |
| 10 | Paulius | Paulius.mp4 |
| 11 | Rugile | Rugile.mp4 |
| 12 | Saule | Saule.mp4 |
| 13 | Ugnius | Ugnius.mp4 |
| 14 | Urte | Urte.mp4 |
| 15 | Viktorija | Viktorija.mp4 |
| 16 | Vilte | Vilte.mp4 |

If scanning **Paulius** plays the wrong video, the compiler order differs from this list. Recompile with images in this order, or reorder the `TARGET_NAMES` array in `index.html` to match how you uploaded them.
