/* async function checkLogin() {
        const data = {
            email: userEmail,
            password: userPassword
        }

        fetch(`http://${ip}:3333/login-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    //console.log(response)
                    return response.json().then(err => { // Tenta ler o corpo JSON de erro
                        err.status = response.status
                        throw err; // Retorna o erro com o corpo JSON
                    });
                }
                return response.json();
            })
            .then((data) => {
                console.log("Sucesso conexão: ", Object.entries(data), 'usuário criado');
                // Após a resposta de sucesso do servidor, redirecionar o usuário        
                setIsSignedIn(true);
            })
            .catch((error) => {
                console.error(Object.entries(error))
                console.error(`Erro: Request Status Error: ${error.status}, message: ${error.message}`);
                setInsightPassword(true)
                setErrorPassword(true)
            })
} */

            /* fetch(`http://192.168.0.107:3333/generate-qr`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: selectedLink!.url }),
        })
            .then((response) => {
                if (!response.ok) {
                    console.log(response)
                    return response.json().then(err => { // Tenta ler o corpo JSON de erro
                        err.status = response.status
                        throw err; // Retorna o erro com o corpo JSON
                    });
                }
                return response.json();
            })
            .then((data) => {
                console.log(Object.entries(data));
                setResponseApiQRCode(data)
            })
            .catch((error) => {
                console.error(error)
                
                  Alert.alert("Erro", "Não foi possível conectar a Api do QR Code.");
            })
 */