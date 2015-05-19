Ext.define('FixiPelki.view.VideoPage', {
    extend: 'Ext.Panel',
    xtype: 'videopage',
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
            //    id: 'btnFav',
            //    action: 'Fav',
            //    xtype: 'button',
            //    //iconCls: 'favorites',
            //    iconMask: true,
            //    html: 'שמור למועדפים',
            //    margin: '5 30',
            //    listeners: {
            //        tap: function (dataView, e, eOpts) {
            //            MyApp.utils.Functions.favThisVideo(this.parent.vdata);
            //        }
            //    }
            //},
            {
                xtype: 'panel',
                id: 'videocontentid',
                hidden:true,
                html: '<h2>Video ID</h2>'
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
    },//End init
    updateData: function (newValue, oldValue) {
        if (newValue) {
            this.setTitle(newValue.get('title'));//newValue.get('name')
            this.vdata = newValue;
            Ext.getCmp('videocontent').setHtml(newValue.get('href'));
            Ext.getCmp('videocontentid').setHtml(newValue.get('id'));
            //this.setCurrentId(  ); //for example
        }
    }
});
