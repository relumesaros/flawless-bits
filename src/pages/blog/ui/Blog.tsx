import React from 'react';
import styled from 'styled-components';

import onScrollToHandler from '../../../features/navbar/lib/useScroll';
import navbarConfig from '../../../shared/config/navbar.config';
import blogConfig from '../../../shared/config/blog.config.json';

// import {
//   ScrollArrowDown,
// } from '../common/ScrollArrow';
import stylesConfig from '../../../shared/config/styles.config';

const SectionOurTeam = styled.div`
  position: relative;
  min-height: 100%;
  padding: 120px 5% 60px 5%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 50px 0 40px 0;
  }
`;

const BlogContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 60px 0 20px 0;
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 60px;
  grid-template-columns: repeat(auto-fit, 500px);
  justify-content: center;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 30px 0 20px 0;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-row-gap: 25px;
  }
`;

const Title = styled.h2`
  text-align: center;
`;

interface IBlogCardWrapper {
    $imageSrc: string;
}

const BlogCardWrapper = styled.a<IBlogCardWrapper>`
  height: 300px;
  width: 500px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: flex-end;
  background: url("${props => props.$imageSrc}") no-repeat center top;
  background-size: contain;
  opacity: 0.9;
  
  transition: all 0.1s linear;
  
  &:hover {
    opacity: 0.7;
  }
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) { 
    height: 200px;
    width: 350px;
  }
`;

const BlogCardContent = styled.div`
  margin: 0;
  height: fit-content;
  min-height: 90px;
  background: #ffffffc7;
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  padding: 15px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    min-height: 60px;
    padding: 10px;
  }
`;

const BlogCardTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1px;
  text-align: center;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 5px 0 0 0;
    font-size: 10px;
  }
`;

const BlogCardSubTitle = styled.p`
  margin: 10px 0 0 0;
  font-size: 14px;
  text-align: center;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 8px;
    margin: 5px 0 0 0;
  }
`;

// const BlogCard = withRouter(({ imageSrc, title, subTitle, link, history }) => {
//   const onClick = () => {
//     history.push(`/${link}`);
//   };
//
//   return (
//     <BlogCardWrapper
//       onClick={onClick}
//       imageSrc={imageSrc}
//     >
//       <BlogCardContent>
//         <BlogCardTitle>{title}</BlogCardTitle>
//         <BlogCardSubTitle>{subTitle}</BlogCardSubTitle>
//       </BlogCardContent>
//     </BlogCardWrapper>
//   );
// });

const Blog = () => {
  const { onScrollTo } = onScrollToHandler();

  return (
    <SectionOurTeam id={navbarConfig.sections.blog}>
      {/*<LinearGradientDesc/>*/}

      {/*<ScrollArrowUpPosition>*/}
      {/*  <ScrollArrowUp1*/}
      {/*    tooltipText="Go to How it Works"*/}
      {/*    onCallback={() => onScrollTo(navbarConfig.sections.howItWorks)}*/}
      {/*  />*/}
      {/*</ScrollArrowUpPosition>*/}

      <Title>Blog.</Title>

      <BlogContainer>
        {/*{Object.keys(blogConfig).map((key) => {*/}
        {/*  const blogConfigItem = blogConfig[key];*/}
        {/*  return (*/}
        {/*    <BlogCard*/}
        {/*      key={blogConfigItem.title}*/}
        {/*      title={blogConfigItem.title}*/}
        {/*      subTitle={blogConfigItem.subTitle}*/}
        {/*      link={blogConfigItem.link}*/}
        {/*      imageSrc={`/${blogConfigItem.imageSrc}`}*/}
        {/*    />*/}
        {/*  );*/}
        {/*})}*/}
      </BlogContainer>

      {/*<ScrollArrowDown>*/}
      {/*  <ScrollArrowDown1*/}
      {/*    tooltipText="Go to Contact Us"*/}
      {/*    onCallback={() => onScrollTo(navbarConfig.sections.contactUs)}*/}
      {/*  />*/}
      {/*</ScrollArrowDown>*/}
    </SectionOurTeam>
  );
};
export default Blog;
