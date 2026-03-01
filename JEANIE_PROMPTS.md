# JEANIE AVATAR PROMPTS FOR SDNext

Use these prompts in SDNext (stable-diffusion-webui or SD.Next)

---

## MAIN PROMPT - Generate Jeanie's Face

```
highly detailed photorealistic portrait of beautiful woman, 34 years old, oval face shape, light olive warm beige skin tone, brownish red auburn chestnut hair, long wavy shoulder length layered hair, emerald green eyes, almond shaped expressive large eyes, straight delicate small nose, full natural pink lips, natural subtle makeup with light eyeliner and blush, elegant mascara and professional style, wearing fitted professional blouse, soft studio lighting, looking directly at camera, frontal pose, clean solid dark blue background, 8k quality, masterpiece, best quality, photorealistic, hyper realistic
```

## NEGATIVE PROMPT

```
deformed, ugly, bad anatomy, bad proportions, extra limbs, fused fingers, too many fingers, mutated hands, ugly, poorly drawn, worst quality, low quality, blurry, dark, shadow, grainy, watermark, text, logo, anime, cartoon, 3d render, painting, illustration
```

## SETTINGS FOR SDNext

- **Width/Height**: 1024x1024 (or 512x512 for faster)
- **Steps**: 25-35
- **CFG Scale**: 7-8
- **Sampler**: DPM++ 2M Karras or Euler a
- **Model**: Realistic Vision or Juggernaut XL

---

## VARIATIONS

### Happy/ Smiling
```
beautiful woman, 34 years old, smiling warmly, happy expression, auburn hair, green eyes, professional attire, studio lighting
```

### Thinking
```
beautiful woman, 34 years old, thoughtful expression, looking to the side, hand on chin, auburn hair, green eyes, professional
```

### Talking/Speaking
```
beautiful woman, 34 years old, mouth slightly open, speaking, auburn hair, green eyes, professional, talking
```

---

## FOR HOLOGRAPHIC EFFECT (after generating base image)

Use img2img with:
```
holographic effect, blue glow, ethereal, digital, glowing edges, particle effects, transparent, glass effect, cyberpunk aesthetic, blue tint
```

---

## LIP SYNC TOOLS (after generating)

1. **Wav2Lip** - GitHub.com/ManthanR伽/V-Wav2Lip
2. **SadTalker** - GitHub.com/Winfrand/SadTalker  
3. **LivePortrait** - GitHub.com/KwaiVGI/LivePortrait

Command example:
```bash
python inference.py --face jeanie.png --audio your_voice.wav --outfile jeanie_speaking.mp4
```

---

## QUICK START

1. Open SDNext in browser
2. Copy MAIN PROMPT to prompt field
3. Copy NEGATIVE PROMPT to negative prompt field
4. Use settings above
5. Generate
6. Use img2img with holographic effect for final version
7. Use Wav2Lip to add talking animation
