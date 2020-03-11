var b = document.querySelector('body');
var m = document.querySelector('body > div.tp-modal');
var o = document.querySelector('body > div.tp-backdrop.tp-active');
m.parentNode.removeChild(m);
o.parentNode.removeChild(o);
b.classList.remove('tp-modal-open');

// alert('Hello from your Chrome extension!');
