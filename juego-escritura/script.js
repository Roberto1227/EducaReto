// Datos del juego
const gameData = {
    sentences: [
        // Nivel 1 (Ejercicios 1-5) - Básico
        {
            words: ["El", "gato", "duerme", "en", "el", "sofá"],
            correct: ["El", "gato", "duerme", "en", "el", "sofá"],
            difficulty: 1
        },
        {
            words: ["María", "estudia", "matemáticas", "todos", "los", "días"],
            correct: ["María", "estudia", "matemáticas", "todos", "los", "días"],
            difficulty: 1
        },
        {
            words: ["Los", "niños", "juegan", "en", "el", "parque"],
            correct: ["Los", "niños", "juegan", "en", "el", "parque"],
            difficulty: 1
        },
        {
            words: ["La", "profesora", "explica", "la", "lección", "muy", "bien"],
            correct: ["La", "profesora", "explica", "la", "lección", "muy", "bien"],
            difficulty: 1
        },
        {
            words: ["Mi", "hermana", "cocina", "delicioso", "arroz", "con", "pollo"],
            correct: ["Mi", "hermana", "cocina", "delicioso", "arroz", "con", "pollo"],
            difficulty: 1
        },
        
        // Nivel 2 (Ejercicios 6-10) - Intermedio
        {
            words: ["El", "estudiante", "diligente", "siempre", "completa", "sus", "tareas", "a", "tiempo"],
            correct: ["El", "estudiante", "diligente", "siempre", "completa", "sus", "tareas", "a", "tiempo"],
            difficulty: 2
        },
        {
            words: ["En", "la", "biblioteca", "pública", "hay", "muchos", "libros", "interesantes", "para", "leer"],
            correct: ["En", "la", "biblioteca", "pública", "hay", "muchos", "libros", "interesantes", "para", "leer"],
            difficulty: 2
        },
        {
            words: ["Los", "científicos", "investigan", "nuevas", "formas", "de", "energía", "renovable"],
            correct: ["Los", "científicos", "investigan", "nuevas", "formas", "de", "energía", "renovable"],
            difficulty: 2
        },
        {
            words: ["Mi", "abuela", "prepara", "deliciosas", "galletas", "de", "chocolate", "cada", "domingo"],
            correct: ["Mi", "abuela", "prepara", "deliciosas", "galletas", "de", "chocolate", "cada", "domingo"],
            difficulty: 2
        },
        {
            words: ["El", "médico", "recomendó", "hacer", "ejercicio", "regularmente", "para", "mantener", "la", "salud"],
            correct: ["El", "médico", "recomendó", "hacer", "ejercicio", "regularmente", "para", "mantener", "la", "salud"],
            difficulty: 2
        },
        
        // Nivel 3 (Ejercicios 11-15) - Avanzado
        {
            words: ["La", "tecnología", "moderna", "ha", "revolucionado", "la", "forma", "en", "que", "nos", "comunicamos", "diariamente"],
            correct: ["La", "tecnología", "moderna", "ha", "revolucionado", "la", "forma", "en", "que", "nos", "comunicamos", "diariamente"],
            difficulty: 3
        },
        {
            words: ["Los", "investigadores", "descubrieron", "una", "nueva", "especie", "de", "mariposa", "en", "la", "selva", "amazónica"],
            correct: ["Los", "investigadores", "descubrieron", "una", "nueva", "especie", "de", "mariposa", "en", "la", "selva", "amazónica"],
            difficulty: 3
        },
        {
            words: ["El", "arquitecto", "diseñó", "un", "edificio", "sustentable", "que", "utiliza", "energía", "solar", "y", "reciclaje", "de", "agua"],
            correct: ["El", "arquitecto", "diseñó", "un", "edificio", "sustentable", "que", "utiliza", "energía", "solar", "y", "reciclaje", "de", "agua"],
            difficulty: 3
        },
        {
            words: ["La", "educación", "es", "fundamental", "para", "el", "desarrollo", "personal", "y", "profesional", "de", "cada", "individuo"],
            correct: ["La", "educación", "es", "fundamental", "para", "el", "desarrollo", "personal", "y", "profesional", "de", "cada", "individuo"],
            difficulty: 3
        },
        {
            words: ["Los", "astronautas", "realizaron", "experimentos", "científicos", "en", "la", "Estación", "Espacial", "Internacional"],
            correct: ["Los", "astronautas", "realizaron", "experimentos", "científicos", "en", "la", "Estación", "Espacial", "Internacional"],
            difficulty: 3
        },
        
        // Nivel 4 (Ejercicios 16-20) - Experto
        {
            words: ["La", "inteligencia", "artificial", "está", "transformando", "radicalmente", "la", "industria", "y", "la", "sociedad", "moderna"],
            correct: ["La", "inteligencia", "artificial", "está", "transformando", "radicalmente", "la", "industria", "y", "la", "sociedad", "moderna"],
            difficulty: 4
        },
        {
            words: ["Los", "filósofos", "han", "debate", "durante", "siglos", "sobre", "la", "naturaleza", "del", "conocimiento", "y", "la", "verdad"],
            correct: ["Los", "filósofos", "han", "debate", "durante", "siglos", "sobre", "la", "naturaleza", "del", "conocimiento", "y", "la", "verdad"],
            difficulty: 4
        },
        {
            words: ["El", "cambio", "climático", "representa", "uno", "de", "los", "desafíos", "más", "urgentes", "de", "nuestro", "tiempo"],
            correct: ["El", "cambio", "climático", "representa", "uno", "de", "los", "desafíos", "más", "urgentes", "de", "nuestro", "tiempo"],
            difficulty: 4
        },
        {
            words: ["La", "neurociencia", "moderna", "ha", "revelado", "secretos", "fascinantes", "sobre", "el", "funcionamiento", "del", "cerebro", "humano"],
            correct: ["La", "neurociencia", "moderna", "ha", "revelado", "secretos", "fascinantes", "sobre", "el", "funcionamiento", "del", "cerebro", "humano"],
            difficulty: 4
        },
        {
            words: ["Los", "artistas", "contemporáneos", "exploran", "nuevas", "formas", "de", "expresión", "que", "desafían", "las", "convenciones", "tradicionales"],
            correct: ["Los", "artistas", "contemporáneos", "exploran", "nuevas", "formas", "de", "expresión", "que", "desafían", "las", "convenciones", "tradicionales"],
            difficulty: 4
        }
    ],
    synonyms: [
        // Nivel 1 (Ejercicios 1-5) - Básico
        {
            word: "grande",
            options: ["enorme", "pequeño", "mediano", "gigante"],
            correct: 0,
            difficulty: 1
        },
        {
            word: "rápido",
            options: ["veloz", "lento", "tranquilo", "pausado"],
            correct: 0,
            difficulty: 1
        },
        {
            word: "hermoso",
            options: ["bonito", "feo", "simple", "común"],
            correct: 0,
            difficulty: 1
        },
        {
            word: "inteligente",
            options: ["listo", "tonto", "normal", "común"],
            correct: 0,
            difficulty: 1
        },
        {
            word: "alegre",
            options: ["feliz", "triste", "neutral", "aburrido"],
            correct: 0,
            difficulty: 1
        },
        
        // Nivel 2 (Ejercicios 6-10) - Intermedio
        {
            word: "valiente",
            options: ["audaz", "cobarde", "tímido", "normal"],
            correct: 0,
            difficulty: 2
        },
        {
            word: "sabio",
            options: ["erudito", "ignorante", "joven", "común"],
            correct: 0,
            difficulty: 2
        },
        {
            word: "tranquilo",
            options: ["sereno", "nervioso", "activo", "ruidoso"],
            correct: 0,
            difficulty: 2
        },
        {
            word: "fuerte",
            options: ["robusto", "débil", "frágil", "pequeño"],
            correct: 0,
            difficulty: 2
        },
        {
            word: "limpio",
            options: ["pulcro", "sucio", "normal", "común"],
            correct: 0,
            difficulty: 2
        },
        
        // Nivel 3 (Ejercicios 11-15) - Avanzado
        {
            word: "perspicaz",
            options: ["agudo", "torpe", "lento", "común"],
            correct: 0,
            difficulty: 3
        },
        {
            word: "prudente",
            options: ["cauteloso", "imprudente", "valiente", "normal"],
            correct: 0,
            difficulty: 3
        },
        {
            word: "elocuente",
            options: ["expresivo", "tímido", "callado", "común"],
            correct: 0,
            difficulty: 3
        },
        {
            word: "tenaz",
            options: ["perseverante", "débil", "frágil", "normal"],
            correct: 0,
            difficulty: 3
        },
        {
            word: "sagaz",
            options: ["astuto", "ingenuo", "simple", "común"],
            correct: 0,
            difficulty: 3
        },
        
        // Nivel 4 (Ejercicios 16-20) - Experto
        {
            word: "prolífico",
            options: ["fecundo", "estéril", "pobre", "normal"],
            correct: 0,
            difficulty: 4
        },
        {
            word: "perspicaz",
            options: ["penetrante", "superficial", "simple", "común"],
            correct: 0,
            difficulty: 4
        },
        {
            word: "magnánimo",
            options: ["generoso", "egoísta", "pequeño", "normal"],
            correct: 0,
            difficulty: 4
        },
        {
            word: "sagaz",
            options: ["ingenioso", "torpe", "lento", "común"],
            correct: 0,
            difficulty: 4
        },
        {
            word: "perseverante",
            options: ["constante", "inconstante", "débil", "normal"],
            correct: 0,
            difficulty: 4
        }
    ],
    writing: [
        // Nivel 1 (Ejercicios 1-5) - Básico
        {
            text: "El ___ es un animal muy ___ que vive en el ___.",
            blanks: ["perro", "fiel", "hogar"],
            options: [
                ["perro", "gato", "pájaro", "pez"],
                ["fiel", "grande", "pequeño", "rápido"],
                ["hogar", "bosque", "mar", "cielo"]
            ],
            difficulty: 1
        },
        {
            text: "María ___ muy bien y siempre ___ a sus amigos.",
            blanks: ["canta", "ayuda"],
            options: [
                ["canta", "corre", "duerme", "come"],
                ["ayuda", "ignora", "molesta", "evita"]
            ],
            difficulty: 1
        },
        {
            text: "En el ___ hace mucho ___ y los ___ están muy verdes.",
            blanks: ["verano", "calor", "árboles"],
            options: [
                ["verano", "invierno", "otoño", "primavera"],
                ["calor", "frío", "viento", "lluvia"],
                ["árboles", "flores", "piedras", "edificios"]
            ],
            difficulty: 1
        },
        {
            text: "La ___ prepara ___ deliciosas para toda la ___.",
            blanks: ["mamá", "comidas", "familia"],
            options: [
                ["mamá", "papá", "hermana", "abuela"],
                ["comidas", "historias", "canciones", "dibujos"],
                ["familia", "escuela", "ciudad", "casa"]
            ],
            difficulty: 1
        },
        {
            text: "Los ___ estudian ___ en la ___ todos los días.",
            blanks: ["niños", "matemáticas", "escuela"],
            options: [
                ["niños", "adultos", "ancianos", "bebés"],
                ["matemáticas", "música", "deporte", "arte"],
                ["escuela", "casa", "parque", "biblioteca"]
            ],
            difficulty: 1
        },
        
        // Nivel 2 (Ejercicios 6-10) - Intermedio
        {
            text: "El ___ investigó ___ sobre el ___ durante muchos años.",
            blanks: ["científico", "fenómenos", "universo"],
            options: [
                ["científico", "médico", "profesor", "ingeniero"],
                ["fenómenos", "problemas", "soluciones", "misterios"],
                ["universo", "planeta", "país", "ciudad"]
            ],
            difficulty: 2
        },
        {
            text: "La ___ desarrolló una ___ innovadora para ___ la contaminación.",
            blanks: ["empresa", "tecnología", "reducir"],
            options: [
                ["empresa", "universidad", "gobierno", "familia"],
                ["tecnología", "estrategia", "método", "solución"],
                ["reducir", "aumentar", "mantener", "evitar"]
            ],
            difficulty: 2
        },
        {
            text: "Los ___ organizaron una ___ para ___ fondos para la caridad.",
            blanks: ["estudiantes", "campaña", "recaudar"],
            options: [
                ["estudiantes", "profesores", "padres", "vecinos"],
                ["campaña", "fiesta", "reunión", "conferencia"],
                ["recaudar", "gastar", "ahorrar", "invertir"]
            ],
            difficulty: 2
        },
        {
            text: "El ___ diseñó un ___ que utiliza ___ renovable.",
            blanks: ["arquitecto", "edificio", "energía"],
            options: [
                ["arquitecto", "médico", "abogado", "músico"],
                ["edificio", "casa", "puente", "carretera"],
                ["energía", "agua", "tierra", "aire"]
            ],
            difficulty: 2
        },
        {
            text: "La ___ publicó un ___ sobre ___ ambiental en la revista científica.",
            blanks: ["investigadora", "artículo", "conservación"],
            options: [
                ["investigadora", "escritora", "pintora", "cantante"],
                ["artículo", "libro", "poema", "canción"],
                ["conservación", "destrucción", "contaminación", "abandono"]
            ],
            difficulty: 2
        },
        
        // Nivel 3 (Ejercicios 11-15) - Avanzado
        {
            text: "El ___ desarrolló una ___ revolucionaria que ___ la forma de ___ información.",
            blanks: ["programador", "aplicación", "transforma", "procesar"],
            options: [
                ["programador", "diseñador", "escritor", "músico"],
                ["aplicación", "herramienta", "método", "técnica"],
                ["transforma", "mantiene", "preserva", "conserva"],
                ["procesar", "almacenar", "destruir", "ignorar"]
            ],
            difficulty: 3
        },
        {
            text: "Los ___ colaboraron en un ___ internacional para ___ el cambio climático.",
            blanks: ["gobiernos", "proyecto", "combatir"],
            options: [
                ["gobiernos", "empresas", "familias", "individuos"],
                ["proyecto", "plan", "idea", "sueño"],
                ["combatir", "ignorar", "aceptar", "promover"]
            ],
            difficulty: 3
        },
        {
            text: "La ___ estableció un ___ de ___ para estudiantes de ___ recursos.",
            blanks: ["universidad", "programa", "becas", "escasos"],
            options: [
                ["universidad", "escuela", "empresa", "hospital"],
                ["programa", "plan", "método", "sistema"],
                ["becas", "trabajos", "premios", "regalos"],
                ["escasos", "abundantes", "suficientes", "excesivos"]
            ],
            difficulty: 3
        },
        {
            text: "El ___ creó una ___ que ___ la ___ entre diferentes culturas.",
            blanks: ["artista", "obra", "promueve", "comprensión"],
            options: [
                ["artista", "científico", "médico", "abogado"],
                ["obra", "invento", "descubrimiento", "solución"],
                ["promueve", "obstaculiza", "evita", "ignora"],
                ["comprensión", "conflicto", "separación", "división"]
            ],
            difficulty: 3
        },
        {
            text: "Los ___ implementaron un ___ de ___ para mejorar la ___ de los pacientes.",
            blanks: ["médicos", "sistema", "monitoreo", "calidad"],
            options: [
                ["médicos", "enfermeros", "técnicos", "administradores"],
                ["sistema", "método", "herramienta", "proceso"],
                ["monitoreo", "tratamiento", "diagnóstico", "cirugía"],
                ["calidad", "cantidad", "velocidad", "precio"]
            ],
            difficulty: 3
        },
        
        // Nivel 4 (Ejercicios 16-20) - Experto
        {
            text: "El ___ desarrolló una ___ que ___ la ___ de datos de manera ___ y ___.",
            blanks: ["ingeniero", "algoritmo", "procesa", "información", "eficiente", "segura"],
            options: [
                ["ingeniero", "científico", "artista", "músico"],
                ["algoritmo", "método", "herramienta", "técnica"],
                ["procesa", "destruye", "ignora", "almacena"],
                ["información", "energía", "agua", "tierra"],
                ["eficiente", "lenta", "compleja", "simple"],
                ["segura", "peligrosa", "insegura", "riesgosa"]
            ],
            difficulty: 4
        },
        {
            text: "La ___ estableció un ___ de ___ que ___ la ___ entre ___ y ___.",
            blanks: ["organización", "marco", "cooperación", "facilita", "comunicación", "investigadores", "empresas"],
            options: [
                ["organización", "empresa", "familia", "individuo"],
                ["marco", "plan", "método", "herramienta"],
                ["cooperación", "competencia", "rivalidad", "separación"],
                ["facilita", "dificulta", "obstaculiza", "imposibilita"],
                ["comunicación", "separación", "aislamiento", "división"],
                ["investigadores", "estudiantes", "trabajadores", "clientes"],
                ["empresas", "familias", "individuos", "gobiernos"]
            ],
            difficulty: 4
        },
        {
            text: "El ___ diseñó una ___ que ___ la ___ de ___ mediante ___ ___.",
            blanks: ["investigador", "metodología", "optimiza", "eficiencia", "procesos", "técnicas", "innovadoras"],
            options: [
                ["investigador", "artista", "músico", "escritor"],
                ["metodología", "herramienta", "máquina", "dispositivo"],
                ["optimiza", "deteriora", "empeora", "destruye"],
                ["eficiencia", "ineficiencia", "lentitud", "complejidad"],
                ["procesos", "objetos", "personas", "lugares"],
                ["técnicas", "métodos", "herramientas", "sistemas"],
                ["innovadoras", "tradicionales", "antiguas", "obsoletas"]
            ],
            difficulty: 4
        },
        {
            text: "Los ___ colaboraron en el ___ de una ___ que ___ la ___ de ___ en ___ ___.",
            blanks: ["científicos", "desarrollo", "tecnología", "mejora", "calidad", "vida", "comunidades", "rurales"],
            options: [
                ["científicos", "artistas", "músicos", "escritores"],
                ["desarrollo", "destrucción", "abandono", "ignorancia"],
                ["tecnología", "herramienta", "método", "sistema"],
                ["mejora", "empeora", "deteriora", "destruye"],
                ["calidad", "cantidad", "precio", "velocidad"],
                ["vida", "muerte", "sufrimiento", "dolor"],
                ["comunidades", "individuos", "empresas", "gobiernos"],
                ["rurales", "urbanas", "industriales", "comerciales"]
            ],
            difficulty: 4
        },
        {
            text: "La ___ implementó un ___ de ___ que ___ la ___ de ___ mediante ___ ___ y ___ ___.",
            blanks: ["institución", "sistema", "evaluación", "garantiza", "excelencia", "servicios", "métricas", "objetivas", "retroalimentación", "continua"],
            options: [
                ["institución", "persona", "familia", "individuo"],
                ["sistema", "método", "herramienta", "técnica"],
                ["evaluación", "ignorancia", "negligencia", "abandono"],
                ["garantiza", "imposibilita", "dificulta", "obstaculiza"],
                ["excelencia", "mediocridad", "deficiencia", "fracaso"],
                ["servicios", "productos", "objetos", "lugares"],
                ["métricas", "opiniones", "sentimientos", "sueños"],
                ["objetivas", "subjetivas", "personales", "emocionales"],
                ["retroalimentación", "ignorancia", "silencia", "abandono"],
                ["continua", "ocasional", "esporádica", "intermitente"]
            ],
            difficulty: 4
        }
    ]
};

// Estado del juego
let currentGame = null;
let currentLevel = {
    sentences: 0,
    synonyms: 0,
    writing: 0
};
let scores = {
    sentences: 0,
    synonyms: 0,
    writing: 0
};
let selectedWords = [];
let selectedOption = null;
let gameCompleted = {
    sentences: false,
    synonyms: false,
    writing: false
};
let currentGameCompleted = false;
let audioEnabled = true;

// Elementos del DOM
const gameSelector = document.querySelector('.game-selector');
const gameSections = document.querySelectorAll('.game-section');
const gameButtons = document.querySelectorAll('.game-btn');
const backButton = document.getElementById('back-to-menu');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function initializeGame() {
    // Inicializar totales de niveles
    document.getElementById('sentences-total').textContent = gameData.sentences.length;
    document.getElementById('synonyms-total').textContent = gameData.synonyms.length;
    document.getElementById('writing-total').textContent = gameData.writing.length;
    
    // Event listeners para botones de juego
    gameButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const gameType = this.dataset.game;
            startGame(gameType);
        });
    });

    // Event listener para botón de regreso
    backButton.addEventListener('click', function() {
        showGameSelector();
    });

    // Event listeners para controles de cada juego
    setupGameControls();
}

function setupGameControls() {
    // Controles del juego de oraciones
    document.getElementById('check-sentence').addEventListener('click', checkSentence);
    document.getElementById('hint-sentence').addEventListener('click', giveHint);
    document.getElementById('reset-sentence').addEventListener('click', resetSentence);
    document.getElementById('next-sentence').addEventListener('click', nextSentence);

    // Controles del juego de sinónimos
    document.getElementById('reset-synonym').addEventListener('click', resetSynonym);
    document.getElementById('next-synonym').addEventListener('click', nextSynonym);

    // Controles del juego de escritura
    document.getElementById('check-writing').addEventListener('click', checkWriting);
    document.getElementById('reset-writing').addEventListener('click', resetWriting);
    document.getElementById('next-writing').addEventListener('click', nextWriting);
}

function startGame(gameType) {
    currentGame = gameType;
    currentGameCompleted = gameCompleted[gameType];
    hideAllSections();
    showGameSelector(false);
    
    switch(gameType) {
        case 'sentences':
            startSentenceGame();
            break;
        case 'synonyms':
            startSynonymGame();
            break;
        case 'writing':
            startWritingGame();
            break;
    }
}

function showGameSelector(show = true) {
    if (show) {
        gameSelector.classList.remove('hidden');
        backButton.classList.add('hidden');
        updateGameButtons();
    } else {
        gameSelector.classList.add('hidden');
        backButton.classList.remove('hidden');
    }
}

function updateGameButtons() {
    gameButtons.forEach(btn => {
        const gameType = btn.dataset.game;
        const isCompleted = gameCompleted[gameType];
        
        if (isCompleted) {
            btn.classList.add('completed');
            btn.querySelector('.icon').textContent = '✅';
        } else {
            btn.classList.remove('completed');
            // Restaurar iconos originales
            const icons = {
                'sentences': '📝',
                'synonyms': '🔄',
                'writing': '✍️'
            };
            btn.querySelector('.icon').textContent = icons[gameType];
        }
    });
}

function hideAllSections() {
    gameSections.forEach(section => {
        section.classList.add('hidden');
    });
}

// Juego de Construir Oraciones
function startSentenceGame() {
    const gameSection = document.getElementById('sentences-game');
    gameSection.classList.remove('hidden');
    gameSection.classList.add('fade-in');
    
    loadSentence();
}

function loadSentence() {
    const sentenceData = gameData.sentences[currentLevel.sentences];
    const shuffledWords = [...sentenceData.words].sort(() => Math.random() - 0.5);
    
    // Mostrar nivel de dificultad
    const difficultyLevels = ['Básico', 'Intermedio', 'Avanzado', 'Experto'];
    const difficultyText = difficultyLevels[sentenceData.difficulty - 1];
    const instruction = document.querySelector('#sentences-game .instruction p');
    instruction.innerHTML = `Ordena las palabras para formar una oración correcta: <span class="difficulty-badge difficulty-${sentenceData.difficulty}">${difficultyText}</span>`;
    
    // Mostrar palabras mezcladas
    const wordsContainer = document.getElementById('sentence-words');
    wordsContainer.innerHTML = '';
    
    shuffledWords.forEach((word, index) => {
        const wordElement = document.createElement('div');
        wordElement.className = 'word';
        wordElement.textContent = word;
        wordElement.dataset.word = word;
        wordElement.addEventListener('click', selectWord);
        wordsContainer.appendChild(wordElement);
    });
    
    // Limpiar área de respuesta
    const answerContainer = document.getElementById('answer-words');
    answerContainer.innerHTML = '';
    selectedWords = [];
    
    // Resetear estado del nivel actual
    currentGameCompleted = false;
    
    // Ocultar botones
    document.getElementById('next-sentence').classList.add('hidden');
    document.getElementById('check-sentence').classList.remove('hidden');
    
    // Limpiar feedback
    document.getElementById('sentence-feedback').innerHTML = '';
}

function selectWord(event) {
    const word = event.target;
    const wordText = word.dataset.word;
    
    if (word.classList.contains('selected')) {
        // Deseleccionar palabra
        word.classList.remove('selected');
        selectedWords = selectedWords.filter(w => w !== wordText);
        
        // Remover de área de respuesta
        const answerContainer = document.getElementById('answer-words');
        const answerWords = answerContainer.querySelectorAll('.word');
        answerWords.forEach(answerWord => {
            if (answerWord.dataset.word === wordText) {
                answerWord.remove();
            }
        });
    } else {
        // Seleccionar palabra
        word.classList.add('selected');
        selectedWords.push(wordText);
        
        // Agregar a área de respuesta
        const answerContainer = document.getElementById('answer-words');
        const answerWord = document.createElement('div');
        answerWord.className = 'word';
        answerWord.textContent = wordText;
        answerWord.dataset.word = wordText;
        answerWord.addEventListener('click', removeFromAnswer);
        answerContainer.appendChild(answerWord);
    }
}

function removeFromAnswer(event) {
    const word = event.target;
    const wordText = word.dataset.word;
    
    // Remover de área de respuesta
    word.remove();
    
    // Deseleccionar en área de palabras
    const wordsContainer = document.getElementById('sentence-words');
    const wordElements = wordsContainer.querySelectorAll('.word');
    wordElements.forEach(wordElement => {
        if (wordElement.dataset.word === wordText) {
            wordElement.classList.remove('selected');
        }
    });
    
    selectedWords = selectedWords.filter(w => w !== wordText);
}

function checkSentence() {
    const sentenceData = gameData.sentences[currentLevel.sentences];
    const isCorrect = JSON.stringify(selectedWords) === JSON.stringify(sentenceData.correct);
    
    const feedback = document.getElementById('sentence-feedback');
    
    if (isCorrect) {
        feedback.innerHTML = '¡Correcto! 🎉';
        feedback.className = 'feedback success';
        scores.sentences += 10;
        updateScore('sentences');
        
        // Reproducir sonido de éxito
        playCorrectSound();
        
        // Marcar palabras como correctas
        const answerWords = document.getElementById('answer-words').querySelectorAll('.word');
        answerWords.forEach(word => word.classList.add('correct'));
    } else {
        feedback.innerHTML = '❌ Incorrecto. Inténtalo de nuevo.';
        feedback.className = 'feedback error';
        
        // Reproducir sonido de error
        playErrorSound();
        
        // Marcar palabras incorrectas
        const answerWords = document.getElementById('answer-words').querySelectorAll('.word');
        answerWords.forEach(word => word.classList.add('incorrect'));
        
        setTimeout(() => {
            answerWords.forEach(word => word.classList.remove('incorrect'));
        }, 1000);
    }
    
    // Siempre mostrar botón siguiente
    document.getElementById('next-sentence').classList.remove('hidden');
    document.getElementById('check-sentence').classList.add('hidden');
}

function giveHint() {
    const sentenceData = gameData.sentences[currentLevel.sentences];
    const feedback = document.getElementById('sentence-feedback');
    
    // Reproducir sonido de pista
    playHintSound();
    
    if (selectedWords.length === 0) {
        feedback.innerHTML = `Pista: La oración comienza con "${sentenceData.correct[0]}"`;
    } else {
        const nextWord = sentenceData.correct[selectedWords.length];
        if (nextWord) {
            feedback.innerHTML = `Pista: La siguiente palabra es "${nextWord}"`;
        }
    }
    feedback.className = 'feedback info';
}

function resetSentence() {
    // Limpiar estado del nivel actual
    selectedWords = [];
    currentGameCompleted = false;
    
    // Recargar el nivel actual
    loadSentence();
    
    // Limpiar feedback
    document.getElementById('sentence-feedback').innerHTML = '';
}

function nextSentence() {
    // Reproducir sonido de siguiente
    playNextSound();
    
    currentLevel.sentences++;
    if (currentLevel.sentences >= gameData.sentences.length) {
        // Juego completado - mostrar felicitaciones
        showCongratulations('sentences');
        return;
    }
    loadSentence();
}

// Juego de Sinónimos
function startSynonymGame() {
    const gameSection = document.getElementById('synonyms-game');
    gameSection.classList.remove('hidden');
    gameSection.classList.add('fade-in');
    
    loadSynonym();
}

function loadSynonym() {
    const synonymData = gameData.synonyms[currentLevel.synonyms];
    
    // Mostrar nivel de dificultad
    const difficultyLevels = ['Básico', 'Intermedio', 'Avanzado', 'Experto'];
    const difficultyText = difficultyLevels[synonymData.difficulty - 1];
    const instruction = document.querySelector('#synonyms-game .instruction p');
    instruction.innerHTML = `Encuentra el sinónimo de la palabra: <span class="difficulty-badge difficulty-${synonymData.difficulty}">${difficultyText}</span>`;
    
    // Mostrar palabra objetivo
    document.getElementById('target-word').textContent = synonymData.word;
    
    // Mostrar opciones
    const optionsContainer = document.getElementById('synonym-options');
    optionsContainer.innerHTML = '';
    
    synonymData.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.dataset.index = index;
        optionBtn.addEventListener('click', selectSynonymOption);
        optionsContainer.appendChild(optionBtn);
    });
    
    // Resetear estado del nivel actual
    currentGameCompleted = false;
    
    // Ocultar botón siguiente
    document.getElementById('next-synonym').classList.add('hidden');
    
    // Limpiar feedback
    document.getElementById('synonym-feedback').innerHTML = '';
    selectedOption = null;
}

function selectSynonymOption(event) {
    const option = event.target;
    const index = parseInt(option.dataset.index);
    
    // Deseleccionar opciones anteriores
    const allOptions = document.querySelectorAll('#synonym-options .option-btn');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    
    // Seleccionar nueva opción
    option.classList.add('selected');
    selectedOption = index;
    
    // Verificar respuesta inmediatamente
    setTimeout(() => {
        checkSynonym();
    }, 500);
}

function checkSynonym() {
    const synonymData = gameData.synonyms[currentLevel.synonyms];
    const isCorrect = selectedOption === synonymData.correct;
    
    const feedback = document.getElementById('synonym-feedback');
    const allOptions = document.querySelectorAll('#synonym-options .option-btn');
    
    if (isCorrect) {
        feedback.innerHTML = '¡Correcto! 🎉';
        feedback.className = 'feedback success';
        scores.synonyms += 10;
        updateScore('synonyms');
        
        // Reproducir sonido de éxito
        playCorrectSound();
        
        allOptions[selectedOption].classList.add('correct');
    } else {
        feedback.innerHTML = '❌ Incorrecto. Inténtalo de nuevo.';
        feedback.className = 'feedback error';
        
        // Reproducir sonido de error
        playErrorSound();
        
        allOptions[selectedOption].classList.add('incorrect');
        allOptions[synonymData.correct].classList.add('correct');
        
        setTimeout(() => {
            allOptions.forEach(opt => {
                opt.classList.remove('incorrect', 'correct', 'selected');
            });
            selectedOption = null;
        }, 2000);
    }
    
    // Siempre mostrar botón siguiente
    document.getElementById('next-synonym').classList.remove('hidden');
}

function resetSynonym() {
    // Limpiar estado del nivel actual
    selectedOption = null;
    currentGameCompleted = false;
    
    // Recargar el nivel actual
    loadSynonym();
    
    // Limpiar feedback
    document.getElementById('synonym-feedback').innerHTML = '';
}

function nextSynonym() {
    // Reproducir sonido de siguiente
    playNextSound();
    
    currentLevel.synonyms++;
    if (currentLevel.synonyms >= gameData.synonyms.length) {
        // Juego completado - mostrar felicitaciones
        showCongratulations('synonyms');
        return;
    }
    loadSynonym();
}

// Juego de Mejorar Escritura
function startWritingGame() {
    const gameSection = document.getElementById('writing-game');
    gameSection.classList.remove('hidden');
    gameSection.classList.add('fade-in');
    
    loadWriting();
}

function loadWriting() {
    const writingData = gameData.writing[currentLevel.writing];
    
    // Mostrar nivel de dificultad
    const difficultyLevels = ['Básico', 'Intermedio', 'Avanzado', 'Experto'];
    const difficultyText = difficultyLevels[writingData.difficulty - 1];
    const instruction = document.querySelector('#writing-game .instruction p');
    instruction.innerHTML = `Completa el texto con las palabras correctas: <span class="difficulty-badge difficulty-${writingData.difficulty}">${difficultyText}</span>`;
    
    // Mostrar texto con espacios en blanco
    const textContainer = document.getElementById('writing-text');
    const textParts = writingData.text.split('___');
    textContainer.innerHTML = '';
    
    textParts.forEach((part, index) => {
        // Agregar el texto
        const textNode = document.createTextNode(part);
        textContainer.appendChild(textNode);
        
        // Agregar espacio en blanco si no es el último elemento
        if (index < textParts.length - 1) {
            const blank = document.createElement('span');
            blank.className = 'blank';
            blank.dataset.index = index;
            blank.addEventListener('click', selectBlank);
            textContainer.appendChild(blank);
        }
    });
    
    // Mostrar opciones
    const optionsContainer = document.getElementById('writing-options');
    optionsContainer.innerHTML = '';
    
    writingData.options.forEach((optionGroup, groupIndex) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'option-group';
        groupDiv.innerHTML = `<h4>Opción ${groupIndex + 1}:</h4>`;
        
        optionGroup.forEach((option, optionIndex) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.dataset.group = groupIndex;
            optionBtn.dataset.option = option;
            optionBtn.addEventListener('click', selectWritingOption);
            groupDiv.appendChild(optionBtn);
        });
        
        optionsContainer.appendChild(groupDiv);
    });
    
    // Resetear estado del nivel actual
    currentGameCompleted = false;
    
    // Ocultar botón siguiente
    document.getElementById('next-writing').classList.add('hidden');
    document.getElementById('check-writing').classList.remove('hidden');
    
    // Limpiar feedback
    document.getElementById('writing-feedback').innerHTML = '';
    selectedOption = null;
}

function selectBlank(event) {
    const blank = event.target;
    
    // Deseleccionar espacios anteriores
    document.querySelectorAll('.blank').forEach(b => b.classList.remove('selected'));
    
    // Seleccionar espacio actual
    blank.classList.add('selected');
    selectedOption = parseInt(blank.dataset.index);
}

function selectWritingOption(event) {
    const option = event.target;
    const selectedBlanks = document.querySelectorAll('.blank.selected');
    
    if (selectedBlanks.length === 0) {
        const feedback = document.getElementById('writing-feedback');
        feedback.innerHTML = 'Primero selecciona un espacio en blanco.';
        feedback.className = 'feedback info';
        return;
    }
    
    const blank = selectedBlanks[0];
    const optionText = option.dataset.option;
    const blankIndex = parseInt(blank.dataset.index);
    
    // Llenar espacio en blanco
    blank.textContent = optionText;
    blank.classList.add('filled');
    blank.classList.remove('selected');
    
    // Deshabilitar todas las opciones del mismo grupo
    const optionGroup = option.dataset.group;
    const allOptions = document.querySelectorAll(`[data-group="${optionGroup}"]`);
    allOptions.forEach(opt => {
        opt.disabled = true;
        opt.style.opacity = '0.5';
    });
    
    // Limpiar feedback
    const feedback = document.getElementById('writing-feedback');
    feedback.innerHTML = '';
}

function checkWriting() {
    const writingData = gameData.writing[currentLevel.writing];
    const allBlanks = document.querySelectorAll('.blank');
    
    let allFilled = true;
    let allCorrect = true;
    
    allBlanks.forEach((blank, index) => {
        if (!blank.classList.contains('filled') || !blank.textContent.trim()) {
            allFilled = false;
        } else if (blank.textContent.trim() !== writingData.blanks[index]) {
            allCorrect = false;
        }
    });
    
    const feedback = document.getElementById('writing-feedback');
    
    if (!allFilled) {
        feedback.innerHTML = 'Completa todos los espacios en blanco.';
        feedback.className = 'feedback info';
    } else if (allCorrect) {
        feedback.innerHTML = '¡Excelente! 🎉';
        feedback.className = 'feedback success';
        scores.writing += 10;
        updateScore('writing');
        
        // Reproducir sonido de éxito
        playCorrectSound();
    } else {
        feedback.innerHTML = '❌ Algunas respuestas no son correctas. Inténtalo de nuevo.';
        feedback.className = 'feedback error';
        
        // Reproducir sonido de error
        playErrorSound();
        
        // Marcar respuestas incorrectas
        allBlanks.forEach((blank, index) => {
            if (blank.classList.contains('filled')) {
                if (blank.textContent.trim() !== writingData.blanks[index]) {
                    blank.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
                    blank.style.color = 'white';
                } else {
                    blank.style.background = 'linear-gradient(135deg, #4ecdc4, #44a08d)';
                    blank.style.color = 'white';
                }
            }
        });
    }
    
    // Siempre mostrar botón siguiente
    document.getElementById('next-writing').classList.remove('hidden');
    document.getElementById('check-writing').classList.add('hidden');
}

function resetWriting() {
    // Limpiar estado del nivel actual
    selectedOption = null;
    currentGameCompleted = false;
    
    // Recargar el nivel actual
    loadWriting();
    
    // Limpiar feedback
    document.getElementById('writing-feedback').innerHTML = '';
}

function nextWriting() {
    // Reproducir sonido de siguiente
    playNextSound();
    
    currentLevel.writing++;
    if (currentLevel.writing >= gameData.writing.length) {
        // Juego completado - mostrar felicitaciones
        showCongratulations('writing');
        return;
    }
    loadWriting();
}

// Funciones auxiliares
function updateScore(gameType) {
    const scoreElement = document.getElementById(`${gameType}-score`);
    scoreElement.textContent = scores[gameType];
    
    const levelElement = document.getElementById(`${gameType}-level`);
    levelElement.textContent = currentLevel[gameType] + 1;
}

function showCongratulations(gameType) {
    const gameNames = {
        'sentences': 'Construir Oraciones',
        'synonyms': 'Sinónimos',
        'writing': 'Mejorar Escritura'
    };
    
    const gameName = gameNames[gameType];
    const finalScore = scores[gameType];
    
    // Ocultar el contenido del juego
    const gameContent = document.querySelector(`#${gameType}-game .game-content`);
    gameContent.innerHTML = `
        <div class="congratulations-container">
            <div class="congratulations-content">
                <div class="celebration-icon">🎉</div>
                <h2 class="congratulations-title">¡Felicitaciones!</h2>
                <p class="congratulations-message">
                    Has completado exitosamente el juego de <strong>${gameName}</strong>
                </p>
                <div class="final-stats">
                    <div class="stat-item">
                        <span class="stat-label">Puntuación Final:</span>
                        <span class="stat-value">${finalScore} puntos</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Ejercicios Completados:</span>
                        <span class="stat-value">20/20</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Nivel Alcanzado:</span>
                        <span class="stat-value">Experto</span>
                    </div>
                </div>
                <p class="improvement-message">
                    ¡Has mejorado significativamente tu comprensión lectora y expresión escrita!
                </p>
                <div class="congratulations-actions">
                    <button class="btn-primary" onclick="restartGame('${gameType}')">Jugar de Nuevo</button>
                    <button class="btn-secondary" onclick="showGameSelector()">Volver al Menú</button>
                </div>
            </div>
        </div>
    `;
    
    // Reproducir sonido de felicitaciones
    playCongratulationsSound();
    
    // Marcar el juego como completado
    gameCompleted[gameType] = true;
    updateGameButtons();
}

function restartGame(gameType) {
    // Resetear el juego
    currentLevel[gameType] = 0;
    scores[gameType] = 0;
    gameCompleted[gameType] = false;
    currentGameCompleted = false;
    
    // Restaurar el contenido original del juego según el tipo
    const gameContent = document.querySelector(`#${gameType}-game .game-content`);
    
    if (gameType === 'sentences') {
        gameContent.innerHTML = `
            <div class="instruction">
                <p>Ordena las palabras para formar una oración correcta: <span class="difficulty-badge difficulty-1">Básico</span></p>
            </div>
            <div class="sentence-display">
                <div id="sentence-words" class="word-container"></div>
            </div>
            <div class="answer-area">
                <div id="answer-words" class="word-container"></div>
            </div>
            <div class="controls">
                <button id="check-sentence" class="btn-primary">Verificar</button>
                <button id="hint-sentence" class="btn-secondary">Pista</button>
                <button id="reset-sentence" class="btn-secondary">Reiniciar</button>
                <button id="next-sentence" class="btn-primary hidden">Siguiente</button>
            </div>
            <div id="sentence-feedback" class="feedback"></div>
        `;
    } else if (gameType === 'synonyms') {
        gameContent.innerHTML = `
            <div class="instruction">
                <p>Encuentra el sinónimo de la palabra: <span class="difficulty-badge difficulty-1">Básico</span></p>
            </div>
            <div class="word-display">
                <div id="target-word" class="target-word"></div>
            </div>
            <div class="options-container">
                <div id="synonym-options" class="options-grid"></div>
            </div>
            <div class="controls">
                <button id="reset-synonym" class="btn-secondary">Reiniciar</button>
                <button id="next-synonym" class="btn-primary hidden">Siguiente</button>
            </div>
            <div id="synonym-feedback" class="feedback"></div>
        `;
    } else if (gameType === 'writing') {
        gameContent.innerHTML = `
            <div class="instruction">
                <p>Completa el texto con las palabras correctas: <span class="difficulty-badge difficulty-1">Básico</span></p>
            </div>
            <div class="text-display">
                <div id="writing-text" class="text-content"></div>
            </div>
            <div class="options-container">
                <div id="writing-options" class="options-grid"></div>
            </div>
            <div class="controls">
                <button id="check-writing" class="btn-primary">Verificar</button>
                <button id="reset-writing" class="btn-secondary">Reiniciar</button>
                <button id="next-writing" class="btn-primary hidden">Siguiente</button>
            </div>
            <div id="writing-feedback" class="feedback"></div>
        `;
    }
    
    // Reconfigurar event listeners
    setupGameControls();
    
    // Recargar el juego
    switch(gameType) {
        case 'sentences':
            loadSentence();
            break;
        case 'synonyms':
            loadSynonym();
            break;
        case 'writing':
            loadWriting();
            break;
    }
}

// Funciones de audio
function toggleAudio() {
    audioEnabled = !audioEnabled;
    const audioToggle = document.getElementById('audio-toggle');
    const audioIcon = document.getElementById('audio-icon');
    const audioText = document.getElementById('audio-text');
    
    if (audioEnabled) {
        audioToggle.classList.remove('audio-off');
        audioIcon.textContent = '🔊';
        audioText.textContent = 'Audio: ON';
    } else {
        audioToggle.classList.add('audio-off');
        audioIcon.textContent = '🔇';
        audioText.textContent = 'Audio: OFF';
    }
}

function playCorrectSound() {
    if (!audioEnabled) return;
    
    try {
        // Crear un sonido de éxito usando Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Crear oscilador para el sonido de éxito
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configurar el sonido (notas ascendentes alegres)
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
        oscillator.frequency.setValueAtTime(1046.50, audioContext.currentTime + 0.3); // C6
        
        // Configurar volumen
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);
        
        // Reproducir el sonido
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.6);
    } catch (error) {
        console.log('Audio no disponible:', error);
    }
}

function playErrorSound() {
    if (!audioEnabled) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Crear oscilador para el sonido de error
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configurar el sonido (notas descendentes tristes)
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4
        oscillator.frequency.setValueAtTime(392, audioContext.currentTime + 0.1); // G4
        oscillator.frequency.setValueAtTime(349.23, audioContext.currentTime + 0.2); // F4
        oscillator.frequency.setValueAtTime(311.13, audioContext.currentTime + 0.3); // D#4
        
        // Configurar volumen
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        // Reproducir el sonido
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
        console.log('Audio no disponible:', error);
    }
}

function playHintSound() {
    if (!audioEnabled) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Crear oscilador para el sonido de pista
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configurar el sonido (nota suave y misteriosa)
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(587.33, audioContext.currentTime + 0.2); // D5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.4); // E5
        
        // Configurar volumen
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
        
        // Reproducir el sonido
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.8);
    } catch (error) {
        console.log('Audio no disponible:', error);
    }
}

function playNextSound() {
    if (!audioEnabled) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Crear oscilador para el sonido de siguiente
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configurar el sonido (nota ascendente de progreso)
        oscillator.frequency.setValueAtTime(392, audioContext.currentTime); // G4
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime + 0.1); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.2); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.3); // G5
        
        // Configurar volumen
        gainNode.gain.setValueAtTime(0.25, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);
        
        // Reproducir el sonido
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.6);
    } catch (error) {
        console.log('Audio no disponible:', error);
    }
}

function playCongratulationsSound() {
    if (!audioEnabled) return;
    
    try {
        // Crear un sonido de felicitaciones más elaborado
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Secuencia de notas para felicitaciones
        const notes = [
            { freq: 523.25, time: 0 },    // C5
            { freq: 659.25, time: 0.1 },  // E5
            { freq: 783.99, time: 0.2 },  // G5
            { freq: 1046.50, time: 0.3 }, // C6
            { freq: 783.99, time: 0.4 },  // G5
            { freq: 1046.50, time: 0.5 }, // C6
        ];
        
        notes.forEach(note => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(note.freq, audioContext.currentTime + note.time);
            
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + note.time);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + note.time + 0.3);
            
            oscillator.start(audioContext.currentTime + note.time);
            oscillator.stop(audioContext.currentTime + note.time + 0.3);
        });
    } catch (error) {
        console.log('Audio no disponible:', error);
    }
}

// Efectos visuales
function addVisualEffects() {
    // Agregar efectos de partículas o animaciones adicionales
    document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
}

// Inicializar efectos
addVisualEffects();
