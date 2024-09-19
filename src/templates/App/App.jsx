
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
              <a href="#" class="btn">Abaixa o nosso APP</a>
            </div>
          </div>
          </div>
        </div>
    </section>
    <section>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide--one">
            <div>
              <h2>Enjoy the exotic of sunny Hawaii</h2>
              <p>
               
              </p>
            </div>
          </div>
          <div class="swiper-slide swiper-slide--two">
            <div>
              <h2>The Island of Eternal Spring</h2>
              <p>
               
              </p>
            </div>
          </div>
    
          <div class="swiper-slide swiper-slide--three">
            <div>
              <h2>Awesome Eiffel Tower</h2>
              <p>
               
              </p>
            </div>
          </div>
    
          <div class="swiper-slide swiper-slide--four">
            <div>
              <h2>One of the safest states in Mexico</h2>
              <p>
                
              </p>
            </div>
          </div>
    
          <div class="swiper-slide swiper-slide--five">
            <div>
              <h2>The most popular yachting destination</h2>
              <p>
    

              </p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js"></script>
  
    <section class="s-villain">
      <div class="container">
        <img src="img/imagem_background.svg" alt=""/>
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

export default App
