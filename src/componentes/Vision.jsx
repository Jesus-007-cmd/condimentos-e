//Imagenes
import img_mision from '../IMGS/vision.jpg'

//CSS
import  '../CSS/mision-vision.css'

function Vision(){
return(
    <div className="mision" >
                <div className='tit-mision'>  Visión</div> 
                  <div>   <img className="img_mision"   src={img_mision}         alt="Imagen de un reloj que apunta a un texto llamado misión"/>
                  </div> 
                  
                    <div className="texto"> 
                    <div >  Proporcionar la imagen de la empresa la cual represente calidad en los productos así como economia y de facil obtención para nuestros clientes, brindandoles servicios de lógistica de venta.
                     </div> 
                    
                 
                    </div>
                </div>
)
}
export default Vision