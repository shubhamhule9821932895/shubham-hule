//   typed.js initiator

if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }


  //      data animation on scroll effect initiator
  AOS.init({
    duration: 800,
    easing: "ease-in-out"
  });


  //       tilt js 
  VanillaTilt.init(document.querySelector(".content-box"), {
		max: 40,
		speed: 100
	});
	
	//It also supports NodeList
	VanillaTilt.init(document.querySelectorAll(".content-box"));

