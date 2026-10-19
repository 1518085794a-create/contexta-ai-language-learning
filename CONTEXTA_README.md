# Contexta MVP v0.1 — Korean Exchange Scenarios

A scenario-focused adaptation of [Immersive Language Learning with Live API](https://github.com/ZackAkil/immersive-language-learning-with-live-api). Original source is preserved apart from `src/data/missions.json`, which now contains eight Korean exchange-student scenarios.

## Current scope
- Eight Korean exchange-student practice missions with objectives and role personas.
- Existing Teacher and Immersive modes, live audio and summary remain inherited from upstream.
- This is **not** yet a verified running build. Korean is selected through the original language picker; missions are not language-locked.
- Learning profile, deadline-based study plans, progress storage, robust rubric scoring, and analytics are **not implemented**.

## Setup
See the upstream `README.md`. Requires Node.js 18+, Python 3.10+, Google Cloud Vertex AI access and Application Default Credentials. Copy `.env.example` to `.env` and supply your own project settings; never commit credentials. Then run `./scripts/install.sh` and `./scripts/dev.sh`. Cloud usage may incur costs.

## Validation plan
1. Confirm eight mission cards render and select Korean in the language picker.
2. Confirm each scenario enters Teacher and Immersive modes.
3. Complete and abandon sessions; verify feedback and failure paths.
4. Record objective completion, latency, correction usefulness, and API costs.

## Attribution and licensing
Original code copyright and license notices retained. Licensed under Apache License 2.0; see `LICENSE`. Modified file: `src/data/missions.json` (replaced missions with exchange-focused scenarios). Do not present upstream code as independently authored.
