document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-btn');
    const mainContent = document.querySelector('.content');

    // Mapeamento das abas para as suas respectivas pastas
    const folderMap = {
        'tab1': '01_modelo_century',
        'tab2': '02_contexto',
        'tab3': '03_metodologia',
        'tab4': '04_parametrizacao',
        'tab5': '05_resultados'
    };

    async function loadSection(sectionId) {
        const folder = folderMap[sectionId];
        if (!folder) return;

        // Mostrar indicador de carregamento
        mainContent.innerHTML = '<div class="loading-indicator">Carregando conteúdo...</div>';

        try {
            // Faz a requisição para o arquivo HTML da seção específica
            // O parâmetro cache: 'no-store' obriga o navegador a sempre buscar o arquivo mais recente
            const response = await fetch(`secoes/${folder}/conteudo.html?t=${new Date().getTime()}`, { cache: 'no-store' });
            
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            const htmlContent = await response.text();
            
            // Injeta o conteúdo no main
            mainContent.innerHTML = `<div id="${sectionId}" class="tab-pane active">${htmlContent}</div>`;
            
        } catch (error) {
            console.error('Falha ao carregar a seção:', error);
            mainContent.innerHTML = `
                <div class="error-indicator">
                    <strong>Ops, ocorreu um erro ao carregar a seção!</strong><br><br>
                    Motivo: ${error.message}<br><br>
                    <em>Nota: Se você está abrindo o arquivo "index.html" direto do seu computador (file://), o carregamento de abas não funcionará devido às políticas de segurança (CORS) do navegador. Utilize um servidor local como o "Live Server" do VS Code, ou suba o site para o GitHub e abra a URL gerada pelo GitHub Pages.</em>
                </div>`;
        }
    }

    // Configura os cliques nos botões
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;

            // Gerencia o estado "ativo" do menu lateral
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Carrega e renderiza o novo conteúdo
            loadSection(target);
        });
    });

    // Carrega a primeira aba (Tab 1) automaticamente assim que a página abre
    loadSection('tab1');
});
