import { sendEmail } from '../email-service';

describe('Email Service', () => {
  it('should send an email', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sendEmail('test@example.com', 'Bem-vindo ao sistema!');
    expect(consoleSpy).toHaveBeenCalledWith('Email enviado para test@example.com: Bem-vindo ao sistema!');
    consoleSpy.mockRestore();
  });
});
