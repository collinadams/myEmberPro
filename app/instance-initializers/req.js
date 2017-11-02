function getUserAgent(fbService) { 
  // get the appropriate shoebox store from the fbService
  let shoebox = fbService.get('shoebox');
  let reqStore = shoebox.retrieve('req-data');
  // if we are rendering in fastboot
  // Create the store if it doesn't yet exist
  if (typeof FastBoot !== 'undefined') {
    if (!reqStore) {
      reqStore = {};
      shoebox.put('req-data', reqStore);
    }
    // Get the header User-Agent off of the fastboot service
    let ua = fbService.get('request.headers').get('user-agent');
    // PUT IT IN THE SHOEBOX STORE
    reqStore.ua = ua;
    // return it
    return ua;
    
    
  // else (client-rendering mode)
  } else {
    if (reqStore) {
      // GET THE DATA OUT of the shoebox store IF it exists, falling back to empty string otherwise
      // return it
      return reqStore.ua || '';
    } else {
      return '';
    }
  }
}

export function initialize(appInstance) {
  
  // Get the fastboot service directly from the container
  let fbService = appInstance.lookup('service:fastboot');
  // declare a variable requestData
  let requestData = getUserAgent(fbService);
  console.log('ua= ', requestData);
  // set requestData = getUserAgent(fbService)
  // put requestData into the container, under appropriate key
  appInstance.register('data:request', { ua: requestData }, { instantiate: false });
}

export default {
  initialize
};
