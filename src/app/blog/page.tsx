"use client";
import 'altrone-ui/dist/style.css';
import {useRouter} from "next/navigation";

export default function Home() {
  const { replace } = useRouter();

  replace(`/blog/release-3.2`);
}
