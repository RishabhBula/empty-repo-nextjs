import { useRouter } from "next/navigation";

export const logOut = () => {
  // const { push } = useRouter();

  localStorage.removeItem("authToken");
  // push("/")
  // location.reload()
};
