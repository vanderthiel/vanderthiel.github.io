button.addEventListener('pointerup', function(event) {
  navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
    optionalServices: ['battery_service']
  });
});