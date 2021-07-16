Para iniciar o projeto deve estar instalado em sua maquina o knex, postgres e o mongo db.

Instale as dependencia (um de cada vez) das pastas backend e frontend utilizando "npm i".

No prompt de comando inicie o mongodb com "mongod".

Em outra aba do prompt de comando, navegue até Artigo\backend e utilize "psql -U postgres",senha "123456", para acessar o banco onde será armazenado o cadastro dos usuarios.

Pelo CMD navegue até as pastas backend e frontend. Inicie cada um deles utilizando um comando, no backend "npm start" e para o frontend utilize "npm run serve -- --port 8081".

Agora vá ate a barra de pesquisa do seu navegador e use a url "localhost:8081".

Realize um cadastro, para setar seu usuario como admin, basta acessar o banco de dados "artigo" no postgres. 
Utilize o comando "\l" para confirmar se o banco "artigo" está presente, logo após utilize "\c artigo;" para acessa-lo.
"select * from users;" para verificar os usuarios cadastrados.
use o comando "update users set admin = true where id= seu id aqui;" para setar o administrador da conta.

Faça o login normalmente.






