// https://www.sitepoint.com/get-url-parameters-with-javascript/
export const getUrlParam = () => {
  // Get url
  var url = window.location.href

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1)

  // we'll store the parameters here
  var obj = {}

  // if query string exists
  if (queryString) {
    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0]

    // split our query string into its component parts
    var arr = queryString.split('&')

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=')

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined
      var paramName = a[0].replace(/\[\d*\]/, function (v) {
        paramNum = v.slice(1, -1)
        return ''
      })

      // set parameter value (use 'true' if empty)
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1]

      // (optional) keep case consistent
      // paramName = paramName.toLowerCase();
      // paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]]
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue)
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue
      }
    }
  }

  return obj
}

// Check if field matches requirement
// Use for front end error checking
export const checkField = (field, type) => {
  switch (type) {
    case 'email':
      // Reture true if valid email
      return validateEmail(field)
    case 'password':
      // Return true if password is greater than or 7 chars
      return field.length >= 7
    case 'notNull':
      // Return true if field is not null
      return !!field
    default:
      // Return true if fields match and are not blank
      if (field !== '' && type !== '') {
        return field === type
      } else { return null }
  }
}

// Using RegEx, return true if string matches valid email type
// https://stackoverflow.com/questions/46155/how-can-you-validate-an-email-address-in-javascript
function validateEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.toLowerCase())
}

export const modifyResults = (arr, type, val) => {
  console.log(arr, type, val)

  switch (type) {
    case 'state':
      return arr.filter(arr => arr.State === val)
    case 'site':
      console.log('site')
      if (val === '1') return arr.filter(arr => arr.Website)
      if (val === '2') return arr.filter(arr => !arr.Website)
      if (val === '0') return arr
      break
    case 'rating':
      return arr.filter(arr => arr.Rating >= val)
    case 'popular':
      return arr.sort(compare)
  }
  return arr
}

function compare (a, b) {
  let comparison = 0
  if (a > b) {
    comparison = 1
  } else if (a < b) {
    comparison = -1
  }
  return comparison
}
