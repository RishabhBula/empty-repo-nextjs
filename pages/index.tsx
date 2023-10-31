import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { postData } from "@/utils/Api";
import { useContext } from "react";
import ToastContext from "@/ToastContext";
import { ToastType } from "@/utils/Constant";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const token = localStorage.getItem("authToken");
  const Toast = useContext(ToastContext);
  const { push } = useRouter();
  if (token) {
    push("/dashboard");
  }
  const login = (id: Number) => {
    const data1 = {
      email: "user1@getnada.com",
      password: "User1@123",
    };
    const data2 = {
      email: "rishabh3@getnada.com",
      password: "Rishabh@123",
    };
    const data3 = {
      email: "master@getnada.com",
      password: "Master@123",
    };
    postData("/user/login", id === 1 ? data1 : id === 2 ? data2 : data3)
      .then(function (response) {
        console.log(response);
        if (response?.data) {
          localStorage.setItem("authToken", response?.data?.data?.token);
          localStorage.setItem("themeColor", "dark");
          push("/dashboard");
          Toast.showToast(ToastType.SUCCESS, response?.data?.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      <main
        className={`flex flex gap-6 items-centers justify-center p-24 ${inter.className}`}
      >
        Empty repo nextjs
      </main>
    </>
  );
}
