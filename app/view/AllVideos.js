
Ext.define('FixiPelki.view.AllVideos', {
    extend: 'Ext.Panel',
    xtype: 'allvideos',
    requires: [
        'FixiPelki.store.AllVideos',
        'Ext.dataview.List',
    ],
    config: {
        title: 'Фиксипелки',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'list',
                store: 'AllVideos',
                flex: 1,
                itemTpl: '<div style="line-height: 90px;height: 90px">' +
                             '<img style="float:left" src="{thumbnail}"/>' +
                             '<div style="line-height: normal;padding-left: 130px;">{title}</div>' + //{description}
                             '<div style="clear:both"></div>' +
                          '</div>',
                listeners: {
                    itemtap: function (dataView, index, target, record, e, eOpts) {
                        dataView.parent.parent.push(
                          {
                              xtype: 'videopage',
                              data: record,
                          }
                      );
                  }
              }
          },
        ]
    },
    initialize: function () {
        this.callParent(arguments);
        var me = this;
        Ext.data.JsonP.request({
            scope: this,
            url: "https://www.googleapis.com/youtube/v3/playlistItems",
            params: {
                part: 'snippet',
                key: 'AIzaSyDlbQ5lX6J6o2X_oPHIyRq4jc1bjW4-G78',
                playlistId: 'PL6824B1405D5C3B36',
                maxResults: 30,
            },// Prevent request caching: params: { ..., ts:new Date().getTime() 

            success: function (result, request) {
                console.log('--data loaded MyApp.view.AllVideos');

                var videoStore = Ext.getStore('AllVideos');
                var list = '';
                Ext.each(result.items, function (item) {
                    if (item.snippet.title != "Deleted video") {
                        var oneMoreItem = {
                            id: item.snippet.resourceId.videoId,
                            title: item.snippet.title,
                            description: item.snippet.description,
                            thumbnail: item.snippet.thumbnails["default"].url,
                            href: '<iframe src="http://www.youtube.com/embed/' + item.snippet.resourceId.videoId + '" width="100%" style="height:300px"></iframe>' + '<h3 style="color: #F00A0A;margin:0.5em;">' + item.snippet.title + '</h3>' + item.snippet.description,
                            ytdata: item
                        };
                        videoStore.add(oneMoreItem);
                    }
                });
                console.log('Number of items in the AllVideos Store  : ' + videoStore.getCount());
            }
        });
        this.on('painted', this.showSingleVideo);
    },
    showSingleVideo: function () {
        var vId = getParameterByName('vid');

        if (vId != sessionStorage.getItem("openVideoId"))
            sessionStorage.removeItem("singleVideo");
        if (vId != '' && sessionStorage.getItem("singleVideo") != "played") {
            sessionStorage.setItem("openVideoId", vId);
            this.parent.parent.push(
                       {
                           xtype: 'singlevideo',
                           data: vId,
                       }
                   );
           
        }

        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    },
});
