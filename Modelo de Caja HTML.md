Jaime Aquino Martinez 21100158 25/08/2023 Programacion WEB

# Que es el Modelo de Caja en HTML?

El modelo de cajas o "box model" es seguramente la característica más importante del lenguaje de hojas de estilos CSS, ya que condiciona el diseño de todas las páginas web. El modelo de cajas es el comportamiento de CSS que hace que todos los elementos de las páginas se representen mediante cajas rectangulares.

Las cajas de una página se crean automáticamente. Cada vez que se inserta una etiqueta HTML, se crea una nueva caja rectangular que encierra los contenidos de ese elemento

![Error en la Carga](https://uniwebsidad.com/static/libros/imagenes/css/f0402.gif)

### Partes de una Caja

* **Contenido (content):** se trata del contenido HTML del elemento (las palabras de un párrafo, una imagen, el texto de una lista de elementos, etc.)
* **Relleno (padding):** espacio libre opcional existente entre el contenido y el borde.
* **Borde (border):** línea que encierra completamente el contenido y su relleno.
* **Imagen de fondo (background image):** imagen que se muestra por detrás del contenido y el espacio de relleno.
* **Color de fondo (background color):** color que se muestra por detrás del contenido y el espacio de relleno.
* **Margen (margin):** separación opcional existente entre la caja y el resto de cajas adyacentes.

El relleno y el margen son transparentes, por lo que en el espacio ocupado por el relleno se muestra el color o imagen de fondo (si están definidos) y en el espacio ocupado por el margen se muestra el color o imagen de fondo de su elemento padre (si están definidos). Si ningún elemento padre tiene definido un color o imagen de fondo, se muestra el color o imagen de fondo de la propia página (si están definidos).

Si una caja define tanto un color como una imagen de fondo, la imagen tiene más prioridad y es la que se visualiza. No obstante, si la imagen de fondo no cubre totalmente la caja del elemento o si la imagen tiene zonas transparentes, también se visualiza el color de fondo. Combinando imagenes transparentes y colores de fondo se pueden lograr efectos gráficos muy interesantes.

![Error en la Carga](https://lenguajecss.com/css/modelo-de-cajas/que-es/modelo-de-cajas.png)
