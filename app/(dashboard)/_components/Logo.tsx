import Image from "next/image"
import LogoSvg from "@/public/Logo.svg"

export const Logo = () => {
    return (
        <Image height={130} width={130} alt="logo" src={LogoSvg}/>
    )
}