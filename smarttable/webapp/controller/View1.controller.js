sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("smarttable.controller.View1", {
            onDelete: function (oEvent) {
            let oModel = this.getView().byId("SmartTable").getModel();
                oModel.setUseBatch(false);
                let items = this.getView().byId("idTable").getSelectedItems();
                items.forEach(val =>{
                        let id = val.getBindingContext().getProperty("ID");
                        oModel.remove("/Products("+id+")");
                   })
            }
        });
    });