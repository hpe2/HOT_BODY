import "../../style/user/wrote.scss";
import { useGetCommunityPostByUser } from '../../Queries/queriesAndMutations';
import UserWroteList from '../../components/user/UserWroteList';


const Wrote = () => {
  const {data: userPosts, isFetching} = useGetCommunityPostByUser();

  return (
    <>
      <section className="wroteContent">
        <div className="wroteContainer">
          <div className="wrote">
            <h1>내가 쓴 글</h1>
            <div className="boxContainer">
              <div className="wroteField">
                <table>
                  <thead>
                    <tr>
                      <th className="thCate">카테고리</th>
                      <th className="thTitle">제목</th>
                      <th className="thDate">날짜</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isFetching ? (
                      <p className='animateLoading'>글을 조회하는 중입니다...</p>
                    ) : (
                      userPosts.data.map((post) => (
                        <UserWroteList post={post} />
                      ))
                    )}
                  </tbody>
                  
                </table>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
};

export default Wrote;
