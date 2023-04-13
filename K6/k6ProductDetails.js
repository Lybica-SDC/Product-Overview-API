import { sleep, check } from 'k6'
import http from 'k6/http'

export const options = {
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'constant-vus',
      gracefulStop: '30s',
      duration: '1m',
      vus: 100,
      exec: 'scenario_1',
    }
  },
}

export function scenario_1() {
  let response

  // Get all products
  response = http.get('http://localhost:3005/products')
  check(response, { 'status equals 200': response => response.status.toString() === '200' })

  // Automatically added sleep
  sleep(1)
}

// export function scenario_2() {
//   http.get('https://test.k6.io')
//   sleep(1)
// }

