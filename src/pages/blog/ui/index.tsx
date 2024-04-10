import React, { useState, useEffect, lazy } from 'react';
import styled from 'styled-components';
import stylesConfig from "../../../shared/config/styles.config";
import { useParams } from 'react-router-dom';
import blogConfig from '../../../shared/config/blog.config.json';

const HomeWrapper = styled.div`
  height: 100%;
  color: ${stylesConfig.colors.text};
`;

export const BlogPage = () => {
    const [BlogReactNode, setBlogReactNode] = useState<React.FunctionComponent | null>(null);
    let {articleName} = useParams();
    const blogConfigItem = Object.values(blogConfig).find(blogItem => blogItem.link === articleName);

    useEffect(() => {
        if (!blogConfigItem) {
            return;
        }
        setBlogReactNode(lazy(() => import(`./${blogConfigItem.filename}`)));
    }, []);

    if (!blogConfigItem) {
        return null;
    }

    return (
        <HomeWrapper>
            {BlogReactNode && (<BlogReactNode/>)}
        </HomeWrapper>
    );
};
