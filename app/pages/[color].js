import colors from '../data/colors.json'

export async function getStaticPaths() {
  // loop through the colors array
  const paths = colors.map(color => ({
    // return an object with params.color set to the color's name
    params: { color: color.name }
  }))

  // Paths will look like this:
  // [
  //   { params: { color: 'Marsala' } },
  //   { params: { color: 'Illuminating'} }
  //   ...
  // ]
  return { paths, fallback: false }
}
