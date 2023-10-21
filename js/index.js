var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

function toggle(obj) {
    var obj=document.getElementById(btnPop);
    if (obj.style.display == "block") obj.style.display = "none";
    else obj.style.display = "block";
}