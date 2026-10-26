let idiomaAtual = localStorage.getItem('neef_idioma') || 'pt';

        const BANDEIRA_BR = `<svg viewBox="0 0 720 504" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
            <rect width="720" height="504" fill="#009b3a"/>
            <polygon points="360,42 690,252 360,462 30,252" fill="#fedf00"/>
            <circle cx="360" cy="252" r="120" fill="#002776"/>
            <path d="M 240,252 A 120,120 0 0 0 480,252 A 130,90 0 0 1 240,252" fill="#ffffff"/>
        </svg>`;

        const BANDEIRA_US = `<svg viewBox="0 0 741 390" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
            <rect width="741" height="390" fill="#fff"/>
            <g fill="#b22234">
                <rect y="0" width="741" height="30"/>
                <rect y="60" width="741" height="30"/>
                <rect y="120" width="741" height="30"/>
                <rect y="180" width="741" height="30"/>
                <rect y="240" width="741" height="30"/>
                <rect y="300" width="741" height="30"/>
                <rect y="360" width="741" height="30"/>
            </g>
            <rect width="296" height="210" fill="#3c3b6e"/>
            <g fill="#fff">
                <circle cx="30" cy="25" r="8"/><circle cx="80" cy="25" r="8"/><circle cx="130" cy="25" r="8"/>
                <circle cx="180" cy="25" r="8"/><circle cx="230" cy="25" r="8"/>
                <circle cx="55" cy="55" r="8"/><circle cx="105" cy="55" r="8"/><circle cx="155" cy="55" r="8"/>
                <circle cx="205" cy="55" r="8"/><circle cx="255" cy="55" r="8"/>
                <circle cx="30" cy="85" r="8"/><circle cx="80" cy="85" r="8"/><circle cx="130" cy="85" r="8"/>
                <circle cx="180" cy="85" r="8"/><circle cx="230" cy="85" r="8"/>
                <circle cx="55" cy="115" r="8"/><circle cx="105" cy="115" r="8"/><circle cx="155" cy="115" r="8"/>
                <circle cx="205" cy="115" r="8"/><circle cx="255" cy="115" r="8"/>
                <circle cx="30" cy="145" r="8"/><circle cx="80" cy="145" r="8"/><circle cx="130" cy="145" r="8"/>
                <circle cx="180" cy="145" r="8"/><circle cx="230" cy="145" r="8"/>
                <circle cx="55" cy="175" r="8"/><circle cx="105" cy="175" r="8"/><circle cx="155" cy="175" r="8"/>
                <circle cx="205" cy="175" r="8"/><circle cx="255" cy="175" r="8"/>
            </g>
        </svg>`;

        const traducoes = {
            pt: {
                subtitulo:    'ESCOLHA O MODO DE JOGO',
                solo:         '🎮 SOLO',
                duo:          '👥 DUO',
                telaCheia:    '⛶ Tela Cheia',
                comoJogar:    'Como Jogar',
                comoJogarTitulo: 'COMO JOGAR',
                fechar:       '✕ FECHAR',
                escolhaPista: 'ESCOLHA A PISTA',
                orlaMar:      'ORLA DO MAR',
                sertao:       'SERTÃO',
                correr:       'CORRER!',
                jogador1:     'Jogador 1',
                jogador2:     'Jogador 2',
                reiniciar:    'REINICIAR',
                reiniciarBtn: '🔄 REINICIAR',
                reiniciarAmbos:'REINICIAR AMBOS',
                reiniciarP1:  'REINICIAR P1',
                reiniciarP2:  'REINICIAR P2',
                voltarMenu:   'VOLTAR AO MENU',
                pausado:      '⏸ PAUSADO',
                continuar:    '▶ CONTINUAR',
                menuPrincipal:'🏠 MENU',
                pontuacao:    'Pontuação',
                pontuacaoP1:  'Pontuação P1',
                pontuacaoP2:  'Pontuação P2',
                highScore:    'High Score',
                highP1:       'High P1',
                highP2:       'High P2',
                vencedorP1:   '🏆 VENCEDOR: JOGADOR 1!',
                vencedorP2:   '🏆 VENCEDOR: JOGADOR 2!',
                empate:       '🏆 EMPATE!',
                helpControles:'🎮 CONTROLES',
                helpPontuar:  '💵 COMO PONTUAR',
                helpObstaculos:'⚠️ OBSTÁCULOS',
                helpEscudo:   '🛡️ ESCUDO',
                helpBlitz:    '⚡ BLITZ DUPLA',
                helpNitro:    '🔥 NITRO',
                helpPistas:   '🗺️ PISTAS',
                ranking:        'RANKING',
                rankingTitulo:  'RANKING',
                semRanking:     'Nenhum placar registrado ainda. Jogue uma partida!'
            },
            en: {
                subtitulo:    'CHOOSE GAME MODE',
                solo:         '🎮 SOLO',
                duo:          '👥 DUO',
                telaCheia:    '⛶ Fullscreen',
                comoJogar:    'How to Play',
                comoJogarTitulo: 'HOW TO PLAY',
                fechar:       '✕ CLOSE',
                escolhaPista: 'CHOOSE TRACK',
                orlaMar:      'SEA SHORE',
                sertao:       'DESERT',
                correr:       'RACE!',
                jogador1:     'Player 1',
                jogador2:     'Player 2',
                reiniciar:    'RESTART',
                reiniciarBtn: '🔄 RESTART',
                reiniciarAmbos:'RESTART BOTH',
                reiniciarP1:  'RESTART P1',
                reiniciarP2:  'RESTART P2',
                voltarMenu:   'BACK TO MENU',
                pausado:      '⏸ PAUSED',
                continuar:    '▶ CONTINUE',
                menuPrincipal:'🏠 MENU',
                pontuacao:    'Score',
                pontuacaoP1:  'Score P1',
                pontuacaoP2:  'Score P2',
                highScore:    'High Score',
                highP1:       'High P1',
                highP2:       'High P2',
                vencedorP1:   '🏆 WINNER: PLAYER 1!',
                vencedorP2:   '🏆 WINNER: PLAYER 2!',
                empate:       '🏆 TIE!',
                helpControles:'🎮 CONTROLS',
                helpPontuar:  '💵 HOW TO SCORE',
                helpObstaculos:'⚠️ OBSTACLES',
                helpEscudo:   '🛡️ SHIELD',
                helpBlitz:    '⚡ DOUBLE BLITZ',
                helpNitro:    '🔥 NITRO',
                helpPistas:   '🗺️ TRACKS',
                ranking:        'RANKING',
                rankingTitulo:  'LEADERBOARD',
                semRanking:     'No scores registered yet. Play a match!'
            }
        };

        function t(key) {
            return (traducoes[idiomaAtual] && traducoes[idiomaAtual][key]) || key;
        }

        function aplicarIdioma() {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.dataset.i18n;
                if (traducoes[idiomaAtual][key] !== undefined) {
                    el.textContent = traducoes[idiomaAtual][key];
                }
            });
            const flagIcon = document.getElementById('flagIcon');
            const langLabel = document.getElementById('langLabel');
            if (flagIcon) {
                flagIcon.outerHTML = idiomaAtual === 'pt'
                    ? `<svg class="flag-icon" id="flagIcon" viewBox="0 0 720 504" xmlns="http://www.w3.org/2000/svg">
                        <rect width="720" height="504" fill="#009b3a"/>
                        <polygon points="360,42 690,252 360,462 30,252" fill="#fedf00"/>
                        <circle cx="360" cy="252" r="120" fill="#002776"/>
                        <path d="M 240,252 A 120,120 0 0 0 480,252 A 130,90 0 0 1 240,252" fill="#ffffff"/>
                       </svg>`
                    : `<svg class="flag-icon" id="flagIcon" viewBox="0 0 741 390" xmlns="http://www.w3.org/2000/svg">
                        <rect width="741" height="390" fill="#fff"/>
                        <g fill="#b22234">
                            <rect y="0" width="741" height="30"/><rect y="60" width="741" height="30"/>
                            <rect y="120" width="741" height="30"/><rect y="180" width="741" height="30"/>
                            <rect y="240" width="741" height="30"/><rect y="300" width="741" height="30"/>
                            <rect y="360" width="741" height="30"/>
                        </g>
                        <rect width="296" height="210" fill="#3c3b6e"/>
                        <g fill="#fff">
                            <circle cx="30" cy="25" r="8"/><circle cx="80" cy="25" r="8"/><circle cx="130" cy="25" r="8"/>
                            <circle cx="180" cy="25" r="8"/><circle cx="230" cy="25" r="8"/>
                            <circle cx="55" cy="55" r="8"/><circle cx="105" cy="55" r="8"/><circle cx="155" cy="55" r="8"/>
                            <circle cx="205" cy="55" r="8"/><circle cx="255" cy="55" r="8"/>
                            <circle cx="30" cy="85" r="8"/><circle cx="80" cy="85" r="8"/><circle cx="130" cy="85" r="8"/>
                            <circle cx="180" cy="85" r="8"/><circle cx="230" cy="85" r="8"/>
                            <circle cx="55" cy="115" r="8"/><circle cx="105" cy="115" r="8"/><circle cx="155" cy="115" r="8"/>
                            <circle cx="205" cy="115" r="8"/><circle cx="255" cy="115" r="8"/>
                            <circle cx="30" cy="145" r="8"/><circle cx="80" cy="145" r="8"/><circle cx="130" cy="145" r="8"/>
                            <circle cx="180" cy="145" r="8"/><circle cx="230" cy="145" r="8"/>
                            <circle cx="55" cy="175" r="8"/><circle cx="105" cy="175" r="8"/><circle cx="155" cy="175" r="8"/>
                            <circle cx="205" cy="175" r="8"/><circle cx="255" cy="175" r="8"/>
                        </g>
                       </svg>`;
            }
            if (langLabel) {
                langLabel.textContent = idiomaAtual === 'pt' ? 'BR' : 'EN';
            }
            document.documentElement.lang = idiomaAtual === 'pt' ? 'pt-BR' : 'en';
        }

        if (!CanvasRenderingContext2D.prototype.roundRect) {
            CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
                if (typeof r === 'number') r = [r, r, r, r];
                if (!Array.isArray(r)) r = [0, 0, 0, 0];
                this.beginPath();
                this.moveTo(x + r[0], y);
                this.arcTo(x + w, y,     x + w, y + h, r[1]);
                this.arcTo(x + w, y + h, x,     y + h, r[2]);
                this.arcTo(x,     y + h, x,     y,     r[3]);
                this.arcTo(x,     y,     x + w, y,     r[0]);
                this.closePath();
                return this;
            };
        }

        const imagensParaCarregar = [
            'celta.png', 'palio.png', 'uno.png', 'fusca.png',
            'celta1.png', 'palio1.png', 'uno1.png', 'fusca1.png',
            '2reais.png', 'detran.png', 'buraco.png',
            'blitz.png', 'CAPA.png', 'detranGameOver.png',
            'ifood.png'
        ];

        function carregarImagens() {
            const promessas = imagensParaCarregar.map(src => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => resolve({ src, img });
                    img.onerror = () => resolve({ src, img: null });
                    img.src = src;
                });
            });
            return Promise.all(promessas);
        }

        document.addEventListener('DOMContentLoaded', async () => {
            const resultados = await carregarImagens();
            const imagens = {};
            resultados.forEach(({ src, img }) => { imagens[src] = img; });
            const falhas = resultados.filter(r => r.img === null);
            if (falhas.length) console.warn('Imagens não carregadas:', falhas.map(f => f.src));
            iniciarJogoComImagens(imagens);
        });

        function iniciarJogoComImagens(imagens) {
            const canvas = document.getElementById('gameCanvas');
            const ctx = canvas.getContext('2d');
            const gameContainer = document.getElementById('gameContainer');
            const menuSelection = document.getElementById('menuSelection');
            const startRaceBtn = document.getElementById('startRaceBtn');
            const fullscreenMenuBtn = document.getElementById('fullscreenMenuBtn');
            const fullscreenGameBtn = document.getElementById('fullscreenGameBtn');
            const pauseGameBtn = document.getElementById('pauseGameBtn');
            const langBtn = document.getElementById('langBtn');
            const helpBtn = document.getElementById('helpBtn');
            const helpModal = document.getElementById('helpModal');
            const closeHelpBtn = document.getElementById('closeHelpBtn');

            const gameOverSolo = document.getElementById('gameOverSolo');
            const gameOverDuo = document.getElementById('gameOverDuo');
            const gameOverP1 = document.getElementById('gameOverP1');
            const gameOverP2 = document.getElementById('gameOverP2');
            const restartSolo = document.getElementById('restartSolo');
            const restartDuo = document.getElementById('restartDuo');
            const restartP1 = document.getElementById('restartP1');
            const restartP2 = document.getElementById('restartP2');
            const backMenuSolo = document.getElementById('backMenuSolo');
            const backMenuDuo = document.getElementById('backMenuDuo');
            const backMenuP1 = document.getElementById('backMenuP1');
            const backMenuP2 = document.getElementById('backMenuP2');
            const pontuacaoFinalSolo = document.getElementById('pontuacaoFinalSolo');
            const pontuacaoFinalP1 = document.getElementById('pontuacaoFinalP1');
            const pontuacaoFinalP2 = document.getElementById('pontuacaoFinalP2');
            const highSolo = document.getElementById('highSolo');
            const highDuoP1 = document.getElementById('highDuoP1');
            const highDuoP2 = document.getElementById('highDuoP2');
            const highP1 = document.getElementById('highP1');
            const highP2 = document.getElementById('highP2');
            const winnerText = document.getElementById('winnerText');
            const duoScoreP1 = document.getElementById('duoScoreP1');
            const duoScoreP2 = document.getElementById('duoScoreP2');
            const pauseMenu = document.getElementById('pauseMenu');
            const pauseContinuar = document.getElementById('pauseContinuar');
            const pauseReiniciar = document.getElementById('pauseReiniciar');
            const pauseMenuPrincipal = document.getElementById('pauseMenuPrincipal');

            // ===== RANKING ELEMENTOS =====
            const rankBtn = document.getElementById('rankBtn');
            const rankModal = document.getElementById('rankModal');
            const closeRankBtn = document.getElementById('closeRankBtn');
            const rankList = document.getElementById('rankList');
            const rankTabs = document.querySelectorAll('.rank-tab');
            const nickP1Input = document.getElementById('nickP1');
            const nickP2Input = document.getElementById('nickP2');
            const nickP2Container = document.getElementById('nickP2Container');

            let nickP1Atual = 'JOGADOR 1';
            let nickP2Atual = 'JOGADOR 2';

            const carBtnsP1 = document.querySelectorAll('#p1-cars .car-btn');
            const carBtnsP2 = document.querySelectorAll('#p2-cars .car-btn');
            const p2Col = document.getElementById('p2-col');
            const previewP1 = document.getElementById('previewP1');
            const previewP1Ctx = previewP1.getContext('2d');
            const previewP2 = document.getElementById('previewP2');
            const previewP2Ctx = previewP2.getContext('2d');
            const previewP2Container = document.getElementById('previewP2Container');

            const bgMusic = document.getElementById('bgMusic');
            const muteBtn = document.getElementById('muteBtn');
            const volumeSlider = document.getElementById('volumeSlider');

            const touchSolo = document.getElementById('touchSolo');
            const touchP1 = document.getElementById('touchP1');
            const touchP2 = document.getElementById('touchP2');

            const IS_MOBILE_TOUCH = window.matchMedia('(pointer: coarse)').matches;
            const CARRO_Y_OFFSET  = IS_MOBILE_TOUCH ? -75 : 0;
            const LARGURA_CARRO_MOB = IS_MOBILE_TOUCH ? 95  : 110;
            const ALTURA_CARRO_MOB  = IS_MOBILE_TOUCH ? 130 : 150;

            const LARGURA_CARRO = LARGURA_CARRO_MOB;
            const ALTURA_CARRO  = ALTURA_CARRO_MOB;
            const MEIA_TELA = 700;
            const ALTURA_TELA = 800;
            const VEL_MAX_FINAL = 3.0;
            const ESPACO_ENTRE_OBSTACULOS = 2100;
            const MAX_PARTICULAS = 300;
            const PONTOS_POR_VIDA = 50;
            const MAX_VIDAS = 5;

            const TIME_SCALE = 6;

            const BOOST_MULT = 3.2;
            const ACCEL_RATE = 0.018;
            const ACCEL_BOOST_RATE = 0.13;
            const DECEL_RATE = 0.040;

            const LATERAL_ACCEL = 0.85;
            const LATERAL_BASE  = 2.2;
            const LATERAL_BONUS = 2.4;
            const LATERAL_FRICTION = 0.72;

            const OBSTACULO_BASE_FATOR  = 0.20;
            const OBSTACULO_BOOST_FATOR = 0.42;

            const MOEDAS_POR_ESCUDO = 6;
            const PONTOS_RECARGA_ESCUDO = 6;

            const MOEDAS_POR_BLITZ_DUPLA = 10;

            const DETRAN_ZIGUE_CHANCE = 0.5;

            const ENTREGA_CHANCE   = 0.70;
            const ENTREGA_VEL_X    = 3.2;
            const ENTREGA_DIST_MIN = 320;
            const ENTREGA_DIST_MAX = 560;
            const ENTREGA_FAIXA_MIN = 70;

            const MULTA_CHANCE     = 0.65;
            const MULTA_VEL_X      = 2.8;
            const MULTA_DIST_MIN   = 340;
            const MULTA_DIST_MAX   = 580;
            const MULTA_FAIXA_MIN  = 60;

            const WARMUP_TIME = 3.5;
            const MULTI_WARMUP_TIME = 5.0;

            const MULTI_ESPACO_MULT = 1.8;
            const MULTI_ESPACO_MIN = 1200;
            const MULTI_RAMP_LENTO = 0.60;
            const MULTI_GRACE_TIME = 4;

            const ZIGUE_CHANCE = 0.70;
            const ZIGUE_VEL_MIN = 0.35;
            const ZIGUE_VEL_MAX = 0.80;
            const ZIGUE_FREQ = 0.012;

            let modoJogo = '';
            let pistaSelecionada = 'pista1';
            let animFrameId = null;
            let lastTime = 0;
            let paused = false;
            let jogador1 = null, jogador2 = null;
            let obstaculos1 = [], obstaculos2 = [];
            let gameRunningP1 = false, gameRunningP2 = false;
            let deslocamentoPista1 = 0, deslocamentoPista2 = 0, deslocamentoPistaGlobal = 0;
            let tempoDecorrido = 0;
            let particulas = [];
            let audioCtx = null;
            let isMuted = false;
            let audioAtivado = false;

            const carImages = {};
            ['celta', 'palio', 'uno', 'fusca'].forEach(nome => {
                carImages[nome] = imagens[nome + '.png'] || null;
            });
            const carImagesTop = {};
            ['celta', 'palio', 'uno', 'fusca'].forEach(nome => {
                const top = imagens[nome + '1.png'];
                const orig = imagens[nome + '.png'];
                carImagesTop[nome] = (top && top.naturalWidth > 0) ? top : (orig || null);
            });
            const img2Reais = imagens['2reais.png'] || null;
            const imgDetran = imagens['detran.png'] || null;
            const imgIfood  = imagens['ifood.png']  || null;

            const teclas = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false, w: false, s: false, a: false, d: false };

            let fallbackOscillator = null;
            let fallbackGain = null;
            let fallbackInterval = null;

            setInterval(() => {
                const menuBtns = document.querySelector('.menu-buttons');
                if (!menuBtns || menuBtns.style.display === 'none') return;
                if (menuSelection && menuSelection.style.display === 'none') return;

                const botoes = menuBtns.querySelectorAll('.menu-btn');
                if (botoes.length === 0) return;

                botoes.forEach(b => b.classList.add('pulsar'));

                setTimeout(() => {
                    botoes.forEach(b => b.classList.remove('pulsar'));
                }, 1900);
            }, 5000);

            if (langBtn) {
                langBtn.addEventListener('click', () => {
                    idiomaAtual = (idiomaAtual === 'pt') ? 'en' : 'pt';
                    localStorage.setItem('neef_idioma', idiomaAtual);
                    aplicarIdioma();
                });
            }
            aplicarIdioma();

            // 🚗 SLIDESHOW dos carros no botão e no modal "Como Jogar"
            const carrosSlideshow = ['fusca.png', 'celta.png', 'palio.png', 'uno.png'];
            let slideIndex = 0;

            setInterval(() => {
                slideIndex = (slideIndex + 1) % carrosSlideshow.length;
                const novoSrc = carrosSlideshow[slideIndex];

                ['helpCarIconBtn', 'helpCarIconModal'].forEach(id => {
                    const el = document.getElementById(id);
                    if (!el) return;
                    el.style.opacity = '0.3';
                    setTimeout(() => {
                        el.src = novoSrc;
                        el.style.opacity = '1';
                    }, 120);
                });
            }, 1500);

            if (helpBtn) {
                helpBtn.addEventListener('click', () => {
                    helpModal.classList.add('show');
                });
            }
            if (closeHelpBtn) {
                closeHelpBtn.addEventListener('click', () => {
                    helpModal.classList.remove('show');
                });
            }
            if (helpModal) {
                helpModal.addEventListener('click', (e) => {
                    if (e.target === helpModal) {
                        helpModal.classList.remove('show');
                    }
                });
            }

            // ===== RANKING FUNÇÕES =====
            function getRanking(modo) {
                try {
                    const raw = localStorage.getItem('neef_rank_' + modo);
                    return raw ? JSON.parse(raw) : [];
                } catch(e) { return []; }
            }

            function registrarNoRanking(modo, nick, pontos) {
                if (pontos <= 0) return;
                const nickLimpo = (nick || '').trim().toUpperCase().substring(0, 10) || 'ANÔNIMO';
                const rank = getRanking(modo);
                rank.push({ nick: nickLimpo, pontos: pontos, data: Date.now() });
                rank.sort((a, b) => b.pontos - a.pontos);
                rank.splice(20);
                try {
                    localStorage.setItem('neef_rank_' + modo, JSON.stringify(rank));
                } catch(e) {}
            }

            function renderizarRanking(modo) {
                if (!rankList) return;
                const rank = getRanking(modo);
                if (rank.length === 0) {
                    rankList.innerHTML = `<div class="rank-empty">${t('semRanking')}</div>`;
                    return;
                }
                const medalhas = ['🥇', '🥈', '🥉'];
                rankList.innerHTML = rank.map((r, i) => {
                    const pos = i + 1;
                    const topClass = pos <= 3 ? `top${pos}` : '';
                    const medal = pos <= 3 ? medalhas[pos - 1] : `${pos}º`;
                    const safeNick = r.nick.replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c]));
                    return `<div class="rank-row ${topClass}">
                        <div class="rank-pos">${medal}</div>
                        <div class="rank-nick">${safeNick}</div>
                        <div class="rank-pts">${r.pontos} pts</div>
                    </div>`;
                }).join('');
            }

            if (rankBtn) {
                rankBtn.addEventListener('click', () => {
                    rankModal.classList.add('show');
                    rankTabs.forEach(tb => tb.classList.remove('active'));
                    const tabInicial = modoJogo === 'multi' ? 'p1' : 'solo';
                    const tab = document.querySelector(`.rank-tab[data-tab="${tabInicial}"]`) || rankTabs[0];
                    if (tab) tab.classList.add('active');
                    renderizarRanking(tabInicial);
                });
            }
            if (closeRankBtn) {
                closeRankBtn.addEventListener('click', () => rankModal.classList.remove('show'));
            }
            if (rankModal) {
                rankModal.addEventListener('click', (e) => {
                    if (e.target === rankModal) rankModal.classList.remove('show');
                });
            }
            rankTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    rankTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    renderizarRanking(tab.dataset.tab);
                });
            });

            function atualizarControlesTouch() {
                if (!touchSolo || !touchP1 || !touchP2) return;
                if (modoJogo === 'multi') {
                    touchSolo.style.display = 'none';
                    touchP1.style.display = 'flex';
                    touchP2.style.display = 'flex';
                } else if (modoJogo === 'solo') {
                    touchSolo.style.display = 'block';
                    touchP1.style.display = 'none';
                    touchP2.style.display = 'none';
                } else {
                    touchSolo.style.display = 'none';
                    touchP1.style.display = 'none';
                    touchP2.style.display = 'none';
                }
            }

            function iniciarMusica() {
                bgMusic.play()
                    .then(() => { pararFallbackAudio(); })
                    .catch(() => { iniciarFallbackAudio(); });
            }

            function iniciarFallbackAudio() {
                try {
                    if (!audioCtx) {
                        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                    }
                    fallbackOscillator = audioCtx.createOscillator();
                    fallbackGain = audioCtx.createGain();
                    fallbackOscillator.type = 'sine';
                    fallbackOscillator.frequency.setValueAtTime(220, audioCtx.currentTime);
                    fallbackGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
                    fallbackOscillator.connect(fallbackGain);
                    fallbackGain.connect(audioCtx.destination);
                    fallbackOscillator.start();

                    let count = 0;
                    fallbackInterval = setInterval(() => {
                        if (!fallbackOscillator) return;
                        try {
                            const baseFreq = 220 + Math.sin(count * 0.5) * 30;
                            fallbackOscillator.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);
                            count++;
                        } catch(e) {}
                    }, 200);
                } catch(e) {}
            }

            function pararFallbackAudio() {
                if (fallbackInterval) {
                    clearInterval(fallbackInterval);
                    fallbackInterval = null;
                }
                if (fallbackOscillator) {
                    try {
                        fallbackOscillator.stop();
                        fallbackOscillator.disconnect();
                    } catch(e) {}
                    fallbackOscillator = null;
                    fallbackGain = null;
                }
            }

            function ativarAudio() {
                if (audioAtivado) return;
                audioAtivado = true;
                if (!audioCtx) {
                    try {
                        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                    } catch(e) {}
                }
                if (audioCtx && audioCtx.state === 'suspended') {
                    audioCtx.resume().catch(() => {});
                }
                bgMusic.volume = parseFloat(volumeSlider.value) / 100;
                iniciarMusica();
                document.removeEventListener('click', ativarAudio);
                document.removeEventListener('touchstart', ativarAudio);
            }

            document.addEventListener('click', ativarAudio);
            document.addEventListener('touchstart', ativarAudio);

            volumeSlider.addEventListener('input', function() {
                const val = this.value / 100;
                bgMusic.volume = val;
                if (fallbackGain) {
                    fallbackGain.gain.setValueAtTime(val * 0.08, audioCtx.currentTime);
                }
                if (isMuted) {
                    bgMusic.muted = false;
                    isMuted = false;
                    muteBtn.innerHTML = '🔊';
                }
            });

            muteBtn.addEventListener('click', function() {
                if (bgMusic.muted || isMuted) {
                    bgMusic.muted = false;
                    isMuted = false;
                    muteBtn.innerHTML = '🔊';
                    if (fallbackGain) {
                        fallbackGain.gain.setValueAtTime(parseFloat(volumeSlider.value) / 100 * 0.08, audioCtx.currentTime);
                    }
                } else {
                    bgMusic.muted = true;
                    isMuted = true;
                    muteBtn.innerHTML = '🔇';
                    if (fallbackGain) {
                        fallbackGain.gain.setValueAtTime(0, audioCtx.currentTime);
                    }
                }
            });

            function initAudio() {
                if (!audioCtx) {
                    try {
                        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                    } catch(e) {}
                }
                if (audioCtx && audioCtx.state === 'suspended') {
                    audioCtx.resume().catch(() => {});
                }
            }

            function tocarSom(freq, dur, vol = 0.12, tipo = 'square') {
                try {
                    if (!audioCtx) return;
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = tipo;
                    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
                    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.start();
                    osc.stop(audioCtx.currentTime + dur);
                } catch(e) {}
            }
            const somColisao = () => tocarSom(180, 0.25, 0.15, 'sawtooth');
            const somPerdaVida = () => tocarSom(100, 0.4, 0.2, 'sawtooth');
            const somMoeda = () => tocarSom(1200, 0.08, 0.1);

            const somVidaExtra = () => {
                tocarSom(880,  0.10, 0.15, 'sine');
                setTimeout(() => tocarSom(1175, 0.10, 0.15, 'sine'), 90);
                setTimeout(() => tocarSom(1568, 0.22, 0.15, 'sine'), 180);
            };

            const somNovoRecorde = () => {
                tocarSom(1046, 0.10, 0.13, 'triangle');
                setTimeout(() => tocarSom(1318, 0.10, 0.13, 'triangle'), 90);
                setTimeout(() => tocarSom(1568, 0.10, 0.13, 'triangle'), 180);
                setTimeout(() => tocarSom(2093, 0.30, 0.13, 'triangle'), 270);
            };

            const somEscudoAtiva = () => {
                tocarSom(660,  0.10, 0.14, 'sine');
                setTimeout(() => tocarSom(880,  0.10, 0.14, 'sine'), 80);
                setTimeout(() => tocarSom(1100, 0.18, 0.14, 'sine'), 160);
            };
            const somEscudoQuebra = () => {
                tocarSom(400, 0.10, 0.16, 'triangle');
                setTimeout(() => tocarSom(220, 0.22, 0.16, 'sawtooth'), 70);
            };

            const somBoost = () => tocarSom(1800, 0.06, 0.08, 'sine');

            const somBlitzDupla = () => {
                tocarSom(500, 0.08, 0.14, 'square');
                setTimeout(() => tocarSom(700, 0.12, 0.14, 'square'), 90);
            };

            const somEntrega = () => {
                tocarSom(420, 0.08, 0.10, 'square');
                setTimeout(() => tocarSom(620, 0.12, 0.10, 'square'), 70);
            };

            const somMulta = () => {
                tocarSom(320, 0.10, 0.10, 'sawtooth');
                setTimeout(() => tocarSom(180, 0.14, 0.10, 'sawtooth'), 80);
                somSireneDetran();
            };

            // 📢 BUZINA AUTOMOTIVA NACIONAL (Bi-tonal clássica Celta/Uno)
            let ultimoSomBuzina = 0;
            function somBuzina() {
                try {
                    const agora = Date.now();
                    if (agora - ultimoSomBuzina < 250) return;
                    ultimoSomBuzina = agora;
                    if (!audioCtx) initAudio();
                    if (!audioCtx || isMuted) return;
                    const t = audioCtx.currentTime;
                    [420, 525].forEach(freq => {
                        const osc = audioCtx.createOscillator();
                        const gain = audioCtx.createGain();
                        osc.type = 'sawtooth';
                        osc.frequency.setValueAtTime(freq, t);
                        gain.gain.setValueAtTime(0.09, t);
                        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.26);
                        osc.connect(gain);
                        gain.connect(audioCtx.destination);
                        osc.start(t);
                        osc.stop(t + 0.26);
                    });
                } catch(e) {}
            }

            // 🚨 SIRENE POLICIAL DO DETRAN (Ui-Ui modulado)
            let ultimoSomSirene = 0;
            function somSireneDetran() {
                try {
                    const agora = Date.now();
                    if (agora - ultimoSomSirene < 1200) return;
                    ultimoSomSirene = agora;
                    if (!audioCtx) initAudio();
                    if (!audioCtx || isMuted) return;
                    const t = audioCtx.currentTime;
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(650, t);
                    osc.frequency.linearRampToValueAtTime(950, t + 0.18);
                    osc.frequency.linearRampToValueAtTime(650, t + 0.36);
                    osc.frequency.linearRampToValueAtTime(950, t + 0.54);
                    osc.frequency.linearRampToValueAtTime(650, t + 0.72);
                    gain.gain.setValueAtTime(0.08, t);
                    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.75);
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.start(t);
                    osc.stop(t + 0.75);
                } catch(e) {}
            }

            // 🛞 PNEU CANTANDO NO ASFALTO (Freada brusca ou curva rápida)
            let ultimoSomPneu = 0;
            function somPneuCantando() {
                try {
                    const agora = Date.now();
                    if (agora - ultimoSomPneu < 450) return;
                    ultimoSomPneu = agora;
                    if (!audioCtx) initAudio();
                    if (!audioCtx || isMuted) return;
                    const t = audioCtx.currentTime;
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(950, t);
                    osc.frequency.exponentialRampToValueAtTime(450, t + 0.28);
                    gain.gain.setValueAtTime(0.07, t);
                    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.start(t);
                    osc.stop(t + 0.28);
                } catch(e) {}
            }

            // 💥 SOM DRAMÁTICO / CÔMICO DE GAME OVER (Apreendido pelo Detran)
            function somGameOverDetran() {
                try {
                    if (!audioCtx) initAudio();
                    if (!audioCtx || isMuted) return;
                    const notas = [440, 415, 392, 349];
                    notas.forEach((freq, idx) => {
                        setTimeout(() => {
                            tocarSom(freq, 0.32, 0.15, 'sawtooth');
                        }, idx * 200);
                    });
                } catch(e) {}
            }

            function desenharEscudo(cx, cy, raioBase) {
                const t2 = Date.now() / 1000;
                const raio = raioBase + Math.sin(t2 * 4) * 4;

                const gRad = ctx.createRadialGradient(cx, cy, raio * 0.45, cx, cy, raio);
                gRad.addColorStop(0,    'rgba(0,224,255,0)');
                gRad.addColorStop(0.70, 'rgba(0,224,255,0.10)');
                gRad.addColorStop(0.90, 'rgba(0,224,255,0.45)');
                gRad.addColorStop(1,    'rgba(160,245,255,0.95)');
                ctx.save();
                ctx.fillStyle = gRad;
                ctx.beginPath();
                ctx.arc(cx, cy, raio, 0, Math.PI * 2);
                ctx.fill();

                ctx.strokeStyle = 'rgba(200,250,255,0.90)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(cx, cy, raio, 0, Math.PI * 2);
                ctx.stroke();

                ctx.fillStyle = 'rgba(255,255,255,0.35)';
                ctx.beginPath();
                ctx.ellipse(cx - raio * 0.25, cy - raio * 0.45,
                            raio * 0.32, raio * 0.11, -0.5, 0, Math.PI * 2);
                ctx.fill();

                for (let k = 0; k < 3; k++) {
                    const ang = t2 * 2 + k * (Math.PI * 2 / 3);
                    const px  = cx + Math.cos(ang) * raio;
                    const py  = cy + Math.sin(ang) * raio;
                    ctx.fillStyle = 'rgba(180,250,255,0.95)';
                    ctx.shadowColor = '#00e0ff';
                    ctx.shadowBlur = 10;
                    ctx.beginPath();
                    ctx.arc(px, py, 3.2, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
                ctx.restore();
            }

            function desenharBoost(x, y, w, h, cor) {
                const cx = x + w / 2;
                const cy = y + h / 2;
                const t2 = Date.now() / 1000;
                ctx.save();

                for (let k = 0; k < 6; k++) {
                    const r = 18 + k * 15 + Math.sin(t2 * 22 + k * 1.3) * 6;
                    const py = cy + h * 0.48 + k * 12;
                    const gFogo = ctx.createRadialGradient(cx, py, 0, cx, py, r);
                    gFogo.addColorStop(0,   'rgba(255,250,180,1)');
                    gFogo.addColorStop(0.30,'rgba(255,170,50,0.85)');
                    gFogo.addColorStop(0.65,'rgba(255,70,15,0.55)');
                    gFogo.addColorStop(1,   'rgba(180,30,0,0)');
                    ctx.fillStyle = gFogo;
                    ctx.beginPath();
                    ctx.ellipse(cx, py, r * 0.85, r * 1.55, 0, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
            }

            function desenharCarro(x, y, w, h, carKey, corBrilho, pisca = false, escudo = false, boost = false) {
                if (boost) {
                    desenharBoost(x, y, w, h, corBrilho);
                }

                if (pisca && Math.floor(Date.now() / 150) % 2 === 0) {
                    if (escudo) desenharEscudo(x + w / 2, y + h / 2, Math.max(w, h) * 0.72);
                    return;
                }
                const img = carImagesTop[carKey];
                ctx.save();
                if (img) {
                    ctx.translate(x + w / 2, y + h / 2);
                    ctx.rotate(Math.PI / 2);
                    ctx.drawImage(img, -h / 2, -w / 2, h, w);
                } else {
                    ctx.fillStyle = corBrilho;
                    ctx.beginPath(); ctx.roundRect(x + 8, y + 28, w - 16, h - 52, 10); ctx.fill();
                    ctx.fillStyle = corBrilho; ctx.globalAlpha = 0.75;
                    ctx.beginPath(); ctx.roundRect(x + 22, y + 12, w - 44, 35, 7); ctx.fill();
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = 'rgba(180,230,255,0.55)';
                    ctx.beginPath(); ctx.roundRect(x + 24, y + 14, w - 48, 28, 5); ctx.fill();
                    ctx.fillStyle = '#fff8d0';
                    ctx.beginPath(); ctx.ellipse(x + 14, y + 22, 7, 4, 0, 0, Math.PI*2); ctx.fill();
                    ctx.beginPath(); ctx.ellipse(x + w - 14, y + 22, 7, 4, 0, 0, Math.PI*2); ctx.fill();
                    ctx.fillStyle = '#1a1a1a';
                    [y + 48, y + h - 52].forEach(ry => {
                        ctx.beginPath(); ctx.roundRect(x - 5, ry, 14, 22, 4); ctx.fill();
                        ctx.beginPath(); ctx.roundRect(x + w - 9, ry, 14, 22, 4); ctx.fill();
                        ctx.fillStyle = '#888';
                        ctx.beginPath(); ctx.arc(x + 2, ry + 11, 4, 0, Math.PI*2); ctx.fill();
                        ctx.beginPath(); ctx.arc(x + w - 2, ry + 11, 4, 0, Math.PI*2); ctx.fill();
                        ctx.fillStyle = '#1a1a1a';
                    });
                }
                ctx.restore();

                if (escudo) {
                    desenharEscudo(x + w / 2, y + h / 2, Math.max(w, h) * 0.72);
                }
            }

            function desenharMotoIfood(x, y, w, h) {
                if (imgIfood) {
                    ctx.save();
                    ctx.shadowColor = 'rgba(255, 30, 30, 0.55)';
                    ctx.shadowBlur = 16;
                    ctx.translate(x + w/2, y + h/2);
                    ctx.rotate(Math.PI / 2);
                    ctx.drawImage(imgIfood, -h/2, -w/2, h, w);
                    ctx.shadowBlur = 0;
                    ctx.drawImage(imgIfood, -h/2, -w/2, h, w);
                    ctx.restore();
                    return;
                }
                ctx.save();
                const cx5 = x + w / 2;
                ctx.fillStyle = '#1a1a1a';
                ctx.beginPath(); ctx.arc(cx5 - w*0.10, y + h*0.78, w*0.22, 0, Math.PI*2); ctx.fill();
                ctx.strokeStyle = '#555'; ctx.lineWidth = 3;
                ctx.beginPath(); ctx.arc(cx5 - w*0.10, y + h*0.78, w*0.14, 0, Math.PI*2); ctx.stroke();
                ctx.fillStyle = '#333';
                ctx.beginPath(); ctx.arc(cx5 - w*0.10, y + h*0.78, w*0.06, 0, Math.PI*2); ctx.fill();
                ctx.fillStyle = '#1a1a1a';
                ctx.beginPath(); ctx.arc(cx5 + w*0.10, y + h*0.78, w*0.22, 0, Math.PI*2); ctx.fill();
                ctx.strokeStyle = '#555'; ctx.lineWidth = 3;
                ctx.beginPath(); ctx.arc(cx5 + w*0.10, y + h*0.78, w*0.14, 0, Math.PI*2); ctx.stroke();
                ctx.fillStyle = '#333';
                ctx.beginPath(); ctx.arc(cx5 + w*0.10, y + h*0.78, w*0.06, 0, Math.PI*2); ctx.fill();
                ctx.strokeStyle = '#2a2a2a'; ctx.lineWidth = w * 0.10; ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(cx5 - w*0.10, y + h*0.78);
                ctx.lineTo(cx5,          y + h*0.52);
                ctx.lineTo(cx5 + w*0.10, y + h*0.78);
                ctx.stroke();
                ctx.fillStyle = '#cc0000';
                ctx.beginPath();
                ctx.moveTo(cx5 - w*0.20, y + h*0.55);
                ctx.bezierCurveTo(cx5 - w*0.22, y + h*0.38, cx5 + w*0.08, y + h*0.34, cx5 + w*0.14, y + h*0.44);
                ctx.lineTo(cx5 + w*0.12, y + h*0.58);
                ctx.bezierCurveTo(cx5 + w*0.05, y + h*0.62, cx5 - w*0.12, y + h*0.64, cx5 - w*0.20, y + h*0.55);
                ctx.closePath(); ctx.fill();
                const cxB = cx5 - w*0.30, cyB = y + h*0.22;
                const cW2 = w * 0.60, cH2 = h * 0.35;
                ctx.fillStyle = '#e60000';
                ctx.beginPath(); ctx.roundRect(cxB, cyB, cW2, cH2, 5); ctx.fill();
                ctx.fillStyle = 'rgba(255,255,255,0.92)';
                ctx.fillRect(cxB, cyB + cH2*0.38, cW2, cH2*0.22);
                ctx.fillStyle = '#e60000';
                ctx.font = `bold ${cH2 * 0.22}px 'Orbitron', sans-serif`;
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText('ifood', cxB + cW2/2, cyB + cH2*0.49);
                const hx = cx5, hy = y + h * 0.14;
                const hr = w * 0.22;
                ctx.fillStyle = '#cc0000';
                ctx.beginPath(); ctx.arc(hx, hy, hr, Math.PI, 0); ctx.fill();
                ctx.fillStyle = '#111e2e';
                ctx.beginPath();
                ctx.moveTo(hx - hr*0.75, hy + hr*0.05);
                ctx.bezierCurveTo(hx - hr*0.55, hy - hr*0.25, hx + hr*0.55, hy - hr*0.25, hx + hr*0.75, hy + hr*0.05);
                ctx.lineTo(hx + hr*0.60, hy + hr*0.30);
                ctx.bezierCurveTo(hx + hr*0.30, hy + hr*0.50, hx - hr*0.30, hy + hr*0.50, hx - hr*0.60, hy + hr*0.30);
                ctx.closePath(); ctx.fill();
                ctx.restore();
            }

            function desenharBuraco(x, y, w, h) {
                ctx.save();
                if (imgDetran) {
                    const pulso = Math.floor(Date.now() / 300) % 2 === 0;
                    ctx.shadowColor = pulso ? '#ff2200' : '#0044ff';
                    ctx.shadowBlur = 28;
                    ctx.drawImage(imgDetran, x, y, w, h);
                    ctx.shadowBlur = 0;
                } else {
                    const cx6 = x + w / 2;
                    ctx.fillStyle = '#1a3a6e';
                    ctx.beginPath(); ctx.roundRect(cx6 - w*0.18, y + h*0.38, w*0.36, h*0.42, 4); ctx.fill();
                    ctx.fillStyle = '#e8c090';
                    ctx.beginPath(); ctx.arc(cx6, y + h*0.22, w*0.18, 0, Math.PI*2); ctx.fill();
                    ctx.fillStyle = '#1a3a6e';
                    ctx.beginPath(); ctx.ellipse(cx6, y + h*0.14, w*0.22, h*0.08, 0, 0, Math.PI*2); ctx.fill();
                    ctx.fillRect(cx6 - w*0.22, y + h*0.14, w*0.44, h*0.05);
                    ctx.strokeStyle = '#e8c090'; ctx.lineWidth = w*0.08; ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.moveTo(cx6 + w*0.18, y + h*0.48);
                    ctx.lineTo(cx6 + w*0.38, y + h*0.32);
                    ctx.stroke();
                    ctx.fillStyle = '#cc1111';
                    ctx.beginPath(); ctx.arc(cx6 + w*0.38, y + h*0.26, w*0.14, 0, Math.PI*2); ctx.fill();
                    ctx.fillStyle = '#fff';
                    ctx.font = `bold ${h*0.12}px sans-serif`;
                    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                    ctx.fillText('PARE', cx6 + w*0.38, y + h*0.26);
                }
                ctx.restore();
            }

            function desenharNota2Reais(x, y, w, h) {
                ctx.save();
                if (img2Reais) {
                    ctx.shadowColor = 'rgba(255,220,0,0.55)';
                    ctx.shadowBlur = 18;
                    ctx.drawImage(img2Reais, x, y, w, h);
                    ctx.shadowBlur = 0;
                } else {
                    const r = 7;
                    ctx.shadowColor = 'rgba(0,0,0,0.40)';
                    ctx.shadowBlur = 12;
                    ctx.shadowOffsetX = 3; ctx.shadowOffsetY = 3;
                    const gNota = ctx.createLinearGradient(x, y, x+w, y+h);
                    gNota.addColorStop(0,   '#1a6e38');
                    gNota.addColorStop(0.45, '#22883e');
                    gNota.addColorStop(0.75, '#1a7430');
                    gNota.addColorStop(1,   '#145a28');
                    ctx.fillStyle = gNota;
                    ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fill();
                    ctx.shadowBlur = 0; ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 0;
                    ctx.strokeStyle = 'rgba(255,215,0,0.70)'; ctx.lineWidth = 2;
                    ctx.beginPath(); ctx.roundRect(x+3, y+3, w-6, h-6, r-2); ctx.stroke();
                    ctx.fillStyle = 'rgba(0,0,0,0.18)';
                    ctx.beginPath(); ctx.roundRect(x, y, w*0.22, h, [r,0,0,r]); ctx.fill();
                    const gRefl = ctx.createLinearGradient(x, y, x+w*0.55, y+h*0.55);
                    gRefl.addColorStop(0,   'rgba(255,255,255,0.22)');
                    gRefl.addColorStop(0.5, 'rgba(255,255,255,0.06)');
                    gRefl.addColorStop(1,   'rgba(255,255,255,0)');
                    ctx.fillStyle = gRefl;
                    ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fill();
                    ctx.fillStyle = '#ffd700';
                    ctx.font = `bold ${h * 0.70}px 'Orbitron', sans-serif`;
                    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                    ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 4;
                    ctx.fillText('2', x + w*0.62, y + h*0.50);
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = 'rgba(255,215,0,0.85)';
                    ctx.font = `bold ${h * 0.22}px 'Orbitron', sans-serif`;
                    ctx.fillText('R$', x + w*0.62, y + h*0.22);
                    ctx.fillStyle = 'rgba(255,255,255,0.65)';
                    ctx.font = `bold ${h * 0.16}px 'Orbitron', sans-serif`;
                    ctx.fillText('REAIS', x + w*0.62, y + h*0.82);
                    ctx.fillStyle = 'rgba(255,215,0,0.50)';
                    ctx.beginPath();
                    ctx.arc(x + w*0.11, y + h*0.50, h*0.20, 0, Math.PI*2);
                    ctx.fill();
                    ctx.strokeStyle = 'rgba(0,80,20,0.60)'; ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(x + w*0.11, y + h*0.50, h*0.15, 0, Math.PI*2);
                    ctx.stroke();
                }
                ctx.restore();
            }

            function desenharEntrega(x, y, w, h) {
                ctx.save();
                const cx = x + w / 2;
                const cy = y + h / 2;

                const t2 = Date.now() / 200;
                const rot = Math.sin(t2) * 0.35;

                ctx.translate(cx, cy);
                ctx.rotate(rot);

                ctx.shadowColor = 'rgba(255, 60, 0, 0.65)';
                ctx.shadowBlur = 22;

                const bagW = w * 0.90;
                const bagH = h * 0.90;
                const bagX = -bagW / 2;
                const bagY = -bagH / 2;

                const gBag = ctx.createLinearGradient(bagX, bagY, bagX + bagW, bagY + bagH);
                gBag.addColorStop(0,   '#ff1a1a');
                gBag.addColorStop(0.5, '#cc0000');
                gBag.addColorStop(1,   '#8a0000');
                ctx.fillStyle = gBag;
                ctx.beginPath();
                ctx.roundRect(bagX, bagY, bagW, bagH, 7);
                ctx.fill();
                ctx.shadowBlur = 0;

                ctx.strokeStyle = 'rgba(255,255,255,0.45)';
                ctx.lineWidth = 1.8;
                ctx.beginPath();
                ctx.roundRect(bagX + 2.5, bagY + 2.5, bagW - 5, bagH - 5, 5);
                ctx.stroke();

                ctx.fillStyle = 'rgba(255,255,255,0.95)';
                ctx.fillRect(bagX, bagY + bagH * 0.38, bagW, bagH * 0.24);

                ctx.fillStyle = '#cc0000';
                ctx.font = `bold ${bagH * 0.17}px 'Orbitron', sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('ifood', 0, bagY + bagH * 0.50);

                ctx.strokeStyle = '#8a0000';
                ctx.lineWidth = w * 0.07;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.arc(0, bagY, w * 0.20, Math.PI, 0);
                ctx.stroke();

                const gRefl = ctx.createLinearGradient(bagX, bagY, bagX + bagW * 0.6, bagY + bagH * 0.6);
                gRefl.addColorStop(0,   'rgba(255,255,255,0.30)');
                gRefl.addColorStop(0.5, 'rgba(255,255,255,0.08)');
                gRefl.addColorStop(1,   'rgba(255,255,255,0)');
                ctx.fillStyle = gRefl;
                ctx.beginPath();
                ctx.roundRect(bagX, bagY, bagW, bagH, 7);
                ctx.fill();

                ctx.restore();
            }

            function desenharMulta(x, y, w, h) {
                ctx.save();
                const cx = x + w / 2;
                const cy = y + h / 2;

                const t2 = Date.now() / 180;
                const rot = Math.sin(t2) * 0.5;

                ctx.translate(cx, cy);
                ctx.rotate(rot);

                ctx.shadowColor = 'rgba(255, 220, 60, 0.85)';
                ctx.shadowBlur = 24;

                const pW = w * 0.85;
                const pH = h * 1.15;
                const pX = -pW / 2;
                const pY = -pH / 2;

                const gPapel = ctx.createLinearGradient(pX, pY, pX + pW, pY + pH);
                gPapel.addColorStop(0,   '#fff8dc');
                gPapel.addColorStop(0.5, '#ffe9a8');
                gPapel.addColorStop(1,   '#f8d060');
                ctx.fillStyle = gPapel;
                ctx.beginPath();
                ctx.roundRect(pX, pY, pW, pH, 4);
                ctx.fill();
                ctx.shadowBlur = 0;

                ctx.strokeStyle = '#cc1111';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.roundRect(pX + 1.5, pY + 1.5, pW - 3, pH - 3, 3);
                ctx.stroke();

                ctx.fillStyle = '#cc1111';
                ctx.beginPath();
                ctx.roundRect(pX + 1.5, pY + 1.5, pW - 3, pH * 0.22, [3, 3, 0, 0]);
                ctx.fill();

                ctx.fillStyle = '#ffffff';
                ctx.font = `bold ${pH * 0.16}px 'Orbitron', sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('MULTA', 0, pY + pH * 0.13);

                ctx.strokeStyle = 'rgba(80, 40, 0, 0.5)';
                ctx.lineWidth = 1.2;
                for (let i = 0; i < 4; i++) {
                    const ly = pY + pH * (0.40 + i * 0.11);
                    ctx.beginPath();
                    ctx.moveTo(pX + pW * 0.10, ly);
                    ctx.lineTo(pX + pW * (0.60 + (i % 2) * 0.25), ly);
                    ctx.stroke();
                }

                ctx.fillStyle = '#8a0000';
                ctx.font = `bold ${pH * 0.13}px 'Orbitron', sans-serif`;
                ctx.fillText('R$ 293,47', 0, pY + pH * 0.88);

                ctx.fillStyle = 'rgba(204, 17, 17, 0.85)';
                ctx.beginPath();
                ctx.arc(pX + pW * 0.82, pY + pH * 0.72, pH * 0.10, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#fff';
                ctx.font = `bold ${pH * 0.07}px 'Orbitron', sans-serif`;
                ctx.fillText('DETRAN', pX + pW * 0.82, pY + pH * 0.72);

                const gRefl = ctx.createLinearGradient(pX, pY, pX + pW * 0.6, pY + pH * 0.6);
                gRefl.addColorStop(0,   'rgba(255,255,255,0.45)');
                gRefl.addColorStop(0.5, 'rgba(255,255,255,0.10)');
                gRefl.addColorStop(1,   'rgba(255,255,255,0)');
                ctx.fillStyle = gRefl;
                ctx.beginPath();
                ctx.roundRect(pX, pY, pW, pH, 4);
                ctx.fill();

                ctx.restore();
            }

            function desenharPistaRio(offsetX, width, vel) {
                const marg    = width * 0.18;
                const asfX    = offsetX + marg;
                const asfW    = width - marg * 2;
                const cx      = offsetX + width / 2;

                const gCeu = ctx.createLinearGradient(0, 0, 0, ALTURA_TELA * 0.38);
                gCeu.addColorStop(0,    '#020e1c');
                gCeu.addColorStop(0.25, '#0a2a4a');
                gCeu.addColorStop(0.55, '#0d5a9a');
                gCeu.addColorStop(0.80, '#1a8cd8');
                gCeu.addColorStop(1,    '#4ab8f0');
                ctx.fillStyle = gCeu;
                ctx.fillRect(offsetX, 0, width, ALTURA_TELA * 0.38);

                const gHor = ctx.createLinearGradient(0, ALTURA_TELA*0.35, 0, ALTURA_TELA*0.42);
                gHor.addColorStop(0, 'rgba(120,210,255,0.9)');
                gHor.addColorStop(1, 'rgba(10,120,200,0)');
                ctx.fillStyle = gHor;
                ctx.fillRect(offsetX, ALTURA_TELA*0.35, width, ALTURA_TELA*0.07);

                const solX = offsetX + width * 0.78, solY = ALTURA_TELA * 0.22;
                const gSol = ctx.createRadialGradient(solX, solY, 0, solX, solY, 80);
                gSol.addColorStop(0,   'rgba(255,255,200,1)');
                gSol.addColorStop(0.25,'rgba(255,220,100,0.85)');
                gSol.addColorStop(0.55,'rgba(255,160,30,0.40)');
                gSol.addColorStop(1,   'rgba(255,120,0,0)');
                ctx.fillStyle = gSol;
                ctx.beginPath(); ctx.arc(solX, solY, 80, 0, Math.PI*2); ctx.fill();
                ctx.fillStyle = 'rgba(255,250,180,0.95)';
                ctx.beginPath(); ctx.arc(solX, solY, 26, 0, Math.PI*2); ctx.fill();

                const nuvens = [[0.08,45,68,20],[0.20,30,36,14],[0.50,52,58,18],[0.68,35,30,12],[0.38,18,40,14]];
                nuvens.forEach(([fx,fy,rx,ry]) => {
                    const nx = offsetX + ((fx * width + vel * 0.18) % width);
                    ctx.fillStyle = 'rgba(255,255,255,0.95)';
                    ctx.beginPath(); ctx.ellipse(nx,        fy,     rx,     ry,     0,0,Math.PI*2); ctx.fill();
                    ctx.fillStyle = 'rgba(255,255,255,0.78)';
                    ctx.beginPath(); ctx.ellipse(nx+rx*.55, fy-3,   rx*.70, ry*.85, 0,0,Math.PI*2); ctx.fill();
                    ctx.beginPath(); ctx.ellipse(nx-rx*.45, fy+5,   rx*.60, ry*.78, 0,0,Math.PI*2); ctx.fill();
                    ctx.fillStyle = 'rgba(160,200,240,0.22)';
                    ctx.beginPath(); ctx.ellipse(nx, fy+ry*.6, rx*.85, ry*.4, 0,0,Math.PI*2); ctx.fill();
                });

                [[offsetX, marg, 0], [asfX+asfW, marg, 1]].forEach(([bx, bw, lado]) => {
                    ctx.save();
                    ctx.beginPath(); ctx.rect(bx, 0, bw, ALTURA_TELA); ctx.clip();

                    const gOc = ctx.createLinearGradient(0, ALTURA_TELA*0.38, 0, ALTURA_TELA);
                    gOc.addColorStop(0,    '#1abde8');
                    gOc.addColorStop(0.12, '#0e98c8');
                    gOc.addColorStop(0.32, '#0a72a8');
                    gOc.addColorStop(0.60, '#065080');
                    gOc.addColorStop(1,    '#021a3e');
                    ctx.fillStyle = gOc;
                    ctx.fillRect(bx, 0, bw, ALTURA_TELA);

                    const colX = lado === 0 ? bx + bw*0.62 : bx + bw*0.38;
                    const gRefl = ctx.createLinearGradient(colX-bw*.22, 0, colX+bw*.22, 0);
                    gRefl.addColorStop(0,   'rgba(255,240,130,0)');
                    gRefl.addColorStop(0.4, 'rgba(255,240,130,0.12)');
                    gRefl.addColorStop(0.6, 'rgba(255,230,80,0.22)');
                    gRefl.addColorStop(1,   'rgba(255,240,130,0)');
                    ctx.fillStyle = gRefl;
                    ctx.fillRect(bx, ALTURA_TELA*0.38, bw, ALTURA_TELA*0.62);

                    for (let r = 0; r < 5; r++) {
                        const rX  = bx + bw * (0.08 + r * 0.20);
                        const rWid = bw * 0.09;
                        const gR  = ctx.createLinearGradient(rX, ALTURA_TELA*0.42, rX, ALTURA_TELA*0.82);
                        gR.addColorStop(0,  `rgba(80,200,255,${0.10 - r*0.015})`);
                        gR.addColorStop(1,   'rgba(0,80,180,0)');
                        ctx.fillStyle = gR;
                        const rOff = ((vel*0.06 + r*18) % 20);
                        ctx.beginPath();
                        ctx.moveTo(rX - rWid*.25, ALTURA_TELA*0.42);
                        ctx.lineTo(rX + rWid*.25, ALTURA_TELA*0.42);
                        ctx.lineTo(rX + rWid + rOff*.03, ALTURA_TELA*0.82);
                        ctx.lineTo(rX - rWid - rOff*.03, ALTURA_TELA*0.82);
                        ctx.closePath(); ctx.fill();
                    }

                    for (let i = 0; i < 20; i++) {
                        const scY = ALTURA_TELA*0.40 + ((i*44 + vel*0.28) % (ALTURA_TELA*0.58));
                        const scL = 8 + (i%5)*10;
                        const scA = 0.45 - (i%6)*0.06;
                        ctx.strokeStyle = `rgba(255,252,200,${scA})`;
                        ctx.lineWidth = 1.5;
                        ctx.beginPath();
                        ctx.moveTo(colX - scL/2, scY);
                        ctx.lineTo(colX + scL/2, scY);
                        ctx.stroke();
                    }

                    for (let c = 0; c < 4; c++) {
                        const esp = 22 + c*18;
                        const spd = vel * (1.6 - c*0.30);
                        const amp = 4.5 - c;
                        const n   = Math.ceil(ALTURA_TELA / esp) + 2;
                        ctx.strokeStyle = `rgba(255,255,255,${0.28-c*0.06})`;
                        ctx.lineWidth = 2.5 - c*0.5;
                        ctx.lineCap = 'round';
                        for (let i = 0; i < n; i++) {
                            const oy = ((i*esp) + spd) % ALTURA_TELA;
                            if (oy < ALTURA_TELA*0.40) continue;
                            ctx.beginPath();
                            ctx.moveTo(bx, oy + Math.sin(vel*0.04+c)*amp);
                            for (let x = bx+4; x <= bx+bw; x += 4)
                                ctx.lineTo(x, oy + Math.sin((x-bx)*0.18 + vel*0.04+c*1.2)*amp);
                            ctx.stroke();
                        }
                    }

                    for (let i = 0; i < 14; i++) {
                        const ey = ((i*58 + vel*1.8) % ALTURA_TELA);
                        if (ey < ALTURA_TELA*0.42) continue;
                        const ew = bw * (0.18 + (i%5)*0.11);
                        const ea = 0.20 - (i%4)*0.04;
                        ctx.fillStyle = `rgba(255,255,255,${ea})`;
                        ctx.beginPath();
                        ctx.ellipse(bx + bw*(0.06+(i%3)*0.32)+ew/2, ey, ew/2, 3.5, 0, 0, Math.PI*2);
                        ctx.fill();
                    }

                    const finVelL = lado === 0
                        ? (vel * 0.08) % (ALTURA_TELA * 0.58)
                        : (vel * 0.065 + ALTURA_TELA * 0.40) % (ALTURA_TELA * 0.58);
                    const finCX = bx + bw * (lado === 0 ? 0.46 : 0.54);
                    const finCY = ALTURA_TELA*0.42 + finVelL;
                    const fH = Math.min(bw * 0.55, 70);
                    const fB = fH * 1.55;

                    const sGF = ctx.createRadialGradient(finCX, finCY+fH*.85, 0, finCX, finCY+fH*.85, fB*.7);
                    sGF.addColorStop(0,   'rgba(0,10,40,0.55)');
                    sGF.addColorStop(0.5, 'rgba(0,10,40,0.20)');
                    sGF.addColorStop(1,   'rgba(0,10,40,0)');
                    ctx.fillStyle = sGF;
                    ctx.beginPath(); ctx.ellipse(finCX, finCY+fH*.9, fB*.72, fH*.25, 0, 0, Math.PI*2); ctx.fill();

                    ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.moveTo(finCX - fB*.38, finCY + fH*.04);
                    ctx.quadraticCurveTo(finCX - fB*.60, finCY + fH*.44, finCX - fB*.80, finCY + fH*.60);
                    ctx.stroke();
                    ctx.strokeStyle = 'rgba(255,255,255,0.20)'; ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(finCX + fB*.26, finCY + fH*.02);
                    ctx.quadraticCurveTo(finCX + fB*.08, finCY + fH*.32, finCX - fB*.88, finCY + fH*.46);
                    ctx.stroke();

                    const fGrad = ctx.createLinearGradient(finCX-fB*.2, finCY-fH, finCX+fB*.3, finCY);
                    fGrad.addColorStop(0,   '#18242e');
                    fGrad.addColorStop(0.35,'#283c50');
                    fGrad.addColorStop(0.75,'#3a5568');
                    fGrad.addColorStop(1,   '#4e6878');
                    ctx.fillStyle = fGrad;
                    ctx.beginPath();
                    ctx.moveTo(finCX - fB*.58, finCY);
                    ctx.bezierCurveTo(finCX-fB*.50, finCY-fH*.28, finCX-fB*.22, finCY-fH*.70, finCX-fB*.04, finCY-fH*.97);
                    ctx.bezierCurveTo(finCX+fB*.14, finCY-fH*.82, finCX+fB*.50, finCY-fH*.37, finCX+fB*.58, finCY-fH*.07);
                    ctx.bezierCurveTo(finCX+fB*.54, finCY+fH*.03, finCX+fB*.18, finCY+fH*.02, finCX, finCY);
                    ctx.quadraticCurveTo(finCX-fB*.28, finCY+fH*.01, finCX-fB*.58, finCY);
                    ctx.closePath(); ctx.fill();

                    const rFin = ctx.createLinearGradient(finCX-fB*.5, finCY, finCX-fB*.05, finCY-fH);
                    rFin.addColorStop(0,   'rgba(130,190,230,0)');
                    rFin.addColorStop(0.3, 'rgba(170,220,255,0.28)');
                    rFin.addColorStop(1,   'rgba(210,240,255,0)');
                    ctx.fillStyle = rFin;
                    ctx.beginPath();
                    ctx.moveTo(finCX-fB*.58, finCY);
                    ctx.bezierCurveTo(finCX-fB*.50,finCY-fH*.28, finCX-fB*.22,finCY-fH*.70, finCX-fB*.04,finCY-fH*.97);
                    ctx.lineTo(finCX+fB*.06, finCY-fH*.88);
                    ctx.bezierCurveTo(finCX-fB*.10,finCY-fH*.58, finCX-fB*.34,finCY-fH*.20, finCX-fB*.44, finCY);
                    ctx.closePath(); ctx.fill();

                    ctx.strokeStyle = 'rgba(255,255,255,0.60)'; ctx.lineWidth = 2; ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.moveTo(finCX-fB*.75, finCY);
                    ctx.quadraticCurveTo(finCX-fB*.58, finCY-6, finCX-fB*.35, finCY-1);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(finCX+fB*.35, finCY-1);
                    ctx.quadraticCurveTo(finCX+fB*.58, finCY-6, finCX+fB*.75, finCY);
                    ctx.stroke();

                    ctx.restore();
                });

                const palmH = 210, nPalm = Math.ceil(ALTURA_TELA/palmH) + 2;
                for (let i = 0; i < nPalm; i++) {
                    const py = ((i*palmH) + vel*0.42) % ALTURA_TELA - palmH;
                    [[asfX - 26, 1], [asfX + asfW + 6, -1]].forEach(([tx, dir]) => {
                        ctx.save();
                        ctx.strokeStyle = '#3a2210'; ctx.lineWidth = 10; ctx.lineCap = 'round';
                        ctx.beginPath();
                        ctx.moveTo(tx, py + palmH);
                        ctx.bezierCurveTo(tx+dir*5, py+palmH*.66, tx+dir*12, py+palmH*.36, tx+dir*18, py+palmH*.12);
                        ctx.stroke();
                        ctx.strokeStyle = '#5a3820'; ctx.lineWidth = 2;
                        [.38,.55,.72].forEach(t => {
                            const nx2 = tx + dir*5*t, ny2 = py + palmH*(1-t*.9);
                            ctx.beginPath(); ctx.moveTo(nx2-6,ny2); ctx.lineTo(nx2+6,ny2); ctx.stroke();
                        });
                        const fpx = tx + dir*18, fpy = py + palmH*.12;
                        [[-38,-10],[-28,-24],[-14,-34],[0,-38],[14,-34],[28,-24],[38,-10],[-8,-38],[8,-38]].forEach(([fdx,fdy]) => {
                            ctx.strokeStyle = (i + Math.abs(fdx))%3===0 ? '#145e12' : '#1e7a1a';
                            ctx.lineWidth = Math.max(1.5, 4 - Math.abs(fdx)*.06);
                            ctx.beginPath();
                            ctx.moveTo(fpx, fpy);
                            ctx.quadraticCurveTo(fpx+fdx*.52, fpy+fdy*.52-3, fpx+fdx, fpy+fdy);
                            ctx.stroke();
                        });
                        ctx.restore();
                    });
                }

                const cW = 20;
                ctx.save();
                [[asfX-cW, cW], [asfX+asfW, cW]].forEach(([bx2, bw2]) => {
                    ctx.beginPath(); ctx.rect(bx2, 0, bw2, ALTURA_TELA); ctx.clip();
                    const pw3 = 14, ph3 = 10;
                    const nr = Math.ceil(ALTURA_TELA/ph3) + 2;
                    for (let row = 0; row < nr; row++) {
                        const ry2 = ((row*ph3) + vel*1.4) % ALTURA_TELA - ph3;
                        const shift = (row%2===0) ? 0 : pw3/2;
                        for (let col = -1; col < Math.ceil(bw2/pw3)+2; col++) {
                            const rx2 = bx2 + col*pw3 + shift;
                            ctx.fillStyle = (row+col)%2===0 ? '#d8d8d8' : '#282828';
                            ctx.fillRect(rx2, ry2, pw3-1, ph3-1);
                        }
                    }
                });
                ctx.restore();
                ctx.fillStyle = '#00a040';
                ctx.fillRect(asfX-cW,     0, 5, ALTURA_TELA);
                ctx.fillRect(asfX+asfW+cW-5, 0, 5, ALTURA_TELA);
                ctx.fillStyle = '#ffd800';
                ctx.fillRect(asfX-cW+5,   0, 3, ALTURA_TELA);
                ctx.fillRect(asfX+asfW+cW-8, 0, 3, ALTURA_TELA);

                const gAsf = ctx.createLinearGradient(asfX, 0, asfX+asfW, 0);
                gAsf.addColorStop(0,    '#0e0e14');
                gAsf.addColorStop(0.18, '#16161e');
                gAsf.addColorStop(0.50, '#1a1a24');
                gAsf.addColorStop(0.82, '#16161e');
                gAsf.addColorStop(1,    '#0e0e14');
                ctx.fillStyle = gAsf;
                ctx.fillRect(asfX, 0, asfW, ALTURA_TELA);

                ctx.save();
                ctx.beginPath(); ctx.rect(asfX, 0, asfW, ALTURA_TELA); ctx.clip();
                for (let i = 0; i < 50; i++) {
                    const gx = asfX + (i*127 + 13) % asfW;
                    const gy = ((i*83 + vel*0.45) % ALTURA_TELA);
                    ctx.fillStyle = `rgba(255,255,255,${0.018 + (i%4)*0.004})`;
                    ctx.beginPath(); ctx.arc(gx, gy, 1.2, 0, Math.PI*2); ctx.fill();
                }
                const gUm = ctx.createLinearGradient(asfX+asfW*.30, 0, asfX+asfW*.70, 0);
                gUm.addColorStop(0,   'rgba(0,0,0,0)');
                gUm.addColorStop(0.5, 'rgba(255,240,120,0.055)');
                gUm.addColorStop(1,   'rgba(0,0,0,0)');
                ctx.fillStyle = gUm;
                ctx.fillRect(asfX, 0, asfW, ALTURA_TELA);
                ctx.restore();

                ctx.fillStyle = '#00a040';
                ctx.fillRect(asfX,        0, 7, ALTURA_TELA);
                ctx.fillRect(asfX+asfW-7, 0, 7, ALTURA_TELA);
                ctx.fillStyle = '#ffd800';
                ctx.fillRect(asfX+7,      0, 4, ALTURA_TELA);
                ctx.fillRect(asfX+asfW-11,0, 4, ALTURA_TELA);

                ctx.strokeStyle = 'rgba(255,255,255,0.96)';
                ctx.lineWidth = 6;
                ctx.setLineDash([72, 28]);
                ctx.lineDashOffset = -vel % 100;
                ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, ALTURA_TELA); ctx.stroke();
                ctx.strokeStyle = 'rgba(255,216,0,0.60)';
                ctx.lineWidth = 2.5;
                ctx.setLineDash([34, 50]);
                ctx.lineDashOffset = -vel % 84;
                [asfX + asfW*0.33, asfX + asfW*0.67].forEach(lx => {
                    ctx.beginPath(); ctx.moveTo(lx,0); ctx.lineTo(lx,ALTURA_TELA); ctx.stroke();
                });
                ctx.setLineDash([]); ctx.lineDashOffset = 0;
            }

            function desenharPistaFaroeste(offsetX, width, vel) {
                const marg2  = width * 0.15;
                const asfX   = offsetX + marg2;
                const asfW   = width - marg2 * 2;
                const cx2    = offsetX + width / 2;

                const gC = ctx.createLinearGradient(0, 0, 0, ALTURA_TELA);
                gC.addColorStop(0,    '#180a28');
                gC.addColorStop(0.15, '#560a20');
                gC.addColorStop(0.32, '#b0200a');
                gC.addColorStop(0.52, '#e05818');
                gC.addColorStop(0.72, '#f0a028');
                gC.addColorStop(0.88, '#f8c850');
                gC.addColorStop(1,    '#fce888');
                ctx.fillStyle = gC;
                ctx.fillRect(offsetX, 0, width, ALTURA_TELA);

                const nuvD = [[0.10,55,80,22],[0.30,38,50,16],[0.58,60,70,20],[0.80,42,40,14]];
                nuvD.forEach(([fx,fy,rx,ry]) => {
                    const nx = offsetX + ((fx*width + vel*0.10) % width);
                    ctx.fillStyle = 'rgba(100,40,20,0.55)';
                    ctx.beginPath(); ctx.ellipse(nx,        fy+4, rx,     ry,     0,0,Math.PI*2); ctx.fill();
                    ctx.fillStyle = 'rgba(180,80,30,0.38)';
                    ctx.beginPath(); ctx.ellipse(nx+rx*.5,  fy,   rx*.72, ry*.88, 0,0,Math.PI*2); ctx.fill();
                    ctx.beginPath(); ctx.ellipse(nx-rx*.4,  fy+2, rx*.60, ry*.80, 0,0,Math.PI*2); ctx.fill();
                });

                const sX = offsetX + width*0.72, sY = ALTURA_TELA*0.25;
                const gSol = ctx.createRadialGradient(sX, sY, 0, sX, sY, 110);
                gSol.addColorStop(0,   'rgba(255,240,160,1)');
                gSol.addColorStop(0.22,'rgba(255,180,30,0.85)');
                gSol.addColorStop(0.50,'rgba(240,100,20,0.40)');
                gSol.addColorStop(0.80,'rgba(200,50,10,0.15)');
                gSol.addColorStop(1,   'rgba(180,30,5,0)');
                ctx.fillStyle = gSol;
                ctx.beginPath(); ctx.arc(sX, sY, 110, 0, Math.PI*2); ctx.fill();
                ctx.fillStyle = 'rgba(255,230,100,0.98)';
                ctx.beginPath(); ctx.arc(sX, sY, 32, 0, Math.PI*2); ctx.fill();

                ctx.fillStyle = '#2a0a04';
                ctx.beginPath();
                ctx.moveTo(offsetX,                 ALTURA_TELA*0.68);
                ctx.lineTo(offsetX + width*0.02,    ALTURA_TELA*0.42);
                ctx.lineTo(offsetX + width*0.08,    ALTURA_TELA*0.42);
                ctx.lineTo(offsetX + width*0.14,    ALTURA_TELA*0.50);
                ctx.lineTo(offsetX + width*0.22,    ALTURA_TELA*0.30);
                ctx.lineTo(offsetX + width*0.30,    ALTURA_TELA*0.30);
                ctx.lineTo(offsetX + width*0.36,    ALTURA_TELA*0.44);
                ctx.lineTo(offsetX + width*0.50,    ALTURA_TELA*0.35);
                ctx.lineTo(offsetX + width*0.60,    ALTURA_TELA*0.35);
                ctx.lineTo(offsetX + width*0.66,    ALTURA_TELA*0.48);
                ctx.lineTo(offsetX + width*0.78,    ALTURA_TELA*0.32);
                ctx.lineTo(offsetX + width*0.88,    ALTURA_TELA*0.32);
                ctx.lineTo(offsetX + width*0.94,    ALTURA_TELA*0.44);
                ctx.lineTo(offsetX + width,         ALTURA_TELA*0.38);
                ctx.lineTo(offsetX + width,         ALTURA_TELA*0.70);
                ctx.lineTo(offsetX,                 ALTURA_TELA*0.70);
                ctx.closePath(); ctx.fill();

                ctx.fillStyle = '#501206';
                ctx.beginPath();
                ctx.moveTo(offsetX,                 ALTURA_TELA*0.74);
                ctx.lineTo(offsetX + width*0.05,    ALTURA_TELA*0.52);
                ctx.lineTo(offsetX + width*0.12,    ALTURA_TELA*0.52);
                ctx.lineTo(offsetX + width*0.18,    ALTURA_TELA*0.60);
                ctx.lineTo(offsetX + width*0.28,    ALTURA_TELA*0.44);
                ctx.lineTo(offsetX + width*0.36,    ALTURA_TELA*0.44);
                ctx.lineTo(offsetX + width*0.44,    ALTURA_TELA*0.56);
                ctx.lineTo(offsetX + width*0.56,    ALTURA_TELA*0.46);
                ctx.lineTo(offsetX + width*0.66,    ALTURA_TELA*0.46);
                ctx.lineTo(offsetX + width*0.74,    ALTURA_TELA*0.58);
                ctx.lineTo(offsetX + width*0.84,    ALTURA_TELA*0.42);
                ctx.lineTo(offsetX + width*0.94,    ALTURA_TELA*0.42);
                ctx.lineTo(offsetX + width,         ALTURA_TELA*0.54);
                ctx.lineTo(offsetX + width,         ALTURA_TELA*0.76);
                ctx.lineTo(offsetX,                 ALTURA_TELA*0.76);
                ctx.closePath(); ctx.fill();

                ctx.fillStyle = '#782210';
                ctx.beginPath();
                ctx.moveTo(offsetX,                 ALTURA_TELA*0.80);
                ctx.lineTo(offsetX + width*0.06,    ALTURA_TELA*0.60);
                ctx.lineTo(offsetX + width*0.14,    ALTURA_TELA*0.60);
                ctx.lineTo(offsetX + width*0.20,    ALTURA_TELA*0.68);
                ctx.lineTo(offsetX + width*0.30,    ALTURA_TELA*0.52);
                ctx.lineTo(offsetX + width*0.40,    ALTURA_TELA*0.52);
                ctx.lineTo(offsetX + width*0.48,    ALTURA_TELA*0.64);
                ctx.lineTo(offsetX + width*0.60,    ALTURA_TELA*0.56);
                ctx.lineTo(offsetX + width*0.72,    ALTURA_TELA*0.56);
                ctx.lineTo(offsetX + width*0.80,    ALTURA_TELA*0.66);
                ctx.lineTo(offsetX + width*0.90,    ALTURA_TELA*0.54);
                ctx.lineTo(offsetX + width,         ALTURA_TELA*0.60);
                ctx.lineTo(offsetX + width,         ALTURA_TELA*0.82);
                ctx.lineTo(offsetX,                 ALTURA_TELA*0.82);
                ctx.closePath(); ctx.fill();

                [
                    ['rgba(220,100,30,0.32)', 0.60],
                    ['rgba(200,80,20,0.25)',  0.67],
                    ['rgba(240,160,60,0.20)', 0.73],
                    ['rgba(180,60,10,0.18)',  0.79],
                ].forEach(([cor, y]) => {
                    ctx.fillStyle = cor;
                    ctx.fillRect(offsetX, ALTURA_TELA*y, width, 6);
                });

                const gAreia = ctx.createLinearGradient(0, 0, 0, ALTURA_TELA);
                gAreia.addColorStop(0,    '#c87830');
                gAreia.addColorStop(0.28, '#b86820');
                gAreia.addColorStop(0.65, '#a05818');
                gAreia.addColorStop(1,    '#884810');
                ctx.fillStyle = gAreia;
                ctx.fillRect(offsetX,     0, marg2, ALTURA_TELA);
                ctx.fillRect(asfX + asfW, 0, marg2, ALTURA_TELA);

                ctx.save();
                [[offsetX, marg2],[asfX+asfW, marg2]].forEach(([bx, bw]) => {
                    ctx.beginPath(); ctx.rect(bx, 0, bw, ALTURA_TELA); ctx.clip();
                    for (let i = 0; i < 18; i++) {
                        const sy = ((i*48) + vel*0.7) % ALTURA_TELA;
                        const sw = bw*(0.20 + (i%5)*0.12);
                        ctx.strokeStyle = `rgba(210,140,50,${0.18-(i%4)*0.03})`;
                        ctx.lineWidth = 1.5;
                        ctx.beginPath();
                        ctx.moveTo(bx+(bw-sw)*0.5, sy);
                        ctx.bezierCurveTo(bx+bw*0.3, sy+4, bx+bw*0.7, sy-4, bx+(bw+sw)*0.5, sy+2);
                        ctx.stroke();
                    }
                });
                ctx.restore();

                const cactoH = 190, nCacto = Math.ceil(ALTURA_TELA/cactoH) + 2;
                for (let i = 0; i < nCacto; i++) {
                    const cy3 = ((i*cactoH) + vel*0.5) % ALTURA_TELA - cactoH;
                    [[offsetX + marg2*0.40, 1], [asfX + asfW + marg2*0.60, -1]].forEach(([cxc]) => {
                        ctx.save();
                        const tw = 14, th = 88;
                        const tB = cy3 + cactoH*0.94;
                        const gCacto = ctx.createLinearGradient(cxc-tw/2, 0, cxc+tw/2, 0);
                        gCacto.addColorStop(0,   '#1a4a0e');
                        gCacto.addColorStop(0.4, '#2e6818');
                        gCacto.addColorStop(1,   '#1a4a0e');
                        ctx.fillStyle = gCacto;
                        ctx.beginPath(); ctx.roundRect(cxc-tw/2, tB-th, tw, th, [tw/2,tw/2,0,0]); ctx.fill();
                        ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 1;
                        [-3,0,3].forEach(dx => {
                            ctx.beginPath(); ctx.moveTo(cxc+dx, tB-th+6); ctx.lineTo(cxc+dx, tB-5); ctx.stroke();
                        });
                        const bAc = tB - th*0.62;
                        ctx.fillStyle = gCacto;
                        ctx.beginPath(); ctx.roundRect(cxc-tw/2-28, bAc, 28, tw*0.82, [tw*0.41,0,0,tw*0.41]); ctx.fill();
                        ctx.beginPath(); ctx.roundRect(cxc-tw/2-28, bAc-26, tw*0.88, 26, [tw*0.44,tw*0.44,0,0]); ctx.fill();
                        const bBc = tB - th*0.42;
                        ctx.beginPath(); ctx.roundRect(cxc+tw/2, bBc, 25, tw*0.82, [0,tw*0.41,tw*0.41,0]); ctx.fill();
                        ctx.beginPath(); ctx.roundRect(cxc+tw/2+25-tw*0.88, bBc-22, tw*0.88, 22, [tw*0.44,tw*0.44,0,0]); ctx.fill();
                        ctx.strokeStyle = 'rgba(255,255,200,0.70)'; ctx.lineWidth = 1.3;
                        [[-tw/2,bAc+5],[tw/2,bAc+8],[0,tB-th*0.22],
                         [-tw/2-25,bAc+10],[tw/2+20,bBc+8],[0,tB-5]].forEach(([ex,ey])=>{
                            const d = ex < 0 ? -8 : 8;
                            ctx.beginPath(); ctx.moveTo(cxc+ex,ey); ctx.lineTo(cxc+ex+d,ey-6); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(cxc+ex,ey+5); ctx.lineTo(cxc+ex+d,ey+10); ctx.stroke();
                        });
                        ctx.restore();
                    });
                }

                const cercaH2 = 54, nCerca = Math.ceil(ALTURA_TELA/cercaH2) + 2;
                for (let i = 0; i < nCerca; i++) {
                    const fy2 = ((i*cercaH2) + vel) % ALTURA_TELA - cercaH2;
                    const pE = asfX - 18, pD = asfX + asfW + 5;
                    const gPoste = ctx.createLinearGradient(pE, 0, pE+12, 0);
                    gPoste.addColorStop(0, '#3c2008'); gPoste.addColorStop(0.5, '#5a3010'); gPoste.addColorStop(1, '#3c2008');
                    ctx.fillStyle = gPoste;
                    ctx.beginPath(); ctx.roundRect(pE,  fy2, 12, cercaH2-6, [2,2,0,0]); ctx.fill();
                    ctx.beginPath(); ctx.roundRect(pD,  fy2, 12, cercaH2-6, [2,2,0,0]); ctx.fill();
                    ctx.fillStyle = 'rgba(0,0,0,0.20)';
                    ctx.fillRect(pE+4, fy2, 2, cercaH2-6);
                    ctx.fillRect(pD+4, fy2, 2, cercaH2-6);
                    ctx.fillStyle = '#6a4218';
                    ctx.fillRect(pE-6,  fy2+cercaH2*0.22, 20, 5);
                    ctx.fillRect(pE-6,  fy2+cercaH2*0.65, 20, 5);
                    ctx.fillRect(pD-3,  fy2+cercaH2*0.22, 20, 5);
                    ctx.fillRect(pD-3,  fy2+cercaH2*0.65, 20, 5);
                }

                const gEst = ctx.createLinearGradient(asfX, 0, asfX+asfW, 0);
                gEst.addColorStop(0,    '#6a4810');
                gEst.addColorStop(0.12, '#8a6020');
                gEst.addColorStop(0.50, '#9e7430');
                gEst.addColorStop(0.88, '#8a6020');
                gEst.addColorStop(1,    '#6a4810');
                ctx.fillStyle = gEst;
                ctx.fillRect(asfX, 0, asfW, ALTURA_TELA);

                ctx.save();
                ctx.beginPath(); ctx.rect(asfX, 0, asfW, ALTURA_TELA); ctx.clip();
                for (let i = 0; i < 40; i++) {
                    const px3 = asfX + (i*109 + 23) % asfW;
                    const py3 = ((i*71 + vel*0.5) % ALTURA_TELA);
                    ctx.fillStyle = `rgba(0,0,0,${0.06 + (i%4)*0.02})`;
                    ctx.beginPath(); ctx.ellipse(px3, py3, 4+i%5, 2+i%3, i*0.3, 0, Math.PI*2); ctx.fill();
                }
                const gReflEst = ctx.createLinearGradient(asfX+asfW*.25, 0, asfX+asfW*.75, 0);
                gReflEst.addColorStop(0,   'rgba(0,0,0,0)');
                gReflEst.addColorStop(0.5, 'rgba(255,200,80,0.07)');
                gReflEst.addColorStop(1,   'rgba(0,0,0,0)');
                ctx.fillStyle = gReflEst;
                ctx.fillRect(asfX, 0, asfW, ALTURA_TELA);
                ctx.restore();

                ctx.save();
                ctx.strokeStyle = 'rgba(70,40,10,0.65)'; ctx.lineWidth = 6;
                [asfX + asfW*0.27, asfX + asfW*0.73].forEach(tx => {
                    ctx.setLineDash([18, 12]); ctx.lineDashOffset = -vel*0.85;
                    ctx.beginPath(); ctx.moveTo(tx, 0); ctx.lineTo(tx, ALTURA_TELA); ctx.stroke();
                });
                ctx.setLineDash([]); ctx.lineDashOffset = 0;
                ctx.restore();

                ctx.fillStyle = '#b88040';
                ctx.fillRect(asfX,            0, 7, ALTURA_TELA);
                ctx.fillRect(asfX + asfW - 7, 0, 7, ALTURA_TELA);
                ctx.fillStyle = '#806020';
                ctx.fillRect(asfX + 7,        0, 3, ALTURA_TELA);
                ctx.fillRect(asfX + asfW - 10,0, 3, ALTURA_TELA);

                ctx.strokeStyle = 'rgba(255,200,30,0.92)';
                ctx.lineWidth = 5;
                ctx.setLineDash([58, 38]);
                ctx.lineDashOffset = -vel % 96;
                ctx.beginPath(); ctx.moveTo(cx2, 0); ctx.lineTo(cx2, ALTURA_TELA); ctx.stroke();
                ctx.strokeStyle = 'rgba(220,160,20,0.35)';
                ctx.lineWidth = 2;
                ctx.setLineDash([28, 60]);
                ctx.lineDashOffset = -vel % 88;
                [asfX + asfW*0.33, asfX + asfW*0.67].forEach(lx => {
                    ctx.beginPath(); ctx.moveTo(lx,0); ctx.lineTo(lx,ALTURA_TELA); ctx.stroke();
                });
                ctx.setLineDash([]); ctx.lineDashOffset = 0;
            }

            function desenharPistaCustomizada(offsetX, width, deslocamento) {
                const vel = deslocamento * 2.0;
                if (pistaSelecionada !== 'pista2') {
                    desenharPistaRio(offsetX, width, vel);
                } else {
                    desenharPistaFaroeste(offsetX, width, vel);
                }
            }

            function criarParticulas(x, y, cor, qtd = 20) {
                for (let i = 0; i < qtd; i++) {
                    const ang = Math.random() * 2 * Math.PI;
                    const vel = 1 + Math.random() * 4;
                    particulas.push({
                        x, y,
                        vx: Math.cos(ang) * vel,
                        vy: Math.sin(ang) * vel - 0.5,
                        vida: 20 + Math.random() * 30,
                        maxVida: 50,
                        tamanho: 2 + Math.random() * 4,
                        cor
                    });
                }
                if (particulas.length > MAX_PARTICULAS) {
                    particulas.splice(0, particulas.length - MAX_PARTICULAS);
                }
            }

            function atualizarParticulas() {
                for (let i = particulas.length - 1; i >= 0; i--) {
                    const p = particulas[i];
                    p.x += p.vx;
                    p.y += p.vy;
                    p.vy += 0.08;
                    p.vida--;
                    if (p.vida <= 0) particulas.splice(i, 1);
                }
            }

            function desenharParticulas() {
                for (const p of particulas) {
                    const alpha = p.vida / p.maxVida;
                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = p.cor;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.tamanho * alpha, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.globalAlpha = 1;
            }

            function getHighScore(modo) {
                const v = parseInt(localStorage.getItem('neef_high_' + modo) || '0', 10);
                return isNaN(v) ? 0 : v;
            }
            function setHighScore(modo, valor) { const atual = getHighScore(modo); if (valor > atual) localStorage.setItem('neef_high_' + modo, valor); }

            function xFaixa(faixa, offsetX, width, itemW) {
                const marg = (pistaSelecionada === 'pista2') ? width * 0.15 : width * 0.18;
                const pistaEsq = offsetX + marg + 25;
                const pistaW   = width - marg * 2 - 50;
                const centro   = pistaEsq + (pistaW / 3) * faixa + (pistaW / 3) / 2 - itemW / 2;
                return centro + (Math.random() - 0.5) * (pistaW / 3 * 0.35);
            }

            function criarObstaculo(tipo, x, y) {
                if (tipo === 'moeda') {
                    return { tipo: 'moeda', x, y, width: 90, height: 60 };
                } else if (tipo === 'entrega') {
                    return { tipo: 'entrega', x, y, width: 52, height: 52, vxEntrega: 0 };
                } else if (tipo === 'multa') {
                    return { tipo: 'multa', x, y, width: 44, height: 58, vxEntrega: 0 };
                } else if (tipo === 'buraco') {
                    const zigueAtivo = Math.random() < DETRAN_ZIGUE_CHANCE;
                    return {
                        tipo: 'buraco',
                        x, y, width: 90, height: 60,
                        zigueAtivo,
                        zigueDir: Math.random() < 0.5 ? 1 : -1,
                        zigueVel: ZIGUE_VEL_MIN + Math.random() * (ZIGUE_VEL_MAX - ZIGUE_VEL_MIN),
                        zigueOffset: Math.random() * Math.PI * 2,
                        podeJogarMulta: Math.random() < MULTA_CHANCE,
                        multaJogada: false
                    };
                } else {
                    const zigueAtivo = Math.random() < ZIGUE_CHANCE;
                    return {
                        tipo: 'moto',
                        x, y,
                        width: 90,
                        height: 120,
                        zigueAtivo,
                        zigueDir: Math.random() < 0.5 ? 1 : -1,
                        zigueVel: ZIGUE_VEL_MIN + Math.random() * (ZIGUE_VEL_MAX - ZIGUE_VEL_MIN),
                        zigueOffset: Math.random() * Math.PI * 2,
                        podeJogarEntrega: Math.random() < ENTREGA_CHANCE,
                        entregaJogada: false
                    };
                }
            }

            function verificarProgressao(jogador) {
                if (!jogador) return;

                if (typeof jogador.pontuacaoUltimaVida === 'undefined') jogador.pontuacaoUltimaVida = 0;
                
                while (jogador.vidas < MAX_VIDAS && 
                       jogador.pontuacao - jogador.pontuacaoUltimaVida >= PONTOS_POR_VIDA) {
                    jogador.vidas++;
                    jogador.pontuacaoUltimaVida += PONTOS_POR_VIDA;
                    jogador.avisoVidaTimer = 1.8;
                    somVidaExtra();
                    criarParticulas(
                        jogador.x + jogador.width/2,
                        jogador.y + jogador.height/2,
                        '#ff66aa', 45
                    );
                }
                
                if (jogador.vidas >= MAX_VIDAS) {
                    const maxBank = jogador.pontuacao - PONTOS_POR_VIDA;
                    if (jogador.pontuacaoUltimaVida < maxBank) {
                        jogador.pontuacaoUltimaVida = maxBank;
                    }
                }

                if (!jogador.novoRecorde &&
                    jogador.recordeInicial > 0 &&
                    jogador.pontuacao > jogador.recordeInicial) {
                    jogador.novoRecorde = true;
                    somNovoRecorde();
                    criarParticulas(
                        jogador.x + jogador.width/2,
                        jogador.y + jogador.height/2,
                        '#ffd700', 60
                    );
                }
            }

            function criarItensIniciais(jogador, obstaculos, offsetX, width, isSolo) {
                if (!jogador) return;

                const faixasDisponiveis = isSolo ? [0, 1, 2] : [0, 2];
                const faixas = [...faixasDisponiveis];
                for (let i = faixas.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [faixas[i], faixas[j]] = [faixas[j], faixas[i]];
                }

                obstaculos.push(criarObstaculo('moeda',
                    xFaixa(faixas[0], offsetX, width, 90), -1200));

                if (isSolo) {
                    obstaculos.push(criarObstaculo('buraco',
                        xFaixa(faixas[1], offsetX, width, 90), -2000));
                    obstaculos.push(criarObstaculo('moto',
                        xFaixa(faixas[2], offsetX, width, 90), -2800));
                }
            }

            function atualizarJogador(jogador, obstaculos, controls, offsetX, width, isP1, isSolo, delta, tempoSegundos) {
                if (!jogador || jogador.gameOver) return;

                if (jogador.avisoVidaTimer > 0) {
                    jogador.avisoVidaTimer -= delta / 60;
                    if (jogador.avisoVidaTimer < 0) jogador.avisoVidaTimer = 0;
                }

                if (jogador.avisoEscudoTimer > 0) {
                    jogador.avisoEscudoTimer -= delta / 60;
                    if (jogador.avisoEscudoTimer < 0) jogador.avisoEscudoTimer = 0;
                }

                if (jogador.boostTimer > 0) {
                    jogador.boostTimer -= delta / 60;
                    if (jogador.boostTimer < 0) jogador.boostTimer = 0;
                }

                if (jogador.avisoBlitzTimer > 0) {
                    jogador.avisoBlitzTimer -= delta / 60;
                    if (jogador.avisoBlitzTimer < 0) jogador.avisoBlitzTimer = 0;
                }

                if (jogador.invencivel) {
                    jogador.tempoInvencivel -= delta / 60;
                    if (jogador.tempoInvencivel <= 0) { jogador.invencivel = false; jogador.tempoInvencivel = 0; }
                    jogador.pisca = true;
                } else {
                    jogador.pisca = false;
                }

                const rampRate = isSolo ? 0.010 : 0.010 * MULTI_RAMP_LENTO;
                const warmupMax = isSolo ? WARMUP_TIME : MULTI_WARMUP_TIME;
                const warmup = Math.min(1, tempoSegundos / warmupMax);
                const velMaxBase = Math.min(1 + tempoSegundos * rampRate, VEL_MAX_FINAL) * (0.22 + 0.78 * warmup);
                jogador.velocidadeMaximaBase = velMaxBase;

                const frear = (isP1 && controls.ArrowDown) || (!isP1 && controls.s);
                const acelerando = !frear && ((isP1 && controls.ArrowUp) || (!isP1 && controls.w));

                if (frear && jogador.velocidade > 1.2) {
                    somPneuCantando();
                }

                let velAlvo = velMaxBase;
                if (acelerando) {
                    velAlvo = velMaxBase * BOOST_MULT;
                }
                if (frear) {
                    velAlvo = 0;
                }

                if (jogador.velocidade < velAlvo) {
                    const accelRate = acelerando ? ACCEL_BOOST_RATE : ACCEL_RATE;
                    jogador.velocidade += accelRate * delta * TIME_SCALE;
                    if (jogador.velocidade > velAlvo) jogador.velocidade = velAlvo;
                } else if (jogador.velocidade > velAlvo) {
                    jogador.velocidade -= DECEL_RATE * delta * TIME_SCALE;
                    if (jogador.velocidade < velAlvo) jogador.velocidade = velAlvo;
                }

                if (jogador.velocidade < 0) jogador.velocidade = 0;
                jogador.velocidadeMaxima = velAlvo;

                const estavaAcelerando = jogador.acelerando;
                jogador.acelerando = acelerando;
                if (acelerando && !estavaAcelerando) {
                    somBoost();
                }

                if (acelerando && Math.random() < 0.5) {
                    criarParticulas(
                        jogador.x + jogador.width/2,
                        jogador.y + jogador.height * 0.95,
                        '#ff8800', 2
                    );
                }

                let direcao = 0;
                if ((isP1 && controls.ArrowLeft) || (!isP1 && controls.a)) direcao = -1;
                else if ((isP1 && controls.ArrowRight) || (!isP1 && controls.d)) direcao = 1;

                const velAtual    = jogador.velocidade;
                const lateralMax  = LATERAL_BASE + (velAtual / VEL_MAX_FINAL) * LATERAL_BONUS;

                if (typeof jogador.vxLateral === 'undefined') jogador.vxLateral = 0;

                if (direcao !== 0) {
                    jogador.vxLateral += direcao * LATERAL_ACCEL * delta * TIME_SCALE;
                    if (jogador.vxLateral >  lateralMax) jogador.vxLateral =  lateralMax;
                    if (jogador.vxLateral < -lateralMax) jogador.vxLateral = -lateralMax;
                } else {
                    jogador.vxLateral *= Math.pow(LATERAL_FRICTION, delta);
                    if (Math.abs(jogador.vxLateral) < 0.04) jogador.vxLateral = 0;
                }

                jogador.x += jogador.vxLateral * delta * TIME_SCALE;

                const margAtual = (pistaSelecionada === 'pista2') ? width * 0.15 : width * 0.18;
                const pistaEsq = offsetX + margAtual + 30;
                const pistaDir = offsetX + width - margAtual - jogador.width - 30;
                if (jogador.x < pistaEsq) { jogador.x = pistaEsq; if (jogador.vxLateral < 0) jogador.vxLateral = 0; }
                if (jogador.x > pistaDir) { jogador.x = pistaDir; if (jogador.vxLateral > 0) jogador.vxLateral = 0; }

                if (typeof jogador.distanciaSpawn === 'undefined') jogador.distanciaSpawn = 0;
                if (typeof jogador.ultimoTipoSpawn === 'undefined') jogador.ultimoTipoSpawn = 'moeda';
                if (typeof jogador.ultimaFaixa === 'undefined') jogador.ultimaFaixa = -1;
                jogador.distanciaSpawn += (jogador.velocidade * delta * TIME_SCALE);

                const espacoBase = isSolo ? ESPACO_ENTRE_OBSTACULOS : ESPACO_ENTRE_OBSTACULOS * MULTI_ESPACO_MULT;
                const espacoMin  = isSolo ? 600 : MULTI_ESPACO_MIN;
                const espacoAtual = Math.max(espacoMin, espacoBase - tempoSegundos * (isSolo ? 4 : 2.5));

                const emGrace = !isSolo && tempoSegundos < MULTI_GRACE_TIME;

                const warmupMax3 = isSolo ? WARMUP_TIME : MULTI_WARMUP_TIME;
                if (tempoSegundos > warmupMax3 && jogador.distanciaSpawn >= espacoAtual) {
                    let tipo;
                    if (emGrace) {
                        tipo = 'moeda';
                    } else if (jogador.ultimoTipoSpawn === 'moeda') {
                        tipo = Math.random() < 0.6 ? 'buraco' : 'moto';
                    } else {
                        tipo = 'moeda';
                    }
                    jogador.ultimoTipoSpawn = tipo;

                    let faixa;
                    if (isSolo) {
                        const opcoes = [0,1,2].filter(f => f !== jogador.ultimaFaixa);
                        faixa = opcoes[Math.floor(Math.random() * opcoes.length)];
                    } else {
                        if (jogador.ultimaFaixa === 0 || jogador.ultimaFaixa === 2) {
                            if (Math.random() < 0.6) {
                                faixa = (jogador.ultimaFaixa === 0) ? 2 : 0;
                            } else {
                                faixa = jogador.ultimaFaixa;
                            }
                        } else {
                            faixa = Math.random() < 0.5 ? 0 : 2;
                        }
                    }
                    jogador.ultimaFaixa = faixa;

                    const itemW = 90;
                    obstaculos.push(criarObstaculo(tipo, xFaixa(faixa, offsetX, width, itemW), -120));

                    if (isSolo && jogador.proximaBlitzDupla && tipo !== 'moeda') {
                        const faixasLivres = [0, 1, 2].filter(f => f !== faixa);
                        const faixa2 = faixasLivres[Math.floor(Math.random() * faixasLivres.length)];
                        const tipo2 = Math.random() < 0.5 ? 'buraco' : 'moto';
                        obstaculos.push(criarObstaculo(tipo2, xFaixa(faixa2, offsetX, width, 90), -260));
                        jogador.ultimaFaixa = faixa2;
                        jogador.proximaBlitzDupla = false;
                        somBlitzDupla();
                    }

                    jogador.distanciaSpawn = 0;
                }

                if (obstaculos.filter(o => o.tipo === 'moeda').length > 3)
                    obstaculos.splice(obstaculos.findIndex(o => o.tipo === 'moeda'), 1);
                if (obstaculos.filter(o => o.tipo === 'buraco').length > 4)
                    obstaculos.splice(obstaculos.findIndex(o => o.tipo === 'buraco'), 1);
                if (obstaculos.filter(o => o.tipo === 'moto').length > 4)
                    obstaculos.splice(obstaculos.findIndex(o => o.tipo === 'moto'), 1);

                const warmupMax2 = isSolo ? WARMUP_TIME : MULTI_WARMUP_TIME;
                const warmupSpeed = Math.min(1, tempoSegundos / warmupMax2);

                const velBase2      = jogador.velocidadeMaximaBase;
                const excessoBoost  = Math.max(0, jogador.velocidade - velBase2);

                const scrollBase  = velBase2 * OBSTACULO_BASE_FATOR + 0.10;
                const scrollBoost = excessoBoost * OBSTACULO_BOOST_FATOR;

                const velocidadeObstaculos = Math.max(
                    (scrollBase + scrollBoost) * warmupSpeed,
                    0.04
                );

                for (let i = obstaculos.length - 1; i >= 0; i--) {
                    const item = obstaculos[i];

                    if (item.tipo === 'entrega' || item.tipo === 'multa') {
                        item.x += item.vxEntrega * delta * TIME_SCALE * 0.5;
                        item.y += velocidadeObstaculos * delta * TIME_SCALE * 1.15;
                        if (item.y > ALTURA_TELA + 200 || item.x < -100 || item.x > width + 100) {
                            obstaculos.splice(i, 1);
                            continue;
                        }
                    } else {
                        item.y += velocidadeObstaculos * delta * TIME_SCALE;
                        if (item.y > ALTURA_TELA + 200) { obstaculos.splice(i, 1); continue; }
                    }

                    if ((item.tipo === 'moto' || item.tipo === 'buraco') && item.zigueAtivo) {
                        const margAtualZ = (pistaSelecionada === 'pista2') ? width * 0.15 : width * 0.18;
                        const zEsq = offsetX + margAtualZ + 25;
                        const zDir = offsetX + width - margAtualZ - item.width - 25;

                        item.zigueOffset += ZIGUE_FREQ * delta * TIME_SCALE * item.zigueVel;
                        const centroX = (zEsq + zDir) / 2;
                        const amplitude = (zDir - zEsq) / 2 * 0.55;

                        item.x = centroX + Math.sin(item.zigueOffset) * amplitude;

                        if (Math.random() < 0.08) {
                            criarParticulas(
                                item.x + item.width / 2,
                                item.y + item.height * 0.6,
                                item.tipo === 'moto' ? '#ff4040' : '#4060ff', 1
                            );
                        }
                    }

                    if (item.tipo === 'moto' && item.podeJogarEntrega && !item.entregaJogada) {
                        const distY = jogador.y - item.y;
                        const itemCentroX = item.x + item.width / 2;
                        const jogadorCentroX = jogador.x + jogador.width / 2;
                        const distX = Math.abs(itemCentroX - jogadorCentroX);

                        if (distY > ENTREGA_DIST_MIN && distY < ENTREGA_DIST_MAX && distX > ENTREGA_FAIXA_MIN) {
                            const lado = jogadorCentroX > itemCentroX ? 1 : -1;
                            obstaculos.push({
                                tipo: 'entrega',
                                x: itemCentroX - 26,
                                y: item.y + item.height * 0.45,
                                width: 52,
                                height: 52,
                                vxEntrega: lado * ENTREGA_VEL_X
                            });
                            item.entregaJogada = true;
                            somEntrega();
                            criarParticulas(itemCentroX + lado * 30, item.y + item.height * 0.55, '#ffdd66', 12);
                        }
                    }

                    if (item.tipo === 'buraco' && item.podeJogarMulta && !item.multaJogada) {
                        const distY = jogador.y - item.y;
                        const itemCentroX = item.x + item.width / 2;
                        const jogadorCentroX = jogador.x + jogador.width / 2;
                        const distX = Math.abs(itemCentroX - jogadorCentroX);

                        if (distY > MULTA_DIST_MIN && distY < MULTA_DIST_MAX && distX > MULTA_FAIXA_MIN) {
                            const lado = jogadorCentroX > itemCentroX ? 1 : -1;
                            obstaculos.push({
                                tipo: 'multa',
                                x: itemCentroX - 22,
                                y: item.y + item.height * 0.30,
                                width: 44,
                                height: 58,
                                vxEntrega: lado * MULTA_VEL_X
                            });
                            item.multaJogada = true;
                            somMulta();
                            criarParticulas(itemCentroX + lado * 30, item.y + item.height * 0.40, '#ffdd66', 14);
                        }
                    }

                    const margem = 10;
                    const colidiu = (jogador.x + margem < item.x + item.width - margem &&
                                     jogador.x + jogador.width - margem > item.x + margem &&
                                     jogador.y + margem < item.y + item.height - margem &&
                                     jogador.y + jogador.height - margem > item.y + margem);
                    if (colidiu) {
                        if (item.tipo === 'moeda') {
                            somMoeda();
                            jogador.pontuacao += 2;
                            obstaculos.splice(i, 1);
                            criarParticulas(item.x + item.width/2, item.y + item.height/2, '#ffd700', 30);

                            if (isSolo) {
                                jogador.moedasColetadasBlitz = (jogador.moedasColetadasBlitz || 0) + 1;
                                if (jogador.moedasColetadasBlitz >= MOEDAS_POR_BLITZ_DUPLA) {
                                    jogador.moedasColetadasBlitz = 0;
                                    jogador.proximaBlitzDupla = true;
                                    jogador.avisoBlitzTimer = 2.0;
                                }
                            }

                            if (!jogador.escudo) {
                                const liberado = !jogador.escudoBloqueadoAte || jogador.pontuacao >= jogador.escudoBloqueadoAte;
                                if (liberado) {
                                    jogador.moedasParaEscudo = (jogador.moedasParaEscudo || 0) + 1;
                                    if (jogador.moedasParaEscudo >= MOEDAS_POR_ESCUDO) {
                                        jogador.escudo = true;
                                        jogador.moedasParaEscudo = 0;
                                        jogador.escudoBloqueadoAte = 0;
                                        jogador.avisoEscudoTimer = 2.0;
                                        somEscudoAtiva();
                                        criarParticulas(
                                            jogador.x + jogador.width/2,
                                            jogador.y + jogador.height/2,
                                            '#00e0ff', 60
                                        );
                                    }
                                }
                            }

                            verificarProgressao(jogador);
                            continue;
                        } else if (item.tipo === 'buraco' || item.tipo === 'moto' || item.tipo === 'entrega' || item.tipo === 'multa') {
                            if (!jogador.invencivel) {
                                if (jogador.escudo) {
                                    jogador.escudo = false;
                                    jogador.moedasParaEscudo = 0;
                                    jogador.escudoBloqueadoAte = (jogador.pontuacao || 0) + PONTOS_RECARGA_ESCUDO;
                                    jogador.invencivel = true;
                                    jogador.tempoInvencivel = 1.5;
                                    somEscudoQuebra();
                                    criarParticulas(
                                        jogador.x + jogador.width/2,
                                        jogador.y + jogador.height/2,
                                        '#00e0ff', 80
                                    );
                                    criarParticulas(
                                        jogador.x + jogador.width/2,
                                        jogador.y + jogador.height/2,
                                        '#ffffff', 40
                                    );
                                    obstaculos.splice(i, 1);
                                    break;
                                }

                                somColisao();
                                jogador.velocidade = 0;
                                jogador.vxLateral = 0;
                                jogador.acelerando = false;
                                jogador.vidas--;
                                const corP = (item.tipo === 'moto') ? '#ff6600'
                                          : (item.tipo === 'entrega') ? '#ff2200'
                                          : (item.tipo === 'multa') ? '#ffdd44'
                                          : '#ff8800';
                                criarParticulas(jogador.x + jogador.width/2, jogador.y + jogador.height/2, corP, 60);
                                if (jogador.vidas > 0) {
                                    somPerdaVida();
                                    jogador.x = (isP1) ? MEIA_TELA/2 - LARGURA_CARRO/2 : MEIA_TELA + (MEIA_TELA/2) - LARGURA_CARRO/2;
                                    jogador.y = ALTURA_TELA - 180 + CARRO_Y_OFFSET;
                                    jogador.invencivel = true;
                                    jogador.tempoInvencivel = 1.5;
                                    obstaculos.length = 0;
                                } else {
                                    jogador.gameOver = true;
                                    somGameOverDetran();
                                    if (pauseGameBtn) pauseGameBtn.style.display = 'none';
                                    if (isSolo) {
                                        setHighScore('solo', jogador.pontuacao);
                                        registrarNoRanking('solo', nickP1Atual, jogador.pontuacao);
                                        if (gameOverSolo) {
                                            gameOverSolo.style.display = 'block';
                                            if (pontuacaoFinalSolo) pontuacaoFinalSolo.textContent = jogador.pontuacao;
                                            if (highSolo) highSolo.textContent = getHighScore('solo');
                                        }
                                    } else if (isP1) {
                                        setHighScore('p1', jogador.pontuacao);
                                        registrarNoRanking('p1', nickP1Atual, jogador.pontuacao);
                                        if (gameOverP1) {
                                            gameOverP1.style.display = 'block';
                                            if (pontuacaoFinalP1) pontuacaoFinalP1.textContent = jogador.pontuacao;
                                            if (highP1) highP1.textContent = getHighScore('p1');
                                        }
                                    } else {
                                        setHighScore('p2', jogador.pontuacao);
                                        registrarNoRanking('p2', nickP2Atual, jogador.pontuacao);
                                        if (gameOverP2) {
                                            gameOverP2.style.display = 'block';
                                            if (pontuacaoFinalP2) pontuacaoFinalP2.textContent = jogador.pontuacao;
                                            if (highP2) highP2.textContent = getHighScore('p2');
                                        }
                                    }
                                }
                                break;
                            }
                        }
                    }
                }
            }

            function desenharObstaculo(item) {
                if (item.tipo === 'buraco') desenharBuraco(item.x, item.y, item.width, item.height);
                else if (item.tipo === 'moeda') desenharNota2Reais(item.x, item.y, item.width, item.height);
                else if (item.tipo === 'moto') desenharMotoIfood(item.x, item.y, item.width, item.height);
                else if (item.tipo === 'entrega') desenharEntrega(item.x, item.y, item.width, item.height);
                else if (item.tipo === 'multa') desenharMulta(item.x, item.y, item.width, item.height);
            }

            function desenharHUDSolo(jogador) {
                const kmh = Math.floor((jogador?.velocidade || 0) * 15);
                const pts = jogador?.pontuacao || 0;
                const vds = jogador?.vidas || 0;
                const novoRecorde = jogador?.novoRecorde || false;
                const avisoVida = jogador?.avisoVidaTimer > 0;

                ctx.save();
                ctx.fillStyle = 'rgba(0,0,0,0.52)';
                ctx.beginPath(); ctx.roundRect(14, 14, 190, 210, 12); ctx.fill();
                ctx.strokeStyle = jogador?.acelerando
                    ? (Math.floor(Date.now() / 150) % 2 === 0 ? '#ffaa00' : '#ffd870')
                    : (novoRecorde
                        ? (Math.floor(Date.now() / 300) % 2 === 0 ? '#ffd700' : '#fff6b0')
                        : 'rgba(255,255,255,0.12)');
                ctx.lineWidth = jogador?.acelerando ? 3 : (novoRecorde ? 3 : 1.5);
                ctx.beginPath(); ctx.roundRect(14, 14, 190, 210, 12); ctx.stroke();
                ctx.restore();

                ctx.save();
                ctx.textAlign = 'left';
                ctx.shadowColor = 'rgba(0,0,0,0.9)'; ctx.shadowBlur = 6;

                ctx.font = "bold 22px 'Orbitron'";
                ctx.fillStyle = jogador?.acelerando ? '#ffcc33' : '#ff4040';
                ctx.fillText(`⚡ ${kmh}`, 28, 52);
                ctx.font = "bold 13px 'Orbitron'";
                ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.fillText('KM/H', 28, 70);
                ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.fillRect(20, 78, 176, 1);

                if (img2Reais) ctx.drawImage(img2Reais, 28, 88, 38, 26);
                ctx.font = "bold 22px 'Orbitron'";
                if (novoRecorde) {
                    const blink = Math.floor(Date.now() / 300) % 2 === 0;
                    ctx.fillStyle = blink ? '#ffd700' : '#fff6b0';
                    ctx.shadowColor = '#ffd700';
                    ctx.shadowBlur = 12;
                } else {
                    ctx.fillStyle = '#ffd700';
                }
                ctx.fillText(`${pts}`, 74, 108);
                ctx.shadowColor = 'rgba(0,0,0,0.9)'; ctx.shadowBlur = 6;
                ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.fillRect(20, 117, 176, 1);

                ctx.font = "bold 18px 'Orbitron'";
                ctx.fillStyle = '#ff4444';
                const coracoes = '❤️'.repeat(Math.max(0, vds)) + '🖤'.repeat(Math.max(0, MAX_VIDAS - vds));
                ctx.fillText(coracoes, 26, 148);

                const progVida = Math.max(0, Math.min(
                    jogador.pontuacao - (jogador.pontuacaoUltimaVida || 0),
                    PONTOS_POR_VIDA
                ));
                const ratio = progVida / PONTOS_POR_VIDA;
                ctx.fillStyle = 'rgba(255,255,255,0.12)';
                ctx.beginPath(); ctx.roundRect(26, 156, 140, 5, 2.5); ctx.fill();
                ctx.fillStyle = (vds >= MAX_VIDAS) ? '#555' : (ratio >= 1 ? '#ff66aa' : '#ff88bb');
                ctx.beginPath(); ctx.roundRect(26, 156, 140 * (vds >= MAX_VIDAS ? 1 : ratio), 5, 2.5); ctx.fill();
                ctx.font = "bold 9px 'Orbitron'";
                ctx.fillStyle = 'rgba(255,180,220,0.75)';
                ctx.textAlign = 'right';
                ctx.fillText(vds >= MAX_VIDAS ? 'MAX' : `${progVida}/${PONTOS_POR_VIDA}`, 166, 162);
                ctx.textAlign = 'left';

                ctx.font = "bold 14px 'Orbitron'";
                if (jogador?.escudo) {
                    const blink = Math.floor(Date.now() / 300) % 2 === 0;
                    ctx.fillStyle = blink ? '#00e0ff' : '#a0f4ff';
                    ctx.shadowColor = '#00e0ff';
                    ctx.shadowBlur = 12;
                    ctx.fillText('🛡️ ESCUDO', 26, 182);
                } else {
                    const bloqueado = jogador?.escudoBloqueadoAte > 0 && jogador.pontuacao < jogador.escudoBloqueadoAte;
                    const prog = jogador?.moedasParaEscudo || 0;
                    if (bloqueado) {
                        const faltam = jogador.escudoBloqueadoAte - jogador.pontuacao;
                        ctx.fillStyle = 'rgba(255,120,120,0.85)';
                        ctx.shadowColor = '#ff4444';
                        ctx.shadowBlur = 6;
                        ctx.fillText(`🔒 RECARGA: ${faltam} pts`, 26, 182);
                    } else {
                        ctx.fillStyle = 'rgba(0,224,255,0.65)';
                        ctx.shadowColor = '#00e0ff';
                        ctx.shadowBlur = 4;
                        ctx.fillText(`🛡️ ${prog}/${MOEDAS_POR_ESCUDO}`, 26, 182);
                    }
                }
                ctx.shadowColor = 'rgba(0,0,0,0.9)';
                ctx.shadowBlur = 6;

                if (jogador?.acelerando) {
                    const blink = Math.floor(Date.now() / 150) % 2 === 0;
                    ctx.font = "bold 15px 'Orbitron'";
                    ctx.textAlign = 'center';
                    ctx.fillStyle = blink ? '#ffcc33' : '#fff0a0';
                    ctx.shadowColor = '#ffaa00';
                    ctx.shadowBlur = 20;
                    ctx.fillText('🔥 NITRO! 🔥', 109, 208);
                } else if (jogador?.avisoBlitzTimer > 0) {
                    const blink = Math.floor(Date.now() / 150) % 2 === 0;
                    ctx.font = "bold 15px 'Orbitron'";
                    ctx.textAlign = 'center';
                    ctx.fillStyle = blink ? '#ff5533' : '#ffaa77';
                    ctx.shadowColor = '#ff3300';
                    ctx.shadowBlur = 20;
                    ctx.fillText('⚡ BLITZ DUPLA!', 109, 208);
                } else if (novoRecorde) {
                    const blink = Math.floor(Date.now() / 250) % 2 === 0;
                    ctx.font = "bold 15px 'Orbitron'";
                    ctx.textAlign = 'center';
                    ctx.fillStyle = blink ? '#ffd700' : '#fff6b0';
                    ctx.shadowColor = '#ffd700';
                    ctx.shadowBlur = 16;
                    ctx.fillText('🏆 NOVO RECORDE!', 109, 208);
                } else if (avisoVida) {
                    const blink = Math.floor(Date.now() / 250) % 2 === 0;
                    ctx.font = "bold 15px 'Orbitron'";
                    ctx.textAlign = 'center';
                    ctx.fillStyle = blink ? '#ff66aa' : '#ffb0d0';
                    ctx.shadowColor = '#ff66aa';
                    ctx.shadowBlur = 16;
                    ctx.fillText('💖 +1 VIDA!', 109, 208);
                } else if (jogador?.avisoEscudoTimer > 0) {
                    const blink = Math.floor(Date.now() / 250) % 2 === 0;
                    ctx.font = "bold 15px 'Orbitron'";
                    ctx.textAlign = 'center';
                    ctx.fillStyle = blink ? '#00e0ff' : '#a0f4ff';
                    ctx.shadowColor = '#00e0ff';
                    ctx.shadowBlur = 16;
                    ctx.fillText('🛡️ ESCUDO ATIVO!', 109, 208);
                }
                ctx.shadowBlur = 0;
                ctx.restore();
            }

            function desenharHUDDuo(oxHud, jogador, corVel) {
                const kmh = Math.floor((jogador?.velocidade || 0) * 15);
                const pts = jogador?.pontuacao || 0;
                const vds = jogador?.vidas || 0;
                const novoRecorde = jogador?.novoRecorde || false;
                const avisoVida = jogador?.avisoVidaTimer > 0;

                ctx.save();
                ctx.fillStyle = 'rgba(0,0,0,0.52)';
                ctx.beginPath(); ctx.roundRect(oxHud + 10, 10, 168, 190, 10); ctx.fill();
                ctx.strokeStyle = jogador?.acelerando
                    ? (Math.floor(Date.now() / 150) % 2 === 0 ? '#ffaa00' : '#ffd870')
                    : (novoRecorde
                        ? (Math.floor(Date.now() / 300) % 2 === 0 ? '#ffd700' : '#fff6b0')
                        : 'rgba(255,255,255,0.12)');
                ctx.lineWidth = jogador?.acelerando ? 3 : (novoRecorde ? 3 : 1.5);
                ctx.beginPath(); ctx.roundRect(oxHud + 10, 10, 168, 190, 10); ctx.stroke();
                ctx.restore();

                ctx.save();
                ctx.textAlign = 'left';
                ctx.shadowColor = 'rgba(0,0,0,0.9)'; ctx.shadowBlur = 5;
                ctx.font = "bold 18px 'Orbitron'";
                ctx.fillStyle = jogador?.acelerando ? '#ffcc33' : corVel;
                ctx.fillText(`⚡ ${kmh} KM/H`, oxHud + 20, 42);
                ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.fillRect(oxHud + 16, 50, 156, 1);

                if (img2Reais) ctx.drawImage(img2Reais, oxHud + 20, 57, 32, 22);
                ctx.font = "bold 18px 'Orbitron'";
                if (novoRecorde) {
                    const blink = Math.floor(Date.now() / 300) % 2 === 0;
                    ctx.fillStyle = blink ? '#ffd700' : '#fff6b0';
                    ctx.shadowColor = '#ffd700';
                    ctx.shadowBlur = 10;
                } else {
                    ctx.fillStyle = '#ffd700';
                }
                ctx.fillText(`${pts}`, oxHud + 58, 74);
                ctx.shadowColor = 'rgba(0,0,0,0.9)'; ctx.shadowBlur = 5;
                ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.fillRect(oxHud + 16, 82, 156, 1);

                ctx.font = "bold 14px 'Orbitron'";
                ctx.fillStyle = '#ff4444';
                const coracoes = '❤️'.repeat(Math.max(0, vds)) + '🖤'.repeat(Math.max(0, MAX_VIDAS - vds));
                ctx.fillText(coracoes, oxHud + 18, 108);

                const progVida = Math.max(0, Math.min(
                    jogador.pontuacao - (jogador.pontuacaoUltimaVida || 0),
                    PONTOS_POR_VIDA
                ));
                const ratio = progVida / PONTOS_POR_VIDA;
                ctx.fillStyle = 'rgba(255,255,255,0.12)';
                ctx.beginPath(); ctx.roundRect(oxHud + 18, 114, 100, 4, 2); ctx.fill();
                ctx.fillStyle = (vds >= MAX_VIDAS) ? '#555' : '#ff88bb';
                ctx.beginPath(); ctx.roundRect(oxHud + 18, 114, 100 * (vds >= MAX_VIDAS ? 1 : ratio), 4, 2); ctx.fill();

                ctx.font = "bold 12px 'Orbitron'";
                ctx.textAlign = 'left';
                if (jogador?.escudo) {
                    const blink = Math.floor(Date.now() / 300) % 2 === 0;
                    ctx.fillStyle = blink ? '#00e0ff' : '#a0f4ff';
                    ctx.shadowColor = '#00e0ff';
                    ctx.shadowBlur = 10;
                    ctx.fillText('🛡️ ESCUDO', oxHud + 18, 140);
                } else {
                    const bloqueado = jogador?.escudoBloqueadoAte > 0 && jogador.pontuacao < jogador.escudoBloqueadoAte;
                    const prog = jogador?.moedasParaEscudo || 0;
                    if (bloqueado) {
                        const faltam = jogador.escudoBloqueadoAte - jogador.pontuacao;
                        ctx.fillStyle = 'rgba(255,120,120,0.85)';
                        ctx.shadowColor = '#ff4444';
                        ctx.shadowBlur = 6;
                        ctx.fillText(`🔒 ${faltam} pts`, oxHud + 18, 140);
                    } else {
                        ctx.fillStyle = 'rgba(0,224,255,0.65)';
                        ctx.shadowColor = '#00e0ff';
                        ctx.shadowBlur = 4;
                        ctx.fillText(`🛡️ ${prog}/${MOEDAS_POR_ESCUDO}`, oxHud + 18, 140);
                    }
                }
                ctx.shadowColor = 'rgba(0,0,0,0.9)';
                ctx.shadowBlur = 5;

                if (jogador?.acelerando) {
                    const blink = Math.floor(Date.now() / 150) % 2 === 0;
                    ctx.font = "bold 12px 'Orbitron'";
                    ctx.textAlign = 'center';
                    ctx.fillStyle = blink ? '#ffcc33' : '#fff0a0';
                    ctx.shadowColor = '#ffaa00';
                    ctx.shadowBlur = 18;
                    ctx.fillText('🔥 NITRO!', oxHud + 94, 170);
                } else if (novoRecorde) {
                    const blink = Math.floor(Date.now() / 250) % 2 === 0;
                    ctx.font = "bold 13px 'Orbitron'";
                    ctx.textAlign = 'center';
                    ctx.fillStyle = blink ? '#ffd700' : '#fff6b0';
                    ctx.shadowColor = '#ffd700';
                    ctx.shadowBlur = 14;
                    ctx.fillText('🏆 NOVO RECORDE!', oxHud + 94, 170);
                } else if (avisoVida) {
                    const blink = Math.floor(Date.now() / 250) % 2 === 0;
                    ctx.font = "bold 13px 'Orbitron'";
                    ctx.textAlign = 'center';
                    ctx.fillStyle = blink ? '#ff66aa' : '#ffb0d0';
                    ctx.shadowColor = '#ff66aa';
                    ctx.shadowBlur = 14;
                    ctx.fillText('💖 +1 VIDA!', oxHud + 94, 170);
                } else if (jogador?.avisoEscudoTimer > 0) {
                    const blink = Math.floor(Date.now() / 250) % 2 === 0;
                    ctx.font = "bold 13px 'Orbitron'";
                    ctx.textAlign = 'center';
                    ctx.fillStyle = blink ? '#00e0ff' : '#a0f4ff';
                    ctx.shadowColor = '#00e0ff';
                    ctx.shadowBlur = 14;
                    ctx.fillText('🛡️ ESCUDO ATIVO!', oxHud + 94, 170);
                }
                ctx.shadowBlur = 0;
                ctx.restore();
            }

            function gameLoop(timestamp) {
                if (paused) { animFrameId = requestAnimationFrame(gameLoop); return; }
                if (!lastTime) lastTime = timestamp;
                const delta = Math.min((timestamp - lastTime) / 16.67, 3);
                lastTime = timestamp;
                tempoDecorrido += delta / 60;

                ctx.clearRect(0, 0, canvas.width, ALTURA_TELA);

                if (modoJogo === 'solo' && jogador1?.gameOver) {
                    animFrameId = null;
                    return;
                }

                if (modoJogo === 'multi' && jogador1?.gameOver && jogador2?.gameOver) {
                    if (gameOverDuo && gameOverDuo.style.display !== 'block') {
                        if (gameOverP1) gameOverP1.style.display = 'none';
                        if (gameOverP2) gameOverP2.style.display = 'none';
                        gameOverDuo.style.display = 'block';
                        if (duoScoreP1) duoScoreP1.textContent = `${nickP1Atual}: ${jogador1.pontuacao}`;
                        if (duoScoreP2) duoScoreP2.textContent = `${nickP2Atual}: ${jogador2.pontuacao}`;
                        if (winnerText) {
                            if (jogador1.pontuacao > jogador2.pontuacao) {
                                winnerText.textContent = t('vencedorP1');
                                if (duoScoreP1) duoScoreP1.className = 'player-score-box winner-score';
                                if (duoScoreP2) duoScoreP2.className = 'player-score-box loser-score';
                            } else if (jogador2.pontuacao > jogador1.pontuacao) {
                                winnerText.textContent = t('vencedorP2');
                                if (duoScoreP1) duoScoreP1.className = 'player-score-box loser-score';
                                if (duoScoreP2) duoScoreP2.className = 'player-score-box winner-score';
                            } else {
                                winnerText.textContent = t('empate');
                                if (duoScoreP1) duoScoreP1.className = 'player-score-box winner-score';
                                if (duoScoreP2) duoScoreP2.className = 'player-score-box winner-score';
                            }
                        }
                        setHighScore('p1', jogador1.pontuacao);
                        setHighScore('p2', jogador2.pontuacao);
                        registrarNoRanking('p1', nickP1Atual, jogador1.pontuacao);
                        registrarNoRanking('p2', nickP2Atual, jogador2.pontuacao);
                        if (highDuoP1) highDuoP1.textContent = getHighScore('p1');
                        if (highDuoP2) highDuoP2.textContent = getHighScore('p2');
                    }
                    animFrameId = null;
                    return;
                }

                if (modoJogo === 'solo') {
                    if (jogador1 && !jogador1.gameOver) deslocamentoPista1 += jogador1.velocidade * 1.5 * delta * TIME_SCALE;
                    desenharPistaCustomizada(0, canvas.width, deslocamentoPista1);
                    if (gameRunningP1 && jogador1 && !jogador1.gameOver) {
                        const c1 = { ArrowUp: teclas.ArrowUp, ArrowDown: teclas.ArrowDown, ArrowLeft: teclas.ArrowLeft, ArrowRight: teclas.ArrowRight, w: false, s: false, a: false, d: false };
                        atualizarJogador(jogador1, obstaculos1, c1, 0, canvas.width, true, true, delta, tempoDecorrido);
                        for (const item of obstaculos1) desenharObstaculo(item);
                        desenharCarro(jogador1.x, jogador1.y, jogador1.width, jogador1.height, jogador1.carKey, '#ff0000', jogador1.pisca, jogador1.escudo, jogador1.acelerando);
                    }
                    desenharHUDSolo(jogador1);
                } else {
                    let velMedia = 0;
                    if (jogador1 && !jogador1.gameOver) velMedia += jogador1.velocidade;
                    if (jogador2 && !jogador2.gameOver) velMedia += jogador2.velocidade;
                    if (jogador1 && !jogador1.gameOver && jogador2 && !jogador2.gameOver) velMedia /= 2;
                    deslocamentoPistaGlobal += velMedia * 1.5 * delta * TIME_SCALE;
                    desenharPistaCustomizada(0, MEIA_TELA, deslocamentoPistaGlobal);
                    desenharPistaCustomizada(MEIA_TELA, MEIA_TELA, deslocamentoPistaGlobal);
                    ctx.fillStyle = 'rgba(0,0,0,0.6)';
                    ctx.fillRect(MEIA_TELA - 6, 0, 12, ALTURA_TELA);

                    if (gameRunningP1 && jogador1 && !jogador1.gameOver) {
                        const c1 = { ArrowUp: teclas.ArrowUp, ArrowDown: teclas.ArrowDown, ArrowLeft: teclas.ArrowLeft, ArrowRight: teclas.ArrowRight, w: false, s: false, a: false, d: false };
                        atualizarJogador(jogador1, obstaculos1, c1, 0, MEIA_TELA, true, false, delta, tempoDecorrido);
                        for (const item of obstaculos1) desenharObstaculo(item);
                        desenharCarro(jogador1.x, jogador1.y, jogador1.width, jogador1.height, jogador1.carKey, '#ff0000', jogador1.pisca, jogador1.escudo, jogador1.acelerando);
                    }
                    if (gameRunningP2 && jogador2 && !jogador2.gameOver) {
                        const c2 = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false, w: teclas.w, s: teclas.s, a: teclas.a, d: teclas.d };
                        atualizarJogador(jogador2, obstaculos2, c2, MEIA_TELA, MEIA_TELA, false, false, delta, tempoDecorrido);
                        for (const item of obstaculos2) desenharObstaculo(item);
                        desenharCarro(jogador2.x, jogador2.y, jogador2.width, jogador2.height, jogador2.carKey, '#00d4ff', jogador2.pisca, jogador2.escudo, jogador2.acelerando);
                    }

                    desenharHUDDuo(0, jogador1, '#ff4040');
                    desenharHUDDuo(MEIA_TELA, jogador2, '#00d4ff');
                }

                atualizarParticulas();
                desenharParticulas();
                animFrameId = requestAnimationFrame(gameLoop);
            }

            function iniciarJogo() {
                if (animFrameId) cancelAnimationFrame(animFrameId);
                animFrameId = null;
                lastTime = 0;
                particulas = [];
                paused = false;
                // 🔑 Zera todas as teclas pra evitar que fiquem "presas" ativadas
                Object.keys(teclas).forEach(k => teclas[k] = false);
                if (pauseMenu) pauseMenu.style.display = 'none';
                if (gameOverSolo) gameOverSolo.style.display = 'none';
                if (gameOverDuo) gameOverDuo.style.display = 'none';
                if (gameOverP1) gameOverP1.style.display = 'none';
                if (gameOverP2) gameOverP2.style.display = 'none';
                if (menuSelection) menuSelection.style.display = 'none';
                if (helpModal) helpModal.classList.remove('show');
                if (rankModal) rankModal.classList.remove('show');
                if (fullscreenGameBtn) fullscreenGameBtn.style.display = 'block';
                if (pauseGameBtn) pauseGameBtn.style.display = 'block';
                tempoDecorrido = 0;

                atualizarControlesTouch();

                if (!audioAtivado) ativarAudio();
                else iniciarMusica();

                const p1Key = document.querySelector('#p1-cars .car-btn.selected')?.dataset.p1 || 'celta';
                const p2Key = document.querySelector('#p2-cars .car-btn.selected')?.dataset.p2 || 'celta';

                // Captura os nicks digitados
                nickP1Atual = (nickP1Input?.value || '').trim().toUpperCase().substring(0, 10) || 'JOGADOR 1';
                nickP2Atual = (nickP2Input?.value || '').trim().toUpperCase().substring(0, 10) || 'JOGADOR 2';

                const posX1 = (modoJogo === 'solo') ? canvas.width/2 - LARGURA_CARRO/2 : MEIA_TELA/2 - LARGURA_CARRO/2;

                const recordeSolo = getHighScore('solo');
                const recordeP1   = getHighScore('p1');
                const recordeP2   = getHighScore('p2');

                jogador1 = {
                    x: posX1, y: ALTURA_TELA - 180 + CARRO_Y_OFFSET,
                    width: LARGURA_CARRO, height: ALTURA_CARRO,
                    velocidade: 0, velocidadeMaxima: 1, velocidadeMaximaBase: 1,
                    vxLateral: 0,
                    pontuacao: 0, carKey: p1Key,
                    vidas: 3, gameOver: false,
                    invencivel: false, tempoInvencivel: 0,
                    pisca: false, distanciaSpawn: 0, ultimoTipoSpawn: 'moeda', ultimaFaixa: -1,
                    pontuacaoUltimaVida: 0,
                    recordeInicial: (modoJogo === 'solo') ? recordeSolo : recordeP1,
                    novoRecorde: false,
                    avisoVidaTimer: 0,
                    moedasParaEscudo: 0,
                    escudo: false,
                    escudoBloqueadoAte: 0,
                    avisoEscudoTimer: 0,
                    acelerando: false,
                    boostTimer: 0,
                    moedasColetadasBlitz: 0,
                    proximaBlitzDupla: false,
                    avisoBlitzTimer: 0
                };
                obstaculos1 = [];
                deslocamentoPista1 = 0;
                gameRunningP1 = true;
                const isSolo = (modoJogo === 'solo');
                if (isSolo) {
                    criarItensIniciais(jogador1, obstaculos1, 0, canvas.width, true);
                } else {
                    criarItensIniciais(jogador1, obstaculos1, 0, MEIA_TELA, false);
                }

                if (modoJogo === 'multi') {
                    const posX2 = MEIA_TELA + (MEIA_TELA/2) - LARGURA_CARRO/2;
                    jogador2 = {
                        x: posX2, y: ALTURA_TELA - 180 + CARRO_Y_OFFSET,
                        width: LARGURA_CARRO, height: ALTURA_CARRO,
                        velocidade: 0, velocidadeMaxima: 1, velocidadeMaximaBase: 1,
                        vxLateral: 0,
                        pontuacao: 0, carKey: p2Key,
                        vidas: 3, gameOver: false,
                        invencivel: false, tempoInvencivel: 0,
                        pisca: false, distanciaSpawn: 0, ultimoTipoSpawn: 'moeda', ultimaFaixa: -1,
                        pontuacaoUltimaVida: 0,
                        recordeInicial: recordeP2,
                        novoRecorde: false,
                        avisoVidaTimer: 0,
                        moedasParaEscudo: 0,
                        escudo: false,
                        escudoBloqueadoAte: 0,
                        avisoEscudoTimer: 0,
                        acelerando: false,
                        boostTimer: 0,
                        moedasColetadasBlitz: 0,
                        proximaBlitzDupla: false,
                        avisoBlitzTimer: 0
                    };
                    obstaculos2 = [];
                    deslocamentoPista2 = 0;
                    gameRunningP2 = true;
                    deslocamentoPistaGlobal = 0;
                    criarItensIniciais(jogador2, obstaculos2, MEIA_TELA, MEIA_TELA, false);
                }

                lastTime = performance.now();
                gameLoop(lastTime);
            }

            function togglePause() {
                if (!jogador1 || jogador1.gameOver || (modoJogo === 'multi' && jogador2?.gameOver)) return;
                paused = !paused;
                if (pauseMenu) pauseMenu.style.display = paused ? 'flex' : 'none';
                if (!paused) {
                    lastTime = performance.now();
                    if (animFrameId) cancelAnimationFrame(animFrameId);
                    gameLoop(performance.now());
                }
            }

            function voltarAoMenu() {
                paused = false;
                if (pauseMenu) pauseMenu.style.display = 'none';
                if (rankModal) rankModal.classList.remove('show');
                if (animFrameId) cancelAnimationFrame(animFrameId);
                animFrameId = null;
                if (gameOverSolo) gameOverSolo.style.display = 'none';
                if (gameOverDuo) gameOverDuo.style.display = 'none';
                if (gameOverP1) gameOverP1.style.display = 'none';
                if (gameOverP2) gameOverP2.style.display = 'none';
                if (menuSelection) menuSelection.style.display = 'flex';
                const menuButtons = document.querySelector('.menu-buttons');
                if (menuButtons) menuButtons.style.display = 'flex';
                const carMenu = document.getElementById('carMenu');
                if (carMenu) carMenu.style.display = 'none';
                if (fullscreenGameBtn) fullscreenGameBtn.style.display = 'none';
                if (pauseGameBtn) pauseGameBtn.style.display = 'none';
                jogador1 = null;
                jogador2 = null;
                obstaculos1 = [];
                obstaculos2 = [];
                gameRunningP1 = false;
                gameRunningP2 = false;
                modoJogo = '';
                atualizarControlesTouch();
                if (winnerText) winnerText.textContent = '';
                if (duoScoreP1) duoScoreP1.className = 'player-score-box';
                if (duoScoreP2) duoScoreP2.className = 'player-score-box';
                if (nickP1Input) nickP1Input.value = '';
                if (nickP2Input) nickP2Input.value = '';
            }

            // 🔑 KEYDOWN — corrigido: não captura teclas quando estiver digitando em input
            document.addEventListener('keydown', (e) => {
                const isInput = e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA');

                if (e.key === 'Escape') {
                    if (isInput) { e.target.blur(); return; }
                    if (helpModal && helpModal.classList.contains('show')) {
                        helpModal.classList.remove('show');
                        e.preventDefault();
                        return;
                    }
                    if (rankModal && rankModal.classList.contains('show')) {
                        rankModal.classList.remove('show');
                        e.preventDefault();
                        return;
                    }
                    e.preventDefault();
                    togglePause();
                    return;
                }

                // 🚫 Não capturar teclas se estiver digitando em um input (nickname)
                if (isInput) return;

                // 📢 Buzina nas teclas B ou H
                if (e.key === 'b' || e.key === 'B' || e.key === 'h' || e.key === 'H') {
                    e.preventDefault();
                    somBuzina();
                    return;
                }

                if (teclas.hasOwnProperty(e.key)) { e.preventDefault(); teclas[e.key] = true; }
            }, { passive: false });

            // 🔑 KEYUP — também ignora inputs
            document.addEventListener('keyup', (e) => {
                const isInput = e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA');
                if (isInput) return;
                if (teclas.hasOwnProperty(e.key)) { e.preventDefault(); teclas[e.key] = false; }
            }, { passive: false });

            document.querySelectorAll('.touch-btn').forEach(btn => {
                const key = btn.dataset.key;
                if (!key) return;
                const start = (e) => { e.preventDefault(); e.stopPropagation(); teclas[key] = true; };
                const end = (e) => { e.preventDefault(); e.stopPropagation(); teclas[key] = false; };
                btn.addEventListener('touchstart', start, { passive: false });
                btn.addEventListener('touchend', end, { passive: false });
                btn.addEventListener('touchcancel', end, { passive: false });
                btn.addEventListener('mousedown', start);
                btn.addEventListener('mouseup', end);
                btn.addEventListener('mouseleave', end);
            });

            // 📢 Eventos para botões de buzina no touch
            document.querySelectorAll('.touch-btn.buzina').forEach(btn => {
                const buzinar = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    somBuzina();
                };
                btn.addEventListener('touchstart', buzinar, { passive: false });
                btn.addEventListener('mousedown', buzinar);
            });

            window.selecionarModo = function(modo) {
                if (!audioAtivado) ativarAudio();
                else iniciarMusica();
                modoJogo = modo;
                const menuButtons = document.querySelector('.menu-buttons');
                if (menuButtons) menuButtons.style.display = 'none';
                const carMenu = document.getElementById('carMenu');
                if (carMenu) carMenu.style.display = 'flex';
                if (modo === 'multi') {
                    if (p2Col) p2Col.style.display = 'flex';
                    if (previewP2Container) previewP2Container.style.display = 'block';
                    if (nickP2Container) nickP2Container.style.display = 'flex';
                } else {
                    if (p2Col) p2Col.style.display = 'none';
                    if (previewP2Container) previewP2Container.style.display = 'none';
                    if (nickP2Container) nickP2Container.style.display = 'none';
                }
                atualizarPreviews();
            };

            window.selecionarPista = function(pista, elemento) {
                pistaSelecionada = pista;
                document.querySelectorAll('.track-btn').forEach(btn => btn.classList.remove('selected'));
                elemento.classList.add('selected');
            };

            function atualizarPreviews() {
                const p1Key = document.querySelector('#p1-cars .car-btn.selected')?.dataset.p1 || 'celta';
                desenharPreview(previewP1Ctx, p1Key, '#ff0000');
                if (modoJogo === 'multi') {
                    const p2Key = document.querySelector('#p2-cars .car-btn.selected')?.dataset.p2 || 'celta';
                    desenharPreview(previewP2Ctx, p2Key, '#00d4ff');
                }
            }

            function desenharPreview(ctx, carKey, cor) {
                ctx.clearRect(0, 0, 130, 130);
                const img = carImages[carKey];
                if (img) {
                    ctx.drawImage(img, 0, 0, 130, 130);
                } else {
                    ctx.fillStyle = '#333';
                    ctx.fillRect(20, 40, 120, 80);
                    ctx.fillStyle = cor;
                    ctx.fillRect(30, 50, 100, 60);
                    ctx.fillStyle = '#fff';
                    ctx.fillRect(40, 60, 20, 20);
                    ctx.fillRect(100, 60, 20, 20);
                    ctx.fillStyle = '#222';
                    ctx.fillRect(20, 90, 30, 20);
                    ctx.fillRect(110, 90, 30, 20);
                }
            }

            carBtnsP1.forEach(btn => btn.addEventListener('click', function() {
                carBtnsP1.forEach(b => b.classList.remove('selected'));
                this.classList.add('selected');
                atualizarPreviews();
            }));
            carBtnsP2.forEach(btn => btn.addEventListener('click', function() {
                carBtnsP2.forEach(b => b.classList.remove('selected'));
                this.classList.add('selected');
                atualizarPreviews();
            }));

            // 🔑 START RACE — remove o foco dos inputs antes de iniciar o jogo
            if (startRaceBtn) {
                startRaceBtn.addEventListener('click', () => {
                    if (nickP1Input) nickP1Input.blur();
                    if (nickP2Input) nickP2Input.blur();
                    if (!audioAtivado) ativarAudio();
                    else { iniciarMusica(); initAudio(); }
                    iniciarJogo();
                });
            }

            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

            if (fullscreenMenuBtn) {
                if (isIOS) {
                    fullscreenMenuBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        alert('No iPhone/iPad:\n\n1. Toque em Compartilhar (□↑)\n2. "Adicionar à Tela de Início"\n3. Abra pelo ícone\n\nAí fica em tela cheia!');
                    });
                } else {
                    fullscreenMenuBtn.addEventListener('click', () => {
                        if (!document.fullscreenElement) gameContainer.requestFullscreen().catch(() => {});
                        else document.exitFullscreen();
                    });
                }
            }
            if (fullscreenGameBtn) {
                if (isIOS) {
                    fullscreenGameBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        alert('No iPhone/iPad, use "Adicionar à Tela de Início" para tela cheia.');
                    });
                } else {
                    fullscreenGameBtn.addEventListener('click', () => {
                        if (!document.fullscreenElement) gameContainer.requestFullscreen().catch(() => {});
                        else document.exitFullscreen();
                    });
                }
            }

            if (pauseGameBtn) {
                pauseGameBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    togglePause();
                });
            }

            if (pauseContinuar) pauseContinuar.addEventListener('click', togglePause);
            if (pauseReiniciar) pauseReiniciar.addEventListener('click', () => {
                paused = false;
                if (pauseMenu) pauseMenu.style.display = 'none';
                if (animFrameId) cancelAnimationFrame(animFrameId);
                iniciarJogo();
            });
            if (pauseMenuPrincipal) pauseMenuPrincipal.addEventListener('click', voltarAoMenu);

            if (restartSolo) restartSolo.addEventListener('click', () => { if (animFrameId) cancelAnimationFrame(animFrameId); iniciarJogo(); });
            if (restartDuo) restartDuo.addEventListener('click', () => { if (animFrameId) cancelAnimationFrame(animFrameId); iniciarJogo(); });
            if (restartP1) restartP1.addEventListener('click', () => {
                if (jogador2 && jogador2.gameOver) { iniciarJogo(); return; }
                if (jogador1) {
                    jogador1.x = MEIA_TELA/2 - LARGURA_CARRO/2;
                    jogador1.y = ALTURA_TELA - 180 + CARRO_Y_OFFSET;
                    jogador1.velocidade = 0;
                    jogador1.velocidadeMaxima = 1;
                    jogador1.vxLateral = 0;
                    jogador1.pontuacao = 0;
                    jogador1.vidas = 3;
                    jogador1.gameOver = false;
                    jogador1.invencivel = false;
                    jogador1.tempoInvencivel = 0;
                    jogador1.distanciaSpawn = 0;
                    jogador1.ultimoTipoSpawn = 'moeda';
                    jogador1.ultimaFaixa = -1;
                    jogador1.pontuacaoUltimaVida = 0;
                    jogador1.recordeInicial = getHighScore('p1');
                    jogador1.novoRecorde = false;
                    jogador1.avisoVidaTimer = 0;
                    jogador1.moedasParaEscudo = 0;
                    jogador1.escudo = false;
                    jogador1.escudoBloqueadoAte = 0;
                    jogador1.avisoEscudoTimer = 0;
                    jogador1.acelerando = false;
                    jogador1.moedasColetadasBlitz = 0;
                    jogador1.proximaBlitzDupla = false;
                    jogador1.avisoBlitzTimer = 0;
                    obstaculos1 = [];
                    if (gameOverP1) gameOverP1.style.display = 'none';
                    if (pauseGameBtn) pauseGameBtn.style.display = 'block';
                    gameRunningP1 = true;
                    if (animFrameId === null) { lastTime = performance.now(); gameLoop(lastTime); }
                }
            });
            if (restartP2) restartP2.addEventListener('click', () => {
                if (jogador1 && jogador1.gameOver) { iniciarJogo(); return; }
                if (jogador2) {
                    jogador2.x = MEIA_TELA + (MEIA_TELA/2) - LARGURA_CARRO/2;
                    jogador2.y = ALTURA_TELA - 180 + CARRO_Y_OFFSET;
                    jogador2.velocidade = 0;
                    jogador2.velocidadeMaxima = 1;
                    jogador2.vxLateral = 0;
                    jogador2.pontuacao = 0;
                    jogador2.vidas = 3;
                    jogador2.gameOver = false;
                    jogador2.invencivel = false;
                    jogador2.tempoInvencivel = 0;
                    jogador2.distanciaSpawn = 0;
                    jogador2.ultimoTipoSpawn = 'moeda';
                    jogador2.ultimaFaixa = -1;
                    jogador2.pontuacaoUltimaVida = 0;
                    jogador2.recordeInicial = getHighScore('p2');
                    jogador2.novoRecorde = false;
                    jogador2.avisoVidaTimer = 0;
                    jogador2.moedasParaEscudo = 0;
                    jogador2.escudo = false;
                    jogador2.escudoBloqueadoAte = 0;
                    jogador2.avisoEscudoTimer = 0;
                    jogador2.acelerando = false;
                    jogador2.moedasColetadasBlitz = 0;
                    jogador2.proximaBlitzDupla = false;
                    jogador2.avisoBlitzTimer = 0;
                    obstaculos2 = [];
                    if (gameOverP2) gameOverP2.style.display = 'none';
                    if (pauseGameBtn) pauseGameBtn.style.display = 'block';
                    gameRunningP2 = true;
                    if (animFrameId === null) { lastTime = performance.now(); gameLoop(lastTime); }
                }
            });
            if (backMenuSolo) backMenuSolo.addEventListener('click', voltarAoMenu);
            if (backMenuDuo) backMenuDuo.addEventListener('click', voltarAoMenu);
            if (backMenuP1) backMenuP1.addEventListener('click', voltarAoMenu);
            if (backMenuP2) backMenuP2.addEventListener('click', voltarAoMenu);

            function ajustarEscala() {
                if (IS_MOBILE_TOUCH) {
                    gameContainer.style.transform = 'none';
                    return;
                }
                const larguraJogo = 1400;
                const alturaJogo = 800;
                const escalaAltura = window.innerHeight / alturaJogo;
                const escalaLargura = window.innerWidth / larguraJogo;
                let escala = Math.min(escalaLargura, escalaAltura);
                const MAX_SCALE = document.fullscreenElement ? 1.0 : 0.90;
                if (escala > MAX_SCALE) escala = MAX_SCALE;
                gameContainer.style.transform = `translate(-50%, -50%) scale(${escala})`;
            }
            window.addEventListener('resize', ajustarEscala);
            window.addEventListener('orientationchange', () => {
                setTimeout(ajustarEscala, 100);
            });
            document.addEventListener('fullscreenchange', ajustarEscala);
            ajustarEscala();

            atualizarPreviews();
        }
