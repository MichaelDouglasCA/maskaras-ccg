export const maskDate = (value: string): string => {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3'); // Adiciona a barra separadora
  };
  