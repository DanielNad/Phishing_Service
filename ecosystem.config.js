module.exports = {
  apps : [{
    name   : "Phishing_Service_Logs",
    script : "./server.js",
    error_file : "./logs/error_file.txt",
    out_file : "./logs/out_file.txt",
    time: true
  }]
}
