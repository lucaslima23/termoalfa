// --- BANCO DE PALAVRAS ---
// Cada objeto tem a palavra (word), uma dica (hint) e a explicação (explanation)
const terms = [
    { word: "DEA", hint: "Aparelho que aplica choque elétrico.", explanation: "DEA significa Desfibrilador Externo Automático. É um dispositivo portátil que diagnostica arritmias cardíacas com risco de vida (como FV ou TV sem pulso) e é capaz de tratá-las com desfibrilação, restabelecendo o ritmo cardíaco normal. Fundamental na parada cardiorrespiratória." },
    { word: "PULSO", hint: "Indica batimento cardíaco.", explanation: "O pulso é a onda de pressão gerada pelo batimento cardíaco, palpável em artérias como a carótida ou radial. Sua ausência em uma vítima inconsciente, que não respira, indica parada cardíaca." },
    { word: "TORAX", hint: "Local das compressões.", explanation: "O tórax é a região do corpo onde as compressões torácicas são realizadas, especificamente no centro do esterno. A compressão eficaz do tórax é vital para bombear sangue para o cérebro e órgãos vitais durante a RCP." },
    { word: "ASFIXIA", hint: "Causa comum de PCR em crianças.", explanation: "Asfixia é a privação severa de oxigênio. Em crianças, é uma causa comum de parada cardiorrespiratória, podendo ser causada por engasgos, sufocamento ou doenças respiratórias graves." },
    { word: "GASPI", hint: "Respiração agonal, ineficaz.", explanation: "Gasping (ou respiração agonal) é uma respiração ofegante, ruidosa e ineficaz que não fornece oxigênio adequado. É um sinal de parada cardíaca e deve ser interpretado como ausência de respiração normal, exigindo o início imediato da RCP." },
    { word: "SAMU", hint: "Serviço de emergência 192.", explanation: "SAMU (Serviço de Atendimento Móvel de Urgência) é o serviço de atendimento pré-hospitalar que deve ser acionado (telefone 192) em casos de parada cardiorrespiratória e outras emergências médicas. O acionamento precoce é um elo crucial da cadeia de sobrevivência." },
    { word: "VIAEREA", hint: "Primeira etapa vital, letra A do XABCDE.", explanation: "Via Aérea (Airway) é o canal que leva o ar aos pulmões. A avaliação e desobstrução da via aérea são passos iniciais e fundamentais na RCP e no trauma (letra 'A' do XABCDE), pois garantem a oxigenação." },
    { word: "ESTENO", hint: "Osso central do tórax.", explanation: "O esterno é o osso plano e central do tórax onde as mãos são posicionadas para as compressões torácicas durante a RCP. É a estrutura sobre a qual o coração é comprimido." },
    { word: "CHOQUE", hint: "Estado de falha circulatória.", explanation: "Choque é uma condição grave onde o corpo não recebe oxigênio e nutrientes suficientes, geralmente devido a problemas circulatórios (como hemorragia massiva no trauma). É uma das principais causas de PCR e exige intervenção imediata para reverter a falha orgânica." },
    { word: "FRATURA", hint: "Lesão óssea que pode ocorrer na RCP.", explanation: "Fratura de costelas ou esterno é uma complicação potencial das compressões torácicas. Embora deva ser evitada, a qualidade das compressões (profundidade e frequência) é prioridade sobre a preocupação com fraturas, pois estas são menos graves do que a morte por PCR." },
    { word: "AFOGADO", hint: "Vítima que precisa de ventilação imediata.", explanation: "Vítima de afogamento. Nesses casos, a PCR geralmente é de origem hipóxica (falta de oxigênio), e as ventilações são cruciais e devem ser iniciadas o mais rápido possível, mesmo antes das compressões em alguns protocolos." },
    { word: "CADEIA", hint: "Sequência de ações para salvar vidas.", explanation: "Cadeia de Sobrevivência: é uma sequência de ações críticas (como reconhecimento precoce, acionamento do serviço de emergência, RCP precoce, desfibrilação e cuidados pós-parada) que, quando aplicadas corretamente, aumentam significativamente as chances de sobrevivência da vítima de PCR." },
    { word: "OXIGENIO", hint: "Gás vital para a respiração.", explanation: "O oxigênio é um gás essencial para a vida, transportado pelo sangue para as células. Na RCP, a ventilação fornece oxigênio aos pulmões para ser distribuído ao corpo." },
    { word: "COLAR", hint: "Suporte para coluna cervical.", explanation: "Colar cervical é um dispositivo usado para imobilizar a coluna cervical (pescoço) de vítimas de trauma, prevenindo ou minimizando lesões na medula espinhal durante o manuseio e transporte." },
    { word: "AVALIA", hint: "Verificar o paciente. Primeiro passo no XABCDE.", explanation: "Avaliar é o ato de examinar o paciente de forma sistemática (como no XABCDE) para identificar problemas e determinar a prioridade do tratamento. Na RCP, inclui verificar consciência, respiração e pulso." },
    { word: "VENTILA", hint: "Ato de auxiliar a respiração.", explanation: "Ventilação é o ato de mover ar para dentro e para fora dos pulmões. Na RCP, a ventilação de resgate (boca a boca ou com dispositivo) fornece oxigênio a quem não consegue respirar por conta própria." },
    { word: "TORNIQ", hint: "Controle de hemorragia grave.", explanation: "Torniquete é um dispositivo usado para aplicar pressão em um membro, controlando hemorragias externas maciças que não podem ser contidas por outros métodos. É uma medida salvadora em traumas com sangramento exsanguinante." }
];

// --- Configuração da Data de Início do Jogo ---
// Mantenha essa data fixa. A palavra do dia (e de dias anteriores) será calculada a partir dela.
const GAME_START_DATE_STR = "2025-07-01"; // Formato YYYY-MM-DD
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

function getCurrentDailyWordData() {
    const todayDateString = getTodayDateStringRioBranco();
    const dailyWordIndex = getWordIndexForDate(todayDateString);
    return terms[dailyWordIndex];
}

// --- VARIÁVEIS GLOBAIS DO JOGO ---
let secretWordData;
let secretWord;
let secretExplanation;
let currentHint;

let guesses; // Tentativas
const maxGuesses = 6;
let currentGuessIndex; // Onde o usuário está agora na grade
let gameWon;
let gameLost;

let isArchiveMode = false; // Flag para saber se estamos no modo de arquivo de datas

// --- ELEMENTOS HTML ---
const hintText = document.getElementById('hint-text');
const gridContainer = document.getElementById('grid-container');
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');
const messageArea = document.getElementById('message-area');
const explanationArea = document.getElementById('explanation-area');
const revealedWord = document.getElementById('revealed-word');
const wordExplanation = document.getElementById('word-explanation');
const goToArchiveButton = document.getElementById('go-to-archive-button'); // Novo botão
const archiveReturnButton = document.getElementById('archive-return-button'); // Novo botão de retorno

// --- FUNÇÕES DO JOGO ---

function loadGameState(dateString) {
    let storageKeySuffix = dateString ? `-${dateString}` : '';

    // Verifica se estamos no modo arquivo
    isArchiveMode = !!dateString;

    // Se estiver no modo arquivo, o dailyWordIndex vem do dateString
    // Se não, usa a lógica de palavra diária normal
    const wordIndex = isArchiveMode ? getWordIndexForDate(dateString) : getWordIndexForDate(getTodayDateStringRioBranco());
    secretWordData = terms[wordIndex];
    secretWord = secretWordData.word.toUpperCase();
    secretExplanation = secretWordData.explanation;
    currentHint = secretWordData.hint;

    // Carrega o estado do jogo do localStorage para a data específica ou para o dia atual
    guesses = JSON.parse(localStorage.getItem(`guesses${storageKeySuffix}`)) || [];
    gameWon = JSON.parse(localStorage.getItem(`gameWon${storageKeySuffix}`)) || false;
    gameLost = JSON.parse(localStorage.getItem(`gameLost${storageKeySuffix}`)) || false;
    currentGuessIndex = guesses.length;

    // Atualiza a URL do botão de retorno se estivermos em modo arquivo
    if (archiveReturnButton) { // Checa se o botão existe (só existe no archive.html)
        if (isArchiveMode) {
            archiveReturnButton.style.display = 'block';
        } else {
            archiveReturnButton.style.display = 'none';
        }
    }
}

function initializeGame() {
    // Pega a data da URL se existir (modo arquivo)
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDate = urlParams.get('date');

    loadGameState(selectedDate); // Carrega o estado para a data selecionada ou para o dia atual

    hintText.textContent = `Dica: ${currentHint}`;
    
    // Define o número de colunas da grade dinamicamente baseado no tamanho da palavra
    gridContainer.style.setProperty('--word-length', secretWord.length);

    // Cria as células da grade (6 linhas x tamanho da palavra)
    for (let i = 0; i < maxGuesses; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < secretWord.length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            const span = document.createElement('span'); // Span para a letra, agora centralizado pelo CSS da célula
            cell.appendChild(span);
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }

    // Carrega tentativas anteriores e colore as células
    guesses.forEach((guess, index) => {
        const row = gridContainer.children[index];
        const tempSecret = secretWord.split(''); // Cópia da palavra secreta para manipulação

        // 1ª passagem: Marcar letras CORRETAS
        for (let i = 0; i < secretWord.length; i++) {
            const cell = row.children[i];
            const letter = guess[i];
            cell.children[0].textContent = letter; // Coloca a letra no span

            if (letter === tempSecret[i]) {
                cell.classList.add('correct');
                tempSecret[i] = null; // Marca a posição como "usada"
            }
        }

        // 2ª passagem: Marcar letras PRESENTES e AUSENTES
        for (let i = 0; i < secretWord.length; i++) {
            const cell = row.children[i];
            const letter = guess[i];

            if (!cell.classList.contains('correct')) { // Só processa se não for 'correct'
                const presentIndex = tempSecret.indexOf(letter);
                if (presentIndex !== -1) {
                    cell.classList.add('present');
                    tempSecret[presentIndex] = null; // Marca como "usada"
                } else {
                    cell.classList.add('absent');
                }
            }
        }
    });

    // Verifica o estado final do jogo e desabilita input se já terminou
    if (gameWon) {
        showMessage("Você já acertou a palavra deste dia!", 'success-message');
        revealExplanation();
        disableInput();
    } else if (gameLost) {
        showMessage(`Fim de jogo! A palavra era: ${secretWord}`, 'error-message');
        revealExplanation();
        disableInput();
    } else if (isArchiveMode) {
        // No modo arquivo, se não terminou, o jogo está habilitado
        guessInput.disabled = false;
        submitButton.disabled = false;
        guessInput.focus();
    } else {
        // No modo do dia atual, habilita o input e o botão de tentar
        guessInput.disabled = false;
        submitButton.disabled = false;
        guessInput.focus(); 
    }
}

function checkGuess() {
    const guess = guessInput.value.toUpperCase();
    messageArea.textContent = ''; // Limpa mensagens anteriores

    if (guess.length !== secretWord.length) {
        showMessage(`A palavra deve ter ${secretWord.length} letras!`);
        return;
    }
    if (currentGuessIndex >= maxGuesses) {
        showMessage('Você não tem mais tentativas!');
        return;
    }

    const currentRow = gridContainer.children[currentGuessIndex];
    const secretLetters = secretWord.split(''); // Cópia para manipulação
    const guessLetters = guess.split('');

    // 1. Marcar letras corretas (verde)
    for (let i = 0; i < secretWord.length; i++) {
        const cell = currentRow.children[i];
        const letter = guessLetters[i];
        cell.children[0].textContent = letter; // Adiciona a letra ao span

        if (letter === secretLetters[i]) {
            cell.classList.add('correct');
            secretLetters[i] = null; // Marca a posição como "usada"
        }
    }

    // 2. Marcar letras presentes (amarelo) e ausentes (cinza)
    for (let i = 0; i < secretWord.length; i++) {
        const cell = currentRow.children[i];
        const letter = guessLetters[i];

        if (!cell.classList.contains('correct')) { // Se não foi marcada como correta antes
            const presentIndex = secretLetters.indexOf(letter);
            if (presentIndex !== -1) {
                cell.classList.add('present');
                secretLetters[presentIndex] = null; // Marca como "usada"
            } else {
                cell.classList.add('absent');
            }
        }
    }

    // Salva a tentativa para a data específica ou para o dia atual
    let storageKeySuffix = isArchiveMode ? `-${getDailyWordData().date}` : ''; // Re-obtem a data da palavra atual
    guesses.push(guess);
    localStorage.setItem(`guesses${storageKeySuffix}`, JSON.stringify(guesses));

    currentGuessIndex++;
    guessInput.value = ''; // Limpa o input
    guessInput.focus(); // Mantém o foco no input para a próxima tentativa

    if (guess === secretWord) {
        gameWon = true;
        localStorage.setItem(`gameWon${storageKeySuffix}`, true);
        showMessage('Parabéns! Você acertou!', 'success-message');
        revealExplanation();
        disableInput();
    } else if (currentGuessIndex >= maxGuesses) {
        gameLost = true;
        localStorage.setItem(`gameLost${storageKeySuffix}`, true);
        showMessage(`Fim de jogo! A palavra era: ${secretWord}`, 'error-message');
        revealExplanation();
        disableInput();
    }
}

function showMessage(msg, type = 'info') {
    messageArea.textContent = msg;
    messageArea.className = 'message'; // Reseta classes
    messageArea.classList.add(type);
}

function revealExplanation() {
    explanationArea.style.display = 'block';
    revealedWord.textContent = secretWord;
    wordExplanation.textContent = secretExplanation;
}

function disableInput() {
    guessInput.disabled = true;
    submitButton.disabled = true;
}

// --- EVENT LISTENERS ---
submitButton.addEventListener('click', checkGuess);
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !guessInput.disabled) {
        checkGuess();
    }
});

// Listener para o novo botão "Tente o Termo de dias anteriores"
if (goToArchiveButton) { // Verifica se o botão existe no HTML atual
    goToArchiveButton.addEventListener('click', () => {
        window.location.href = 'archive.html'; // Redireciona para a página de arquivo
    });
}

// Listener para o botão de retorno na página de arquivo (se houver)
if (archiveReturnButton) {
    archiveReturnButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Volta para o jogo do dia
    });
}

// --- INICIALIZA O JOGO ---
initializeGame();
