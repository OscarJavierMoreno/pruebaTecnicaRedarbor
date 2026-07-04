# Prueba Técnica Frontend - Resource Center

## Descripción

Desarrollo de la prueba técnica Frontend sobre ASP.NET Core MVC, Razor, JavaScript (jQuery) y SCSS.

Durante el desarrollo no se modificó la arquitectura del proyecto; únicamente se realizaron cambios sobre los archivos destinados para la prueba y se corrigieron errores encontrados en el entorno.

---

## Tecnologías utilizadas

- ASP.NET Core MVC
- Razor
- JavaScript (jQuery)
- SCSS
- Bootstrap 5
- .NET SDK 8
- Node.js
- npm

---

## Preparación del entorno

### 1. Restaurar paquetes .NET

```bash
dotnet restore
```

### 2. Instalar dependencias Frontend

```bash
npm install
```

### 3. Compilar los archivos SCSS

```bash
npm run scss:build
```

### 4. Ejecutar la aplicación

```bash
dotnet run
```

La aplicación queda disponible en:

```
http://localhost:5087/TechnicalTest/ResourceCenter
```

---

## Archivos analizados

Durante el desarrollo se revisaron los siguientes archivos:

```
Views/TechnicalTest/ResourceCenter.cshtml
Views/Shared/_Layout.cshtml
wwwroot/technical-test/resource-center.js
wwwroot/technical-test/resource-center.scss
Data/resources.mock.json
```

---

## Flujo de análisis

El archivo:

```
Views/TechnicalTest/ResourceCenter.cshtml
```

no requirió modificaciones importantes.

Su función principal fue servir como punto de entrada de la pantalla, enlazando los archivos responsables del comportamiento y del diseño mediante las siguientes secciones:

```cshtml
@section Stylesheets
```

y

```cshtml
@section Scripts
```

Gracias a ello fue posible identificar que la lógica principal se encontraba en:

```
wwwroot/technical-test/resource-center.js
```

y que los estilos estaban definidos en:

```
wwwroot/technical-test/resource-center.scss
```

---

## Problemas encontrados

Durante las primeras pruebas la aplicación presentaba errores de carga:

- Bootstrap no cargaba.
- jQuery no cargaba.
- El archivo JavaScript principal no podía ejecutarse.
- Error:

```
jQuery is not defined
```

Después de revisar la estructura del proyecto se detectó que las rutas locales apuntaban a archivos inexistentes dentro de:

```
wwwroot/lib
```

Como solución temporal para el entorno de la prueba se reemplazaron las referencias locales por CDN oficiales de Bootstrap y jQuery.

Esto permitió ejecutar correctamente toda la lógica JavaScript.

---

## Funcionalidades implementadas

### Filtros

✔ Búsqueda por título

✔ Búsqueda por resumen

✔ Filtro por categoría

✔ Botón Limpiar

---

### Renderizado

✔ Título

✔ Categoría

✔ Resumen

✔ Manejo de resumen nulo

✔ Manejo de categoría inesperada

✔ Manejo de títulos largos

---

### Modal

✔ Apertura desde "Ver detalle"

✔ Cierre mediante botón

✔ Cierre mediante tecla ESC

---

### Responsive

✔ Adaptación de filtros para dispositivos móviles

✔ Grid adaptable

✔ Estado vacío correctamente visible

