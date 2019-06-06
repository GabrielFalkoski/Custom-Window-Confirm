if (typeof App == "undefined") {
   var App = {};
}
App.confirm = function (data = {}, callback) {
    var caption = typeof(data.caption) !== 'undefined' ? data.caption : 'Confirm',
    message = typeof(data.message) !== 'undefined' ? data.message : '',
    buttons = typeof(data.buttons) !== 'undefined' ? data.buttons : {
        'ok': 'OK',
        'cancel': 'Cancel'
    },
    html = '<div class="modal-confirm">'+
        '<div class="modal-confirm-main" draggable="false">'+
            '<div class="modal-confirm-header">'+
                '<div class="modal-confirm-title">'+
                    '<span>'+caption+'</span>'+
                '</div>'+
                '<div class="modal-confirm-close" title="Cancelar"><span>&times;</span></div>'+
            '</div>'+
            '<div class="modal-confirm-body">'+
                '<p>'+message+'</p>'+
            '</div>'+
            '<div class="modal-confirm-footer">'+
                '<button class="modal-confirm-true modal-confirm-button">'+buttons.ok+'</button>'+
                '<button class="modal-confirm-false modal-confirm-button">'+buttons.cancel+'</button>'+
            '</div>'+
        '</div>'+
    '</div>',
    callback = typeof(callback) === 'function' ? callback : false;

    var body = document.querySelector('body');
    body.innerHTML += html;
    
    var closeModal = function() {
        document.querySelector('.modal-confirm').remove();
    }

    document.querySelector('.modal-confirm-true').addEventListener('click', function(e){
        closeModal();
        if (callback)
            callback(true);
        else
            return true;
    });

    document.querySelector('.modal-confirm-false').addEventListener('click', function(e){
        closeModal();
        if (callback)
            callback(false);
        else
            return false;
    });

    document.querySelector('.modal-confirm-close').addEventListener('click', function(e){
        closeModal();
    });
};