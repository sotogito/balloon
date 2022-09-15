var db = require('./db');
var template = require('./template.js');
var url = require('url');
var qs = require('querystring');
var template = require('./template.js');


exports.home = function(request,response){
  db.query('SELECT * FROM author',function(error2,authors){
      
      var html = template.HTML('',
       `
       <div class="home_balloon">
        <h1 class="home_balloon1"><a href="/">balloon</a></h1>
        <p class="home_balloon2"><a target="_blank" href=https://github.com/sotogito/balloon_mysql_1.git>We float our own balloons on our heads</a></p>
        <p class="home_balloon3">
        The place holding a balloon.<br>
        Catch a balloon flying from you. They'll gather together and become your wings.<br>
         <strong>-</strong> To my friends who are dreaming <strong>-</strong>
        </p>
       </div>
       `
       ,
       ''
       , 
      `
      <div class="home_main">
          <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
              <p>
                <textarea name="description" placeholder="description"></textarea>
              </p>
              <p class="home_roll">
                ${template.authorSelcet(authors)}
              </p>
            <p>
              <input type="submit" value="catch!">
            </p>
          </form>
      </div>
        `
        ,
        `
        <div class="home_main2">
        <a href="/create"> my balloons -> </a>
        </div>
        `
      );
      response.writeHead(200);
      response.end(html);
  });
}

exports.page = function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
    db.query('SELECT * FROM topic', function(error,topics){
      if(error){
        throw error;
      }
      db.query(`SELECT * FROM topic LEFT JOIN author ON topic.author_id=author.id WHERE topic.id=?`,[queryData.id], function(error2, topic){
        if(error2){
          throw error2;
        }
        var title = topic[0].title;
        var description = topic[0].description;
        var time = topic[0].created;
        var list = template.list(topics);
        var html = template.HTML(title,`<h1 class="bal_page"><a href="/">balloon</a></h1>`,list,
          `
          <div class="page_meno">
            <div class="page_text">
              <h3 style = "text-decoration : underline">${title}</h3>
              <p>${description}</p>
            </div>
              <p class="page_time">${time}</p>
            <p class="page_botton">
            <button style="color:green; border:2px solid green;">${topic[0].name}</button>
            </p>
          </div>
          `,
          `
          <div class="page_button">
          <a href="/create">new balloon</a>
            <a href="/update?id=${queryData.id}">reballoon</a>
            <form action="delete_process" method="post">
              <input type="hidden" name="id" value="${queryData.id}">
              <p><input type="submit" value="boooom!" style="color:red"></p>
            </form>
          <div>`
        );
        response.writeHead(200);
        response.end(html);
       // });
      });  

    });
}

exports.create = function(request,response){
  db.query('SELECT * FROM topic', function(error,topics){
    db.query('SELECT * FROM author',function(error2,authors){
      var title = 'create';
      var list = template.list(topics);
      var html = template.HTML(title, `<h1 class="bal_page"><a href="/">balloon</a></h1>`,list,
        `
        <div class="create_main">
          <form action="/create_process" method="post">
            <p ><input type="text" name="title" placeholder="title"></p>
            <p>
              <textarea name="description" placeholder="description" style="width:220px;height:70px;"></textarea>
            </p>
            <p>
              ${template.authorSelcet(authors)}
            </p>
            <p>
              <input type="submit" value="catch!">
              
            </p>
          </form>
        </div>`
        , 
        `
        <div class="create_button">
        <a href="/create">*new balloon*</a>
        </div>
        `
      );
      response.writeHead(200);
      response.end(html);
    });
  });
}

exports.create_process = function(request,response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`
      INSERT INTO topic (title, description, created, author_id) 
       VALUES(?,?, NOW(),?)`,
      [post.title , post.description,post.author],
      function(error, result){
        if(error){
          throw error;
        }
        response.writeHead(302, {Location: `/?id=${result.insertId}`});
        response.end();  
      });
  });
}

exports.update = function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  db.query('SELECT * FROM topic', function(error,topics){
    if(error){
      throw error;
    }
    db.query(`SELECT * FROM topic WHERE id=?`,[queryData.id], function(error2, topic){
      if(error2){
        throw error2;
      }
      db.query('SELECT * FROM author',function(error2,authors){
        var list = template.list(topics);
      var html = template.HTML(topic[0].title,`<h1 class="bal_page"><a href="/">balloon</a></h1>`,list,
        `
        <div class="update_main">
          <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${topic[0].id}">
            <p><input type="text" name="title" placeholder="title" value="${topic[0].title}"></p>
            <p>
              <textarea name="description" placeholder="description">${topic[0].description}</textarea>
            </p>
            <p>
              ${template.authorSelcet(authors, topic[0].author_id)}
            </p>
            <p>
              <input type="submit" value="catch!">
            </p>
          </form>
        </div>
        `,
        `
        <div class="update_button">
        <a href="/create">new balloon</a> <a href="/update?id=${topic[0].id}">*reballoon*</a>
        </div>
        `
      );
      response.writeHead(200);
      response.end(html);

      });
    });
  });

}

exports.update_process = function(request,response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query('UPDATE topic SET title=?, description=?, author_id=? WHERE id=?',
      [post.title, post.description, post.author, post.id],
      function(error,result){
        response.writeHead(302, {Location: `/?id=${post.id}`});
        response.end();
      });
  });
}

exports.delate_process = function(request,response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query('DELETE FROM topic WHERE id = ?',[post.id],function(error,result){
        if(error){
          throw error;
        }
        response.writeHead(302, {Location: `/create`});
        response.end();
      });
  });
} 


