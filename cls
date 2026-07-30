warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex f7c30fd..ea3ecfe 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -9,6 +9,7 @@[m
       "version": "1.0.0",[m
       "license": "ISC",[m
       "dependencies": {[m
[32m+[m[32m        "bcrypt": "^6.0.0",[m
         "dotenv": "^17.4.2",[m
         "express": "^5.2.1",[m
         "mongoose": "^9.8.1"[m
[36m@@ -57,6 +58,20 @@[m
         "node": ">= 0.6"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/bcrypt": {[m
[32m+[m[32m      "version": "6.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-6.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-cU8v/EGSrnH+HnxV2z0J7/blxH8gq7Xh2JFT6Aroax7UohdmiJJlxApMxtKfuI7z68NvvVcmR78k2LbT6efhRg==",[m
[32m+[m[32m      "hasInstallScript": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "node-addon-api": "^8.3.0",[m
[32m+[m[32m        "node-gyp-build": "^4.8.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 18"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/body-parser": {[m
       "version": "2.3.0",[m
       "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.3.0.tgz",[m
[36m@@ -702,6 +717,26 @@[m
         "node": ">= 0.6"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/node-addon-api": {[m
[32m+[m[32m      "version": "8.9.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-8.9.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ekZMeaaIzSQTSpr7X2X3iJM7lTzgnx8ahAG9pJfT/7+14mlEM8ZYQ9cgCDvSSRbReFK0oHli3WrZdCiRsgAT9Q==",[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": "^18 || ^20 || >= 21"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/node-gyp-build": {[m
[32m+[m[32m      "version": "4.8.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/node-gyp-build/-/node-gyp-build-4.8.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-LA4ZjwlnUblHVgq0oBF3Jl/6h/Nvs5fzBLwdEF4nuxnFdsfajde4WfxtJr3CaiH+F6ewcIB/q4jQ4UzPyid+CQ==",[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "node-gyp-build": "bin.js",[m
[32m+[m[32m        "node-gyp-build-optional": "optional.js",[m
[32m+[m[32m        "node-gyp-build-test": "build-test.js"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/object-inspect": {[m
       "version": "1.13.4",[m
       "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 4c4101e..6d620bc 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -12,6 +12,7 @@[m
   "license": "ISC",[m
   "type": "commonjs",[m
   "dependencies": {[m
[32m+[m[32m    "bcrypt": "^6.0.0",[m
     "dotenv": "^17.4.2",[m
     "express": "^5.2.1",[m
     "mongoose": "^9.8.1"[m
[1mdiff --git a/src/controllers/auth.controllers.js b/src/controllers/auth.controllers.js[m
[1mindex a36819c..4ffe737 100644[m
[1m--- a/src/controllers/auth.controllers.js[m
[1m+++ b/src/controllers/auth.controllers.js[m
[36m@@ -1,34 +1,49 @@[m
 const User = require("../models/user.models");[m
[32m+[m[32mconst bcrypt = require("bcrypt");[m
 [m
 const signup = async (req, res) => {[m
[31m-  const { name, email, password, username } = req.body; // We destructured, instead of prinitng the entire object[m
[32m+[m[32m  try {[m
[32m+[m[32m    const { name, email, password, username } = req.body; // We destructured, instead of prinitng the entire object[m
 [m
[31m-  //Validating the user details[m
[31m-  if (!name || !email || !password || !username) {[m
[31m-    return res.status(400).json({[m
[31m-      message: "All fields are required",[m
[31m-    });[m
[31m-  }[m
[31m-  [m
[31m-  //Checking duplicate user[m
[31m-  const existingUser = await User.findOne({email}) [m
[32m+[m[32m    //Validating the user details[m
[32m+[m[32m    if (!name || !email || !password || !username) {[m
[32m+[m[32m      return res.status(400).json({[m
[32m+[m[32m        message: "All fields are required",[m
[32m+[m[32m      });[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    //Checking duplicate user[m
[32m+[m[32m    const existingUser = await User.findOne({ email });[m
 [m
[31m-  if(existingUser) {[m
[31m-    return res.json(400).json({[m
[31m-      message: "User already exists"[m
[32m+[m[32m    if (existingUser) {[m
[32m+[m[32m      return res.status(400).json({[m
[32m+[m[32m        message: "User already exists",[m
[32m+[m[32m      });[m
[32m+[m[32m    }[m
[32m+[m[32m    // Hashing the password[m
[32m+[m[32m    const hashedPassword = await bcrypt.hash(password, 10);[m
[32m+[m
[32m+[m[32m    const user = new User({[m
[32m+[m[32m      name,[m
[32m+[m[32m      email,[m
[32m+[m[32m      password: hashedPassword, // Changed the password to password:hashedPassword after hashing[m
[32m+[m[32m      username,[m
     });[m
[31m-  }[m
[31m-  [m
[31m-  const user = new User({[m
[31m-    name,[m
[31m-    email,[m
[31m-    password,[m
[31m-    username,[m
[31m-  });[m
 [m
[31m-  await user.save();[m
[32m+[m[32m    await user.save();[m
 [m
[31m-  res.send("Signup successful");[m
[32m+[m[32m    return res.status(201).json({[m
[32m+[m[32m      success: true,[m
[32m+[m[32m      message: "Signup successful",[m
[32m+[m[32m    });[m
[32m+[m[32m  } catch (error) {[m
[32m+[m[32m    console.error(error);[m
[32m+[m
[32m+[m[32m    return res.status(500).json({[m
[32m+[m[32m      success: false,[m
[32m+[m[32m      message: "Internal server error",[m
[32m+[m[32m    });[m
[32m+[m[32m  }[m
 };[m
 [m
 const login = (req, res) => {[m
