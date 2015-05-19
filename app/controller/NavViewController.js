Ext.define('FixiPelki.controller.NavViewController', {
    extend: 'Ext.app.Controller',
     
    config: {
        refs: {
            nview: '#navview',// <-- your Ext.NavigationView with id 'navview' ;)
            nbar: '#navbar'// <-- navigationBar of your Ext.NavigationView
        },
        control: {
            nview: {
                push: 'onPush',
                back: 'onBack'
            }
        }
    },
    onPush: function () {
        //this.getNbar().setHidden(false);
    },
    onBack: function () {
        //this.getNbar().setHidden(true);
    },
   
    launch: function (app) {
    }
    
   
});
