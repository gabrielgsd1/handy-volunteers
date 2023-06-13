# HandyVolunteers - Front-end

Para rodar o front-end, é necessário possuir o NodeJS instalado na máquina.

Ao pegar o repositório, vá ao diretório do projeto e execute o seguinte comando (para instalar as dependências)

```bash
npm install
```

Em seguinda, já é possível executar o projeto.

```bash
npm run dev
```

Porém, para que todas as partes do site estejam funcionais, é necessário executar o back-end do projeto
simultaneamente

Vá até o link do [Back-end HandyVolunteers](https://github.com/gabrielgsd1/api-handy-volunteers) para clonar o repositório.


## Variáveis de ambiente

Por medidas de praticidade e segurança, uma variável de ambiente foi criada para apontar para a API, porém, para configurar, é bem simples. 

Na RAIZ do projeto (onde há as pastas /src, /public, /node_modules), crie um arquivo chamado ".env". Em seguinda, dentro dele, cole o seguinte valor

```
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

O front-end se encontrará no endereço [localhost na porta 3000 (localhost:3000)](http://localhost:3000).

Ah! Caso queira testar o ambiente de produção, basta clicar [neste link](https://preeminent-crepe-0fa736.netlify.app/).

### Observação para o ambiente de produção

Como o back-end está hospedado de graça na plataforma Render, podem haver tempos de resposta maiores do que o esperado, então, caso em alguma rota apareça o erro de "functio crash", é preciso apenas voltar e tentar a mesma rota novamente