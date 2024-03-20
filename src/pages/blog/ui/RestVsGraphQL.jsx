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
  Image,
  ListItem, ListItem2,
  Section, Subtitle, Text,
  TitleH2,
  TitleH3
} from "./BlogStyles";
import blogConfig  from "../../../shared/config/blog.config.json";
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
        title={blogConfig.restVsGraphql.title}
        subTitle={blogConfig.restVsGraphql.subTitle}
        link={blogConfig.restVsGraphql.link}
        s3imageBucketPath={blogConfig.restVsGraphql.imageSrc}
      />

      <CloseButton>
        <IconWrapper onClick={onGoBackClick}>
          <CloseIcon fontSize='inherit'/>
        </IconWrapper>
      </CloseButton>

      <LinearGradientDesc/>

      <TitleH2>
        {blogConfig.restVsGraphql.title}
      </TitleH2>

      <br/>
      <br/>

      <Image src={`/${blogConfig.restVsGraphql.imageSrc}`}/>

      <br/>
      <br/>
      <br/>

      <Subtitle>
        Deciding between using GraphQL and REST can always be a tough decision, so we’re gonna show the Pros and Cons of
        using each.
      </Subtitle>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <TitleH3>GraphQL</TitleH3>

      <ListItem>Created by Facebook in 2012, released in 2018.</ListItem>
      <ListItem>Query language and is agnostic of the language you use.</ListItem>
      <ListItem>Deals with Resolvers.</ListItem>
      <ListItem2>
        One request can call many resolvers to construct a nested response.
      </ListItem2>
      <ListItem>To differentiate a read vs. a write it uses Mutation and Query.</ListItem>


      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <TitleH3>GraphQL Pros</TitleH3>

      <ListItem>
        Client can model the request to contain nested entities and custom subfields.
        <br/>
        => Less network data.
        <br/>
        => Less code in Backend to support this.
        <br/>
        => Makes rapid product iterations on the front-end possible, meaning client-side changes
        without messing around with the server.
      </ListItem>
      <ListItem>Avoids over-fetching.</ListItem>
      <ListItem>Avoids under-fetching.</ListItem>
      <ListItem>Prevents multiple API calls.</ListItem>
      <ListItem>Self-documenting:</ListItem>

      <ListItem2>
        Defines the capabilities of APIs using a strong type system.
      </ListItem2>
      <ListItem2>
        Schema is displayed to the Client - Schema Definition Language (SDL). => the Frontend and Backend teams
        can start work in parallel because the 'contract' is established.
      </ListItem2>
      <ListItem2>But the same thing is achieved in REST using Swagger.</ListItem2>
      <ListItem2>
        GraphQL Faker can be used to mock data.
      </ListItem2>

      <ListItem>The client has to respect the schema type or an error is thrown => Correct usage of Schema Definition
        Language is enforced in UI.</ListItem>
      <ListItem>Involves both the Frontend and the Backend Developers in understanding the GraphQL contract.</ListItem>
      <ListItem>Plenty of client and server libraries for GraphQL(ex. GraphQL explorer).</ListItem>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <TitleH3>GraphQL Cons</TitleH3>

      <ListItem>Caching:</ListItem>
      <ListItem2>Supports application and endpoint caching, but network caching is not supported.</ListItem2>
      <ListItem2>Network caching tools like Varnish, Squid, Fastly, etc. entirely useless.</ListItem2>
      <ListItem2>Facebook has released DataLoader which can make GraphQL client caching easier, but clients not using
        NodeJS will have to port the logic, or continue to roll their own.</ListItem2>

      <ListItem>Does not support versioning, so backward compatibility can be achieved only by:</ListItem>
      <ListItem2>Creating new APIs.</ListItem2>
      <ListItem2>Implementing a mechanisms that enforces client update to latest version.</ListItem2>


      <ListItem>Logic for GraphQL Mutations and Queries goes in the FE.It means that you may end up with a client
        architecture that:</ListItem>
      <ListItem2>Is similar to how a Backend ORM looks(Services, Repositories, Queries).</ListItem2>
      <ListItem2>Has duplicated Queries/Mutations in many components and it's a Hell when you end up having many similar
        Queries/Mutations present in multiple components.</ListItem2>

      <ListItem>To reuse code written for Queries/Mutations you may end up with components that do Over-fetching. For
        Queries an incomplete solution to alleviate this issue is to use GraphQL Fragments.</ListItem>
      <ListItem>Not the best solution for simple applications.</ListItem>

      <ListItem>Error handling gives you a 200 OK status code. Handled as part of the response body under a special
        errors object.</ListItem>
      <ListItem>JSON representation only.</ListItem>
      <ListItem>Only a single tool is used predominantly: GraphiQL</ListItem>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <TitleH3>REST(Representational state transfer)</TitleH3>

      <ListItem>Founded in 2010.</ListItem>
      <ListItem>Deals with Route Handlers.</ListItem>
      <ListItem2>One request calls exactly one route handler.</ListItem2>
      <ListItem>To differentiate a read vs. a write it uses HTTP verbes: GET, POST, PUT, OPTION, etc.</ListItem>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <TitleH3>REST Pros</TitleH3>

      <ListItem>Is scalable; Architecture decouples client and server.</ListItem>
      <ListItem>Offers a great deal of flexibility.</ListItem>
      <ListItem>The Endpoint is the identity of the object. In GraphQL the identity is separate from how you fetch
        it.</ListItem>
      <ListItem>Source of truth for entity stays in only 1 place.</ListItem>
      <ListItem2>this means that the entity logic is present more in BE, and there are a lot of mature tools for many
        programming languages that implement ORMs behind the hood.</ListItem2>
      <ListItem>Server determines the shape and size of the resource.</ListItem>
      <ListItem>Caching:</ListItem>
      <ListItem2>supports application, network and endpoint caching.</ListItem2>
      <ListItem2>note that network becomes useless if the endpoint caching is very customisable.
        <br/>
        ex.
        <br/>
        adding a selection of subfields will make the endpoint more customisable, but the network caching less efficient
        <br/>
        GET /birds?fields=name,age
        <br/>
        GET /birds?fields=name
        <br/>
        are 2 different request for network cache.
      </ListItem2>

      <ListItem>Supports versioning.</ListItem>
      <ListItem2>Which can also be a pain in the ass.</ListItem2>
      <ListItem>Error handling returns the correct status code(40\*).</ListItem>
      <ListItem>Supports multiple data formats.</ListItem>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <TitleH3>REST Cons</TitleH3>

      <ListItem>Multiple requests to fetch related and nested entities.</ListItem>
      <ListItem2>Or you have to write another api that does this.</ListItem2>

      <ListItem>Over-fetching.</ListItem>
      <ListItem2>Client downloads more information than needed.</ListItem2>
      <ListItem2>A workaround is to write logic which allows requests specify the required fields.
        <br/>
        GET user?field=name,id,body
      </ListItem2>

      <ListItem>Under-fetching.</ListItem>
      <ListItem2>Client downloads less information than needed.</ListItem2>

      <ListItem>No support for nested entities; Logic has to be written for this.</ListItem>
      <ListItem>
        Usually the Backend developer has stronger knowledge about
        the REST contract than the Frontend developer.
      </ListItem>

      <ListItem>
        To have the entities contract between Client and Backend,
        you have to use Swagger.
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
