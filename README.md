# Conclución de la prueba Tecnica Frontend Redarbor - Oscar Javier Moreno Orozco

## PROBLEMAS RESUELTOS:

1. No cargaba Bootstrap ni el archivo JS, tocó cambiar enlaces de conexión por un CDN (Red de Distribución de Contenido). Lo primero que toqué fue un bloqueo en el entorno. Antes de implementar la lógica de filtros revisé la consola del navegador porque el JavaScript no estaba reaccionando. Detecté errores 404 al cargar Bootstrap y jQuery. Revisé las rutas locales definidas en _Layout.cshtml y comprobé que las carpetas dist no existían dentro de wwwroot/lib; únicamente estaban los archivos LICENSE. Entonces el jQuery nunca se iba a cargar y el archivo resource-center.js fallaba desde la primera línea con "jQuery is not defined". Por eso para poder continuar con la prueba cambie las referencias locales por los CDN, y el problema se arregló. `Los enlaces fueron sacados de las paginas oficiales`.

2. El archivo JSON tenia Edge Cases y todo corregir eso en la función `escapeHtml()`. Se agregó un `toString`, porque como el JSON contiene campos numéricos, toca convertir el valor a texto ante para que la función pudiera manejar tanto cadenas como números y evitar errores.   

3. Se implementó el filtro de las categorías.   

4. Se implementó el botón de limpiar.

5. En el archivo JSON aparecen dos categorías que No aparecen en el `Selector`. El sistema continúa mostrando correctamente categorías no contempladas en el selector. Estas categorías permanecen visibles al seleccionar `Todas`, aunque no es posible filtrarlas individualmente, esas categorías son `Ayuda` y `Reportes`.

6. Se implementó que la tecla `Escape` cerrara la ventana modal.

7. Se implementó la parte responsive haciendo que las tarjetas pasen a una sola columna después de cierta resolución.

8. Se le hizo una mejora visual a las tarjetas para que estéticamente se vieran mejor.

9. Se corrigió lo del titulo largo cortándolo después de dos líneas y haciendo que aparezcan los punticos.  

10. Se corrigió el footer porque estaba rompiendo el diseño responsive.

11. Se corrigió el contador ya que se estaba actualizando incorrectamente.
    En el contador se está mostrando el total del arreglo y necesitamos es el total de los resultados


## ASPECTOS QUE YO MEJORARIA:

- Modificar el selector dinámicamente, que JavaScript lea todas las categorías del JSON, por si mas adelante se agregan mas categorías No toque agregarlas manualmente, o crear una nueva categoría que diga "Otras".
- Pruebas unitarias;
- Cerrar modal haciendo clic fuera;
- Animaciones suaves;
- Persistencia mediante query string;
- Búsqueda con debounce;
- Mejorar accesibilidad.

## Decisiones tecnicas tomadas:

- Analisis del flujo entre Razor, JavaScript y los datos enviados desde el controlador.
- Comprension del manejo de eventos con jQuery y del estado de la aplicacion.
- Correccion de errores de configuracion del entorno antes de implementar nuevas funcionalidades.
- Implementacion de soluciones manteniendo el codigo existente y siguiendo el stack solicitado.