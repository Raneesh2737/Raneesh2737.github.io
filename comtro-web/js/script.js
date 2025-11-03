
  // Sections data
    const sections = [
      {
        title: "About Us",
        content: "Since 2018, <strong>Comtro</strong> has been redefining communication in schools, colleges, industries, and hospitals with smart, automated solutions. What started as an idea to replace manual bell ringing has grown into an innovative cloud-based system that saves time, effort and money while ensuring accuracy and punctuality.",
        label: "-Our Journey-"
      },
      {
        title: "About Us",
        content: '"<strong>Comtro</strong> helps schools save time and improve communication with smart automation tools.”',
        label: "-Our Mission-"
      },
      {
        title: "About Us",
        content: "We aim to become the leading provider of intelligent communication systems where every institution can manage announcements, alerts, and schedules seamlessly from anywhere, anytime. Our goal is to make automation accessible, user-friendly, and impactful for all.",
        label: "-Our Vision-"
      }
    ];

    let curr = 0;

    function showSection(idx) {
      $("#about-title").html(sections[idx].title);
      
      // Fade out content before updating
      $("#about-content, #about-label").removeClass("visible");
      setTimeout(function() {
        $("#about-content").html(sections[idx].content);
        $("#about-label").html(sections[idx].label);

        // Animate progress bar
        $("#progress-highlight").css("width", ((idx+1)/sections.length*100) + "%");

        // Fade in after update
        $("#about-content, #about-label").addClass("visible");
      }, 400);
    }

    $(function() {
      showSection(curr);

      setInterval(function() {
        curr = (curr + 1) % sections.length;
        showSection(curr);
      }, 4500); // Change slide every 4.5 seconds
    });

   $(document).ready(function() {
      const steps = [
        {
          title: "Quick & Secure Login",
          text: "Get instant access with a safe and seamless login experience.",
          image: "Assets/img/login-hiw.png"
        },
        {
          title: "Choose Where to Announce",
          text: "Easily target specific classrooms for your message.",
          image: "Assets/img/choose-clsrm.png"
        },
        {
          title: "Record or Select Message",
          text: "Record announcements or pick from your saved messages.",
          image: "Assets/img/record.png"
        },
        {
          title: "Schedule or Broadcast",
          text: "Plan ahead or make live announcements instantly.",
          image: "Assets/img/schedule.png"
        }
      ];

      let currentStep = 0;
      let autoSlide;

      function showStep(index) {
        const step = steps[index];
        $("#stepTitle").addClass("fade-text").text(step.title);
        $("#stepText").addClass("fade-text").text(step.text);
        $("#phoneImage").addClass("fade-text").attr("src", step.image);

        $(".step-btn").removeClass("active");
        $(`.step-btn[data-step=${index}]`).addClass("active");

        setTimeout(() => {
          $("#stepTitle, #stepText, #phoneImage").removeClass("fade-text");
        }, 800);
      }

      // Auto-slide every 5 seconds
      function startAutoSlide() {
        autoSlide = setInterval(function() {
          currentStep = (currentStep + 1) % steps.length;
          showStep(currentStep);
        }, 5000);
      }

      // Click navigation
      $(".step-btn").click(function() {
        clearInterval(autoSlide);
        currentStep = $(this).data("step");
        showStep(currentStep);
        startAutoSlide();
      });

      // Initialize
      showStep(currentStep);
      startAutoSlide();
    });

    // slick-carousel
$(document).ready(function(){
  $('.app-demo').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev custom-arrow left"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next custom-arrow right"><i class="fa-solid fa-chevron-right"></i></button>',
});

});

