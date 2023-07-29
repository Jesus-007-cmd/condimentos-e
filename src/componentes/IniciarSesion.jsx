
import Carousel from 'react-bootstrap/Carousel';

import Encabezado from './Encabezado';
import Pie from './Pie';
import Iniciar from './IniSesModal'

//IMAGENES
import img1 from '../IMGS/condimentos1.jpg'
import img2 from '../IMGS/condimentos2.jpg'
import img3 from '../IMGS/condimentos3.jpg'
import img4 from '../IMGS/condimentos4.jpg'
import img5 from '../IMGS/condimentos5.jpg'
//CSS
import '../CSS/registroeiniciosesion.css' 

function IniciarSesion() {
  return (
    <section>
      <Encabezado/>
      <Carousel>

        <Carousel.Item >
          <img
            className="background-img"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="background-img"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="background-img"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="background-img"
            src={img4}
            alt="condimentos varios"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="background-img"
            src={img5}
            alt="condimentos varios"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="background-img"
          src={img4}
          alt="condimentos varios"
        />

        <Carousel.Caption>       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="background-img"
          src={img5}
          alt="condimentos varios"
        />

        <Carousel.Caption>       </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      <Pie/>

      <Iniciar show={true}   />
    </section>
  );




}

export default IniciarSesion;
