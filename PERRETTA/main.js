let source = $("#text").text();
let hl;

$("input").keyup(function() {
  $("#text").text(source);
  hl = $("input").val();
  $("#text").html((_, html) => {
   return html.split(hl).join("<span>" + hl + "</span>");
  });
})
