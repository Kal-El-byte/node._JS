function doSomethingAsync(callback) {
    // simulate an asynchronous operation
    setTimeout(function() {
      console.log('Async operation done.');
      callback();
    }, 2000);
  };
  
  function callbackFunction() {
    console.log('Callback function called.');
  };
  
  doSomethingAsync(callbackFunction);