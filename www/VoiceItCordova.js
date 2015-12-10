function VoiceItCordova() {}

VoiceItCordova.prototype.getUser = function(options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "getUser", [options.developerID, options.email, options.password]);
};

VoiceItCordova.prototype.createUser = function(options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "createUser", [options.developerID, options.email, options.password, options.firstName, options.lastName]);
};

VoiceItCordova.prototype.setUser = function(options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "setUser", [options.developerID, options.email, options.password, options.firstName, options.lastName]);
};

VoiceItCordova.prototype.getEnrollments = function(options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "getEnrollments", [options.developerID, options.email, options.password]);
};

VoiceItCordova.prototype.createEnrollment = function(options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "createEnrollment", [options.developerID, options.email, options.password]);
};

VoiceItCordova.prototype.authentication = function(options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "authentication", [options.developerID, options.email, options.password, options.accuracy, options.accuracyPasses, options.accuracyPassIncrement, options.confidence]);
};

/*
VoiceItCordova.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.VoiceItCordova = new VoiceItCordova();
  return window.plugins.VoiceItCordova;
};

cordova.addConstructor(VoiceItCordova.install);
*/
window.VoiceIt = new VoiceItCordova();
