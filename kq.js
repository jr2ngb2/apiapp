var express = require('express');
var app = express();

const axios = require('axios');
const { response } = require('express');
const { moduleExpression } = require('@babel/types');
var data;
var picsData;
var toDisplay = "";
async function getData(){await axios.get('https://restcountries.com/v2/all')
  .then(function (response) {
    // handle success
    data = response.data;
    console.log("entered this");
    //console.log(response);
    return response;
})
  .catch(function (error) {
    // handle error
    console.log("returning from here")
    console.log(error);
    return error;
  })
  
}

const buildHTML = (result , toDisplay) => {
    for(var i=0;i<result.length;i++)
    {
    console.log("entered");
    toDisplay += `<div class = "imgtopdiv card container col-xs-6">`
    toDisplay += `<img src = "` + result[i].flags.png + `" class="card-img-top imgcard"></img>`;
    toDisplay += `<div style="text-align:center">`;
    toDisplay += `<li style="text-align:left"> Country : ` + result[i].name + `</li>`;
    toDisplay += `<li style="text-align:left">Capital : ` + result[i].capital + `</li>`;
    if(result[i].currencies)
    toDisplay += `<li style="text-align:left">Currency : ` + result[i].currencies[0].name + `</li>`;
    toDisplay += `<li style="text-align:left">Subregion : ` + result[i].subregion + `</li>`;
    toDisplay += `<li style="text-align:left">Region : ` + result[i].region + `</li>`;
    toDisplay += `</div>`;
    toDisplay += "</div><br/>"
    }
    return toDisplay;
}

app.use(express.static(__dirname + '/public'));
  app.get('/' , async function(req,res){
      try{
     await getData();
     //await getPics();
    toDisplay = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">`;
    toDisplay += `<link rel="stylesheet" type="text/css" href="/styles.css">`;
    toDisplay +=   `<nav class="navbar navbar-dark mb-5 bg-dark ">
                    <span class="navbar-brand h1 topnav">Countries of the world</span>
                    </nav>`;
    toDisplay += `<h2 class="topHeading">Some Facts About The Different Countries Of The World</h2><div class="container"><div class="row">`;
    const page = req.query.page;
    const limit = 10;
    const startIndex = (page-1)*limit;
    const endIndex = page*limit;
    const result = data.slice(startIndex , endIndex);
    toDisplay = buildHTML(result , toDisplay);
    var numPages = data.length/limit;
    var pageHTML = `<div class = "imgtopdiv container">Pages:<ul style="display:inline">`;
    for(var j=0;j<numPages;j++)
    {
        pageHTML += `<li style="display:inline"><a href=?page=` + (j+1) + ">  " + (j+1)+ " " + " </a></li>";
    }
    pageHTML += "</ul></div></div>";
    var bootstrap = `<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>`;
    res.send(" " + toDisplay + " " + bootstrap +  pageHTML+"</body>");
}
catch(error){
    console.log("error" + error);
}
});
app.listen(3000 , function(){
    console.log("listening on port 3000");
});

module.exports = buildHTML;
