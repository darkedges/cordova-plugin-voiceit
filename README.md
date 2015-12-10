# Cordova VoiceIt Plugin

An Apache Cordova plugin that lets you easily integrate VoiceIt's Voice Authentication API into your Cordova Based iOS and Android apps.

For more information on VoiceIt and its features, see [the website](http://voiceit.tech) and [getting started docs](https://siv.voiceprintportal.com/getstarted.jsp)

* [Supported Platforms](#supported-platforms)
* [Getting Started](#getting-started)
* [Installation](#installation)
* [API Calls](#api-calls)
  * [Create User](#create-user)
  * [Get User](#get-user)
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

First please cd into your Cordova App's root directory via the terminal/command line and then run the following command:

```bash
$ cordova plugin add cordova-plugin-voiceit
```

## API Calls
### Create User

```javascript
VoiceIt.createUser({
  developerID: "DEVELOPER_ID_HERE",
  email: "cordova@voiceit-tech.com",
  password: "password",
  firstName: "John",
  lastName: "Doe"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```
### Get User

```javascript
VoiceIt.getUser({
  developerID: "DEVELOPER_ID_HERE",
  email: "cordova@voiceit-tech.com",
  password: "password"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```
### Delete User

```javascript
VoiceIt.deleteUser({
  developerID: "DEVELOPER_ID_HERE",
  email: "cordova@voiceit-tech.com",
  password: "password"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```
### Create Enrollment

```javascript
VoiceIt.createEnrollment({
  developerID: "DEVELOPER_ID_HERE",
  email: "cordova@voiceit-tech.com",
  password: "password"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```

### Get Enrollments

```javascript
VoiceIt.getEnrollments({
  developerID: "DEVELOPER_ID_HERE",
  email: "cordova@voiceit-tech.com",
  password: "password"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```
### Delete Enrollment

```javascript
VoiceIt.getEnrollments({
  developerID: "DEVELOPER_ID_HERE",
  email: "cordova@voiceit-tech.com",
  password: "password",
  enrollmentId:"2461"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```

### Authentication

```javascript
VoiceIt.authentication({
  developerID: "DEVELOPER_ID_HERE",
  email: "cordova@voiceit-tech.com",
  password: "password",
  accuracy: "0",
  accuracyPasses: "5",
  accuracyPassIncrement: "2",
  confidence: "85"
}, function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```
### Playback

```javascript
VoiceIt.playback( function(response) {
  alert('Result: ' + response);
}, function(error) {
  alert('Error: ' + error);
});
```
