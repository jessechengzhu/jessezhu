$(function () {
  function onMenuStateInputChange() {
    if ($("#menu-state-input").get(0).checked) {
      $("body").css("overflow-y", "hidden");
    } else {
      $("body").css("overflow-y", "auto");
    }
  }

  $("#menu-state-input").change(onMenuStateInputChange)

  $("#globalnav .nav-list .nav-link").click(function () {
    $("#menu-state-input").get(0).checked = false;
    onMenuStateInputChange();
  })

})