import { useState } from "react";

export default function User() {

  const [userName, setUserName] = useState('catanacomics');

  const handleUserName = () => {
    let username = prompt('Type your username:');
    
    if (username === '') {
      return;
    } else {
      setUserName(username);
    }
  }

  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
      <div class="texto">
        <span>
          <strong>{userName}</strong>
          <ion-icon name="pencil" onClick={handleUserName}></ion-icon>
        </span>
      </div>
    </div>
  )
}