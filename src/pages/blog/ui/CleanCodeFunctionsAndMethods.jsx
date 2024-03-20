/* eslint-disable */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

import thatsAllFolksSrc from '../../../shared/assets/blog/thatsAllFolks.png';
import { LinearGradientDesc } from "../../../shared/ui/LinearGradient";
import navbarConfig from "../../../shared/config/navbar.config";
import onScrollToHandler from "../../../features/navbar/lib/useScroll";
import {
  CloseButton,
  HorizontalLine,
  IconWrapper,
  Image, Link,
  ListItem, ListItemStrong, Pre,
  Section, Subtitle, Text, TextStrong,
  TitleH2,
  TitleH3
} from "./BlogStyles";
import blogConfig from "../../../shared/config/blog.config.json";
import MetaBlog from "./MetaBlog";

export default withRouter(props => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { onScrollTo } = onScrollToHandler();

  const onGoBackClick = () => {
    props.history.push('/');
    setTimeout(() => {
      onScrollTo(navbarConfig.sections.blog);
    }, 100);
  };

  return (
    <Section>

      <MetaBlog
        title={blogConfig.cleanCodeFunctionsAndMethods.title}
        subTitle={blogConfig.cleanCodeFunctionsAndMethods.subTitle}
        link={blogConfig.cleanCodeFunctionsAndMethods.link}
        s3imageBucketPath={blogConfig.cleanCodeFunctionsAndMethods.imageSrc}
      />

      <CloseButton>
        <IconWrapper onClick={onGoBackClick}>
          <CloseIcon fontSize='inherit'/>
        </IconWrapper>
      </CloseButton>

      <LinearGradientDesc/>

      <TitleH2>
        {blogConfig.cleanCodeFunctionsAndMethods.title}
      </TitleH2>

      <br/>
      <br/>

      <Image src={`/${blogConfig.cleanCodeFunctionsAndMethods.imageSrc}`}/>

      <br/>
      <br/>
      <br/>

      <Subtitle>
        This article will show you how <strong>clean functions</strong> can help you <strong>avoid duplicated code,
        avoid indentation(or arrow
        code)</strong> and <strong>mark real intent</strong>. After that we’ll show you some <strong>tips for improving
        your functions.</strong>
      </Subtitle>

      <Subtitle>

        The main difference between a method and a function is that a method is on an object. A function is independent
        of an object. In this article <strong>functions and methods are the same thing.</strong>
      </Subtitle>

      <Subtitle>
        <strong>Functions</strong> are often viewed as simple blocks of code, meant to avoid duplicated code.
        <strong>This article will show that clean functions are way more complex than that</strong>, find out more!
      </Subtitle>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <TitleH3>Main Reasons To Create A Function:</TitleH3>

      <br/>
      <br/>

      <TextStrong>1. Avoid Duplicated Code.</TextStrong>

      <ListItem>Duplicated code means there are 2 places which have to be fixed/maintained.</ListItem>
      <ListItem>Usually developer think this is the only reason a function should be created(It’s not).</ListItem>

      <br/>
      <br/>

      <TextStrong>2. Avoid Indentation (or Arrow Code).</TextStrong>

      <Text>Look at the code above:</Text>

      <Pre>{
        `
          if
            if
              if
                while
                  do something
                end while
              endif
            endif
          endif
         `
      }</Pre>

      <TextStrong>Cons:</TextStrong>

      <ListItem>Adds noise, this is a sign that the code is complicated.</ListItem>
      <ListItem>Readability is damaged, more time is needed to understand it.</ListItem>
      <ListItem>Hard to test.</ListItem>
      <ListItem>More chances for having bugs.</ListItem>

      <br/>
      <br/>

      <TextStrong>Solutions:</TextStrong>

      <br/>
      <br/>

      <ListItemStrong>Solution 1: Extract the method.</ListItemStrong>

      <Text>Dirty:</Text>

      <Pre>{
        `
        if
          if
            if
              while
                do something magic
              endwhile
            endif
          endif
        endif
        `
      }</Pre>

      <Text>Clean:</Text>

      <Pre>{
        `
        if
          if
            if
              doSomethingMagic()
            endif
          endif
        endif

        function doSomethingMagic
          while
            do something magic
          end while
        endfunction
        `
      }</Pre>

      <ListItemStrong>Solution 2: Return early.</ListItemStrong>

      <Text>Dirty:</Text>

      <Pre>{
        `
        function isValid
          if condition1
            if condition2
              if condition3
                return true
              endif
            endif
          endif
        endfunction
        `
      }</Pre>

      <Text>Clean:</Text>

      <Pre>{
        `
        function isValid
          if !condition1
            return false
          endif
          if !condition2
            return false
          endif
          return condition3
        endfunction
        `
      }</Pre>


      <ListItemStrong>Solution 3: Throw The Error Fast.</ListItemStrong>

      <Text>Dirty:</Text>

      <Pre>{
        `
        function signUpUser
          if !isUsernameValid(username)
            if !isPasswordValid(password)
              // account is created
            else
              throw new error Username is Invalid
            endif
          else
            throw new error Password is Invalid
          endif
        endfunction
        `
      }</Pre>

      <Text>Clean:</Text>

      <Pre>{
        `
        function signUpUser
          if !isUsernameValid(username)
            throw new error Username is Invalid
          if !isPasswordValid(password)
            throw new error Password is Invalid
          // account is created
        endfunction
        `
      }</Pre>

      <br/>
      <br/>

      <TextStrong>3. Mark The Real Intent.</TextStrong>

      <Text>
        Understanding the intent of a function is really important. Comments are often a good solution, but a good
        name for your function is a better one.
        The function name acts as a short summary, choose it well.
      </Text>

      <Text>Dirty:</Text>

      <Pre>{
        `
        if isUsernameValid(username) && isPasswordValid(password)
          // signUpUser
        `
      }</Pre>

      <Text>Clean:</Text>

      <Pre>{
        `
        if isUserValid(username, password)
          // signUpUser
        function isUserValid
          return isUsernameValid(username) && isPasswordValid(password)
          // account is created
        endfunction
        `
      }</Pre>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <TitleH3>Tips for Improving your Functions:</TitleH3>

      <ListItem>
        <strong>Pick the correct name, and mark real intent. </strong>
        For some tips in doing that read this article about
        <Link href={`/${blogConfig.cleanCodeProperNaming.link}`}>
          Writing Clean Code. Proper Naming for variables, methods and classes.
        </Link>
      </ListItem>

      <ListItem>
        Stick to the <strong>Single Responsibility Rule</strong>.
        Also, picking the name is easy if the function does <strong>only 1 task</strong>.
      </ListItem>

      <ListItem>
        Avoid <strong>Indentation or Arrow Code(showed above how).</strong>
      </ListItem>

      <ListItem>
        <strong>Return early(showed above how).</strong>
      </ListItem>

      <ListItem>
        <strong>Throw the Error Fast(showed above how).</strong>
      </ListItem>

      <ListItem>
        Stick to the <strong>7 rule: Most adults can store between 5 and 9 items in their short-term memory</strong>.
        The function is easier to understand if it doesn’t have more than 7
        variables/conditionals/parameters/etc.
      </ListItem>


      <ListItem>
        <strong>Reduce the number of parameters</strong> as much as you can. Few parameters are
        <strong>easier to understand and test</strong>. A solution here is to pass objects and not variables.
      </ListItem>

      <ListItem>
        <strong>Handle exception at the root level</strong>, don’t allow for try and catch blocks to spawn like baby
        rabbits.
      </ListItem>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>


      <Image src={thatsAllFolksSrc}/>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <Text>
        Have a Great day!
      </Text>


    </Section>
  );
});
