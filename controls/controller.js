var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

var data = [{item:"walk the dog"} , {item:'add new movies in your list'}, {item: 'studies stuff'}];

var movies = [];

var studies = [];

module.exports = function(app){

  // for general todo
    app.get('/todo', function(req, res){
      res.render('todo', {todo:data});
    })

    app.post('/todo', urlencodedParser, function(req, res){
      data.push(req.body);
      res.json(data);
    });

    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(data){
          return data.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });

    //for movies todo

    app.get('/todo-movies', function(req, res){
      res.render('todo-movies', {todo:movies});
    });

    app.post('/todo-movies', urlencodedParser, function(req, res){
      movies.push(req.body);
      res.json(movies);
    })

    app.delete('/todo-movies/:item', urlencodedParser, function(req, res){
      movies = movies.filter(function(movies){
        return movies.item.replace(/ /g, '-') !== req.params.item;
      })
      res.json(movies);
    })

    //for studies todo

    app.get('/todo-studies', function(req, res){
      res.render('todo-studies', { todo:studies})
        });

    app.post('/todo-studies', urlencodedParser, function(req, res){
      studies.push(req.body);
      res.json(studies);
    });

    app.delete('/todo-studies/:item', urlencodedParser, function(req, res){
      studies = studies.filter(function(studies){
        return studies.item.replace(/ /g, '-') !== req.params.item;
      });
      res.json(studies);
    });
}
