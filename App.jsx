// src/App.jsx
import './App.css'

function App() {
  return (
    <div className="container-geral">
      {/* Navbar que ocupa 100% da largura */}
      <nav className="navbar">
        <div className="logo">SILVA & ASSOCIADOS</div>
        <div className="nav-links">
          <a href="#inicio">Início</a>
          <a href="#atuacao">Atuação</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      {/* Hero Section com ajuste de largura total */}
      <header id="inicio" className="hero">
        <div className="hero-content">
          <h1>Compromisso Ético e Resultados Jurídicos</h1>
          <p>Atuamos com excelência técnica para garantir a melhor defesa dos seus interesses.</p>
          <button className="btn-contato">SOLICITAR CONSULTORIA</button>
        </div>
      </header>

      {/* Grid de Serviços que se ajusta ao tamanho da tela */}
      <section id="atuacao" className="servicos">
        <div className="card">
          <h3>Direito Empresarial</h3>
          <p>Assessoria jurídica estratégica para empresas e compliance.</p>
        </div>
        <div className="card">
          <h3>Cível e Contratual</h3>
          <p>Especialistas em responsabilidade civil e direito do consumidor.</p>
        </div>
        <div className="card">
          <h3>Sucessões e Família</h3>
          <p>Gestão humanizada de inventários e planejamento familiar.</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer id="contato" className="footer">
        <p>Av. Paulista, 1000 - São Paulo/SP</p>
        <p>Telefone: (11) 4002-8922</p>
        <small>© 2026 Silva & Associados</small>
      </footer>
    </div>
  )
}

export default App