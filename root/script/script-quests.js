//menu buttons
$(document).ready(function(){
  function appendItem(text1, text2, pointss) {
    var main = $("<div></div>");
    main.addClass("questprefab");
    main.attr('id', 'existentes');
    var edits = $("<div></div>");
    edits.addClass("edits");
    var check = $("<input type='checkbox'>");
    var title1 = $("<div></div>");
    var title = $("<p></p>").text(text1);
    title1.addClass("title");
    var dsc1 = $("<div></div>");
    var dsc = $("<p></p>").text(text2);
    dsc1.addClass("dsc");
    var sel = $("<div></div>");
    sel.addClass("selectors");
    var prior = $("<p>Priority</p>");
    prior.addClass("dd");
    var point = $("<p></p>").text(pointss);
    point.addClass("dd");
    title1.append(title);
    edits.append(check);
    main.append(edits);
    dsc1.append(dsc);
    sel.append(prior);
    sel.append(point);
    main.append(title1);
    main.append(dsc1);
    main.append(sel);
    $("#activequests").append(main);
  }
  let userAtivo = localStorage.getItem("userativo");
  let users = JSON.parse(localStorage.getItem("userlist"));
  let user = users.find(e =>{
  console.log(e);
  return e.userName === userAtivo;

});
  user.tarefas.forEach((item, i) => {
    appendItem(item.titulo, item.descricao, item.priority);
    //this lets you delete if you check the list item
      $("input[type='checkbox']").change(function (){
        if (this.checked){
          console.log("checked");
          let hewwo = $(this).parent();
          console.log($(this).parent() );
          hewwo.parent().remove();
          console.log(hewwo.parent() );
          let oftarefas = user.tarefas;
          oftarefas = oftarefas.filter(e => {
            return e.titulo != item.titulo && e.descricao != item.descricao && e.priority != item.priority
          })
          user.tarefas = oftarefas;
          let ofusers = users.filter(e => e.userName != userAtivo);
          ofusers.push(user);
          console.log(user);
          localStorage.setItem("userlist",JSON.stringify(ofusers));
        }
      });
  });
  if (user.tarefas.length == 0){
    $("#another").show();
  } else {
    $("#another").hide();
  }

});


//se existir tarefas não mostres a fraze inicial















console.log("thisisquestsscript");

let tarefa = {
  titutlo: "Texto",
  descricao: "BLalbla",
  priority: "Low"
};

$("#questprefab").hide();

let pontos = {
  Low: 1,
  Medium: 3,
  High: 5
};


pontos["Low"]

var playerscore = ""


$("#b3").on("click", function (){
  console.log("hello");
  $("#activequests").css("display","none");
  $("#newquest").css("display","block");
});

//create quests
let questName = "";
let questDsc = "";

$("#quest").on("change click keyup", function () {
  console.log("typing…");
  questName = $("#quest").val();
  console.log("questName", questName);
});

$("#questdsc").on("change click keyup", function () {
  console.log("typing…");
  questDsc = $("#questdsc").val();
  console.log("questDsc", questDsc);
});

var pointss;

$("#points").change(function(){
        pointss = $(this).children("option:selected").val();
        alert("You have selected the following value for the quest - " + pointss);
    });

$("#form").on("submit", e => {
  e.preventDefault();
  let userAtivo = localStorage.getItem("userativo");
let users = JSON.parse(localStorage.getItem("userlist"));
let tarefa = {
  titulo: questName,
  descricao: questDsc,
  priority: pointss,
};

let user = users.find(e =>{
  console.log(e);
  return e.userName === userAtivo;
});
console.log("users",users);
user.tarefas.push(tarefa);
//Remover user do array
users = users.filter(e => e.userName !== userAtivo);

//Adicionar user ao array
users.push(user);

localStorage.setItem("userlist", JSON.stringify(users));

$("#activequests").css("display","block");
$("#newquest").css("display","none");

appendItem(questName, questDsc, pointss);
console.log("ola mundo");

//this creates the new html elements and adds the classes
function appendItem(text1, text2, pointss) {
  var main = $("<div></div>");
  main.addClass("questprefab");
  main.attr('id', 'existentes');
  var edits = $("<div></div>");
  edits.addClass("edits");
  var check = $("<input type='checkbox'>");
  var title1 = $("<div></div>");
  var title = $("<p></p>").text(text1);
  title1.addClass("title");
  var dsc1 = $("<div></div>");
  var dsc = $("<p></p>").text(text2);
  dsc1.addClass("dsc");
  var sel = $("<div></div>");
  sel.addClass("selectors");
  var prior = $("<p>Priority</p>");
  prior.addClass("dd");
  var point = $("<p></p>").text(pointss);
  point.addClass("dd");
  title1.append(title);
  edits.append(check);
  main.append(edits);
  dsc1.append(dsc);
  sel.append(prior);
  sel.append(point);
  main.append(title1);
  main.append(dsc1);
  main.append(sel);
  $("#activequests").append(main);

}


$("input[type='checkbox']").change(function (){
  if (this.checked){
    console.log("checked");
    $("#delete").css("display", "block").delay(1500);
    console.log("showup");
    $("#delete").slideUp().delay(1400);
    console.log("goaway");
    let hewwo = $(this).parent();
    console.log($(this).parent() );
    hewwo.parent().remove();
    console.log(hewwo.parent() );
    let oftarefas = user.tarefas;
    oftarefas = oftarefas.filter(e => {
      return e.titulo != questName && e.descricao != questDsc && e.priority != pointss
    })
    user.tarefas = oftarefas;
    let ofusers = users.filter(e => e.userName != userAtivo);
    ofusers.push(user);
    console.log(user);
    localStorage.setItem("userlist",JSON.stringify(ofusers));
  }

});

  $("#popup").css("display", "block").delay(1500);
  console.log("showup");
  $("#popup").slideUp().delay(1400);
  console.log("goaway");
});
