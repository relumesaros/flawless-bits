import Text from "./Text";
import SubText from "./SubText";
import stylesConfig from "../config/styles.config";
import styled from 'styled-components';

interface ITeamMemberWrapper {
    $imageUrl: string;
}

const TeamMemberWrapper = styled.div<ITeamMemberWrapper>`
  height: ${stylesConfig.teamMember.desktop.height};
  width: ${stylesConfig.teamMember.desktop.width};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url("${props => props.$imageUrl}") no-repeat center top;
  background-size: cover;
  opacity: 0.9;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: ${stylesConfig.teamMember.mobile.height};
    width: ${stylesConfig.teamMember.mobile.width};
  }
`;

const TeamMemberContent = styled.div`
  margin: 0;
  height: 60px;
  background: #ffffffbf;
  padding: 15px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: 40px;
    padding: 5px;
  }
`;

interface ITeamMember {
    name: string;
    imageUrl: string;
    role: string
}

const TeamMember = (
    {
        name,
        imageUrl,
        role,
    }: ITeamMember
) => {
    return (
        <TeamMemberWrapper $imageUrl={imageUrl}>
            <TeamMemberContent>
                <Text>{name}</Text>
                <SubText>
                    <strong>{role}</strong>
                </SubText>
            </TeamMemberContent>
        </TeamMemberWrapper>
    );
};


export default TeamMember
