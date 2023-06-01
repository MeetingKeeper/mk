import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const useLogin = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const onGoogleLogin = () => signIn("google", { callbackUrl })

  return {
    onGoogleLogin,
  }
}

export default useLogin;
