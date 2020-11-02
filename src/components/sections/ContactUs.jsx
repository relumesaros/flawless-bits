import React, { useState, createRef } from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import Joi from 'joi';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

import AWS from 'aws-sdk';
import { LinearGradientDesc } from '../common/LinearGradient';
import onScrollToHandler from '../../handlers/onScrollToHandler';
import navbarConfig from '../../config/navbarConfig';
import {
  ScrollArrowUp,
  ScrollArrowUpPosition,
} from '../common/ScrollArrow';
import InputFieldText from '../common/InputFieldText';
import InputFieldTextarea from '../common/InputFieldTextarea';
import ButtonCommon, { ButtonCommonStyles } from '../common/ButtonCommon';
import toastrService from '../../service/toastrService';
import {
  getFieldValuesCloneWithoutErrorsForSection,
  mapErrorToFieldValues,
  focusOnFirstFieldValueNameWithError,
} from '../../service/formService';

import stylesConfig from '../../config/stylesConfig';
import requestStatus from '../../constants/requestStatus';
import LoaderTransparent from '../common/LoaderTransparent';

const SES = new AWS.SES({
  region: 'us-east-1',
  accessKeyId: 'AKIA4EJLBU3B4BD5XWN5',
  secretAccessKey: '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',
});

const Section = styled.div`
  position: relative;
  height: 100%;
  padding: 60px 0 0 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    padding: 50px 0 0 0;
  }
`;

const Content = styled.div`
  width: 100%
  height: 100%;
  padding: 0 10% 0 10%;
  box-sizing: border-box;
  
  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    padding: 0 10% 0 10%;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TileWrapper = styled.div`
  margin-bottom: 10px;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    margin-bottom: 0;
  }
`;

const ButtonCommonWrapper = styled.div`
  width: 300px;
  height: 60px;
  position: relative;
  margin: 20px 0 10px 0;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    width: 180px;
    height: 40px;
    margin: 10px 0 5px 0;
  }
`;

const FooterWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  box-sizing: border-box;
  background-color: ${stylesConfig.colors.graySection};
  border-top: 1px solid #f1f0f0;
  letter-spacing: 2px;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    height: 100px;
    letter-spacing: 0px;
  }
`;

const FooterContentContainer = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: auto auto;
  padding: 0 5px;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    padding: 0 2px;
    grid-column-gap: 3px;
  }
`;

const Row = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  
  transition: all 0.5s ease-in-out;
  
  &:hover {
    color: ${stylesConfig.colors.textHover};
  }

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    font-size: 7px;
  }
`;

const Icon = styled.div`
  display: flex;
  font-size: 20px;
  
  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    font-size: 10px;
  }
`;

const Text = styled.p`
  margin: 5px 5px;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    margin: 3px 5px;
  }
`;

const SubtitleContent = styled.div`
  padding: 15px 0 0 0;
  
  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    padding: 5px 0 0 0;
  }
`;

const Subtitle = styled.p`
  margin: 15px 0;
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 30px;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    margin: 3px;
    font-size: 10px;
    margin: 7px 0;
    letter-spacing: 1px;
    line-height: 15px;
  }
`;

const FooterTitle = styled.h4`
  margin: 10px 0;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    margin: 5px 0 3px 0;
  }
`;

const fieldValuesDefault = {
  name: {
    value: '',
    error: null,
    ref: createRef(),
  },
  email: {
    value: '',
    error: null,
    ref: createRef(),
  },
  companyName: {
    value: '',
    error: null,
    ref: createRef(),
  },
  description: {
    value: '',
  },
};

const schema = Joi.object().keys({
  name: Joi.string().min(2).max(30).required().label('Name'),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .label('Email'),
});

const getFieldValuesValidated = fieldValues => {
  let fieldValuesValidated = getFieldValuesCloneWithoutErrorsForSection(
    fieldValues
  );

  const result = schema.validate(
    {
      name: fieldValues.name.value,
      email: fieldValues.email.value,
    },
    { abortEarly: false }
  );

  if (result.error) {
    fieldValuesValidated = mapErrorToFieldValues(
      fieldValuesValidated,
      result.error.details
    );
  }

  return {
    isValid: !result.error,
    fieldValuesValidated,
  };
};

const validateFieldValues = (fieldValues, setFieldValues, setIsValid) => {
  const { fieldValuesValidated, isValid } = getFieldValuesValidated(
    fieldValues
  );

  setFieldValues(fieldValuesValidated);
  setIsValid(isValid);
};

const validateFieldValuesDebounced = debounce(
  (fieldValues, setFieldValues, setIsValid) =>
    validateFieldValues(fieldValues, setFieldValues, setIsValid),
  500
);

const ContactUs = () => {
  const { onScrollTo } = onScrollToHandler();

  const [fieldValues, setFieldValues] = useState(fieldValuesDefault);
  const [isValid, setIsValid] = useState(true);
  const [messageRequestStatus, setMessageRequestStatus] = useState(
    requestStatus.initial
  );

  const onFieldUpdate = e => {
    const fieldValuesClone = { ...fieldValues };
    fieldValuesClone[e.target.name] = {
      ...fieldValuesClone[e.target.name],
      value: e.target.value,
    };
    setFieldValues(fieldValuesClone);
    validateFieldValuesDebounced(fieldValuesClone, setFieldValues, setIsValid);
  };

  const onSendContact = () => {
    const {
      fieldValuesValidated,
      isValid: isValidNew,
    } = getFieldValuesValidated(fieldValues);
    if (!isValidNew) {
      setFieldValues(fieldValuesValidated);
      setIsValid(isValidNew);
      focusOnFirstFieldValueNameWithError(fieldValuesValidated);
      return;
    }

    setMessageRequestStatus(requestStatus.loading);

    const params = {
      Source: 'aurelian.mesaros@gmail.com',
      Destination: {
        ToAddresses: ['aurelian.mesaros@gmail.com'],
      },
      Message: {
        Subject: {
          Data: 'New Contact Request',
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: `
              Name: ${fieldValuesValidated.name.value};
              Email: ${fieldValuesValidated.email.value};
              Company Name: ${fieldValuesValidated.companyName.value};
              Project Description: ${fieldValuesValidated.description.value};
              
            `,
            Charset: 'UTF-8',
          },
        },
      },
    };

    SES.sendEmail(params, (err, data) => {
      if (err) {
        // eslint-disable-next-line
        console.error(err.message);
        setMessageRequestStatus(requestStatus.error);
      } else {
        setFieldValues(fieldValuesDefault);
        toastrService.success('Message was successfully sent');
        // eslint-disable-next-line
        console.log('Email sent! Message ID: ', data.MessageId);
        setMessageRequestStatus(requestStatus.success);
      }
    });
  };

  return (
    <Section id={navbarConfig.sections.contactUs}>
      <Content>
        <LinearGradientDesc/>

        <ScrollArrowUpPosition>
          <ScrollArrowUp
            tooltipText="Go to How It Works"
            onCallback={() => onScrollTo(navbarConfig.sections.howItWorks)}
          />
        </ScrollArrowUpPosition>

        <TileWrapper>
          <h3>Let's get in touch!</h3>
        </TileWrapper>

        <SubtitleContent>
          <Subtitle>
            Do you have project in mind and would like to discuss more about it?
          </Subtitle>

          <Subtitle>
            Please feel free to use the contact form below to ask us anything.
            <br/>
            We promise we’ll get back to you.
          </Subtitle>
        </SubtitleContent>

        <FormWrapper>
          <InputFieldText
            inputLabel="Name"
            name="name"
            showError
            fieldValue={fieldValues.name}
            onFieldUpdate={onFieldUpdate}
          />

          <InputFieldText
            inputLabel="Email"
            name="email"
            showError
            fieldValue={fieldValues.email}
            onFieldUpdate={onFieldUpdate}
          />

          <InputFieldText
            inputLabel="Company Name"
            name="companyName"
            fieldValue={fieldValues.companyName}
            onFieldUpdate={onFieldUpdate}
          />

          <InputFieldTextarea
            inputLabel="Description"
            name="description"
            placeholder="Tell us your idea!"
            fieldValue={fieldValues.description}
            onFieldUpdate={onFieldUpdate}
          />

          <ButtonCommonWrapper>
            <LoaderTransparent
              active={messageRequestStatus === requestStatus.loading}
            >
              <ButtonCommon
                classType={ButtonCommonStyles.blue}
                disabled={!isValid}
                content="Send Message."
                callback={onSendContact}
              />
            </LoaderTransparent>
          </ButtonCommonWrapper>

        </FormWrapper>
      </Content>

      <FooterWrapper>
        <FooterTitle>We build software products.</FooterTitle>

        <FooterContentContainer>
          <Row>
            <Icon>
              <LocationOnIcon fontSize="inherit"/>
            </Icon>
            <Text>
              <strong>Romania</strong>, Cluj-Napoca
            </Text>
          </Row>

          <Row>
            <Icon>
              <PhoneIcon fontSize="inherit"/>
            </Icon>
            <Text>+40(0) 744 138340</Text>
          </Row>

          <Row>
            <Icon>
              <MailIcon fontSize="inherit"/>
            </Icon>
            <Text>aurelian.mesaros@gmail.com</Text>
          </Row>
        </FooterContentContainer>
      </FooterWrapper>

    </Section>
  );
};

export default ContactUs;
