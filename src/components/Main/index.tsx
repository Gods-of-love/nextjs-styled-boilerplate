import * as S from './styles'

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'NextJS, TypeScript & Styled Components',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
