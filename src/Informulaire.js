import React, { useState } from "react"

const Informulaire = () => {
  const [info, setInfo] = useState({ nom: "", prenom: "", datenaissance: "" })
  console.log(info)
  const envoyer = () => {}
  return (
    <div>
      <form onSubmit={envoyer}>
        <input
          name="nom"
          onChange={e => setInfo({ ...info, name: e.target.value })}
        />

        <input
          name="prenom"
          onChange={e => setInfo({ ...info, prenom: e.target.value })}
        />

        <input
          name="datenaissance"
          onChange={e => setInfo({ ...info, datenaissance: e.target.value })}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default Informulaire
