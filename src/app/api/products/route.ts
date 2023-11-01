import { generateRandomNumber } from '@/utils/generateRandomNumber'
import { permittedAdjectives, permittedVerbs } from '@/utils/words'
import { loremIpsum } from 'react-lorem-ipsum'

export async function GET() {
  const generateRandomTitles = (array1: string[], array2: string[]): string[] => {
    const result: string[] = []

    while (array1?.length > 0 || array2?.length > 0) {
      const randomIndex1 = Math.floor(Math.random() * array1.length)
      const randomIndex2 = Math.floor(Math.random() * array2.length)

      if (array1[randomIndex1] && array2[randomIndex2]) {
        result.push(array1[randomIndex1] + ' ' + array2[randomIndex2])
      }
      array1.splice(randomIndex1, 1)
      array2.splice(randomIndex2, 1)
    }
    return result
  }

  const generateProductsValues = (title: string, description: string) => {
    return 10 + title.length * ((500 - description?.length) / (4 - title.length))
  }

  const generateJson = async () => {
    const products = []

    const randomTitles = generateRandomTitles(
      permittedVerbs.split(','),
      permittedAdjectives.split(','),
    )

    for (let index = 0; index < 50; index++) {
      const description = loremIpsum({
        p: 1,
        avgWordsPerSentence: generateRandomNumber(10, 8),
        avgSentencesPerParagraph: generateRandomNumber(15, 10),
      })
      products.push({
        id: index + 1,
        url_image: `https://picsum.photos/id/${index}/600/600`,
        description,

        title: randomTitles[index],
        value: Number(generateProductsValues(randomTitles[index], description.join()).toFixed(2)),
      })
    }

    return products.sort((a, b) => a.title.length - b.title?.length)
  }

  return Response.json(await generateJson())
}
