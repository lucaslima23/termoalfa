// --- BANCO DE PALAVRAS ---
// Cada objeto tem a palavra (word), uma dica (hint) e a explicação (explanation)
const terms = [
    { word: "DEA", hint: "Aparelho que aplica choque elétrico.", explanation: "DEA significa Desfibrilador Externo Automático. É um dispositivo portátil que diagnostica arritmias cardíacas com risco de vida (como FV ou TV sem pulso) e é capaz de tratá-las com desfibrilação, restabelecendo o ritmo cardíaco normal. Fundamental na parada cardiorrespiratória." },
    { word: "PULSO", hint: "Indica batimento cardíaco.", explanation: "O pulso é a onda de pressão gerada pelo batimento cardíaco, palpável em artérias como a carótida ou radial. Sua ausência em uma vítima inconsciente, que não respira, indica parada cardíaca." },
    { word: "TORAX", hint: "Local das compressões.", explanation: "O tórax é a região do corpo onde as compressões torácicas são realizadas, especificamente no centro do esterno. A compressão eficaz do tórax é vital para bombear sangue para o cérebro e órgãos vitais durante a RCP." },
    { word: "ASFIXIA", hint: "Causa comum de PCR em crianças.", explanation: "Asfixia é a privação severa de oxigênio. Em crianças, é uma causa comum de parada cardiorrespiratória, podendo ser causada por engasgos, sufocamento ou doenças respiratórias graves." },
    { word: "GASPING", hint: "Respiração agonal, ineficaz.", explanation: "Gasping (ou respiração agonal) é uma respiração ofegante, ruidosa e ineficaz que não fornece oxigênio adequado. É um sinal de parada cardíaca e deve ser interpretado como ausência de respiração normal, exigindo o início imediato da RCP." },
    { word: "SAMU", hint: "Serviço de emergência 192.", explanation: "SAMU (Serviço de Atendimento Móvel de Urgência) é o serviço de atendimento pré-hospitalar que deve ser acionado (telefone 192) em casos de parada cardiorrespiratória e outras emergências médicas. O acionamento precoce é um elo crucial da cadeia de sobrevivência." },
    { word: "VIA AEREA", hint: "Primeira etapa vital, letra A do XABCDE.", explanation: "Via Aérea (Airway) é o canal que leva o ar aos pulmões. A avaliação e desobstrução da via aérea são passos iniciais e fundamentais na RCP e no trauma (letra 'A' do XABCDE), pois garantem a oxigenação." },
    { word: "ESTERNO", hint: "Osso central do tórax.", explanation: "O esterno é o osso plano e central do tórax onde as mãos são posicionadas para as compressões torácicas durante a RCP. É a estrutura sobre a qual o coração é comprimido." },
    { word: "CHOQUE", hint: "Estado de falha circulatória.", explanation: "Choque é uma condição grave onde o corpo não recebe oxigênio e nutrientes suficientes, geralmente devido a problemas circulatórios (como hemorragia massiva no trauma). É uma das principais causas de PCR e exige intervenção imediata para reverter a falha orgânica." },
    { word: "FRATURA", hint: "Lesão óssea que pode ocorrer na RCP.", explanation: "Fratura de costelas ou esterno é uma complicação potencial das compressões torácicas. Embora deva ser evitada, a qualidade das compressões (profundidade e frequência) é prioridade sobre a preocupação com fraturas, pois estas são menos graves do que a morte por PCR." },
    { word: "AFOGADO", hint: "Vítima que precisa de ventilação imediata.", explanation: "Vítima de afogamento. Nesses casos, a PCR geralmente é de origem hipóxica (falta de oxigênio), e as ventilações são cruciais e devem ser iniciadas o mais rápido possível, mesmo antes das compressões em alguns protocolos." },
    { word: "CADEIA", hint: "Sequência de ações para salvar vidas.", explanation: "Cadeia de Sobrevivência: é uma sequência de ações críticas (como reconhecimento precoce, acionamento do serviço de emergência, RCP precoce, desfibrilação e cuidados pós-parada) que, quando aplicadas corretamente, aumentam significativamente as chances de sobrevivência da vítima de PCR." },
    { word: "OXIGENIO", hint: "Gás vital para a respiração.", explanation: "O oxigênio é um gás essencial para a vida, transportado pelo sangue para as células. Na RCP, a ventilação fornece oxigênio aos pulmões para ser distribuído ao corpo." },
    { word: "COLAR", hint: "Suporte para coluna cervical.", explanation: "Colar cervical é um dispositivo usado para imobilizar a coluna cervical (pescoço) de vítimas de trauma, prevenindo ou minimizando lesões na medula espinhal durante o manuseio e transporte." },
    { word: "AVALIA", hint: "Verificar o paciente. Primeiro passo no XABCDE.", explanation: "Avaliar é o ato de examinar o paciente de forma sistemática (como no XABCDE) para identificar problemas e determinar a prioridade do tratamento. Na RCP, inclui verificar consciência, respiração e pulso." },
    { word: "VENTILAR", hint: "Ato de auxiliar a respiração.", explanation: "Ventilação é o ato de mover ar para dentro e para fora dos pulmões. Na RCP, a ventilação de resgate (boca a boca ou com dispositivo) fornece oxigênio a quem não consegue respirar por conta própria." },
    { word: "TORNIQUETE", hint: "Controle de hemorragia grave.", explanation: "Torniquete é um dispositivo usado para aplicar pressão em um membro, controlando hemorragias externas maciças que não podem ser contidas por outros métodos. É uma medida salvadora em traumas com sangramento exsanguinante." }
];

// --- Lógica da "Palavra Diária" ---
function getTodayDateString() {
    const today = new Date();
    // Ajusta para o fuso horário de Rio Branco (UTC-5)
    // Isso garante que a virada da "palavra do dia" ocorra à meia-noite no fuso horário local.
    const offset = -5 * 60; // Offset em minutos
    const rioBrancoTime = new Date(today.getTime() + (today.getTimezoneOffset() * 60000) + (offset * 60000));
    return rioBrancoTime.toISOString().slice(0, 10); // Formato YYYY-MM-DD
}

function getDailyWordData() {
    const todayDate = getTodayDateString();
    let lastPlayedDate = localStorage.getItem('lastPlayedDate');
    let dailyWordIndex = parseInt(localStorage.getItem('dailyWordIndex') || '0');

    if (lastPlayedDate !== todayDate) {
        // É um novo dia, pega a próxima palavra
        dailyWordIndex = (dailyWordIndex + 1) % terms.length; // Cicla pelas palavras
        localStorage.setItem('lastPlayedDate', todayDate);
        localStorage.setItem('dailyWordIndex', dailyWordIndex);
        localStorage.removeItem('guesses'); // Reseta as tentativas para o novo dia
        localStorage.removeItem('gameWon'); // Reseta o estado de vitória
        localStorage.removeItem('gameLost'); // Reseta o estado de derrota
    }
    return terms[dailyWordIndex];
}

// --- VARIÁVEIS GLOBAIS DO JOGO ---
let secretWordData = getDailyWordData();
let secretWord = secretWordData.word.toUpperCase();
let secretExplanation = secretWordData.explanation;
let currentHint = secretWordData.hint;
let guesses = JSON.parse(localStorage.getItem('guesses')) || []; // Carrega tentativas salvas
const maxGuesses = 6;
let currentGuessIndex = guesses.length; // Onde o usuário está agora na grade
let gameWon = JSON.parse(localStorage.getItem('gameWon')) || false;
let gameLost = JSON.parse(localStorage.getItem('gameLost')) || false;

// --- ELEMENTOS HTML ---
const hintText = document.getElementById('hint-text');
const gridContainer = document.getElementById('grid-container');
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');
const messageArea = document.getElementById('message-area');
const explanationArea = document.getElementById('explanation-area');
const revealedWord = document.getElementById('revealed-word');
const wordExplanation = document.getElementById('word-explanation');
const restartButton = document.getElementById('restart-button'); // Botão "Jogar Novamente Amanhã"

// --- FUNÇÕES DO JOGO ---

function initializeGame() {
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
        // Para aplicar cores corretamente ao carregar do localStorage, recriamos a lógica
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
                    tempSecret[presentIndex] = null; // Marca a letra como "usada"
                } else {
                    cell.classList.add('absent');
                }
            }
        }
    });

    // Verifica o estado final do jogo e desabilita input se já terminou
    if (gameWon) {
        showMessage("Você já acertou a palavra do dia!", 'success-message');
        revealExplanation();
        disableInput();
    } else if (gameLost) {
        showMessage(`Fim de jogo! A palavra era: ${secretWord}`, 'error-message');
        revealExplanation();
        disableInput();
    } else {
        // Se o jogo não terminou, habilita o input e o botão de tentar
        guessInput.disabled = false;
        submitButton.disabled = false;
        // Foca no input para facilitar a digitação
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

    // Salva a tentativa
    guesses.push(guess);
    localStorage.setItem('guesses', JSON.stringify(guesses));

    currentGuessIndex++;
    guessInput.value = ''; // Limpa o input
    guessInput.focus(); // Mantém o foco no input para a próxima tentativa

    if (guess === secretWord) {
        gameWon = true;
        localStorage.setItem('gameWon', true);
        showMessage('Parabéns! Você acertou!', 'success-message');
        revealExplanation();
        disableInput();
    } else if (currentGuessIndex >= maxGuesses) {
        gameLost = true;
        localStorage.setItem('gameLost', true);
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

// Botão para resetar o jogo para o próximo dia (só para testes ou no caso de querer jogar de novo no mesmo dia)
restartButton.addEventListener('click', () => {
    if (confirm("Isso irá resetar o jogo para o próximo termo. Deseja continuar?")) {
        localStorage.removeItem('lastPlayedDate');
        localStorage.removeItem('guesses');
        localStorage.removeItem('gameWon');
        localStorage.removeItem('gameLost');
        location.reload(); // Recarrega a página para iniciar um novo jogo
    }
});

// --- INICIALIZA O JOGO ---
initializeGame();
