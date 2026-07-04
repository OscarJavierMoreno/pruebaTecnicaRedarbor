(function ($) 
{
    "use strict";

    var state = 
    {
        resources: Array.isArray(window.resourceCenterData) ? window.resourceCenterData : [],
        searchText: "",
        category: "all"
    };

    var selectors = 
    {
        search: "#js-resource-search",
        category: "#js-resource-category",
        clear: "#js-resource-clear",
        grid: "#js-resource-grid",
        empty: "#js-resource-empty",
        total: "#js-total-count",
        modal: "#js-resource-modal",
        modalTitle: "#js-modal-title",
        modalSummary: "#js-modal-summary",
        modalLink: "#js-modal-link"
    };


    //Esta funcion hace 4 cosas:
    //1- Si el dato es nulo, usa texto vacío.
    //2- Lo convierte a texto.
    //3- Le quita espacios sobrantes.
    //4- Lo convierte a minúsculas.
    function normalize(value) 
    {
        return (value || "").toString().trim().toLowerCase();
    }

    //Evita que cualquier texto sea interpretado por el navegador como HTML en vez de mostrarse como texto.
    function escapeHtml(text) 
    {
        return (text || "")

            //Agregando toString, porque como el JSON contiene campos numéricos, toca convertir el valor a texto para que la función pudiera manejar tanto cadenas como números y evitar errores.
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function filteredResources() 
    {
        var text = normalize(state.searchText); //Ejemplo: MVC
        var category = normalize(state.category); //Ejemplo: Videos

        // TODO CANDIDATO 1:
        // Completar filtro por texto en titulo/resumen y mantener filtro por categoria.
        return state.resources.filter(function (item) 
        {
            //Aquí se encuntra el error, en este condicional. Esta eliminando los recursos que cumplen
            // if (category !== "all" && normalize(item.category) === category) 
            // {
            //     return false;
            // }


            //ESCRIBIENDO MI PARTE DEL CODIGO DEL PUNTO #1:            
            //Si la categoria es diferente a todas y NO corresponde se retorna de una vez falso
            if (category !== "all" && normalize(item.category) !== category) return false;
            
            //Si el usuario escribió algo
            if (text !== "")
            {
                //Guardando el titulo y el resumen
                var title = normalize(item.title);
                var summary = normalize(item.summary);

                //Analizando, si No se incluye en el titulo y en el resumen, se descarta
                if (!title.includes(text) && !summary.includes(text)) return false;
            }            

            //Si pasa los filtros pasa con exito
            return true;
        });
    }

    function cardHtml(item) 
    {
        //Con estas variables resolvemos los "edge cases", por que si algun campo es null o está vacio se reemplaza y la aplicación No se rompe 
        var title = escapeHtml(item.title || "Sin titulo");
        var summary = escapeHtml(item.summary || "Sin resumen");
        var category = escapeHtml(item.category || "Sin categoria");
        var id = escapeHtml(item.id || "");

        return [
            '<article class="tt-card" data-id="', id, '">',
            '<p class="tt-card__category">', category, '</p>',
            '<h3 class="tt-card__title">', title, '</h3>',
            '<p class="tt-card__summary">', summary, '</p>',
            '<button type="button" class="tt-card__open js-open-resource" data-id="', id, '">Ver detalle</button>',
            '</article>'
        ].join("");
    }

    function render() 
    {
        var data = filteredResources();
        var html = data.map(cardHtml).join("");

        $(selectors.grid).html(html);

        //Aquí hay un error porque está mostrando el total del arreglo y necesitamos es el total de los resultados
        // $(selectors.total).text(state.resources.length);

        $(selectors.total).text(data.length); //Corrigiendo el error
        $(selectors.empty).prop("hidden", data.length > 0);
    }

    function openModalById(id) 
    {
        var found = state.resources.find(function (item) 
        {
            return String(item.id) === String(id);
        });

        if (!found) 
        {
            return;
        }

        $(selectors.modalTitle).text(found.title || "Sin titulo");
        $(selectors.modalSummary).text(found.summary || "Sin resumen");
        $(selectors.modalLink).attr("href", found.url || "#");

        $(selectors.modal).prop("hidden", false).attr("aria-hidden", "false");
    }

    function closeModal() 
    {
        $(selectors.modal).prop("hidden", true).attr("aria-hidden", "true");
    }

    function wireEvents() 
    {
        //Este evento se ejecuta cada vez que el usuario digita algo en el buscador
        $(selectors.search).on("input", function () 
        {
            state.searchText = $(this).val();
            render();
        });

        //Este evento se ejecuta cada vez que el usuario selecciona una categoria
        $(selectors.category).on("change", function () 
        {
            state.category = $(this).val();
            render();
        });

        // TODO CANDIDATO 2:
        // Implementar boton limpiar para resetear filtros y volver a pintar.
        $(selectors.clear).on("click", function () 
        {
            // Intencionadamente incompleto

            //ESCRIBIENDO MI PARTE DEL CODIGO DEL PUNTO #2:
            //Actualizando los valores internos
            state.searchText = "";
            state.category = "all";

            //Actualizando el input
            $(selectors.search).val("");
            $(selectors.category).val("all");

            //Renderizando de nuevo la pantalla
            render();
        });

        //Evento para abrir la ventana modal
        $(document).on("click", ".js-open-resource", function () 
        {
            openModalById($(this).data("id"));
        });

        //Para cerrarla
        $(document).on("click", ".js-close-modal", closeModal);

        // TODO CANDIDATO 3:
        // Cerrar modal con tecla Escape.

        //ESCRIBIENDO MI PARTE DEL CODIGO DEL PUNTO #3:
        //Evento para cerrar la modal con la tecla Escape
        $(document).on("keydown", function (event)
        {
            if (event.key === "Escape") closeModal();
        });
    }

    function init() 
    {
        //Mirando que el JS se está cargando correctamente
        console.log("Iniciando el JS");
        wireEvents();
        render();
    }

    //Inicializando funciones
    init();

})(jQuery);