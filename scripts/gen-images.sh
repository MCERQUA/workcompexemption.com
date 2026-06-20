#!/usr/bin/env bash
# Generate all images for workcompexemption.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/workcompexemption.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — WORKERS COMP EXEMPTION filing ===

gen "hero.jpg" \
  "Photorealistic professional photo of an independent contractor in a hard hat and safety vest reviewing official government documents and a workers compensation exemption certificate at a construction site job trailer desk, laptop open, clear professional lighting, confident expression, commercial business photography, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic aerial view of a busy construction site with multiple contractors working on a commercial building frame, scaffolding, blue sky, professional commercial construction photography, no text" 4

gen "about.jpg" \
  "Photorealistic portrait of a friendly professional insurance agent at a clean modern office desk, smiling, in business casual attire, papers and a laptop in front of him, warm professional lighting, trustworthy expression, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide professional photo of a licensed contractor in a hard hat and vest shaking hands with an office professional at a construction site, blue sky background, sunny day, both smiling, professional commercial photography, clean and trustworthy, no text, no watermark" 4 1216 640

gen "florida-wc-exemption.jpg" \
  "Photorealistic photo of a contractor holding an official Florida state workers compensation exemption certificate document, construction site in the background, professional business photography, Florida warm sunlight, no text" 4

gen "arizona-wc-exemption.jpg" \
  "Photorealistic photo of a construction contractor in a hard hat working on a building frame in a sunny Arizona desert landscape with blue sky, red rock formations in the distance, professional photography, no text" 4

gen "texas-wc-exemption.jpg" \
  "Photorealistic photo of a Texas construction contractor in a hard hat standing next to a framed building against a big blue Texas sky, oil derricks on the distant horizon, professional photography, no text" 4

gen "contractor-wc-exemption.jpg" \
  "Photorealistic photo of a roofing contractor in safety gear on a residential roof with a clipboard reviewing paperwork, suburban neighborhood below, clear blue sky, professional commercial photography, no text" 4

gen "sole-proprietor-exemption.jpg" \
  "Photorealistic photo of a solo electrician contractor with tool belt and hard hat reviewing paperwork on a job site, working independently on a commercial building, professional photography, no text" 4

gen "llc-exemption.jpg" \
  "Photorealistic photo of two business partners in hard hats and safety vests reviewing official business documents together at a construction site, collaborative professional atmosphere, no text" 4

gen "corporate-officer-exemption.jpg" \
  "Photorealistic photo of a business executive in a suit reviewing compliance documents and insurance certificates at a modern office desk, professional corporate setting, clean lighting, no text" 4

gen "exemption-renewal.jpg" \
  "Photorealistic photo of a contractor checking the expiration date on an official government exemption certificate document with a calendar visible in the background, compliance and organization theme, professional lighting, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
