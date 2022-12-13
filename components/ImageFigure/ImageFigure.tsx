import React, {PropsWithChildren} from "react";
import Image from "next/image";
import s from './ImageFigure.module.css';

interface ImageFigureProps {
  src: string
  width: number
  height: number
  alt?: string
}

export const ImageFigure = ({ src, width, height, alt, children }: PropsWithChildren<ImageFigureProps>) => {
  return <figure className={s.ImageFigure}>
    <Image src={src} alt={alt || ''} width={width * 4} height={height * 4} className={s.ImageFigure__image} style={{
      width,
      height
    }} />
    <figcaption className={s.ImageFigure__caption}>{children}</figcaption>
  </figure>
}