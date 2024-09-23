"use client";
import 'altrone-ui/dist/style.css';
import {useRouter} from "next/navigation";
import {ARTICLES} from "@/app/blog/articles";

export default function Home() {
  const { replace } = useRouter();

  replace(`/blog/release-3.0`);
}
