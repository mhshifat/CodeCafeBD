/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: port */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"port\", function() { return port; });\n// Export Config Variables\r\nconst port = process.env.PORT || 5000;\r\n\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./database/conn.js":
/*!**************************!*\
  !*** ./database/conn.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! colors */ \"colors\");\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(colors__WEBPACK_IMPORTED_MODULE_1__);\n// Import Dependencies\r\n\r\n\r\n\r\n// Import Environment Variables\r\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\r\n\r\n// Setup Database Connection\r\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\r\n  process.env.MONGODB_URI,\r\n  { useNewUrlParser: true },\r\n  () => {\r\n    console.log(\r\n      colors__WEBPACK_IMPORTED_MODULE_1___default.a.magenta(`==> A database connection has been established`)\r\n    );\r\n  }\r\n);\r\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set(\"useCreateIndex\", \"true\");\r\n\n\n//# sourceURL=webpack:///./database/conn.js?");

/***/ }),

/***/ "./emailTemplates/emailTemplates.js":
/*!******************************************!*\
  !*** ./emailTemplates/emailTemplates.js ***!
  \******************************************/
/*! exports provided: emailVerifyTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emailVerifyTemplate\", function() { return emailVerifyTemplate; });\nconst emailVerifyTemplate = (url, token, username) => {\r\n  return `\r\n  <!DOCTYPE html>\r\n  <html lang=\"en\">\r\n  <head>\r\n      <meta charset=\"UTF-8\">\r\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n      <title>Email Template</title>\r\n      <style>\r\n          body {\r\n              padding: 0;\r\n              margin: 0;\r\n              font-family: \"Roboto\", sans-sarif;\r\n          }\r\n          a {\r\n              text-decoration: none;\r\n          }\r\n          table,td {\r\n              border-collapse: collapse;\r\n              padding: 0;\r\n          }\r\n          .container {\r\n              width: 100%;\r\n              height: 100%;\r\n              background-color: #eaeaea;\r\n          }\r\n          .wrapper {\r\n              display: block;\r\n              width: 500px;\r\n              height: auto;\r\n              background-color: #ffffff;\r\n              margin: 100px auto;\r\n              border: 2px solid #28b485;\r\n              border-radius: 3px;\r\n          }\r\n          .header {\r\n              width: 500px !important;\r\n              height: auto !important;\r\n              background-color: #28b485;\r\n              color: #ffffff;\r\n              padding: 30px;\r\n              text-align: center;\r\n          }\r\n          .header-title {\r\n              font-size: 25px;\r\n              letter-spacing: -1px;\r\n          }\r\n          .verify-text {\r\n              font-size: 20px;\r\n              color: #28b485;\r\n          }\r\n          .verify-name {\r\n              font-size: 16px;\r\n              color: #28b485;\r\n          }\r\n          .verify-desc {\r\n              font-size: 15px;\r\n              color: #868686;\r\n              font-weight: 400;\r\n          }\r\n          .verify-link {\r\n              display: inline-block;\r\n              padding: 10px 20px;\r\n              background-color: #28b485;\r\n              color: #ffffff;\r\n              border-radius: 3px;\r\n              margin: 20px 0 50px 0;\r\n              font-size: 15px;\r\n          }\r\n      </style>\r\n  </head>\r\n  <body style=\"padding: 0;margin: 0;font-family: &quot;Roboto&quot;, sans-sarif;\">\r\n      <table class=\"container\" style=\"border-collapse: collapse;padding: 0;width: 100%;height: 100%;background-color: #eaeaea;\">\r\n          <tbody>\r\n              <tr>\r\n                  <td class=\"wrapper\" align=\"center\" style=\"border-collapse: collapse;padding: 0;display: block;width: 500px;height: auto;background-color: #ffffff;margin: 100px auto;border: 2px solid #28b485;border-radius: 3px;\">\r\n                      <table style=\"border-collapse: collapse;padding: 0;\">\r\n                          <tbody>\r\n                              <tr>\r\n                                  <td class=\"header\" style=\"border-collapse: collapse;padding: 30px;background-color: #28b485;color: #ffffff;text-align: center;width: 500px !important;height: auto !important;\"><h1 class=\"header-title\" style=\"font-size: 25px;letter-spacing: -1px;\">CODECAFEBD</h1></td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                      <table style=\"border-collapse: collapse;padding: 0;\">\r\n                          <tbody>\r\n                              <tr>\r\n                                  <td align=\"center\" style=\"border-collapse: collapse;padding: 0;\"><h1 class=\"verify-text\" style=\"font-size: 20px;color: #28b485;\">Verify Email</h1></td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td align=\"center\" style=\"border-collapse: collapse;padding: 0;\"><h1 class=\"verify-name\" style=\"font-size: 16px;color: #28b485;\">( Hi, ${username} )</h1></td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td align=\"center\" style=\"border-collapse: collapse;padding: 0;\"><h4 class=\"verify-desc\" style=\"font-size: 15px;color: #868686;font-weight: 400;\">Thanks for creating an account with us.<br>To continue please verify your email with us.</h4></td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td align=\"center\" style=\"border-collapse: collapse;padding: 0;\"><a href=\"${url}/api/auth/verify/${token}\" target=\"_blank\" class=\"verify-link\" style=\"text-decoration: none;display: inline-block;padding: 10px 20px;background-color: #28b485;color: #ffffff;border-radius: 3px;margin: 20px 0 50px 0;font-size: 15px;\">Verify Your Email</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td align=\"center\" style=\"border-collapse: collapse;padding: 0;\"><h4 class=\"verify-desc\" style=\"font-size: 15px;color: #868686;font-weight: 400;\">Email validation time 1 hour.</h4></td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </td>\r\n              </tr>\r\n          </tbody>\r\n      </table>\r\n  </body>\r\n  </html>\r\n  `;\r\n};\r\n\n\n//# sourceURL=webpack:///./emailTemplates/emailTemplates.js?");

/***/ }),

/***/ "./helpers/functions.js":
/*!******************************!*\
  !*** ./helpers/functions.js ***!
  \******************************/
/*! exports provided: sendEmailConfirmationMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendEmailConfirmationMessage\", function() { return sendEmailConfirmationMessage; });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emailTemplates_emailTemplates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emailTemplates/emailTemplates */ \"./emailTemplates/emailTemplates.js\");\n\r\n\r\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\r\n\r\n\r\n\r\nconst sendEmailConfirmationMessage = async (\r\n  username,\r\n  email,\r\n  token,\r\n  url\r\n) => {\r\n  try {\r\n    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default.a.createTransport({\r\n      host: \"smtp.gmail.com\",\r\n      port: 465,\r\n      secure: true,\r\n      auth: {\r\n        user: process.env.GOOGLE_USER,\r\n        pass: process.env.GOOGLE_PASS\r\n      },\r\n      tls: {\r\n        rejectUnauthorized: false\r\n      }\r\n    });\r\n    const mailOptions = {\r\n      from: process.env.GOOGLE_USER,\r\n      to: email,\r\n      subject: \"Email confirmation to verify your account\",\r\n      html: Object(_emailTemplates_emailTemplates__WEBPACK_IMPORTED_MODULE_1__[\"emailVerifyTemplate\"])(url, token, username)\r\n    };\r\n    const info = await transporter.sendMail(mailOptions);\r\n    return info;\r\n  } catch (err) {\r\n    return err;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./helpers/functions.js?");

/***/ }),

/***/ "./models/Project.js":
/*!***************************!*\
  !*** ./models/Project.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// Import Dependencies\r\n\r\n\r\n// Creating a Schema\r\nconst projectSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\r\n  user: {\r\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\r\n    ref: \"User\"\r\n  },\r\n  name: {\r\n    type: String,\r\n    required: true,\r\n    trim: true,\r\n    unique: true\r\n  },\r\n  category: {\r\n    type: String,\r\n    required: true,\r\n    trim: true\r\n  },\r\n  website: {\r\n    type: String,\r\n    required: true,\r\n    trim: true\r\n  },\r\n  github: {\r\n    type: String,\r\n    required: true,\r\n    trim: true\r\n  },\r\n  image: {\r\n    type: String,\r\n    required: true,\r\n    trim: true\r\n  },\r\n  date: {\r\n    type: Date,\r\n    default: Date.now\r\n  }\r\n});\r\n\r\n// Export Model\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Project\", projectSchema));\r\n\n\n//# sourceURL=webpack:///./models/Project.js?");

/***/ }),

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// Import Dependencies\r\n\r\n\r\n// Creating a Schema\r\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\r\n  username: {\r\n    type: String,\r\n    required: true,\r\n    trim: true\r\n  },\r\n  email: {\r\n    type: String,\r\n    required: true,\r\n    trim: true,\r\n    unique: true\r\n  },\r\n  password: {\r\n    type: String,\r\n    required: true,\r\n    trim: true\r\n  },\r\n  isAdmin: {\r\n    type: Boolean,\r\n    default: false\r\n  },\r\n  projects: [\r\n    {\r\n      type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\r\n      ref: \"Project\"\r\n    }\r\n  ],\r\n  posts: [\r\n    {\r\n      type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\r\n      ref: \"Post\"\r\n    }\r\n  ],\r\n  categories: [\r\n    {\r\n      type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\r\n      ref: \"Category\"\r\n    }\r\n  ],\r\n  date: {\r\n    type: Date,\r\n    default: Date.now\r\n  }\r\n});\r\n\r\n// Export Model\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"User\", userSchema));\r\n\n\n//# sourceURL=webpack:///./models/User.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, engines, scripts, author, license, dependencies, devDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"server\",\"version\":\"1.0.0\",\"description\":\"Personal portfolio website\",\"main\":\"server.js\",\"engines\":{\"node\":\"10.9.0\",\"npm\":\"6.4.1\"},\"scripts\":{\"start\":\"node ./build/bundle.js\",\"heroku-postbuild\":\"cd client && npm install --only=dev && npm install && npm run build\",\"dev\":\"webpack ./server.js --mode=development --watch\",\"prod\":\"webpack ./server.js --mode=production\",\"back-server\":\"node-dev --notify=false ./build/bundle.js\",\"dev-server\":\"npm-run-all -p dev back-server\",\"install-all\":\"npm install && npm install --prefix=client\",\"client-server\":\"npm start --prefix=client\",\"server\":\"npm-run-all -p dev-server client-server\"},\"author\":\"Mehedi Hassan Shifat\",\"license\":\"ISC\",\"dependencies\":{\"bcryptjs\":\"^2.4.3\",\"body-parser\":\"^1.18.3\",\"colors\":\"^1.3.2\",\"cookie-parser\":\"^1.4.3\",\"dotenv\":\"^6.1.0\",\"express\":\"^4.16.4\",\"express-fileupload\":\"^1.0.0\",\"helmet\":\"^3.14.0\",\"jsonwebtoken\":\"^8.3.0\",\"mongoose\":\"^5.3.6\",\"morgan\":\"^1.9.1\",\"nodemailer\":\"^4.6.8\",\"request\":\"^2.88.0\"},\"devDependencies\":{\"node-dev\":\"^3.1.3\",\"npm-run-all\":\"^4.1.3\",\"webpack\":\"^4.19.1\",\"webpack-cli\":\"^3.1.2\",\"webpack-node-externals\":\"^1.7.2\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./routes/Api/auth.js":
/*!****************************!*\
  !*** ./routes/Api/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _validators_registerValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/registerValidator */ \"./validators/registerValidator.js\");\n/* harmony import */ var _validators_loginValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/loginValidator */ \"./validators/loginValidator.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/User */ \"./models/User.js\");\n/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/functions */ \"./helpers/functions.js\");\n// Import Dependencies\r\n\r\n\r\n\r\n\r\n// Import Validators\r\n\r\n\r\n\r\n// Import Models\r\n\r\n\r\n// Import Helper Functions\r\n\r\n\r\n// Import Environment Variables\r\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\r\n\r\n// Setup Router\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\r\n\r\n// ============================\r\n// ========== Routes ==========\r\n// ============================\r\n\r\n// Route ==> (GET) ==> /api/auth/user/token\r\nrouter.get(\"/user/:token\", async (req, res) => {\r\n  try {\r\n    const token = req.params.token.split(\"=\");\r\n    if (token[0] === \"ccbd_user\") {\r\n      const decodeUser = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(token[1], process.env.JWT_SECRET);\r\n      return res.status(200).json({\r\n        success: true,\r\n        user: decodeUser\r\n      });\r\n    }\r\n  } catch (err) {\r\n    console.log(err);\r\n  }\r\n});\r\n\r\n// Route ==> (POST) ==> /api/auth/login\r\nrouter.post(\"/login\", async (req, res) => {\r\n  try {\r\n    const { email, password } = req.body;\r\n    const { isValid, errors } = Object(_validators_loginValidator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(req.body);\r\n    if (!isValid) return res.status(400).json({ success: false, errors });\r\n    const getExistingUser = await _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({ email });\r\n    if (!getExistingUser) {\r\n      errors.email = \"A user of this email doesn't exist\";\r\n      return res.status(400).json({ success: false, errors });\r\n    }\r\n    const verifyPwd = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default.a.compare(password, getExistingUser.password);\r\n    if (!verifyPwd) {\r\n      errors.password = \"Provided password doesn't match\";\r\n      return res.status(400).json({ success: false, errors });\r\n    }\r\n    const currentUser = {\r\n      id: getExistingUser._id,\r\n      username: getExistingUser.username,\r\n      email: getExistingUser.email,\r\n      isAdmin: getExistingUser.isAdmin\r\n    };\r\n    const token = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign(currentUser, process.env.JWT_SECRET);\r\n    res.cookie(\"ccbd_user\", token, {\r\n      maxAge: 24 * 30 * 3600000\r\n    });\r\n    return res.status(200).json({\r\n      success: true,\r\n      data: {\r\n        message: `Welcome, you are now logged in`\r\n      },\r\n      user: currentUser\r\n    });\r\n  } catch (err) {\r\n    res.status(500).json({\r\n      success: false,\r\n      errors: {\r\n        error: \"Something went wrong, please try again later\"\r\n      }\r\n    });\r\n  }\r\n});\r\n\r\n// Route ==> (POST) ==> /api/auth/register\r\nrouter.post(\"/register\", async (req, res) => {\r\n  try {\r\n    const { username, email } = req.body;\r\n    const url = `${req.protocol}://${req.headers.host}`;\r\n    const { isValid, errors } = Object(_validators_registerValidator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req.body);\r\n    if (!isValid) return res.status(400).json({ success: false, errors });\r\n    const getExistingUser = await _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({ email });\r\n    if (getExistingUser) {\r\n      errors.email = \"A user of this email already exists\";\r\n      return res.status(400).json({ success: false, errors });\r\n    }\r\n    const emailVerifyToken = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign(req.body, process.env.JWT_SECRET, {\r\n      expiresIn: \"1h\"\r\n    });\r\n    const isEmailSent = Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_6__[\"sendEmailConfirmationMessage\"])(\r\n      username,\r\n      email,\r\n      emailVerifyToken,\r\n      url\r\n    );\r\n    if (isEmailSent)\r\n      return res.status(200).json({\r\n        success: true,\r\n        data: { message: \"Please verify your email address\" }\r\n      });\r\n  } catch (err) {\r\n    res.status(500).json({\r\n      success: false,\r\n      errors: {\r\n        error: \"Something went wrong, please try again later\"\r\n      }\r\n    });\r\n  }\r\n});\r\n\r\n// Route ==> (GET) ==> /api/auth/verify/:token\r\nrouter.get(\"/verify/:token\", async (req, res) => {\r\n  try {\r\n    const token = req.params.token;\r\n    const { username, email, password } = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(\r\n      token,\r\n      process.env.JWT_SECRET\r\n    );\r\n    const hashThePwd = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default.a.hash(password, 10);\r\n    const newUser = {\r\n      username,\r\n      email,\r\n      password: hashThePwd\r\n    };\r\n    const saveTheNewUser = await _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].create(newUser);\r\n    if (saveTheNewUser) {\r\n      res.redirect(\"/login\");\r\n    }\r\n  } catch (err) {\r\n    res.redirect(\"/register\");\r\n  }\r\n});\r\n\r\n// Route ==> (GET) ==> /api/auth/logout\r\nrouter.get(\"/logout\", (req, res) => {\r\n  res.clearCookie(\"ccbd_user\");\r\n  res.status(200).json({\r\n    success: true,\r\n    data: {\r\n      message: \"You have been logged out\"\r\n    }\r\n  });\r\n});\r\n\r\n// Export Router\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\r\n\n\n//# sourceURL=webpack:///./routes/Api/auth.js?");

/***/ }),

/***/ "./routes/Api/projects.js":
/*!********************************!*\
  !*** ./routes/Api/projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/User */ \"./models/User.js\");\n/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/Project */ \"./models/Project.js\");\n/* harmony import */ var _validators_projectValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validators/projectValidator */ \"./validators/projectValidator.js\");\n// Import Dependencies\r\n\r\n\r\n\r\n\r\n\r\n// Import Environment Variables\r\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\r\n\r\n// Import Models\r\n\r\n\r\n\r\n// Validators\r\n\r\n\r\n// Setup Router\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\r\n\r\n// ============================\r\n// ========== Routes ==========\r\n// ============================\r\n\r\n// Route ==> (GET) ==> /api/projects\r\nrouter.get(\"/\", async (req, res) => {\r\n  try {\r\n    const getAllProjects = await _models_Project__WEBPACK_IMPORTED_MODULE_5__[\"default\"].find({}).sort({ date: -1 });\r\n    if (getAllProjects) {\r\n      return res.status(200).json({\r\n        success: true,\r\n        projects: getAllProjects\r\n      });\r\n    }\r\n  } catch (err) {\r\n    res.status(500).json({\r\n      success: false,\r\n      errors: {\r\n        error: \"Something went wrong, please try again later\"\r\n      }\r\n    });\r\n  }\r\n});\r\n\r\n// Route ==> (POST) ==> /api/projects/add\r\nrouter.post(\"/add\", async (req, res) => {\r\n  try {\r\n    const { isValid, errors } = Object(_validators_projectValidator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req.body);\r\n    if (!isValid) return res.status(400).json({ success: false, errors });\r\n    if (req.files === null) {\r\n      errors.image = \"Please upload an image of the project\";\r\n      return res.status(400).json({ success: false, errors });\r\n    }\r\n    const validImgFormat = [\".png\", \".jpeg\", \".jpg\"];\r\n    const uploadedImgFormat = validImgFormat.filter(img =>\r\n      req.files.files.name.endsWith(img)\r\n    );\r\n    if (uploadedImgFormat.length <= 0) {\r\n      errors.image = \"Please upload a valid image file\";\r\n      return res.status(400).json({ success: false, errors });\r\n    }\r\n    const currentUser = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.decode(req.body.user, process.env.JWT_SECRET);\r\n    const getUserDetails = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findById(currentUser.id);\r\n    if (!getUserDetails.isAdmin) {\r\n      errors.error = \"You don't have permission to add a project\";\r\n      return res.status(400).json({ success: false, errors });\r\n    }\r\n    const getExistingProject = await _models_Project__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({ name: req.body.name });\r\n    if (getExistingProject) {\r\n      errors.error = \"A project of this name already exists\";\r\n      return res.status(400).json({ success: false, errors });\r\n    }\r\n    const image = req.files.files;\r\n    const imgName = image.name;\r\n    const imageNameWithDates = \"CODECAFEBD-\" + Date.now() + \"-\" + imgName;\r\n    if (fs__WEBPACK_IMPORTED_MODULE_2___default.a.existsSync(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(\"client\", \"build\"))) {\r\n      image.mv(`./client/build/images/projects/${imageNameWithDates}`);\r\n    } else if (fs__WEBPACK_IMPORTED_MODULE_2___default.a.existsSync(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(\"client\", \"public\"))) {\r\n      image.mv(`./client/public/images/projects/${imageNameWithDates}`);\r\n    }\r\n    const newProject = {\r\n      user: getUserDetails._id,\r\n      name: req.body.name,\r\n      category: req.body.category,\r\n      website: req.body.website,\r\n      github: req.body.github,\r\n      image: imageNameWithDates\r\n    };\r\n    const createProject = await _models_Project__WEBPACK_IMPORTED_MODULE_5__[\"default\"].create(newProject);\r\n    if (createProject) {\r\n      getUserDetails.projects.push(createProject);\r\n      getUserDetails.save();\r\n      return res.status(200).json({\r\n        success: true,\r\n        data: { message: \"A new project has been created\" },\r\n        project: createProject\r\n      });\r\n    }\r\n  } catch (err) {\r\n    res.status(500).json({\r\n      success: false,\r\n      errors: {\r\n        error: \"Something went wrong, please try again later\"\r\n      }\r\n    });\r\n  }\r\n});\r\n\r\n// Route ==> (GET) ==> /api/projects/delete/:id\r\nrouter.get(\"/delete/:id\", async (req, res) => {\r\n  try {\r\n    const deleteProject = await _models_Project__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findByIdAndDelete(req.params.id);\r\n    if (fs__WEBPACK_IMPORTED_MODULE_2___default.a.existsSync(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(\"client\", \"build\"))) {\r\n      fs__WEBPACK_IMPORTED_MODULE_2___default.a.unlinkSync(`./client/build/images/projects/${deleteProject.image}`);\r\n    } else if (fs__WEBPACK_IMPORTED_MODULE_2___default.a.existsSync(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(\"client\", \"public\"))) {\r\n      fs__WEBPACK_IMPORTED_MODULE_2___default.a.unlinkSync(`./client/public/images/projects/${deleteProject.image}`);\r\n    }\r\n    return res.status(200).json({\r\n      success: true,\r\n      data: {\r\n        message: \"One project has been deleted\"\r\n      },\r\n      project: deleteProject\r\n    });\r\n  } catch (err) {\r\n    res.status(500).json({\r\n      success: false,\r\n      errors: {\r\n        error: \"Something went wrong, please try again later\"\r\n      }\r\n    });\r\n  }\r\n});\r\n\r\n// Route ==> (POST) ==> /api/projects/update/:id\r\nrouter.post(\"/update/:id\", async (req, res) => {\r\n  try {\r\n    const image = req.files !== null && req.files.files;\r\n    const imgName = image.name;\r\n    const imageNameWithDates = \"CODECAFEBD-\" + Date.now() + \"-\" + imgName;\r\n    const { isValid, errors } = Object(_validators_projectValidator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req.body);\r\n    if (!isValid) return res.status(400).json({ success: false, errors });\r\n    const getExistingProject = await _models_Project__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findById(req.params.id);\r\n    if (req.files !== null) {\r\n      const validImgFormat = [\".png\", \".jpeg\", \".jpg\"];\r\n      const uploadedImgFormat = validImgFormat.filter(img =>\r\n        req.files.files.name.endsWith(img)\r\n      );\r\n      if (uploadedImgFormat.length <= 0) {\r\n        errors.image = \"Please upload a valid image file\";\r\n        return res.status(400).json({ success: false, errors });\r\n      }\r\n      if (fs__WEBPACK_IMPORTED_MODULE_2___default.a.existsSync(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(\"client\", \"build\"))) {\r\n        image.mv(`./client/build/images/projects/${imageNameWithDates}`);\r\n      } else if (fs__WEBPACK_IMPORTED_MODULE_2___default.a.existsSync(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(\"client\", \"public\"))) {\r\n        image.mv(`./client/public/images/projects/${imageNameWithDates}`);\r\n      }\r\n      if (fs__WEBPACK_IMPORTED_MODULE_2___default.a.existsSync(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(\"client\", \"build\"))) {\r\n        fs__WEBPACK_IMPORTED_MODULE_2___default.a.unlinkSync(\r\n          `./client/build/images/projects/${getExistingProject.image}`\r\n        );\r\n      } else if (fs__WEBPACK_IMPORTED_MODULE_2___default.a.existsSync(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(\"client\", \"public\"))) {\r\n        fs__WEBPACK_IMPORTED_MODULE_2___default.a.unlinkSync(\r\n          `./client/public/images/projects/${getExistingProject.image}`\r\n        );\r\n      }\r\n    }\r\n    const projectUpdate = {\r\n      name: req.body.name,\r\n      category: req.body.category,\r\n      website: req.body.website,\r\n      github: req.body.github,\r\n      image: req.files !== null ? imageNameWithDates : getExistingProject.image\r\n    };\r\n    const updatedProject = await _models_Project__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findByIdAndUpdate(\r\n      req.params.id,\r\n      projectUpdate,\r\n      { new: true }\r\n    );\r\n    if (updatedProject) {\r\n      return res.status(200).json({\r\n        success: true,\r\n        data: { message: \"One project has been updated\" },\r\n        project: updatedProject\r\n      });\r\n    }\r\n  } catch (err) {\r\n    console.log(err);\r\n    res.status(500).json({\r\n      success: false,\r\n      errors: {\r\n        error: \"Something went wrong, please try again later\"\r\n      }\r\n    });\r\n  }\r\n});\r\n\r\n// Export Router\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\r\n\n\n//# sourceURL=webpack:///./routes/Api/projects.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_fileupload__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! colors */ \"colors\");\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(colors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ \"./package.json\", 1);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/config */ \"./config/config.js\");\n/* harmony import */ var _routes_Api_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/Api/auth */ \"./routes/Api/auth.js\");\n/* harmony import */ var _routes_Api_projects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/Api/projects */ \"./routes/Api/projects.js\");\n/* harmony import */ var _database_conn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./database/conn */ \"./database/conn.js\");\n// Import Dependencies\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Import Package.json\r\n\r\n\r\n// Import Config Variables\r\n\r\n\r\n// Import Routes\r\n\r\n\r\n\r\n// Connect Database\r\n\r\n\r\n// Initialize Express App\r\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\r\n\r\n// Use Middlewares\r\napp.use(express_fileupload__WEBPACK_IMPORTED_MODULE_2___default()());\r\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_7___default()());\r\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\r\napp.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()(\"tiny\"));\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_6___default.a.json());\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_6___default.a.urlencoded({ extended: true }));\r\n\r\n// Setup Routes\r\napp.get(\"/api\", (req, res) => {\r\n  res.status(200).json({\r\n    name: _package_json__WEBPACK_IMPORTED_MODULE_8__[\"name\"],\r\n    version: _package_json__WEBPACK_IMPORTED_MODULE_8__[\"version\"],\r\n    description: _package_json__WEBPACK_IMPORTED_MODULE_8__[\"description\"]\r\n  });\r\n});\r\n\r\napp.use(\"/api/auth\", _routes_Api_auth__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\r\napp.use(\"/api/projects\", _routes_Api_projects__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\r\n\r\n// For Production\r\nif (false) {}\r\n\r\n// Listening For Port\r\napp.listen(_config_config__WEBPACK_IMPORTED_MODULE_9__[\"port\"], () => {\r\n  console.log(\r\n    colors__WEBPACK_IMPORTED_MODULE_3___default.a.green(`==> The server is running on http://localhost:${_config_config__WEBPACK_IMPORTED_MODULE_9__[\"port\"]}`)\r\n  );\r\n});\r\n\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./validators/loginValidator.js":
/*!**************************************!*\
  !*** ./validators/loginValidator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loginValidator = ({ email, password }) => {\r\n  const errors = {};\r\n\r\n  if (!email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/))\r\n    errors.email = \"Please provide a valid email address\";\r\n\r\n  if (email.includes(\"<script>\") || email.includes(\"alert()\"))\r\n    errors.email = \"Please provide a valid email address\";\r\n  if (password.includes(\"<script>\") || password.includes(\"alert()\"))\r\n    errors.password = \"Please provide a valid password\";\r\n\r\n  if (!email) errors.email = \"Email field is required\";\r\n  if (!password) errors.password = \"Password field is required\";\r\n\r\n  return {\r\n    isValid: Object.keys(errors).length > 0 ? false : true,\r\n    errors\r\n  };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (loginValidator);\r\n\n\n//# sourceURL=webpack:///./validators/loginValidator.js?");

/***/ }),

/***/ "./validators/projectValidator.js":
/*!****************************************!*\
  !*** ./validators/projectValidator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst projectValidate = ({ name, category, website, github }) => {\r\n  const errors = {};\r\n\r\n  if (name.includes(\"<script>\") || name.includes(\"alert()\"))\r\n    errors.name = \"Please provide a valid name\";\r\n  if (category.includes(\"<script>\") || category.includes(\"alert()\"))\r\n    errors.category = \"Please provide a valid category\";\r\n  if (website.includes(\"<script>\") || website.includes(\"alert()\"))\r\n    errors.website = \"Please provide a valid website link\";\r\n  if (github.includes(\"<script>\") || github.includes(\"alert()\"))\r\n    errors.github = \"Please provide a valid github link\";\r\n\r\n  if (!name) errors.name = \"Name field is required\";\r\n  if (!category) errors.category = \"Category field is required\";\r\n  if (!website) errors.website = \"Website link is required\";\r\n  if (!github) errors.github = \"Github link is required\";\r\n\r\n  return {\r\n    isValid: Object.keys(errors).length > 0 ? false : true,\r\n    errors\r\n  };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (projectValidate);\r\n\n\n//# sourceURL=webpack:///./validators/projectValidator.js?");

/***/ }),

/***/ "./validators/registerValidator.js":
/*!*****************************************!*\
  !*** ./validators/registerValidator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst registerValidator = ({ username, email, password }) => {\r\n  const errors = {};\r\n\r\n  if (username.includes(password))\r\n    errors.username = \"Username and password can't be the same\";\r\n\r\n  if (!email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/))\r\n    errors.email = \"Please provide a valid email address\";\r\n\r\n  if (username.includes(\"<script>\") || username.includes(\"alert()\"))\r\n    errors.username = \"Please provide a valid username\";\r\n  if (email.includes(\"<script>\") || email.includes(\"alert()\"))\r\n    errors.email = \"Please provide a valid email address\";\r\n  if (password.includes(\"<script>\") || password.includes(\"alert()\"))\r\n    errors.password = \"Please provide a valid password\";\r\n\r\n  if (username.length < 8 || username.length > 15)\r\n    errors.username = \"Username must be between 8 to 15 characters long\";\r\n  if (password.length < 10)\r\n    errors.password = \"Password must be at least 10 characters long\";\r\n\r\n  if (!username) errors.username = \"Username field is required\";\r\n  if (!email) errors.email = \"Email field is required\";\r\n  if (!password) errors.password = \"Password field is required\";\r\n\r\n  return {\r\n    isValid: Object.keys(errors).length > 0 ? false : true,\r\n    errors\r\n  };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerValidator);\r\n\n\n//# sourceURL=webpack:///./validators/registerValidator.js?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"colors\");\n\n//# sourceURL=webpack:///external_%22colors%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-fileupload\");\n\n//# sourceURL=webpack:///external_%22express-fileupload%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });