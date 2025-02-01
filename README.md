```md
# mask-utils

🚀 Biblioteca de máscaras para JavaScript e TypeScript, ideal para formatação de números, datas, CPF, CNPJ, telefones e muito mais.

## 📦 Instalação

Você pode instalar o pacote via **npm** ou **yarn**:

```sh
npm install mask-utils
```

ou

```sh
yarn add mask-utils
```

## 🚀 Uso

### Importação

#### JavaScript (CommonJS)
```js
const { maskCPF, maskCNPJ, maskPhone } = require('mask-utils');
```

#### TypeScript (ES Modules)
```ts
import { maskCPF, maskCNPJ, maskPhone } from 'mask-utils';
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

#### 📌 Máscara para Data (DD/MM/YYYY)
```js
maskDate("20250201"); // Saída: "01/02/2025"
```

## 📚 Lista de Máscaras Disponíveis

| Função         | Descrição                           | Exemplo de Entrada | Exemplo de Saída    |
|---------------|-----------------------------------|-------------------|--------------------|
| `maskCPF`     | Aplica máscara de CPF            | `"12345678900"`   | `"123.456.789-00"` |
| `maskCNPJ`    | Aplica máscara de CNPJ           | `"12345678000195"`| `"12.345.678/0001-95"` |
| `maskPhone`   | Aplica máscara de telefone       | `"62987654321"`   | `"(62) 98765-4321"` |
| `maskDate`    | Aplica máscara de data (DD/MM/YYYY) | `"20250201"`   | `"01/02/2025"` |

## 💻 Desenvolvimento

Se quiser contribuir com melhorias ou adicionar novas máscaras, siga os passos:

1. Clone o repositório:
   ```sh
   git clone https://github.com/MichaelDouglasCA/mask-utils.git
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

Desenvolvido por [CCG Studios Tec](https://github.com/MichaelDouglasCA) 🚀
```