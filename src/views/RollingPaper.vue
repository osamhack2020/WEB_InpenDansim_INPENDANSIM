<template>
    <div class="rolling-paper">
    rolling paper page
    <router-link to="/write/send">보내기</router-link>
    <input type="text" id="inputField" style="width:200px">
    <button onclick="copyText()">복사하기</button>
    <br><br>
    <p><input type="text" style="width:200px"></p>
	  </div>
</template>

<script>
  var copyText = function(){
   var textField = document.getElementById("inputField");
   textField.select();
   document.execCommand('copy');
 }
</script>

<style>

</style>
