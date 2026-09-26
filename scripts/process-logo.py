from pathlib import Path

from PIL import Image

root = Path(__file__).resolve().parents[1]
src = Path(
    r"C:\Users\akhil\.cursor\projects\d-Bitvion-Techzz-IAA-Software\assets\c__Users_akhil_AppData_Roaming_Cursor_User_workspaceStorage_0d2508b7eed918f25d5bdecd0a4251f0_images_image-ffb70a32-69b5-4363-b7c8-c72329e7679b.png"
)
out_dir = root / "public" / "brand"
out_dir.mkdir(parents=True, exist_ok=True)
dest = out_dir / "iaa-logo.png"
favicon = root / "public" / "favicon.png"
og_path = root / "public" / "og.png"

img = Image.open(src).convert("RGBA")
pixels = img.load()
width, height = img.size

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        white = r >= 248 and g >= 248 and b >= 248
        near_white = min(r, g, b) >= 236 and abs(r - g) < 8 and abs(g - b) < 8
        if white or near_white:
            pixels[x, y] = (255, 255, 255, 0)
        else:
            pixels[x, y] = (r, g, b, 255)

bbox = img.getbbox()
if bbox:
    pad = 8
    left, top, right, bottom = bbox
    img = img.crop(
        (
            max(0, left - pad),
            max(0, top - pad),
            min(width, right + pad),
            min(height, bottom + pad),
        )
    )

img.save(dest, "PNG")

mark = img.copy()
mark.thumbnail((180, 180), Image.Resampling.LANCZOS)
fav = Image.new("RGBA", (180, 180), (0, 0, 0, 0))
fav.paste(mark, ((180 - mark.width) // 2, (180 - mark.height) // 2), mark)
fav.save(favicon, "PNG")

og = Image.new("RGB", (1200, 630), (247, 246, 241))
logo = img.copy()
logo.thumbnail((560, 240), Image.Resampling.LANCZOS)
og.paste(logo, ((1200 - logo.width) // 2, (630 - logo.height) // 2), logo)
og.save(og_path, "PNG")

print("logo", dest, img.size)
