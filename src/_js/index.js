// Javascript goes here

jquery = require("jquery/dist/jquery.slim");

// Add menu accordion functionality
var Accordion = require("./accordion");

jquery(".toc-entry").each( (index, control) => {
    Accordion.apply(control,jquery(control).next(".table-of-contents"));
});

// Open the active TOC
jquery(".table-of-contents li.active").parents(".table-of-contents").prev(".toc-entry").click();