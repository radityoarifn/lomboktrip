document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const pesan = document.getElementById("pesan").value;

  const waNumber = "6281775091158";
  const text = `Halo, saya ${nama}. Saya ingin booking tour Lombok pada tanggal ${tanggal}. ${pesan}`;

  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, "_blank");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({behavior: "smooth"});
  });
});

const lazyImages = document.querySelectorAll(".lazy");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.onload = () => img.classList.add("loaded");
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => observer.observe(img));

 document.querySelectorAll('.wa-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('WA Package Clicked:', btn.innerText);
    });
  });