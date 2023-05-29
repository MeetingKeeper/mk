import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Nextjs } from "cdk-nextjs-standalone";
import * as path from "path";
import {Duration, Size} from "aws-cdk-lib";
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId } from "aws-cdk-lib/custom-resources";

const { ENV, ROOT_DOMAIN } = process.env;

export class DeployStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const isProd = ENV === "prod";

    const domainName = ROOT_DOMAIN!;
    const siteDomain = isProd ? domainName: `${ENV}.${domainName}`;
    // const randomName =
    //   Math.random().toString(36).substring(2, 15) +
    //   Math.random().toString(36).substring(2, 15);

    const result = new Nextjs(this, "Web", {
      compressionLevel: 0,
      nextjsPath: path.join(__dirname, "..", ".."), // relative path to nextjs project root
      nodeEnv: "production",
      projectRoot: path.join(__dirname, "..", ".."), // relative path to project root
      // @ts-ignore
      packageManager: "yarn",
      defaults: {
        assetDeployment: {
          cachePolicy: {
            staticMaxAgeDefault: cdk.Duration.seconds(0),
            staticStaleWhileRevalidateDefault: cdk.Duration.seconds(0),
          },
          memoryLimit: 1024 * 2, // 5GB
          ephemeralStorageSize: Size.gibibytes(10),
        },
        lambda: {
          timeout: Duration.minutes(5),
        },
        distribution: {
          stageName: ENV!,
          serverFunction: {
            functionName: `${ENV}-marketing-web-server`,
            timeout: Duration.minutes(5),
          },
          imageOptFunction: {
            functionName: `${ENV}-marketing-image-optimization`,
            timeout: Duration.minutes(5),
          },
          stackPrefix: "marketing-web",
          staticAssetsBucket: {
            bucketName: `${ENV}-marketing-web-static-assets`,
          },
          customDomain: {
            domainName: siteDomain,
            hostedZone: ROOT_DOMAIN!,
          },
        },
      },
    });

    const distributionId = result.distribution.distributionId;

    // const cloudFrontInvalidationPolicy = new PolicyStatement({
    //   actions: [
    //     'cloudfront:GetDistribution',
    //     'cloudfront:GetDistributionConfig',
    //   ],
    //   resources: [
    //     `arn:aws:cloudfront::${cdk.Aws.ACCOUNT_ID}:distribution/${distributionId}`,
    //   ],
    // });


    const cloudFrontAwsResource = new AwsCustomResource(
      this,
      `CloudFrontInvalidation-${Date.now()}`,
      {
        onCreate: {
          physicalResourceId: PhysicalResourceId.of(`${distributionId}-${Date.now()}`),
          service: "CloudFront",
          action: "createInvalidation",
          parameters: {
            DistributionId: distributionId,
            InvalidationBatch: {
              CallerReference: Date.now().toString(),
              Paths: {
                Quantity: 1,
                Items: ['/*']
              }
            }
          },
        },
        policy: AwsCustomResourcePolicy.fromSdkCalls({
          resources: AwsCustomResourcePolicy.ANY_RESOURCE
        }),
      }
    );

    cloudFrontAwsResource.node.addDependency(result.distribution);

    this.exportValue(result.url, {
      name: `${ENV}-WebUrl`,
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'DeployQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
