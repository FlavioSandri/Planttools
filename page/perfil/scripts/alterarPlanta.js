export async function salvarAlterções(token, alteracoes) {
    console.log('Salvando alterações:', alteracoes);

    for (let alteracao of alteracoes) {
        const formData = new FormData();
        formData.append('foto', alteracao.foto);

        try {
            console.log('Enviando alteração para a planta ID:', alteracao.idPlanta);

            const r = await fetch(`http://localhost:3000/planttool/v1/plantaUsuario/alterarImagem/${alteracao.idPlanta}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            })

            if ( r.status === 200 ) return "Troca bem sucedida";
            if ( r.status === 500 ) throw new Error ("Erro no servidor");

        } catch (error) {
            console.error(alteracao.foto, error);
        }
    }
}