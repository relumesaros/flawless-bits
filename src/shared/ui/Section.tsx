import styled from 'styled-components';
import stylesConfig from "../config/styles.config";
import { LinearGradientAsc } from "./LinearGradient";

interface ISectionWrapperStyled {
    $backgroundColor: string;
}

const SectionWrapperStyled = styled.div<ISectionWrapperStyled>`
  position: relative;
  min-height: 100%;
  padding: 80px 17% 60px 17%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${(props => props.$backgroundColor || 'none')};

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 40px 50px 40px 50px;
  }
`;

type ISection = {
    id: string;
    backgroundColor: string;
    children: React.ReactNode;
}
const Section = ({id, backgroundColor, children}: ISection) => {
    return (
        <SectionWrapperStyled $backgroundColor={backgroundColor} id={id}>
            <LinearGradientAsc/>
            {children}
        </SectionWrapperStyled>
    )
}

export default Section;
