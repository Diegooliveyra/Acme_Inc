/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import * as S from './styles'

import { moneyFormat } from '@/utils/moneyFormat'
import { ReactSVG } from 'react-svg'
import { useContext, useState } from 'react'
import { LoginContext } from '@/contexts/login'
import { IProductoDTO } from '@/types/product'

export type CardFlatProps = {
  handleRemove: () => void
  data: IProductoDTO
}

const CardProductFlat = ({ data, handleRemove }: CardFlatProps) => {
  return (
    <S.Container>
      <S.CardImage>
        <Image src={data?.url_image} alt={data?.title} fill objectFit="cover" />
      </S.CardImage>
      <S.CardInfo>
        <p>{data?.title}</p>
        <h3>{moneyFormat(data?.value)} </h3>
      </S.CardInfo>

      <S.RemoveButton onClick={handleRemove}>
        <ReactSVG src="/assets/icons/trash.svg" />
      </S.RemoveButton>
    </S.Container>
  )
}

export default CardProductFlat
