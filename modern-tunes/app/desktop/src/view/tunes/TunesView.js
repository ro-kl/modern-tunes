Ext.define('ModernTunes.view.tunes.TunesView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',
    cls: 'tunes-view',
    scrollable: true,
    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
    itemCls: 'video',
    itemTpl: [
        '<figure>',
        '<div class="thumbnail" style="background-image:url(\'{image}\')"></div>',
        '<figcaption><div class=\'title\'>{title}</div><div class=\'artist\'>{release_date}</div></figcaption>',
        '</figure>'
    ]
});