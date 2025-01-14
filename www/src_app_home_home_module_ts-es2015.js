"use strict";
(self["webpackChunkgetting_started_iv_angular"] = self["webpackChunkgetting_started_iv_angular"] || []).push([["src_app_home_home_module_ts"],{

/***/ 41899:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": function() { return /* binding */ Capacitor; },
/* harmony export */   "CapacitorException": function() { return /* binding */ CapacitorException; },
/* harmony export */   "CapacitorPlatforms": function() { return /* binding */ CapacitorPlatforms; },
/* harmony export */   "ExceptionCode": function() { return /* binding */ ExceptionCode; },
/* harmony export */   "Plugins": function() { return /* binding */ Plugins; },
/* harmony export */   "WebPlugin": function() { return /* binding */ WebPlugin; },
/* harmony export */   "WebView": function() { return /* binding */ WebView; },
/* harmony export */   "addPlatform": function() { return /* binding */ addPlatform; },
/* harmony export */   "registerPlugin": function() { return /* binding */ registerPlugin; },
/* harmony export */   "registerWebPlugin": function() { return /* binding */ registerWebPlugin; },
/* harmony export */   "setPlatform": function() { return /* binding */ setPlatform; }
/* harmony export */ });
/* harmony import */ var _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 71525:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic-enterprise/identity-vault/dist/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AndroidBiometricCryptoPreference": function() { return /* binding */ AndroidBiometricCryptoPreference; },
/* harmony export */   "AuthMode": function() { return /* binding */ AuthMode; },
/* harmony export */   "BiometricSecurityStrength": function() { return /* binding */ BiometricSecurityStrength; },
/* harmony export */   "BrowserVault": function() { return /* binding */ BrowserVault; },
/* harmony export */   "Device": function() { return /* binding */ Device; },
/* harmony export */   "DeviceSecurityType": function() { return /* binding */ DeviceSecurityType; },
/* harmony export */   "SupportedBiometricType": function() { return /* binding */ SupportedBiometricType; },
/* harmony export */   "Vault": function() { return /* binding */ Vault; },
/* harmony export */   "VaultErrorCodes": function() { return /* binding */ VaultErrorCodes; },
/* harmony export */   "VaultMigrator": function() { return /* binding */ VaultMigrator; },
/* harmony export */   "VaultType": function() { return /* binding */ VaultType; }
/* harmony export */ });
/* harmony import */ var _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);


/*! Ionic Enterprise Identity Vault: https://ionicframework.com/ - Commercially Licensed */

/**
 * The meaning of the error code in the thrown {@link VaultError}.
 */
var VaultErrorCodes;

(function (VaultErrorCodes) {
  /**
   * An unknown error happened.
   * @constant `0`
   */
  VaultErrorCodes[VaultErrorCodes["Unknown"] = 0] = "Unknown";
  /**
   * The operation failed because the vault was locked.
   * @constant `1`
   */

  VaultErrorCodes[VaultErrorCodes["VaultLocked"] = 1] = "VaultLocked";
  /**
   * The operation failed because the vault was unavailable.
   * The most likely cause of this error is that a vault has not been configured.
   * @constant `2`
   */

  VaultErrorCodes[VaultErrorCodes["VaultUnavailable"] = 2] = "VaultUnavailable";
  /**
   * The operation failed because the some of the vault provided arguments were invalid.
   * @constant `3`
   */

  VaultErrorCodes[VaultErrorCodes["InvalidArguments"] = 3] = "InvalidArguments";
  /**
   * The credentials were invalidated. This can happen when a user changes biometrics or passcode.
   * @constant `4`
   */

  VaultErrorCodes[VaultErrorCodes["InvalidatedCredential"] = 4] = "InvalidatedCredential";
  /**
   * Biometric security is unavailable due to a passcode not being set up at the system level.
   * In order to use biometric identification on the device a system level passcode must be set up by the user.
   * @constant `5`
   */

  VaultErrorCodes[VaultErrorCodes["SecurityNotAvailable"] = 5] = "SecurityNotAvailable";
  /**
   * User authentication failed.
   * @constant `6`
   */

  VaultErrorCodes[VaultErrorCodes["AuthFailed"] = 6] = "AuthFailed";
  /**
   * Too many failed authentication attempts made against the custom passcode vault, so the vault was cleared and user will need to login again.
   * @constant `7`
   */

  VaultErrorCodes[VaultErrorCodes["TooManyFailedAttempts"] = 7] = "TooManyFailedAttempts";
  /**
   * The user cancelled the native authentication dialog.
   *
   * **Note**: On iOS, this error code will also be thrown in the event that the native authentication dialog fails as a result of too many failed attempts.
   * The user will be forced to cancel the dialog, triggering this error code.
   *
   * On Android, this error also will be thrown if using {@link DeviceSecurityType.SystemPasscode} or {@link DeviceSecurityType.Both} in the event of too many failed attempts.
   * Its currently not possible to get the nature of failures from the native authentication dialog, and similar to iOS, the user will be forced to cancel the dialog, triggering this error code.
   * @constant `8`
   */

  VaultErrorCodes[VaultErrorCodes["UserCanceledInteraction"] = 8] = "UserCanceledInteraction";
  /**
   * The user provided mismatched passcodes.
   * @constant `9`
   */

  VaultErrorCodes[VaultErrorCodes["MismatchedPasscode"] = 9] = "MismatchedPasscode";
  /**
   * The operation requires passcode to be setup but it isn't set yet. Call {@link Vault.setCustomPasscode} to set it.
   * @constant `10`
   */

  VaultErrorCodes[VaultErrorCodes["MissingPasscode"] = 10] = "MissingPasscode";
  /**
   * The operation failed because the application tried to unlock the vault with passcode authentication,
   * but the vault is not configured to allow passcode authentication.
   * @constant `11`
   */

  VaultErrorCodes[VaultErrorCodes["PasscodeNotEnabled"] = 11] = "PasscodeNotEnabled";
  /**
   * The key was not found. This can happen when a user changes biometrics or passcode.
   * @constant `12`
   */

  VaultErrorCodes[VaultErrorCodes["KeyNotFound"] = 12] = "KeyNotFound";
  /**
   * The operation failed because biometric authentication is not enabled.
   * This can occur when biometrics is not supported by the device
   * or when biometrics has not been configured for the device or vault.
   * @constant `13`
   */

  VaultErrorCodes[VaultErrorCodes["BiometricsNotEnabled"] = 13] = "BiometricsNotEnabled";
  /**
   * @ignore
   */

  VaultErrorCodes[VaultErrorCodes["InvalidAuthMode"] = 14] = "InvalidAuthMode";
  /**
   * Biometrics have not been authed yet (Android only)
   * @constant `15`
   */

  VaultErrorCodes[VaultErrorCodes["MissingBiometrics"] = 15] = "MissingBiometrics";
  /**
   * {@link DeviceSecurityType.SystemPasscode} for {@link DeviceSecurityType} not available on this Android device.
   * @constant `16`
   */

  VaultErrorCodes[VaultErrorCodes["AndroidSystemPasscodeUnavailable"] = 16] = "AndroidSystemPasscodeUnavailable";
  /**
   * Biometrics have been locked out, usually because of too many failed attempts.
   *
   * **Note:** This error will never be thrown if using {@link DeviceSecurityType.SystemPasscode} or {@link DeviceSecurityType.Both}.
   * Its currently not possible to get the nature of failures from the native authentication dialog, so the only error that would be thrown is {@link VaultErrorCodes.UserCanceledInteraction} as the user
   * is forced to cancel the prompt.
   *
   * @constant `17`
   */

  VaultErrorCodes[VaultErrorCodes["AndroidBiometricsLockedOut"] = 17] = "AndroidBiometricsLockedOut";
  /**
   * Biometrics have been locked out, usually because of too many failed attempts.
   *
   * @constant `18`
   */

  VaultErrorCodes[VaultErrorCodes["iOSBiometricsLockedOut"] = 18] = "iOSBiometricsLockedOut";
  /**
   * An unexpected error has occurred in the Android keystore.
   *
   * @constant `19`
   */

  VaultErrorCodes[VaultErrorCodes["AndroidUnexpectedKeystoreError"] = 19] = "AndroidUnexpectedKeystoreError";
})(VaultErrorCodes || (VaultErrorCodes = {}));
/**
 * The possible values returned by {@link Device.getAvailableHardware}
 */


var SupportedBiometricType;

(function (SupportedBiometricType) {
  /** The device supports fingerprint scanning. */
  SupportedBiometricType["Fingerprint"] = "fingerprint";
  /** The device supports facial recognition. */

  SupportedBiometricType["Face"] = "face";
  /** The device supports iris scanning. */

  SupportedBiometricType["Iris"] = "iris";
})(SupportedBiometricType || (SupportedBiometricType = {}));
/**
 * Possible device biometric strength levels on Android (always `strong` on iOS).
 * [More Information](https://source.android.com/security/biometric/measure#tiered-authentication).
 */


var BiometricSecurityStrength;

(function (BiometricSecurityStrength) {
  /** Refers to Class 2 - Weak biometric security */
  BiometricSecurityStrength["Weak"] = "weak";
  /** Refers to Class 3 - Strong biometric security */

  BiometricSecurityStrength["Strong"] = "strong";
})(BiometricSecurityStrength || (BiometricSecurityStrength = {}));
/**
 * When type is set to 'DeviceSecurity', determines which aspects of the device to use to secure the vault.
 * Note: Android only supports `SystemPasscode` on Android 11 and greater.
 * @default `Both`
 */


var DeviceSecurityType;

(function (DeviceSecurityType) {
  /** Will allow a system passcode to secure the vault. On Android, only supported on Android 11 and greater. */
  DeviceSecurityType["SystemPasscode"] = "SystemPasscode";
  /** WIll allow biometric hardware tos secure the vault. */

  DeviceSecurityType["Biometrics"] = "Biometrics";
  /** WIll allow both SystemPasscode or Biometrics as an option to secure the vault. */

  DeviceSecurityType["Both"] = "Both";
  /** No biometric security option will be used. */

  DeviceSecurityType["None"] = "None";
})(DeviceSecurityType || (DeviceSecurityType = {}));
/**
 * The type of vault
 */


var VaultType;

(function (VaultType) {
  /** No additional security is required in the app as long as the device was unlocked with a secure method. */
  VaultType["SecureStorage"] = "SecureStorage";
  /** Uses additional device features to add an additional layer of security while the user is in the app. */

  VaultType["DeviceSecurity"] = "DeviceSecurity";
  /** User will set a custom passcode that will be used to access the vault. */

  VaultType["CustomPasscode"] = "CustomPasscode";
  /** Data will persist only while the application is in memory. */

  VaultType["InMemory"] = "InMemory";
})(VaultType || (VaultType = {}));
/**
 * For Android, when type is {@link VaultType.DeviceSecurity} and deviceSecurityType is {@link DeviceSecurityType.Both}, this options specifies if you want to
 * prefer a Strong Cryptographic Vault or the System Passcode fallback when they both aren't available.
 * @default `StrongVault`
 */


var AndroidBiometricCryptoPreference;

(function (AndroidBiometricCryptoPreference) {
  /** Prefer to use a strong cryptographic vault. */
  AndroidBiometricCryptoPreference["StrongVault"] = "StrongVault";
  /** Prefer the system passcode fallback. */

  AndroidBiometricCryptoPreference["SystemPasscode"] = "SystemPasscode";
})(AndroidBiometricCryptoPreference || (AndroidBiometricCryptoPreference = {})); // OLD METHODS

/**
 * The type of authentication the vault should be configured to allow.
 * @deprecated For use in legacy Vault Migrator only.
 * @ignore
 */


var AuthMode;

(function (AuthMode) {
  /**
   * Biometrics authentication should only be allowed
   */
  AuthMode[AuthMode["BiometricOnly"] = 0] = "BiometricOnly";
  /**
   * Passcode authentication should only be allowed
   */

  AuthMode[AuthMode["PasscodeOnly"] = 1] = "PasscodeOnly";
  /**
   * Both biometric and passcode authentication should be allowed
   */

  AuthMode[AuthMode["BiometricAndPasscode"] = 2] = "BiometricAndPasscode";
  /**
   * Both biometric and passcode authentication should be disabled.
   * With this setting all data in the vault will be cleared on lock or
   * if the app is closed. Stored data is kept only in memory.
   */

  AuthMode[AuthMode["InMemoryOnly"] = 3] = "InMemoryOnly";
  /**
   * Use biometrics if it is available, otherwise use passcode
   */

  AuthMode[AuthMode["BiometricOrPasscode"] = 4] = "BiometricOrPasscode";
  /**
   * Both biometric and passcode authentication will be disabled but any stored values
   * will persist and be stored securely at rest using the keychain and will be available
   * without needing to authenticate via passcode or biometrics when the device is unlocked.
   */

  AuthMode[AuthMode["SecureStorage"] = 5] = "SecureStorage";
})(AuthMode || (AuthMode = {}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

const STORAGE_KEYS = {
  DATA: 'data'
};
/**
 * THIS VAULT DOES NOT IMPLEMENT SECURE STORAGE IN THE BROWSER. It only exists
 * as a way to run browser-compatible code in place of Identity Vault. Browsers
 * do not have a secure storage element same as native devices. This class
 * is intended to be used to enable running your application in the browser while
 * simulating the functions of Identity Vault using sessionStorage.
 *
 * Represents a vault implementation for browser compatibility.
 */

class BrowserVault {
  /**
   * @usage
   * ```typescript
   * const vault = new Vault({
   *  key: 'com.company.myvaultapp',
   *  type: 'CustomPasscode',
   *  deviceSecurityType: 'Both',
   *  lockAfterBackgrounded: 2000,
   * });
   * ```
   * @param config
   */
  constructor(config) {
    /** @ignore */
    this.isVaultLocked = false;
    /** @ignore */

    this.isVaultEmpty = true;
    console.warn('THIS VAULT DOES NOT IMPLEMENT SECURE STORAGE IN THE BROWSER AND IS NOT INTENDED FOR PRODUCTION USE. It only exists as a way to run browser-compatible code in place of Identity Vault. Browsers do not have a secure storage element same as native devices. This class is intended to be used to enable running your application in the browser while simulating the functions of Identity Vault using sessionStorage.');
    this.config = Object.assign({
      deviceSecurityType: 'Both',
      androidBiometricsPreferStrongVaultOrSystemPasscode: 'StrongVault',
      shouldClearVaultAfterTooManyFailedAttempts: false,
      customPasscodeInvalidUnlockAttempts: 5,
      unlockVaultOnLoad: false
    }, config);
    this.isVaultLocked = config.unlockVaultOnLoad ? false : true;
  }
  /** @deprecated Deprecated in favor of using the isEmpty method. */

  /** See {@link Vault.doesVaultExist} */


  doesVaultExist() {
    const data = this.getDataObj();
    return Promise.resolve(!!data);
  }
  /** See {@link Vault.clear} */


  clear() {
    this.unlockIfLocked();
    sessionStorage.removeItem(this.getKey(STORAGE_KEYS.DATA));
    this.isVaultEmpty = true;
    return Promise.resolve();
  }
  /** See {@link Vault.exportVault} */


  exportVault() {
    this.unlockIfLocked();
    const data = this.getDataObj();
    return Promise.resolve(data !== null && data !== void 0 ? data : {});
  }
  /** See {@link Vault.importVault} */


  importVault(data) {
    this.setDataObj(data);
    return Promise.resolve();
  }
  /** See {@link Vault.isLocked} */


  isLocked() {
    return Promise.resolve(this.isVaultLocked);
  }
  /** See {@link Vault.isEmpty} */


  isEmpty() {
    return Promise.resolve(this.isVaultEmpty);
  }
  /** See {@link Vault.getKeys} */


  getKeys() {
    this.unlockIfLocked();
    const data = this.getDataObj();
    if (!data) return Promise.resolve([]);
    return Promise.resolve(Object.keys(data));
  }
  /** See {@link Vault.getValue} */


  getValue(key) {
    var _a;

    this.unlockIfLocked();
    const data = this.getDataObj();
    return Promise.resolve((_a = data === null || data === void 0 ? void 0 : data[key]) !== null && _a !== void 0 ? _a : null);
  }
  /** See {@link Vault.lock} */


  lock() {
    var _a;

    (_a = this.lockCallback) === null || _a === void 0 ? void 0 : _a.call(this);
    return Promise.resolve();
  }
  /** See {@link Vault.removeValue} */


  removeValue(key) {
    this.unlockIfLocked();
    const data = this.getDataObj();
    if (!data) return Promise.resolve();
    const _a = data,
          _b = key;
    _a[_b];

    const dataAfterRemoval = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);

    this.setDataObj(dataAfterRemoval);
    return Promise.resolve();
  }
  /** See {@link Vault.setCustomPasscode} */


  setCustomPasscode(passcode) {
    return Promise.resolve();
  }
  /** See {@link Vault.setValue} */


  setValue(key, value) {
    this.unlockIfLocked();
    const data = this.getDataObj();

    if (!data) {
      this.setDataObj({
        [key]: value
      });
    } else {
      this.setDataObj(Object.assign(Object.assign({}, data), {
        [key]: value
      }));
    }

    return Promise.resolve();
  }
  /** See {@link Vault.onConfigChanged} */


  onConfigChanged(callback) {
    this.configCallback = callback;
  }
  /** See {@link Vault.onError} */


  onError(callback) {
    this.errorCallback = callback;
  }
  /** See {@link Vault.onLock} */


  onLock(callback) {
    this.lockCallback = callback;
  }

  onPasscodeRequested(callback) {// No passcode support
  }
  /** See {@link Vault.onUnlock} */


  onUnlock(callback) {
    this.unlockCallback = callback;
  }
  /** See {@link Vault.unlock} */


  unlock() {
    var _a;

    (_a = this.unlockCallback) === null || _a === void 0 ? void 0 : _a.call(this);
    return Promise.resolve();
  }
  /** See {@link Vault.updateConfig} */


  updateConfig(config) {
    var _a;

    this.config = config;
    (_a = this.configCallback) === null || _a === void 0 ? void 0 : _a.call(this, config);
    return Promise.resolve();
  }
  /** @ignore */


  requestBiometricPrompt() {
    this.unlockIfLocked();
    return Promise.resolve(true);
  }
  /** @ignore */


  unlockIfLocked() {
    if (this.isVaultLocked) {
      this.unlock();
    }
  }
  /** @ignore */


  getDataObj() {
    var _a;

    const value = sessionStorage.getItem(this.getKey(STORAGE_KEYS.DATA));
    if (!value) return null;

    try {
      const dataObj = JSON.parse(value);
      this.isVaultEmpty = Object.keys(dataObj).length <= 0;
      return dataObj;
    } catch (e) {
      (_a = this.errorCallback) === null || _a === void 0 ? void 0 : _a.call(this, {
        message: 'Unable to parse data store',
        code: VaultErrorCodes.Unknown
      });
      return null;
    }
  }
  /** @ignore */


  setDataObj(data) {
    var _a;

    try {
      const dataStr = JSON.stringify(data);
      sessionStorage.setItem(this.getKey(STORAGE_KEYS.DATA), dataStr);
      this.isVaultEmpty = Object.keys(data).length <= 0;
    } catch (e) {
      (_a = this.errorCallback) === null || _a === void 0 ? void 0 : _a.call(this, {
        message: 'Unable to serialize data',
        code: VaultErrorCodes.Unknown
      });
    }
  }
  /** @ignore */


  getKey(key) {
    return `IV-${this.config.key}-${key}`;
  }

}
/**
 * Represents a vault for secure value storage
 */


class Vault {
  /**
   * @usage
   * ```typescript
   * const vault = new Vault({
   *  key: 'com.company.myvaultapp',
   *  type: 'CustomPasscode',
   *  deviceSecurityType: DeviceSecurityType.None,
   *  lockAfterBackgrounded: 2000,
   * });
   * ```
   * @param config
   */
  constructor(config) {
    /** @ignore */
    this.defaultConfig = {
      deviceSecurityType: DeviceSecurityType.None,
      androidBiometricsPreferStrongVaultOrSystemPasscode: AndroidBiometricCryptoPreference.StrongVault,
      shouldClearVaultAfterTooManyFailedAttempts: false,
      customPasscodeInvalidUnlockAttempts: 5,
      unlockVaultOnLoad: false
    }; // set defaults

    this.config = Object.assign(this.defaultConfig, config); // setting sane defaults

    if (config.deviceSecurityType === DeviceSecurityType.None && config.type === VaultType.DeviceSecurity) {
      config.deviceSecurityType = DeviceSecurityType.Both;
    }

    this.resume = this.resume.bind(this);
    this.handleError = this.handleError.bind(this);
    this.setup().then(() => {
      this.getPersistedVaultConfig();
    });
  }
  /**
   * Resolves true if a vault with the same key already exists, and false if not.
   * The vault does not need to be unlocked to check.
   *
   * __Note:__
   *  - Using {@link Vault.removeValue | removeValue()} to remove all of your vault data will not cause this function to resolve false, however {@link Vault.clear | clear()} will.
   *  - A vault only exists once it has been interacted with at least once via any of the following instance methods.
   *    - {@link Vault.setValue | setValue()}
   *    - {@link Vault.removeValue | removeValue()}
   *    - {@link Vault.importVault | importVault()}
   *    - {@link Vault.exportVault | exportVault()}
   *    - {@link Vault.unlock | unlock()}
   *    - {@link Vault.updateConfig | updateConfig()}
   *
   * @usage
   * ```typescript
   * const vault = new Vault(existingVaultConfig);
   * const vaultExists = await vault.doesVaultExists()
   * if (!vaultExists) {
   *  // the vault does not exist...
   * }
   * ```
   *
   * @deprecated Deprecated in favor of using the {@link Vault.isEmpty | isEmpty()} method.
   */


  doesVaultExist() {
    return new Promise((resolve, reject) => {
      cordova.exec(data => {
        resolve(JSON.parse(data));
      }, error => {
        this.handleError(resolve, reject, error, () => this.doesVaultExist());
      }, 'VaultPlugin', 'doesVaultExist', [this.config]);
    });
  }
  /**
   * Clears out the current vault and removes it from the system.
   * Note: The vault does not need to be unlocked in order to clear it. No credentials are checked
   * when clearing the vault.
   *
   * @usage
   * ```typescript
   * const vault = new Vault(existingVaultConfig);
   * await vault.clear();
   * ```
   */


  clear() {
    return new Promise((resolve, reject) => {
      cordova.exec(data => {
        resolve();
      }, error => {
        this.handleError(resolve, reject, error, () => this.clear());
      }, 'VaultPlugin', 'clear', [this.config]);
    });
  }
  /**
   * Exports the data of the current vault in its entirety.
   * The data is a map with keys that are strings and values that are JSON.
   * Calling `exportVault` will attempt to unlock the vault if it is currently locked.
   *
   * @usage
   * ```typescript
   * const vault = new Vault(existingVaultConfig);
   * const data = await vault.exportVault();
   * ```
   *
   * @return The resolved object is a map with string keys and string values.
   *
   */


  exportVault() {
    return new Promise((resolve, reject) => {
      cordova.exec(data => {
        resolve(JSON.parse(data));
      }, error => {
        this.handleError(resolve, reject, error, () => this.exportVault());
      }, 'VaultPlugin', 'exportVault', [this.config]);
    });
  }
  /**
   * Imports data into the vault, replacing the current contents of the vault.
   * The data is a map with keys that are strings and values that are JSON.
   * Calling `importVault` will attempt to unlock the vault if it is currently locked.
   *
   * @usage
   * ```typescript
   * const dataFromElsewhere = await getUserData();
   * const newVault = new Vault(vaultConfig);
   * await newVault.importVault(dataFromElsewhere);
   * ```
   *
   * @param data The entire data object to be imported. The shape of data must be {[key: string]: string}.
   *
   */


  importVault(data) {
    const jsonData = JSON.stringify(data);
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, error => {
        this.handleError(resolve, reject, error, () => this.importVault(data));
      }, 'VaultPlugin', 'importVault', [this.config, jsonData]);
    });
  }
  /**
   * Checks if the vault is currently in a locked state, which signifies that the contents
   * of the secure vault are not currently accessible. `isLocked` can also return true if the
   * vault does not exist.
   *
   * @usage
   * ```typescript
   * const vault = new Vault(existingVaultConfig);
   * const locked = await vault.isLocked();
   * if (locked) {
   *  // vault is locked (or does not exist);
   * }
   * ```
   */


  isLocked() {
    return new Promise((resolve, reject) => {
      cordova.exec(data => {
        resolve(JSON.parse(data));
      }, error => {
        this.handleError(resolve, reject, error);
      }, 'VaultPlugin', 'isLocked', [this.config]);
    });
  }
  /**
   * Returns an array of keys that are currently in the vault.
   * Calling `getKeys` will attempt to unlock the vault if it is currently locked.
   *
   * @usage
   * ```typescript
   * const vault = new Vault(existingVaultConfig);
   * const allKeys = await vault.getKeys();
   * allKeys.forEach((key) => {
   *  // do something with the key
   * });
   * ```
   */


  getKeys() {
    return new Promise((resolve, reject) => {
      cordova.exec(data => {
        resolve(JSON.parse(data));
      }, error => {
        this.handleError(resolve, reject, error, () => this.getKeys());
      }, 'VaultPlugin', 'getKeys', [this.config]);
    });
  }
  /**
   * Gets the value for a given key. Returns null if the key does not exist.
   * Calling `getValue` will attempt to unlock the vault if it is currently locked.
   *
   * @usage
   * ```typescript
   * const vault = new Vault(existingVaultConfig);
   * const userFirstName = await vault.getValue<string>("firstname");
   * ```
   *
   * @param key The key to look up the value for
   *
   */


  getValue(key) {
    return new Promise((resolve, reject) => {
      cordova.exec(data => {
        if (!data) {
          // android returns null as an empty string, so manually convert it here
          resolve(null);
        } else {
          try {
            resolve(JSON.parse(data));
          } catch (err) {
            resolve(data);
          }
        }
      }, error => {
        this.handleError(resolve, reject, error, () => this.getValue(key));
      }, 'VaultPlugin', 'getValue', [this.config, key]);
    });
  }
  /**
   * Locks the vault if it is currently unlocked.
   * Locking the vault with remove all secure data from memory inside of Identity Vault, but not your application.
   *
   * @usage
   * ```typescript
   * const vault = new Vault(existingVaultConfig);
   * await vault.lock();
   * ```
   */


  lock() {
    return new Promise((resolve, reject) => {
      cordova.exec(data => {
        resolve();
      }, error => {
        this.handleError(resolve, reject, error);
      }, 'VaultPlugin', 'lock', [this.config]);
    });
  }
  /**
   * Removes a value from the vault.
   * Calling `removeValue` will attempt to unlock the vault if it is currently locked.
   *
   * @usage
   * ```typescript
   * const vault = new Vault(existingVaultConfig);
   * await vault.removeValue("address");
   * ```
   *
   * @param key The key to remove
   *
   */


  removeValue(key) {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, error => {
        this.handleError(resolve, reject, error, () => this.removeValue(key));
      }, 'VaultPlugin', 'removeValue', [this.config, key]);
    });
  }
  /**
   * When the vault type is set to 'CustomPasscode', this method sets the passcode required to
   * secure the vault.
   * This method is typically called in the `onPasscodeRequested` callback.
   *
   * @usage
   * ```typescript
   * const vault = new Vault(existingVaultConfig);
   * const code = window.prompt("Enter your passcode.");
   * if (code) {
   *  await vault.setCustomPasscode(code);
   * }
   * ```
   *
   * @param passcode The user supplied passcode to secure the vault with.
   *
   */


  setCustomPasscode(passcode) {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, error => {
        this.handleError(resolve, reject, error);
      }, 'VaultPlugin', 'setCustomPasscode', [this.config, passcode]);
    });
  }
  /**
   * Sets the value of an item in the vault.
   * Calling `setValue` will attempt to unlock the vault if it is currently locked.
   *
   * @usage
   * ```typescript
   * const vault = new Vault(existingVaultConfig);
   * await vault.setValue<string>("theme", theme);
   * ```
   *
   * @param key The key for the new value.
   * @param value The value to store in the vault. Value can be of any type, as it will be parsed to JSON in the vault.
   *
   */


  setValue(key, value) {
    const jsonValue = JSON.stringify(value);
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, error => {
        this.handleError(resolve, reject, error, () => this.setValue(key, value));
      }, 'VaultPlugin', 'setValue', [this.config, key, jsonValue]);
    });
  }
  /**
   * Triggers when a config change occurs.
   *
   * @usage
   * ```typescript
   * vault.onConfigChanged((config) => {
   *  console.log("updated config: ", config);
   * });
   * ```
   * @param callback The callback function that will be called when the event triggers. Passes in the current vault config.
   *
   */


  onConfigChanged(callback) {
    cordova.exec(data => {
      callback(JSON.parse(data));
    }, error => console.error(error), 'VaultPlugin', 'onConfigChanged', []);
  }
  /**
   * Triggers when an error occurs in the application.
   * Errors that come back as rejected promises also trigger this event.
   *
   * @usage
   * ```typescript
   * vault.onError((err) => {
   *  console.log('ERROR from callback', JSON.stringify(err));
   * });
   * ```
   *
   * @param callback The callback function that will be called when the event triggers. Passes in the error object.
   *
   */


  onError(callback) {
    cordova.exec(() => {// Do Nothing
    }, callback, 'VaultPlugin', 'onError', []);
  }
  /**
   * Triggers when the vault enters a locked state.
   *
   * @usage
   * ```typescript
   * vault.onLock(() => { displayNotification("Vault locked."); })
   * ```
   *
   * @param callback The callback function that will be called when the event triggers.
   *
   */


  onLock(callback) {
    cordova.exec(callback, error => console.error(error), 'VaultPlugin', 'onLock', [this.config]);
  }

  onPasscodeRequested(callback) {
    this.passCodeRequestedCallback = callback;
  }
  /**
   * Triggers when the vault enters an unlocked state.
   *
   * @usage
   * ```typescript
   * vault.onUnlock(() => {
   *  console.log("vault is now unlocked");
   * });
   * ```
   * @param callback The callback function that will be called when the event triggers.
   *
   */


  onUnlock(callback) {
    cordova.exec(callback, error => console.error(error), 'VaultPlugin', 'onUnlock', [this.config]);
  }
  /**
   * Manually unlock the vault. Will trigger any authentication mechanism needed to access the vault (passcode, biometrics, etc..).
   *
   * @usage
   * ```typescript
   * const vault = new Vault(existingVaultConfig);
   * await vault.unlock();
   * ```
   */


  unlock() {
    return new Promise((resolve, reject) => {
      cordova.exec(() => {
        resolve();
      }, error => {
        this.handleError(resolve, reject, error, () => this.unlock());
      }, 'VaultPlugin', 'unlock', [this.config]);
    });
  }
  /**
   * Updates the configuration of the current vault.
   *
   *  @usage
   * ```typescript
   * async function changeVaultType(type: VaultType) {
   *  const vault = new Vault(this.existingVaultConfig);
   *  const newConfig = { ...this.existingVaultConfig, type };
   *  await vault.updateConfig(newConfig);
   *  this.existingVaultConfig = newConfig;
   * }
   * ```
   *
   * @param config The new config
   *
   */


  updateConfig(config) {
    return new Promise((resolve, reject) => {
      config = Object.assign(this.defaultConfig, config); // setting sane defaults

      if (config.deviceSecurityType === DeviceSecurityType.None && config.type === VaultType.DeviceSecurity) {
        config.deviceSecurityType = DeviceSecurityType.Both;
      }

      cordova.exec(() => {
        this.config = config;
        resolve();
      }, error => {
        this.handleError(resolve, reject, error, () => this.updateConfig(config));
      }, 'VaultPlugin', 'updateConfig', [config]);
    });
  }
  /**
   * Resolves true if a vault contains no data, and false if any data exists in the vault.
   * The vault does not need to be unlocked to check.
   *
   * __Note:__ Vaults created prior to version 5.2.0 will return false until the vault is unlocked for the first time after updating, even if the vault contains no data.
   * After which this method will return the expected value.
   *
   * @usage
   * ```typescript
   * const vault = new Vault(existingVaultConfig);
   * const vaultIsEmpty = await vault.isEmpty()
   * if (vaultIsEmpty) {
   *  // the vault is empty and contains no data...
   * }
   * ```
   */


  isEmpty() {
    return new Promise((resolve, reject) => {
      cordova.exec(data => {
        resolve(JSON.parse(data));
      }, error => {
        this.handleError(resolve, reject, error);
      }, 'VaultPlugin', 'isEmpty', [this.config]);
    });
  }
  /** @ignore */


  handleError(resolve, reject, error, retryFunc) {
    var _this = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (error.code === VaultErrorCodes.MissingPasscode && _this.passCodeRequestedCallback) {
        const checkRetry = /*#__PURE__*/function () {
          var _ref = (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
            if (retryFunc) {
              try {
                const data = yield retryFunc();
                resolve(data);
              } catch (e) {
                reject(e);
              }
            }
          });

          return function checkRetry() {
            return _ref.apply(this, arguments);
          };
        }();

        const res = _this.passCodeRequestedCallback(error.extra.isPasscodeSetRequest, code => {
          _this.setCustomPasscode(code);

          checkRetry();
        });

        if (res instanceof Promise) {
          yield res;
          yield checkRetry();
        }
      } else if (error.code === VaultErrorCodes.MissingBiometrics) {
        cordova.exec( /*#__PURE__*/(0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
          const data = yield retryFunc();
          resolve(data);
        }), e => reject(e), 'VaultPlugin', 'requestBiometricPrompt', [_this.config]);
      } else {
        reject(error);
      }
    })();
  }
  /** @ignore */


  requestBiometricPrompt() {
    return new Promise((resolve, reject) => {
      cordova.exec(data => {
        resolve(JSON.parse(data));
      }, error => {
        this.handleError(resolve, reject, error, () => this.requestBiometricPrompt());
      }, 'VaultPlugin', 'requestBiometricPrompt', [this.config]);
    });
  }
  /**
   * @ignore
   */


  resume() {
    const noop = () => {// Do Nothing
    };

    cordova.exec(noop, error => {
      this.handleError(noop, noop, error, () => this.resume());
    }, 'VaultPlugin', 'appResumed', [this.config]);
  }
  /**
   * @ignore
   */


  setup() {
    return new Promise((resolve, reject) => {
      document.addEventListener('resume', this.resume, false);
      cordova.exec(resolve, error => {
        this.handleError(resolve, reject, error);
      }, 'VaultPlugin', 'setup', [this.config]);
    });
  }
  /**
   * @ignore
   */


  getPersistedVaultConfig() {
    return new Promise((resolve, reject) => {
      cordova.exec(data => {
        if (!data) {
          resolve();
        } else {
          const vaultConfig = JSON.parse(data);
          this.config = Object.assign(this.config, vaultConfig);
          resolve();
        }
      }, error => {
        this.handleError(resolve, reject, error);
      }, 'VaultPlugin', 'getVaultConfig', [this.config]);
    });
  }

}

class Device {
  /** @ignore */
  constructor() {// Nothing
  }
  /**
   * Gets the types of biometrics the device supports.
   *
   * @usage
   * ```typescript
   * const hardware = await Device.getAvailableHardware();
   * hardware.forEach((biometricType) => console.log("Type: " + biometricType));
   * ```
   */


  static getAvailableHardware() {
    return new Promise((resolve, reject) => {
      if (!('cordova' in window)) {
        resolve([]);
        return;
      }

      cordova.exec(data => {
        resolve(data);
      }, error => {
        Device.handleError(resolve, reject, error);
      }, 'DevicePlugin', 'getAvailableHardware', []);
    });
  }
  /**
   * Check whether biometrics are locked out on the device.
   *
   * On Android, the locked out state will only known after an attempted biometric unlock.
   *
   * @usage
   * ```typescript
   * const isLockedOut = await Device.isLockedOutOfBiometrics();
   * if (isLockedOut) {
   *  // device is locked out ...
   * }
   * ```
   */


  static isLockedOutOfBiometrics() {
    return new Promise((resolve, reject) => {
      if (!('cordova' in window)) {
        resolve(false);
        return;
      }

      cordova.exec(data => {
        resolve(JSON.parse(data));
      }, error => {
        Device.handleError(resolve, reject, error);
      }, 'DevicePlugin', 'isLockedOutOfBiometrics', []);
    });
  }
  /**
   * Checks the device biometric strength level.
   *
   * On iOS this will always return 'strong'.
   *
   * @usage
   * ```typescript
   * const biometricStrength = await Device.getBiometricStrengthLevel();
   * ```
   */


  static getBiometricStrengthLevel() {
    return new Promise((resolve, reject) => {
      if (!('cordova' in window)) {
        resolve(BiometricSecurityStrength.Weak);
        return;
      }

      cordova.exec(data => {
        resolve(data);
      }, error => {
        Device.handleError(resolve, reject, error);
      }, 'DevicePlugin', 'getBiometricStrengthLevel', []);
    });
  }
  /**
   * Check whether or not the screen will be obscured in app switcher mode.
   *
   * @usage
   * ```typescript
   * const willHideScreen = await Device.isHideScreenOnBackgroundEnabled();
   * ```
   */


  static isHideScreenOnBackgroundEnabled() {
    return new Promise((resolve, reject) => {
      if (!('cordova' in window)) {
        resolve(false);
        return;
      }

      cordova.exec(data => {
        resolve(JSON.parse(data));
      }, error => {
        Device.handleError(resolve, reject, error);
      }, 'DevicePlugin', 'isHideScreenOnBackgroundEnabled', []);
    });
  }
  /**
   * Set whether or not the screen will be obscured in app switcher mode
   *
   * @usage
   * ```typescript
   * await Device.setHideScreenOnBackground(true);
   * ```
   */


  static setHideScreenOnBackground(enabled) {
    return new Promise((resolve, reject) => {
      if (!('cordova' in window)) {
        resolve();
        return;
      }

      cordova.exec(() => {
        resolve();
      }, error => {
        Device.handleError(resolve, reject, error);
      }, 'DevicePlugin', 'setHideScreenOnBackground', [enabled]);
    });
  }
  /**
   * Check whether the device OS-level passcode has been set.
   *
   * @usage
   * ```typescript
   * const hasSystemPasscode = await Device.isSystemPasscodeSet();
   * if (hasSystemPasscode) {
   *  // device has a system passcode
   * }
   * ```
   */


  static isSystemPasscodeSet() {
    return new Promise((resolve, reject) => {
      if (!('cordova' in window)) {
        resolve(false);
        return;
      }

      cordova.exec(data => {
        resolve(JSON.parse(data));
      }, error => {
        Device.handleError(resolve, reject, error);
      }, 'DevicePlugin', 'isSystemPasscodeSet', []);
    });
  }
  /**
   * Check whether or not biometrics is supported by the device and has been configured by the current user of the device.
   *
   * @usage
   * ```typescript
   * const biometricsEnabled = await Device.isBiometricsEnabled();
   * if (!biometricsEnabled) {
   *  // biometrics not enabled on this device...
   * }
   * ```
   */


  static isBiometricsEnabled() {
    return new Promise((resolve, reject) => {
      if (!('cordova' in window)) {
        resolve(false);
        return;
      }

      cordova.exec(data => {
        console.log('biometrics is enabled: ', data);
        resolve(JSON.parse(data));
      }, error => {
        Device.handleError(resolve, reject, error);
      }, 'DevicePlugin', 'isBiometricsEnabled', []);
    });
  }
  /**
   * Check whether or not biometrics is supported by the device.
   *
   * @usage
   * ```typescript
   * const biometricsSupported = await Device.isBiometricsSupported();
   * if (biometricsSupported) {
   *   // biometrics is supported on this device...
   * }
   * ```
   */


  static isBiometricsSupported() {
    return new Promise((resolve, reject) => {
      if (!('cordova' in window)) {
        resolve(false);
        return;
      }

      cordova.exec(data => {
        resolve(JSON.parse(data));
      }, error => {
        Device.handleError(resolve, reject, error);
      }, 'DevicePlugin', 'isBiometricsSupported', []);
    });
  }
  /**
   * Check if the device has a secure hardware enclave.
   *
   * @usage
   * ```typescript
   * const hasSecureHardware = await Device.hasSecureHardware();
   * if (!hasSecureHardware) {
   *    // this device doesn't have secure hardware
   * }
   * ```
   */


  static hasSecureHardware() {
    return new Promise((resolve, reject) => {
      if (!('cordova' in window)) {
        resolve(false);
        return;
      }

      cordova.exec(data => {
        resolve(JSON.parse(data));
      }, error => {
        Device.handleError(resolve, reject, error);
      }, 'DevicePlugin', 'hasSecureHardware', []);
    });
  }
  /**
   * @ignore
   */


  static handleError(resolve, reject, error, retryFunc) {
    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      reject(error);
    })();
  }

}
/**
 * @hidden
 *
 * @ignore
 */
// eslint-disable-next-line @typescript-eslint/ban-types


class IonicIdentityVaultUser {
  constructor(platform, options, descriptor) {
    this.platform = platform;
    this.options = options;
    this._readyCalled = false;
    this.descriptor = descriptor || {
      username: '_lastUser',
      vaultId: 'default'
    };
    this._readyPromise = this.initializeVault();
  }

  get token() {
    const session = this.session;
    return session === null || session === void 0 ? void 0 : session.token;
  }

  get username() {
    const session = this.session;
    return session === null || session === void 0 ? void 0 : session.username;
  }

  get config() {
    if (!this._config) {
      return undefined;
    }

    let authMode;
    const bioEnabled = this._config.isBiometricsEnabled;
    const passEnabled = this._config.isPasscodeEnabled;
    const secureStorageMode = this._config.isSecureStorageModeEnabled;

    if (secureStorageMode) {
      authMode = AuthMode.SecureStorage;
    } else if (bioEnabled && passEnabled) {
      authMode = AuthMode.BiometricAndPasscode;
    } else if (bioEnabled && !passEnabled) {
      authMode = AuthMode.BiometricOnly;
    } else if (!bioEnabled && passEnabled) {
      authMode = AuthMode.PasscodeOnly;
    } else if (!bioEnabled && !passEnabled) {
      authMode = AuthMode.InMemoryOnly;
    }

    return {
      authMode: authMode,
      isPasscodeSetupNeeded: this._config.isPasscodeSetupNeeded,
      lockAfter: this._config.lockAfter,
      hideScreenOnBackground: this._config.hideScreenOnBackground
    };
  } // overidable event handlers


  onVaultLocked(_event) {
    /* Do Nothing */
  }

  onSessionRestoreError(_err) {
    /* Do Nothing */
  }

  onUnlockOnReadyError(_err) {
    /* Do Nothing */
  }

  onVaultUnlocked(_config) {
    /* Do Nothing */
  }

  onVaultReady(_config) {
    /* Do Nothing */
  }

  onSetupError(_error) {
    /* Do Nothing */
  }

  onConfigChange(_config) {
    /* Do Nothing */
  }

  onSessionRestored(_session) {
    /* Do Nothing */
  }

  onPasscodeRequest(_isPasscodeSetRequest) {
    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return;
    })();
  }

  onReady(vault) {
    var _this2 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this2._readyCalled) {
        return;
      }

      _this2._readyCalled = true;
      _this2.vault = vault;
      const inUse = yield _this2.vault.isInUse();
      _this2._config = vault.config;
      const locked = yield _this2.vault.isLocked();
      let restoreSessionError;

      try {
        if (_this2.options.restoreSessionOnReady && inUse) {
          yield _this2._restoreSession();
        }
      } catch (e) {
        restoreSessionError = e;
      }

      let unlockOnReadyError;

      try {
        if (locked && _this2.options.unlockOnReady) {
          yield _this2._unlock();
        }
      } catch (e) {
        unlockOnReadyError = e;
      } // Note Swallow all errors in init like Vault is Locked Etc.


      try {
        if (!inUse) {
          yield _this2._trySetAuthMode(_this2.options.authMode);
        }
      } catch (e) {// Do Nothing
      }

      _this2._readyResolve();

      _this2.onVaultReady(_this2.config);

      if (restoreSessionError) {
        _this2.onSessionRestoreError(restoreSessionError);
      }

      if (unlockOnReadyError) {
        _this2.onUnlockOnReadyError(restoreSessionError);
      }
    })();
  }

  onLock(event) {
    this.session = undefined;
    this.onVaultLocked(event);
  }

  onUnlock(config) {
    var _this3 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this3.ready();
      _this3._config = config;

      _this3.onVaultUnlocked(_this3.config);
    })();
  }

  onError(error) {
    this._readyReject(error);

    this.onSetupError(error);
  }

  onConfig(config) {
    this._config = config;
    this.onConfigChange(this.config);
  }

  ready() {
    var _this4 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this4._readyPromise;
    })();
  }

  _unlock(authMode) {
    var _this5 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const locked = yield _this5.vault.isLocked();

      if (!locked) {
        return;
      }

      authMode = authMode !== undefined && authMode !== AuthMode.BiometricOrPasscode ? authMode : _this5.config.authMode;

      switch (authMode) {
        case AuthMode.BiometricOnly:
          return _this5.vault.unlock();

        case AuthMode.PasscodeOnly:
          return _this5.unlockWithPasscode();

        case AuthMode.BiometricAndPasscode:
          try {
            yield _this5.vault.unlock();
            return;
          } catch (e) {
            const handleableErrors = [VaultErrorCodes.AuthFailed, VaultErrorCodes.BiometricsNotEnabled, VaultErrorCodes.UserCanceledInteraction, VaultErrorCodes.InvalidatedCredential];

            if (handleableErrors.indexOf(e.code) > -1) {
              yield _this5.unlockWithPasscode(); // The user removed fingerprints/faceID and so the bio creds are gone
              // if they are using passcode auth we can resave the credential to autoreset
              // the mode to PasscodeOnly if bio is no longer available.

              if (e.code === VaultErrorCodes.InvalidatedCredential) {
                const session = yield _this5.restoreSession();
                yield _this5.saveSession(session);
              }

              return;
            }

            throw e;
          }

      }
    })();
  }

  unlock(authMode) {
    var _this6 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this6.ready();
      return _this6._unlock(authMode);
    })();
  }

  unlockWithPasscode() {
    var _this7 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const passcode = yield _this7.onPasscodeRequest(false);
      return _this7.vault.unlock(true, passcode);
    })();
  }

  _setPasscode() {
    var _this8 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const locked = yield _this8.vault.isLocked();

      if (locked) {
        throw {
          code: VaultErrorCodes.VaultLocked,
          message: 'Operation not allowed while vault locked.'
        };
      }

      const passcode = yield _this8.onPasscodeRequest(true);
      return _this8.vault.setPasscode(passcode);
    })();
  }

  setPasscode() {
    var _this9 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this9.ready();
      return _this9._setPasscode();
    })();
  }

  getSession() {
    var _this10 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this10.ready();

      if (_this10.options.unlockOnAccess) {
        yield _this10._unlock();
      }

      return _this10.session;
    })();
  }

  _restoreSession() {
    var _this11 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const inUse = yield _this11.vault.isInUse();

      if (!inUse) {
        return;
      }

      if (_this11.options.unlockOnAccess) {
        yield _this11._unlock();
      }

      _this11.session = yield _this11.vault.getValue('session');

      _this11.onSessionRestored(_this11.session);

      return _this11.session;
    })();
  }

  restoreSession() {
    var _this12 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this12.ready();
      return _this12._restoreSession();
    })();
  }

  saveSession(session) {
    var _this13 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this13.ready();

      if (_this13.config.isPasscodeSetupNeeded) {
        yield _this13.setPasscode();
      }

      try {
        yield _this13.vault.storeValue('session', session);
      } catch (e) {
        // Catch the case where Biometrics with Passcode Fallback
        // was enabled but the user disabled passcode or removed their
        // fingerprints/faceid and try to recover by setting to passcode only
        // mode.
        if (e.code === VaultErrorCodes.SecurityNotAvailable) {
          const authMode = yield _this13.getAuthMode();

          if (authMode === AuthMode.BiometricAndPasscode) {
            yield _this13.setAuthMode(AuthMode.PasscodeOnly);
            return _this13.saveSession(session);
          }
        }

        throw e;
      }

      _this13.session = session;
    })();
  }

  login(session, authMode) {
    var _this14 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this14.ready();
      yield _this14.logout();
      yield _this14._trySetAuthMode(authMode);
      return _this14.saveSession(session);
    })();
  }

  getVault() {
    var _this15 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this15.ready();
      return _this15.vault;
    })();
  }

  initializeVault() {
    var _this16 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this16.platform.ready();

      if (_this16.vault != null) {
        return Promise.resolve();
      }

      if (_this16.vIonicNativeAuth == null) {
        _this16.vIonicNativeAuth = _this16.getPlugin();
      }

      const readyPromise = new Promise((resolve, reject) => {
        _this16._readyResolve = resolve;
        _this16._readyReject = reject;
      });
      const {
        lockAfter,
        hideScreenOnBackground,
        shouldClearVaultAfterTooManyFailedAttempts,
        allowSystemPinFallback,
        androidPromptNegativeButtonText,
        androidPromptTitle,
        androidPromptSubtitle,
        androidPromptDescription,
        iosPromptText
      } = _this16.options;
      _this16.vault = _this16.vIonicNativeAuth.getVault(Object.assign(Object.assign({
        lockAfter,
        hideScreenOnBackground,
        shouldClearVaultAfterTooManyFailedAttempts,
        allowSystemPinFallback,
        androidPromptNegativeButtonText,
        androidPromptTitle,
        androidPromptSubtitle,
        androidPromptDescription,
        iosPromptText
      }, _this16.descriptor), {
        onLock: _this16.onLock.bind(_this16),
        onConfig: _this16.onConfig.bind(_this16),
        onError: _this16.onError.bind(_this16),
        onUnlock: _this16.onUnlock.bind(_this16),
        onReady: _this16.onReady.bind(_this16)
      }));
      return readyPromise;
    })();
  }

  getPlugin() {
    return IonicNativeAuth;
  }

  getBiometricType() {
    var _this17 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this17.ready();
      return _this17.vault.getBiometricType();
    })();
  }

  getAvailableHardware() {
    var _this18 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this18.ready();
      return _this18.vault.getAvailableHardware();
    })();
  }

  lockOut() {
    var _this19 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this19.ready();
      yield _this19.vault.lock();
      _this19.session = undefined;
    })();
  }

  logout() {
    var _this20 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this20.ready();
      yield _this20.vault.clear();
      _this20.session = undefined;
      _this20._config = yield _this20.vault.getConfig();
    })();
  }

  hasStoredSession() {
    var _this21 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this21.ready();
      return _this21.vault.isInUse();
    })();
  }

  setBiometricsEnabled(isBiometricsEnabled) {
    var _this22 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this22.ready();
      return _this22._setBiometricsEnabled(isBiometricsEnabled);
    })();
  }

  _setBiometricsEnabled(isBiometricsEnabled) {
    var _this23 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this23.vault.setBiometricsEnabled(isBiometricsEnabled);
    })();
  }

  setHideScreenOnBackground(enabled) {
    var _this24 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this24.ready();
      return _this24.vault.setHideScreenOnBackground(enabled);
    })();
  }

  setPasscodeEnabled(isPasscodeEnabled) {
    var _this25 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this25.ready();
      yield _this25._setPasscodeEnabled(isPasscodeEnabled);
    })();
  }

  _setPasscodeEnabled(isPasscodeEnabled) {
    var _this26 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this26.vault.setPasscodeEnabled(isPasscodeEnabled);
      _this26._config = yield _this26.vault.getConfig();

      if (_this26.config.isPasscodeSetupNeeded) {
        yield _this26._setPasscode();
      }
    })();
  }

  isBiometricsEnabled() {
    var _this27 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this27.ready();
      return _this27.vault.isBiometricsEnabled();
    })();
  }

  isBiometricsAvailable() {
    var _this28 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this28.ready();
      return _this28.vault.isBiometricsAvailable();
    })();
  }

  isBiometricsSupported() {
    var _this29 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this29.ready();
      return _this29.vault.isBiometricsSupported();
    })();
  }

  isSecureStorageModeEnabled() {
    var _this30 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this30.ready();
      return _this30.vault.isSecureStorageModeEnabled();
    })();
  }

  isPasscodeEnabled() {
    var _this31 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this31.ready();
      return _this31.vault.isPasscodeEnabled();
    })();
  }

  _setAuthMode(authMode) {
    var _this32 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      authMode = authMode !== undefined ? authMode : _this32.config.authMode;

      if (authMode === _this32.config.authMode) {
        return;
      }

      switch (authMode) {
        case AuthMode.BiometricOnly:
          yield _this32._setBiometricsEnabled(true);
          yield _this32._setPasscodeEnabled(false);
          break;

        case AuthMode.PasscodeOnly:
          yield _this32._setPasscodeEnabled(true);
          yield _this32._setBiometricsEnabled(false);
          break;

        case AuthMode.BiometricAndPasscode:
          yield _this32._setPasscodeEnabled(true);
          yield _this32._setBiometricsEnabled(true);
          break;

        case AuthMode.BiometricOrPasscode:
          try {
            yield _this32._setBiometricsEnabled(true);
            yield _this32._setPasscodeEnabled(false);
          } catch (error) {
            yield _this32._setPasscodeEnabled(true);
          }

          break;

        case AuthMode.InMemoryOnly:
          yield _this32._setPasscodeEnabled(false);
          yield _this32._setBiometricsEnabled(false);
          yield _this32.vault.setSecureStorageModeEnabled(false);
          break;

        case AuthMode.SecureStorage:
          // Note: Setting this mode automatically disables the other modes in native code.
          yield _this32.vault.setSecureStorageModeEnabled(true);
          break;

        default:
          throw {
            code: VaultErrorCodes.InvalidAuthMode,
            message: 'Invalid AuthMode'
          };
      }
    })();
  }

  _trySetAuthMode(authMode) {
    var _this33 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        yield _this33._setAuthMode(authMode);
      } catch (error) {
        if (error.code !== VaultErrorCodes.BiometricsNotEnabled && error.code !== VaultErrorCodes.SecurityNotAvailable) {
          throw error;
        }
      }
    })();
  }

  setAuthMode(authMode) {
    var _this34 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this34.ready();
      return _this34._setAuthMode(authMode);
    })();
  }

  getAuthMode() {
    var _this35 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this35.ready();
      _this35._config = yield _this35.vault.getConfig();
      return _this35.config.authMode;
    })();
  }

}

class MigratorVault extends IonicIdentityVaultUser {
  constructor(options, onPasscodeRequest, descriptor) {
    super({
      ready: () => Promise.resolve(true)
    }, options, descriptor);

    if (onPasscodeRequest) {
      this.onPasscodeRequest = onPasscodeRequest;
    }
  }

  static getInstance(options, onPasscodeRequest, descriptor) {
    if (!MigratorVault.instance) {
      MigratorVault.instance = new MigratorVault(options, onPasscodeRequest, descriptor);
    }

    return MigratorVault.instance;
  }

}

MigratorVault.instance = undefined;

class VaultMigrator {
  /**
   *
   * @usage
   * ```typescript
   * const legacyVaultConfig = {
   *  unlockOnAccess: true,
   *  hideScreenOnBackground: true,
   *  lockAfter: 5000,
   *  // and more ....
   * }
   * const migrator = new VaultMigrator(legacyVaultConfig, customPasscodePrompt);
   * ```
   * @param options The legacy vault configuration options
   * @param onPasscodeRequest An optional callback function that will be called when the vault attempts to request a passcode. The function returns a promise with a boolean that indicates if the passcode is being setup for the first time for the vault or not.
   * @param descriptor An optional interface that describes the legacy vault.
   */
  constructor(options, onPasscodeRequest, descriptor) {
    this.migratorSession = MigratorVault.getInstance(options, onPasscodeRequest, descriptor);
  }
  /**
   * Exports the data of the legacy vault in its entirety.
   *
   * @usage
   * ```typescript
   * const data = await migrator.exportVault();
   * console.log("@@VAULT DATA: ", JSON.stringify(data));
   * ```
   * @returns
   */


  exportVault() {
    var _this36 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!(yield _this36.migratorSession.hasStoredSession())) {
        throw Error('no data in legacy vault');
      }

      yield _this36.migratorSession.unlock();
      const vault = yield _this36.migratorSession.getVault();
      const keys = yield vault.getKeys();
      const vaultData = {};

      for (const key of keys) {
        vaultData[key] = yield vault.getValue(key);
      }

      return vaultData;
    })();
  }
  /**
   * Clears out the legacy vault and removes it from the system.  Be sure to run {@link VaultMigrator.exportVault} before calling this method.
   *
   * @usage
   * ```typescript
   * const data = await migrator.exportVault();
   * await importVault(data);
   * await migrator.clear();
   * ```
   */


  clear() {
    var _this37 = this;

    return (0,_Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const vault = yield _this37.migratorSession.getVault();
      return vault.clear();
    })();
  }

}



/***/ }),

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 12056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 18847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vault.service */ 83899);





let HomePage = class HomePage {
    constructor(vaultService) {
        this.vaultService = vaultService;
        this.biometric = false;
        this.state = vaultService.state;
    }
    setSession() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.biometric) {
                yield this.vaultService.setSession(this.state.username, this.state.password);
            }
            console.log('setSession username:' + this.state.username, 'setSession password:' + this.state.username);
        });
    }
    restoreSession() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.vaultService.restoreSession();
            this.state.username = res.username;
            this.state.password = res.password;
            console.log('restoreSession username:' + this.state.username, 'restoreSession password:' + this.state.username);
        });
    }
    refresh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.restoreSession();
        });
    }
    lockVault() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.vaultService.lockVault();
        });
    }
    unlockVault() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.vaultService.unlockVault();
        });
    }
    setLockType() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.vaultService.setLockType();
        });
    }
    setPrivacyScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.vaultService.setPrivacyScreen(this.state.privacyScreen);
        });
    }
    clearVault() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.vaultService.clearVault();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _vault_service__WEBPACK_IMPORTED_MODULE_2__.VaultService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-home",
        template: _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 83899:
/*!**********************************!*\
  !*** ./src/app/vault.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultService": function() { return /* binding */ VaultService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 41899);
/* harmony import */ var _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-enterprise/identity-vault */ 71525);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 81864);





const config = {
    key: "io.ionic.getstartedivangular",
    type: _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.VaultType.DeviceSecurity,
    deviceSecurityType: _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.DeviceSecurityType.Both,
    lockAfterBackgrounded: 2000,
    shouldClearVaultAfterTooManyFailedAttempts: true,
    customPasscodeInvalidUnlockAttempts: 2,
    unlockVaultOnLoad: false,
    iosBiometricsLocalizedFallbackTitle: "Use Password"
};
const usernameKey = "username";
const PasswordKey = "password";
let VaultService = class VaultService {
    constructor(ngZone, platform) {
        this.ngZone = ngZone;
        this.platform = platform;
        this.state = {
            username: "",
            password: "",
            isLocked: false,
            privacyScreen: true,
            lockType: "Both",
            canUseBiometrics: false,
            canUseBoth: false,
            canUsePasscode: false,
            vaultExists: false,
        };
        this.vault = new _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Vault(config);
        this.vault.onLock(() => {
            this.ngZone.run(() => {
                this.state.isLocked = true;
                this.state.username = undefined;
                this.state.password = undefined;
            });
        });
        this.vault.onUnlock(() => {
            this.ngZone.run(() => {
                this.state.isLocked = false;
            });
        });
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.state.isLocked = yield this.vault.isLocked();
            this.state.privacyScreen =
                _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform() === "web"
                    ? false
                    : yield _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.isHideScreenOnBackgroundEnabled();
            this.state.canUseBiometrics =
                _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform() === "web"
                    ? false
                    : yield _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.isBiometricsEnabled();
            this.state.canUseBoth =
                _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform() === "web"
                    ? false
                    : (yield _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.isBiometricsEnabled()) && (yield _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.isSystemPasscodeSet());
            this.state.canUsePasscode =
                _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform() === "web"
                    ? false
                    : yield _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.isSystemPasscodeSet();
            this.state.vaultExists = yield this.vault.doesVaultExist();
        });
    }
    setSession(username, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.state.username = username;
            this.state.password = password;
            yield this.vault.setValue(usernameKey, username);
            yield this.vault.setValue(PasswordKey, password);
            this.state.lockType = "Both";
            yield this.setLockType();
            yield this.vault.lock();
            this.state.vaultExists = yield this.vault.doesVaultExist();
        });
    }
    restoreSession() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const username = yield this.vault.getValue(usernameKey);
            const password = yield this.vault.getValue(usernameKey);
            this.state.vaultExists = yield this.vault.doesVaultExist();
            return {
                username,
                password
            };
        });
    }
    lockVault() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.vault.lock();
        });
    }
    unlockVault() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.vault.unlock();
        });
    }
    setPrivacyScreen(enabled) {
        _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.setHideScreenOnBackground(enabled);
        this.state.privacyScreen = enabled;
    }
    setLockType() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let type;
            let deviceSecurityType;
            switch (this.state.lockType) {
                case "Biometrics":
                    type = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.VaultType.DeviceSecurity;
                    deviceSecurityType = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.DeviceSecurityType.Biometrics;
                    break;
                case "SystemPasscode":
                    type = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.VaultType.DeviceSecurity;
                    deviceSecurityType = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.DeviceSecurityType.SystemPasscode;
                    break;
                default:
                    type = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.VaultType.DeviceSecurity;
                    deviceSecurityType = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.DeviceSecurityType.Both;
                    break;
            }
            yield this.vault.updateConfig(Object.assign(Object.assign({}, this.vault.config), { type, deviceSecurityType }));
        });
    }
    clearVault() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.vault.clear();
            this.state.lockType = "NoLocking";
            this.state.username = undefined;
            this.state.password = undefined;
            this.state.vaultExists = yield this.vault.isEmpty();
        });
    }
};
VaultService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
VaultService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: "root" })
], VaultService);



/***/ }),

/***/ 12056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Enter the Username</ion-label>\n      <ion-input [(ngModel)]=\"state.username\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Enter the Password</ion-label>\n      <ion-input [(ngModel)]=\"state.password\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <div style=\"flex: auto;\">\n        <ion-button expand=\"block\" (click)=\"setSession()\">Login</ion-button>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div style=\"flex: auto;\">\n        <ion-button expand=\"block\" (click)=\"refresh()\">Re-store</ion-button>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div style=\"flex: auto;\">\n        <ion-toggle [(ngModel)]=\"biometric\">Touch/Face ID</ion-toggle>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Use Privacy Screen</ion-label>\n      <ion-checkbox [(ngModel)]=\"state.privacyScreen\" (ionChange)=\"setPrivacyScreen()\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <div style=\"flex: auto;\">\n        <ion-button expand=\"block\" (click)=\"clearVault()\">Clear Vault</ion-button>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <div>username : {{ state.username }}</div>\n        <div>password : {{ state.password }}</div>\n        <div>Vault is locked: {{ state.isLocked }}</div>\n        <div>Vault exists: {{ state.vaultExists }}</div>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 18847:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ (function(module) {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts-es2015.js.map