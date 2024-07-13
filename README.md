# Atividade Proposta

**Segue Descrição da Atividade proposta:**

Crie um teste unitário e resolva os seguintes requisitos:
- Acessar a página de cadastro de usuários.
- Preencher os campos obrigatórios (Nome, E-mail, Senha).
- Clicar no botão "Cadastrar".

Resultados Esperados:
- O sistema deve exibir uma mensagem de sucesso indicando que o usuário foi cadastrado com sucesso.
- O novo usuário deve ser registrado no banco de dados.
- O usuário deve receber um e-mail de confirmação, se aplicável.


## Teste Incremental para Cadastro de Usuários
### Primeira Iteração: Verificação de Campos Obrigatórios
- Objetivo: Verificar se o sistema não permite o cadastro sem todos os campos obrigatórios.

#### Passos:
1. Tentar cadastrar um usuário sem preencher o campo "Nome".
2. Tentar cadastrar um usuário sem preencher o campo "E-mail".
3. Tentar cadastrar um usuário sem preencher o campo "Senha".

Resultados Esperados:

O sistema deve exibir mensagens de erro indicando que os campos obrigatórios não foram preenchidos.

### Segunda Iteração: Verificação de E-mail Único
#### Objetivo: Verificar se o sistema não permite o cadastro com um e-mail já existente.

Passos:
1. Tentar cadastrar um usuário com um e-mail que já está registrado no sistema.

Resultados Esperados:
1. O sistema deve exibir uma mensagem de erro indicando que o e-mail já está em uso.

### Terceira Iteração: Verificação de Cadastro Completo
#### Objetivo: Verificar se o sistema permite o cadastro de um novo usuário com todos os campos obrigatórios preenchidos corretamente e um e-mail único.

Passos:
1. Preencher todos os campos obrigatórios corretamente.
2. Verificar no banco de dados se o novo usuário foi registrado.
3. Verificar se o usuário recebe um e-mail de confirmação, se aplicável.

Resultados Esperados:
- O sistema deve exibir uma mensagem de sucesso indicando que o usuário foi cadastrado com sucesso.
- O novo usuário deve ser registrado no banco de dados.
- O usuário deve receber um e-mail de confirmação, se aplicável.

---

Para rodar os testes: 

``` javascript
npm install
npm run test

```