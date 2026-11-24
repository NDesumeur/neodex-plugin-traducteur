# Traducteur (Translator)

Translates text between 16 languages as you type, with automatic detection of the source language. It uses the MyMemory service, free and with no account.

*Version française : [README.md](README.md)*

## Ctrl+Alt+T and pronunciation (new in 1.4.0)

Copy a text anywhere then Ctrl+Alt+T: it gets translated; the 🔊 buttons read it aloud.

## Usage

- Type or paste text on the left: the translation appears on the right 0.7 seconds after your last keystroke. The character count is shown under the text.
- **From**: a language, or **Detect** (the default); the language found is then shown ("Detected language: Spanish").
- **To**: the target language (English by default). Changing either one runs the translation again.
- **⇄ Swap languages** exchanges the two languages and puts the translation in place of the source text, to translate back the other way.
- **Copy** puts the translation on the clipboard.

Languages: French, English, Spanish, German, Italian, Portuguese, Dutch, Japanese, Korean, Chinese, Russian, Arabic, Polish, Turkish, Swedish and Ukrainian.

## Global shortcut and pronunciation (1.4.0)

In any app, copy a text (Ctrl+C) then press **Ctrl+Alt+T**: NeoDex comes to the front, opens the Translator with that text and translates it. The **Paste and translate** button does the same from the Translator. Two permissions must be accepted: “Global shortcuts” and “Clipboard” (only read when you ask).

The **🔊** buttons read the text and its translation aloud, with the voices installed in Windows (Settings › Time & language › Speech to add more).

## How it works

Long texts are split into pieces of about 450 characters, at sentence ends, then translated piece by piece and joined back together. MyMemory allows about 5,000 characters a day without an account; beyond that, the plugin shows the error returned by the service.

The text to translate is sent to MyMemory (api.mymemory.translated.net), the only site the plugin is allowed to contact.

## Data and sync

Nothing is stored or synced: the text and its translation only stay on screen.

## Install

In NeoDex: **NeoStore → Discover → Traducteur → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
