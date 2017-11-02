//need initializer because need to pause/delay boot

export function initialize(app) {
  if (typeof FastBoot === 'undefined') {
    app.deferReadiness();

    const { geolocation } = navigator;
    geolocation.getCurrentPosition((pos) => {
      let { coords: { latitude: lat, longitude: lng } } = pos;
      console.log('lat and lng = ', lat, lng);
      app.register('data:location', { lat, lng }, {
        instantiate: false,
      });
      app.advanceReadiness();
    });
  }
}

export default {
  name: 'geo',
  initialize
};
