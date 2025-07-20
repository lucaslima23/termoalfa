// --- BANCO DE PALAVRAS ---
// Cada objeto tem a palavra (word), uma dica (hint) e a explicação (explanation)
const terms = [
    { word: "DEA", hint: "Aparelho que aplica choque elétrico.", explanation: "DEA significa Desfibrilador Externo Automático. É um dispositivo portátil que diagnostica arritmias cardíacas com risco de vida (como FV ou TV sem pulso) e é capaz de tratá-las com desfibrilação, restabelecendo o ritmo cardíaco normal. Fundamental na parada cardiorrespiratória." },
    { word: "PULSO", hint: "Indica batimento cardíaco.", explanation: "O pulso é a onda de pressão gerada pelo batimento cardíaco, palpável em artérias como a carótida ou radial. Sua ausência em uma vítima inconsciente, que não respira, indica parada cardíaca." },
    { word: "TORAX", hint: "Local das compressões.", explanation: "O tórax é a região do corpo onde as compressões torácicas são realizadas, especificamente no centro do esterno. A compressão eficaz do tórax é vital para bombear sangue para o cérebro e órgãos vitais durante a RCP." },
    { word: "ASFIXIA", hint: "Causa comum de PCR em crianças.", explanation: "Asfixia é a privação severa de oxigênio. Em crianças, é uma causa comum de parada cardiorrespiratória, podendo ser causada por engasgos, sufocamento ou doenças respiratórias graves." },
    { word: "GASPI", hint: "Respiração agonal, ineficaz.", explanation: "Gasping (ou respiração agonal) é uma respiração ofegante, ruidosa e ineficaz que não fornece oxigênio adequado. É um sinal de parada cardíaca e deve ser interpretado como ausência de respiração normal, exigindo o início imediato da RCP." },
    { word: "SAMU", hint: "Serviço de emergência 192.", explanation: "SAMU (Serviço de Atendimento Móvel de Urgência) é o serviço de atendimento pré-hospitalar que deve ser acionado (telefone 192) em casos de parada cardiorrespiratória e outras emergências médicas. O acionamento precoce é um elo crucial da cadeia de sobrevivência." },
    { word: "VIAEREA", hint: "Primeira etapa vital, letra A do XABCDE.", explanation: "Via Aérea (Airway) é o canal que leva o ar aos pulmãos. A avaliação e desobstrução da via aérea são passos iniciais e fundamentais na RCP e no trauma (letra 'A' do XABCDE), pois garantem a oxigenação." },
    { word: "ESTENO", hint: "Osso central do tórax.", explanation: "O esterno é o osso plano e central do tórax onde as mãos são posicionadas para as compressões torácicas durante a RCP. É a estrutura sobre a qual o coração é comprimido." },
    { word: "CHOQUE", hint: "Estado de falha circulatória.", explanation: "Choque é uma condição grave onde o corpo não recebe oxigênio e nutrientes suficientes, geralmente devido a problemas circulatórios (como hemorragia massiva no trauma). É uma das principais causas de PCR e exige intervenção imediata para reverter a falha orgânica." },
    { word: "FRATURA", hint: "Lesão óssea que pode ocorrer na RCP.", explanation: "Fratura de costelas ou esterno é uma complicação potencial das compressões torácicas. Embora deva ser evitada, a qualidade das compressões (profundidade e frequência) é prioridade sobre a preocupação com fraturas, pois estas são menos graves do que a morte por PCR." },
    { word: "AFOGADO", hint: "Vítima que precisa de ventilação imediata.", explanation: "Vítima de afogamento. Nesses casos, a PCR geralmente é de origem hipóxica (falta de oxigênio), e as ventilações são cruciais e devem ser iniciadas o mais rápido possível, mesmo antes das compressões em alguns protocolos." },
    { word: "CADEIA", hint: "Sequência de ações para salvar vidas.", explanation: "Cadeia de Sobrevivência: é uma sequência de ações críticas (como reconhecimento precoce, acionamento do serviço de emergência, RCP precoce, desfibrilação e cuidados pós-parada) que, quando aplicadas corretamente, aumentam significativamente as chances de sobrevivência da vítima de PCR." },
    { word: "OXI", hint: "Gás vital para a respiração.", explanation: "O oxigênio é um gás essencial para a vida, transportado pelo sangue para as células. Na RCP, a ventilação fornece oxigênio aos pulmões para ser distribuído ao corpo." },
    { word: "COLAR", hint: "Suporte para coluna cervical.", explanation: "Colar cervical é um dispositivo usado para imobilizar a coluna cervical (pescoço) de vítimas de trauma, prevenindo ou minimizando lesões na medula espinhal durante o manuseio e transporte." },
    { word: "AVALIAR", hint: "Verificar o paciente. Primeiro passo no XABCDE.", explanation: "Avaliar é o ato de examinar o paciente de forma sistemática (como no XABCDE) para identificar problemas e determinar a prioridade do tratamento. Na RCP, inclui verificar consciência, respiração e pulso." },
    { word: "VENTILA", hint: "Ato de auxiliar a respiração.", explanation: "Ventilação é o ato de mover ar para dentro e para fora dos pulmões. Na RCP, a ventilação de resgate (boca a boca ou com dispositivo) fornece oxigênio a quem não consegue respirar por conta própria." },
    { word: "TORNIQ", hint: "Controle de hemorragia grave.", explanation: "Torniquete é um dispositivo usado para aplicar pressão em um membro, controlando hemorragias externas maciças que não podem ser contidas por outros métodos. É uma medida salvadora em traumas com sangramento exsanguinante." },
    { word: "TRAUMA", hint: "Lesão por agente externo.", explanation: "Trauma é uma lesão corporal causada por um agente externo (acidente, violência). No trauma grave, a PCR tem causas específicas e exige uma abordagem particular, como no ATLS." },
    { word: "HEMORRA", hint: "Sangramento excessivo.", explanation: "Hemorragia é a perda de sangue. Hemorragia exsanguinante (X do XABCDE) é a principal causa de PCR no trauma e exige controle imediato para evitar choque e parada cardíaca." },
    { word: "CRANIO", hint: "Parte da cabeça que protege o cérebro.", explanation: "O crânio é a estrutura óssea que protege o cérebro. Traumatismos cranioencefálicos (TCE) graves podem levar à PCR por lesão cerebral ou inchaço, afetando centros respiratórios." },
    { word: "MEDULA", hint: "Parte da coluna, lesão pode ser grave.", explanation: "A medula espinhal está dentro da coluna vertebral e transmite impulsos nervosos. Lesões medulares cervicais altas podem causar PCR por afetar a respiração ou o controle cardíaco." },
    { word: "REANIMA", hint: "Ação de restaurar a vida.", explanation: "Reanimar ou reanimação é o conjunto de manobras e procedimentos realizados para restaurar a circulação e a respiração em uma pessoa em parada cardiorrespiratória." },
    { word: "CARDIAC", hint: "Relacionado ao coração.", explanation: "Cardíaco refere-se ao coração. Uma parada cardíaca é a cessação da atividade mecânica do coração, que pode ser primária (do coração) ou secundária (por falta de oxigênio/sangue)." },
    { word: "PERFUSAO", hint: "Fluxo de sangue para os tecidos.", explanation: "Perfusão é o processo de fornecimento de sangue (e com ele oxigênio e nutrientes) aos tecidos e órgãos. As compressões torácicas visam manter a perfusão cerebral e coronariana durante a RCP." },
    { word: "HIPOVOLE", hint: "Baixo volume de sangue.", explanation: "Hipovolemia é a condição de baixo volume de sangue circulante, geralmente devido a hemorragia ou desidratação. É uma causa reversível de choque e PCR no trauma." },
    { word: "CRICOIDE", hint: "Cartilagem no pescoço, referência.", explanation: "A cartilagem cricóide é uma estrutura anatômica no pescoço, abaixo da cartilagem tireóide, importante como ponto de referência para procedimentos como a cricotireoidostomia de emergência." },
    { word: "CLAVICU", hint: "Osso que conecta o ombro ao esterno.", explanation: "A clavícula é o osso que conecta o ombro ao esterno. Sua fratura pode estar associada a pneumotórax ou lesões vasculares graves no trauma torácico." },
    { word: "HEMOTORA", hint: "Acúmulo de sangue no tórax.", explanation: "Hemotórax é o acúmulo de sangue na cavidade pleural (entre o pulmão e a parede torácica), geralmente causado por trauma. Grandes volumes podem levar a choque e PCR." },
    { word: "PRESSAO", hint: "Força do sangue nas artérias.", explanation: "Pressão arterial é a força que o sangue exerce sobre as paredes das artérias. Sua queda severa (hipotensão) é um sinal de choque e pode levar à PCR." },
    { word: "GOTEJO", hint: "Velocidade de infusão de fluidos.", explanation: "Gotejo ou taxa de infusão refere-se à velocidade de administração de fluidos intravenosos. Em casos de choque hipovolêmico, o 'gotejo rápido' é crucial para reposição volêmica." },
    { word: "ABDOMEN", hint: "Região do corpo abaixo do tórax.", explanation: "Abdômen é a região do corpo entre o tórax e a pelve. Traumas abdominais podem causar hemorragias internas maciças, levando a choque hipovolêmico e PCR." },
    { word: "MEDICAR", hint: "Administrar fármacos.", explanation: "Medicar é administrar medicamentos. Durante a RCP, alguns fármacos (como adrenalina) podem ser usados, embora a correção das causas subjacentes seja a prioridade no trauma." },
    { word: "PERICAR", hint: "Saco ao redor do coração.", explanation: "Pericárdio é o saco fibroso que envolve o coração. O acúmulo de sangue ou líquido nesse saco pode levar ao tamponamento cardíaco, uma causa reversível de PCR." },
    { word: "VENTRIC", hint: "Câmara inferior do coração.", explanation: "Ventrículo é uma das duas câmaras inferiores do coração que bombeiam sangue. A fibrilação ventricular (FV) é uma arritmia caótica que causa PCR e exige desfibrilação." },
    { word: "INFARTO", hint: "Ataque cardíaco, falta de fluxo.", explanation: "Infarto é a morte de tecido muscular cardíaco devido à falta de fluxo sanguíneo. É uma emergência cardíaca grave que pode levar à PCR." },
    { word: "QUEDA", hint: "Acidente comum em idosos e crianças.", explanation: "Queda é um tipo de acidente comum que pode resultar em lesões leves a graves, como fraturas e traumatismos, sendo uma causa frequente de atendimento de emergência." },
    { word: "CONTUSAO", hint: "Lesão por impacto sem corte na pele.", explanation: "Contusão é uma lesão causada por um impacto direto, resultando em dor, inchaço e equimose (roxo) sem quebrar a pele. Comum em traumas." }
];

// --- Configuração da Data de Início do Jogo ---
const GAME_START_DATE_STR = "2025-01-01"; // Data de início fixa para o ciclo de palavras
const GAME_START_DATE = new Date(GAME_START_DATE_STR + "T12:00:00Z"); // Usar UTC para cálculo consistente

// --- Lógica de Data e Palavra ---
function getRioBrancoDate(date) {
    // console.log("getRioBrancoDate: input date", date); // Comentado para limpar console
    const offset = -5 * 60; // Offset em minutos para o fuso horário de Rio Branco (UTC-5)
    const rioBrancoTime = new Date(date.getTime() + (date.getTimezoneOffset() * 60000) + (offset * 60000));
    // console.log("getRioBrancoDate: adjusted date", rioBrancoTime); // Comentado para limpar console
    return rioBrancoTime;
}

function getTodayDateStringRioBranco() {
    // console.log("getTodayDateStringRioBranco called."); // Comentado para limpar console
    const today = new Date();
    const rioBrancoTime = getRioBrancoDate(today);
    const dateString = rioBrancoTime.toISOString().slice(0, 10);
    // console.log("getTodayDateStringRioBranco: date string", dateString); // Comentado para limpar console
    return dateString;
}

function getWordIndexForDate(dateString) {
    // console.log("getWordIndexForDate called with dateString:", dateString); // Comentado para limpar console
    const targetDate = new Date(dateString + "T12:00:00Z"); // Usar UTC para cálculo consistente
    const oneDay = 1000 * 60 * 60 * 24;
    const diffTime = Math.abs(targetDate.getTime() - GAME_START_DATE.getTime());
    const diffDays = Math.floor(diffTime / oneDay);
    const index = diffDays % terms.length;
    // console.log(`Diff days: ${diffDays}, Terms length: ${terms.length}, Index: ${index}`); // Comentado para limpar console
    return index;
}

// --- VARIÁVEIS GLOBAIS DO JOGO ---
let secretWordData;
let secretWord;
let secretExplanation;
let currentHint;

let guesses; 
const maxGuesses = 6;
let currentGuessIndex; 
let gameWon;
let gameLost;

let isArchiveMode = false; 
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
const goToArchiveButton = document.getElementById('go-to-archive-button'); 
const archiveReturnButton = document.getElementById('archive-return-button'); 

// --- FUNÇÕES DO JOGO ---

function loadGameState(dateStringFromUrl) {
    // console.log("loadGameState called with dateStringFromUrl:", dateStringFromUrl); // Comentado
    currentPlayedDate = dateStringFromUrl || getTodayDateStringRioBranco();
    const storageKeySuffix = `-${currentPlayedDate}`; 
    // console.log("currentPlayedDate for this game instance:", currentPlayedDate, "Storage suffix:", storageKeySuffix); // Comentado

    isArchiveMode = !!dateStringFromUrl; 
    // console.log("isArchiveMode:", isArchiveMode); // Comentado

    const wordIndex = getWordIndexForDate(currentPlayedDate);
    secretWordData = terms[wordIndex];
    secretWord = secretWordData.word.toUpperCase();
    secretExplanation = secretWordData.explanation;
    currentHint = secretWordData.hint;
    // console.log("Secret Word loaded:", secretWord, "Hint:", currentHint); // Comentado

    guesses = JSON.parse(localStorage.getItem(`guesses${storageKeySuffix}`)) || [];
    gameWon = JSON.parse(localStorage.getItem(`gameWon${storageKeySuffix}`)) || false;
    gameLost = JSON.parse(localStorage.getItem(`gameLost${storageKeySuffix}`)) || false;
    currentGuessIndex = guesses.length;
    // console.log("Loaded Guesses:", guesses, "GameWon:", gameWon, "GameLost:", gameLost, "Current Guess Index:", currentGuessIndex); // Comentado

    // Controla a visibilidade dos botões de navegação
    if (goToArchiveButton) {
        // console.log("goToArchiveButton found. Setting display."); // Comentado
        goToArchiveButton.style.display = isArchiveMode ? 'none' : 'block';
    } else {
        // console.log("goToArchiveButton NOT found."); // Comentado
    }
    
    if (archiveReturnButton) {
        // console.log("archiveReturnButton found. Setting display."); // Comentado
        archiveReturnButton.style.display = isArchiveMode ? 'block' : 'none';
    } else {
        // console.log("archiveReturnButton NOT found."); // Comentado
    }
}

function initializeGame() {
    // console.log("initializeGame started."); // Comentado
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDate = urlParams.get('date');
    // console.log("URL parameter 'date':", selectedDate); // Comentado

    loadGameState(selectedDate); // This will log its own details

    if (!hintText) console.error("Element #hint-text not found!");
    hintText.textContent = `Dica: ${currentHint}`;
    
    if (!gridContainer) console.error("Element #grid-container not found!");
    gridContainer.style.setProperty('--word-length', secretWord.length);
    gridContainer.innerHTML = ''; 

    // Cria as células da grade
    // console.log("Creating grid with", secretWord.length, "letters and", maxGuesses, "rows."); // Comentado
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
    // console.log("Grid created."); // Comentado

    // Carrega tentativas anteriores e colore as células
    if (guesses.length > 0) {
        // console.log("Loading previous guesses."); // Comentado
        guesses.forEach((guess, index) => {
            const row = gridContainer.children[index];
            const tempSecret = secretWord.split(''); 
            const guessLetters = guess.split('');

            for (let i = 0; i < secretWord.length; i++) {
                const cell = row.children[i];
                const letter = guessLetters[i];
                if (cell && cell.children[0]) { 
                    cell.children[0].textContent = letter;
                }

                if (letter === tempSecret[i]) {
                    cell.classList.add('correct');
                    tempSecret[i] = null;
                }
            }

            for (let i = 0; i < secretWord.length; i++) {
                const cell = row.children[i];
                const letter = guessLetters[i];

                if (cell && !cell.classList.contains('correct')) { 
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
        // console.log("Previous guesses loaded and colored."); // Comentado
    } else {
        // console.log("No previous guesses to load."); // Comentado
    }


    // Lógica de exibição e habilitação do input
    if (gameWon || gameLost) {
        // console.log("Game state: WON or LOST."); // Comentado
        showMessage(gameWon ? "Você já acertou a palavra deste dia!" : `Fim de jogo! A palavra era: ${secretWord}`, gameWon ? 'success-message' : 'error-message');
        revealExplanation();
        disableInput();
    } else {
        // console.log("Game state: ONGOING. Enabling input."); // Comentado
        if (!guessInput) console.error("Element #guess-input not found!");
        if (!submitButton) console.error("Element #submit-guess not found!");
        guessInput.disabled = false;
        submitButton.disabled = false;
        guessInput.focus(); 
        if (!explanationArea) console.error("Element #explanation-area not found!");
        explanationArea.style.display = 'none'; 
    }
    // console.log("initializeGame finished."); // Comentado
}

function checkGuess() {
    // console.log("checkGuess called."); // Comentado
    const guess = guessInput.value.toUpperCase();
    messageArea.textContent = ''; 

    if (guess.length !== secretWord.length) {
        showMessage(`A palavra deve ter ${secretWord.length} letras!`);
        // console.log("Guess length mismatch."); // Comentado
        return;
    }
    if (currentGuessIndex >= maxGuesses) {
        showMessage('Você não tem mais tentativas!');
        // console.log("Max guesses reached."); // Comentado
        return;
    }

    const currentRow = gridContainer.children[currentGuessIndex];
    const secretLetters = secretWord.split(''); 
    const guessLetters = guess.split('');

    // 1. Marcar letras corretas (verde)
    for (let i = 0; i < secretWord.length; i++) {
        const cell = currentRow.children[i];
        const letter = guessLetters[i];
        if (cell && cell.children[0]) { 
            cell.children[0].textContent = letter;
        }

        if (letter === secretLetters[i]) {
            cell.classList.add('correct');
            secretLetters[i] = null;
        }
    }

    // 2. Marcar letras presentes (amarelo) e ausentes (cinza)
    for (let i = 0; i < secretWord.length; i++) {
        const cell = currentRow.children[i];
        const letter = guessLetters[i];

        if (!cell.classList.contains('correct')) { 
            const presentIndex = secretLetters.indexOf(letter);
            if (presentIndex !== -1) {
                cell.classList.add('present');
                secretLetters[presentIndex] = null;
            } else {
                cell.classList.add('absent');
            }
        }
    }

    // Salva a tentativa para a data que está sendo jogada
    localStorage.setItem(`guesses-${currentPlayedDate}`, JSON.stringify(guesses));
    // console.log("Guess saved for date:", currentPlayedDate); // Comentado

    currentGuessIndex++;
    guessInput.value = ''; 
    guessInput.focus();

    if (guess === secretWord) {
        gameWon = true;
        localStorage.setItem(`gameWon-${currentPlayedDate}`, true);
        showMessage('Parabéns! Você acertou!', 'success-message');
        revealExplanation();
        disableInput();
        // console.log("Game WON!"); // Comentado
    } else if (currentGuessIndex >= maxGuesses) {
        gameLost = true;
        localStorage.setItem(`gameLost-${currentPlayedDate}`, true);
        showMessage(`Fim de jogo! A palavra era: ${secretWord}`, 'error-message');
        revealExplanation();
        disableInput();
        // console.log("Game LOST!"); // Comentado
    } else {
        // console.log("Guess processed. Game continues."); // Comentado
    }
}

function showMessage(msg, type = 'info') {
    // console.log("showMessage called:", msg, type); // Comentado
    if (!messageArea) console.error("Element #message-area not found!");
    messageArea.textContent = msg;
    messageArea.className = 'message'; 
    messageArea.classList.add(type);
}

function revealExplanation() {
    // console.log("revealExplanation called."); // Comentado
    if (!explanationArea) console.error("Element #explanation-area not found!");
    if (!revealedWord) console.error("Element #revealed-word not found!");
    if (!wordExplanation) console.error("Element #word-explanation not found!");

    explanationArea.style.display = 'block';
    revealedWord.textContent = secretWord;
    wordExplanation.textContent = secretExplanation;
}

function disableInput() {
    // console.log("disableInput called."); // Comentado
    if (!guessInput) console.error("Element #guess-input not found!");
    if (!submitButton) console.error("Element #submit-guess not found!");
    guessInput.disabled = true;
    submitButton.disabled = true;
}

// --- EVENT LISTENERS ---
// Adição de verificação para garantir que os elementos existem antes de adicionar listeners
if (submitButton) {
    submitButton.addEventListener('click', checkGuess);
} else {
    // console.error("Submit button not found, cannot add event listener."); // Comentado
}

if (guessInput) {
    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !guessInput.disabled) {
            checkGuess();
        }
    });
} else {
    // console.error("Guess input not found, cannot add event listener."); // Comentado
}


if (goToArchiveButton) { 
    goToArchiveButton.addEventListener('click', () => {
        // console.log("Go to archive button clicked."); // Comentado
        window.location.href = 'archive.html'; 
    });
} else {
    // console.log("Go to archive button not found (this is normal on archive.html)."); // Comentado
}

if (archiveReturnButton) {
    archiveReturnButton.addEventListener('click', () => {
        // console.log("Archive return button clicked."); // Comentado
        window.location.href = 'index.html'; 
    });
} else {
    // console.log("Archive return button not found (this is normal on index.html, unless it's an archived game)."); // Comentado
}

// --- INICIALIZA O JOGO ---
// console.log("Calling initializeGame() globally."); // Comentado
initializeGame();
