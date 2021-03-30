# apps-dashboard

Tableau de bord des applications : https://socialgouv.github.io/dnum-dashboard

## Dev

The repository root `src` folder contains scripts to fetch the data and all the automation is made using GitHub actions in `.github/workflows`.

The `www` folder contains the restitution website source code and its built for every new report.

##### Work on the UI with some dataset

This generates a full report based on the `661381287` dataset

```sh
node src/report/index.js > www/src/report.json`
cd www
yarn start
```

## Related

- https://github.com/SocialGouv/thirdparties
