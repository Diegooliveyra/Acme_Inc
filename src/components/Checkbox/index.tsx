import { ReactSVG } from 'react-svg';
import * as S from './styles';

interface CheckboxProps {
  useLabel?: boolean;
  checked: boolean;
  handleToggle: any;
  useCheckDash?: boolean;
  text?: string;
  disabled?: boolean;
}

const Checkbox = ({
  useLabel = false,
  checked,
  handleToggle,
  useCheckDash = false,
  text,
  disabled = false,
}: CheckboxProps) => {
  return (
    <S.CheckboxContainer onClick={disabled ? null : handleToggle}>
      {checked ? (
        useCheckDash ? (
          <ReactSVG src="/assets/icons/check-dash.svg" />
        ) : (
          <ReactSVG src="/assets/icons/check-select.svg" />
        )
      ) : (
        <ReactSVG src="/assets/icons/check-unselect.svg" />
      )}
      {useLabel ? <p>Selecionar todos</p> : <></>}
      {text && text != '' ? <S.Text>{text}</S.Text> : <></>}
    </S.CheckboxContainer>
  );
};

export default Checkbox;
