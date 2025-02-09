document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signup-form');
  const togglePassword = document.getElementById('toggle-password');

  const passwordInput = document.getElementById('password');
  togglePassword.addEventListener('click', () => {
    // Alterna entre 'password' e 'text'
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    // Alterna o ícone
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
  });

  if (!form) {
    console.error('Erro: O formulário não foi encontrado no DOM.');
    return;
  }

  form.addEventListener('submit', (e) => {
    console.log('Evento de submit acionado!');

    e.preventDefault();

    // Limpar mensagens de erro
    document.querySelectorAll('.error').forEach((el) => (el.textContent = ''));

    let isValid = true;

    // Validação do nome
    const firstName = document.getElementById('first-name');
    if (firstName.value.trim() === '') {
      document.getElementById('first-name-error').textContent =
        'O nome é obrigatório.';
      isValid = false;
    }

    // Validação do sobrenome
    const lastName = document.getElementById('last-name');
    if (lastName.value.trim() === '') {
      document.getElementById('last-name-error').textContent =
        'O sobrenome é obrigatório.';
      isValid = false;
    }

    // Validação do email
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirm-email');
    if (email.value.trim() === '') {
      document.getElementById('email-error').textContent =
        'O e-mail é obrigatório.';
      isValid = false;
    }
    if (confirmEmail.value.trim() === '') {
      document.getElementById('confirm-email-error').textContent =
        'A confirmação do e-mail é obrigatório.';
      isValid = false;
    } else if (email.value !== confirmEmail.value) {
      document.getElementById('confirm-email-error').textContent =
        'Os e-mails não coincidem.';
      isValid = false;
    }

    // Validação da senha
    const password = document.getElementById('password');
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
    if (!passwordRegex.test(password.value)) {
      document.getElementById('password-error').textContent =
        'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um símbolo.';
      isValid = false;
    }

    // Se for válido, exibe uma mensagem de sucesso
    if (isValid) {
      alert('Cadastro realizado com sucesso!');
      form.reset();
    }
  });
});
