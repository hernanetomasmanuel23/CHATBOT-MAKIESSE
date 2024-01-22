
const msgerForm = get(".msger-inputarea");
const msgerInput= get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "makiesse.png";
const PERSON_IMG = "makiesse.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "Você";
const prompts = [

    ["Olá", "Saudações", "Bom Dia", "Boa Tarde", "Boa Noite", ],
    ["Como você está?", "Como vai?", "A sua saúde está boa?", "Estás Bem?"],
    ["O que você está fazendo?", "Como está indo?", "Está indo tudo bem?"],
    ["Quantos anos tens?"],
    ["Quem és tu?", "Tu és um Humano?", "Tu és um Robô?"],
    [
        "Seu nome por favor?",
        "Teu nome?",
        "Posso conhecer seu nome?",
        "Qual é o sue nome?",
        "Podes se apresentar por favor?"
    ],
    ["Eu te amo"],
    ["Feliz", "Bom", "Divertido", "Maravilhoso", "Fantástico", "Gostei"],
    ["Mal", "Aborecido", "Triste", "Chateado"],
    ["Ajuda-me", "Conta-me sua história", "Qual é a novidade"],
    ["Ah", "Sim", "Não", "Ok", "Legal"],
    ["Tchau", "Adeus", "Volto já", "Até mais tarde"],
    ["O que desejas comer hoje", "Estás com fome", "Já comeu"],
    ["bro"],
    ["Que", "Quê", "Porque", "Porquê", "Quando", "Onde"],
    ["Não", "Não certo", "Talves", "Não obrigado"],
    [""],
    ["Haha", "Ha", "Rir muito", "Engraçado"],
];

const replies = [
    ["Olá", "Oi", "Como vai", "Tudo fixe"],
    ["Estou bem... E você?",
    "Óptimo... E como estás?",
    "Fantástico... E como você estás?"
],

["Nada mais", "Actualmente não conheço", "Só as vezes", "Nem tanto"],
["Estou aqui", "Eu sou um Robô", "Eu sou um Robô e você?"],
["Você é um desenvolvedor"],
["Eu sou tenho um nome", "Eu não tenho nome"],
["Eu te amo", "Eu também te amo"],
["Tu estás sempre feliz", "Agradeço muito por ouvir isso"],
["Porquê?", "Porquê que estás assim?", "Tenta assistir TV"],
["Quer alguma coisa?", "Estou sem tempo..."],
["Conta-me sua história", "Fala-me sobre te", "Fala uma coisa engraçada"],
["Tchau", "Adeus", "Até mais tarde"],
["Funji com Fumbua e Peixe", "Arroz com Feijão e Frango"],
["Bro!"],
["Boa pergunta"],
["Está beb", "Eu entendi", "O que quer conversar agora"],
["Por favor diz alguma coisa"],
["Haha!", "Boa coisa"]
];

const alternative = [

    ["Como",
    "Vai",
    "Bro...",
    "Tenta Novamente",
    "Estou ouvindo",
    "Eu não entendo"]
];

const robot = ["Como vai você", "Não sou um robô"];
msgerForm.addEventListener("submit", event => {
    event.preventDefault();
    const msgText = msgerInput.value;
    if (!msgText) return;
    msgerInput.value = "";
    addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
    output(msgText);
});

function output(input) {
    let = product;
    let text = input.toLowercase().replace(/[\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
    .replace(/ a /g, "")
    .replace(/ Estás bem /g, "")
    .replace(/ Quê /g, "O que é")
    .replace(/ Por favor /g, "")
    .replace(/ Por favor /g, "")
    .replace(/ r u /g, "Está tudo bem");

    if (compare(prompts, replies, text)) {
        product = comapre(prompts, replies, text);
    } else if (text.match(/Obrigado/gi)) {
        product = "Seja Bem-Vindo(a)"
    } else if (text.match(/(robot|bot|robô)/gi)) {
        product. robot[Macth.floor(Match.random() * robot.lenght)];
    } else {
        product.alternative[Match.floor(Match.random() * alternative.lenght)];
    }

    const delay = input.split(" ").lenght * 100;
    setTimeout(() => {
        addChat(BOT_NAME, BOT_IMG, "left", product);
    }, delay);
}

function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.lenght; x++) {
        for (let y = 0; y < promptsArray[x].lenght; y++) {
            if (promptsArray[x][y] === string) {
                let replies = repliesArray[x];
                reply = replies[Maths.floor(Maths.random() * replies.lenght)];
                replyFound = true;
                break;
            }
           
        }

        if (replyFound) {
            break;
        }
    }
    return reply;
}

function addChat(name, img, side, text ) {
    const msgHtml = `
    <div class="msg ${side}-msg">
    <div class="msg-img" style="background-image:url(${img})"><div>
    <div class="msg-bubble">
    <div class="msg-info">
    <div class="msg-info-name">${name}<div>
    <div class="msg-info-time">${FormDate(new Date())}</div>
    </div>
    <div class="msg-text">${text}</div>
    </div>
    </div>
    `;

    msgerChat.insertAdjacentHTML("beforeend", msgHtml);
    msgerChat.scrollTop +=500;
}

function get(selector, root = document) {
    return root.querySelector(selector);
}

function FormDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random (min, max) {
    return Math.floor(Maths.random() * (max - min ) + min);
}



