Ext.define('SpreadO.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
                
    ],
    config: {
        tabBarPosition: 'top',

        items: [
            {
                title: 'Home',
                iconCls: 'home',
                scrollable: true,
                xtype:"contacts"
            },
            {
            	title:"Last chat",
            	iconCls:"bookmarks",
            	xtype:"chat"
            },
            {
            	title:"Favorites",
            	iconCls:"star",
            	html:"Device --> " + 
            		 "name["+Ext.device.Device.name+"] - "+
            		 "platform["+Ext.device.Device.platform+"] - "+
            		 "scheme["+Ext.device.Device.scheme+"] - "+
            		 "uuid["+Ext.device.Device.uuid+"] - ";
            		 
            		 
            }
        ]
    }
});
