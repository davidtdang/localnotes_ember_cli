import Ember from 'ember';

export default Ember.Controller.extend({
  message: "Welcome to the notes app",
  actions: {
    createNote: function() {
      var text= this.get('newText');
      var note= this.store.createRecord('note', {text:text});
      note.save();
      this.set('newText', '');
      this.set('message', "Successfully create a note!")
    },
    deleteNote: function(note){
      note.destroyRecord();
      this.set('message', "Deleted that note!")
    }
  }
});
