import Controller from '@ember/controller';
import stateFor from 'ember-state-services/state-for';

export default Controller.extend({
    postInfo: stateFor('post-info', 'model'),
    actions: {
        saveComment(body, post) {
            this.store.createRecord('comment', {
                body,
                post,
                user: this.store.peekRecord('user', 1),
            }).save().then((newComment) => {
                stateFor('post-info')
                    .get(post)
                    .set('draftComment', '');
            })
        }
    }
});
