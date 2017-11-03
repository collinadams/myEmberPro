/* eslint-disable */
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

const { JSONAPIAdapter } = DS;
const { host, namespace } = config.DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',
  host,
  namespace,
  urlForDeleteRecord(id, modelName, snapshot) {
    switch(modelName) {
      case 'comment':
        let postId = snapshot.belongsTo('post').id;
        let postUrl = this.urlForFindRecord(postId, 'post', snapshot.belongsTo('post'));
        return `${postUrl}/comment/${id}`;
      default: 
        return this._super(...arguments);
    }
  },
  urlForCreateRecord(modelName, snapshot) {
    switch(modelName) {
      case 'comment':
        let postId = snapshot.belongsTo('post').id;
        let postUrl = this.urlForFindRecord(postId, 'post', snapshot.belongsTo('post'));
        return `${postUrl}/comments`;
      default: 
        return this._super(...arguments);
    }
  },
});