import { description } from '@/utils/description';
import { permittedAdjectives, permittedVerbs } from '@/utils/words';

export async function GET() {
  const getImagesPicSum = async () => {
    const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_IMAGES_API}?page=${randomNumber}&limit=50&width=300`,
      {
        cache: 'no-store',
      }
    );
    return response.json();
  };

  const generateRandomTitles = (arr1: string[], arr2: string[]): string[] => {
    const result: string[] = [];

    while (arr1?.length > 0 || arr2?.length > 0) {
      const randomIndex1 = Math.floor(Math.random() * arr1.length);
      const randomIndex2 = Math.floor(Math.random() * arr2.length);

      if (arr1[randomIndex1] && arr2[randomIndex2]) {
        result.push(arr1[randomIndex1] + ' ' + arr2[randomIndex2]);
      }
      arr1.splice(randomIndex1, 1);
      arr2.splice(randomIndex2, 1);
    }
    return result;
  };

  const generateProductsValues = (title: string, description: string) => {
    return (
      10 + title.length * ((500 - description?.length) / (4 - title.length))
    );
  };

  const generateJson = async () => {
    const images = await getImagesPicSum();
    const randomTitles = await generateRandomTitles(
      permittedVerbs.split(','),
      permittedAdjectives.split(',')
    );
    return images.map((img: any, index: number) => ({
      id: index + 1,
      image: img.download_url,
      description,
      title: randomTitles[index],
      value: generateProductsValues(randomTitles[index], description).toFixed(
        2
      ),
    }));
  };

  return Response.json(await generateJson());
}
