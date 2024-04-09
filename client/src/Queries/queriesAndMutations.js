import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserAccount } from "./API";

// 쿼리 작성 예시 - 회원가입 쿼리
export const useCreateUserAccountMutation = () => {
  return useMutation({
    mutationFn: (user) => createUserAccount(user),
  });
};
