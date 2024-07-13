/**
 * A function that simulates sending an email.
 *
 * @param {string} to - The recipient email address.
 * @param {string} message - The message content of the email.
 * @return {void} This function does not return anything.
 */
function sendEmail(to: string, message: string): void {
    // Simulação de envio de e-mail
    console.log(`Email enviado para ${to}: ${message}`);
  }
  
  export { sendEmail };
  