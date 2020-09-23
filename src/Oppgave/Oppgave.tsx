import React from 'react'
import Forslag from '../Images/Forslag.png'
import BandList from "../Components/BandList/BandList";

export default function Oppgave() {
  return (
    <div style={{display: 'grid', gridTemplateColumns: '30% 70%'}}>
      <div style={{margin: '8px'}}>
        <h1>BandListe Oppgave</h1>
        <p>Du skal lage en side som viser en liste over Band. Det er opprettet et <i>mock-api</i> som fungerer som back-end i denne oppgaven. Se <b>"src/api/api.tsx"</b> for hjelpe funksjoner.</p>
        <p>Hvert band skal vises i form av et kort. Kortet skal vise data bassert på det som ligger i <b>"json-mock-api/db.json"</b>. Rating systemet skal kunne endres av brukeren, og klienten må da sørge for å oppdatere db.</p>
        <p>Kortet skal formes etter eksemplet under. Du står fritt til å velge verktøy / npm pakker som du ønsker å bruke</p>
        <img src={Forslag} alt='Forslag liste' width='100%'></img>
      </div>
      <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h1>Band Liste</h1>
        </div>
        <BandList />
      </div>
    </div>
  )
}
