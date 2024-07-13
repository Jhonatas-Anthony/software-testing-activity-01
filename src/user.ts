interface User {
  name: string;
  email: string;
  password: string;
}

interface Return { 
  status: string;
  message: string;
  code: number;
  data?: User;
}

const users: User[] = [];

/**
 * Register a user with the provided information.
 *
 * @param {User} user - The user object containing name, email, and password.
 * @return {Return} The status of the registration along with a message and code.
 */
function registerUser(user: User): Return {
  if (!user.name) {
    return {
      status: 'error',
      message: 'Nome é obrigatório.',
      code: 400
    }
  }
  if (!user.email) {
    return {
      status: 'error',
      message: 'E-mail é obrigatório.',
      code: 400
    }
  }
  if (!user.password) {
    return {
      status: 'error',
      message: 'Senha é obrigatória.',
      code: 400 
    }
  }
  if (users.find(u => u.email === user.email)) {
    return {
      status: 'error',
      message: 'E-mail já está em uso.',
      code: 409
    }
  }
  users.push(user);
  return {
    status: 'success',
    message: 'Usuário cadastrado com sucesso.',
    code: 201,
    data: user
  }
}

export { User, users, registerUser };
