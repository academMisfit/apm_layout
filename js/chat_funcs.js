$(document).ready(function(){
  $(".list-group-item.reply").click(()=>{
    // show panel with reply message
    $("div.reply-attachment").show();
    // put focus on the textarea
    $("textarea").focus();
  });
  //close reply attachment
  $("button.close").click(()=>{
    $("div.reply-attachment").toggle();
  });
});
