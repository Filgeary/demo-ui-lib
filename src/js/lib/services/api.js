import Lib from '../core'

/**
 * Create GET method
 * @param {string} endpoint Endpoint URL
 * @returns json via Promise
 */
Lib.prototype.get = async function (endpoint) {
  const result = await fetch(endpoint)

  if (!result.ok) {
    throw new Error(`Failed to fetch ${endpoint}, status: ${result.status}`)
  }

  return await result.json()
}

/**
 * Create POST method
 * @param {string} endpoint Endpoint URL
 * @param {Object} data Data object
 * @returns json via Promise
 */
Lib.prototype.post = async function (endpoint, data) {
  const result = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  if (!result.ok) {
    throw new Error(`Failed to fetch ${endpoint}, status: ${result.status}`)
  }

  return await result.json()
}
