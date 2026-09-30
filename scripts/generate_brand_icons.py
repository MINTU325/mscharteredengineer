import math
import os
from PIL import Image, ImageDraw, ImageFont

def render_master_icon(size=2048):
    # High-res canvas with transparent background
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    cx, cy = size / 2.0, size / 2.0

    # 1. Dark circular badge container (#040914)
    r_badge = size * 0.49
    draw.ellipse(
        [cx - r_badge, cy - r_badge, cx + r_badge, cy + r_badge],
        fill=(4, 9, 20, 255)
    )

    # 2. Outer mechanical gear teeth
    # In 100x100 space, r=42, stroke=7, dasharray="14 9" (circumference ~ 263.89, ~ 11-12 teeth)
    r_gear = size * 0.42
    stroke_gear = size * 0.07
    num_teeth = 12
    tooth_angle_span = (2 * math.pi) / num_teeth

    for i in range(num_teeth):
        start_rad = i * tooth_angle_span
        tooth_rad = tooth_angle_span * 0.62  # 62% tooth, 38% gap
        end_rad = start_rad + tooth_rad

        start_deg = math.degrees(start_rad)
        end_deg = math.degrees(end_rad)

        # Draw arc segment for tooth
        bbox = [cx - r_gear, cy - r_gear, cx + r_gear, cy + r_gear]
        # Cyan-blue gradient simulation based on angle
        t = (math.sin(start_rad) + 1) / 2
        r_col = int(56 * (1 - t) + 30 * t)
        g_col = int(189 * (1 - t) + 64 * t)
        b_col = int(248 * (1 - t) + 175 * t)
        draw.arc(bbox, start=start_deg, end=end_deg, fill=(r_col, g_col, b_col, 255), width=int(stroke_gear))

    # 3. Inner structural ring (r=35, stroke=3 in 100x100)
    r_inner_ring = size * 0.35
    stroke_inner = max(2, int(size * 0.03))
    draw.ellipse(
        [cx - r_inner_ring, cy - r_inner_ring, cx + r_inner_ring, cy + r_inner_ring],
        outline=(56, 189, 248, 220),
        width=stroke_inner
    )

    # 4. Static Inner Ring (r=26, fill=#040914, stroke=#ffffff with width=3)
    r_center = size * 0.26
    stroke_center = max(2, int(size * 0.03))
    draw.ellipse(
        [cx - r_center, cy - r_center, cx + r_center, cy + r_center],
        fill=(4, 9, 20, 255),
        outline=(255, 255, 255, 255),
        width=stroke_center
    )

    # 5. Dashed / thin Cyan Accent Ring (r=20, stroke=1 in 100x100)
    r_accent = size * 0.20
    stroke_accent = max(1, int(size * 0.012))
    draw.ellipse(
        [cx - r_accent, cy - r_accent, cx + r_accent, cy + r_accent],
        outline=(56, 189, 248, 120),
        width=stroke_accent
    )

    # 6. Text "MS" centered in bold
    font_size = int(size * 0.28)
    font_path = "C:/Windows/Fonts/segoeuib.ttf"
    if not os.path.exists(font_path):
        font_path = "C:/Windows/Fonts/arialbd.ttf"
    
    font = ImageFont.truetype(font_path, font_size)
    text = "MS"
    
    # Measure text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]

    # Draw centered text (nudge slightly for vertical optical center)
    tx = cx - tw / 2.0 - bbox[0]
    ty = cy - th / 2.0 - bbox[1] + (size * 0.01)
    draw.text((tx, ty), text, font=font, fill=(255, 255, 255, 255))

    return img

def main():
    print("Rendering master 2048x2048 brand emblem...")
    master = render_master_icon(2048)

    # Save to client/public and client/dist
    base_dirs = [
        os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "client", "public")),
        os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "client", "dist")),
    ]

    sizes = {
        "logo.png": 512,
        "logo-512x512.png": 512,
        "favicon-192x192.png": 192,
        "apple-touch-icon.png": 180,
        "favicon-96x96.png": 96,
        "favicon-48x48.png": 48,
    }

    # SVG content
    svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="blueGear" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#1e40af" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="49" fill="#040914" />
  <circle cx="50" cy="50" r="42" fill="none" stroke="url(#blueGear)" stroke-width="7" stroke-dasharray="14 9" stroke-linecap="round" />
  <circle cx="50" cy="50" r="35" fill="none" stroke="url(#blueGear)" stroke-width="3" opacity="0.9" />
  <circle cx="50" cy="50" r="26" fill="#040914" stroke="#ffffff" stroke-width="3" />
  <circle cx="50" cy="50" r="20" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3 3" opacity="0.5" />
  <text x="50" y="60.5" font-family="Segoe UI, Arial, sans-serif" font-weight="900" font-size="28" fill="#ffffff" text-anchor="middle" letter-spacing="1">MS</text>
</svg>"""

    for bdir in base_dirs:
        if not os.path.exists(bdir):
            continue

        # Write SVGs
        with open(os.path.join(bdir, "favicon.svg"), "w", encoding="utf-8") as f:
            f.write(svg_content)
        with open(os.path.join(bdir, "logo.svg"), "w", encoding="utf-8") as f:
            f.write(svg_content)

        # Write PNGs
        ico_images = []
        for filename, sz in sizes.items():
            resized = master.resize((sz, sz), Image.Resampling.LANCZOS)
            outpath = os.path.join(bdir, filename)
            resized.save(outpath, "PNG", optimize=True)
            print(f"Saved {filename} ({sz}x{sz}) to {bdir}")

        # Multi-size ICO: 48, 32, 16
        ico_48 = master.resize((48, 48), Image.Resampling.LANCZOS)
        ico_32 = master.resize((32, 32), Image.Resampling.LANCZOS)
        ico_16 = master.resize((16, 16), Image.Resampling.LANCZOS)
        ico_path = os.path.join(bdir, "favicon.ico")
        ico_48.save(ico_path, format="ICO", sizes=[(48, 48), (32, 32), (16, 16)])
        print(f"Saved multi-resolution favicon.ico to {bdir}")

    print("Brand icons generation complete!")

if __name__ == "__main__":
    main()
