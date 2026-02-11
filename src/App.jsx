import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const salvas = localStorage.getItem('@minhasTarefas')
    return salvas ? JSON.parse(salvas) : []
  })
  const [inputTarefa, setInputTarefa] = useState("")

  useEffect(() => {
    localStorage.setItem('@minhasTarefas', JSON.stringify(tarefas))
  }, [tarefas])

  const adicionarTarefa = (e) => {
    e.preventDefault()
    if (inputTarefa.trim() === "") return
    const novaTarefa = { id: Date.now(), texto: inputTarefa, concluida: false }
    setTarefas([...tarefas, novaTarefa])
    setInputTarefa("")
  }

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id))
  }

  const limparLista = () => {
    if (tarefas.length > 0 && window.confirm("Esvaziar toda a lista?")) {
      setTarefas([])
    }
  }

  return (
    <div className="app-wrapper">
      <div className="container">
        <header>
          <h1>Minhas Tarefas</h1>
          <p>{new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric' })}</p>
        </header>

        <form className="input-group" onSubmit={adicionarTarefa}>
          <input 
            type="text" 
            placeholder="O que vamos fazer hoje?" 
            value={inputTarefa}
            onChange={(e) => setInputTarefa(e.target.value)} 
          />
          <button type="submit" className="btn-add">Adicionar</button>
        </form>

        <div className="controls">
          <span>{tarefas.length} {tarefas.length === 1 ? 'tarefa' : 'tarefas'}</span>
          {tarefas.length > 0 && (
            <button className="btn-clear" onClick={limparLista}>Limpar Tudo</button>
          )}
        </div>

        <ul className="task-list">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className="task-item">
              <span className="task-text">{tarefa.texto}</span>
              <button className="btn-delete" onClick={() => removerTarefa(tarefa.id)} title="Excluir">
                <span className="icon">🗑️</span>
              </button>
            </li>
          ))}
        </ul>
        
        {tarefas.length === 0 && (
          <div className="empty-state">
            <p>Tudo limpo por aqui! 🚀</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App