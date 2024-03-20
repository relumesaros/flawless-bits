import styled from 'styled-components';
import stylesConfig from "../config/styles.config";

const IconText = styled.p`
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 8px;
    margin-top: 5px;
  }
`;


const IconWrapper = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex-shrink: 0;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: 60px;
  }
`;

interface ITechnologyCard {
    technologyName: string;
    Icon: () => JSX.Element;
}

const TechnologyCard = ({technologyName, Icon}: ITechnologyCard) => {
    return (
        <IconWrapper>
            <Icon/>
            <IconText>{technologyName}</IconText>
        </IconWrapper>
    )
}

export default TechnologyCard;
