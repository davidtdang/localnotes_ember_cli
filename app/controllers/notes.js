import Ember from 'ember';

export default Ember.Controller.extend({
  message: "Welcome to the notes app",
  isValid: Ember.computed.notEmpty('newText'),
  actions: {
    createNote: function() {
      var title= this.get('newTitle');
      var text= this.get('newText');
      var note= this.store.createRecord('note', {text:text, title:title});
      note.save();
      this.set('newText', '');
      this.set('newTitle', '')
      this.set('message', "Successfully create a note!")
    },
    deleteNote: function(note){
      note.destroyRecord();
      this.set('message', "Deleted that note!")
    }
  }
});
