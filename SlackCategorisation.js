var app = require('express')();
var db = require('mongojs').connect('test', ['allProps']);
var Mustache = require('mustache');

app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({
  extended: true
}));

app.post('/property', function(req, res) {
  db.allProps.find({
    categorised: {
      $ne: true
    }
  }, function(err, docs) {
    var MessageString = "Property ID: {{listing_id}}\n"+
    "Zoopla Page: {{details_url}}\n"+
    "Thumbnail: {{thumbnail_url}}"
    var output = Mustache.render(MessageString, view[0]);
    res.send(output);
  });
});

app.post('/category', function(req, res) {
  console.log(req.body, req.params)
});

app.listen(8082);
