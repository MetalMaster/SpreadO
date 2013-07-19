Ext.define("SpreadO.view.Chat",{
	extend:"Ext.dataview.List",
	xtype:"chat",
	config:{
		store:"Chat",
		itemTpl:'<div class="msg_wrapper">'+
					'<div class="from">{from}</div>'+
					'<div class="date">{date}</div>'+
					'<div class="msg">{msg}</div>'+
				'</div>'
	}
});
