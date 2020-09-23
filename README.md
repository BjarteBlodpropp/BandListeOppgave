# BandListe Oppgave
Du skal lage en side som viser en liste over Band. Det er opprettet et mock-api som fungerer som back-end i denne oppgaven. Se <b>"src/api/api.tsx"</b> for hjelpe funksjoner.

Hvert band skal vises i form av et kort. Kortet skal vise data bassert på det som ligger i <b>"json-mock-api/db.json"</b>. Rating systemet skal kunne endres av brukeren, og klienten må da sørge for å oppdatere db.

Kortet skal formes etter eksemplet under. Du står fritt til å velge verktøy / npm pakker som du ønsker å bruke

Klon dette prosjektet og legg meg til som contributor.

## Hvordan kjøre
Det er satt opp en lokal json-server db som vil kjøres simultant med klienten hvis du bruker kommandoen:
```
npm start
```
json-server vil kjøres på port 3001 ved default. Endres dette må du også endre DB kall i api.tsx

<b>OBS!</b> Ta med PCen du har brukt til å løse oppgaven til intervjuet
![Alt text](src/Images/Forslag.png?raw=true "Forslag Liste")
