document.addEventListener("DOMContentLoaded", function () {
  const particles = new Particles(window, document, {
    selector: '#particles-js',
    maxParticles: 80,
    color: '#ffffff',
    sizeVariations: 3,
    speed: 0.5,
    minDistance: 120,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 50
        }
      }
    ]
  });
});
