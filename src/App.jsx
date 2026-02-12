import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem('lista_tarefas_v3')
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : []
  })
  
  const [inputTarefa, setInputTarefa] = useState("")

  useEffect(() => {
    localStorage.setItem('lista_tarefas_v3', JSON.stringify(tarefas))
  }, [tarefas])

  const adicionarTarefa = (e) => {
    e.preventDefault()
    if (inputTarefa.trim() === "") return
    
    setTarefas([...tarefas, {
      id: Date.now(),
      texto: inputTarefa,
      concluida: false
    }])
    setInputTarefa("")
  }

  const alternarConcluida = (id) => {
    setTarefas(tarefas.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t))
  }

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id))
  }

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Gerenciador v2.2</h1>
        
        <form onSubmit={adicionarTarefa} className="input-box">
          <input 
            type="text"
            placeholder="Nova tarefa..."
            value={inputTarefa}
            onChange={(e) => setInputTarefa(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        <ul className="lista">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className={tarefa.concluida ? "item-concluido" : ""}>
              <div className="acoes-esquerda">
                <button 
                  className="btn-delete" 
                  onClick={() => removerTarefa(tarefa.id)}
                  title="Remover"
                >
                  ✕
                </button>
                <input 
                  type="checkbox" 
                  className="check-tarefa"
                  checked={tarefa.concluida}
                  onChange={() => alternarConcluida(tarefa.id)}
                />
              </div>
              <span className="texto-tarefa">{tarefa.texto}</span>
            </li>
          ))}
        </ul>

        {tarefas.length > 0 && (
          <button className="btn-limpar" onClick={() => setTarefas([])}>
            Limpar tudo
          </button>
        )}
      </div>
    </div>
  )
}

export default App