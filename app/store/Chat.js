Ext.define('SpreadO.store.Chat', {
    extend: 'Ext.data.Store',
    config: {
    	data:[
    			{date:"2013-07-19 15:55:00", from:"Edward Stark", msg:"Winter is coming!"},
    			{date:"2013-07-19 15:56:00", from:"Jaime Lanister", msg:"A Lannister always pays back his debts!"}
    		],
    		
    	sorters: 'name',
    }
 });