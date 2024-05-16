import { useQuery, useMutation, useQueryClient, QueryErrorResetBoundary, QueryClient } from "@tanstack/react-query";
import { signIn, signUp, createCommunityPost, getCommunityPostsByCategory, getCommunityPostByUser, updateUserAccount, updateUserBodyInfo, getCommunityPostDetail, likeCommunityPost, replyCommunityPost, deleteReply, editCommunityPost, deleteCommunityPost, createGroup, getGroups, getGroupDetail, joinGroup, registerTrainer, getTrainerDetail, searchPt, reservationPT, getCurrentUser, getAllJoinedGroup, createNewMeeting, getGroupMeetings } from "./API";
import {ErrorBoundary} from 'react-error-boundary';

const queryClient = new QueryClient();


// auth =====================================================================

// 회원가입
export const useSignUp = () => {
  return useMutation({
    mutationFn: (userInfo) => signUp(userInfo),
  });
};

// 로그인
export const useSignIn = () => {
  return useMutation({
    mutationFn: (userInfo) => signIn(userInfo),
  });
};

// user =====================================================================

// 특정 유저가 쓴 글 가져오기
export const useGetCommunityPostByUser = () => {
  return useQuery({
    queryKey: ['GET_USER_WROTE'],
    queryFn: getCommunityPostByUser,
  })
}


// 유저 계정 정보 수정
export const useUpdateUserAccount = () => {
  return useMutation({
    mutationFn: (userInfo) => updateUserAccount(userInfo),
  })
}

// 유저 신체 정보 수정
export const useUpdateUserBodyInfo = () => {
  return useMutation({
    mutationFn: (bodyInfo) => updateUserBodyInfo(bodyInfo)
  })
}

// 유저가 가입한 모임 조회
export const useGetAllJoinedGroup = (ids) => {
  return useQuery({
    queryFn: () => getAllJoinedGroup(ids),
    enabled: !!ids,
    queryKey: ['GET_ALL_JOINED_GROUPS'],
  })
}


// community =====================================================================

// 카테고리 별 최신 글 가져오기
export const useGetCommunityPostsByCategory = (category) => {
  return useQuery({
    queryFn: () => getCommunityPostsByCategory(category),
    queryKey: ['GET_COMMUNITY_POSTS', category],
  })
}

// 커뮤니티 글 작성
export const useCreateCommunityPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData) => createCommunityPost(formData),
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: ['GET_USER_WROTE']
    })
  })
}

// 특정 글 상세 정보 가져오기
export const useGetCommunityPostDetail = (id) => {
  return useQuery({
    queryFn: () => getCommunityPostDetail(id),
    queryKey: ['GET_COMMUNITY_POST', id]
  })
}

// 특정 글 좋아요 처리
export const useLikeCommunityPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => likeCommunityPost(id),
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: ['GET_COMMUNITY_POSTS'],
    })
  })
}

// 특정 글에 댓글 달기
export const useReplyCommunityPost = () => {
  return useMutation({
    mutationFn: (replyData) => replyCommunityPost(replyData),
  }) 
}

// 특정 글에 댓글 삭제
export const useDeleteReply = () => {
  return useMutation({
    mutationFn: (replyData) => deleteReply(replyData)
  })
}

// 커뮤니티 글 수정
export const useEditCommunityPost = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (editedData) => editCommunityPost(id, editedData),
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: ['GET_COMMUNITY_POSTS'],
      queryKey: ['GET_COMMUNITY_POST', id]
    })
  })
}

// 커뮤니티 글 삭제
export const useDeleteCommunityPost = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteCommunityPost(id),
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: ['GET_COMMUNITY_POSTS'],
    })
  })
}

// group =====================================================================

// 모임 생성
export const useCreateGroup = () => {
  return useMutation({
    mutationFn: (groupData) => createGroup(groupData),
  })
}

// 모임 리스트 읽기
export const useGetGroups = (category) => {
  return useQuery({
    queryFn: () => getGroups(category),
    queryKey: ['GET_GROUPS_BY_CATEGORY', category]
  })
}

// 모임 상세 정보
export const useGetGroupDetail = (id) => {
  return useQuery({
    queryFn: () => getGroupDetail(id),
    queryKey: ['GET_GROUP_DETAIL', id]
  })
}

// 모임 참여하기
export const useJoinGroup = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (groupId) => joinGroup(groupId),
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: ['GET_GROUP_DETAIL', id],
      queryKey: ['GET_ALL_JOINED_GROUPS'],
    })
  })
};

// 모임 약속 생성
export const useCreateNewMeeting = (groupId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({groupId, meetingData}) => createNewMeeting({groupId, meetingData}),
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: ['GET_GROUP_DETAIL', groupId],
    })
  })
}

// 특정 모임의 약속 조회
export const useGetGroupMeetings = (groupId) => {
  return useQuery({
    queryFn: () => getGroupMeetings(groupId),
    enabled: !!groupId
  })
}


// pt =====================================================================

// pt 트레이너 등록
export const useRegisterTrainer = () => {
  return useMutation({
    mutationFn: (ptInfo) => registerTrainer(ptInfo)
  })
}

// 특정 트레이너의 상세 정보 가져오기
export const useGetTrainerDetail = (id) => {
  return useQuery({
    queryFn: () => getTrainerDetail(id),
    queryKey: ['GET_TRAINER_DETAIL_BY_ID', id],
    enabled: !!id,
  })
}

// 특정 경도 위도 범위에 해당하는 트레이너 정보 모두 검색
export const useSearchPt = () => {
  return useMutation({
    mutationFn: (lonLat) => searchPt(lonLat)
  })
}

// 트레이닝 예약
export const useReservationPT = () => {
  return useMutation({
    mutationFn: (formData) => reservationPT(formData),
  })
}