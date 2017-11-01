//need initializer because need to pause/delay boot

export function initialize(app) {
  app.deferReadiness();

  const { geolocation } = navigator;
  geolocation.getCurrentPosition((pos) => {
    let { coords: { latitude: lat, longitude: lng } } = pos;
    app.register('data:location', { lat, lng }, {
      instantiate: false,
    });
    app.advanceReadiness();
  });
}

export default {
  name: 'geo',
  initialize
};