// Javascript goes here

jquery = require("jquery/dist/jquery");

// Add menu collapsible functionality
var Collapsible = require("./collapsible");

jquery(".toc-entry").each( (index, control) => {
    Collapsible.apply(control,jquery(control).next(".table-of-contents"));
});

// Open the active TOC with no delay
let activeTocSection = jquery(".table-of-contents li.active").parents(".menu-section");

Collapsible.toggle(
    jquery(activeTocSection).find(".toc-entry i"),
    jquery(activeTocSection).children(".table-of-contents"),
    0
);