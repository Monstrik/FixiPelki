Ext.define('FixiPelki.model.AllVideos', {
    extend: 'Ext.data.Model',
    config: {
        identifier: {
            type: 'uuid',
            isUnique: true
        },
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'title', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'thumbnail', type: 'string' },
            { name: 'href', type: 'string' },
            { name: 'ytdata', type: 'auto' },
        ],
        //proxy: {
        //    type: 'localstorage',
        //    id: 'applocalsettings'
        //}
    }
});
