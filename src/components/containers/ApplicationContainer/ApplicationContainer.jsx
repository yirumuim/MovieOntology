import React from 'react';
import { ApplicationWrapper } from '../../index';
// eslint-disable-next-line import/no-cycle
import { ContentContainer, ExtraContentContainer } from '../index';

const ApplicationContainer = () => (
  <ApplicationWrapper>
    <ContentContainer />
    <ExtraContentContainer />
  </ApplicationWrapper>
);

export default ApplicationContainer;
