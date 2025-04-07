const carrosselData = {
    "slide1_title": "O FUTURO DA IMAGINAÇÃO VISUAL CHEGOU",
    "slide1_subtitle": "A IA do Google pode estar prestes a virar o jogo contra a OpenAI.",
    "slide2_body": "Enquanto os olhos do mundo estavam na OpenAI, o Google lançou discretamente o Gemini 2.0 Flash — uma ferramenta que gera e edita imagens com um nível de compreensão visual jamais visto antes.",
    "slide3_title": "FALE O QUE QUISER VER. ELA ENTENDE.",
    "slide3_text": "Descreva em palavras, e a IA transforma em imagem. Estilo, luz, ângulo, composição — tudo ajustado com uma simples frase.",
    "slide4_body": "Essa IA não apenas cria. Ela lê cenas, compreende intenções, recria estilos e adapta elementos com sensibilidade estética. Uma revolução silenciosa, mas poderosa.",
    "slide5_title": "IMAGENS COM DIREÇÃO CRIATIVA AUTOMÁTICA",
    "slide5_text": "Substitua elementos, recrie perspectivas ou edite personagens apenas escrevendo o que deseja ver. A interface some. O prompt vira direção de arte.",
    "slide6_body": "O Gemini Flash já pode ser testado gratuitamente via Google AI Studio. E mais: pode ser integrado por API em qualquer sistema criativo.",
    "slide7_title": "POR QUE AINDA NINGUÉM ESTÁ FALANDO DISSO?",
    "slide8_body": "Enquanto o Sora e outros modelos viram manchete, o Gemini Flash opera em silêncio. Mas quem testar agora pode estar anos à frente.",
    "slide9_title": "A VERDADEIRA INOVAÇÃO NUNCA É ÓBVIA",
    "slide9_text": "Ela se esconde onde poucos estão olhando. O segredo não é só usar a tecnologia — é dominar antes que ela vire tendência.",
    "slide10_title": "SEJA UM DOS PRIMEIROS A EXPLORAR",
    "slide10_text": "Siga @debriefing.ia e receba ideias, testes e ferramentas para aplicar IA na criação real — com autonomia, estética e propósito."
  };
  
  async function applyTextToSlides(slides, data) {
    slides.forEach((slide, slideIndex) => {
      const index = slideIndex + 1;
      const possibleFields = [
        `slide${index}_title`,
        `slide${index}_subtitle`,
        `slide${index}_text`,
        `slide${index}_body`
      ];
  
      slide.textElements.forEach((textElement, textIdx) => {
        const fieldKey = possibleFields[textIdx];
        if (data[fieldKey]) {
          textElement.setText(data[fieldKey]);
        }
      });
    });
  }