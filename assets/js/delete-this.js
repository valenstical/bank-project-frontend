$(".scroll").click(function(event) {
  event.preventDefault();
  $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
});

$('[data-toggle="tooltip"]').tooltip();

$("form.register").submit(function(e) {
  e.preventDefault();
  location.assign("members/schools.html");
});

function toggleMenu() {
  $("main").toggleClass("hidden-menu");
}

function hideMenus() {
  $("main")
    .removeClass("hidden-menu")
    .removeClass("hidden-receipt");
}

$(".table .btn").click(function() {
  $("main").addClass("hidden-receipt");
});

$(".receipt-panel .btn-rounded").click(function() {
  $("main").removeClass("hidden-receipt");
});
