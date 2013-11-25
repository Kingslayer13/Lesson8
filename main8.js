/**
 * Created by оо on 25.11.13.
 */
;(function($){
    var input = $("input");
    console.log(input.prop("value", "sergiy")); 
    console.log(input.prop({value: "asd", title: "amam"})); //like object
    console.log(input[0].value);
})(jQuery);
