const btnUp = {
  el: document.querySelector('.ontop'),
  show() {
    this.el.classList.remove('ontop_hide');
  },
  hide() {
    this.el.classList.add('ontop_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.ontop').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();
