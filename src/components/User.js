import { useState } from "react";

export default function User() {

  const [userName, setUserName] = useState('catanacomics');
  const [profileImg, setProfileImg] = useState('assets/img/catanacomics.svg');

  const handleUserName = () => {
    let username = prompt('Enter your username:');
    
    if (username === '') {
      return;
    } else {
      setUserName(username);
    }
  }

  const handleProfileImg = () => {
    let image = prompt('Enter an image URL:')

    if (image === '') {
      return;
    } else {
      setProfileImg(image);
    }    
  }

  return (
    <div class="usuario">
      <img src={profileImg} alt="imagem de perfil" onClick={handleProfileImg}/>
      <div class="texto">
        <span>
          <strong>{userName}</strong>
          <ion-icon name="pencil" onClick={handleUserName}></ion-icon>
        </span>
      </div>
    </div>
  )
}