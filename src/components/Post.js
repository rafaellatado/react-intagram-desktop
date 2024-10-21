import { useState } from "react"

export default function Posts(props) {

  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleIsSaved = () => {
    setIsSaved(!isSaved);
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
  }

  const handleLikeImg = () => {
    if (isLiked === true) {
      return;
    } else {
      setIsLiked(true);
    }
  }

  return (
    <>
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.userImg} alt=""/>
            {props.userName}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img 
            src={props.postImg} 
            onClick={handleLikeImg}
            alt=""
          />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon 
                onClick={handleLike} 
                name={isLiked ? 'heart' : 'heart-outline'}
                style={{color: isLiked ? 'red' : 'black'}}>
              </ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon onClick={handleIsSaved} name={isSaved ? 'bookmark' : 'bookmark-outline'}></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.likeImg} alt=""/>
            <div class="texto">
              Curtido por <strong>{props.likeUserName}</strong> e <strong>outras 
                {isLiked ? props.likeNumber + 1 : props.likeNumber} 
                pessoas</strong>
            </div>
          </div>
        </div>
      </div>    
    </>
  )
}