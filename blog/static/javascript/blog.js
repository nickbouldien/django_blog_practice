
var nick = document.querySelector('#nickName');
 //document.querySelector("#nickName").innerHTML
 console.log(nick);

nick.addEventListener("click", clickNick);
// nick.addEventListener("mouseover", enlarge);

function clickNick() {
  console.log(nick);
  nick.innerHTML = "hello there, gentleman"

}

// function enlarge() {
//   nick.font
// }
