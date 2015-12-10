function VoiceItCordova() {
}

VoiceItCordova.prototype.getUser = function (developerID, email, password, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "getUser",[developerID, email, password]);
};

VoiceItCordova.prototype.createUser = function (developerID, email, password, firstName, lastName, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "createUser",[developerID, email, password, firstName, lastName]);
};

VoiceItCordova.prototype.setUser = function (developerID, email, password, firstName, lastName, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "setUser",[developerID, email, password, firstName, lastName]);
};

VoiceItCordova.prototype.getEnrollments = function (developerID, email, password, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "getEnrollments",[developerID, email, password]);
};

VoiceItCordova.prototype.createEnrollment = function (developerID, email, password, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "createEnrollment",[developerID, email, password]);
};

VoiceItCordova.prototype.authentication = function (developerID, email, password, accuracy, accuracyPasses, accuracyPassIncrement, confidence, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "authentication",[developerID, email, password, accuracy, accuracyPasses, accuracyPassIncrement, confidence]);
};

VoiceItCordova.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.VoiceItCordova = new VoiceItCordova();
  return window.plugins.VoiceItCordova;
};

cordova.addConstructor(VoiceItCordova.install);
