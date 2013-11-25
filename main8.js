/**
 * Created by оо on 25.11.13.
 */
;(function($){
    $.fn.asda = function(){
        console.log(this);
        return this.append();
    }
    $("script").asda();
})(jQuery);
