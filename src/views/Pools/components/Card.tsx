import styled from 'styled-components'

const Card = styled.div<{ isActive?: boolean; isFinished?: boolean }>`
  background: ${({ theme }) => theme.card.background};
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  border-radius: 32px;
  display: flex;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};
  border: ${({ isActive, theme }) => (isActive ? `1px solid ${theme.colors.primary}` : `1px solid transparent`)};
  flex-direction: column;
  position: relative;
  max-width: initial;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 31.5%;
  }
`

export default Card
