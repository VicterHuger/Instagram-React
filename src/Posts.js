import React from 'react';

function Post(props){
  
  return (
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.imageuser} alt=""/>
                  {props.user}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={props.imagepost} alt="" onClick={props.imagefunction}/>
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name={props.icon} onClick={props.iconfunction}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={props.imageuserlike} alt="" />
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
        id:0,
        imageuser: "assets/img/meowed.svg",
        user: "meowed",
        imagepost: "assets/img/gato-telefone.svg",
        imageuserlike: "assets/img/respondeai.svg",
        userlike: "respondeai",
        iconlike: "heart-outline",
        likes: 101.523
    },
    { 
        id: 1,
        imageuser: "assets/img/barked.svg",
        user: "barked",
        imagepost: "assets/img/dog.svg",
        imageuserlike: "assets/img/adorable_animals.svg",
        userlike: "adorable_animals",
        iconlike: "heart-outline",
        likes: 99.159
    }
];

  const [list,setList]=React.useState(posts);
  
  function verifyLikeIcon(id){
    let updatedPost;
    const newposts = list.map( post => {
      if (post.id === id) {
        
        if(post.iconlike ==="heart-outline"){

           updatedPost = {
            ...post,
            iconlike: "heart",
          };

          return updatedPost;
        
        }else if(post.iconlike==="heart"){
           updatedPost = {
            ...post,
            iconlike: "heart-outline",
          };
        
          return updatedPost;
        }
        
      }
      return post;
    });

    setList(newposts);
  }
  function verifyLikePost(id){
    let updatedPost;
    const newposts = list.map( post => {
      if (post.id === id) {
        
        if(post.iconlike ==="heart-outline"){

           updatedPost = {
            ...post,
            iconlike: "heart",
          };

          return updatedPost;
        
        }
        
      }
      return post;
    });

    setList(newposts);
  }
  
    return (
        <div class="posts">
            {list.map( post => <Post imageuser={post.imageuser} user={post.user} imagepost={post.imagepost} iconfunction={()=>verifyLikeIcon(post.id)} imagefunction={()=>verifyLikePost(post.id)} icon={post.iconlike}  imageuserlike={post.imageuserlike} userlike={post.userlike} likes={post.likes}  />)}
        </div>
    );
}