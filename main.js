
// Simple JS for contact form to open WhatsApp or mailto with form content
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('orderForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = encodeURIComponent(document.getElementById('name').value || 'Customer');
      const company = encodeURIComponent(document.getElementById('company').value || '');
      const qty = encodeURIComponent(document.getElementById('qty').value || '1');
      const msg = encodeURIComponent(document.getElementById('message').value + ' ' + qty);
      const text = `Name:%20${name}%0ACompany:%20${company}%0AQuantity:%20${qty}%0AMessage:%20${msg}`;
      // open WhatsApp chat
      const wa = `https://wa.me/971564637861?text=${text}`;
      window.open(wa, '_blank');
    });
  }
  const emailBtn = document.getElementById('emailBtn');
  if(emailBtn){
    emailBtn.addEventListener('click', function(){
      const name = encodeURIComponent(document.getElementById('name').value || 'Customer');
      const company = encodeURIComponent(document.getElementById('company').value || '');
      const qty = encodeURIComponent(document.getElementById('qty').value || '1');
      const msg = encodeURIComponent(document.getElementById('message').value + ' ' + qty);
      const subject = encodeURIComponent('Order Inquiry - Awwal Shaay');
      const body = `Name:%20${name}%0ACompany:%20${company}%0AQuantity:%20${qty}%0AMessage:%20${msg}`;
      window.location.href = `mailto:info@awwalshaay.com?subject=${subject}&body=${body}`;
    });
  }
});
