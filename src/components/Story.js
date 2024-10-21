export default function Story(props) {
  return (
    <>
      <div className="story">
        <div className="imagem">
          <img src={props.userImg} alt="9gag"/>
        </div>
        <div className="usuario">
          {props.userName}
        </div>
      </div>

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </>
  )
}