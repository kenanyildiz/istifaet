import cookie from 'cookie'
import Cookies from 'js-cookie'
import middleware from '../middleware'

middleware['i18n'] = async ({ app, req, res, route, store, redirect, isHMR }) => {
  if (isHMR) {
    return
  }

  // Options
  const lazy = false
  const vuex = {"moduleName":"i18n","mutations":{"setLocale":"I18N_SET_LOCALE","setMessages":"I18N_SET_MESSAGES"}}
  const differentDomains = false
  const isSpa = false

  // Helpers
  const LOCALE_CODE_KEY = 'code'
  const getLocaleCodes = (locales = []) => {
  if (locales.length) {
    // If first item is a sting, assume locales is a list of codes already
    if (typeof locales[0] === 'string') {
      return locales
    }
    // Attempt to get codes from a list of objects
    if (typeof locales[0][LOCALE_CODE_KEY] === 'string') {
      return locales.map(locale => locale[LOCALE_CODE_KEY])
    }
  }
  return []
}
  const getLocaleFromRoute = (route = {}, routesNameSeparator = '', locales = []) => {
  const codes = getLocaleCodes(locales)
  const localesPattern = `(${codes.join('|')})`
  // Extract from route name
  if (route.name) {
    const regexp = new RegExp(`${routesNameSeparator}${localesPattern}$`, 'i')
    const matches = route.name.match(regexp)
    if (matches && matches.length > 1) {
      return matches[1]
    }
  } else if (route.path) {
    // Extract from path
    const regexp = new RegExp(`^/${localesPattern}/`, 'i')
    const matches = route.path.match(regexp)
    if (matches && matches.length > 1) {
      return matches[1]
    }
  }
  return null
}
  const routesNameSeparator = '___'
  const locales = getLocaleCodes(["tr","en"])
  const syncVuex = (locale = null, messages = null) => {
  if (vuex && store) {
    if (locale !== null && vuex.mutations.setLocale) {
      store.dispatch(vuex.moduleName + '/setLocale', locale)
    }
    if (messages !== null && vuex.mutations.setMessages) {
      store.dispatch(vuex.moduleName + '/setMessages', messages)
    }
  }
}

  let locale = app.i18n.locale || app.i18n.defaultLocale || null

  // Handle root path redirect
  const rootRedirect = ''
  if (route.path === '/' && rootRedirect) {
    redirect('/' + rootRedirect)
    return
  }

  // Handle browser language detection
  const detectBrowserLanguage = {"useCookie":true,"cookieKey":"i18n_redirected"}

  if (detectBrowserLanguage) {
    // Get browser language either from navigator if running in mode SPA, or from the headers
    let browserLocale = null
    if (isSpa && typeof navigator !== 'undefined' && navigator.language) {
      browserLocale = navigator.language.toLocaleLowerCase().substring(0, 2)
    } else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      browserLocale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase().substring(0, 2)
    }

    if (browserLocale) {
      const { useCookie, cookieKey } = detectBrowserLanguage

      const redirectToBrowserLocale = () => {
        const routeName = route && route.name ? app.getRouteBaseName(route) : 'index'
        if (browserLocale && browserLocale !== app.i18n.locale && locales.indexOf(browserLocale) !== -1) {
          redirect(app.localePath(Object.assign({}, route , {
            name: routeName
          }), browserLocale))
        }
      }

      const getCookie = () => {
        if (isSpa) {
          return Cookies.get(cookieKey);
        } else if (req && typeof req.headers.cookie !== 'undefined') {
          const cookies = req.headers && req.headers.cookie ? cookie.parse(req.headers.cookie) : {}
          return cookies[cookieKey]
        }
        return null
      }

      const setCookie = () => {
        const date = new Date()
        if (isSpa) {
          Cookies.set(cookieKey, 1, {
            expires: new Date(date.setDate(date.getDate() + 365))
          })
        } else if (res) {
          const redirectCookie = cookie.serialize(cookieKey, 1, {
            expires: new Date(date.setDate(date.getDate() + 365))
          })
          res.setHeader('Set-Cookie', redirectCookie)
        }
      }

      // Handle cookie option to prevent multiple redirections
      if (useCookie) {
        if (!getCookie()) {
          // Set cookie
          setCookie()
          redirectToBrowserLocale()
        }
      } else {
        redirectToBrowserLocale()
      }
    }
  }

  // Abort if different domains option enabled
  if (app.i18n.differentDomains) {
    return
  }

  const routeLocale = getLocaleFromRoute(route, routesNameSeparator, locales)
  locale = routeLocale ? routeLocale : locale

  // Abort if locale did not change
  if (locale === app.i18n.locale) {
    return
  }

  const oldLocale = app.i18n.locale
  app.i18n.beforeLanguageSwitch(oldLocale, locale)
  // Lazy-loading enabled
  if (lazy) {
    const { loadLanguageAsync } = require('./utils')
    const messages = await loadLanguageAsync(app.i18n, locale)
    app.i18n.locale = locale
    app.i18n.onLanguageSwitched(oldLocale, locale)
    syncVuex(locale, messages)
  } else {
    // Lazy-loading disabled
    app.i18n.locale = locale
    app.i18n.onLanguageSwitched(oldLocale, locale)
    syncVuex(locale, app.i18n.getLocaleMessage(locale))
  }
}
