const wait = require('./wait');
const process = require('process');
const cp = require('child_process');
const path = require('path');

test('throws empty repository', () => {
  expect(wait('foo')).rejects.toThrow('milliseconds not a number');
});

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_REPOSITORY'] = '/ceterumnet/dummy-repo';
  const ip = path.join(__dirname, 'index.js');
  console.log(cp.execSync(`node ${ip}`, {env: process.env}).toString());
});
