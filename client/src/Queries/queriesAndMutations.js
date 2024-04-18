import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, signUp, createCommunityPost } from "./API";

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


// 커뮤니티 글 작성
export const useCreateCommunityPost = () => {
  return useMutation({
    mutationFn: (formData) => createCommunityPost(formData),
  })
}