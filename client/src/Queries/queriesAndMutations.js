import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, signUp } from "./API";

// 회원가입 쿼리
export const useSignUp = () => {
  return useMutation({
    mutationFn: (userInfo) => signUp(userInfo),
  });
};

// 로그인 쿼리
export const useSignIn = () => {
  return useMutation({
    mutationFn: (userInfo) => signIn(userInfo),
  });
};
