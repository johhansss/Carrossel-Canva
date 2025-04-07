// Dados do carrossel
const carrosselData = {
  slide1_title: "UMA NOVA ERA DAS IMAGENS COMEÇOU",
  slide1_subtitle: "Poderia essa ser a IA que irá desbancar a OpenIA?",

  slide2_body: "Enquanto todos comentam os lançamentos da OpenAI, o Google silenciosamente colocou no ar o Gemini 2.0 Flash — um gerador de imagens com qualidade absurda, edição por comando de texto e velocidade impressionante. A diferença? Ele funciona agora, de graça, para qualquer pessoa que saiba pedir com clareza.",

  slide3_title: "DESCREVA A CENA. VEJA ACONTECER.",
  slide3_text: "Você escreve o que quer ver. Ele entende luz, estilo, ângulo e compõe. E se quiser trocar elementos, alterar expressões ou mudar a perspectiva, basta dar o comando. Simples. Direto. Sem mistério.",

  slide4_body: "Essa IA não apenas gera imagens — ela interpreta intenções. Lê objetos, reconhece estilos, refaz retratos históricos, edita cenários e entende nuances. É como se você tivesse um diretor de arte digital à disposição. E o mais espantoso: em segundos.",

  slide5_title: "EDIÇÃO DE IMAGEM VIROU LINGUAGEM.",
  slide5_text: "Diga “adicione fumaça azul ao fundo” — e ela aparece. Peça “estilo cyberpunk com sombra dramática” — e ele entrega. A interface desaparece. O prompt vira poder criativo.",

  slide6_body: "Disponível no Google AI Studio, o Gemini Flash pode ser testado agora mesmo, gratuitamente. Ele aceita comandos escritos, entende contexto visual e pode ser integrado via API. É uma tecnologia madura, pronta para quem estiver disposto a experimentá-la.",

  slide7_title: "PORQUE NÃO TEM NINGUÉM FALANDO SOBRE ISSO?",

  slide8_body: "O hype em torno do Sora e dos modelos da OpenAI ofuscou completamente esse lançamento. Mesmo profissionais da área visual parecem ignorar que existe uma IA funcional, criativa e acessível do outro lado da disputa. O que está em jogo aqui não é só tecnologia — é atenção.",

  slide9_title: "A INOVAÇÃO NÃO ESTÁ ONDE TODO MUNDO OLHA.",
  slide9_text: "O verdadeiro diferencial está em perceber antes. Em testar o que ainda não viralizou. Em dominar a ferramenta antes da narrativa.",

  slide10_title: "A PRÓXIMA REVOLUÇÃO NÃO SERÁ ANUNCIADA",
  slide10_text: "Não seja engolido pela I.A. - Siga @debriefing.ia e seja um dos pioneiros dessa revolução."
};

// Função que simula aplicação dos textos nos slides
async function applyTextToSlides(slides, data) {
  slides.forEach((slide, slideIndex) => {
    const index = slideIndex + 1;
    const possibleFields = [
      `slide${index}_body`,
      `slide${index}_title`,
      `slide${index}_subtitle`,
      `slide${index}_text`
    ];

    slide.textElements.forEach((textElement, textIdx) => {
      const fieldKey = possibleFields[textIdx];
      if (data[fieldKey]) {
        console.log(`✔️ Slide ${index} | Campo: ${fieldKey} → ${data[fieldKey]}`);
        textElement.setText(data[fieldKey]);
      } else {
        console.log(`❌ Slide ${index} texto ${textIdx + 1}: campo ausente (${fieldKey})`);
      }
    });
  });
}

// Simulação de slides com 3 caixas de texto por slide
const mockSlides = Array.from({ length: 10 }).map((_, i) => ({
  textElements: [
    { setText: text => console.log(`📌 Slide ${i + 1} texto 1: ${text}`) },
    { setText: text => console.log(`📌 Slide ${i + 1} texto 2: ${text}`) },
    { setText: text => console.log(`📌 Slide ${i + 1} texto 3: ${text}`) }
  ]
}));

// Executar simulação
applyTextToSlides(mockSlides, carrosselData);
