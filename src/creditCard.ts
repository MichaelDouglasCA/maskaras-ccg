export const maskCreditCard = (value: string): string => {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4'); // Adiciona espaços entre os números
  };
  