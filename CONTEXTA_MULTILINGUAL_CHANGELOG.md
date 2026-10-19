# Contexta multilingual update v0.2

- Source/target language selector now supports Chinese (Mandarin), English, Korean, and Japanese.
- Defaults to Chinese (Mandarin) → Korean.
- Migrates previous unsupported language preferences to the new defaults.
- AI conversation prompt receives selected source and target language; feedback prompt uses source language instead of hard-coded English.
- Original Apache-2.0 LICENSE preserved.

## Scope and limitations
- The **interface text is still English**. Full UI localization into four languages is a separate task.
- The eight existing missions are Korea-specific; other target languages can be selected, but scenarios need culturally appropriate variants and end-to-end testing.
- Voice quality, model support, and backend integration have not been verified.
- This package is not a production-ready multilingual learning platform.
