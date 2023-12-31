import {writeFile} from 'fs';

const targetPath = './src/environments/environment.ts';

const envConfigFile = `export const environment = {
    production: true,
    OPENAI_APIKEY: '${process.env.OPENAI_APIKEY}',
    OPENAI_ORGANIZATION: '${process.env.OPENAI_ORGANIZATION}'
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  console.log(envConfigFile);
  
  if (err) {
    return console.log(err);
  }
});
