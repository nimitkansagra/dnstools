const express = require("express");
const axios = require('axios');
const dns = require("dns");
const QRCode = require('qrcode')
const crypto = require('crypto');
const passwordGenerator = require('generate-password');
const { exec } = require('child_process');
const getSslCertificate = require("get-ssl-certificate");
const { error } = require("console");

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const jsdom = require("jsdom");

const app = express();
app.use(express.json());

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));


// https://expressjs.com/en/starter/basic-routing.html
/*app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});*/

app.get("/", (req, res) => {
  res.status(404).send("Page not found!");
});

app.use((req, res, next) => {
  let url = req.params.url;
  /// TODO: URL validation

  /// INVALID URL res.status(4XX).json({});

  /// URL IS VALID                                                                                                               
  next();
})


/// A RECORDS

// Holtsville NY, United States - Opendns - 208.67.222.220
app.get("/A/1/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["208.67.222.220"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});


// Canoga Park, CA, United States - Sprint - 204.117.214.10
app.get("/A/2/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["204.117.214.10"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Mountain View CA, United States - Google - 8.8.8.8
app.get("/A/3/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["8.8.8.8"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Dothan, United States - Comodo Secure DNS - 8.26.56.26
app.get("/A/4/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["8.26.56.26"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Brooklyn, United States - Verizon Fios Business -	98.113.146.9
app.get("/A/5/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["98.113.146.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Brossard, Canada - Fibernetics Corporation - 208.79.56.204
app.get("/A/6/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["208.79.56.204"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Yekaterinburg, Russian Federation -Skydns - 195.46.39.39
app.get("/A/7/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["195.46.39.39"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Johannesburg, South Africa - Hetzner (Pty) Ltd - 197.189.234.82
app.get("/A/8/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["197.189.234.82"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Roosendaal, Netherlands - Plinq Bv - 185.107.80.84
app.get("/A/9/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["185.107.80.84"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Paris, France - Online S.A.S. - 163.172.107.158
app.get("/A/10/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["163.172.107.158"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Madrid, Spain - Telefonica de Espana - 84.236.142.130
app.get("/A/11/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["84.236.142.130"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Bern, Switzerland - Swisscom AG - 217.193.239.170
app.get("/A/12/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["217.193.239.170"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Innsbruck, Austria - nemox.net - 83.137.41.9
app.get("/A/13/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["83.137.41.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// London, United Kingdom - Verizon UK Limited - 158.43.128.1
app.get("/A/14/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["158.43.128.1"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Midtjylland, Denmark - NM NET APS - 212.98.75.35
app.get("/A/15/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["212.98.75.35"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Frankfurt am Main, Germany - DNS.WATCH - 84.200.70.40
app.get("/A/16/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["84.200.70.40"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Monterrey, Mexico - Marcatel Com - 200.56.224.11
app.get("/A/17/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["200.56.224.11"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Sao Paulo, Brazil - Universo Online S.A - 200.221.11.101
app.get("/A/18/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["200.221.11.101"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Shah Alam, Malaysia - TT Dotcom Sdn Bhd - 211.25.206.147
app.get("/A/19/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["211.25.206.147"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Research, Australia - Cloudflare Inc - 1.1.1.1
app.get("/A/20/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["1.1.1.1"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Melbourne, Australia - Pacific Internet - 61.8.0.113
app.get("/A/21/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["61.8.0.113"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Auckland, New Zealand - Global-Gateway Internet - 122.56.105.82
app.get("/A/22/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["122.56.105.82"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Singapore - Ntt Singapore Pte - 202.136.162.11
app.get("/A/23/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["202.136.162.11"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Seoul, South Korea - LG Dacom Corporation - 164.124.101.2
app.get("/A/24/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["164.124.101.2"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Shenzhen, China - Shenzhen Sunrise Technology Co. - 202.46.32.187
app.get("/A/25/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["202.46.32.187"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Antalya, Turkey - Teknet Yazlim -	31.7.37.37
app.get("/A/26/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["31.7.37.37"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Udaipur, India - Net4U Technology - 103.193.252.2
app.get("/A/27/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["103.193.252.2"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Lahore, Pakistan -Wateen Telecom - 58.27.149.60
app.get("/A/28/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["58.27.149.60"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Lisbon, Portugal - Municipio de Sabugal - 89.26.249.19
app.get("/A/29/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["89.26.249.19"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Ireland - Daniel Cid - 185.228.168.9
app.get("/A/30/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["185.228.168.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Dhaka, Bangladesh - Video Elephant - 137.59.155.14
app.get("/A/31/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["137.59.155.14"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "A", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});



/////////////////////////////////////////////////////////////////////////


/// NS RECORDS

// Holtsville NY, United States - Opendns - 208.67.222.220
app.get("/NS/1/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["208.67.222.220"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});


// Canoga Park, CA, United States - Sprint - 204.117.214.10
app.get("/NS/2/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["204.117.214.10"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Mountain View CA, United States - Google - 8.8.8.8
app.get("/NS/3/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["8.8.8.8"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Dothan, United States - Comodo Secure DNS - 8.26.56.26
app.get("/NS/4/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["8.26.56.26"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Brooklyn, United States - Verizon Fios Business -	98.113.146.9
app.get("/NS/5/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["98.113.146.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Brossard, Canada - Fibernetics Corporation - 208.79.56.204
app.get("/NS/6/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["208.79.56.204"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Yekaterinburg, Russian Federation -Skydns - 195.46.39.39
app.get("/NS/7/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["195.46.39.39"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Johannesburg, South Africa - Hetzner (Pty) Ltd - 197.189.234.82
app.get("/NS/8/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["197.189.234.82"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Roosendaal, Netherlands - Plinq Bv - 185.107.80.84
app.get("/NS/9/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["185.107.80.84"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Paris, France - Online S.A.S. - 163.172.107.158
app.get("/NS/10/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["163.172.107.158"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Madrid, Spain - Telefonica de Espana - 84.236.142.130
app.get("/NS/11/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["84.236.142.130"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Bern, Switzerland - Swisscom AG - 217.193.239.170
app.get("/NS/12/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["217.193.239.170"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Innsbruck, Austria - nemox.net - 83.137.41.9
app.get("/NS/13/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["83.137.41.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// London, United Kingdom - Verizon UK Limited - 158.43.128.1
app.get("/NS/14/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["158.43.128.1"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Midtjylland, Denmark - NM NET APS - 212.98.75.35 
app.get("/NS/15/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["212.98.75.35"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Frankfurt am Main, Germany - DNS.WATCH - 84.200.70.40
app.get("/NS/16/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["84.200.70.40"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Monterrey, Mexico - Marcatel Com - 200.56.224.11
app.get("/NS/17/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["200.56.224.11"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Sao Paulo, Brazil - Universo Online S.A - 200.221.11.101
app.get("/NS/18/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["200.221.11.101"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Shah Alam, Malaysia - TT Dotcom Sdn Bhd - 211.25.206.147
app.get("/NS/19/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["211.25.206.147"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Research, Australia - Cloudflare Inc - 1.1.1.1
app.get("/NS/20/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["1.1.1.1"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Melbourne, Australia - Pacific Internet - 61.8.0.113
app.get("/NS/21/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["61.8.0.113"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Auckland, New Zealand - Global-Gateway Internet - 122.56.105.82
app.get("/NS/22/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["122.56.105.82"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Singapore - Ntt Singapore Pte - 202.136.162.11
app.get("/NS/23/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["202.136.162.11"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Seoul, South Korea - LG Dacom Corporation - 164.124.101.2
app.get("/NS/24/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["164.124.101.2"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Shenzhen, China - Shenzhen Sunrise Technology Co. - 202.46.32.187
app.get("/NS/25/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["202.46.32.187"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Antalya, Turkey - Teknet Yazlim -	31.7.37.37
app.get("/NS/26/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["31.7.37.37"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Udaipur, India - Net4U Technology - 103.193.252.2
app.get("/NS/27/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["103.193.252.2"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Lahore, Pakistan -Wateen Telecom - 58.27.149.60
app.get("/NS/28/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["58.27.149.60"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Lisbon, Portugal - Municipio de Sabugal - 89.26.249.19
app.get("/NS/29/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["89.26.249.19"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Ireland - Daniel Cid - 185.228.168.9
app.get("/NS/30/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["185.228.168.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Dhaka, Bangladesh - Video Elephant - 137.59.155.14
app.get("/NS/31/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["137.59.155.14"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "NS", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

///////////////////////////////////////////////////////////////////////////////

/// MX RECORDS

// Holtsville NY, United States - Opendns - 208.67.222.220
app.get("/MX/1/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["208.67.222.220"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});


// Canoga Park, CA, United States - Sprint - 204.117.214.10
app.get("/MX/2/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["204.117.214.10"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Mountain View CA, United States - Google - 8.8.8.8
app.get("/MX/3/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["8.8.8.8"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Dothan, United States - Comodo Secure DNS - 8.26.56.26
app.get("/MX/4/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["8.26.56.26"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Brooklyn, United States - Verizon Fios Business -	98.113.146.9
app.get("/MX/5/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["98.113.146.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Brossard, Canada - Fibernetics Corporation - 208.79.56.204
app.get("/MX/6/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["208.79.56.204"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Yekaterinburg, Russian Federation -Skydns - 195.46.39.39
app.get("/MX/7/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["195.46.39.39"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Johannesburg, South Africa - Hetzner (Pty) Ltd - 197.189.234.82
app.get("/MX/8/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["197.189.234.82"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Roosendaal, Netherlands - Plinq Bv - 185.107.80.84
app.get("/MX/9/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["185.107.80.84"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Paris, France - Online S.A.S. - 163.172.107.158
app.get("/MX/10/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["163.172.107.158"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Madrid, Spain - Telefonica de Espana - 84.236.142.130
app.get("/MX/11/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["84.236.142.130"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Bern, Switzerland - Swisscom AG - 217.193.239.170
app.get("/MX/12/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["217.193.239.170"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Innsbruck, Austria - nemox.net - 83.137.41.9
app.get("/MX/13/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["83.137.41.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// London, United Kingdom - Verizon UK Limited - 158.43.128.1
app.get("/MX/14/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["158.43.128.1"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Midtjylland, Denmark - NM NET APS - 212.98.75.35
app.get("/MX/15/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["212.98.75.35"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Frankfurt am Main, Germany - DNS.WATCH - 84.200.70.40
app.get("/MX/16/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["84.200.70.40"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Monterrey, Mexico - Marcatel Com - 200.56.224.11
app.get("/MX/17/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["200.56.224.11"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Sao Paulo, Brazil - Universo Online S.A - 200.221.11.101
app.get("/MX/18/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["200.221.11.101"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Shah Alam, Malaysia - TT Dotcom Sdn Bhd - 211.25.206.147
app.get("/MX/19/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["211.25.206.147"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Research, Australia - Cloudflare Inc - 1.1.1.1
app.get("/MX/20/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["1.1.1.1"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Melbourne, Australia - Pacific Internet - 61.8.0.113
app.get("/MX/21/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["61.8.0.113"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Auckland, New Zealand - Global-Gateway Internet - 122.56.105.82
app.get("/MX/22/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["122.56.105.82"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Singapore - Ntt Singapore Pte - 202.136.162.11
app.get("/MX/23/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["202.136.162.11"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Seoul, South Korea - LG Dacom Corporation - 164.124.101.2
app.get("/MX/24/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["164.124.101.2"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Shenzhen, China - Shenzhen Sunrise Technology Co. - 202.46.32.187
app.get("/MX/25/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["202.46.32.187"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Antalya, Turkey - Teknet Yazlim -	31.7.37.37
app.get("/MX/26/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["31.7.37.37"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Udaipur, India - Net4U Technology - 103.193.252.2
app.get("/MX/27/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["103.193.252.2"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Lahore, Pakistan -Wateen Telecom - 58.27.149.60
app.get("/MX/28/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["58.27.149.60"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Lisbon, Portugal - Municipio de Sabugal - 89.26.249.19
app.get("/MX/29/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["89.26.249.19"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Ireland - Daniel Cid - 185.228.168.9
app.get("/MX/30/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["185.228.168.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Dhaka, Bangladesh - Video Elephant - 137.59.155.14
app.get("/MX/31/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["137.59.155.14"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "MX", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

///////////////////////////////////////////////////////////////////////////////


/// SOA RECORDS

// Holtsville NY, United States - Opendns - 208.67.222.220
app.get("/SOA/1/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["208.67.222.220"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});


// Canoga Park, CA, United States - Sprint - 204.117.214.10
app.get("/SOA/2/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["204.117.214.10"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Mountain View CA, United States - Google - 8.8.8.8
app.get("/SOA/3/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["8.8.8.8"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Dothan, United States - Comodo Secure DNS - 8.26.56.26
app.get("/SOA/4/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["8.26.56.26"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Brooklyn, United States - Verizon Fios Business -	98.113.146.9
app.get("/SOA/5/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["98.113.146.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Brossard, Canada - Fibernetics Corporation - 208.79.56.204
app.get("/SOA/6/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["208.79.56.204"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Yekaterinburg, Russian Federation -Skydns - 195.46.39.39
app.get("/SOA/7/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["195.46.39.39"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Johannesburg, South Africa - Hetzner (Pty) Ltd - 197.189.234.82
app.get("/SOA/8/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["197.189.234.82"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Roosendaal, Netherlands - Plinq Bv - 185.107.80.84
app.get("/SOA/9/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["185.107.80.84"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Paris, France - Online S.A.S. - 163.172.107.158
app.get("/SOA/10/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["163.172.107.158"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Madrid, Spain - Telefonica de Espana - 84.236.142.130
app.get("/SOA/11/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["84.236.142.130"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Bern, Switzerland - Swisscom AG - 217.193.239.170
app.get("/SOA/12/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["217.193.239.170"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Innsbruck, Austria - nemox.net - 83.137.41.9
app.get("/SOA/13/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["83.137.41.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// London, United Kingdom - Verizon UK Limited - 158.43.128.1
app.get("/SOA/14/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["158.43.128.1"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Midtjylland, Denmark - NM NET APS - 212.98.75.35
app.get("/SOA/15/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["212.98.75.35"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Frankfurt am Main, Germany - DNS.WATCH - 84.200.70.40
app.get("/SOA/16/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["84.200.70.40"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Monterrey, Mexico - Marcatel Com - 200.56.224.11
app.get("/SOA/17/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["200.56.224.11"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Sao Paulo, Brazil - Universo Online S.A - 200.221.11.101
app.get("/SOA/18/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["200.221.11.101"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Shah Alam, Malaysia - TT Dotcom Sdn Bhd - 211.25.206.147
app.get("/SOA/19/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["211.25.206.147"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Research, Australia - Cloudflare Inc - 1.1.1.1
app.get("/SOA/20/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["1.1.1.1"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Melbourne, Australia - Pacific Internet - 61.8.0.113
app.get("/SOA/21/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["61.8.0.113"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Auckland, New Zealand - Global-Gateway Internet - 122.56.105.82
app.get("/SOA/22/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["122.56.105.82"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Singapore - Ntt Singapore Pte - 202.136.162.11
app.get("/SOA/23/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["202.136.162.11"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Seoul, South Korea - LG Dacom Corporation - 164.124.101.2
app.get("/SOA/24/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["164.124.101.2"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Shenzhen, China - Shenzhen Sunrise Technology Co. - 202.46.32.187
app.get("/SOA/25/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["202.46.32.187"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Antalya, Turkey - Teknet Yazlim -	31.7.37.37
app.get("/SOA/26/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["31.7.37.37"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Udaipur, India - Net4U Technology - 103.193.252.2
app.get("/SOA/27/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["103.193.252.2"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Lahore, Pakistan -Wateen Telecom - 58.27.149.60
app.get("/SOA/28/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["58.27.149.60"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Lisbon, Portugal - Municipio de Sabugal - 89.26.249.19
app.get("/SOA/29/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["89.26.249.19"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Ireland - Daniel Cid - 185.228.168.9
app.get("/SOA/30/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["185.228.168.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Dhaka, Bangladesh - Video Elephant - 137.59.155.14
app.get("/SOA/31/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["137.59.155.14"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "SOA", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

///////////////////////////////////////////////////////////////////////////////

/// TXT RECORDS

// Holtsville NY, United States - Opendns - 208.67.222.220
app.get("/TXT/1/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["208.67.222.220"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});


// Canoga Park, CA, United States - Sprint - 204.117.214.10
app.get("/TXT/2/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["204.117.214.10"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Mountain View CA, United States - Google - 8.8.8.8
app.get("/TXT/3/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["8.8.8.8"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Dothan, United States - Comodo Secure DNS - 8.26.56.26
app.get("/TXT/4/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["8.26.56.26"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Brooklyn, United States - Verizon Fios Business -	98.113.146.9
app.get("/TXT/5/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["98.113.146.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Brossard, Canada - Fibernetics Corporation - 208.79.56.204
app.get("/TXT/6/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["208.79.56.204"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Yekaterinburg, Russian Federation -Skydns - 195.46.39.39
app.get("/TXT/7/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["195.46.39.39"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Johannesburg, South Africa - Hetzner (Pty) Ltd - 197.189.234.82
app.get("/TXT/8/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["197.189.234.82"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Roosendaal, Netherlands - Plinq Bv - 185.107.80.84
app.get("/TXT/9/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["185.107.80.84"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Paris, France - Online S.A.S. - 163.172.107.158
app.get("/TXT/10/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["163.172.107.158"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Madrid, Spain - Telefonica de Espana - 84.236.142.130
app.get("/TXT/11/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["84.236.142.130"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Bern, Switzerland - Swisscom AG - 217.193.239.170
app.get("/TXT/12/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["217.193.239.170"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Innsbruck, Austria - nemox.net - 83.137.41.9
app.get("/TXT/13/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["83.137.41.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// London, United Kingdom - Verizon UK Limited - 158.43.128.1
app.get("/TXT/14/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["158.43.128.1"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Midtjylland, Denmark - NM NET APS - 212.98.75.35
app.get("/TXT/15/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["212.98.75.35"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Frankfurt am Main, Germany - DNS.WATCH - 84.200.70.40
app.get("/TXT/16/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["84.200.70.40"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Monterrey, Mexico - Marcatel Com - 200.56.224.11
app.get("/TXT/17/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["200.56.224.11"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Sao Paulo, Brazil - Universo Online S.A - 200.221.11.101
app.get("/TXT/18/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["200.221.11.101"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Shah Alam, Malaysia - TT Dotcom Sdn Bhd - 211.25.206.147
app.get("/TXT/19/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["211.25.206.147"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Research, Australia - Cloudflare Inc - 1.1.1.1
app.get("/TXT/20/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["1.1.1.1"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Melbourne, Australia - Pacific Internet - 61.8.0.113
app.get("/TXT/21/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["61.8.0.113"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Auckland, New Zealand - Global-Gateway Internet - 122.56.105.82
app.get("/TXT/22/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["122.56.105.82"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Singapore - Ntt Singapore Pte - 202.136.162.11
app.get("/TXT/23/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["202.136.162.11"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Seoul, South Korea - LG Dacom Corporation - 164.124.101.2
app.get("/TXT/24/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["164.124.101.2"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Shenzhen, China - Shenzhen Sunrise Technology Co. - 202.46.32.187
app.get("/TXT/25/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["202.46.32.187"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Antalya, Turkey - Teknet Yazlim -	31.7.37.37
app.get("/TXT/26/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["31.7.37.37"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Udaipur, India - Net4U Technology - 103.193.252.2
app.get("/TXT/27/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["103.193.252.2"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Lahore, Pakistan -Wateen Telecom - 58.27.149.60
app.get("/TXT/28/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["58.27.149.60"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Lisbon, Portugal - Municipio de Sabugal - 89.26.249.19
app.get("/TXT/29/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["89.26.249.19"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Ireland - Daniel Cid - 185.228.168.9
app.get("/TXT/30/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["185.228.168.9"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

// Dhaka, Bangladesh - Video Elephant - 137.59.155.14
app.get("/TXT/31/:url", (req, res) => {
  let url = req.params.url;
  dns.setServers(["137.59.155.14"]);
  /// RECORD RESOLVATION
  dns.resolve(url, "TXT", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid domain!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: result
      });
    }
  });
});

///////////////////////////////////////////////////////////////////////////////

// API for QR code generator
app.post('/qrcode', (req, res) => {
  // If data is not provided in the request body then send 400 bad request
  if (!req.body || !req.body.data) {
    return res.status(400).json({ message: "Please provide valid data..." });
  }

  // Generate QRCode from the URL
  QRCode.toDataURL(req.body.data, (err, image) => {
    // Send 500 bad request if any error
    if (err) {
      return res.status(500).json({ message: "something went wrong...Please try again" });
    }

    // Send base64 encoded imaage
    res.json({ image });
  });
});


// API for MD5 Encryption
app.post('/encryptMD5', (req, res) => {
  // If data is not provided in the request body then send 400 bad request
  if (!req.body || !req.body.data) {
    return res.status(400).json({ message: "Please provide valid data..." });
  }

  // Encrypt data and send it in the response
  const hash = crypto.createHash('md5').update(req.body.data).digest('hex');
  res.json({ hash })
})

// API for BASE64 Encryption
app.post('/encodeBASE64', (req, res) => {
  // If data is not provided in the request body then send 400 bad request
  if (!req.body || !req.body.data) {
    return res.status(400).json({ message: "Please provide valid data..." });
  }

  // Encrypt data and send it in the response
  const hash = Buffer.from(req.body.data).toString('base64');
  res.json({ hash })
})

// API for BASE64 Decryption
app.post('/decodeBASE64', (req, res) => {
  // If data is not provided in the request body then send 400 bad request
  if (!req.body || !req.body.hash) {
    return res.status(400).json({ message: "Please provide valid data..." });
  }

  // Decrypt data and send it in the response
  const data = Buffer.from(req.body.hash, 'base64').toString();
  res.json({ data })
})


// API for http header checker
app.post('/headers', async (req, res) => {
  //res.send(req.body.url)
  try {
    if (!req.body || !req.body.url) {
      return res.status(400).json({ message: "Please provide valid data..." });
    }
    //const response = await axios.get(req.body.data.url);
    const response = await axios.get(req.body.url);
    res.json({ headers: response.headers });
  }
  catch (error) {
    //res.status(400).json({ message: 'Please provide valid URL...' })
    res.status(400).json({ headers: error.response.headers })
  }
})

// API for Strong Password Generator
app.post('/passwordGenerator', (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Please provide valid data..." });
  }
  const options = {
    length: req.body.length,
    symbols: req.body.symbols,
    numbers: req.body.numbers,
    lowercase: req.body.lowercase,
    uppercase: req.body.uppercase,
    excludeSimilarCharacters: req.body.excludeSimilarCharacters
  };

  const password = passwordGenerator.generate(options);
  res.json({ password: password });
})

// API for reverse lookup
app.post('/reverseLookup', (req, res) => {
  if (!req.body || !req.body.hostname) {
    return res.status(400).json({ message: "Please provide valid data..." });
  }

  //dns.lookup(req.body.hostname,(err, addresses) =>{
  dns.reverse(req.body.hostname, (err, addresses) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Invalid IP address!"
      })
    }
    else {
      return res.status(200).json({
        success: true,
        data: addresses
      });
    }
  });
})

// KeyCDN API for IP to Geolocation
app.post('/ipgeoloc', async (req, res) => {
  try {
      const response = await axios.get(`https://tools.keycdn.com/geo.json?host=${req.body.hostname}`, {
          headers: {
              'User-Agent': `keycdn-tools:https://www.example.com`
          }
      });
      res.json(response.data);
  }
  catch (err) {
      res.sendStatus(500).json('Something went wrong...Please try again');
  }
})

// iplist API for IP to Geolocation
app.post('/ipgeoloc2', async(req, res) => {
  if (!req.body || !req.body.hostname) {
    return res.sendStatus(400).json({ message: "Please provide valid data..." });
  }

  var https = require('https');
  https.get(`https://iplist.cc/api/${req.body.hostname}`, function(response) {
    var body = '';
    response.on('data', function(c) {
      body += c;
    });
    response.on('end', function() {
      //console.log(JSON.parse(body));
      return res.json({result : JSON.parse(body)});
    });
  });

})

app.post('/ping', (req, res) => {
  // If data is not provided in the request body then send 400 bad request
  if (!req.body || !req.body.host) {
    return res.status(400).json({ message: "Please provide valid data..." });
  }

  exec(`ping ${req.body.host}`, (error, stdout, stderr) => {
    if (error) {
      return res.status(200).json({ stdout: error.name });
    }
    else if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(200).json({ stdout: stderr });
    }
    console.log(`stdout: ${stdout}`);
    res.status(200).json({ stdout: stdout });
    //console.error(`stderr: ${stderr}`);
  });

})

app.post('/traceroute', (req, res) => {
  // If data is not provided in the request body then send 400 bad request
  if (!req.body || !req.body.host) {
    return res.status(400).json({ message: "Please provide valid data..." });
  }

  exec(`tracert ${req.body.host}`, (error, stdout, stderr) => {
    if (error) {
      return res.status(200).json({ stdout: error.name });
    }
    if (stderr) {
      //console.error(`stderr: ${stderr}`);
      return res.status(200).json({ stdout: stderr });
    }
    //console.log(`stdout: ${stdout}`);
    res.status(200).json({ stdout: stdout });
    //console.error(`stderr: ${stderr}`);
  });

})

app.post('/sslchecker', (req, res) => {
  // If data is not provided in the request body then send 400 bad request
  if (!req.body || !req.body.host) {
    return res.status(400).json({ success : false,
      certificate: "Please provide valid data..." });
  }

  getSslCertificate.get(req.body.host)
    .then(function (certificate) {
      return res.status(200).json({ success : true,
        certificate: certificate });
    })
    .catch(function (error) {
      return res.status(400).json({ success : false,
        certificate: "Trusted SSL not found !" });
    });

})

app.post('/performance', (req, res) => {
  // If data is not provided in the request body then send 400 bad request
  if (!req.body || !req.body.url) {
    return res.status(400).json({ success : false, report: "Please provide valid URL..." });
  }

  try {
    (async () => {
      const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
      const options = { logLevel: 'info', output: 'json', onlyCategories: ['performance'], port: chrome.port };
      const runnerResult = await lighthouse(req.body.url, options);
      // `.report` is the HTML report as a string
      const reportHtml = runnerResult.report
      //fs.writeFileSync('lhreport.html', reportHtml);
      
      //console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);  
      await chrome.kill();
      return res.status(200).send({success : true,report : JSON.parse(reportHtml)})

    })();
  }
  catch (error) {
    return res.status(400).json({ success : false,report: "Unable to audit site..." });
  }

})

// listen for requests :)
/*const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});*/
const listener = app.listen(5000, () => {
  console.log("Your app is listening on port " + 5000);
});