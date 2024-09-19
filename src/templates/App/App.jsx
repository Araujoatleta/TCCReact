
import { Link } from 'react-router-dom'
import './App.css'
import Logo from '../../assets/images/1.svg'
function App() {

  return (
    <>
<header>
      <div class="container">
        <a href="./img/1.svg">
          <img src={Logo} alt="Logo barbearia"/>
        </a>
            <Link to={'/login'} className='btn desktop'>Admin</Link>
            <a href="#" class="btn mobile">Comprar</a>
      </div>
    </header>
      <section class="s-hero">
      <div class="container">
        <div class="left-area">
          <h1>BARBA DO MÊS</h1>
          <p>A barba do mês seria uma votação dos melhores serviços de cada barbearia avaliada, 
            sendo uma forma de mostrar os cortes em destaque de barbearias em geral.</p>
          <div class="value">
            <h3>Clique Abaixo</h3>
            <div class="btns">
              <a href="#" class="btn">Instale o nosso APP</a>
            </div>
          </div>
</div>
          </div>
          </section>

    <section class="s-villain">
      <div class="container">
      </div>
    </section>

    <section class="pricing-section">
     <h1 class="h1-last">GARANTA O SEU !!!<br/>
      ESCOLHA O QUE MAIS TE <br/> ATENDE e se identifica.</h1>

      <div class="plans-container">
          <div class="plan plan-bronze">
            <p class="slogan-secundario">Edição First
            </p>  
            <h2>PLAN BRONZE</h2>
              <ul>
                  <li>Cortes ilimitados</li>
                  <li>1 Penteado</li>
              </ul>
              <p class="price">R$ 89,90</p>
              <button>Comprar</button>
          </div>

          <div class="plan plan-silver">
             <p class="slogan-principal">Edição Premium
             </p>
            <h2>PLAN SILVER</h2>
              <ul>
                  <li>Luzes</li>
                  <li>Limpeza de pele</li>
                  <li>Barboterapia</li>
                  <li>Prioridade no atendimento</li>
                  <li>Sombrancelha</li>
                  <li>Corte ilimitado</li>
                  <li>Nutrição capilar</li>
                  <li>Hidratação</li>
              </ul>
              <p class="price">R$ 149,90</p>
              <button>Comprar</button>
          </div>

          <div class="plan plan-deluxe" placeholder="Eduardo">
            <p class="slogan-terciario">Edição Deluxy</p>
            <h2>PLAN DELUXE</h2>
              <ul>
                  <li>Luzes</li>
                  <li>Limpeza de pele</li>
                  <li>Barboterapia</li>
                  <li>Prioridade no atendimento</li>
                  <li>Sombrancelha</li>
                  <li>Corte ilimitado</li>
                  <li>Nutrição capilar</li>
                  <li>Hidratação</li>
                  <li>Visagismo/Barbearias especiais</li>
                  <li>2 por 1: Leve um acompanhante uma vez por mês de graça!</li>
                  <li>Cortes ilimitados</li>
              </ul>
              <p class="price">R$ 399,50</p>
              <button>Comprar</button>
          </div>
      </div>
  </section>

    <footer>
      <div class="container">
        <div class="left-area">
          <h3>©Barbearia</h3>
          <p>Com a nossa Empresa de Intermediação de Serviços de Barbearia, tanto as barbearias quanto os
             clientes podem desfrutar de uma experiência mais eficiente 
             e satisfatória no mundo dos serviços de corte de cabelo e barbearia.</p>
        </div>
        
        <div class="right-area">
          <a href="https://designboost.com.br/" target="_blank">
            <img src="img/1.svg" alt=""/>
          </a>
        </div>
      </div>
    </footer>
    </>
      )
      }
export default App;
