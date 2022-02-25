import { useState, useEffect } from "react";


export function App() {

  const [Info, setInfo] = useState([])
  const [newNote, setNewNote] = useState("");

  useEffect(()=>{
    fetch("http://localhost:3001/api/games").then((result) => result.json()).then((data)=>{
      return setInfo(data)
    })
  },[])

  const cambio = (e)=>{
    setNewNote(e.target.value)
  }
  const add = (e) =>{

    const newg = {
      id: 5,
      name: newNote
    }

    setInfo(Info.push(newg))

  }

  return (
    <div>
      <header>
        <h1>Notas</h1>
      </header>
      <main>
        <section>
            <input type="text" onChange={cambio} />
            <button onClick={add}>Agregar</button>
          <u>
            {Info.map((note) => {
              return <li key={note.id}>{note.name}</li>
            })}
          </u>

        </section>


      </main>
    </div>
  );
}