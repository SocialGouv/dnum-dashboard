# DashLord

Le tableau de bord présente les données brutes aggrégées issues de plusieurs outils qui évaluent chaque URL automatiquement et indépendamment.

L'acquisition des données ainsi que la génération du rapport sont automatisés par des [GitHub actions](https://github.com/features/actions)

Démo : https://socialgouv.github.io/dnum-dashboard

## Usage

Pour déployer votre version de DashLord :

- Créez un nouveau repository à partir de dashlord-template
- Éditez le fichier `dashlord.yml`
- Dans les actions de votre projet, cliquez sur le workflow `Scans` puis "Run workflow" pour lancer les scans
- Si vous souhaitez déclencher une génération du rapport, lancez le workflow `DashLord report`

## Contribute

Vous pouvez contribuer en remontant des issues, en améliorant la documentation, ou en ajoutant du code.

🤗 Toutes les suggestions sont bienvenues.

### Dev

DashLord fonctionne en deux étapes :

1. **Acquisition des données** : Pour chaque URL, chaque outil est executé et génère un fichier JSON qui sera versionné dans le repository
2. **Génération du rapport** : À partir des données existantes, l'action [dashlord-report-action](https://github.com/SocialGouv/dashlord-report-action) aggrège, compresse les résultats et produit un rapport web statique.

### Related repos

- https://github.com/SocialGouv/thirdparties : thirdparty scripts database
- https://github.com/SocialGouv/dashlord-report-action : action to aggregate scanners data and produce a web report

### Add a tool

1. Create a github action that produces a JSON
2. Add support for this tool to the report generation in the [dashlord-report-action repo](https://github.com/SocialGouv/dashlord-report-action)
