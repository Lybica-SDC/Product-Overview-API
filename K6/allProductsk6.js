import http from 'k6/http';
import { sleep, check } from 'k6';
import { pickRand, makePidList } from './util.js';

const productIDs = makePidList();
const max = productIDs.length;

export const options = {

  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<2000'], // 95% of requests should be below 2000ms
  },
  scenarios: {
    scenario_1: {
      executor: 'constant-arrival-rate',
      preAllocatedVUs: 20,
      duration: '30s',
      rate: 1000,
      timeUnit: '1s',
      maxVUs: 100,
      exec: 'scenario_1',
    },
  },
};

export function scenario_1() {
  let response;
  const productID = productIDs[pickRand(max)];
  response = http.get(`http://localhost:3005/products/${productID}`)
  check(response, { 'status equals 200': response => response.status.toString() === '200' })
  sleep(0);
};