Ext.define('ModernTunes.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',
  requires: [
    'ModernTunes.view.preview.Preview'
  ],
  onButtonClick: (button) => {
    this.lookupReference('df').setValue(Date.now())
  },
  onThumbSelect: (thumbs, record) => {
    this.onShowPreview(record);
  },
  onGridSelect: (grid, records) => {
    this.onShowPreview(records[0]);
  }
})

function onShowPreview(record) {
  let videoConfig = {
    xtype: 'video',
    url: record.data.preview,
    posterUrl: record.data.image
  };
  let linkConfig = {
    docked: 'bottom',
    xtype: 'component',
    data: {
      itunesstore: record.data.itunesstore
    }
  };
  let containerConfig = {
    xtype: 'container',
    title: record.data.title + ' — ' + record.data.artist,
    style: '{background-color: black;}',
    layout: 'fit',
    items: [
      videoConfig,
      linkConfig
    ]
  };
  let vid = Ext.create({
    xtype: 'preview',
    title: record.data.title,
    layout: 'fit',
    items: [containerConfig],
  });
  vid.show();
}
