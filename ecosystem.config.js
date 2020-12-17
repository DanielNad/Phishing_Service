module.exports = {
  apps : [{
    name   : "logs",
    script : "./server.js",
    error_file : "./logs/error_file.txt",
    out_file : "./logs/out_file.txt",
    time: true
  }]
}
