Ext.define('FixiPelki.view.Viewport', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.navigation.View',
    ],
    config: {
        layout: 'card',
        items: [
                 {
                     xtype: 'navigationview',
                     id: 'navview',
                     defaultBackButtonText: '&nbsp;&nbsp;&nbsp;',
                     navigationBar: {
                         id: 'navbar',
                         style: 'background-color: white;',
                         //layout: 'hbox',
                         pack: 'justify',
                         //align: 'center' ,
                         //hidden: true,
                         items: [
                              {
                                  xtype: 'container',
                                  type: 'hbox',
                                  pack: 'center',
                                  align: 'left',
                                  //html: '<h2>YouTube PlayList<h2>'
                                  //html: '<img  src="resources/images/toolbar_logo.png"  style="padding-top: 4px;padding-left: 10px;"/>'
                              },

                             {
                                 //xtype: 'container',
                                 //layout: 'hbox',
                                 //pack: 'justify',

                                 //width: '100%',
                                 items: [
                                     {

                                         //xtype: 'container',
                                         height: 40,
                                         //pack: 'center',
                                         //align: 'left',
                                         html: '<img  src="resources/images/toolbar_logo.png" />'
                                     },
                                     //{
                                     //    xtype: 'spacer',
                                     //    flex: 5,
                                     //},
                                     // {
                                     //     xtype: 'spacer',
                                     //     flex: 1,
                                     //     html: 's'
                                     // },
                                 ]
                             },




                         ]
                     },
                     items: [
                         {
                             xtype: 'allvideos',
                         }
                     ],
                 },
        ]
    }
});
