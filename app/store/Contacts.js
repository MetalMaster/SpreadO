Ext.define('SpreadO.store.Contacts', {
    extend: 'Ext.data.Store',
    config: {
    	data:[
    			{picture:"http://png-2.findicons.com/files/icons/772/token_light/256/contact.png",name:"Robert Baratheon", msgs:3},
    			{picture:"http://png-2.findicons.com/files/icons/772/token_light/256/contact.png",name:"Edward Stark", msgs:10},
    			{picture:"http://png-2.findicons.com/files/icons/772/token_light/256/contact.png",name:"Jon Snow", msgs:0},
    			{picture:"http://png-2.findicons.com/files/icons/772/token_light/256/contact.png",name:"Jaime Lannister", msgs:5},
    			{picture:"http://png-2.findicons.com/files/icons/772/token_light/256/contact.png",name:"Stannis Baratheon", msgs:2},
    			{picture:"http://png-2.findicons.com/files/icons/772/token_light/256/contact.png",name:"Sansa Stark", msgs:1},
    			{picture:"http://png-2.findicons.com/files/icons/772/token_light/256/contact.png",name:"Petyr Baelish", msgs:0}
    		],
    		
    	sorters: 'name',
    }
 });