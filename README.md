# 🚀 Começando com Off-Campus

Guia rápido para iniciar o desenvolvimento do projeto.

## ⚡ Início Rápido (5 minutos)

### 1. Instalar Dependências

```bash
npm install
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

### 3. Acessar a Aplicação

Abra seu navegador e acesse: **[http://localhost:3000](http://localhost:3000)**

---

## 📦 Requisitos

- **Node.js** v18 ou superior
- **npm**, yarn, pnpm ou bun

Verifique sua versão:

```bash
node --version
npm --version
```

---

## 🎯 Scripts Principais

| Comando         | Descrição                                         |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Inicia servidor de desenvolvimento com hot-reload |
| `npm run build` | Build otimizado para produção                     |
| `npm start`     | Executa app em produção                           |
| `npm run lint`  | Verifica código com ESLint                        |

---

## 📂 Estrutura Básica

```
src/app/
├── page.js          → Página inicial
├── layout.js        → Layout padrão
├── globals.css      → Estilos globais
└── page.module.css  → Estilos locais
```

---

## 🔧 Próximos Passos

- [ ] Explorar a estrutura do projeto
- [ ] Customizar o layout em `src/app/layout.js`
- [ ] Criar componentes em `src/components/`
- [ ] Adicionar rotas em `src/app/`
- [ ] Integrar banco de dados
- [ ] Configurar autenticação
- [ ] Implementar features de pagamento

---

## 📚 Documentação

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 🐛 Troubleshooting

### Porta 3000 já está em uso?

```bash
npm run dev -- -p 3001
```

### Limpar cache e reinstalar

```bash
rm -r node_modules package-lock.json
npm install
npm run dev
```

### Erro de módulos faltando

```bash
npm install
```

---

## 💡 Dicas Úteis

- Use `Ctrl + Shift + R` para hard refresh no navegador
- ESLint foi configurado, rode `npm run lint` antes de commitar
- Next.js usa file-based routing - crie arquivos em `src/app/`
- Componentes podem ser criados em `src/components/`

---

**Precisa de ajuda?** Abra uma issue no repositório! 🎉
