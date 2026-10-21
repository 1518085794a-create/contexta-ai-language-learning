# Contexta — AI-Powered Language Learning

**Contexta** is an AI-assisted language learning prototype focused on real-time speaking practice through scenario-based conversations.

Built as a customized derivative of the open-source [Immersive Language Learning with Live API](https://github.com/ZackAkil/immersive-language-learning-with-live-api) project, Contexta explores how conversational AI can support language learners preparing for real-world situations.

**Current version:** v0.1.0 — Voice Learning MVP

## Overview

Contexta focuses on helping learners practice speaking in realistic scenarios rather than relying exclusively on vocabulary memorization or scripted exercises.

The current prototype has been tested locally with Korean-language conversations and uses the Gemini Live API for real-time voice interaction.

## Features

### Existing Open-Source Foundation

The original project provides:

- Real-time voice conversations powered by Gemini Live API
- Scenario-based roleplay missions
- Teacher Mode and Immersive Mode
- Interactive conversation interface
- Session feedback and summary functionality

### Contexta Customization

Development and customization work includes:

- Korean exchange-student learning scenarios with specific objectives and role personas
- Adjustments to language-specific conversation instructions
- Local frontend and backend integration testing
- Speech transcription interaction testing and refinements
- Product documentation and iterative development planning

These changes build on the original project's architecture rather than replacing it.

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | JavaScript, Vite |
| Backend | Python, FastAPI |
| AI | Google Gemini Live API |
| Real-time communication | WebSocket |
| Audio | Web Audio API |
| Version control | Git |

## Local Development

### Requirements

- Node.js
- Python 3.10+
- Appropriate Google Gemini API access and credentials

### Frontend

```bash
npm install
npm run dev
```

### Backend

Create a Python virtual environment, install dependencies from `requirements.txt`, and configure the required environment variables.

For the locally tested development setup:

```bash
DEV_MODE=true python -m server.main
```

Keep API keys and other credentials in local environment files. Do not commit `.env` to version control.

## Current Status

**v0.1.0 — Local MVP**

- Local frontend and backend tested
- Real-time Korean voice conversation tested
- Teacher Mode transcription tested
- Scenario-based conversation workflow available

This is an early-stage prototype. Some session-ending errors and interaction inconsistencies remain under investigation.

## Roadmap

- Improve Teacher Mode responses and teaching experience
- Improve session stability and error handling
- Develop structured learning feedback and progress tracking
- Refine multilingual learning experiences
- Improve interface design and product demonstration quality

Roadmap items are planned improvements, not completed features.

## Attribution and License

Contexta is a derivative work based on:

**Immersive Language Learning with Live API**  
Original repository: https://github.com/ZackAkil/immersive-language-learning-with-live-api

The original source code and associated copyright notices remain attributed to their respective copyright holders, including Google LLC where indicated.

This repository retains the Apache License 2.0 terms in the `LICENSE` file. Modifications and additional documentation for Contexta are identified as derivative development work.

Contexta is an independent learning prototype and is not an official Google product.