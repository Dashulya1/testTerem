$.when( $.ready ).then(function() {

    $('.windowModal').modal('show');

    $('.btn-close').on("click", function() {
        $('.windowModal').css({display: "none"});
    });    

    $('#btn1').on("click", function() {
        $('h1').toggle("slow");
    });

    $('#btn2').on("click", function() {
        $('#middle-block').swap($('#left-block'));
    });

    jQuery.fn.swap = function(b) {
        b = jQuery(b)[0];
        const a = this[0],
            a2 = a.cloneNode(true),
            b2 = b.cloneNode(true),
            stack = this;
    
        a.parentNode.replaceChild(b2, a);
        b.parentNode.replaceChild(a2, b);
    
        stack[0] = a2;
        return this.pushStack( stack );
    };
});