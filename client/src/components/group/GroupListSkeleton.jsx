

const GroupListSkeleton = () => {
  return (
    <li className="groupList animateLoading">
      <div className='postListSkeletonImg' />
      <div className="postContent postContentSkeleton">
        <div className="contentTop contentTopSkeleton">
          <div className="tagsSkeleton" />
          <div className="dateSkeleton" />
        </div>
        <div className='postListTitleSkeleton' />
        <div className="postListTextSkeleton" />
        <div className="postListTextSkeleton" />
        <div className="contentBottom">
        <div className='writerSkeleton' />
          
        </div>
      </div>
    </li>
  )
}

export default GroupListSkeleton;