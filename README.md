# PROYECTO COMERCIO ELECTRONICO (DESPLEGADO EN  NETLIFY) INTEGRADO CON BACKEND (DESPLEGADO EN RENDER)**
# Contenido
<a name="_toc141660111"></a>
[RUTAS	2](#_toc141660767)

[BACKEND:	2](#_toc141660768)

[FRONTEND:	2](#_toc141660769)

[Ejemplo:	2](#_toc141660770)

[Aceder como Admin:	3](#_toc141660771)

[Agregar Productos	4](#_toc141660772)

[¿Cómo agregar un producto?	4](#_toc141660773)

[¿Cómo eliminar o editar un producto?	5](#_toc141660774)

[Salir de Admin	7](#_toc141660775)

[Comprar productos	7](#_toc141660776)

[Elegir productos	8](#_toc141660777)

[Agregar cantidad de un producto	8](#_toc141660778)

[Agregar a carrito.	8](#_toc141660779)

[Ver carrito	9](#_toc141660780)

[Realizar pedido	10](#_toc141660781)

[Realizar un pago	11](#_toc141660782)

[Ver compras, ver ordenes	13](#_toc141660783)

[Iniciar Sesión como cliente	14](#_toc141660784)

[Registrarse	14](#_toc141660785)

[Conclusiones	16](#_toc141660786)



**Por**

**Jesús Antonio Gutiérrez Aguilar**
# <a name="_toc141660767"></a>**RUTAS**
[Volver](#_toc141660111)
## <a name="_toc141660768"></a>**BACKEND:**
- WEB: https://ecomerce-v3kv.onrender.com
- GITHUB: https://github.com/Jesus-007-cmd/backend-ecomerce
## <a name="_toc141660769"></a>**FRONTEND:**
- WEB:
- GITHUB:

Para pruebas se muestran las rutas:

app.post('/loginAdmin', loginAdmin);

app.post('/CrearAdmin', createAdmin); 

// Usuarios 

app.get('/user', getUsers);

app.post('/user/login', login);

app.post('/user', createUser);

app.put('/user/:id', userUpdate);

app.delete('/user/:id', userDelete);

// Productos

app.get('/product', getProducts);

app.post('/product', createProduct);

app.put('/product/:id', productUpdate);

app.delete('/product/:id', productDelete);

//Ordenes

app.get('/order', getOrders);

app.post('/order', createOrder);

app.put('/order/:id', orderUpdate);

app.delete('/order/:id', orderDelete);

Para probarlo solo se requiere la dirección del backend seguido del primer elemento del post.
### <a name="_toc141660770"></a>**Ejemplo:**
**Nombre del backend en render**: ecomerce

Prueba con thunderclient para crear admin:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/7b8d0847-05d1-4bf3-97c2-48941ed46591)


La imagen del sitio:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/0d4efbce-f22f-4606-b877-3afef58ebd9c)

## <a name="_toc141660771"></a>**Aceder como Admin:**
Dentro de las pruebas se creo un usuario administrador para poder agregar productos al sistema el cuál fue:

Usuario: <jesusgtz1@hotmail.com>

Contraseña: asdf

Para acceder es necesario presionar el botón izquierdo de la pantalla:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/2848a6ca-faa3-4993-80af-14cbbe186973)


Una vez dentro se muestra nuestro login para administrador:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/30d2c308-7298-4a9b-a7ba-77dbb1d4d311)


## <a name="_toc141660772"></a>**Agregar Productos**
Para agregar productos es necesario entrar como administrador, una vez dentro si no se cuentan con productos se mostrara la siguiente interfaz:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/d31e48c4-8d59-4a45-b3e4-7b6d4ddc7a52)

### <a name="_toc141660773"></a>**¿Cómo agregar un producto?**
Para agregar un producto solo es presionando el botón azul llamado Agregar Producto, el cual se muestra en la sección anterior, después de eso nos mostrará lo siguiente:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/7a4f74f9-66fa-457a-9c0d-a37e29b56465)


En esta opción se escribe el nombre del producto, el costo al cliente y el precio al público, así como los gramos, de esta manera se puede saber la ganancia de nuestros clientes con la diferencia del precio al publico y el costo. Una vez lleno todos los campos solo hay que presionar el botón verde Guardar Producto o bien si no se desea guardar solo cancelar, a continuación se muestra el resultado de agregar un producto:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/8f151a19-9dc9-46c6-8b6f-1ecbcfa459d4)

### <a name="_toc141660774"></a>**¿Cómo eliminar o editar un producto?**
Para eliminar un producto es muy sencillo solo es presionando el botón eliminar del producto que se desee eliminar. Suponiendo que se capturo por error el siguiente campo:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/7a79778b-1b33-4a1b-ad74-b9e462afae1b)


El cual es asdfasf, para eliminarlo simplemente se presiona el botón eliminar dándonos el siguiente resultado:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/6489c7dd-e99c-40fe-9350-d30338495ccd)


Ahora para editar un producto tenemos el producto adggh y solo presionamos el botón editar:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/2fde16f6-7f76-4f9c-af22-832a6084977c)


Como se puede observar en la parte inferior aparecen los campos a editar, se modifican y mucho ojo ahí se presiona el botón guardar, no el botón agregar producto, dándonos el siguiente resultado:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/2b38de9c-3fd7-4579-965f-535e30eb30fd)

## <a name="_toc141660775"></a>**Salir de Admin**
Para salirse de la opción de administrador es necesario presionar el botón que se encuentra en la parte superior izquierda:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/ba48b793-64cc-48ac-8763-979b9880468a)


Una vez fuera nos manda a la página principal:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/ddb0af08-2280-4c58-966a-6db2b1839ad2)


## <a name="_toc141660776"></a>**Comprar productos**
Para comprar productos se requieren dos pasos, el primero es elegir los productos y estar logeado, sin embargo para elegir los productos solo es necesario presionar el botón de carrito y no es necesario estar logeado. El botón de carrito se encuentra en la parte superior izquierda debajo del botón registrarse:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/74008185-bfaa-4c82-b0d5-f3cad58707b4)

### <a name="_toc141660777"></a>**Elegir productos**
Para elegir los productos como se menciono anteriormente solo es necesario presionar el botón de carrito, una vez dentro se mostraran los productos creados por el administrador con varios botones en la parte derecha como agregar a carrito, +1,-1,+10 etcetera, los cuales ayudaran a elegir la cantidad. Cabe mencionar que para agregar los productos al carrito es necesario mínimo haber elegido mínimo un +1 de algún producto:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/c771f9b9-32ec-48c9-8d50-8075578ef2a0)


Este es un ejemplo donde se muestra lo mencionado.
### <a name="_toc141660778"></a>**Agregar cantidad de un producto**
Como se menciono anteriormente antes de agregar a carrito un producto se requiere elegir la cantidad y para hacerlo es con los botones grises que indican la cantidad de incrementos a elegir, a continuación se muestra varios productos elegidos:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/1a8c53aa-73eb-410b-9c28-c0f2ce03717f)


En la canela solo se presiono +10 para agregar los 10 paquetes para la orden que se realizará, para los cominos se presiono +1, +10 y +100. Cabe mencionar que en caso de equivocarse puede uno decrementar la cantidad de 1 en 1 o de 10 en 10 o bien borrar toda la cantidad con sus respectivos botones.
### <a name="_toc141660779"></a>**Agregar a carrito.**
Para agregar a carrito simplemente se presiona el botón verde de cada producto y el botón de carrito cambiara. Por ejemplo si se agrega la canela entera se mostrara lo siguiente:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/beff8e19-0990-4ea6-b322-9f7270bb6ea0)


Como se puede observar en el carrito aparece un 1 que quiere decir que ya hay un producto agregado, y en la lista de productos abajo cambio la cantidad de la canela entera a 0, y se desea se puede agregar más pero ahora agregaremos al carrito los cominos para mostrar lo siguiente:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/74252ea9-e0d7-407a-ae79-daf7ac8e3e1f)


Como se puede observar ya no hay cantidades en los productos y el carrito ahora tiene un 2 que quiere decir que tiene dos elementos en el.
## <a name="_toc141660780"></a>**Ver carrito**
Para ver el carrito hay que presionar el botón de carrito dándonos las siguientes opciones:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/85e0e6d5-2f43-4c68-ab14-b2462b79232b)


Que también puede cerrársela ventana para seguir agregando productos al carrito o bien si se desea cancelar se presiona el botón rojo Vaciar carrito, pero en cado de que se desee realizar el pedido presionar el botón azul.
## <a name="_toc141660781"></a>**Realizar pedido**
Para realizar el pedido como se mencionó al principio se requiere iniciar sesión en caso de no hacerlo mostrara el siguiente mensaje:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/78c20846-cb91-4760-997c-27a4be4e98d1)


Y automáticamente nos mandara a la opción de iniciar sesión, que en este caso es como cliente y no como administrador:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/617e4e50-ed94-4bef-9559-b218a9d49f59)


En caso de haber iniciado sesión previamente al presionar el botón azul Realizar Pedido nos mandara a la página de los botones de pago de paypal.

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/96a77f54-dabb-4149-9d8d-db152f3146a1)

Una vez ahí se podrá realizar el pago presionando el botón de PayPal.
## <a name="_toc141660782"></a>**Realizar un pago**
Para realizar un pago es necesario tener una cuenta de paypal que de manera demostrativa y de demostrar conocimiento se creo una cuenta para pruebas la cual es:

**Usuario**: sb-7c2bu26917501@personal.example.com

**Contraseña:** 1RCih9)T

Presionando el botón e iniciando sesión obtenemos nos mostrara las opciones de pago:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/b50a0473-bcc6-416e-b663-e79cb45f78e5)


Ya de ahí solo compra completa y una vez realizada nos rederigira a la pagina principal y se eliminara el carrito:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/49b8382c-6da0-43d9-a24c-4c341be4f2ff)


Como se puede observar el carrito ya esta en ceros.

Para validar compra tenemos nuestra cuenta de vendedor de pruebas:

**Usuario:** sb-rdlht26923467@business.example.com

**Contraseña:** jWreZ-=2

SANDBOX URL DE VER COMPRAS <https://sandbox.paypal.com>
## <a name="_toc141660783"></a>**Ver compras, ver ordenes**
Como vendedor entrando a la cuenta de mercado libre se pueden ver las ventas totales:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/692a319d-0046-4217-9b51-cb2103fe19e5)


Entrando a Mongodb Compas podemos validar la compra realizada, la cual se guarda en órdenes. 

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/61b98337-971c-48c3-8041-7cd4a90a813e)


## <a name="_toc141660784"></a>**Iniciar Sesión como cliente**
Para hacerlo es necesario presionar el botón de iniciar sesión que se encuentra en la parte superior de la pantalla el cual es:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/4e55f4f1-addb-46c1-8520-ddc6afd0b4ec)


Una vez presiondo nos permitirá inicar sesión y nos redirijira a la opción de agregar orden para ir generando nuestro carrito.

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/6b9761fc-f5a0-45f9-b076-6349e50e09b6)


## <a name="_toc141660785"></a>**Registrarse**
Con este sistema es fácil registrarse, de momento y de manera demostrativa se permite hacer un registro de un cliente con el fin de mostrar el conocimiento y alcances de este. Para registrarse es necesario presionar el botón registrarse que se encuentra en la parte superior derecha y se ve de la siguiente manera:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/95e7b5f2-a389-4fc7-a3b9-4362b133fefd)


Una vez presionado nos mostrara el formulario de registro:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/1ceb1188-4c1a-4985-a0e2-103ea6121387)


Una vez llenos los datos se presiona el botón aceptar y nos mostrara lo siguiente:

![image](https://github.com/Jesus-007-cmd/condimentos-e/assets/118942603/6381224d-7142-4067-b5de-8236f868eb4a)



## <a name="_toc141660786"></a>**Conclusiones**
Este sistema permitió obtener un amplio conocimiento como para poder empezar a emprender o desarrollar una empresa, desafortunadamente no se cumplio con la entrega en tiempo por lo que se realizo lo mejor posible para ser del agrado de los maestros y cordinadores, espero me den la oportunidad de aceptarlo y obtener una buena calificación.

## Como mejoras al sistema se puede implementar:
#### -> Nueva aplicación React para administrar la base de datos eliminado el login de admin en la aplicación actual.
#### -> Agregar el modulo de ver ordenes para que el Vendedor vea las ordenes realizadas durante el día.
#### -> Agregarle imagenes de los productos
#### -> Agregar la funcionalidad de ubicación para tener un registro de todas las ubicaciones de los clientes 
#### -> En la opción de clientes en el carrito que puedan eliminar o quitar cantidad de productos direcamente desde el carrito.
#### -> Mejorar lo responsivo para que este mas centrado dentro de celulares y corregir las tablas para presentar los botones de bajo de cada registro ahorrando espacio en pantalla.
#### -> Que el cliente también pueda ver sus ordenes realizadas.
#### -> Agregar la funcionalidad del backend editando algunos campos para ver estatus de ordenes cerradas y abiertas e incluso de poder cambiar estatus de orden a cerrada cuando ya se entregan los productos al cliente.
#### -> Agregar una funcionalidad de gráficos para analizar tendencia de ventas de productos.
#### -> Agregar una funcionalidad que permita manejar inventario del vendedor en materia prima y comparlo con inventario de productos y realice estimaciones para comprar materia prima antes y no incumplir en la creación de los productos.
#### -> Agregar la funcionalidad de inventario de los clientes para realizar estimaciones de los productos que se estan agotando y determinar desde antes o generar estadisticas de lo que debe comprar para que el cliente nunca deje de ganar.
#### -> Agregar la funcionalidad en los clientes de recibir ordenes y con codigo de barras empezar a recibir los productos del vendedor para satisfacer la orden.
#### -> Mejorar el inicio de la página agregando más información de la empresa como telefono, correo electronico.
#### -> Eliminar la funcionalidad de registro de los clientes en automatico, que sea via correo electronico y una llamada telefonica para evitar hackeos por creación de cuentas de clientes ilimitadas.
#### -> Agregar una funcionalidad de presentación de productos donde se vean los paquetes y los exibidores en diferentes negocios. Así como la ubicación de las tiendas donde se pueden adquirir los productos.

