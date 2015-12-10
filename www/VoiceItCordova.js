/*function VoiceItCordova() {
}

VoiceItCordova.prototype.initialize = function(developerID){
  VoiceItCordova.prototype.developerID = developerID;
}

VoiceItCordova.prototype.getUser = function (email, password, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "getUser",[VoiceItCordova.prototype.developerID, email, password]);
};

VoiceItCordova.prototype.createUser = function (email, password, firstName, lastName, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "createUser",[VoiceItCordova.prototype.developerID, email, password, firstName, lastName]);
};

VoiceItCordova.prototype.setUser = function (email, password, firstName, lastName, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "setUser",[VoiceItCordova.prototype.developerID, email, password, firstName, lastName]);
};

VoiceItCordova.prototype.getEnrollments = function (email, password, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "getEnrollments",[VoiceItCordova.prototype.developerID, email, password]);
};

VoiceItCordova.prototype.createEnrollment = function (email, password, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "createEnrollment",[VoiceItCordova.prototype.developerID, email, password]);
};

VoiceItCordova.prototype.authentication = function (email, password, accuracy, accuracyPasses, accuracyPassIncrement, confidence, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "authentication",[VoiceItCordova.prototype.developerID, email, password, accuracy, accuracyPasses, accuracyPassIncrement, confidence]);
};

VoiceItCordova.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.VoiceItCordova = new VoiceItCordova();
  return window.plugins.VoiceItCordova;
};

cordova.addConstructor(VoiceItCordova.install);
*/

var VoiceItCordova = {
    developerID: "",
    initialize: function(developerID){
      VoiceItCordova.developerID = developerID;
    },
    getUser: function (email, password, successCallback, errorCallback) {
      cordova.exec(successCallback, errorCallback, "VoiceItCordova", "getUser",[VoiceItCordova.developerID, email, password]);
    },
    createUser: function (email, password, firstName, lastName, successCallback, errorCallback) {
      cordova.exec(successCallback, errorCallback, "VoiceItCordova", "createUser",[VoiceItCordova.developerID, email, password, firstName, lastName]);
    },
    setUser: function (email, password, firstName, lastName, successCallback, errorCallback) {
      cordova.exec(successCallback, errorCallback, "VoiceItCordova", "setUser",[VoiceItCordova.developerID, email, password, firstName, lastName]);
    },
    getEnrollments: function (email, password, successCallback, errorCallback) {
      cordova.exec(successCallback, errorCallback, "VoiceItCordova", "getEnrollments",[VoiceItCordova.developerID, email, password]);
    },
    createEnrollment: function (email, password, successCallback, errorCallback) {
      cordova.exec(successCallback, errorCallback, "VoiceItCordova", "createEnrollment",[VoiceItCordova.developerID, email, password]);
    },
    authentication: function (email, password, accuracy, accuracyPasses, accuracyPassIncrement, confidence, successCallback, errorCallback) {
      cordova.exec(successCallback, errorCallback, "VoiceItCordova", "authentication",[VoiceItCordova.developerID, email, password, accuracy, accuracyPasses, accuracyPassIncrement, confidence]);
    }
};
window.VoiceIt = VoiceItCordova;
