Ext.define('SpreadO.view.contacts.List', {
    extend: 'Ext.dataview.List',
    xtype: 'contacts',
    requires: [
             "Ext.data.Store"   
    ],
    config: {
    	useSimpleItems: true,
    	striped: true,
    	store:"Contacts",
    	
    	itemTpl:'<div style="height:100px;vertical-align:midle">'+
	    			'<div class="contact_image" style="float:left;">'+
	    				'<img src="{picture}" width="100" height="100"/>'+
	    			'</div>'+
	    			'<div class="contact_name"/>'+
	    				'<span style="vertical-align:middle;">{name}</span>'+
	    			'</div>'+
	    			'<div class="contact_msgs" style="float:right;">'+
	    				'<img src="http://png-2.findicons.com/files/icons/2219/dot_pictograms/128/email_mail_post_letter_stamp.png" width="50" height="50"/>'+
	    				'<div style="font-size:16px;color:red;text-align:center;font-weight:bold;">{msgs}</div>'+
	    			'</div>'+
    			'</div>',
    	
    }
 });