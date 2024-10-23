// Configurações do Backendless
Backendless.initApp("YOUR_APP_ID", "YOUR_API_KEY");

// Cadastro do Candidato
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const candidato = {
        nome: nome,
        email: email,
        senha: senha
    };

    Backendless.Data.of("Candidatos").save(candidato)
        .then(() => {
            alert('Candidato cadastrado com sucesso!');
            window.location.href = "login-candidato.html"; // Redireciona para login do candidato
        })
        .catch(error => {
            console.error("Erro ao cadastrar candidato: ", error);
        });
});

// Login do Candidato
document.getElementById('loginCandidatoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('emailCandidato').value;
    const senha = document.getElementById('senhaCandidato').value;

    Backendless.UserService.login(email, senha, true)
        .then(user => {
            alert('Login bem-sucedido como candidato!');
            // Redirecionar para a página do candidato
            // window.location.href = "pagina-candidato.html"; // Criar essa página
        })
        .catch(error => {
            console.error("Erro no login do candidato: ", error);
        });
});

// Login do Administrador
document.getElementById('loginAdminForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuarioAdmin').value;
    const senha = document.getElementById('senhaAdmin').value;

    if (usuario === 'admin' && senha === '123') {
        alert('Login bem-sucedido como administrador!');
        // Redirecionar para a página do admin
        // window.location.href = "pagina-admin.html"; // Criar essa página
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
