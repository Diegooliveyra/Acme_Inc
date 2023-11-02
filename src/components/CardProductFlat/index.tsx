/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import * as S from './styles'

import { moneyFormat } from '@/utils/moneyFormat'
import { ReactSVG } from 'react-svg'

import { IProductoDTO } from '@/types/product'

export type CardFlatProps = {
  handleRemove: () => void
  handleDecrease?: () => void
  handleIncrease?: () => void
  onClick: () => void
  data: IProductoDTO
  quantity?: number
}

const CardProductFlat = ({
  data,
  handleRemove,
  quantity,
  handleDecrease,
  handleIncrease,
  onClick,
}: CardFlatProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.CardImage>
        <Image src={data?.url_image} alt={data?.title} fill objectFit="cover" />
      </S.CardImage>
      <S.CardInfo>
        <p>{data?.title}</p>
        <h3>{moneyFormat(data?.value)} </h3>

        {quantity ? (
          <S.AmountProducts>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleDecrease && handleDecrease()
              }}
            >
              {'-'}
            </button>
            <span>{quantity}</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleIncrease && handleIncrease()
              }}
            >
              {' '}
              {'+'}{' '}
            </button>
          </S.AmountProducts>
        ) : null}
      </S.CardInfo>

      <S.RemoveButton
        onClick={(e) => {
          e.stopPropagation()
          handleRemove && handleRemove()
        }}
      >
        <ReactSVG src="/assets/icons/trash.svg" />
      </S.RemoveButton>
    </S.Container>
  )
}

export default CardProductFlat
