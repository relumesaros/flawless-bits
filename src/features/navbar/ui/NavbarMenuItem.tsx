import styled from 'styled-components';
import stylesConfig from "../../../shared/config/styles.config";

interface INavbarMenuItemWrapper {
    $isActive: boolean;
}

const NavbarMenuItemWrapper = styled.a<INavbarMenuItemWrapper>`
  font-size: 12px;
  font-weight: 700;
  margin: 0 10px;
  padding: 10px 0;
  cursor: pointer;
  flex-shrink: 0;
  color: ${props => (props.$isActive ? stylesConfig.colors.blue : 'black')};
  border-top: 2px solid transparent;
  border-bottom: 2px solid ${props => (props.$isActive ? stylesConfig.colors.blue : 'transparent')};
  transition: all 0.1s ease-in-out;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 0 3px;
    font-size: 6px;
  }
`;

interface INavbarMenuItem {
    text: string;
    isActive: boolean;

    onCallback(): void
}

export const NavbarMenuItem = ({text, isActive, onCallback}: INavbarMenuItem) => {
    return (
        <NavbarMenuItemWrapper $isActive={isActive} onClick={onCallback}>
            {text}
        </NavbarMenuItemWrapper>
    );
};
