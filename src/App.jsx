import { useState } from 'react'
import UserDirectory from "./components/UserDirectory"
import './App.css'


export default function App() {
  const [tab, setTab] = useState("project")

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      <header style={{ marginBottom: "20px", borderBottom: "2px solid #eee", paddingBottom: "10px" }}>
        <h1>NOTFLIX</h1>
        <nav style={{ display: "flex", gap: "10px" }}>
        

        </nav>
      </header>

      <main>
        {tab === "project" && <UserDirectory />}

      </main>
    </div>
  )
}