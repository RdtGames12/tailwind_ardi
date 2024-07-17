window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const ToTop = document.querySelector("#to-top");
    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
      ToTop.classList.remove("hidden");
      ToTop.classList.add("flex");
    } else {
      header.classList.remove("navbar-fixed");
      ToTop.classList.remove("flex");
      ToTop.classList.add("hidden");
    }
  };