import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, signUp, createCommunityPost, getCommunityPostsByCategory } from "./API";

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

// 카테고리 별 최신 글 가져오기
// export const useGetCommunityPostsByCategory = () => {
//   return useMutation({
//     mutationFn: (category) => getCommunityPostsByCategory(category),
//   })
// }

export const useGetCommunityPostsByCategory = (category) => {
  return useQuery({
    queryFn: () => getCommunityPostsByCategory(category),
    queryKey: ['GET_COMMUNITY_POSTS', category]
  })
}

// 커뮤니티 글 작성
export const useCreateCommunityPost = () => {
  return useMutation({
    mutationFn: (formData) => createCommunityPost(formData),
    // refetch - query key
  })
}