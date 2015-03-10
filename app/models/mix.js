import DS from 'ember-data';

var Mix = DS.Model.extend({
  name: DS.attr(),
  part: DS.attr(),
  url: DS.attr(),
  image: DS.attr(),
  broadcast: DS.belongsTo('broadcast', { async: true}),
  tracks: DS.hasMany('track', { async: true})
});

Mix.reopenClass({FIXTURES : [
	{
		id: 1,
		name: "mix a",
		tracks: [1, 2, 3],
		url: "293",
		img: "bonobo.jpg"
	},
	{
		id: 2,
		name: "mix b",
		tracks: [4, 5, 6],
		url: "293",
		img: "6d6d6d.gif"
	},
	{
		id: 3,
		name: "mix c",
		tracks: [7, 8, 9, 10],
		url: "293",
		img: "09f.gif"
	},
	{
		id: 4,
		name: "mix d",
		tracks: [3, 8, 9, 7],
		url: "293",
		img: "1440x900.gif"
	}	
]});

export default Mix;