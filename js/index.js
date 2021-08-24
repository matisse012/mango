let login = new Vue({
el:"#vue_login",
data:{
  mi:"",
  mp:""
},
methods:{
  login_frm:function(){
    if(!this.mi){
     alert("아이디를 입력하세요")
    }
    else if(!this.mp){
     alert("패스워드를 입력하세요"); 
    }
    else{
     frm.action="http://mangsteen977.dothome.co.kr";
     frm.submit();
    }
  }
},
computed:{
}
});
