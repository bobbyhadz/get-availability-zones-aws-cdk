#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {MyCdkStack} from '../lib/cdk-starter-stack';

const app = new cdk.App();
new MyCdkStack(app, 'my-cdk-stack', {
  stackName: 'my-cdk-stack',
  // 👇 Set the environment for the stack
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
