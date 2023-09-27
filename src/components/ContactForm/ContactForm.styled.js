import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  border: 1px solid black;
  padding: 10px;
`;
export const StyledBtn = styled.button`
  border: 1px solid black;
  padding: 4px;
  border-radius: 4px;
  max-width: fit-content;
`;
export const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;
