

/* ================= 3D NEON PARTICLE BACKGROUND ================= */

const canvas = document.getElementById("particles");

if (canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let dots = [];

  for (let i = 0; i < 100; i++) {
    dots.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 3 + 1,
      r: Math.random() * 2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let d of dots) {
      d.y += d.z;
      d.x += Math.sin(d.z);

      if (d.y > canvas.height) d.y = 0;
      if (d.x > canvas.width) d.x = 0;

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);

      ctx.fillStyle = "rgba(0,255,229,0.6)";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#00ffe5";
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}


/* ================= CONTACT FORM FUNCTION ================= */

const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = form.querySelector("button");

    // change button state
    btn.innerText = "Sent ✓";
    btn.style.background = "#00ff88";

    // disable inputs
    form.querySelectorAll("input, textarea, button").forEach(el => {
      el.disabled = true;
    });

    // redirect after delay
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);

  });

}