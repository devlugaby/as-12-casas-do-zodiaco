function MudaDesenho(){
    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("p");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if(valor=="gemeos"){
        texto.innerHTML = "Gêmeos";
        texto2.innerHTML = "O Cavaleiro de Gêmeos sofreu tanto quanto causou dor. Vítima de um 'distúrbio de personalidade', acabou sendo o responsável por uma guerra que poderia ter levado à morte da própria Atena. Ao se dar conta dos acontecimento pelos quais foi responsável e arrepender-se profundamente, o grande 'vilão' da saga do Santuário acaba cometendo suicídio para tentar limpar o próprio nome. Embora não apareça tantas vezes em ação, Saga é o Cavaleiro de Ouro mais importante da história, pois serve como principal (e excelente) antagonista na primeira saga em que é mencionado. Durante a saga de Hades, ele lidera os Espectros com toda força, agindo de maneira que ele mesmo repudia para tentar passar uma mensagem importante a Atena.";
        imagem.setAttribute("src","img/gemeos.webp");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="escorpiao"){
        texto.innerHTML = "Escorpião";
        texto2.innerHTML = "Milo é claramente um Cavaleiro nobre. Ao lutar contra Hyoga, o defensor da casa de Escorpião admira a determinação e o poder do Cavaleiro de Cisne, permitindo que ele avance mesmo após ter sido destroçado pelo Cavaleiro de Ouro. Não bastasse a dignidade notável, a Agulha Escarlate, golpe principal do guerreiro, é fascinante. Imagine ter o sistema nervoso inteiro afetado por 14 'agulhas', que causam uma dor inimaginável e podem te levar a loucura.";
        imagem.setAttribute("src","img/escorpiao.webp");
        imagem.setAttribute("width","300px");
    }
    
    else if(valor=="peixes"){
        texto.innerHTML = "Peixes";
        texto2.innerHTML = "Após tantas batalhas épicas que precedem o duelo na casa de Peixes, há uma certa sensação de frustração quando finalmente assistimos à luta entre Afrodite e Shun, que serve apenas para nos lembrar do quão poderoso é o cavaleiro de Andrômeda. A saga de Hades também não fez muito pelo personagem, um dos mais secundários entre os Cavaleiros de Ouro.";
        imagem.setAttribute("src","img/peixes.webp");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="aries"){
        texto.innerHTML = "Áries";
        texto2.innerHTML = "Se não fosse pelos reparos que Mú fez nas armaduras de bronze, talvez os cavaleiros não tivessem chance alguma contra os demais Cavaleiros de Ouro. Demora muito até que o próprio Cavaleiro de Áries seja visto em ação, mas quando isto acontece, na saga de Hades, a sensação de satisfação e o sorrido estampado no rosto são inevitáveis. Mú não apenas parece ser o mais inteligente entre os Cavaleiros de Ouro como é um dos mais amados pelos fãs.";
        imagem.setAttribute("src","img/aries.webp");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="capricornio"){
        texto.innerHTML = "Capricornio";
        texto2.innerHTML = "Constantemente menosprezado, o portador da espada santa Excalibur cometeu uma série de erros -- como tentar matar Atena e, de certa forma, ter matado Aiolos. Mais tarde, ele se redimiu em uma luta incrível contra Shiryu, na qual salva o Cavaleiro de Dragão ao custo da própria vida. Embora se considere o cavaleiro mais leal a Atena, na saga de Hades ele retorna e parece se comportar como o maior inimigo da Deusa. Com o tempo, no entanto, descobrimos que ele precisava se comportar daquela maneira. Shura é facilmente um dos Cavaleiros de Ouro mais memoráveis e interessantes deste universo.";
        imagem.setAttribute("src","img/capricornio.webp");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="sagitario"){
        texto.innerHTML = "Sagitário";
        texto2.innerHTML = "Aiolos de Sagitário é a encarnação de dois conceitos fundamentais para a história de Cavaleiros do Zodíaco: lealdade e determinação. Mesmo gravemente ferido, o Cavaleiro de Sagitário se esforça ao máximo para salvar a bebê Atena do Mestre do Santuário, sendo atacado por muitos de seus colegas no processo. É difícil não se emocionar com as cenas de flashback em que o guerreiro aparece fazendo de tudo para salvar a pequena Saori Kido ou quando a armadura dele, mesmo sem que ele a controle diretamente, interfere nos acontecimentos da Saga do Santuário. Só é uma pena que não o vejamos tantas vezes em ação -- com exceção do que pudemos conferir em Alma de Ouro.";
        imagem.setAttribute("src","img/sagitario.webp");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="touro"){
        texto.innerHTML = "Touro";
        texto2.innerHTML = "Quando apareceu pela primeira vez em Os Cavaleiros do Zodíaco, o brasileiro (sim!) Aldebaran nos mostrou como funcionava, de certa forma, a mente dos Cavaleiros de Ouro. Foi ele quem, após ter um chifre da armadura arrancado por Seiya, decidiu permitir que os Cavaleiros de Bronze seguissem adiante, tornando possível todos os acontecimentos marcantes e emocionantes que sucedem este primeiro embate nas 12 casas. Na saga de Hades, o guerreiro acaba sendo assassinado defendendo o Santuário. Cumprindo, portanto, o próprio papel da melhor maneira que podia.";
        imagem.setAttribute("src","img/touro.webp");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="aquario"){
        texto.innerHTML = "Aquário";
        texto2.innerHTML = "Quem é Sub-Zero perto de Camus? O mestre do mestre de Hyoga é tranquilamente um dos mais poderosos Cavaleiros de Ouro, o que fica claro tanto durante a saga do Santuário quanto durante os primeiros episódios da saga de Hades. Não fosse pela luta contra ele (e, portanto, a disposição dele para enfrentar o Cavaleiro de Bronze mais de uma vez), Hyoga jamais teria despertado o sétimo sentido -- e nem teria participado de um dos duelos mais inesquecíveis do anime.";
        imagem.setAttribute("src","img/aquario.webp");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="leao"){
        texto.innerHTML = "Leão";
        texto2.innerHTML = "Favorito de muitos dos fãs, o irmão de Aiolos travou um duelo inesquecível com Seiya, na casa de Leão, o que bastou para torná-lo um dos Cavaleiros de Ouro mais memoráveis da franquia. Assim como o Cavaleiro de Sagitário, Aiolia já desconfiava do Mestre do Santuário, mas infelizmente acabou sendo dominado pelo vilão até que Seiya o derrubasse em combate. Não bastassem a força e carisma notáveis deste herói, o personagem com certeza fez muitos espectadores chorarem ao se reencontrar com o irmão no Muro das Lamentações, durante a saga de Hades.";
        imagem.setAttribute("src","img/leao.webp");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="cancer"){
        texto.innerHTML = "Câncer";
        texto2.innerHTML = "Esta talvez seja a única unanimidade garantida na lista. Derrotado por Shiryu em um duelo memorável, Máscara da Morte infelizmente carece do carisma e das habilidades que tornam fascinantes todos os seus companheiros dourados. Além disso, ele com certeza não está entre os mais poderosos dos guerreiros -- sequer entre os mais estilosos ou fiéis a Atena.";
        imagem.setAttribute("src","img/cancer.webp");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="libra"){
        texto.innerHTML = "Libra";
        texto2.innerHTML = "O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades. Inclusive, a revelação de que o Mestre Ancião conseguia lutar normalmente assumindo sua antiga forma está entre as mais -- se não for 'a' -- mais marcante na história de Cavaleiros do Zodíaco.";
        imagem.setAttribute("src","img/libra.webp");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="virgem"){
        texto.innerHTML = "Virgem";
        texto2.innerHTML = "O Cavaleiro Mais Próximo de Deus já demonstrou, em mais de uma ocasião, que é, sim, o Cavaleiro de Ouro mais poderoso da geração à qual pertence. Além de ter obrigado Camus, Shura e Saga a utilizarem uma técnica proibida para que pudessem derrotá-lo e ele fosse ao inferno para acompanhar Atena, Shaka possui habilidades que impressionam até mesmo outros guerreiros da mesma classe que a dele, além de possuir o maior cosmo dentre os cavaleiros de Atena -- vale lembrar que ele chega a bloquear o cosmo da própria Saori no anime para que ela não interfira no luta de Ikki contra Shiva e Ágora. Embora já seja imponente e marcante na saga do Santuário, em que é 'derrotado' por Ikki, o Cavaleiro de Virgem se consagra na saga de Hades como um dos mais sábios e hábeis entre os personagens da franquia. Não fosse por ele, nem mesmo Atena teria entendido o que precisava ser feito durante a saga de Hades.";
        imagem.setAttribute("src","img/virgem.webp");
        imagem.setAttribute("width","300px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}