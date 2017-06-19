//
//  VoiceIt.h
//  TestSDK
//
//  Created by Armaan Bindra on 6/29/15.
//  Copyright (c) 2015 Armaan Bindra. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Encryption.h"

@interface VoiceIt : NSObject
- (NSString *)sha256:(NSString *)input;

// Properties
@property (nonatomic, strong) NSString *developerId;

// Constructor
- (id)init:(NSString *)developerId;

// User API Calls
- (void)getUser:(NSString *)userId
         passwd:(NSString *)passwd
       callback:(void (^)(NSString *))callback;
- (void)createUser:(NSString *)userId
            passwd:(NSString *)passwd
          callback:(void (^)(NSString *))callback;
- (void)deleteUser:(NSString *)userId
            passwd:(NSString *)passwd
          callback:(void (^)(NSString *))callback;
- (void)getEnrollments:(NSString *)userId
                passwd:(NSString *)passwd
              callback:(void (^)(NSString *))callback;
- (void)getEnrollmentsCount:(NSString *)userId
                     passwd:(NSString *)passwd
                    vppText:(NSString *)vppText
                   callback:(void (^)(NSString *))callback;

// Enrollments API Calls
- (void)createEnrollment:(NSString *)userId
                  passwd:(NSString *)passwd
     pathToEnrollmentWav:(NSString *)pathToEnrollmentWav
         contentLanguage:(NSString *)contentLanguage
                callback:(void (^)(NSString *))callback;
- (void)createEnrollmentByWavURL:(NSString *)userId
                          passwd:(NSString *)passwd
              urlToEnrollmentWav:(NSString *)urlToEnrollmentWav
                 contentLanguage:(NSString *)contentLanguage
                        callback:(void (^)(NSString *))callback;

- (void)deleteEnrollment:(NSString *)userId
                  passwd:(NSString *)passwd
            enrollmentId:(NSString *)enrollmentId
                callback:(void (^)(NSString *))callback;

// Authentication API Calls
- (void)authentication:(NSString *)userId
                     passwd:(NSString *)passwd
    pathToAuthenticationWav:(NSString *)pathToAuthenticationWav
            contentLanguage:(NSString *)contentLanguage
                   callback:(void (^)(NSString *))callback;

- (void)authenticationByWavURL:(NSString *)userId
                        passwd:(NSString *)passwd
        urlToAuthenticationWav:(NSString *)urlToAuthenticationWav
               contentLanguage:(NSString *)contentLanguage
                      callback:(void (^)(NSString *))callback;
@end
