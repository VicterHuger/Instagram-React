function Sugestion(props){
    return (
        <div class="sugestao">
              <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                  <div class="nome">{props.user}</div>
                  <div class="razao">{props.status}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
        </div>
    );
}
function User(props){
    return (
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
              <strong>{props.user}</strong>
              {props.subtitle}
            </div>
        </div>
    );
}
export default function Sidebar(){
    const sugestions=[
        {
            image:"assets/img/bad.vibes.memes.svg",
            user: "bad.vibes.memes",
            status: "Segue você"
        },
        {
            image:"assets/img/chibirdart.svg",
            user: "chibirdart",
            status: "Segue você"
        },
        {
            image:"assets/img/razoesparaacreditar.svg",
            user: "razoesparaacreditar",
            status: "Novo no Instagram"
        },
        {
            image:"assets/img/adorable_animals.svg",
            user: "adorable_animals",
            status: "Segue você"
        },
        {
            image:"assets/img/smallcutecats.svg",
            user: "smallcutecats",
            status: "Segue você"
        }
    ];
    
    return (
        <div class="sidebar">
          
          <User image="assets/img/catanacomics.svg" user="catanacomics" subtitle="Catana"/>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {sugestions.map(sugestion=><Sugestion image={sugestion.image} user={sugestion.user} status={sugestion.status} />)}
            
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}