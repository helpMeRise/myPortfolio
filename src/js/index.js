
if (window.innerWidth <= 1023) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          item.target.children[0].style.transform = 'translateY(0)';
        }
  
        if (!item.isIntersecting && item.intersectionRatio <= 0.5) {
          item.target.children[0].style.transform = 'translateY(100%)';
        }
      })
    },
    {
      rootMargin: '-250px 0px'
    }
  );
  
  const cards = document.querySelectorAll('.projects__item');
  cards.forEach(item => observer.observe(item));
}