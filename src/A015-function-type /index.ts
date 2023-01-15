type MapStringCallBack = (item: string) => string;
//declaração de tipo

export function mapString(
  array: string[],
  callbackFn: MapStringCallBack,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFn(array[i]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item: string) => item.toUpperCase());
console.log(abcMapped);
