# 🌿 Modelo Century 4.5 — Documentação Técnica

Plataforma web de documentação técnica do **Modelo Century 4.5**, desenvolvida no contexto do **Programa REVERTE®** em parceria entre o **LAPIG/UFG**, **UFS** e **TNC**.

🔗 **Acesse o site:** [felipejesusremotesensing.github.io](https://felipejesusremotesensing.github.io/)

---

## 📖 Sobre o Projeto

O **Century** é um modelo de processos biogeoquímicos utilizado para estimar a ciclagem e estoques de nutrientes em ecossistemas variados, desenvolvido pela *Colorado State University*. Este site documenta sua aplicação no **Cerrado Brasileiro**, incluindo:

- Fundamentação teórica do modelo
- Contexto regional e parcerias institucionais
- Metodologia e procedimentos de campo
- Parametrização e requisitos para modelagem
- Resultados e análises

## 🗂️ Estrutura do Projeto

```
├── index.html              # Página principal
├── app.js                  # Carregamento dinâmico das seções
├── style.css               # Estilos globais
└── secoes/
    ├── 01_modelo_century/   # Fundamentação do Modelo Century
    ├── 02_contexto/         # Contexto do Projeto
    ├── 03_metodologia/      # Metodologia e Procedimentos de Campo
    ├── 04_parametrizacao/   # Requisitos e Informações para Modelagem
    └── 05_resultados/       # Resultados e Análises
```

Cada subpasta contém um arquivo `conteudo.html` que é carregado dinamicamente via `fetch()`, além de imagens e figuras utilizadas na respectiva seção.

## 🛠️ Tecnologias

- **HTML5** — Estrutura e conteúdo
- **CSS3** — Estilização com tema escuro
- **JavaScript (ES6+)** — Carregamento dinâmico de seções via Fetch API
- **GitHub Pages** — Hospedagem

## 👤 Autor

**Felipe Jesus** — [GitHub](https://github.com/FelipeJesusRemoteSensing) e **Marcos Cardoso** - [GitHub](https://github.com/cardosomvs)

Laboratório de Processamento de Imagens e Geoprocessamento (LAPIG) — UFG
