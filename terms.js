document.addEventListener('DOMContentLoaded', () => {
    const termsContent = document.getElementById('terms-content');
    const toggleBtn = document.getElementById('toggle-btn');
  
    if (!termsContent || !toggleBtn) {
      console.warn('Required DOM elements not found.');
      return;
    }
  
    let wasVisible = !termsContent.classList.contains('hidden');
  
    const observer = new MutationObserver(() => {
      const isVisible = !termsContent.classList.contains('hidden');
  
      if (isVisible && !wasVisible) {
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        }, 100);
      }
  
      if (!isVisible && wasVisible) {
        toggleBtn.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
      }
  
      wasVisible = isVisible;
    });
  
    observer.observe(termsContent, {
      attributes: true,
      attributeFilter: ['class']
    });
  });
  