// ============================================================
// DADOS DO PORTFÓLIO
// Tudo que é "conteúdo" fica aqui. Para personalizar o site,
// você só precisa editar este arquivo (troque pelos seus dados).
// ============================================================

export const perfil = {
  nome: "Ricardo Lopes Silva",
  cargo: "Estudante de Análise e Desenvolvimento de Sistemas",
  descricao:
    "Apaixonado por tecnologia e em constante aprendizado. Estou construindo minha base em programação e desenvolvimento web, transformando ideias em interfaces funcionais.",
  // A foto fica na pasta "public". Coloque lá um arquivo chamado foto.jpg
  foto: "/foto.jpg",
  github: "https://github.com/riskdo",
};

// Habilidades separadas por categoria (usadas nas abas)
export const habilidades = {
  Linguagens: [
    { nome: "Python", nivel: "Básico", icone: "🐍" },
    { nome: "HTML", nivel: "Em estudo", icone: "🌐" },
    { nome: "CSS", nivel: "Em estudo", icone: "🎨" },
    { nome: "JavaScript", nivel: "Em estudo", icone: "⚡" },
  ],
  Ferramentas: [
    { nome: "VS Code", nivel: "Uso diário", icone: "💻" },
    { nome: "Git / GitHub", nivel: "Em estudo", icone: "🔀" },
    { nome: "Vite", nivel: "Em estudo", icone: "🚀" },
  ],
  Aprendendo: [
    { nome: "React", nivel: "Em estudo", icone: "⚛️" },
    { nome: "React Router", nivel: "Em estudo", icone: "🧭" },
    { nome: "Banco de Dados", nivel: "Em estudo", icone: "🗄️" },
  ],
};

export const sobre = {
  interesses: ["Desenvolvimento web", "Lógica de programação", "Design de interfaces", "Tecnologia em geral"],
  objetivoAcademico:
    "Concluir o curso de Análise e Desenvolvimento de Sistemas e aprofundar meus conhecimentos em desenvolvimento front-end e back-end.",
  objetivoProfissional:
    "Conquistar minha primeira oportunidade na área de tecnologia e crescer como desenvolvedor.",
};

// Projetos / experiências. Cada objeto vira um "cartão" na página.
// Troque por projetos seus (do curso, pessoais, etc.).
export const projetos = [
  {
    id: 1,
    titulo: "ERP Universitário (Front-end)",
    resumo: "Interface de um ERP universitário, projeto da disciplina de Sistemas Distribuídos.",
    detalhes:
      "Frontend React + Vite para um ERP distribuido academico de Sistemas Distribuidos. A aplicacao usa mocks por padrao enquanto os backends FastAPI ainda nao estao prontos.",
    tecnologias: ["JavaScript"],
    link: "https://github.com/riskdo/ERP-universitario-front",
  },
  {
    id: 2,
    titulo: "Calculadora API",
    resumo: "API de calculadora desenvolvida para um trabalho da faculdade.",
    detalhes: "Projeto Avaliativo desenvolvido para disciplina programação de sistemas distribuidos da universidade dos grandes lagos - UNILAGO sob supervisão do professor Gleydes Oliveira, com menção ao perfil @gleydes",
    tecnologias: ["Python"],
    link: "https://github.com/riskdo/Calculadora-api",
  },
  {
    id: 3,
    titulo: "Calculador com Jenkins",
    resumo: "Projeto em C# usando Jenkins.",
    detalhes: "Projeto didático que demonstra o ciclo completo de CI/CD para uma aplicação console em C#: GitHub → Jenkins → build .NET → empacotamento com Inno Setup → instalador",
    tecnologias: ["C#", "Jenkins"],
    link: "https://github.com/riskdo/Calculador-Jenkins",
  },
  {
    id: 4,
    titulo: "Biblioteca",
    resumo: "Sistema de biblioteca em Python.",
    detalhes: "Projeto de sistema de biblioteca desenvolvido em Python, com funcionalidades para gerenciamento de livros, usuários e empréstimos.",
    tecnologias: ["Python"],
    link: "https://github.com/riskdo/biblioteca",
  },
];
