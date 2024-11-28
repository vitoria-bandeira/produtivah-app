 
import './home.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';




function Home() {
  const navigate = useNavigate();
  return (
    <div className="welcome-page">
    <header className="welcome-header">
      <div className="logo-container">
     
        <img
          src="image.png" // Replace with actual image URL or path
          alt="Illustration of a character holding a large tomato"
          className="welcome-image"
        />
      </div>
    </header>
   
      <h2>Bem-vindo ao Produtivah!</h2>

      <p>Gerencie suas tarefas de forma simples e produtiva.</p>
      
    <button className="start-button" onClick={() => navigate("/cadastro")}>
        Começar
      </button>
  </div>
    
  );  
  
}

export default Home;
