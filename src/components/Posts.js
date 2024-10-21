import Post from './Post';

export default function Posts() {

  const postsArr = [{
    userImg: 'assets/img/meowed.svg', userName: 'meowed', postImg: 'assets/img/gato-telefone.svg', 
    likeImg: 'assets/img/respondeai.svg', likeUserName: 'respondeai', likeNumber: 101
  }, {
    userImg: 'assets/img/barked.svg', userName: 'barked', postImg: 'assets/img/dog.svg', 
    likeImg: 'assets/img/adorable_animals.svg', likeUserName: 'adorable_animals', likeNumber: 87
  }, {
    userImg: 'assets/img/caterpie.png', userName: 'caterpie', postImg: 'assets/img/caterpie-post.jpg', 
    likeImg: 'assets/img/charizard.png', likeUserName: 'charizard', likeNumber: 99
  }]

  return (
    <div className="posts">
      {postsArr.map(p => 
        <Post 
          key={p.userName} userImg={p.userImg} userName={p.userName} postImg={p.postImg} 
          likeImg={p.likeImg} likeUserName={p.likeUserName} likeNumber={p.likeNumber} />)}
    </div>
  )
}
