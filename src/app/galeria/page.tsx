'use client'

import { Template, ImageCard } from "@/components"
import { useImageService } from "@/resources/image/image.service"
import { useState } from "react"

export default function GaleriaPage(){

  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);

  async function searchImages(){
    const result = await useService.buscar()
    setImages(result);
    console.table(result);
  }

  return(
    <Template>
      <button className='bg-gray-500' onClick={searchImages}>Clique para mudar</button>
      <section className="grid grid-cols-4 gap-8">
        <ImageCard nome="{nomeImage}" tamanho='10MB' dataUpload='01/01/2025' src=""/>
      </section>
    </Template>
  )
}