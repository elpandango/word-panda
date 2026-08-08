from __future__ import annotations

import json
from collections import Counter
from pathlib import Path

from PIL import Image


WORKSPACE = Path("/Users/yevhen/projects/word-panda")
RAW_OCR_PATH = WORKSPACE / "docs/flashcards/c1-deutsch-cards-ocr-pairs.json"
SOURCE_DIR = Path("/Users/yevhen/Downloads/deutsch-cards")
OUTPUT_DIR = WORKSPACE / "docs/flashcards/c1-card-crops"
OUTPUT_MANIFEST = WORKSPACE / "docs/flashcards/c1-deutsch-cards-normalized.json"

TOPIC_HINTS = [
    "Staat",
    "Wirtschaft",
    "Arbeit",
    "Medien",
    "Kommunikation",
    "Dorf",
    "Transport",
    "Sport und Freizeit",
    "Wissenschaft und Bildung",
    "Kultur und Kunst",
    "Natur",
    "Gesundheit",
    "Gefühle",
    "Aussehen",
    "Ernährung",
    "Einkäufe und Dienstleistungen",
    "Alltag",
    "Stoffe und Materialien",
]

def guess_topic(text: str) -> str | None:
    normalized = text.replace("\n", " ")
    counts: Counter[str] = Counter()

    for topic in TOPIC_HINTS:
        for part in topic.split():
            if len(part) < 4:
                continue
            counts[topic] += normalized.count(part)

    topic, hits = counts.most_common(1)[0]

    return topic if hits > 0 else None


def crop_grid(image_path: Path, output_dir: Path) -> list[str]:
    image = Image.open(image_path)
    width, height = image.size
    cols = 3
    rows = 5
    crop_paths: list[str] = []

    for row in range(rows):
        for col in range(cols):
            left = round(col * width / cols)
            top = round(row * height / rows)
            right = round((col + 1) * width / cols)
            bottom = round((row + 1) * height / rows)

            crop = image.crop((left, top, right, bottom))
            slot = row * cols + col + 1
            crop_path = output_dir / f"{slot:02d}.png"
            crop.save(crop_path)
            crop_paths.append(str(crop_path.relative_to(WORKSPACE)))

    return crop_paths


def main() -> None:
    raw_pairs = json.loads(RAW_OCR_PATH.read_text())
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    normalized_pairs = []

    for pair in raw_pairs:
        pair_index = pair["pairIndex"]
        pair_dir = OUTPUT_DIR / f"pair-{pair_index:02d}"
        front_dir = pair_dir / "front"
        back_dir = pair_dir / "back"
        front_dir.mkdir(parents=True, exist_ok=True)
        back_dir.mkdir(parents=True, exist_ok=True)

        front_file = SOURCE_DIR / pair["frontFile"]
        back_file = SOURCE_DIR / pair["backFile"]

        front_crops = crop_grid(front_file, front_dir)
        back_crops = crop_grid(back_file, back_dir)

        cards = []
        for slot, (front_crop, back_crop) in enumerate(zip(front_crops, back_crops), start=1):
            cards.append(
                {
                    "slot": slot,
                    "frontCrop": front_crop,
                    "backCrop": back_crop,
                }
            )

        normalized_pairs.append(
            {
                "pairIndex": pair_index,
                "level": pair["level"],
                "topicHint": guess_topic(pair["frontText"]),
                "frontFile": pair["frontFile"],
                "backFile": pair["backFile"],
                "cardCount": len(cards),
                "ocr": {
                    "frontText": pair["frontText"],
                    "backText": pair["backText"],
                },
                "cards": cards,
            }
        )

    OUTPUT_MANIFEST.write_text(
        json.dumps(normalized_pairs, ensure_ascii=False, indent=2)
    )
    print(f"Wrote {OUTPUT_MANIFEST}")


if __name__ == "__main__":
    main()
