import Enrutador from './componentes/Enrutador'

import Reg_ini from './RegIniSesModal'

//IMAGENES
import img1 from '../IMGS/condimentos1.jpg'
import img2 from './IMG/imagen2sushisalmon.jpg'
import img3 from './IMG/imagen3molecular.jpg'
import img4 from './IMG/imagen3molecular.jpg'
import img5 from './IMG/imagen3molecular.jpg'

function IniciarSesion() {
  return (
    <section>

      <Carousel>

        <Carousel.Item >
          <img
            className="background-img"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Comida Méxicana</h3>
            <p>Chefs especializados en diferentes tipos de comida.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="background-img"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Comida Japonesa</h3>
            <p>Gracias a la gran cantidad de chefts podemos ofrecerte cómida internacional como la comida Japonesa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="background-img"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Comida Molecular</h3>
            <p>
              Contamos con comida molecular, atrevete a probar otro tipo de comida.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="background-img"
            src={img4}
            alt="condimentos varios"
          />

          <Carousel.Caption>
            <h3>Comida Molecular</h3>
            <p>
              Contamos con comida molecular, atrevete a probar otro tipo de comida.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="background-img"
            src={img5}
            alt="condimentos varios"
          />

          <Carousel.Caption>
            <h3>Comida Molecular</h3>
            <p>
              Contamos con comida molecular, atrevete a probar otro tipo de comida.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel.Item>
        <img
          className="background-img"
          src={img4}
          alt="condimentos varios"
        />

        <Carousel.Caption>
          <h3>Comida Molecular</h3>
          <p>
            Contamos con comida molecular, atrevete a probar otro tipo de comida.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Reg_ini/>
    </section>
  );




}

export default IniciarSesion;
