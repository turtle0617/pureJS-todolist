
window.onload=function(){
  document.getElementById("user_text").addEventListener("keydown", function(key) {
    // console.log(e);
    if(key.keyCode==13){
      submit_btn();
    }
  });
}


function submit_btn() {
  let get_user_text = document.getElementById("user_text").value;
  //防止空白及去空白
  if (get_user_text.trim().length != 0) {
    let new_li = document.createElement("li"),
        new_p=document.createElement("p"),
        new_input=document.createElement("input"),
        modify_btn=document.createElement("button"),
        delete_btn=document.createElement("button");
        // modify_btn = `<button class=modify_btn onclick="modify_btn(this)">modify</button>`,
        // delete_btn = `<button class=delete_btn onclick="delete_btn(this)">delete</button>`;
    new_li.className = "list_child";


    //add html list input value and keydown event
    new_input.className="html_list"
    new_input.addEventListener("keydown",function(key){
      if(key.keyCode==13){
        // console.log("modify_confirm check")
        modify_confirm(modify_btn,new_input,new_p);
      }
    });

    new_p.className="html_p";
    new_p.innerHTML=get_user_text;
    new_p.style.textDecoration="none";
    new_p.addEventListener("click",function(){
      Strikethrough(new_p);
    });

    //add html modify button and click event
    modify_btn.className="html_modify_btn";
    modify_btn.innerHTML="modify";
    modify_btn.type = "button";
    modify_btn.addEventListener("click",function (){
      modify_btn_fun(modify_btn,new_input,new_p);
    });

    //add html delete button and click event
    delete_btn.className="html_delete_btn";
    delete_btn.innerHTML="Delete";
    delete_btn.type = "button";
    delete_btn.addEventListener("click",function (){
      delete_btn_fun(delete_btn);
    });

    new_input.value=get_user_text;
    new_input.style.display="none"

    new_li.appendChild(new_p);
    new_li.appendChild(new_input);
    new_li.appendChild(delete_btn);
    new_li.appendChild(modify_btn);

    document.getElementById('list').appendChild(new_li);
    document.getElementById("user_text").value="";

    // console.log(get_user_text.trim());
  } else {
    alert("不要空白");
  }
}

function delete_btn_fun(btn) {
  let get_ul_tag = document.getElementById('list');
  // let get_li = document.querySelector(".list_child");
  get_ul_tag.removeChild(btn.parentElement);
  // console.log(btn.parentElement);
}

function modify_btn_fun(btn,new_input,new_p){
  new_p.style.display="none";
  new_input.style.display="block";
  btn.style.background="gray";
  //console.log(btn);
}

function modify_confirm(modify_btn,new_input,new_p){
  new_p.style.display="block";
  new_p.innerHTML=new_input.value;
  new_input.style.display="none";
  modify_btn.style.background="#FFC200";
}

function Strikethrough(new_p){
  // console.log(new_p.style.textDecoration);
  if(new_p.style.textDecoration=="none"){
    new_p.style.textDecoration="line-through";
  }else if(new_p.style.textDecoration=="line-through"){
    new_p.style.textDecoration="none";
  }
}
