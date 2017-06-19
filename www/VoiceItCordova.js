function VoiceItCordova() {}

VoiceItCordova.prototype.getUser = function(options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "getUser", [options.developerID, options.userId, options.password]);
};

VoiceItCordova.prototype.deleteUser = function(options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "deleteUser", [options.developerID, options.userId, options.password]);
};

VoiceItCordova.prototype.createUser = function(options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "createUser", [options.developerID, options.userId, options.password]);
};

VoiceItCordova.prototype.getEnrollments = function(options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "getEnrollments", [options.developerID, options.userId, options.password]);
};

VoiceItCordova.prototype.createEnrollment = function(options, successCallback, errorCallback) {
  if (options.contentLanguage == null){
		options.contentLanguage = "";
	}
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "createEnrollment", [options.developerID, options.userId, options.password, options.contentLanguage]);
};

VoiceItCordova.prototype.deleteEnrollment = function(options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "deleteEnrollment", [options.developerID, options.userId, options.password, options.enrollmentId]);
};

VoiceItCordova.prototype.authentication = function(options, successCallback, errorCallback) {
  if (options.contentLanguage == null){
    options.contentLanguage = "";
  }
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "authentication", [options.developerID, options.userId, options.password, options.contentLanguage]);
};

VoiceItCordova.prototype.playback = function(successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "VoiceItCordova", "playback", []);
};

window.VoiceIt = new VoiceItCordova();
