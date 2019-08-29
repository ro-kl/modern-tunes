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
    this.onShowPreview(record.data.artist);
  },
  onGridSelect: (grid, records) => {
    this.onShowPreview(records[0].data.artist);
  }
})

function onShowPreview(record) {
  let vid = Ext.create({
    xtype: 'preview'
  })
  vid.show();
}
