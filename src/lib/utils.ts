export const priceFormat = (price: number) => {
    return new Intl.NumberFormat("en-EN").format(price)
}

export const sanitizedNonDigits = (value: string) => {
    const regex = /[^0-9DMY/]/g
    return value.replace(regex, "")
}