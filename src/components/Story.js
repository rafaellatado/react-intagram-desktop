export default function Story(props) {
  return (
    <>
      <div class="story">
        <div class="imagem">
          <img src={props.userImg} alt="9gag"/>
        </div>
        <div class="usuario">
          {props.userName}
        </div>
      </div>

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </>
  )
}