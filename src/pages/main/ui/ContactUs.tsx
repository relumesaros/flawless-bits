import React from 'react';
import styled from 'styled-components';

// import AWS from 'aws-sdk';
import navbarConfig from '../../../shared/config/navbar.config';
import {
    ScrollArrowUp,
} from '../../../shared/ui/ScrollArrow';
import Footer from '../../../shared/ui/Footer';
import stylesConfig from '../../../shared/config/styles.config';
import SectionWrapper from "../../../shared/ui/Section";
import { ContactUsForm } from "../../../features/contact-us-form";
import Header3 from "../../../shared/ui/Header3";

// const SES = new AWS.SES({
//   region: 'us-east-1',
//   accessKeyId: 'AKIA4EJLBU3B4BD5XWN5',
//   secretAccessKey: '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',
// });


const ContentWrapper = styled.div`
  height: calc(100% - ${stylesConfig.footerHeight.desktop}px);
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: calc(100% - ${stylesConfig.footerHeight.mobile}px);
  }
`;

const TitleWrapper = styled.div`
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    text-align: center;
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

// const schema = Joi.object().keys({
// 	name: Joi.string().min(2).max(30).required().label('Name'),
// 	email: Joi.string()
// 			.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
// 			.label('Email'),
// });


const ContactUs = () => {

    const onSendContact = () => {

        // setMessageRequestStatus(requestStatus.loading);
        //
        // const params = {
        // 	Source: 'aurelian.mesaros@gmail.com',
        // 	Destination: {
        // 		ToAddresses: ['aurelian.mesaros@gmail.com'],
        // 	},
        // 	Message: {
        // 		Subject: {
        // 			Data: 'New Contact Request',
        // 			Charset: 'UTF-8',
        // 		},
        // 		Body: {
        // 			Text: {
        // 				Data: `
        //       Name: ${fieldValuesValidated.name.value};
        //       Email: ${fieldValuesValidated.email.value};
        //       Company Name: ${fieldValuesValidated.companyName.value};
        //       Project Description: ${fieldValuesValidated.description.value};
        //
        //     `,
        // 				Charset: 'UTF-8',
        // 			},
        // 		},
        // 	},
        // };

        // SES.sendEmail(params, (err, data) => {
        //   if (err) {
        //     // eslint-disable-next-line
        //     console.error(err.message);
        //     setMessageRequestStatus(requestStatus.error);
        //   } else {
        //     setFieldValues(fieldValuesDefault);
        //     toastrService.success("Message was successfully sent. We'll get back to you very soon!");
        //     // eslint-disable-next-line
        //     console.log('Email sent! Message ID: ', data.MessageId);
        //     setMessageRequestStatus(requestStatus.success);
        //   }
        // });
    };


    return (
        <>
            <ContentWrapper>
                <SectionWrapper id={navbarConfig.sections.contactUs} backgroundColor={stylesConfig.colors.white}>
                    <ScrollArrowUp scrollDestination={navbarConfig.sections.howItWorks}/>
                    <TitleAndFromWrapper>
                        <TitleAndSubtitleWrapper>
                            <TitleWrapper>
                                <Header3>
                                    Let's get in touch!
                                </Header3>
                            </TitleWrapper>
                            <SubtitleText>
                                Do you have project in mind and would like to discuss more about it?
                            </SubtitleText>
                            <SubtitleText>
                                Please feel free to use the contact form below to ask us anything.
                                <br/>
                                We promise we’ll get back to you.
                            </SubtitleText>
                        </TitleAndSubtitleWrapper>
                        <ContactUsForm/>
                    </TitleAndFromWrapper>
                </SectionWrapper>
            </ContentWrapper>
            <Footer/>
        </>
    );
};

export default ContactUs;
