module.exports = function (coefficients, t) {
  let slope = coefficients[1]
  let intercept = coefficients[0]
  for (let i = 2; i < coefficients.length; i++) {
    slope += i * coefficients[i] * Math.pow(t, i - 1)
    intercept -= (i - 1) * coefficients[i] * Math.pow(t, i)
  }
  return { slope: slope, intercept: intercept }
}