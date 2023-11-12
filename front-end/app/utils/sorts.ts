export const mapOrder = <Type, Key extends keyof Type>(
  originalArray: Type[],
  orderArray: string[],
  key: Key
) => {
  if (!originalArray || !orderArray || !key) return []

  const clonedArray = [...originalArray]
  const orderedArray = clonedArray.sort((a, b) => {
    return (
      orderArray.indexOf(a[key] as string) -
      orderArray.indexOf(b[key] as string)
    )
  })

  return orderedArray
}
