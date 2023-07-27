//Imagenes
import img_mision from '../IMGS/mision.jpg'

//CSS
import  '../CSS/mision-vision.css'

function Mision(){
return(
    <div className="mision" >
                <div className='tit-mision'>  Misión</div> 
                  <div>   <img className="img_mision"   src={img_mision}         alt="Imagen de un reloj que apunta a un texto llamado misión"/>
                  </div> 
                  
                    <div className="texto"> 
                    <div >  Lograr captar cada año un porcentaje mayor de clientes en la zona centro del estado y año con año lograr posicionarse en otras ciudades dando a conocer nuestros productos de calidad. 
                     </div> 
                    
                 
                    </div>
                </div>
)
}
export default Mision