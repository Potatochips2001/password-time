function getKeysPerSecond(freq, core) {
  const freqH = freq * 1000000000;
  const kps = freqH * core;
  return kps;
}

function getTime(passwd) {
  const _freq = document.querySelector('#cpu-frequency').value, _core = document.querySelector('#cpu-core').value;
  const passwordCombinations = 256**passwd.length;
  const timeToCrackPassword = passwordCombinations / getKeysPerSecond(_freq, _core);
  return timeToCrackPassword;
}

function convertUnits(time) {
  if (time < 1) {return `${time / 1000} milliseconds`}
  if (time < 60 && time > 1) {return `${time / 60} seconds`}
  if (time >= 60 && time < 3600) {return `${time / 60} minutes`}
  if (time >= 3600 && time < 86400) {return `${time / 3600} hours`}
  if (time >= 86400 && time < 2.628e+6) {return `${time / 86400} days`}
  if (time >= 2.628e+6 && time < 3.154e+7) {return `${time / 2.628e+6} months`}
  if (time >= 3.154e+7) {return `${time / 3.154e+7} years`}
}



document.addEventListener('input', () => {
  const password = document.querySelector('#password').value;
  if (document.readyState == 'complete') {
    const _time = getTime(String(password)), convertedTime = convertUnits(Number(_time));
    document.querySelector('#result').textContent = `Time to crack password: ${convertedTime}`;
  }
});
