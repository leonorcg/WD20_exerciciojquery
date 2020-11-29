//vai busca o div id splash espera x e depois dá slideup
$("#splash").delay(1400).slideUp("slow", function() {
});
let userNameval = '';

let pontos = {
  Low: 1,
  Medium: 3,
  High: 5
};

$(document).ready(function(){
  let userAtivo = localStorage.getItem("userativo");
  let users = JSON.parse(localStorage.getItem("userlist"));
  let user = users.find(e =>{
  console.log(e);
  return e.userName === userAtivo;
});
  $("#experiencia").html(user.tarefas.filter(e => e.completed !== false).reduce((total, novo) => total+=pontos[novo.priority],0));
});



$("#loginb").on("click", function () {
  let userNameval = $("#name").val();
  if (userNameval === "") { //Se o q a pessoa escreveu estiver vazio
    userName = "Anonymous";  //é anonimo
    window.location.replace("main3.html");  //cria nova sessao
  } else { //se a pessoa escrever algum nome

    var lista = JSON.parse(localStorage.getItem("userlist"));
    if (lista == null){ //Se n existir lista no localstorage
      lista = []; //cria array com
      let user = {  // utilizador e as tarefas
        userName: userNameval,
        tarefas: [],
      }

      lista.push(user);  //se a pessoa escreveu nome adiciona-o à lista q acabou se ser criada
      localStorage.setItem("userlist",JSON.stringify(lista));
      localStorage.setItem("userativo",userNameval); //avisar nos outros ecrans o user logado
      window.location.replace("main3.html");
    }
    else{   //se a pessoa escreveu nome e lista existe no local storage
      let existe = false;
        for (var i = 0; i < lista.length; i++) {
            if(lista[i].userName === userNameval) {
                existe = true;
        break;
        }
        }
          if(existe) {
              //Faz algo
              localStorage.setItem("userativo",userNameval); //diz q está logedd in
              window.location.replace("main.html");
              } else {
                //Fa< outro
                let user = {  //cria o na lista
                  userName: userNameval,
                  tarefas: [],
                }
                lista.push(user);  //atira-o para o local storage
                localStorage.setItem("userlist",JSON.stringify(lista));
                localStorage.setItem("userativo",userNameval); //e ativa-o
                window.location.replace("main3.html");
              }
    }
  }
}); //final do butao

var char;
//como passar char para fora das funçoes !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$("#char1").on("click", function (){
  console.log("hello");
  $("#chselect").slideUp();
  $("#mainquest").css("display","block");
  char = $("#char1").attr('src');
  localStorage.setItem("character", char);
  $("#bixu").css("display", "none");
  $("#goal").css("display", "block");
});

$("#char2").on("click", function (){
  console.log("hello");
  $("#chselect").slideUp();
  $("#mainquest").css("display","block");
  char = $("#char2").attr('src');
  localStorage.setItem("character", char);
  $("#bixu").css("display", "none");
  $("#goal").css("display", "block");
});

$("#char3").on("click", function (){
  console.log("hello");
  $("#chselect").slideUp();
  $("#mainquest").css("display","block");
  char = $("#char3").attr('src');
  localStorage.setItem("character", char);
  $("#bixu").css("display", "none");
  $("#goal").css("display", "block");
});

var usersMainQuest = "";
$("#but").on("click", function(){
  console.log("hewwo");
  let usersMainQuest = $("#mainq").val();
  if (usersMainQuest === ""){
    alert("That's not a valid quest.");
  } else {
    let main = $("main");
    var newDiv = $("<div></div>");
    var phrase = ("You choose " + usersMainQuest + "as your main goal.");
    main.append(newDiv);
    newDiv.append(phrase);
    newDiv.addClass("mq");
    console.log("usersMainQuest",usersMainQuest);
    localStorage.setItem("questprincipal", usersMainQuest);
  }
  console.log("usersMainQuest",usersMainQuest);

    window.location.replace("main.html").delay( 1000 );
});
console.log("usersMainQuest", usersMainQuest);

//on main.html
  char = localStorage.getItem("character");
  console.log("oii");
  $("#pfp").attr('src',char);
  console.log("ola");

  let userAtivo = localStorage.getItem("userativo");
  let users = JSON.parse(localStorage.getItem("userlist"));
  let user = users.find(e => e.userName == userAtivo);
  console.log(userAtivo);



  let playersname = localStorage.getItem("userativo",userNameval);
  $("#csname").append(playersname);
  $("#gr").append( playersname);

  let principal = localStorage.getItem("questprincipal");
  console.log(principal);
  $("#mqprogress").replaceWith(principal).addClass("amarelo");
