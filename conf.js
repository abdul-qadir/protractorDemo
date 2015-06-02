exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['spec.js'],
  suites: {
    regression: 'spec/regression/*.js',
    others: 'spec/others/*.js'
  },
  capabilities: {
    browserName: 'chrome'
  },
  
  onPrepare: function () {
  	// Your other stuff. 
  	require('protractor-linkuisref-locator')(protractor);
  }
}