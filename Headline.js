import styled from 'styled-components'

const getHeadlineSize = (level) => {
  let sizes = ['96', '57', '46', '32', '23', '19']
  return sizes[level - 1]
}

const getTag = (level) => `h${level}`

const StyledHeadline = styled(({ level }) => getTag(level))`
  font-size: ${({ level }) => `${getHeadlineSize(level)}px`};
  font-family: 'Merriweather Sans', sans-serif;
  text-rendering: optimizeLegibility;
  font-weight: 600;
`

const Headline = ({ level = 1, ...props }) => (
  <StyledHeadline as={`h${level}`}  level={level} {...props} />
)

export default Headline
