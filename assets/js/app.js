const container = document.getElementById('containerCard');
const btnC = document.getElementById('btnCarregar');

const filmes = [
  {
    id: '1',
    titulo: "Sombras do Amanhã",
    descricaoR: "Quando estranhas sombras começam a apagar tudo o que tocam — objetos, memórias e até pessoas — uma cientista com um passado fragmentado descobre que essas entidades não vêm do espaço, mas do futuro. À medida que a realidade se desfaz ao seu redor, ela precisa desvendar uma conspiração ligada a experimentos temporais ilegais que podem estar apagando o próprio conceito de existência.Perseguida por figuras que podem ou não ser reais, e assombrada por lembranças que talvez nunca tenham acontecido, ela corre contra o tempo para impedir que o amanhã consuma o presente... e a si mesma.",
    descricao: "Quando estranhas sombras começam a apagar tudo o que tocam...",
    detalhes: "Thriller Psicológico | Ficção Científica | Mistério",
    imagem: "https://fastly.picsum.photos/id/1036/900/600.jpg?hmac=hMRK0WnEuRWCTpJJo_9PODmqQPF1OD6-IwjR48-C2oo",
    nota: "9,6/10",
    elenco: ["João Silva", "Maria Souza", "Carlos Dias"]
  },
  {
    id: '2',
    titulo: "Maré Vermelha",
    descricaoR: "Após um naufrágio misterioso em alto-mar, cinco sobreviventes se veem presos em uma balsa à deriva, lutando contra o tempo, o calor implacável e segredos que emergem com a força das ondas. À medida que a esperança se esvai, alianças frágeis se formam e verdades ocultas vêm à tona, revelando que o maior perigo pode estar entre eles.",
    descricao: "Após um naufrágio, cinco sobreviventes lutam contra o tempo...",
    detalhes: "Drama | Baseado em Fatos Reais | Suspense",
    imagem: "https://fastly.picsum.photos/id/431/900/600.jpg?hmac=OvM2RJjFjoZPWuE_pJQ0WpBBj1lSD09C4K7U7M7ollQ",
    nota: "9,3/10",
    elenco: ["Fernanda Lima", "Lucas Rocha", "Ana Paula"]
  },
  {
    id: '3',
    titulo: "Circuito Fatal",
    descricaoR: "Um jovem hacker, talentoso e inconsequente, descobre um código obscuro que abre acesso a um sistema ultra-secreto do governo. O que começa como um jogo, logo se transforma em uma caçada letal quando ele se torna alvo de uma rede cibernética que manipula o mundo real. Em um universo onde a fronteira entre o digital e o físico se dissolve, escapar é apenas o primeiro passo.",
    descricao: "Um jovem hacker desbloqueia um código perigoso...",
    detalhes: "Thriller | Ficção Científica | Cyberpunk",
    imagem: "https://fastly.picsum.photos/id/1054/900/600.jpg?hmac=MXt63515nerfdPkkTvDK905AIIW7bfVnlDPWKTG77B0",
    nota: "8,7/10",
    elenco: ["Eduardo Silva", "Bianca Castro", "Rafael Mendes"]
  },
  {
    id: '4',
    titulo: "Entre o Céu e a Rua",
    descricaoR: "Vivendo nas ruas de uma grande metrópole, uma jovem com talento nato para a poesia encontra, nas palavras, um refúgio contra a dureza do mundo. Quando cruza o caminho de um professor desiludido, nasce uma conexão que mudará suas vidas. Uma história delicada sobre empatia, invisibilidade social e a força transformadora da arte.",
    descricao: "Uma jovem moradora de rua com talento para a poesia...",
    detalhes: "Drama | Superação e Emoção | Arte e Sociedade",
    imagem: "https://fastly.picsum.photos/id/495/900/600.jpg?hmac=B8p7aSI0ZYu7gbXeQhW8FmQEGSIFduQDqCvAkT0NIKE",
    nota: "8/10",
    elenco: ["Clara Reis", "João Mendes", "Sara Moura"]
  },
  {
    id: '5',
    titulo: "Segredo no Porão",
    descricaoR: "Um casal descobre um porão trancado em sua nova casa, onde segredos obscuros e uma presença sinistra os aguardam. À medida que investigam, eles se deparam com uma história de traição, vingança e um mistério que desafia a própria realidade. O que começou como uma simples mudança de vida logo se transforma em uma luta pela sobrevivência.",
    descricao: "Um casal descobre um porão trancado em sua nova casa...",
    detalhes: "Suspense | Mistério | Terror Psicológico",
    imagem: "https://fastly.picsum.photos/id/511/900/600.jpg?hmac=YE8YbjtrvUkL9-K9LJ-ErwRLct8YUn-LP7ySqRDS_wA",
    nota: "7,8/10",
    elenco: ["Gustavo Lima", "Lorena Duarte", "Tiago Cunha"]
  },
  {
    id: '6',
    titulo: "O Caminho Sombrio",
    descricaoR: "Em uma vila isolada nas montanhas, uma antiga lenda conta sobre uma estrada que leva a um destino desconhecido. Quando um grupo de amigos decide explorar essa rota, eles se deparam com fenômenos inexplicáveis e uma presença maligna que os persegue. À medida que a estrada se torna um labirinto de pesadelos, eles precisam desvendar o mistério antes que seja tarde demais.",
    descricao: "Em uma vila isolada nas montanhas, uma antiga lenda conta...",
    detalhes: "Suspense Folclórico | Terror Psicológico | Mistério",
    imagem: "https://fastly.picsum.photos/id/924/900/600.jpg?hmac=T175_8JulQPi6_AVMtWibdKUu2QylghvC8hbvXtwFFg",
    nota: "7,6/10",
    elenco: ["Letícia Martins", "Pedro Farias", "Amanda Rocha"]
  }
];

if (btnC != null) {
  function criarCard(filme) {
    const div = document.createElement('div');
    div.className = "cartao col-md-4";

    div.innerHTML = `
      <a href="detalhes.html?id=${filme.id}">
        <div class="card text-center border-primary">
          <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
          <div class="card-body">
            <h3 class="card-title">${filme.titulo}</h3>
            <p class="card-text">${filme.descricao}</p>
            <div class="badge bg-info text-dark">${filme.nota}</div>
          </div>
        </div>
      </a>
    `;

    return div;
  }

  function carregarTresCards() {
    const filmesEmbaralhados = [...filmes].sort(() => Math.random() - 0.5);
    const tresFilmes = filmesEmbaralhados.slice(0, 3);

    tresFilmes.forEach(filme => {
      const novoCard = criarCard(filme);
      container.appendChild(novoCard);
    });
  }

  carregarTresCards();

  btnC.addEventListener('click', carregarTresCards);
}

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id) {
  const filme = filmes.find(f => f.id === id);
  const tela = document.getElementById('tela');

  if (filme && tela) {
    tela.innerHTML = `
    <div class="row align-items-center">
   
      <div class="col-md-4 position-relative">
        <img src="${filme.imagem}" class="img-fluid" style="" alt="${filme.titulo}">
        <div class="badge bg-info text-white position-absolute bottom-0 start-50 translate-middle-x" style="font-size: 1.2rem; padding: 0.5rem 1rem;">
          ${filme.nota}
        </div>
      </div>

      <div class="col-md-8">
        <h2 class="text-white">${filme.titulo}</h2>
        <p class="text-white">${filme.detalhes}</p>
        <p class="text-white"><br><strong>${filme.descricaoR}</strong><br></p>
        <p class="text-white"><strong>Elenco:</strong> ${filme.elenco}</p>
      </div>
    </div>
  `;
  } else {
    tela.innerHTML = '<p>Filme não encontrado.</p>';
  }
}