import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import navbarConfig from '../../../shared/config/navbar.config';
import blogConfig from '../../../shared/config/blog.config.json';
import SectionWrapper from "../../../shared/ui/Section";
import stylesConfig from '../../../shared/config/styles.config';
import { ScrollArrowDown, ScrollArrowUp } from "../../../shared/ui/ScrollArrow";
import Header2 from "../../../shared/ui/Header2";

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


interface IBlogCard {
    imageSrc: string;
    title: string;
    subTitle: string;
    link: string;
}

const BlogCard = ({imageSrc, title, subTitle, link}: IBlogCard) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/blog/${link}`);
    };

    return (
        <BlogCardWrapper
            onClick={onClick}
            $imageSrc={imageSrc}
        >
            <BlogCardContent>
                <BlogCardTitle>{title}</BlogCardTitle>
                <BlogCardSubTitle>{subTitle}</BlogCardSubTitle>
            </BlogCardContent>
        </BlogCardWrapper>
    );
};

const Blog = () => {
    return (
        <SectionWrapper id={navbarConfig.sections.blog} backgroundColor={stylesConfig.colors.white}>
            <ScrollArrowUp scrollDestination={navbarConfig.sections.howItWorks}/>
            <Header2>Blog</Header2>
            <BlogContainer>
                {Object.keys(blogConfig).map((key) => {
                    // @ts-ignore
                    const blogConfigItem = blogConfig[key] as any;
                    return (
                        <BlogCard
                            key={blogConfigItem.title}
                            title={blogConfigItem.title}
                            subTitle={blogConfigItem.subTitle}
                            link={blogConfigItem.link}
                            imageSrc={blogConfigItem.imageSrc}
                        />
                    );
                })}
            </BlogContainer>

            <ScrollArrowDown scrollDestination={navbarConfig.sections.contactUs}/>
        </SectionWrapper>
    );
};
export default Blog;
