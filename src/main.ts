import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import serviceData from './serviceAccount.json';
import { ENV } from './constants/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const adminConfig: ServiceAccount = {
    projectId: serviceData.project_id,
    privateKey: serviceData.private_key.replace(/\\n/g, '\n'),
    clientEmail: serviceData.client_email,
  };

  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
  });

  // await createPineconeIndexAndCollection();
  app.enableCors();
  await app.listen(ENV.PORT, () =>
    console.log(`Server is running on port ${ENV.PORT}🔥`),
  );
}
bootstrap();
