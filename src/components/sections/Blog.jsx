import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { LinearGradientDesc } from '../common/LinearGradient';
import onScrollToHandler from '../../handlers/onScrollToHandler';
import navbarConfig from '../../config/navbarConfig';
import classLoadersSrc from '../../assets/blog/classLoaders.jpg';
import blogUseContextAndReducerSrc from '../../assets/blog/blogUseContextAndReducer.png';
import blogRestVsGraphQLSrc from '../../assets/blog/blogRestVsGraphQL.png';
import {
  ScrollArrowDown,
  ScrollArrowDownPosition,
  ScrollArrowUp,
  ScrollArrowUpPosition,
} from '../common/ScrollArrow';
import stylesConfig from '../../config/stylesConfig';

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

const blogConfig = {
  classLoadersJVM: {
    title: 'Class Loaders and how they are used in JVM',
    subTitle: 'What are the Class Loaders and how they are used in JVM? After reading this you will know the differences between Class Loader, Bootstrap Class Loader, Extensions Class Loader and System Class Loader.',
    imageSrc: classLoadersSrc,
    link: '/blog/class-loaders-and-how-they-are-used-in-jvm'
  },
  restVsGraphQL: {
    title: 'REST vs. GraphQL: A Critical Review.',
    subTitle: 'Deciding between using GraphQL and REST can always be a tough decision, so we’re gonna show the Pros and Cons of using each.',
    imageSrc: blogRestVsGraphQLSrc,
    link: '/blog/rest-vs-graphql'
  },
  useContextAndReducer: {
    title: 'Basic ReactJs Example with useContext() and useReducer() Hooks.',
    subTitle: 'State management can always be problematic and Redux came up with a really good solution for this. But Redux can now be evaded and you can resort to ReactJS native hooks: useReducer() and useContext().',
    imageSrc: blogUseContextAndReducerSrc,
    link: '/blog/reactjs-with-context-and-reducer-hooks-example'
  }
};

const BlogCardWrapper = styled.a`
  height: 300px;
  width: 500px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: flex-end;
  background: url("${props => props.imageSrc}") no-repeat center top;
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
  letter-spacing: 2px;
  text-align: center;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 5px 0 0 0;
    font-size: 10px;
    letter-spacing: 1px;
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

const BlogCard = withRouter(({ imageSrc, title, subTitle, link, history }) => {
  const onClick = () => {
    history.push(link);
  };

  return (
    <BlogCardWrapper
      onClick={onClick}
      imageSrc={imageSrc}
    >
      <BlogCardContent>
        <BlogCardTitle>{title}</BlogCardTitle>
        <BlogCardSubTitle>{subTitle}</BlogCardSubTitle>
      </BlogCardContent>
    </BlogCardWrapper>
  );
});

const Blog = () => {
  const { onScrollTo } = onScrollToHandler();

  return (
    <SectionOurTeam id={navbarConfig.sections.blog}>
      <LinearGradientDesc/>

      <ScrollArrowUpPosition>
        <ScrollArrowUp
          tooltipText="Go to How it Works"
          onCallback={() => onScrollTo(navbarConfig.sections.howItWorks)}
        />
      </ScrollArrowUpPosition>

      <Title>Blog.</Title>

      <BlogContainer>
        <BlogCard {...blogConfig.classLoadersJVM}/>
        <BlogCard {...blogConfig.restVsGraphQL}/>
        <BlogCard {...blogConfig.useContextAndReducer}/>
      </BlogContainer>

      <ScrollArrowDownPosition>
        <ScrollArrowDown
          tooltipText="Go to Contact Us"
          onCallback={() => onScrollTo(navbarConfig.sections.contactUs)}
        />
      </ScrollArrowDownPosition>
    </SectionOurTeam>
  );
};
export default Blog;
