/*
 * An accordion widget used in the left TOC 
 */

define("accordion",
    ["jquery/dist/jquery.slim"],
    function(jquery) {

        let hide = (control, target) => {
            jquery(control).html("arrow_drop_down");
            jquery(target).hide();
        }

        let show = (control, target) => {
            jquery(control).html("arrow_drop_up");
            jquery(target).show();

        } 

        let toggle = (control, target) => {
            if(jquery(control).html() === "arrow_drop_down") {
                show(control,target);
            }
            else {
                hide(control,target);
            }
        }

        let Accordion = {

            /**
             * Applies the accordion functionality
             * @control {DOM} The DOM element that controls the hide/show.
             *                  This element needs to have a material.io icon tag (<i>).
             * @target {DOM} The DOM element to hide/show 
             */
            apply: function(control, target) {
                jquery(control).click(function(){
                    toggle(jquery(control).children('i'), target);
                })
            }

        }

        return Accordion;

    }
);