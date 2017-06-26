debugger
this.addEventListener('install', function(registration) {
  debugger
  registration.pushManager.subscribe({userVisibleOnly: true}).then(function(sub) {
    var endpointSections = sub.endpoint.split('/');
    var subscriptionId = endpointSections[endpointSections.length - 1];
    console.log('endpoint:', subscriptionId);
  });
})
