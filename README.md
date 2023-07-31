**PROYECTO COMERCIO ELECTRONICO (DESPLEGADO EN  NETLIFY) INTEGRADO CON BACKEND (DESPLEGADO EN RENDER)**
# Contenido
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

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.001.png)

La imagen del sitio:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.002.png)
## <a name="_toc141660771"></a>**Aceder como Admin:**
Dentro de las pruebas se creo un usuario administrador para poder agregar productos al sistema el cuál fue:

Usuario: <jesusgtz1@hotmail.com>

Contraseña: asdf

Para acceder es necesario presionar el botón izquierdo de la pantalla:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.003.png)

Una vez dentro se muestra nuestro login para administrador:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.004.png)

## <a name="_toc141660772"></a>**Agregar Productos**
Para agregar productos es necesario entrar como administrador, una vez dentro si no se cuentan con productos se mostrara la siguiente interfaz:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.005.png)
### <a name="_toc141660773"></a>**¿Cómo agregar un producto?**
Para agregar un producto solo es presionando el botón azul llamado Agregar Producto, el cual se muestra en la sección anterior, después de eso nos mostrará lo siguiente:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.006.png)

En esta opción se escribe el nombre del producto, el costo al cliente y el precio al público, así como los gramos, de esta manera se puede saber la ganancia de nuestros clientes con la diferencia del precio al publico y el costo. Una vez lleno todos los campos solo hay que presionar el botón verde Guardar Producto o bien si no se desea guardar solo cancelar, a continuación se muestra el resultado de agregar un producto:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.007.png)
### <a name="_toc141660774"></a>**¿Cómo eliminar o editar un producto?**
Para eliminar un producto es muy sencillo solo es presionando el botón eliminar del producto que se desee eliminar. Suponiendo que se capturo por error el siguiente campo:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.008.png)

El cual es asdfasf, para eliminarlo simplemente se presiona el botón eliminar dándonos el siguiente resultado:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.009.png)

Ahora para editar un producto tenemos el producto adggh y solo presionamos el botón editar:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.010.png)

Como se puede observar en la parte inferior aparecen los campos a editar, se modifican y mucho ojo ahí se presiona el botón guardar, no el botón agregar producto, dándonos el siguiente resultado:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.011.png)
## <a name="_toc141660775"></a>**Salir de Admin**
Para salirse de la opción de administrador es necesario presionar el botón que se encuentra en la parte superior izquierda:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.012.png)

Una vez fuera nos manda a la página principal:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.013.png)

## <a name="_toc141660776"></a>**Comprar productos**
Para comprar productos se requieren dos pasos, el primero es elegir los productos y estar logeado, sin embargo para elegir los productos solo es necesario presionar el botón de carrito y no es necesario estar logeado. El botón de carrito se encuentra en la parte superior izquierda debajo del botón registrarse:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.014.png)
### <a name="_toc141660777"></a>**Elegir productos**
Para elegir los productos como se menciono anteriormente solo es necesario presionar el botón de carrito, una vez dentro se mostraran los productos creados por el administrador con varios botones en la parte derecha como agregar a carrito, +1,-1,+10 etcetera, los cuales ayudaran a elegir la cantidad. Cabe mencionar que para agregar los productos al carrito es necesario mínimo haber elegido mínimo un +1 de algún producto:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.015.png)

Este es un ejemplo donde se muestra lo mencionado.
### <a name="_toc141660778"></a>**Agregar cantidad de un producto**
Como se menciono anteriormente antes de agregar a carrito un producto se requiere elegir la cantidad y para hacerlo es con los botones grises que indican la cantidad de incrementos a elegir, a continuación se muestra varios productos elegidos:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.016.png)

En la canela solo se presiono +10 para agregar los 10 paquetes para la orden que se realizará, para los cominos se presiono +1, +10 y +100. Cabe mencionar que en caso de equivocarse puede uno decrementar la cantidad de 1 en 1 o de 10 en 10 o bien borrar toda la cantidad con sus respectivos botones.
### <a name="_toc141660779"></a>**Agregar a carrito.**
Para agregar a carrito simplemente se presiona el botón verde de cada producto y el botón de carrito cambiara. Por ejemplo si se agrega la canela entera se mostrara lo siguiente:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.017.png)

Como se puede observar en el carrito aparece un 1 que quiere decir que ya hay un producto agregado, y en la lista de productos abajo cambio la cantidad de la canela entera a 0, y se desea se puede agregar más pero ahora agregaremos al carrito los cominos para mostrar lo siguiente:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.018.png)

Como se puede observar ya no hay cantidades en los productos y el carrito ahora tiene un 2 que quiere decir que tiene dos elementos en el.
## <a name="_toc141660780"></a>**Ver carrito**
Para ver el carrito hay que presionar el botón de carrito dándonos las siguientes opciones:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.019.png)

Que también puede cerrársela ventana para seguir agregando productos al carrito o bien si se desea cancelar se presiona el botón rojo Vaciar carrito, pero en cado de que se desee realizar el pedido presionar el botón azul.
## <a name="_toc141660781"></a>**Realizar pedido**
Para realizar el pedido como se menciono al principio se requiere iniciar sesión en caso de no hacerlo mostrara el siguiente mensaje:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.020.png)

Y automáticamente nos mandara a la opción de iniciar sesión, que en este caso es como cliente y no como administrador:

![ref1]

En caso de haber iniciado sesión previamente al presionar el botón azul Realizar Pedido nos mandara a la página de los botones de pago de paypal.

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.022.png)Una vez ahí se podrá realizar el pago presionando el botón de PayPal.
## <a name="_toc141660782"></a>**Realizar un pago**
Para realizar un pago es necesario tener una cuenta de paypal que de manera demostrativa y de demostrar conocimiento se creo una cuenta para pruebas la cual es:

**Usuario**: sb-7c2bu26917501@personal.example.com

**Contraseña:** 1RCih9)T

Presionando el botón e iniciando sesión obtenemos nos mostrara las opciones de pago:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.023.png)

Ya de ahí solo compra completa y una vez realizada nos rederigira a la pagina principal y se eliminara el carrito:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.024.png)

Como se puede observar el carrito ya esta en ceros.

Para validar compra tenemos nuestra cuenta de vendedor de pruebas:

**Usuario:** sb-rdlht26923467@business.example.com

**Contraseña:** jWreZ-=2

SANDBOX URL DE VER COMPRAS <https://sandbox.paypal.com>
## <a name="_toc141660783"></a>**Ver compras, ver ordenes**
Como vendedor entrando a la cuenta de mercado libre se pueden ver las ventas totales:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.025.png)

Entrando a mongodb compas podemos validar la compra realizada, la cual se guarda en órdenes. 

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.026.png)

## <a name="_toc141660784"></a>**Iniciar Sesión como cliente**
Para hacerlo es necesario presionar el botón de iniciar sesión que se encuentra en la parte superior de la pantalla el cual es:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.027.png)

Una vez presiondo nos permitirá inicar sesión y nos redirijira a la opción de agregar orden para ir generando nuestro carrito.

![ref1]
## <a name="_toc141660785"></a>**Registrarse**
Con este sistema es fácil registrarse, de momento y de manera demostrativa se permite hacer un registro de un cliente con el fin de mostrar el conocimiento y alcances de este. Para registrarse es necesario presionar el botón registrarse que se encuentra en la parte superior derecha y se ve de la siguiente manera:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.028.png)

Una ves presionado nos mostrara el formulario de registro:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.029.png)

Una vez llenos los datos se presiona el botón aceptar y nos mostrara lo siguiente:

![](Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.030.png)


## <a name="_toc141660786"></a>**Conclusiones**
Este sistema permitió obtener un amplio conocimiento como para poder empezar a emprender o desarrollar una empresa, desafortunadamente no se cumplio con la entrega en tiempo por lo que se realizo lo mejor posible para ser del agrado de los maestros y cordinadores, espero me den la oportunidad de aceptarlo y obtener una buena calificación.

El sistema aún le falta mucho como ver ordenes y ocultar y mostrar opciones pero como base cumple con lo solicitado en estas últimas tareas.
2

[ref1]: Aspose.Words.cafac97e-fe7c-4674-9387-0c52448ad8a7.021.png
