/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import * as S from './styles'

import { moneyFormat } from '@/utils/moneyFormat'
import { ReactSVG } from 'react-svg'
import { useContext, useEffect, useState } from 'react'
import { LoginContext } from '@/contexts/login'

export type CardProps = {
  id?: number
  title: string
  url_image: string
  value: number
  handleFavorite: (favorite: boolean) => void
  onClick: () => void
  favorite: boolean
}

const CardProduct = ({ title, url_image, value, handleFavorite, onClick, favorite }: CardProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>()
  const { login, setLogin } = useContext(LoginContext)

  useEffect(() => {
    setIsFavorite(favorite)
  }, [favorite])

  return (
    <S.Container onClick={onClick}>
      <S.CardImage>
        {login?.isLogged ? (
          <S.FavoriteButton
            isFavorite={favorite}
            onClick={(e) => {
              e.stopPropagation()
              handleFavorite(!isFavorite)
              setIsFavorite(!isFavorite)
            }}
          >
            <ReactSVG src={'/assets/icons/heart.svg'} role={'Icon'} wrapper="span" />
          </S.FavoriteButton>
        ) : null}

        <Image src={url_image} alt={title} fill objectFit="cover" />
      </S.CardImage>
      <S.CardInfo>
        <p>{title}</p>
        <h3>{moneyFormat(value)} </h3>
      </S.CardInfo>
    </S.Container>
  )
}

export default CardProduct
