module.exports = {
  HTML:function(title,bal, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
      <style>
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
          * {
              font-family: "Pretendard",serif;
              
          }
      
        @font-face {
          font-family: 'GangwonEduPowerExtraBoldA';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'SF_HambakSnow';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HambakSnow.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        body{
          background-color:#F2F5A9;
          text-decoration : none; 
        }
        a{
          text-decoration:none; 
        }

        .home_balloon{
          margin: 40px auto 0px auto;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; 
        }
        .home_balloon1{
          margin: 65px auto 0px auto;
        }
        .home_balloon1 > a{
          font-family: 'GangwonEduPowerExtraBoldA';
          color:#541b8a;
          font-size: 32px;
        }
        .home_balloon2{
          margin: 0px auto auto auto;
          font-size: 11px;
          text-decoration : underline;
        }
        .home_balloon2 > a{
          font-family: 'SF_HambakSnow';
          font-weight: bold;
          text-align: center;
          
        }
        .home_balloon3{
          text-align: center;
          margin: 0px auto auto auto;
          font-size: 6px;
        }
        .home_main{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: auto auto auto auto;
        }
        .home_main2{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 88px auto 8px auto;
        }
        .home_main2 >a{
          color:#541b8a;
          background-color: #97d9f4;
          font-weight: 600;
          font-size: 14px;
          border-radius: 4px;
          padding:2px;
          width: 126px;
          text-align: center;        
        }
        .home_main > form >p{ 
          margin: auto auto auto auto;
          padding:6px;
        }
        .home_main > .home_select{ 
          margin: auto  300px auto auto;
        }
      
        .page_meno{
          font-size: 14px;
          width: 550px;
          height: 300px;
          text-align: center;
          margin: 3px auto 0px auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: auto;
          overflow: hidden;
          text-overflow: ellipsis;          
        }
        .page_meno > .page_text{
          width: 550px; 
          word-wrap: break-word;
          margin: auto auto 0px auto;
          overflow: auto;
          align-items: center; 
        }
        .page_meno > .page_time{
          width: 270px;
          height: 12px;
          font-size: 5px;
          padding:10px;
        }
        .page_meno  > .page_botton{
          margin: auto auto 0px auto;
        } 
        .page_meno >p{
          width: 120px;
          height: 25px;
          margin-top: 50px;
        }
        .bal_page{
          text-align:right;
          margin: 10px 25px 3px auto;
          width: 100px;
          height: 100px;        
        }
        .bal_page > a{
          color:#541b8a;
          font-family: 'GangwonEduPowerExtraBoldA';
          font-size: 29px;
          text-decoration : underline;
        }
        .page_button{ 
          height: auto;
        }
        .page_button > a{
          background-color: #97d9f4;
          border-radius: 4px;
          padding:2px;
          font-weight: 600;
          font-size: 14px;
        }

        .create_main{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .create_main > form >p{        
          margin: auto auto auto auto;
          padding:6px;
        }
        .create_button{
          margin: auto auto 20px auto;
        }
        .create_button > a{
          margin: auto auto auto auto;
          background-color: #97d9f4;
          border-radius: 4px;
          padding:2px;
          font-weight: 600;
          font-size: 14px;
        }

        .update_main{         
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .update_main > form >p{         
          margin: auto auto auto auto;
          padding:6px;
        }
        .update_button{
          margin: auto auto 20px auto;
        }
        .update_button > a{
          background-color: #97d9f4;
          border-radius: 4px;
          padding:2px;
          font-weight: 600;
          font-size: 14px;
        }

         .list_area{
          float: left;
          margin: 50px 103px 100px 103px;
          justify-content: center;
          align-items: center;
        }    
        .list{       
          height: 100px;
          float: left;     
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;      
          float: left;
          padding:0 30px;         
          width: calc(auto - auto);
        }
        .list >a{
          color:grey;
          font-size: 12px;
          font-weight: bold;  
          padding:40px;
          width: 100px;
          height: 100px;     
          background-color: #feffe2;
          border-radius: 8px;         
          box-shadow: 2px 2px 7px 0px grey;        
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: break-word;
          text-align: center;
        }
        .list > a:hover{
          background-color: #feffe0;
          color:#541b8a;
          box-shadow: 1px 1px 4px 0px grey;
        }
      </style>
    </head>
    <body>
      ${bal}
      ${control}
      ${body}
      ${list}
      
    </body>
    </html>
    `;
  },list:function (topics){
    var list = '<div class="list_area">';

    for (let i = topics.length - 1; i >= 0; i--){
      list = list+ `<p class="list"><a href="/?id=${topics[i].id}" title="your ${topics[i].id}th balloon!">- ${topics[i].title} -<br>${topics[i].description }</a></p>`;
    }

    list = list+'</div>';
  
    return list;


  },authorSelcet:function(authors,author_id){
    var tag = '';
    var i = 0;
    while(i < authors.length){
      var tag2 = '';
      if(authors[i].id === author_id){
        tag2 = '  selected';
      }
      tag = tag + `<option value="${authors[i].id}"${tag2}>${authors[i].name}${tag2}</option>`;
      i++;
    }
    return `
      <select name="author" style="color:green" >
      ${tag}
      </select>
    `;
  }
}
