import {writeFile} from 'fs';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
    production: ${process.env.PRODUCTION},
    OPENAI_APIKEY: '${process.env.OPENAI_APIKEY}',
    OPENAI_ORGANIZATION: '${process.env.OPENAI_ORGANIZATION}'
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});
