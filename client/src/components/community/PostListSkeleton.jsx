const PostListSkeleton = () => {
  return (
    <li className="postList animateLoading">
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

export default PostListSkeleton