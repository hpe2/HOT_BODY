
const CommunityPostReply = ({content}) => {
  const handleDeleteReply = () => {

  }
  return (
    <li className='community-detail-reply-content'>
      <button onClick={handleDeleteReply}>x</button>
      <>
        <p>댓글 작성자 이름 :</p>
        <p>(작성자 아이디)</p>
      </>
      <p>댓글 내용</p>
    </li>
  )
}

export default CommunityPostReply