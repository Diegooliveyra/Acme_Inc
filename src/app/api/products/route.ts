import { description } from '@/utils/description';
import { permittedAdjectives, permittedVerbs } from '@/utils/words';

export async function GET() {
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
    const products = [];
    const randomTitles = await generateRandomTitles(
      permittedVerbs.split(','),
      permittedAdjectives.split(',')
    );

    for (let i = 0; i < 50; i++) {
      products.push({
        id: i + 1,
        url_image: `https://picsum.photos/id/${i}/600/600`,
        description,
        title: randomTitles[i],
        value: Number(
          generateProductsValues(randomTitles[i], description).toFixed(2)
        ),
      });
    }

    return products.sort((a, b) => a.title.length - b.title?.length);
  };

  return Response.json(await generateJson());
}
