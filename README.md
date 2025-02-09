# Draft Editor

Um editor de redação simples e eficiente construído com React, permitindo que usuários criem, editem e gerenciem parágrafos de texto com persistência local.

## 🌍 Acesse o Site

O Draft Editor está no ar! Acesse aqui: [Draft Editor](https://draft-editor-one.vercel.app/)

## 🚀 Funcionalidades

- ✍️ **Edição em Tempo Real**: Digite e edite parágrafos com salvamento automático
- 📝 **Gerenciamento de Parágrafos**: Adicione e remova parágrafos facilmente
- 📊 **Estatísticas do Texto**: Visualize contagem de palavras, letras e parágrafos
- 💾 **Persistência Local**: Seus textos são salvos automaticamente e preservados entre sessões
- 🎨 **Interface Intuitiva**: Design limpo e responsivo com Tailwind CSS

## 🛠️ Tecnologias

- React
- Tailwind CSS
- LocalStorage API
- Lucide React (para ícones)

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone git@github.com:realmcastro/draft-editor.git
cd draft-editor
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

O projeto estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── DraftEditor.jsx    # Componente principal do editor
│   └── Paragraph.jsx      # Componente de parágrafo individual
├── App.js                 # Componente raiz da aplicação
└── index.js              # Ponto de entrada da aplicação
```

## 💡 Uso

1. Digite seu texto na área de texto
2. Clique em "Adicionar Parágrafo" para incluir o texto no documento
3. Use o botão de exclusão (🗑️) para remover parágrafos individuais
4. Seus textos são salvos automaticamente

## ⚠️ Observações Importantes

- O projeto utiliza localStorage para persistência, então funciona melhor em navegadores modernos
- Evite usar caminhos com caracteres especiais (#, %, etc.) ao clonar o projeto
- Para melhor experiência, mantenha seu navegador atualizado

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

