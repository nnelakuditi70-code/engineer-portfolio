// small UI helpers: menu toggle, year filling, mailto fallback, basic form validation
document.addEventListener('DOMContentLoaded', function(){
  // year
  var y = new Date().getFullYear();
  var els = document.querySelectorAll('#year, #year2, #year3');
  els.forEach(function(e){ e.textContent = y; });

  // mobile nav
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  toggle && toggle.addEventListener('click', function(){
    if (!nav) {
      // fallback: find first nav
      nav = document.querySelector('.nav');
    }
    if (!nav) return;
    nav.style.display = (nav.style.display === 'flex' || nav.style.display === 'block') ? 'none' : 'flex';
  });

  // mailto fallback button on contact page
  var openMailBtn = document.getElementById('send-mail');
  if (openMailBtn){
    openMailBtn.addEventListener('click', function(){
      var subject = encodeURIComponent('Opportunity / Collaboration');
      var body = encodeURIComponent('Hi Navya,\n\nI would like to discuss...');
      window.location.href = 'mailto:navyanelakuditi@gmail.com?subject='+subject+'&body='+body;
    });
  }

  // Basic client-side form validation feedback
  var form = document.getElementById('contact-form');
  if (form){
    form.addEventListener('submit', function(ev){
      var name = form.querySelector('input[name="name"]');
      var email = form.querySelector('input[name="email"]');
      var message = form.querySelector('textarea[name="message"]');
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()){
        ev.preventDefault();
        alert('Please fill name, email and message fields before sending.');
      }
      // If using Formspree set your endpoint in the form action. If you don't have it, the mailto fallback button is provided.
    });
  }
});
