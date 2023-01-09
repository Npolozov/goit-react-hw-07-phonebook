import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 0;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled(DebounceInput)`
  width: 300px;
  padding: 10px;
`;
