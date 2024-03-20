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
  ListItem,
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
        title={blogConfig.cleanCodeProperNaming.title}
        subTitle={blogConfig.cleanCodeProperNaming.subTitle}
        link={blogConfig.cleanCodeProperNaming.link}
        s3imageBucketPath={blogConfig.cleanCodeProperNaming.imageSrc}
      />

      <CloseButton>
        <IconWrapper onClick={onGoBackClick}>
          <CloseIcon fontSize='inherit'/>
        </IconWrapper>
      </CloseButton>

      <LinearGradientDesc/>

      <TitleH2>
        {blogConfig.cleanCodeProperNaming.title}
      </TitleH2>

      <br/>
      <br/>

      <Image src={`/${blogConfig.cleanCodeProperNaming.imageSrc}`}/>

      <br/>
      <br/>
      <br/>

      <Subtitle>
        Proper Naming is Hard and it takes years of development to really understand the power and importance of
        expressing Real Intent.
      </Subtitle>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <TitleH3>Issues with Naming:</TitleH3>

      <ListItem><strong>Misleading names</strong> that mask the real intent.</ListItem>
      <ListItem>Not honoring the <strong>Single Responsibility Principle</strong>.</ListItem>
      <ListItem>Not realizing that <strong>it worths</strong> spending more time for finding the correct
        name.</ListItem>
      <ListItem>Names have a great impact on the <strong>readability of the code</strong>.</ListItem>
      <ListItem>Correct Naming <strong>is really hard</strong>.</ListItem>

      <br/>
      <br/>
      <HorizontalLine/>
      <br/>
      <br/>

      <TitleH3>Naming Rules:</TitleH3>

      <TextStrong>1. Stick to the Format</TextStrong>

      <ListItem>Variables: <strong>verbs and nouns</strong>, but is in favor of using <strong>only
        nouns</strong>.</ListItem>
      <ListItem>Methods: <strong>action + noun</strong>.</ListItem>
      <ListItem>Classes: <strong>only nouns</strong>, not verbs.
        <br/>
        You are creating an instance of that thing.
        <br/>
        Bad: ThrowNotFoundError.
        <br/>
        Good: NotFoundError.
      </ListItem>

      <TextStrong>2. Avoid generic names:</TextStrong>
      <ListItem>
        Variables:
        <br/>
        Bad: data, result.
        <br/>
        Good: product, user.
      </ListItem>
      <ListItem>
        Methods:
        <br/>
        Bad: get, create.
        <br/>
        Good: getAvailableUsers, getProducts, createTicket.
      </ListItem>
      <ListItem>
        Classes:
        <br/>
        Bad: MyUtility, Common, etc.
        <br/>
        Good: User, Ticket, Product.
      </ListItem>

      <TextStrong>3. Use a Consistent Word per Concept:</TextStrong>
      <ListItem>
        Variables:
        <br/>
        Bad: userAddress, userLocation; using all of them.
        <br/>
        Good: using only one of them.
      </ListItem>
      <ListItem>
        Methods:
        <br/>
        Bad: fetchUser, getUser and retrieveUser; using all of them.
        <br/>
        Good: using only one of them.
        <br/>
        Bad: add method in UserService adds an element at the end of an array, add method in ProductService concatenates
        2 arrays.
        <br/>
        Good: renaming them: push, merge.
      </ListItem>
      <ListItem>
        Classes:
        <br/>
        Bad: ProductInfo, ProductData; using all of them.
        <br/>
        Good: using only one of them.
      </ListItem>

      <TextStrong>4. Avoid adding noise:</TextStrong>
      <ListItem>
        Variables:
        <br/>
        Bad: userInstance, isValidBoolean, ageNumber.
        <br/>
        Good: user, isValid, age.
      </ListItem>
      <ListItem>
        Methods:
        <br/>
        Bad: validateUserEmailFormatMethod, getAgeNumber.
        <br/>
        Good: validateEmail, getAge.
      </ListItem>
      <ListItem>
        Classes:
        <br/>
        Bad: UserClass, AppUserClass.
        <br/>
        Good: User.
      </ListItem>

      <TextStrong>5. Avoid side effect:</TextStrong>
      <ListItem>
        Methods:
        <br/>
        Bad: validateEmail will validate the email but also save the email.
        <br/>
        Bad: validateEmail will validate the email but also logout the user if the email is not valid.
        <br/>
        Good: validateEmail should only validate the email.
      </ListItem>
      <ListItem>
        Classes:
        <br/>
        BAD: UserRepository will send Emails.
        <br/>
        BAD: UserRepository will create Products.
        <br/>
        Good: UserRepository will do only the CRUD operations on the DB.
        <br/>
        Just the name UserRepository should prevent others from adding other functionality that doesn't belong there.
      </ListItem>

      <Text><strong>6. Granular and specific as possible</strong>. The Name marks <strong>the intent</strong>.
        <br/>
        Poor naming doesn't mark the real intent.
        <br/>
        There is a thin line between being <strong>as specific as possible</strong> and <strong>avoiding noise</strong>,
        but the <strong>former one</strong> is worse, so <strong>be specific as possible even if you add noise</strong>.
      </Text>
      <ListItem>
        Variables:
        <br/>
        Bad: updatedAt, friends.
        <br/>
        Good: recordLastUpdatedAt, friendsOfCurrentUser.
      </ListItem>
      <ListItem>
        Methods:
        <br/>
        Bad: checkUser; doesn't really marks the intent.
        <br/>
        Good: validateEmail marks the real intent.
        <br/>
        Bad: getUpdatedAt.
        <br/>
        Good: getRecordLastUpdatedAt.
      </ListItem>

      <TextStrong>7. Avoid abbreviations.</TextStrong>
      <ListItem>
        Variables:
        <br/>
        Bad: cUser.
        <br/>
        Good: currentUser.
      </ListItem>
      <ListItem>
        Methods:
        <br/>
        Bad: getU.
        <br/>
        Good: getUser.
        <br/>
        Bad: authUser.
        <br/>
        Is this the authenticatedUser variable?
        <br/>
        Is this the authorizedUser variable?
        <br/>
        Is this the authorizeUser method?
        <br/>
        Is this the authenticateUser method?
        <br/>
        Good: authenticateUser.
      </ListItem>
      <ListItem>
        Classes:
        <br/>
        Bad: DCurrency, CCard.
        <br/>
        Good: DollarCurrency, CreditCard.
        <br/>
        Bad: CurrencyI.
        <br/>
        Is this an Interface? Is this a Class implementation for Israeli/Indonesian/Iceland Currency? Is this Currency
        Index?
        <br/>
        Bad: UserAuth.
        <br/>
        Is this an UserAuthorization? Is this an UserAuthentication?
        <br/>
        Good: UserAuthentication.
      </ListItem>

      <TextStrong>8. Avoid numbers</TextStrong>

      <Text><strong>9. if/and/or/etc.. are signs that the single responsibility principle is not respected</strong>.
        <br/>
        It is a sign that a split should occur.</Text>
      <ListItem>
        Methods:
        <br/>
        Bad: validateEmailAndName.
        <br/>
        Good: validateEmail, validateName.
      </ListItem>
      <ListItem>
        Classes:
        <br/>
        Bad: UserWithEmailValidator.
        <br/>
        Good: User, EmailValidator.
      </ListItem>

      <TextStrong>10. Be Positive</TextStrong>
      <ListItem>
        Variables
        <br/>
        Bad: isDisabled.
        <br/>
        Good: isEnabled.
      </ListItem>
      <ListItem>
        Methods:
        <br/>
        Bad: getNonActiveUsers
        <br/>
        Good: getActiveUsers
      </ListItem>

      <TextStrong>11. How to find the Right Name?</TextStrong>
      <ListItem>
        Methods:
        <br/>
        Verbalize in your own mind what that method does.
        <br/>
        Find similar method names in the existing code and add a word that will differentiate it from them.
        <br/>
        Invest time, it worths.
      </ListItem>
      <ListItem>
        Classes:
        <br/>
        Verbalize in your own mind what the Instance of the Class is.
        <br/>
        Find similar class names in the existing code and add a word that will differentiate it from them.
        <br/>
        Invest time, it worths.
      </ListItem>

      <TextStrong>12. Boolean Variables Format:</TextStrong>
      <Text>
        Bad: valid, validate, open, deleted.
        <br/>
        Good: isValid, shouldValidate, isOpen, isDeleted
      </Text>

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
