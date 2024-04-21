import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, signUp, createCommunityPost, getCommunityPostsByCategory, getCommunityPostByUser, updateUserAccount, updateUserBodyInfo, getCommunityPostDetail, likeCommunityPost } from "./API";

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


// community =====================================================================

// 카테고리 별 최신 글 가져오기
export const useGetCommunityPostsByCategory = (category) => {
  return useQuery({
    queryFn: () => getCommunityPostsByCategory(category),
    queryKey: ['GET_COMMUNITY_POSTS', category]
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
      queryKey: ['GET_COMMUNITY_POSTS'],
    })
  })
}