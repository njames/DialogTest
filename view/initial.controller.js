sap.ui.controller("sc.test.view.initial", {

    oDialog: null,

    openTestDialog: function(){
        console.log("in open dialog");
         var oDialogController = new sc.test.view.Dialog();
        // oDialog = new sap.ui.xmlfragment( "sc.test.view.Dialog", this);  //oDialogController);
        oDialog = new sap.ui.xmlfragment( "sc.test.view.Dialog", oDialogController);
        oDialog.open();
    },       

    onCartDialogCancel:function(oEvent){
        
        oDialog.close();
        
    }

});