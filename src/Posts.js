function Post(props){
    return (
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.imageuser} />
                  {props.user}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={props.imagepost} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={props.imageuserlike} />
                  <div class="texto">
                    Curtido por <strong>{props.userlike}</strong> e <strong>outras {props.likes} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}
export default function Posts(){
    const posts=[
        {
            imageuser: "assets/img/meowed.svg",
            user: "meowed",
            imagepost: "assets/img/gato-telefone.svg",
            imageuserlike: "assets/img/respondeai.svg",
            userlike: "respondeai",
            likes: "101.523"
        },
        {
            imageuser: "assets/img/barked.svg",
            user: "barked",
            imagepost: "assets/img/dog.svg",
            imageuserlike: "assets/img/adorable_animals.svg",
            userlike: "adorable_animals",
            likes: "99.159"
        }
    ];
    return (
        <div class="posts">
            {posts.map(post=><Post imageuser={post.imageuser} user={post.user} imagepost={post.imagepost} imageuserlike={post.imageuserlike} userlike={post.userlike} likes={post.likes}  />)}
        </div>
    );
}