import { Container } from './styles'

export function Tag({ icon: Icon, title, ...rest }) {
  return (
    <Container {...rest}>
      {title}
      {Icon && <Icon size={20} color='#FF859B'/>}
    </Container>
  )
}