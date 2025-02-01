export function validateCPF(cpf: string): boolean {
    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D/g, "");
  
    // Verifica se o CPF possui 11 caracteres
    if (cpf.length !== 11) return false;
  
    // Cálculo do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = sum % 11;
    let firstCheckDigit = remainder < 2 ? 0 : 11 - remainder;
  
    // Cálculo do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = sum % 11;
    let secondCheckDigit = remainder < 2 ? 0 : 11 - remainder;
  
    // Verifica se os dígitos calculados coincidem com os fornecidos
    return parseInt(cpf.charAt(9)) === firstCheckDigit && parseInt(cpf.charAt(10)) === secondCheckDigit;
  }
  