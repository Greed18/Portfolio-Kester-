const faders = document.querySelectorAll('.project-list li');

const appearOptions = {
  threshold: 0.2,   // trigger when 20% visible
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('show');
      appearOnScroll.unobserve(entry.target); // only animate once
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
