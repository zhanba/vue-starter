'use strict'

import Vue from 'vue'
import axios from 'axios'

import { serveUrl } from './config'

Vue.prototype.axios = axios

export const baseConfig = {
  url: '',
  baseURL: serveUrl,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  transformRequest: [
    function(data) {
      return JSON.stringify(data.params || {})
    }
  ],
  timeout: 5000,
  responseType: 'json'
}

export default {
  query: params => axios.post('agency.do', params, baseConfig)
}
