# Documentação do Projeto - E-commerce CMS

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Requisitos](#requisitos)
3. [Arquitetura](#arquitetura)
4. [Estrutura de Pastas](#estrutura-de-pastas)
5. [Padrões de Código](#padrões-de-código)
6. [Fluxo de Dados](#fluxo-de-dados)
7. [Configuração e Execução](#configuração-e-execução)
8. [Guia de Implementação](#guia-de-implementação)

---

## 📖 Visão Geral

### Descrição do Projeto
Sistema de gerenciamento de conteúdo (CMS) para e-commerce, desenvolvido para administração de produtos, categorias, marcas, pedidos e clientes.

### Objetivo
Fornecer uma interface intuitiva e eficiente para gerenciamento de dados de um sistema de e-commerce, com foco em performance, escalabilidade e manutenibilidade.

### Escopo
- Gerenciamento de produtos (CRUD completo)
- Gerenciamento de categorias (CRUD completo)
- Gerenciamento de marcas (CRUD completo)
- Visualização de pedidos
- Visualização de clientes

---

## 🎯 Requisitos

### Requisitos Funcionais

#### RF001 - Gerenciamento de Categorias
- O sistema deve permitir criar, listar, visualizar, editar e excluir categorias
- Cada categoria deve ter: nome e descrição
- Validação de campos obrigatórios

#### RF002 - Gerenciamento de Marcas
- O sistema deve permitir criar, listar, visualizar, editar e excluir marcas
- Cada marca deve ter: nome e descrição
- Validação de campos obrigatórios

#### RF003 - Gerenciamento de Produtos
- O sistema deve permitir criar, listar, visualizar, editar e excluir produtos
- Cada produto deve ter: nome, descrição, preço, categoria e marca
- Validação de campos obrigatórios e regras de negócio

#### RF004 - Visualização de Pedidos
- O sistema deve permitir listar e visualizar detalhes de pedidos
- Exibição de informações do cliente, produtos e status

#### RF005 - Visualização de Clientes
- O sistema deve permitir listar e visualizar dados de clientes

#### RF006 - Navegação e Interface
- Interface responsiva com sidebar de navegação
- Breadcrumbs para orientação do usuário
- Tabelas de dados com paginação, ordenação e busca

### Requisitos Não Funcionais

#### RNF001 - Performance
- Tempo de resposta das requisições API: < 2 segundos
- Carregamento inicial da aplicação: < 3 segundos
- Cache de dados para minimizar requisições repetidas

#### RNF002 - Usabilidade
- Interface intuitiva seguindo padrões de design moderno
- Feedback visual para todas as ações do usuário (toasts, loading states)
- Responsividade para diferentes tamanhos de tela

#### RNF003 - Manutenibilidade
- Código modular e reutilizável
- Separação clara de responsabilidades (services, hooks, components)
- Tipagem forte com TypeScript
- Padrões de código consistentes

#### RNF004 - Escalabilidade
- Arquitetura preparada para adição de novos módulos
- Componentes genéricos e reutilizáveis
- Estrutura de pastas organizada por features

#### RNF005 - Segurança
- Validação de dados no frontend
- Tratamento adequado de erros
- Configuração de headers HTTP

---

## 🏗️ Arquitetura

### Arquitetura Geral
O projeto segue uma **arquitetura em camadas** baseada em **feature-sliced design**, combinando princípios de Clean Architecture e separação de responsabilidades.

```
┌─────────────────────────────────────────────────────────────┐
│                     PRESENTATION LAYER                       │
│                    (Components & Pages)                      │
├─────────────────────────────────────────────────────────────┤
│                      APPLICATION LAYER                       │
│                   (Hooks & State Management)                 │
├─────────────────────────────────────────────────────────────┤
│                       DOMAIN LAYER                           │
│                      (DTOs & Types)                          │
├─────────────────────────────────────────────────────────────┤
│                    INFRASTRUCTURE LAYER                      │
│                    (Services & API Client)                   │
└─────────────────────────────────────────────────────────────┘
```

### Stack Tecnológica

#### Frontend Core
- **React 19.1.1** - Biblioteca para construção de interfaces
- **TypeScript 5.9.3** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server

#### Roteamento e Navegação
- **React Router DOM 7.9.4** - Gerenciamento de rotas

#### Gerenciamento de Estado
- **TanStack Query 5.90.3** - Cache e sincronização de dados do servidor
- **React Hook Form 7.66.0** - Gerenciamento de formulários

#### UI e Estilização
- **Tailwind CSS 4.1.15** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e sem estilo
- **Lucide React** - Biblioteca de ícones
- **shadcn/ui** - Sistema de componentes

#### Validação e Comunicação
- **Zod 4.1.12** - Validação de schemas e tipos
- **Axios 1.12.2** - Cliente HTTP
- **React Toastify** - Notificações toast

#### Tabelas e Dados
- **TanStack Table 8.21.3** - Tabelas headless e flexíveis

### Padrões Arquiteturais Aplicados

#### 1. Feature-Sliced Design
Cada funcionalidade (brands, categories, products) é isolada em sua própria pasta com todas as camadas necessárias:
```
cases/
  brands/
    components/     # Apresentação
    hooks/          # Lógica de aplicação
    services/       # Comunicação com API
    dtos/           # Contratos de dados
```

#### 2. Separation of Concerns (SoC)
- **Components**: Responsáveis apenas pela renderização
- **Hooks**: Gerenciam lógica de estado e efeitos
- **Services**: Encapsulam chamadas de API
- **DTOs**: Definem contratos de dados

#### 3. Single Responsibility Principle (SRP)
Cada arquivo/função tem uma única responsabilidade bem definida.

#### 4. Dependency Injection
Hooks servem como injetores de dependências, permitindo fácil testabilidade e desacoplamento.

---

## 📁 Estrutura de Pastas

### Organização Principal

```
ecommerce-cms/
├── public/                      # Arquivos estáticos
├── src/
│   ├── cases/                   # Módulos de negócio (features)
│   │   ├── brands/              # Módulo de marcas
│   │   │   ├── components/      # Componentes específicos
│   │   │   │   ├── brand-form.tsx
│   │   │   │   ├── brand-layout.tsx
│   │   │   │   └── data-table/
│   │   │   │       ├── brand-columns.tsx
│   │   │   │       └── brand-data-table.tsx
│   │   │   ├── dtos/            # Data Transfer Objects
│   │   │   │   └── brand.dto.ts
│   │   │   ├── hooks/           # Custom hooks
│   │   │   │   └── use-brand.ts
│   │   │   └── services/        # Serviços de API
│   │   │       └── brand.service.ts
│   │   │
│   │   ├── categories/          # Módulo de categorias
│   │   │   ├── components/
│   │   │   ├── dto/
│   │   │   ├── hooks/
│   │   │   └── services/
│   │   │
│   │   ├── products/            # Módulo de produtos
│   │   │   ├── components/
│   │   │   ├── dtos/
│   │   │   ├── hooks/
│   │   │   └── services/
│   │   │
│   │   ├── orders/              # Módulo de pedidos
│   │   │   ├── components/
│   │   │   ├── dtos/
│   │   │   ├── hooks/
│   │   │   └── services/
│   │   │
│   │   └── customers/           # Módulo de clientes
│   │       └── dtos/
│   │
│   ├── components/              # Componentes compartilhados
│   │   ├── layout/              # Componentes de layout
│   │   │   ├── app-sidebar.tsx
│   │   │   ├── bread-crumb.tsx
│   │   │   ├── data-table-actions.tsx
│   │   │   └── sidebar-form.tsx
│   │   │
│   │   └── ui/                  # Componentes UI base (shadcn/ui)
│   │       ├── button.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── table.tsx
│   │       └── ... (outros componentes UI)
│   │
│   ├── hooks/                   # Hooks globais
│   │   └── use-mobile.ts
│   │
│   ├── lib/                     # Utilitários e configurações
│   │   ├── axios.ts             # Configuração do cliente HTTP
│   │   └── utils.ts             # Funções utilitárias
│   │
│   ├── App.tsx                  # Componente raiz
│   ├── main.tsx                 # Ponto de entrada
│   └── index.css                # Estilos globais
│
├── components.json              # Configuração shadcn/ui
├── package.json                 # Dependências e scripts
├── tsconfig.json                # Configuração TypeScript
├── vite.config.ts               # Configuração Vite
└── eslint.config.js             # Configuração ESLint
```

### Convenções de Nomenclatura

#### Arquivos e Pastas
- **Componentes**: PascalCase (`BrandForm.tsx`, `ProductLayout.tsx`)
- **Hooks**: kebab-case com prefixo "use" (`use-brand.ts`, `use-category.ts`)
- **Services**: kebab-case com sufixo ".service" (`brand.service.ts`)
- **DTOs**: kebab-case com sufixo ".dto" (`brand.dto.ts`)
- **Pastas**: kebab-case (`data-table/`, `use-cases/`)

#### Código
- **Interfaces/Types**: PascalCase (`BrandDTO`, `CategoryDTO`)
- **Funções**: camelCase (`getBrands`, `createProduct`)
- **Constantes**: UPPER_SNAKE_CASE (`_ENDPOINT`, `API_URL`)
- **Variáveis**: camelCase (`queryClient`, `brandData`)

---

## 🎨 Padrões de Código

### Estrutura de um Módulo (Feature)

Cada módulo segue o mesmo padrão estrutural para consistência:

#### 1. DTO (Data Transfer Object)
```typescript
// src/cases/brands/dtos/brand.dto.ts
export interface BrandDTO {
    id: string;
    name: string;
    description: string;
}
```

#### 2. Service
```typescript
// src/cases/brands/services/brand.service.ts
import { api } from "../../../lib/axios";
import type { BrandDTO } from "../dtos/brand.dto";

const _ENDPOINT = '/brands';

export const BrandService = {
    async list(): Promise<BrandDTO[]> {
        const result = await api.get(_ENDPOINT);
        return result.data;
    },

    async create(brand: BrandDTO): Promise<BrandDTO> {
        const result = await api.post(_ENDPOINT, brand);
        return result.data;
    },

    async getById(id: string): Promise<BrandDTO> {
        const result = await api.get(`${_ENDPOINT}/${id}`);
        return result.data;
    },

    async update(id: string, brand: BrandDTO): Promise<BrandDTO> {
        const result = await api.put(`${_ENDPOINT}/${id}`, brand);
        return result.data;
    },

    async delete(id: string): Promise<void> {
        await api.delete(`${_ENDPOINT}/${id}`);
    }
};
```

#### 3. Hooks
```typescript
// src/cases/brands/hooks/use-brand.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BrandService } from "../services/brand.service";
import type { BrandDTO } from "../dtos/brand.dto";
import { toast } from "react-toastify";

// Hook para listagem
export function useBrands() {
    return useQuery<BrandDTO[]>({
        queryKey: ['brands'],
        queryFn: BrandService.list
    });
}

// Hook para busca individual
export function useBrand(id: string) {
    return useQuery<BrandDTO>({
        queryKey: ['brand', id],
        queryFn: () => BrandService.getById(id),
        enabled: !!id
    });
}

// Hook para criação
export function useCreateBrand() {
    const queryClient = useQueryClient();

    return useMutation<BrandDTO, Error, Omit<BrandDTO, 'id'>>({
        mutationFn: (brand: Omit<BrandDTO, 'id'>) => BrandService.create(brand),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['brands'] });
            toast.success('Registro adicionado com sucesso!');
        },
        onError: (error) => {
            toast.error(`Erro ao adicionar: ${error.message}`);
        }
    });
}

// Hook para atualização
export function useUpdateBrand() {
    const queryClient = useQueryClient();

    return useMutation<BrandDTO, Error, { id: string, brand: BrandDTO }>({
        mutationFn: ({ id, brand }) => BrandService.update(id, brand),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['brands'] });
            toast.success('Registro alterado com sucesso!');
        },
        onError: (error) => {
            toast.error(`Erro ao alterar: ${error.message}`);
        }
    });
}
```

#### 4. Components
```typescript
// src/cases/brands/components/brand-form.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateBrand, useUpdateBrand, useBrand } from "../hooks/use-brand";

// Schema de validação
const brandSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    description: z.string().min(1, "Descrição é obrigatória"),
});

export function BrandForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Hooks de dados
    const { data: brand } = useBrand(id!);
    const createBrand = useCreateBrand();
    const updateBrand = useUpdateBrand();
    
    // Formulário
    const form = useForm({
        resolver: zodResolver(brandSchema),
        defaultValues: brand || { name: '', description: '' }
    });

    const onSubmit = (data: any) => {
        if (id) {
            updateBrand.mutate({ id, brand: data });
        } else {
            createBrand.mutate(data);
        }
        navigate('/brands');
    };

    return (
        // JSX do formulário
    );
}
```

### Padrões de Componentes

#### Componente de Listagem (Layout)
- Usa TanStack Table para tabelas
- Implementa paginação, ordenação e busca
- Ações em massa e individuais
- Loading states e error handling

#### Componente de Formulário
- React Hook Form + Zod para validação
- Campos controlados
- Feedback de erros inline
- Botões de ação (salvar, cancelar)

#### Componente de Data Table
- Colunas definidas separadamente
- Actions column para editar/deletar
- Responsivo

---

## 🔄 Fluxo de Dados

### Arquitetura de Fluxo

```
┌──────────────┐
│  Component   │ ─────┐
└──────────────┘      │
                      ▼
                ┌──────────┐
                │   Hook   │ ◄─── TanStack Query (Cache)
                └──────────┘
                      │
                      ▼
                ┌──────────┐
                │  Service │
                └──────────┘
                      │
                      ▼
                ┌──────────┐
                │ API/Axios│
                └──────────┘
                      │
                      ▼
                [ Backend API ]
```

### Ciclo de Vida de uma Requisição

#### 1. Leitura de Dados (Query)
```
Component Mount
     ↓
useQuery Hook
     ↓
Check Cache (TanStack Query)
     ↓
Cache Miss? → Call Service → API Request → Update Cache
     ↓
Cache Hit? → Return Cached Data
     ↓
Component Renders with Data
```

#### 2. Mutação de Dados (Create/Update/Delete)
```
User Action (Submit Form)
     ↓
useMutation Hook
     ↓
Service Method (create/update/delete)
     ↓
API Request
     ↓
Success? → Invalidate Cache → Refetch Queries → Show Toast
     ↓
Error? → Show Error Toast
     ↓
Component Updates
```

### Gerenciamento de Estado

#### Estado Local (Component State)
- Formulários: `react-hook-form`
- UI temporário: `useState`
- Efeitos: `useEffect`

#### Estado do Servidor (Server State)
- Cache: TanStack Query
- Sincronização automática
- Invalidação de cache
- Background refetching

#### Estado Global (Global State)
- Contextos React (quando necessário)
- Providers (Theme, Auth - futuro)

---

## ⚙️ Configuração e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Backend API rodando (configurar VITE_API_URL)

### Variáveis de Ambiente
Criar arquivo `.env` na raiz:
```env
VITE_API_URL=http://localhost:3000/api
```

### Instalação
```bash
# Instalar dependências
npm install

# ou
yarn install
```

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# ou
yarn dev
```
Acesse: `http://localhost:5173`

### Build para Produção
```bash
# Compilar TypeScript e build
npm run build

# ou
yarn build
```

### Preview da Build
```bash
# Visualizar build de produção
npm run preview

# ou
yarn preview
```

### Linting
```bash
# Executar ESLint
npm run lint

# ou
yarn lint
```

---

## 📘 Guia de Implementação

### Como Adicionar um Novo Módulo (Feature)

#### Passo 1: Criar Estrutura de Pastas
```
src/cases/nome-modulo/
├── components/
│   ├── nome-modulo-form.tsx
│   ├── nome-modulo-layout.tsx
│   └── data-table/
│       ├── nome-modulo-columns.tsx
│       └── nome-modulo-data-table.tsx
├── dtos/
│   └── nome-modulo.dto.ts
├── hooks/
│   └── use-nome-modulo.ts
└── services/
    └── nome-modulo.service.ts
```

#### Passo 2: Definir DTO
```typescript
// src/cases/nome-modulo/dtos/nome-modulo.dto.ts
export interface NomeModuloDTO {
    id: string;
    campo1: string;
    campo2: number;
    // ... outros campos
}
```

#### Passo 3: Criar Service
```typescript
// src/cases/nome-modulo/services/nome-modulo.service.ts
import { api } from "../../../lib/axios";
import type { NomeModuloDTO } from "../dtos/nome-modulo.dto";

const _ENDPOINT = '/nome-modulos';

export const NomeModuloService = {
    async list(): Promise<NomeModuloDTO[]> {
        const result = await api.get(_ENDPOINT);
        return result.data;
    },

    async create(data: NomeModuloDTO): Promise<NomeModuloDTO> {
        const result = await api.post(_ENDPOINT, data);
        return result.data;
    },

    async getById(id: string): Promise<NomeModuloDTO> {
        const result = await api.get(`${_ENDPOINT}/${id}`);
        return result.data;
    },

    async update(id: string, data: NomeModuloDTO): Promise<NomeModuloDTO> {
        const result = await api.put(`${_ENDPOINT}/${id}`, data);
        return result.data;
    },

    async delete(id: string): Promise<void> {
        await api.delete(`${_ENDPOINT}/${id}`);
    }
};
```

#### Passo 4: Criar Hooks Customizados
```typescript
// src/cases/nome-modulo/hooks/use-nome-modulo.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NomeModuloService } from "../services/nome-modulo.service";
import type { NomeModuloDTO } from "../dtos/nome-modulo.dto";
import { toast } from "react-toastify";

export function useNomeModulos() {
    return useQuery<NomeModuloDTO[]>({
        queryKey: ['nome-modulos'],
        queryFn: NomeModuloService.list
    });
}

export function useNomeModulo(id: string) {
    return useQuery<NomeModuloDTO>({
        queryKey: ['nome-modulo', id],
        queryFn: () => NomeModuloService.getById(id),
        enabled: !!id
    });
}

export function useCreateNomeModulo() {
    const queryClient = useQueryClient();

    return useMutation<NomeModuloDTO, Error, Omit<NomeModuloDTO, 'id'>>({
        mutationFn: (data) => NomeModuloService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['nome-modulos'] });
            toast.success('Registro adicionado com sucesso!');
        },
        onError: (error) => {
            toast.error(`Erro ao adicionar: ${error.message}`);
        }
    });
}

export function useUpdateNomeModulo() {
    const queryClient = useQueryClient();

    return useMutation<NomeModuloDTO, Error, { id: string, data: NomeModuloDTO }>({
        mutationFn: ({ id, data }) => NomeModuloService.update(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['nome-modulos'] });
            toast.success('Registro alterado com sucesso!');
        },
        onError: (error) => {
            toast.error(`Erro ao alterar: ${error.message}`);
        }
    });
}

export function useDeleteNomeModulo() {
    const queryClient = useQueryClient();

    return useMutation<void, Error, string>({
        mutationFn: (id) => NomeModuloService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['nome-modulos'] });
            toast.success('Registro excluído com sucesso!');
        },
        onError: (error) => {
            toast.error(`Erro ao excluir: ${error.message}`);
        }
    });
}
```

#### Passo 5: Criar Componentes

**Layout (Listagem):**
```typescript
// src/cases/nome-modulo/components/nome-modulo-layout.tsx
import { Outlet } from "react-router-dom";
import { useNomeModulos } from "../hooks/use-nome-modulo";
import { NomeModuloDataTable } from "./data-table/nome-modulo-data-table";
import { columns } from "./data-table/nome-modulo-columns";

export function NomeModuloLayout() {
    const { data, isLoading } = useNomeModulos();

    if (isLoading) return <div>Carregando...</div>;

    return (
        <div>
            <h1>Nome Módulo</h1>
            <NomeModuloDataTable columns={columns} data={data || []} />
            <Outlet />
        </div>
    );
}
```

**Formulário:**
```typescript
// src/cases/nome-modulo/components/nome-modulo-form.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateNomeModulo, useUpdateNomeModulo, useNomeModulo } from "../hooks/use-nome-modulo";

const schema = z.object({
    campo1: z.string().min(1, "Campo obrigatório"),
    campo2: z.number().min(0, "Valor inválido"),
});

export function NomeModuloForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const { data } = useNomeModulo(id!);
    const createMutation = useCreateNomeModulo();
    const updateMutation = useUpdateNomeModulo();
    
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: data || { campo1: '', campo2: 0 }
    });

    const onSubmit = (formData: any) => {
        if (id) {
            updateMutation.mutate({ id, data: formData });
        } else {
            createMutation.mutate(formData);
        }
        navigate('/nome-modulos');
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Campos do formulário */}
        </form>
    );
}
```

#### Passo 6: Adicionar Rotas
```typescript
// src/App.tsx
import { NomeModuloLayout } from "./cases/nome-modulo/components/nome-modulo-layout";
import { NomeModuloForm } from "./cases/nome-modulo/components/nome-modulo-form";

// Adicionar nas rotas
<Route path="/nome-modulos" element={<NomeModuloLayout />}>
    <Route path="new" element={<NomeModuloForm />} />
    <Route path=":id" element={<NomeModuloForm />} />
</Route>
```

#### Passo 7: Adicionar ao Sidebar
```typescript
// src/components/layout/app-sidebar.tsx
// Adicionar item de menu
{
    title: "Nome Módulo",
    url: "/nome-modulos",
    icon: IconName,
}
```

### Boas Práticas

#### 1. Validação
- Sempre use Zod para schemas de validação
- Valide no frontend e backend
- Mensagens de erro claras e em português

#### 2. Tratamento de Erros
- Use try/catch em services quando necessário
- Exiba mensagens de erro com toast
- Registre erros no console para debug

#### 3. Performance
- Use React.memo para componentes pesados
- Lazy loading de rotas quando aplicável
- Debounce em campos de busca

#### 4. Acessibilidade
- Use componentes Radix UI (já acessíveis)
- Labels em todos os inputs
- Feedback visual para ações

#### 5. Testes (Futuro)
- Testes unitários para services
- Testes de integração para hooks
- Testes E2E para fluxos críticos

---

## 📚 Referências

### Documentação Oficial
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TanStack Query](https://tanstack.com/query/latest)
- [TanStack Table](https://tanstack.com/table/latest)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)

### Padrões e Conceitos
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)

---

## 📝 Notas de Versão

### v0.0.0 - Versão Inicial
- Estrutura base do projeto
- Módulos de Categories, Brands e Products
- Sistema de navegação e sidebar
- Integração com API
- Sistema de notificações

---

## 🤝 Contribuindo

### Para adicionar novas features:
1. Siga a estrutura de pastas estabelecida
2. Crie DTOs, Services, Hooks e Components
3. Adicione rotas no App.tsx
4. Atualize o sidebar
5. Documente mudanças significativas

### Para reportar bugs:
1. Descreva o problema claramente
2. Inclua passos para reproduzir
3. Inclua screenshots se aplicável
4. Informe o ambiente (navegador, OS)

---

**Última atualização:** Novembro 2025  
**Versão do Documento:** 1.0  
**Mantido por:** Equipe de Desenvolvimento
