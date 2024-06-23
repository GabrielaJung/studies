function gerarSenhaOtaku() {
    const caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^?';
    const senhasComuns = ['123', 'abc', 'def', 'password', 'qwer', 'asdf', 'zxcv', 'azer'];
  
    const senhaOtaku = () => {
      let senha = '';
  
      // Gera uma senha aleatória de tamanho entre 8 e 25
      const tamanhoSenha = Math.floor(Math.random() * (25 - 8 + 1)) + 8;
  
      while (senha.length < tamanhoSenha) {
        // Adiciona um caractere aleatório da lista de caracteres permitidos
        senha += caracteresPermitidos.charAt(Math.floor(Math.random() * caracteresPermitidos.length));
      }
  
      // Verifica se a senha contém no máximo 4 letras ou números consecutivos
      while (/([a-zA-Z0-9])\1{3,}/.test(senha)) {
        senha = senha.split('').sort(() => Math.random() - 0.5).join('');
      }
  
      // Verifica se a senha não está na lista de senhas comuns
      if (senhasComuns.includes(senha)) {
        return senhaOtaku();
      }
  
      return senha;
    };
  
    const senhasOtakus = [];
    for (let i = 0; i < 100; i++) {
      senhasOtakus.push(senhaOtaku());
    }
  
    return senhasOtakus;
  }
  
  const senhasGeradas = gerarSenhaOtaku();
  console.log(senhasGeradas);