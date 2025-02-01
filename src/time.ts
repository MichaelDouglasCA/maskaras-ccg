export const maskTime = (value: string): string => {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{2})(\d{2})/, '$1:$2'); // Adiciona o ":" entre as horas e os minutos
  };
  