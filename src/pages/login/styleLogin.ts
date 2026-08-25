import styled from 'styled-components';



export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #f4f7fb 0%, #eaf2ff 100%);
`;

export const ContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--color-primary);
  color: #fff;
  text-align: center;

  img {
    width: 110%;
    margin-bottom: -80px;
  }

  h1 {
    font-size: 3rem;
  }

  .cor-destaque {
    background: #020024;
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(13, 13, 224, 1) 0%, rgba(0, 212, 255, 1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`;

export const ContainerRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #fff;

  h1 {
    font-size: 2.6rem;
    margin: 0 0 0.5rem;
    background: #020024;
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(13, 13, 224, 1) 0%, rgba(0, 212, 255, 1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    margin: 0 0 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: #64748b;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const StyledInput = styled.input`
  padding: 0.85rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;

export const RememberRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.95rem;
  color: #475569;
`;

export const StyledButton = styled.button`
  padding: 0.9rem 1rem;
  border: none;
  border-radius: 0.75rem;
  background: #2563eb;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #1d4ed8;
  }
`;
