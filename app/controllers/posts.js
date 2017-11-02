import Controller from '@ember/controller';
import { run } from '@ember/runloop';

export default Controller.extend({
    search: '',
    _tellRouteAboutSearchChange(newStr) {
        this.set('search', newStr);
        
        this.send('refreshPostsRoute');
    },
    actions: {
        searchUpdated(newStr) {
            run.debounce(this, '_tellRouteAboutSearchChange', newStr, 500);
        }
    }
});
