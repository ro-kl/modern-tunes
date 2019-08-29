Ext.define('ModernTunes.view.main.MainView', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  requires: [
    'ModernTunes.view.tunes.TunesView',
    'ModernTunes.view.main.MainViewController',
    'ModernTunes.view.main.MainViewModel'
  ],
  viewModel: {
    type: 'mainviewmodel'
  },
  tabBarPosition: 'bottom',
  items: [
    {
      title: 'Thumbnails',
      xtype: 'tunesview',
      listeners: {
        select: 'onThumbSelect'
      },
      bind: { store: '{tunes}' }
    },
    {
      title: 'Grid',
      xtype: 'tunesgrid',
      listeners: {
        select: 'onGridSelect'
      },
      bind: { store: '{tunes}' }
    }
  ]
})
