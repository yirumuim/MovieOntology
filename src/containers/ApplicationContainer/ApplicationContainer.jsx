import React from 'react';
import { ApplicationWrapper } from '../../components/index';
// eslint-disable-next-line import/no-cycle
import { ContentContainer, ExtraContentsContainer } from '../index';

const ApplicationContainer = () => (
  <ApplicationWrapper>
    <ContentContainer />
    <ExtraContentsContainer />
  </ApplicationWrapper>
);

export default ApplicationContainer;
