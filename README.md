# Cordova VoiceIt Plugin

An Apache Cordova plugin that lets you easily integrate VoiceIt's Voice Authentication API into your Cordova Based iOS and Android apps.

For more information on VoiceIt and its features, see [the website](http://voiceit.tech) and [getting started docs](https://siv.voiceprintportal.com/getstarted.jsp)

* [Supported Platforms](#supported-platforms)
* [Getting Started](#getting-started)
* [Installation](#installation)
* [API Calls](#api-calls)
  * [Create User](#create-user)
  * [Delete User](#delete-user)
  * [Create Enrollment](#create-enrollment)
  * [Get Enrollments](#get-enrollments)
  * [Delete Enrollment](#delete-enrollment)
  * [Authentication](#authentication)
  * [Playback](#playback)

## Supported Platforms

* Android
* iOS

## Getting Started

To use the VoiceIt Cordova Plugin in your Cordova Project, if you haven't already, please Sign Up for a free **Developer Id** at [http://voiceit.tech](https://siv.voiceprintportal.com/getDeveloperID.jsp). Then follow the installation instructions below.

## Installation

First please cd into your Cordova App's root directory via the terminal/command line and then run the following command, you can add your own micrphone usage description, this is required for recording on the ios platform, and description is shown to the user when requesting access to the mic:

```bash
$ cordova plugin add cordova-plugin-voiceit --variable MICROPHONE_USAGE_DESCRIPTION="This app needs to access to your microphone for voice biometrics"
```

## API Calls

Here are code snippets that show you how you can call the Various VoiceIt API Calls inside of your Cordova Project JavaScript Files.

### Create User

To create a new user call the createUser function like this with the following parameters: developerID, userId, password(not encrypted, just in text form the plugin encrypts the password using SHA256 for you), first name, last name

```javascript
VoiceIt.createUser({
  developerID: "DEVELOPER_ID_HERE",
  userId: "cordovaUserId",
  password: "password"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```
### Get User

To retrieve an existing user call the getUser function like this with the following parameters: developerID, userId, password(not encrypted, just in text form the plugin encrypts the password using SHA256 for you)

```javascript
VoiceIt.getUser({
  developerID: "DEVELOPER_ID_HERE",
  userId: "cordovaUserId",
  password: "password"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```
### Delete User

To delete an existing user call the deleteUser function like this with the following parameters: developerID, userId, password(not encrypted, just in text form the plugin encrypts the password using SHA256 for you)

```javascript
VoiceIt.deleteUser({
  developerID: "DEVELOPER_ID_HERE",
  userId: "cordovaUserId",
  password: "password"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```
### Create Enrollment

To create a new enrollment template for the specified user profile use the createEnrollment function like this with the following parameters: developerID, userId, password(not encrypted, just in text form the plugin encrypts the password using SHA256 for you) and optionally a content language.

Please Note: Unlike other wrappers, this createEnrollment function actually has recording inbuilt(supporting both Android and iOS platforms), it records the user saying their VoicePrint phrase for 5 seconds and then makes the Create Enrollment API call to send that audio file as an enrollment.

The recorder starts recording as soon as the createEnrollment function is called, it is also recommended that you either provide a visual or auditory indication to the user before the recording is about to start for example "playing a beep".

```javascript
VoiceIt.createEnrollment({
  developerID: "DEVELOPER_ID_HERE",
  userId: "cordovaUserId",
  password: "password",
  contentLanguage: "en-US"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```

### Get Enrollments

To get a list of the existing enrollments simply call the getEnrollments method for the specific user like this with the following parameters: developerID, userId, password(not encrypted, just in text form the plugin encrypts the password using SHA256 for you)

```javascript
VoiceIt.getEnrollments({
  developerID: "DEVELOPER_ID_HERE",
  userId: "cordovaUserId",
  password: "password"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```
### Delete Enrollment

To delete an enrollment simply call the deleteEnrollment method for the specific user like this with the following parameters: developerID, userId, password(not encrypted, just in text form the plugin encrypts the password using SHA256 for you), enrollmentId

```javascript
VoiceIt.deleteEnrollment({
  developerID: "DEVELOPER_ID_HERE",
  userId: "cordovaUserId",
  password: "password",
  enrollmentId:"2461"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```

### Authentication

This REST API call is used to authenticate the specified user profile within the Voiceprint Developer Portal (VPDP) service.

It authenticates the specified user profile in the VPDP service database and returns success or failure.

Please Note: The Voiceprint Phrase's (VPP's) are Text-Dependent. The Minimum length of a VPP is 1.5 second. Please note: You cannot use the same sound file for an enrollment and then an authentication. This is because of our anti- spoofing technology.

To manage the VPPs associated with your DeveloperID, please login to the developer portal and navigate to Voiceprint Phrases section.

To authenticate the user profile use the authentication method like this with the following parameters: userId, password(not encrypted, just in text form the plugin encrypts the password using SHA256 for you) and optionally content language.

Please Note: Unlike other wrappers, this authentication function actually has recording inbuilt(supporting both Android and iOS platforms), it records the user saying their VoicePrint phrase for 5 seconds and then makes the Authentication API call to send that audio file in for authentication.

The recorder starts recording as soon as the authentication function is called, it is also recommended that you either provide a visual or auditory indication to the user before the recording is about to start for example "playing a beep".

```javascript
VoiceIt.authentication({
  developerID: "DEVELOPER_ID_HERE",
  userId: "cordovaUserId",
  password: "password",
  contentLanguage: "en-US"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```
### Playback

This is a special method for this plugin that simply plays back the most recent recording if called right after either the [createEnrollment](#create-enrollment) or [authentication](#authentication) method.

```javascript
VoiceIt.playback( function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```
