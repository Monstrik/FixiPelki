Ext.define('FixiPelki.view.SingleVideo', {

    extend: 'Ext.Panel',
    xtype: 'singlevideo',
    requires: ['Ext.TitleBar'],
    config: {
        title: '',
        vdata: null,
        layout: {
            type: 'vbox'
        },
        styleHtmlContent: true,
        scrollable: true,
        items: [
              //{
              //    xtype: 'button',
              //    text: 'Close',
              //    ui: 'confirm',
              //    handler: function () {
              //        Ext.Viewport.remove(this.parent);
              //        Ext.Viewport.add(Ext.create('Shay.view.Viewport'));

              //    }
              //},
            
            {
                xtype: 'button',
                text: 'Share'
            },
            {
                xtype: 'panel',
                id: 'videocontent',
                flex: 1,
                //hidden:true,
                html: '<h2>Video Info</h2>'
            },
            {
                xtype: 'panel',
                id: 'share',
                flex: 1,
                hidden: true,
                html: '<h2>share</h2>'
            },
           
            

            //{
            //    xtype: 'likeus',
            //},
            //{
            //    xtype: 'panel',
            //    id: 'addthiscontent',
            //    flex: 1,
            //    html: '<div><script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-554f168b3ee61f32" async="async"></script></div>',
            //},
            //{
            //    xtype: 'panel',
            //    flex: 1,
            //    html: '<span class="st_sharethis_large" displayText="ShareThis"></span>',
            //},
            //{
            //    xtype: 'panel',
            //    flex: 1,
            //    html: '<button onclick="window.plugins.socialsharing.shareViaWhatsApp(\'here path of your pic\', null, null, console.log(\'share ok\'), function(errormsg){alert(errormsg)})">WhatsApp (with errcallback)</button>',
            //}, 
        ],


    },

    initialize: function () {
        this.callParent(arguments);
        /* Attaches a listener to the component that will be fired after the component is rendered or shown. */
        this.on('painted', this.showLu);
    },//End init
    showLu: function () {
        var vId = sessionStorage.getItem("openVideoId");
        var href = '<iframe src="http://www.youtube.com/embed/' + vId + '" width="100%" style="height:300px"></iframe>';
        Ext.getCmp('videocontent').setHtml(href);
        sessionStorage.setItem("singleVideo", "played");
        //
    },

});
