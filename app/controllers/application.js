import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  needs: ['broadcast'],

  classNames: ['MyApp-container'],

  myStyle: function(){
  	return "z-index: -1; position: fixed; top:4px; left: 4px; right: 4px; bottom: 4px; " + this.getBg();
  }.property("bgImgPath"),
  
  getBg: function(){
    if(this.get('bgImgPath') != null){
      return "background: linear-gradient( rgba(0, 0, 0, 0.45),  rgba(0, 0, 0, 0.45)), url('" + ENV.APP.API_HOST + this.get('bgImgPath') + "') 50% / cover no-repeat";
    } else {
      return "background: #101010 url(/assets/images/top50-bg.gif)";
    }
  },

  isPlaying: false,

  bgImgPath: null,

  muted: false,

  isMuted: function(){
  	return this.muted;
  }.property('muted'),

  updateCurrentPath: function() {
    window.MyNewApp.currentPath = this.get('currentPath');
  }.observes('currentPath'),

  noPlayLink: function() {
    return (this.get('currentPath') === 'broadcasts.broadcast.index');
  }.property('currentPath'),

  actions: {
  	mute: function(){
      
  		if(this.get('controllers.broadcast').currentlyPlaying){
  			if(this.get('muted')){
  				this.get('controllers.broadcast').currentlyPlaying.setVolume(100);
  				this.set('muted', false);
  			} else {
  				this.get('controllers.broadcast').currentlyPlaying.setVolume(0);
  				this.set('muted', true);
  			}
  		}
    },

    linkage: function(){
        if(!this.get('noPlayLink')) {
            this.transitionToRoute('index');
        }
    },

    pause: function(){
      this.get('controllers.broadcast').pauseCurrentMix();
    },

    play: function(){
      // if not sound is loaded, start a stream
      if (!window.MyNewApp.currentlyPlaying) {
        this.get('controllers.broadcast').startStream();
      } else { // a stream is loaded but paused, so play it
        this.get('controllers.broadcast').playCurrentMix();
      }
    },

    doLink : function(){
        var currentMix = this.get('controllers.broadcast').get('model');
        if(currentMix != null){
          // transition to currently playing mix
          this.transitionToRoute('broadcast', this.get('controllers.broadcast').get('model'));
        } else {
          // get latest
          this.transitionToRoute('');
        }
    },
  }

});