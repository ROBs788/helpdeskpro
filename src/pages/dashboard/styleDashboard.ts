import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #f4f7fb 0%, #eaf2ff 100%);
`;

export const ContainerLeft = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 30vw;
  background: var(--color-primary);
  color: #fff;
  text-align: center;

  img {
    width: 100%;
  }


`;
