const normalize = (string) => {
  return string.toLowerCase().replace(/[^a-z0-9]+/g, '')
} 

module.exports = normalize