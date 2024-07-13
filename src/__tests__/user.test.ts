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
    expect(result.data?.email).toBe('test@example.com');
    expect(result.code).toBe(201);
  });

  it('should verify if user is saved on database', () => {
    registerUser({ name: 'Test', email: 'test@example.com', password: 'password' });
    expect(users).toHaveLength(1);
  });
});
