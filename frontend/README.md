# Fincheck Frontend

Sistema de controle financeiro pessoal desenvolvido com React, TypeScript e Vite.

## 🚀 Tecnologias

- **React 18.3** - Biblioteca para construção de interfaces
- **TypeScript 5.8** - Superset JavaScript com tipagem estática
- **Vite 7.0** - Build tool e dev server
- **TailwindCSS 3** - Framework CSS utility-first
- **React Router DOM 6** - Roteamento client-side
- **React Query 4** - Gerenciamento de estado assíncrono
- **React Hook Form 7** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Axios** - Cliente HTTP
- **Radix UI** - Componentes acessíveis headless
- **Vitest** - Framework de testes unitários
- **Testing Library** - Testes de componentes React

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Lógica de aplicação
│   ├── config/            # Configurações e constantes
│   ├── contexts/          # Contextos React (Auth, etc)
│   ├── hooks/             # Custom hooks
│   ├── services/          # Serviços de API
│   └── utils/             # Funções utilitárias
├── assets/                # Imagens e recursos estáticos
├── router/                # Configuração de rotas
├── view/                  # Camada de apresentação
│   ├── components/        # Componentes reutilizáveis
│   ├── layouts/           # Layouts de página
│   ├── pages/             # Páginas da aplicação
│   └── styles/            # Estilos globais
└── test/                  # Configuração de testes
```

## 🛠️ Pré-requisitos

- Node.js 18+
- Yarn 1.22+

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone <repository-url>
cd fincheck/frontend
```

2. Instale as dependências:

```bash
yarn install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure:

```env
VITE_API_URL=http://localhost:3000
```

## 🚀 Executando o Projeto

### Modo Desenvolvimento

```bash
yarn dev
```

Abre automaticamente em `http://localhost:5173`

### Build de Produção

```bash
yarn build
```

### Preview da Build

```bash
yarn preview
```

## 🧪 Testes

### Executar todos os testes

```bash
yarn test
```

### Modo watch (desenvolvimento)

```bash
yarn test
# Pressione 'w' para ver opções de watch mode
```

### Interface visual de testes

```bash
yarn test:ui
```

### Coverage

```bash
yarn test:coverage
```

## 📝 Convenções de Código

### Componentes

- Use `PascalCase` para nomes de componentes
- Prefira function components com hooks
- Exporte componentes como named exports

```typescript
export const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};
```

### Hooks

- Prefixe custom hooks com `use`
- Coloque em `src/app/hooks/`

```typescript
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
```

### Services

- Organize por domínio (auth, users, transactions, etc)
- Use axios instance configurada em `http-client.ts`

```typescript
export const authService = {
  signin: async (data: SigninParams) => {
    const response = await httpClient.post("/auth/signin", data);
    return response.data;
  },
};
```

### Utilitários

- Funções puras em `src/app/utils/`
- Sempre com testes unitários

## 🎨 Estilização

O projeto usa TailwindCSS com classes utilitárias. Para classes condicionais, use o helper `cn`:

```typescript
import { cn } from "@/app/utils/cn";

<div className={cn("base-class", isActive && "active-class", className)} />;
```

## 🔐 Autenticação

O sistema usa JWT Bearer tokens armazenados no localStorage. O interceptor do axios adiciona automaticamente o token em todas as requisições:

```typescript
// Configurado em src/app/services/http-client.ts
httpClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
```

## 📦 Scripts Disponíveis

| Script               | Descrição                          |
| -------------------- | ---------------------------------- |
| `yarn dev`           | Inicia servidor de desenvolvimento |
| `yarn build`         | Cria build de produção             |
| `yarn preview`       | Preview da build de produção       |
| `yarn lint`          | Executa ESLint                     |
| `yarn test`          | Executa testes em modo watch       |
| `yarn test:ui`       | Abre interface visual de testes    |
| `yarn test:coverage` | Gera relatório de cobertura        |

## 🐛 Troubleshooting

### Erro de dependências

```bash
yarn cache clean
yarn install
```

### Erro de tipos TypeScript

```bash
rm -rf node_modules/.vite
yarn dev
```

### Porta já em uso

Edite `vite.config.ts` e altere a porta:

```typescript
export default defineConfig({
  server: {
    port: 3001,
  },
});
```

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
2. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
3. Push para a branch (`git push origin feature/nova-feature`)
4. Abra um Pull Request

### Padrão de Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Manutenção

## 📄 Licença

Este projeto está sob a licença MIT.
