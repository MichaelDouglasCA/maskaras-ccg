export const maskRG = (value: string): string => {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3'); // Adiciona os pontos
  };
  