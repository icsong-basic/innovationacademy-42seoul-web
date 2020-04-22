const express = require('express');
const path = require('path');
const app = express();
const generateFaq = require("./generateFaq")
const fs = require("fs");
const axios = require("axios");
const metaTags = require("./src/metaTags")
const indexHtml = fs.readFileSync(path.join(__dirname, 'build', 'index.html'), 'utf8');

const routes = [
  { path: "/", exact: true },
  { path: "/apply", name: "Apply" },
  { path: "/about", name: "ABOUT" },
  { path: "/admission", name: "ADMISSION" },
  { path: "/studies", name: "STUDIES" },
  { path: "/faq", name: "FAQ" },
  { path: "/news", name: "NEWS" }
]

try {
  generateFaq()
} catch (error) {
  console.error(error)
}

for (let i = 0; i < routes.length; i++) {
  const route = routes[i]
  app.get(route.exact ? route.path : [route.path, `${route.path}/*`], (req, res) => (responseIndexHtml(200, route, req, res)))
}

app.use(express.static(path.join(__dirname, 'build')));
app.get('/time', function (req, res) {
  res.set('Content-Type', 'application/json'); res.send(JSON.stringify({ time: Date.now() }))
})
app.post('/refresh-faq', function (req, res) {
  const url = req.protocol + '://' + req.get('host');
  axios.get(url + '/api/v1/account', req.headers.cookie ? {
    headers: {
      Cookie: req.headers.cookie
    }
  } : undefined).then(response => {
    if (
      response.data &&
      response.data.authorities &&
      (
        response.data.authorities.findIndex(auth => auth.name === 'ROLE_ADMIN') >= 0 ||
        response.data.authorities.findIndex(auth => auth.name === 'ROLE_FAQ_UPDATER') >= 0
      )
    ) {
      generateFaq().then(json => {
        res.set('Access-Control-Allow-Origin', 'https://admin.42seoul.kr')
        res.set('Content-Type', 'application/json')
        res.send(json)
      }).catch(error => {
        res.send(500, error.toString())
      })
    } else {
      res.send(401, 'FAQ 갱신 권한이 없습니다.')
    }
  }).catch(error => {
    if (error.response && error.response.status === 401) {
      res.send(401, 'FAQ 갱신 권한이 없습니다.');
    } else {
      res.send(500, error.toString());
    }
  })
})

app.get('*', (req, res) => (responseIndexHtml(404, null, req, res)))

app.listen(process.env.PORT || 3000);

function responseIndexHtml(code, route, req, res) {
  const metaTag = route ? (metaTags.find(item => route.path === item.path) || metaTags[0]) : metaTags[0];
  const title = metaTag.title;
  const description = metaTag.description;
  const ogTitle = metaTag["og:title"] || title;
  const ogDescription = metaTag["og:description"] || description;
  const twitterTitle = metaTag["twitter:title"] || title;
  const twitterDescription = metaTag["twitter:description"] || description;

  const responseHtml = indexHtml
    .replace(/%META_TITLE%/gi, title)
    .replace(/%META_DESCRIPTION%/gi, description)
    .replace(/%META_OG_TITLE%/gi, ogTitle)
    .replace(/%META_OG_DESCRIPTION%/gi, ogDescription)
    .replace(/%META_TWITTER_TITLE%/gi, twitterTitle)
    .replace(/%META_TWITTER_DESCRIPTION%/gi, twitterDescription)
  return res.send(code, responseHtml)
}