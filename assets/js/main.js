
import { subscribeToHellfireClube } from './data/hellfire-club.js'

// --- PAGE LOADER ---
window.onload = function() {
  const loaderWrapper = document.getElementById('loader-wrapper');
  loaderWrapper.style.opacity = '0';
  loaderWrapper.style.visibility = 'hidden';
  document.body.classList.remove('loading');
};

document.addEventListener('DOMContentLoaded', () => {
  const txtName = document.getElementById('name');
  const txtEmail = document.getElementById('email');
  const txtLevel = document.getElementById('level');
  const txtCharacter = document.getElementById('character');
  const btnSubscribe = document.getElementById('btnSubscribe');
  const switchThemeButton = document.getElementById('switch-theme-button');
  const formMessage = document.getElementById('form-message');
  const staticOverlay = document.getElementById('static-overlay');
  
  function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    
    const audio = document.getElementById('music');
    audio.volume = 0.2; // Set volume consistently

    const theme = document.body.classList[0];
    
    if (theme === 'light-theme') {
      audio.src = 'assets/musics/normal-world.mpeg';
    } else {
      audio.src = 'assets/musics/inverted-world.mpeg';
    }
    
    // Aguarda a nova fonte de áudio estar pronta antes de tocar.
    // O evento 'loadeddata' é mais confiável para este propósito.
    audio.addEventListener('loadeddata', () => audio.play(), { once: true });
  }
  
  // --- THEME SWITCHER ---
  if (switchThemeButton) {
    switchThemeButton.addEventListener('click', () => {
      // 1. Activate the static effect
      staticOverlay.classList.add('active');

      const isLightTheme = document.body.classList.contains('light-theme');
      switchTheme();
      if (isLightTheme) {
        switchThemeButton.textContent = 'Voltar ao Mundo Normal';
      } else {
        switchThemeButton.textContent = 'Inverter Mundos';
      }
      // Desativa o efeito estático após um pequeno atraso
      setTimeout(() => {
        staticOverlay.classList.remove('active');
      }, 700);
    });
  }
  
  // --- FORM SUBMISSION ---
  if (btnSubscribe) {
    btnSubscribe.addEventListener('click', async () => {
      const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
      };
      
      // Validação básica do lado do cliente
      if (!subscription.name || !subscription.email || !subscription.level || !subscription.character) {
        displayMessage('Por favor, preencha todos os campos!', 'error');
        return;
      }
      
      try {
        const subscriptionId = await subscribeToHellfireClube(subscription);
        displayMessage(`Inscrição ${subscriptionId} realizada com sucesso!`, 'success');
        
        // Limpa o formulário em caso de sucesso
        txtName.value = '';
        txtEmail.value = '';
        txtLevel.value = '';
        txtCharacter.value = '';
      } catch (error) {
        displayMessage('Ocorreu um erro. Tente novamente.', 'error');
        console.error('Error subscribing:', error);
      }
    });
  }

  function displayMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type;
    setTimeout(() => {
      formMessage.className = '';
    }, 5000);
  }

  // --- SCROLL-TRIGGERED ANIMATIONS ---
  const sections = document.querySelectorAll('.hidden-section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible-section');
        entry.target.classList.remove('hidden-section');
        
        // Para de observar o elemento para a animação não ser repetida
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }); // Aciona quando 10% da seção está visível

  sections.forEach(section => {
    observer.observe(section);
  });
});
