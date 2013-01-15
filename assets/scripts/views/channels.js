irc.Views.Channels = Backbone.View.extend({

	template: templates.channels,

	initialize: function(){

		_(this).bindAll( 'render', 'renderChannel' );

		this.listenTo( this.collection, 'add', this.renderChannel );

	},

	render: function(){

		var html = this.template();
		this.$el.html( html );

		this.$channels = this.$el.find('ul.list');

		this.collection.each( this.renderChannel );

		return this;

	},

	renderChannel: function( channel ){

		var channel_listing_view = new irc.Views.ChannelListing({ model: channel });
		var $channel_listing = channel_listing_view.render().$el;
		this.$channels.append( $channel_listing );

	}

});