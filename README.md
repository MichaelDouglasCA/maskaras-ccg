
# mask-utils-ccg

🚀 Biblioteca de máscaras para JavaScript e TypeScript, ideal para formatação de números, datas, CPF, CNPJ, telefones e muito mais.

## 📦 Instalação

Você pode instalar o pacote via **npm** ou **yarn**:

### Usando npm:
```sh
npm install mask-utils-ccg
```

### Usando yarn:
```sh
yarn add mask-utils-ccg
```

## 🚀 Uso

### Importação

#### JavaScript (CommonJS)
```js
const { maskCPF, maskCNPJ, maskPhone, maskDate, maskCEP, maskRG, maskCreditCard, maskTime, validateCPF } = require('mask-utils-ccg');
```

#### TypeScript (ES Modules)
```ts
import { maskCPF, maskCNPJ, maskPhone, maskDate, maskCEP, maskRG, maskCreditCard, maskTime, validateCPF } from 'mask-utils-ccg';
```

### Exemplos de Uso

#### 📌 Máscara para CPF
```js
maskCPF("12345678900"); // Saída: "123.456.789-00"
```

#### 📌 Máscara para CNPJ
```js
maskCNPJ("12345678000195"); // Saída: "12.345.678/0001-95"
```

#### 📌 Máscara para Telefone
```js
maskPhone("62987654321"); // Saída: "(62) 98765-4321"
```

#### 📌 Máscara para CEP
```js
maskCEP("72840000"); // Saída: "72.840-000"
```

#### 📌 Máscara para RG
```js
maskRG("123456789"); // Saída: "12.345.678-9"
```

#### 📌 Máscara para Cartão de Crédito
```js
maskCreditCard("1234567812345678"); // Saída: "1234 5678 1234 5678"
```

#### 📌 Máscara para Data (DD/MM/YYYY)
```js
maskDate("20250201"); // Saída: "01/02/2025"
```

#### 📌 Máscara para Hora (HH:MM)
```js
maskTime("1530"); // Saída: "15:30"
```

#### 📌 Validação de CPF
```js
validateCPF("12345678900"); // Saída: false
validateCPF("123.456.789-09"); // Saída: true
```

## 📚 Lista de Máscaras e Funções Disponíveis

| Função            | Descrição                                | Exemplo de Entrada  | Exemplo de Saída      |
|-------------------|------------------------------------------|---------------------|-----------------------|
| `maskCPF`         | Aplica máscara de CPF                    | `"12345678900"`     | `"123.456.789-00"`    |
| `maskCNPJ`        | Aplica máscara de CNPJ                   | `"12345678000195"`  | `"12.345.678/0001-95"`|
| `maskPhone`       | Aplica máscara de telefone               | `"62987654321"`     | `"(62) 98765-4321"`   |
| `maskCEP`         | Aplica máscara de CEP                    | `"72840000"`        | `"72.840-000"`        |
| `maskRG`          | Aplica máscara de RG                     | `"123456789"`       | `"12.345.678-9"`      |
| `maskCreditCard`  | Aplica máscara de cartão de crédito      | `"1234567812345678"`| `"1234 5678 1234 5678"`|
| `maskDate`        | Aplica máscara de data (DD/MM/YYYY)      | `"20250201"`        | `"01/02/2025"`        |
| `maskTime`        | Aplica máscara de hora (HH:MM)           | `"1530"`            | `"15:30"`             |
| `validateCPF`     | Valida um CPF (verifica se é válido)     | `"12345678900"`     | `false`               |

## 💻 Desenvolvimento

Se quiser contribuir com melhorias ou adicionar novas máscaras, siga os passos abaixo:

1. Clone o repositório:
   ```sh
   git clone https://github.com/MichaelDouglasCA/mask-utils-ccg.git
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Faça as alterações e rode os testes:
   ```sh
   npm test
   ```

4. Crie um **Pull Request**.

## 📜 Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para usá-lo e contribuir! 😃

---

Desenvolvido por [Michael Douglas](https://github.com/MichaelDouglasCA) 🚀

---
