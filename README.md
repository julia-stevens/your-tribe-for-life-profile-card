# Profile card 
Tijdens sprint 13 kreeg ik de opdracht om mijn bestaande visitekaartje te redesignen met een headless CMS en een framework, namelijk SvelteKit. 

[Zie hier de live site](https://profile-card-julia.netlify.app/)

<img width="600" height="746" alt="image" src="https://github.com/user-attachments/assets/6588ff21-5730-4962-8b98-ac87d909c42e" />

<img width="300" height="754" alt="Screenshot 2025-09-18 at 19 22 41" src="https://github.com/user-attachments/assets/8940b10a-811c-4068-b057-221f5b07524b" />

## Inhoudsopgave
- [Beschrijving](#beschrijving)
- [Kernmerken](#kenmerken)
- [Installatie](#installatie)
- [Licentie](#licentie) 

## Beschrijving
Op de profile card is meer over mij te lezen, licht ik een aantal projecten uit en laat ik een aantal fun facts over mijzelf zien. 

### Light/dark mode
- Op basis van de systeem instellingen van de gebruiker wordt een lichte of donkere versie van de website weergegeven.
- Deze functie is geschreven door `@media (prefers-color-scheme: dark)` toe te passen in CSS.
- Voor mijn eigen portfolio website ga ik werken aan de functionaliteit van de theme knop, zodat de gebruiker met deze knop het thema aan kan passen. 

https://github.com/user-attachments/assets/32033a08-a18b-465f-94ab-bb897c90f24e

https://github.com/user-attachments/assets/e1da24ae-fc9e-474f-a73a-f9253523e5d7

### Ontwerpkeuzes
- Voor deze derde, en laatste iteratie van mijn profile card, heb ik het ontwerp van mijn i love website aangehouden.
- Ik gekozen voor een eenvoudig kleuren pallet, omdat dit voor rust zorgt op de site en dit is iets wat ik uit wil dragen over mijzelf.
- Daarnaast voeg ik speelse elementen toe, zoals de getekende border elementen.
- Tot slot pas ik visuele hiërarchie toe, door onderdelen die bij elkaar horen bij elkaar te plaatsen. Bijvoorbeelde de titels en bijbehorende teksten staan dichter bij elkaar, dan de secties onderling. Ook maak ik bewust gebruik bij borders en teken ik hiermee letterlijk welke onderdelen bij elkaar horen. 

## Kenmerken 
In dit project gebruik ik SvelteKit om een dynamische squadpage te bouwen met herbruikbare componenten en routes. Data wordt opgehaald via de Directus API.

## Routes
- [`/`](https://github.com/julia-stevens/your-tribe-for-life-profile-card/blob/main/src/routes/%2Bpage.svelte): Op de home route wordt de data van de betreffende student (mij) opgehaald. 

## Componenten
- [`ProjectLink`](https://github.com/julia-stevens/your-tribe-for-life-profile-card/blob/main/src/lib/components/ProjectLink.svelte): Voor de verschillende projecten heb ik een component gemaakt, zodat deze herbruikt kan worden. Data wordt opgehaald vanuit de [`projects`](https://github.com/julia-stevens/your-tribe-for-life-profile-card/blob/f963ff197792e06cebdaaa966bdce7bc91c0123c/src/routes/%2Bpage.svelte#L14-L24) array. 

## Data
- Data wordt opgehaald in [`+layout.server.js`](https://github.com/julia-stevens/your-tribe-for-life-profile-card/blob/main/src/routes/%2Blayout.server.js). Hierin wordt een fetch gedaan naar de Directus API, wordt de data verwerkt en gerenderd naar `+page.svelte`.

## Installatie
Om dit project te bouwen moeten onderstaande stappen uitgevoerd worden. `Node.js` en `npm` (of alternatieven, zoals `pnpm` of `yarn`) zijn een vereiste package manager om te kunnen beginnen.  

### Project aanmaken 
- Als je een nieuwe SvelteKit project wil starten, voer volgende commando's uit in de terminal:

```
npx sv create
```

- Volg vervolgens de stappen die in de terminal verschijnen.

### Installeren 
- Nadat het project is uitgevoerd, voer onderstaand command uit om alle dependencies te installeren

```
npm install
```

### Ontwikkelen
-  Als alle dependencies zijn geïnstalleerd, kan de ontwikkelserver gestart worden. Doe dit met onderstaand commando, en krijg automatisch veranderingen te zien:

```
npm run dev -- --open
```

### Builden 
- Op een productversie van je app te maken:

```
npm run build
```

- En op de productieversie te bekijken:

```
npm run preview
```

## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).
