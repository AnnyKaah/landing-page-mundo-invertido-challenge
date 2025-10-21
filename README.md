
# Stranger Things - Landing Page "Mundo Invertido" 🔮

<p align="center"><img width="300" src="https://annykaah.github.io/landing-page-mundo-invertido-challenge/assets/images/banner/logo.svg"></p>

Projeto de uma landing page temática inspirada na série Stranger Things, desenvolvido como parte do bootcamp **"Ri Happy - Front-end do Zero #2"** da [Digital Innovation One (DIO)](https://dio.me/).

### ✨ [Veja o projeto ao vivo aqui!](https://annykaah.github.io/landing-page-mundo-invertido-challenge)

---

## 🎬 Sobre o Projeto

Esta é uma landing page interativa que simula a transição entre o "Mundo Normal" e o "Mundo Invertido" da série. O objetivo foi aplicar de forma prática os conceitos de **HTML5**, **CSS3** e **JavaScript** em um projeto criativo e visualmente atraente, explorando animações, manipulação do DOM e integração com serviços externos como o Firebase.

---

## 🚀 Funcionalidades

- **Tema Interativo**: Alterne entre o "Mundo Normal" e o "Mundo Invertido" com um clique, alterando completamente o visual da página.
- **Efeitos Visuais e Sonoros**:
  - Música de fundo que se adapta ao tema selecionado.
  - Efeito de "estática" na transição de temas.
  - Animações de texto com efeito "glitch".
- **Animações de Rolagem**: Elementos da página surgem com uma animação suave conforme o usuário rola a página.
- **Formulário de Inscrição**: Um formulário para "entrar no clube de D&D", com os dados sendo salvos em tempo real no **Firebase Firestore**.
- **Design Responsivo**: A página se adapta a diferentes tamanhos de tela, garantindo uma boa experiência em desktops e dispositivos móveis.
- **Tela de Carregamento**: Uma animação de loading é exibida enquanto os recursos da página são carregados.

---

## ️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **HTML5**: Estrutura semântica do site.
- **CSS3**: Estilização, temas, animações (`@keyframes`), efeitos visuais e responsividade (`@media`).
- **JavaScript (ES6+)**: Manipulação do DOM, interatividade, controle de áudio e lógica de animações.
- **Firebase**: Utilizado para armazenar as submissões do formulário no serviço **Firestore Database**.

---

## ⚙️ Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/AnnyKaah/landing-page-mundo-invertido-challenge
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd landing-page-mundo-invertido-challenge
   ```

3. **Configuração do Firebase:**
   - Crie um projeto no Firebase.
   - Na raiz do seu projeto Firebase, crie um aplicativo da Web e copie as credenciais de configuração.
   - Crie o arquivo `assets/js/data/config.js` e cole suas credenciais, como no exemplo abaixo:
     ```javascript
     // assets/js/data/config.js
     const firebaseConfig = {
       apiKey: "SUA_API_KEY",
       authDomain: "SEU_AUTH_DOMAIN",
       projectId: "SEU_PROJECT_ID",
       storageBucket: "SEU_STORAGE_BUCKET",
       messagingSenderId: "SEU_MESSAGING_SENDER_ID",
       appId: "SEU_APP_ID"
     };

     export default firebaseConfig;
     ```

4. **Abra o `index.html` no seu navegador** e explore a aplicação!

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
