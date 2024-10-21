import Story from './Story';

export default function Stories() {

  const storiesArr = [{
    userImg: 'assets/img/filomoderna.svg', userName: 'filomoderna'
  }, {
    userImg: 'assets/img/memeriagourmet.svg', userName: 'memeriagourmet'
  }, {
    userImg: 'assets/img/respondeai.svg', userName: 'respondeai'
  }, {
    userImg: 'assets/img/wawawicomics.svg', userName: 'wawawicomics'
  }, {
    userImg: 'assets/img/nathanwpylestrangeplanet.svg', userName: 'nathanwpylestrangeplanet'
  }, {
    userImg: 'assets/img/barked.svg', userName: 'barked'
  }, {
    userImg: 'assets/img/meowed.svg', userName: 'meowed'
  }, {
    userImg: 'assets/img/9gag.svg', userName: '9gag'
  }]

  return (
    <div className='stories'>
      {storiesArr.map(s => <Story key={s.userName} userImg={s.userImg} userName={s.userName} />)}
    </div>
  )
}