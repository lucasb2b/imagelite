'use client'

import { Template, ImageCard } from "@/components"
import { useState } from "react"

export default function GaleriaPage(){

  const image1 = "https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg";
  const image2 = "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=";
  const nome1 = 'Arvore'
  const nome2 = 'Montanha'


  const [codigoImage, setCodigoImage] = useState<number>(2);
  const [urlImage, setUrlImage] = useState<string>(image2);
  const [nomeImage, setNomeImage] = useState<string>(nome2);

  function mudarImagem(){
    if(codigoImage == 1){
      setCodigoImage(2)
      setUrlImage(image2)
      setNomeImage(nome2)
    } else {
      setCodigoImage(1)
      setUrlImage(image1)
      setNomeImage(nome1)
    }
  }

  return(
    <Template>
      <button className='bg-gray-500' onClick={mudarImagem}>Clique para mudar</button>
      <section className="grid grid-cols-4 gap-8">
        <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/01/2025' src={urlImage}/>
        <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/01/2025' src={urlImage}/>
        <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/01/2025' src={urlImage}/>
      </section>
    </Template>
  )
}