import http from 'k6/http';
import { sleep, check } from 'k6';
import { pickRand, makePidList } from './util.js';

const productIDs = makePidList();
const max = productIDs.length;

export const options = {
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'constant-vus',
      gracefulStop: '30s',
      duration: '1m',
      vus: 20,
      exec: 'scenario_1',
    }
  },
};

export function scenario_1() {
  let response;
  const productID = productIDs[pickRand(max)];
  response = http.get(`http://localhost:3005/products/${productID}`)
  check(response, { 'status equals 200': response => response.status.toString() === '200' })
  sleep(1);
};