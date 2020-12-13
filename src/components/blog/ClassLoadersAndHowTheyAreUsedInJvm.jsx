/* eslint-disable */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

import classLoadersSrc from '../../assets/blog/blogClassLoaders.jpg';
import { LinearGradientDesc } from "../common/LinearGradient";
import navbarConfig from "../../config/navbarConfig";
import onScrollToHandler from "../../handlers/onScrollToHandler";
import {
  CloseButton,
  HorizontalLine,
  IconWrapper,
  Image,
  ListItemStrong,
  Section, Subtitle, Text,
  TitleH2,
  TitleH3
} from "./BlogStyles";

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

  return (<Section>
      <CloseButton>
        <IconWrapper onClick={onGoBackClick}>
          <CloseIcon fontSize='inherit'/>
        </IconWrapper>
      </CloseButton>

      <LinearGradientDesc/>

      <TitleH2>
        What are the Class Loaders and how they are used in JVM.
      </TitleH2>

      <br/>
      <br/>

      <Image src={classLoadersSrc}/>

      <br/>
      <br/>
      <br/>

      <Subtitle>
        While coding you often use other classes. Those classes can be defined in the current application or imported
        from
        an external library.
      </Subtitle>

      <br/>
      <HorizontalLine/>
      <br/>

      <Text>
        Using those classes implies in many cases a first step, which is to import them before usage. <strong>Modern
        Integrated
        Development Environments (IDE)</strong> are helping developers to notify them when a class is not imported, but
        how does <strong>Java Virtual Machine (JVM)</strong> know where to find them? What is
        the <strong>link</strong> between one class and another class?
      </Text>

      <br/>

      <Text>
        The answer is <strong>Class Loader</strong>. These are responsible to load class files during runtime execution.
        The process of
        loading a class is done <strong>dynamically</strong>, meaning a class will be loaded only when it is used or
        required. Also, this process is done <strong>automatically</strong>, without human intervention. Ok, but where
        are these classes loaded ? These classes are loaded in the memory used by the JVM. And does JVM cares about
        underlying files or file system ? NO, because Class Loaders are also responsible to handle how
        to find the file,resad its content and loading it. So, Class Loaders are responsible
        to <strong>find</strong>, <strong>read</strong> and <strong>load </strong>classes, <strong>on demand</strong>,
        into the memory of the JVM.
      </Text>

      <br/>
      <Text>
        <strong>Java Runtime Environment (JRE)</strong> provides a class named java.lang.ClassLoader which, like the
        name says, loads classes. One class can be loaded <strong>only once</strong> in one ClassLoader and needs to
        be loaded at runtime before executing its code. But this ClassLoader is in the end, another class. Who loads it?
      </Text>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <TitleH3>
        Class loaders used by JVM
      </TitleH3>

      <Text>When JVM is started, 3 class loaders are used:</Text>

      <ListItemStrong>Bootstrap Class Loader</ListItemStrong>
      <ListItemStrong>Extensions Class Loader</ListItemStrong>
      <ListItemStrong>System Class Loader</ListItemStrong>

      <br/>

      <Text>
        <strong>Bootstrap Class Loader</strong> is used to load the core of java libraries located in
        the <strong>{`<JAVA_HOME>/jre/lib`}</strong> directory. This class loader is part of the core of JVM, is written
        in native code
        and is the <strong>parent</strong> of all class loaders. It will load also the java.lang.ClassLoader class.
      </Text>

      <br/>
      <Text>
        <strong>Extensions Class Loader</strong> is used to load the class files in the extensions directories defined
        in <strong>{`<JAVA_HOME>/jre/lib/ext`}</strong>,
        or another directory specified by the java.ext.dirs system property and it is a child of the
        <strong>Bootstrap Class Loader</strong>.
      </Text>

      <br/>
      <Text>
        <strong>System Class Loader</strong> is used to load class files found on java.class.path, which maps to the
        CLASSPATH
        environment
        variable and is the child of the <strong>Extension Class Loader</strong>.
      </Text>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <TitleH3>
        How do Class Loaders work?
      </TitleH3>

      <br/>

      <Text>
        When a class is requested by JVM, the class loader will try to find the class and load the class definition into
        runtime memory using the fully class name (fully package path with the class name). The method responsible for
        this is: <strong>java.lang.ClassLoader.loadClass()</strong>.
      </Text>

      <br/>

      <Text>
        If the file is not loaded in the current class loader, it will delegate the request to the parent class loader.
        These process is done recursively until the file is found or the last parent will not find it. In the last case,
        the child will call <strong>java.net.URLClassLoader.findClass()</strong> to locate the class in the file system.
        In case the
        class is not found you get
        a <strong>java.lang.NoClassDefFoundError</strong> or <strong>java.lang.ClassNotFoundException</strong>.
      </Text>

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
