import React, { useState, createRef } from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import Joi from 'joi';

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

import requestStatus from '../../constants/requestStatus';
import LoaderTransparent from '../common/LoaderTransparent';
import Footer from '../common/Footer';
import stylesConfig from '../../config/stylesConfig';

const SES = new AWS.SES({
  region: 'us-east-1',
  accessKeyId: 'AKIA4EJLBU3B4BD5XWN5',
  secretAccessKey: '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',
});

const Section = styled.div`
  position: relative;
  border-top: 2px solid ${stylesConfig.colors.graySection};
  background-color: rgba(16, 88, 249, 0.03);
  min-height: 100%;
  padding: 90px 0 0 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 50px 0 0 0;
  }
`;

const Content = styled.div`
  width: 100%
  padding: 0 17% 0 17%;
  box-sizing: border-box;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 0 10% 0 10%;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    width: 100%;
    padding-top: 10px;
  }
`;

const TileWrapper = styled.h2`
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    text-align: center;
  }
`;

const ButtonCommonWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  margin: 20px 0 10px 0;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    width: 180px;
    height: 40px;
  }
`;

const TitleAndSubtitleWrapper = styled.div`
  width: 48%;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleAndFromWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const SubtitleText = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 30px;
  margin: 20px 0 0 0;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 10px;
    letter-spacing: 1px;
    line-height: 15px;
    text-align: center;
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
        toastrService.success("Message was successfully sent. We'll get back to you very soon!");
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
            tooltipText="Go to Blog"
            onCallback={() => onScrollTo(navbarConfig.sections.blog)}
          />
        </ScrollArrowUpPosition>

        <TitleAndFromWrapper>

          <TitleAndSubtitleWrapper>

            <TileWrapper>
              Let's get in touch!
            </TileWrapper>

            <SubtitleText>
              Do you have project in mind and would like to discuss more about it?
            </SubtitleText>

            <SubtitleText>
              Please feel free to use the contact form below to ask us anything.
              <br/>
              We promise we’ll get back to you.
            </SubtitleText>
          </TitleAndSubtitleWrapper>

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

        </TitleAndFromWrapper>

      </Content>

      <Footer/>

    </Section>
  );
};

export default ContactUs;
