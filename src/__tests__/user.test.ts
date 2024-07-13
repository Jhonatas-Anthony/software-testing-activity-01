import { registerUser, users } from '../user';

describe('User Registration', () => {
  beforeEach(() => {
    users.length = 0;
  });

  it('should not register user without name', () => {
    const result = registerUser({ name: '', email: 'test@example.com', password: 'password' });
    expect(result.status).toBe('error');
    expect(result.message).toBe('Nome é obrigatório.');
    expect(result.code).toBe(400);
  });

  it('should not register user without email', () => {
    const result = registerUser({ name: 'Test', email: '', password: 'password' });
    expect(result.status).toBe('error');
    expect(result.message).toBe('E-mail é obrigatório.');
    expect(result.code).toBe(400);
  });

  it('should not register user without password', () => {
    const result = registerUser({ name: 'Test', email: 'test@example.com', password: '' });
    expect(result.status).toBe('error');
    expect(result.message).toBe('Senha é obrigatória.');
    expect(result.code).toBe(400);
  });

  it('should not register user with existing email', () => {
    registerUser({ name: 'Test', email: 'test@example.com', password: 'password' });
    const result = registerUser({ name: 'Test2', email: 'test@example.com', password: 'password2' });
    expect(result.status).toBe('error');
    expect(result.message).toBe('E-mail já está em uso.');
    expect(result.code).toBe(409);
  });

  it('should register user with valid details', () => {
    const result = registerUser({ name: 'Test', email: 'test@example.com', password: 'password' });
    expect(result.status).toBe('success');
    expect(result.message).toBe('Usuário cadastrado com sucesso.');
    expect(result.data?.name).toBe('Test');
    expect(result.data?.email).toBe('test@example.com');
    expect(result.data?.password).toBe('password');
    expect(result.code).toBe(201);
  });

  it('should send an email when registering a user', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    registerUser({ name: 'Test', email: 'test@example.com', password: 'password' });
    expect(consoleSpy).toHaveBeenCalledWith('Email enviado para test@example.com: Bem-vindo ao sistema!');
    consoleSpy.mockRestore();
  });

  it('should verify if user is saved on database', () => {
    registerUser({ name: 'Test', email: 'test@example.com', password: 'password' });
    expect(users).toHaveLength(1);
    registerUser({ name: 'Test2', email: 'test2@example.com', password: 'password' });
    expect(users).toHaveLength(2);
  });

  // Verificar se o sistema permite o cadastro de um novo usuário com todos os campos obrigatórios preenchidos corretamente e um e-mail único e envia um e-mail para 0 e-mail cadastrado
  it('should verify if system allows a new user to register with all required fields and a valid email and send an email to the registered email', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    registerUser({ name: 'Test', email: 'test@example.com', password: 'password' });
    expect(consoleSpy).toHaveBeenCalledWith('Email enviado para test@example.com: Bem-vindo ao sistema!');
    expect(users).toHaveLength(1);
    consoleSpy.mockRestore();
  });
});
