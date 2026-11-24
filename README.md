# Traducteur

Traduit un texte entre 16 langues pendant que tu l'écris, avec la détection automatique de la langue de départ. Il utilise le service MyMemory, gratuit et sans compte.

*English version: [README.en.md](README.en.md)*

## Ctrl+Alt+T et prononciation (nouveau en 1.4.0)

Copie un texte n'importe où puis Ctrl+Alt+T : il est traduit ; les boutons 🔊 le lisent à voix haute.

## Utilisation

- Écris ou colle un texte à gauche : la traduction apparaît à droite 0,7 seconde après ta dernière frappe. Le nombre de caractères s'affiche sous le texte.
- **De** : une langue, ou **Détecter** (par défaut) ; la langue trouvée est alors indiquée (« Langue détectée : Espagnol »).
- **Vers** : la langue d'arrivée (anglais par défaut). Changer l'une ou l'autre relance la traduction.
- **⇄ Inverser les langues** échange les deux langues et met la traduction à la place du texte de départ, pour traduire dans l'autre sens.
- **Copier** met la traduction dans le presse-papiers.

Langues : français, anglais, espagnol, allemand, italien, portugais, néerlandais, japonais, coréen, chinois, russe, arabe, polonais, turc, suédois et ukrainien.

## Raccourci global et prononciation (1.4.0)

Dans n’importe quelle appli, copie un texte (Ctrl+C) puis appuie sur **Ctrl+Alt+T** : NeoDex revient devant, ouvre le Traducteur avec ce texte et le traduit. Le bouton **Coller et traduire** fait pareil depuis le Traducteur. Il faut accepter deux autorisations : « Raccourcis globaux » et « Presse-papiers » (lu seulement quand tu le demandes).

Les boutons **🔊** lisent le texte et sa traduction à voix haute, avec les voix installées dans Windows (Paramètres › Heure et langue › Voix pour en ajouter).

## Fonctionnement

Les textes longs sont découpés en morceaux d'environ 450 caractères, aux fins de phrases, puis traduits morceau par morceau et remis bout à bout. MyMemory accepte environ 5 000 caractères par jour sans compte ; au-delà, le plugin affiche l'erreur renvoyée par le service.

Le texte à traduire est envoyé à MyMemory (api.mymemory.translated.net), le seul site que le plugin a le droit de contacter.

## Données et synchronisation

Rien n'est enregistré ni synchronisé : le texte et sa traduction restent seulement à l'écran.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Traducteur → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
