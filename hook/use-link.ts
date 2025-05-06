import { URL } from "@/constant/url";
import { useRouter } from "next/navigation";

interface UserLinkResult {
  redirect: (url: URL | string) => void;
}

const useLink = (): UserLinkResult => {
  const router = useRouter();

  const redirect = (url: URL | string): void => {
    // redirect(URL.AuthLoginOtpEnterCode + "?phone-number=213123123")
    router.push(url);
  };

  return {
    redirect,
  };
};

export default useLink;
