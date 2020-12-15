(function () {
  'use strict';

  const handlePrivacyPolicyNoticeDismissal = () => {
    const storage = sessionStorage; // TODO : You may want to delete this line and uncomment the next line when your privacy policy is complete. Why? Because the deployed template should not use localStorage since it lacks a privacy policy.
    // const storage = true ? sessionStorage : localStorage
    const dismissedPrivacyPolicyNotice = storage.getItem(
      'dismissedPrivacyPolicyNotice'
    );
    const privacyNotice = document.getElementById('privacy-notice');

    if (!!dismissedPrivacyPolicyNotice) privacyNotice.classList.add('hidden');

    document
      .getElementById('privacy-notice-button-container')
      .addEventListener('click', () => {
        storage.setItem('dismissedPrivacyPolicyNotice', 'true');
        privacyNotice.classList.add('hidden');
      });
  };

  // Adapted from https://codepen.io/wilbo/pen/xRVLOj by Wilbert Schepenaar.

  const handleCodeCopying = () => {
    const preTags = document.getElementsByTagName('pre');

    const isPrismClass = (preTag) =>
      preTag.className.substring(0, 8) === 'language';

    if (preTags !== null) {
      for (let i = 0; i < preTags.length; i++) {
        if (!isPrismClass(preTags[i])) continue;
        preTags[
          i
        ].innerHTML = `<div class="copy">copy</div><code class="${preTags[i].className}">${preTags[i].innerHTML}</code>`;
      }
    }

    const clipboard = new ClipboardJS('.copy', {
      target: (trigger) => trigger.nextElementSibling,
    });

    clipboard.on('success', (event) => {
      event.trigger.textContent = 'copied!';
      setTimeout(() => {
        event.clearSelection();
        event.trigger.textContent = 'copy';
      }, 2000);
    });
  };

  console.log('Dev mode is currently enabled.');

  handlePrivacyPolicyNoticeDismissal();
  handleCodeCopying();

}());
