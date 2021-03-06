import DS from 'ember-data';

export default DS.Model.extend({
  title:        DS.attr('string'),
  description:  DS.attr('string'),
  count:        DS.attr('number'),
  user:         DS.belongsTo('user'),
  vote:         DS.hasMany('vote')
});


