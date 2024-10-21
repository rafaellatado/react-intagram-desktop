export default function Suggestion(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.userImg} alt="bad.vibes.memes.svg"/>
        <div className="texto">
          <div className="nome">{props.userName}</div>
          <div className="razao">{props.status}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  )
}