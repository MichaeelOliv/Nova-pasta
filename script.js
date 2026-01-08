      document.getElementById('missionForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;

            if (username.length < 3) {
                alert('O nome de usuário deve ter pelo menos 3 caracteres.');
                return;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert('Por favor, insira um email válido.');
                return;
            }

            alert('Formulário enviado com sucesso!');
        });