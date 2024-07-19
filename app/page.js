import Image from "next/image"
import Link from "next/link"
import style from "./style.css"

export default function Page(){
  return(
    <>
      <h1>page</h1>
      <Image src="/next.svg" width={150} height={150}/>
      <p> <Link href="about">ポートフォリオ</Link></p>
    </>
  )
}