$('#menu').selectmenu({
    change: function() {
        if($(this).val() != '') {
            window.location = $(this).val();
        }
    }
});