define([
    'Magento_Ui/js/modal/alert',
    'jquery',
    'ko',
    'uiComponent'
], function (alert, $, ko, Component) {
    'use strict';
    return Component.extend({
        initialize: function () {
            this._super();
        },
        decreaseQty: function(input_id, qty, data, event) {
            var newQty = qty - 1;
            if (newQty < 1) {
                newQty = 1;
                alert({
                    title: $.mage.__('Ops...'),
                    content: $.mage.__('Esse item já está com a quantidade mínima permitida!'),
                    buttons: [{
                        text: $.mage.__('Continuar')
                    }]
                });
                return false;
            }
            $(input_id).val(newQty);
            $(event.target).submit();
        },
        increaseQty: function(input_id, qty, data, event) {
            var newQty = qty + 1;
            $(input_id).val(newQty);
            $(event.target).submit();
        }
    });
});
