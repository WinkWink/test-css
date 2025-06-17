  const termsContent = document.getElementById('terms-content');
  const toggleBtn = document.getElementById('toggle-btn');

  let wasVisible = !termsContent.classList.contains('hidden');

  const observer = new MutationObserver(() => {
    const isVisible = !termsContent.classList.contains('hidden');

    if (isVisible && !wasVisible) {
      // Section just became visible
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }

    if (!isVisible && wasVisible) {
      // Section is about to be hidden — scroll before layout collapses
      toggleBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
    }

    wasVisible = isVisible; // Update for next mutation
  });

  observer.observe(termsContent, {
    attributes: true,
    attributeFilter: ['class']
  });