import Suggestion from './Suggestion';

export default function Suggestions() {

  const suggetionsArr = [{
    userImg: 'assets/img/bad.vibes.memes.svg', userName: 'bad.vibes.memes', status: 'Segue você'
  }, {
    userImg: 'assets/img/chibirdart.svg', userName: 'chibirdart', status: 'Segue você'
  }, {
    userImg: 'assets/img/razoesparaacreditar.svg', userName: 'razoesparaacreditar', status: 'Novo no Instagram'
  }, {
    userImg: 'assets/img/adorable_animals.svg', userName: 'adorable_animals', status: 'Segue você'
  }, {
    userImg: 'assets/img/smallcutecats.svg', userName: 'smallcutecats', status: 'Segue você'
  }]

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {suggetionsArr.map(s => <Suggestion key={s.userName} userImg={s.userImg} userName={s.userName} status={s.status} />)}
    </div>
  )
}