// --- BANCO DE PALAVRAS ---
// Cada objeto tem a palavra (word), uma dica (hint) e a explicação (explanation)
const terms = [
    { word: "DEA", hint: "Aparelho que aplica choque elétrico.", explanation: "DEA significa Desfibrilador Externo Automático. É um dispositivo portátil que diagnostica arritmias cardíacas com risco de vida (como FV ou TV sem pulso) e é capaz de tratá-las com desfibrilação, restabelecendo o ritmo cardíaco normal. Fundamental na parada cardiorrespiratória." },
    { word: "PULSO", hint: "Indica batimento cardíaco.", explanation: "O pulso é a onda de pressão gerada pelo batimento cardíaco, palpável em artérias como a carótida ou radial. Sua ausência em uma vítima inconsciente, que não respira, indica parada cardíaca." },
    { word: "TORAX", hint: "Local das compressões.", explanation: "O tórax é a região do corpo onde as compressões torácicas são realizadas, especificamente no centro do esterno. A compressão eficaz do tórax é vital para bombear sangue para o cérebro e órgãos vitais durante a RCP." },
    { word: "ASFIXIA", hint: "Causa comum de PCR em crianças.", explanation: "Asfixia é a privação severa de oxigênio. Em crianças, é uma causa comum de parada cardiorrespiratória, podendo ser causada por engasgos, sufocamento ou doenças respiratórias graves." },
    { word: "GASPI", hint: "Respiração agonal, ineficaz.", explanation: "Gasping (ou respiração agonal) é uma respiração ofegante, ruidosa e ineficaz que não fornece oxigênio adequado. É um sinal de parada cardíaca e deve ser interpretado como ausência de respiração normal, exigindo o início imediato da RCP." },
    { word: "SAMU", hint: "Serviço de emergência 192.", explanation: "SAMU (Serviço de Atendimento Móvel de Urgência) é o serviço de atendimento pré-hospitalar que deve ser acionado (telefone 192) em casos de parada cardiorrespiratória e outras emergências médicas. O acionamento precoce é um elo crucial da cadeia de sobrevivência." },
    { word: "ESTERNO", hint: "Osso central do tórax.", explanation: "O esterno é o osso plano e central do tórax onde as mãos são posicionadas para as compressões torácicas durante a RCP. É a estrutura sobre a qual o coração é comprimido." },
    { word: "CHOQUE", hint: "Estado de falha circulatória.", explanation: "Choque é uma condição grave onde o corpo não recebe oxigênio e nutrientes suficientes, geralmente devido a problemas circulatórios (como hemorragia massiva no trauma). É uma das principais causas de PCR e exige intervenção imediata para reverter a falha orgânica." },
    { word: "FRATURA", hint: "Lesão óssea que pode ocorrer na RCP.", explanation: "Fratura de costelas ou esterno é uma complicação potencial das compressões torácicas. Embora deva ser evitada, a qualidade das compressões (profundidade e frequência) é prioridade sobre a preocupação com fraturas, pois estas são menos graves do que a morte por PCR." },
    { word: "AFOGADO", hint: "Vítima que precisa de ventilação imediata.", explanation: "Vítima de afogamento. Nesses casos, a PCR geralmente é de origem hipóxica (falta de oxigênio), e as ventilações são cruciais e devem ser iniciadas o mais rápido possível, mesmo antes das compressões em alguns protocolos." },
    { word: "CADEIA", hint: "Sequência de ações para salvar vidas.", explanation: "Cadeia de Sobrevivência: é uma sequência de ações críticas (como reconhecimento precoce, acionamento do serviço de emergência, RCP precoce, desfibrilação e cuidados pós-parada) que, quando aplicadas corretamente, aumentam significativamente as chances de sobrevivência da vítima de PCR." },
    { word: "OXI", hint: "Gás vital para a respiração.", explanation: "O oxigênio é um gás essencial para a vida, transportado pelo sangue para as células. Na RCP, a ventilação fornece oxigênio aos pulmões para ser distribuído ao corpo." },
    { word: "COLAR", hint: "Suporte para coluna cervical.", explanation: "Colar cervical é um dispositivo usado para imobilizar a coluna cervical (pescoço) de vítimas de trauma, prevenindo ou minimizando lesões na medula espinhal durante o manuseio e transporte." },
    { word: "AVALIAR", hint: "Verificar o paciente. Primeiro passo no XABCDE.", explanation: "Avaliar é o ato de examinar o paciente de forma sistemática (como no XABCDE) para identificar problemas e determinar a prioridade do tratamento. Na RCP, inclui verificar consciência, respiração e pulso." },
    { word: "VENTILAR", hint: "Ato de auxiliar a respiração.", explanation: "Ventilação é o ato de mover ar para dentro e para fora dos pulmões. Na RCP, a ventilação de resgate (boca a boca ou com dispositivo) fornece oxigênio a quem não consegue respirar por conta própria." },
    { word: "TRAUMA", hint: "Lesão por agente externo.", explanation: "Trauma é uma lesão corporal causada por um agente externo (acidente, violência). No trauma grave, a PCR tem causas específicas e exige uma abordagem particular, como no ATLS." },
    { word: "CRANIO", hint: "Parte da cabeça que protege o cérebro.", explanation: "O crânio é a estrutura óssea que protege o cérebro. Traumatismos cranioencefálicos (TCE) graves podem levar à PCR por lesão cerebral ou inchaço, afetando centros respiratórios." },
    { word: "MEDULA", hint: "Parte da coluna, lesão pode ser grave.", explanation: "A medula espinhal está dentro da coluna vertebral e transmite impulsos nervosos. Lesões medulares cervicais altas podem causar PCR por afetar a respiração ou o controle cardíaco." },
    { word: "CARDIAC", hint: "Relacionado ao coração.", explanation: "Cardíaco refere-se ao coração. Uma parada cardíaca é a cessação da atividade mecânica do coração, que pode ser primária (do coração) ou secundária (por falta de oxigênio/sangue)." },
    { word: "PERFUSAO", hint: "Fluxo de sangue para os tecidos.", explanation: "Perfusão é o processo de fornecimento de sangue (e com ele oxigênio e nutrientes) aos tecidos e órgãos. As compressões torácicas visam manter a perfusão cerebral e coronariana durante a RCP." },
    { word: "CRICOIDE", hint: "Cartilagem no pescoço, referência.", explanation: "A cartilagem cricóide é uma estrutura anatômica no pescoço, abaixo da cartilagem tireóide, importante como ponto de referência para procedimentos como a cricotireoidostomia de emergência." },
    { word: "HEMOTORA", hint: "Acúmulo de sangue no tórax.", explanation: "Hemotórax é o acúmulo de sangue na cavidade pleural (entre o pulmão e a parede torácica), geralmente causado por trauma. Grandes volumes podem levar a choque e PCR." },
    { word: "PRESSAO", hint: "Força do sangue nas artérias.", explanation: "Pressão arterial é a força que o sangue exerce sobre as paredes das artérias. Sua queda severa (hipotensão) é um sinal de choque e pode levar à PCR." },
    { word: "GOTEJO", hint: "Velocidade de infusão de fluidos.", explanation: "Gotejo ou taxa de infusão refere-se à velocidade de administração de fluidos intravenosos. Em casos de choque hipovolêmico, o 'gotejo rápido' é crucial para reposição volêmica." },
    { word: "ABDOMEN", hint: "Região do corpo abaixo do tórax.", explanation: "Abdômen é a região do corpo entre o tórax e a pelve. Traumas abdominais podem causar hemorragias internas maciças, levando a choque hipovolêmico e PCR." },
    { word: "MEDICAR", hint: "Administrar fármacos.", explanation: "Medicar é administrar medicamentos. Durante a RCP, alguns fármacos (como adrenalina) podem ser usados, embora a correção das causas subjacentes seja a prioridade no trauma." },
    { word: "INFARTO", hint: "Ataque cardíaco, falta de fluxo.", explanation: "Infarto é a morte de tecido muscular cardíaco devido à falta de fluxo sanguíneo. É uma emergência cardíaca grave que pode levar à PCR." },
    { word: "QUEDA", hint: "Acidente comum em idosos e crianças.", explanation: "Queda é um tipo de acidente comum que pode resultar em lesões leves a graves, como fraturas e traumatismos, sendo uma causa frequente de atendimento de emergência." },
    { word: "CONTUSAO", hint: "Lesão por impacto sem corte na pele.", explanation: "Contusão é uma lesão causada por um impacto direto, resultando em dor, inchaço e equimose (roxo) sem quebrar a pele. Comum em traumas." }
];

// --- Configuração da Data de Início do Jogo ---
const GAME_START_DATE_STR = "2025-01-01"; // Data de início fixa para o ciclo de palavras
const GAME_START_DATE = new Date(GAME_START_DATE_STR + "T12:00:00Z"); // Usar UTC para cálculo consistente

// --- Lógica de Data e Palavra ---
function getRioBrancoDate(date) {
    // Ajusta qualquer objeto Date para o fuso horário de Rio Branco (UTC-5)
    const offset = -5 * 60; // Offset em minutos
    return new Date(date.getTime() + (date.getTimezoneOffset() * 60000) + (offset * 60000));
}

function getTodayDateStringRioBranco() {
    const today = new Date();
    const rioBrancoTime = getRioBrancoDate(today);
    return rioBrancoTime.toISOString().slice(0, 10); // Formato YYYY-MM-DD
}

function getWordIndexForDate(dateString) {
    const targetDate = new Date(dateString + "T12:00:00Z"); // Usar UTC para cálculo consistente
    const oneDay = 1000 * 60 * 60 * 24;
    const diffTime = Math.abs(targetDate.getTime() - GAME_START_DATE.getTime());
    const diffDays = Math.floor(diffTime / oneDay);
    return diffDays % terms.length;
}

// --- VARIÁVEIS GLOBAIS DO JOGO ---
let secretWordData;
let secretWord;
let secretExplanation;
let currentHint;

let guesses; // Tentativas do usuário no jogo atual
const maxGuesses = 6;
let currentGuessIndex; // Onde o usuário está agora na grade
let gameWon;
let gameLost;

let isArchiveMode = false; // Flag para saber se estamos no modo de arquivo de datas
let currentPlayedDate = ''; // Para armazenar a data do jogo que está sendo jogado (dia atual ou arquivo)

// --- ELEMENTOS HTML ---
const hintText = document.getElementById('hint-text');
const gridContainer = document.getElementById('grid-container');
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');
const messageArea = document.getElementById('message-area');
const explanationArea = document.getElementById('explanation-area');
const revealedWord = document.getElementById('revealed-word');
const wordExplanation = document.getElementById('word-explanation');
const goToArchiveButton = document.getElementById('go-to-archive-button'); // Botão para ir ao arquivo
const archiveReturnButton = document.getElementById('archive-return-button'); // Botão para voltar do arquivo

// --- FUNÇÕES DO JOGO ---

function loadGameState(dateStringFromUrl) {
    // Define a data do jogo que está sendo carregado (do URL ou do dia atual)
    currentPlayedDate = dateStringFromUrl || getTodayDateStringRioBranco();
    const storageKeySuffix = `-${currentPlayedDate}`; // Sempre usa a data no sufixo da chave do localStorage

    // Determina o modo de jogo
    isArchiveMode = !!dateStringFromUrl; // Se tem data na URL, é modo arquivo

    // Obtém os dados da palavra para a data específica
    const wordIndex = getWordIndexForDate(currentPlayedDate);
    secretWordData = terms[wordIndex];
    secretWord = secretWordData.word.toUpperCase();
    secretExplanation = secretWordData.explanation;
    currentHint = secretWordData.hint;

    // Carrega o estado do jogo do localStorage para a data específica
    guesses = JSON.parse(localStorage.getItem(`guesses${storageKeySuffix}`)) || [];
    gameWon = JSON.parse(localStorage.getItem(`gameWon${storageKeySuffix}`)) || false;
    gameLost = JSON.parse(localStorage.getItem(`gameLost${storageKeySuffix}`)) || false;
    currentGuessIndex = guesses.length;

    // Controla a visibilidade dos botões de navegação
    // O botão goToArchiveButton só existe em index.html
    if (goToArchiveButton) goToArchiveButton.style.display = isArchiveMode ? 'none' : 'block';
    // O botão archiveReturnButton só existe em index.html
    if (archiveReturnButton) archiveReturnButton.style.display = isArchiveMode ? 'block' : 'none';
}

function initializeGame() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDate = urlParams.get('date');

    loadGameState(selectedDate); // Carrega o estado para a data selecionada ou para o dia atual

    hintText.textContent = `Dica: ${currentHint}`;
    
    gridContainer.style.setProperty('--word-length', secretWord.length);
    gridContainer.innerHTML = ''; // Limpa a grade antes de criar

    // Cria as células da grade (6 linhas x tamanho da palavra)
    for (let i = 0; i < maxGuesses; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < secretWord.length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            const span = document.createElement('span'); 
            cell.appendChild(span);
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }

    // Carrega tentativas anteriores e colore as células
    guesses.forEach((guess, index) => {
        const row = gridContainer.children[index];
        const tempSecret = secretWord.split(''); 
        const guessLetters = guess.split('');

        // 1ª passagem: Marcar letras CORRETAS
        for (let i = 0; i < secretWord.length; i++) {
            const cell = row.children[i];
            const letter = guessLetters[i];
            cell.children[0].textContent = letter;

            if (letter === tempSecret[i]) {
                cell.classList.add('correct');
                tempSecret[i] = null;
            }
        }

        // 2ª passagem: Marcar letras PRESENTES e AUSENTES
        for (let i = 0; i < secretWord.length; i++) {
            const cell = row.children[i];
            const letter = guessLetters[i];

            if (!cell.classList.contains('correct')) { 
                const presentIndex = tempSecret.indexOf(letter);
                if (presentIndex !== -1) {
                    cell.classList.add('present');
                    tempSecret[presentIndex] = null;
                } else {
                    cell.classList.add('absent');
                }
            }
        }
    });

    // --- MUDANÇA CRÍTICA AQUI: Lógica de exibição e habilitação do input ---
    if (gameWon || gameLost) {
        // Se o jogo já terminou (ganhou ou perdeu), exibe a explicação e desabilita input
        showMessage(gameWon ? "Você já acertou a palavra deste dia!" : `Fim de jogo! A palavra era: ${secretWord}`, gameWon ? 'success-message' : 'error-message');
        revealExplanation();
        disableInput();
    } else {
        // Se o jogo NÃO terminou (seja do dia atual ou de arquivo), habilita o input para jogar
        guessInput.disabled = false;
        submitButton.disabled = false;
        guessInput.focus(); 
        // A explicação deve estar escondida se o jogo ainda está em andamento
        explanationArea.style.display = 'none'; 
    }
}

function checkGuess() {
    const guess = guessInput.value.toUpperCase();
    messageArea.textContent = ''; 

    if (guess.length !== secretWord.length) {
        showMessage(`A palavra deve ter ${secretWord.length} letras!`);
        return;
    }
    if (currentGuessIndex >= maxGuesses) {
        showMessage('Você não tem mais tentativas!');
        return;
    }

    const currentRow = gridContainer.children[currentGuessIndex];
    const secretLetters = secretWord.split(''); 
    const guessLetters = guess.split('');

    // 1. Marcar letras corretas (verde)
    for (let i = 0; i < secretWord.length; i++) {
        const cell = currentRow.children[i];
        const letter = guessLetters[i];
        cell.children[0].textContent = letter;

        if (letter === secretLetters[i]) {
            cell.classList.add('correct');
            secretLetters[i] = null;
        }
    }

    // 2. Marcar letras presentes (amarelo) e ausentes (cinza)
    for (let i = 0; i < secretWord.length; i++) {
        const cell = currentRow.children[i];
        const letter = guessLetters[i];

        if (!cell.
