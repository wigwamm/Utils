var app = require('express')();
var db = require('mongojs').connect('test', ['allProps']);
var Mustache = require('mustache');
var request = require('request');

app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({
  extended: true
}));

request.post('https://hooks.slack.com/services/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', {
  payload: {
    attachments: [{
      title: 'Test',
      title_link: 'http://google.com',
      text: 'Short description',
      image_url: 'asdf',
      color:'#764FA5'
    }]
  }
});

app.post('/property', function(req, res) {
  db.allProps.find({
    categorised: {
      $ne: true
    }
  }, function(err, docs) {
    var MessageString = "Property ID: {{listing_id}}\n" +
      "Zoopla Page: {{details_url}}\n" +
      "Thumbnail: {{thumbnail_url}}"
    var output = Mustache.render(MessageString, view[0]);
    res.send(output);
  });
});

app.post('/category', function(req, res) {
  console.log(req.body, req.params)
});

app.listen(8082);
