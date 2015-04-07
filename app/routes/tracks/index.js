import Ember from 'ember';

export default Ember.Route.extend({
	needs: ['application', 'broadcast'],

	beforeModel : function(){
		this.controllerFor('broadcast').set('showingTracks', true).set('plusMinus', '–');
	},

	 actions: {
	 	willTransition: function() {
	 		console.log(this.controllerFor('broadcast').get('hasBeenOpened'));
	 		this.controllerFor('broadcast').set('hasBeenOpened', false);
	      //this.set('controllers.broadcast.plusMinus', '+');
	    }
	 }
});