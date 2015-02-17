import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createNote: function() {
      var text= this.get('newText');
      var note= this.store.createRecord('note', {text:text});
      note.save();
      this.set('newText', '');
    },
    deleteNote: function(note){
      note.destroyRecord();
    }
  }
});
