import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_og_banner():
    W, H = 1200, 630
    banner = Image.new("RGBA", (W, H), (4, 9, 20, 255))
    draw = ImageDraw.Draw(banner)

    # 1. Background gradient & subtle tech glow
    for y in range(H):
        t = y / float(H)
        # Deep navy (#040914) to dark slate blue (#08142c)
        r = int(4 * (1 - t) + 8 * t)
        g = int(9 * (1 - t) + 20 * t)
        b = int(20 * (1 - t) + 44 * t)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

    # Glow overlay layer
    glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_layer)

    # Cyan radial glow on the left near the logo
    cx_glow, cy_glow = 250, 315
    for rad in range(350, 0, -5):
        alpha = int(45 * (1.0 - rad / 350.0))
        glow_draw.ellipse(
            [cx_glow - rad, cy_glow - rad, cx_glow + rad, cy_glow + rad],
            fill=(24, 90, 219, alpha)
        )
    # Gold accent glow in top right
    for rad in range(250, 0, -8):
        alpha = int(30 * (1.0 - rad / 250.0))
        glow_draw.ellipse(
            [1050 - rad, 100 - rad, 1050 + rad, 100 + rad],
            fill=(245, 158, 11, alpha)
        )

    banner = Image.alpha_composite(banner, glow_layer)
    draw = ImageDraw.Draw(banner)

    # Subtle decorative grid pattern
    for gx in range(0, W, 60):
        draw.line([(gx, 0), (gx, H)], fill=(255, 255, 255, 6), width=1)
    for gy in range(0, H, 60):
        draw.line([(0, gy), (W, gy)], fill=(255, 255, 255, 6), width=1)

    # Outer border
    draw.rectangle([10, 10, W - 10, H - 10], outline=(56, 189, 248, 60), width=2)
    draw.rectangle([14, 14, W - 14, H - 14], outline=(245, 158, 11, 40), width=1)

    # 2. Render KS Emblem Logo
    logo_path = os.path.join(os.path.dirname(__file__), "..", "client", "public", "logo.png")
    if os.path.exists(logo_path):
        logo_img = Image.open(logo_path).convert("RGBA")
    else:
        # Fallback to rendering master icon
        from generate_brand_icons import render_master_icon
        logo_img = render_master_icon(size=512)

    logo_size = 320
    logo_resized = logo_img.resize((logo_size, logo_size), Image.Resampling.LANCZOS)

    # Logo shadow/glow
    logo_x = 75
    logo_y = (H - logo_size) // 2

    # Paste logo with transparency
    banner.paste(logo_resized, (logo_x, logo_y), logo_resized)

    # 3. Typography setup
    font_dir = os.path.join(os.environ.get("WINDIR", "C:\\Windows"), "Fonts")
    
    def get_font(font_name, size):
        try:
            return ImageFont.truetype(os.path.join(font_dir, font_name), size)
        except:
            return ImageFont.load_default()

    font_badge = get_font("segoeuib.ttf", 20)
    font_title = get_font("segoeuib.ttf", 46)
    font_subtitle = get_font("segoeuib.ttf", 28)
    font_creds = get_font("segoeui.ttf", 23)
    font_pills = get_font("segoeuib.ttf", 18)
    font_footer = get_font("segoeuib.ttf", 20)

    text_x = 440

    # A. Top Category Badge Capsule
    badge_text = "GOVT. REGISTERED VALUER  •  CHARTERED ENGINEER (IEI)"
    bbox = draw.textbbox((0, 0), badge_text, font=font_badge)
    bw = bbox[2] - bbox[0]
    bh = bbox[3] - bbox[1]
    
    badge_pad_x, badge_pad_y = 16, 7
    badge_rect = [text_x, 100, text_x + bw + (badge_pad_x * 2), 100 + bh + (badge_pad_y * 2)]
    
    draw.rounded_rectangle(badge_rect, radius=8, fill=(15, 30, 60, 220), outline=(56, 189, 248, 180), width=1)
    draw.text((text_x + badge_pad_x, 100 + badge_pad_y - 2), badge_text, fill=(56, 189, 248, 255), font=font_badge)

    # B. Main Brand Title
    title_y = 160
    draw.text((text_x, title_y), "KS CHARTERED ENGINEERS", fill=(255, 255, 255, 255), font=font_title)

    # C. Secondary Brand Name (Gold / Cyan)
    sub_y = title_y + 60
    draw.text((text_x, sub_y), "Valuers & Technical Services", fill=(245, 158, 11, 255), font=font_subtitle)

    # D. Credentials & Founder
    cred_y = sub_y + 48
    draw.text((text_x, cred_y), "Er. Mukesh Singh  •  IIT Roorkee Alumnus (B.Tech)", fill=(203, 213, 225, 255), font=font_creds)

    # E. Services Tags Pills
    pills = [
        "Plant & Machinery Valuation",
        "Bank Loan & Capital Gains",
        "DGFT & Customs CE Cert.",
        "CEIG Solar Drawing Approvals"
    ]

    pill_y = cred_y + 50
    curr_x = text_x
    for pill in pills[:2]:
        pbbox = draw.textbbox((0, 0), pill, font=font_pills)
        pw = pbbox[2] - pbbox[0]
        ph = pbbox[3] - pbbox[1]
        prect = [curr_x, pill_y, curr_x + pw + 20, pill_y + ph + 12]
        draw.rounded_rectangle(prect, radius=6, fill=(15, 23, 42, 230), outline=(56, 189, 248, 100), width=1)
        draw.text((curr_x + 10, pill_y + 5), pill, fill=(226, 232, 240, 255), font=font_pills)
        curr_x += pw + 32

    pill_y_2 = pill_y + 40
    curr_x = text_x
    for pill in pills[2:]:
        pbbox = draw.textbbox((0, 0), pill, font=font_pills)
        pw = pbbox[2] - pbbox[0]
        ph = pbbox[3] - pbbox[1]
        prect = [curr_x, pill_y_2, curr_x + pw + 20, pill_y_2 + ph + 12]
        draw.rounded_rectangle(prect, radius=6, fill=(15, 23, 42, 230), outline=(56, 189, 248, 100), width=1)
        draw.text((curr_x + 10, pill_y_2 + 5), pill, fill=(226, 232, 240, 255), font=font_pills)
        curr_x += pw + 32

    # F. Bottom Verified Bar
    bar_y = H - 85
    draw.line([(text_x, bar_y), (W - 50, bar_y)], fill=(56, 189, 248, 60), width=1)
    
    footer_text = "📍 Jaipur, Rajasthan  |  🇮🇳 Pan-India Services  |  📞 +91 91586 58885"
    draw.text((text_x, bar_y + 14), footer_text, fill=(148, 163, 184, 255), font=font_footer)

    # Convert to RGB and save
    final_banner = banner.convert("RGB")
    
    target_paths = [
        os.path.join(os.path.dirname(__file__), "..", "client", "public", "og-image.png"),
        os.path.join(os.path.dirname(__file__), "..", "client", "public", "og-image-ks.png"),
        os.path.join(os.path.dirname(__file__), "..", "client", "dist", "og-image.png"),
        os.path.join(os.path.dirname(__file__), "..", "client", "dist", "og-image-ks.png"),
    ]

    for p in target_paths:
        os.makedirs(os.path.dirname(p), exist_ok=True)
        final_banner.save(p, "PNG", optimize=True)
        print(f"Generated: {p} ({W}x{H})")

if __name__ == "__main__":
    create_og_banner()
