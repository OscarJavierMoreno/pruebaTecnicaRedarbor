# Prueba Tecnica Frontend (60 Min)

## Contexto

Vas a trabajar sobre una pantalla interna simplificada en entorno ASP.NET MVC + Razor + SCSS + JavaScript (jQuery).

La prueba esta pensada para una sustitucion temporal: buscamos capacidad de incorporacion rapida, criterio tecnico y buena integracion en codigo existente.

## Tiempo

- Tiempo total: 60 minutos.
- Cierre oral: 10 minutos para explicar decisiones.

## Que ya viene preparado

El entorno incluye:

- Vista base con estructura de pantalla y filtros.
- Fichero JS base con flujo inicial y varios TODO.
- Fichero SCSS base con estilos iniciales.
- Datos dummy con edge cases reales.
- El codigo base puede incluir algunos errores intencionales que debes detectar y corregir.

No necesitas levantar el monolito completo ni cambiar arquitectura.

## Objetivo

Completar la pantalla `Resource Center` para que quede usable, responsive y alineada con el stack actual.

## Tareas obligatorias

1. Completar filtros:
- Buscar por texto en titulo y resumen.
- Filtrar por categoria.
- Implementar boton `Limpiar`.

2. Renderizar tarjetas correctamente:
- Mostrar titulo, categoria y resumen.
- Resolver edge cases: resumen nulo/vacio, titulo largo, categoria no esperada.

3. Implementar detalle:
- Al hacer click en `Ver detalle`, abrir modal con datos del recurso.
- Permitir cerrar modal con boton de cierre y con tecla `Esc`.

4. Ajustar estilos SCSS:
- Estado base limpio y legible.
- Vista responsive correcta en desktop y mobile.
- Estado vacio claro cuando no hay resultados.

## Bonus (si hay tiempo)

- Persistir filtros en query string o `sessionStorage`.
- Mejorar accesibilidad basica (foco visible, `aria-label` en acciones principales).

## Restricciones

- No introducir frameworks nuevos (React, Vue, etc.).
- Mantener enfoque Razor + JS/jQuery + SCSS.
- No rehacer el ejercicio desde cero si la base ya cubre el caso.

## Entregable

1. Cambios en los archivos del entorno preparado.
2. Explicacion oral breve (5-10 min) respondiendo:
- Que tocaste primero y por que.
- Que edge case te obligo a ajustar la implementacion.
- Que mejorarias con 30 minutos extra.

## Criterios de evaluacion

- Encaje con el stack y convenciones del entorno.
- Calidad de HTML/Razor, SCSS y JS en conjunto.
- Robustez ante casos limite.
- Claridad de decisiones tecnicas.