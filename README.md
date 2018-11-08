# botkit-viber
Botkit Viber is plugin for Botkit platform for chatbots

## Publishing a Scoped Package
  * By default, scoped packages are private. To publish private modules, you need to be a paid private modules user.
  * Public scoped modules are free and don't require a paid subscription. To publish a public scoped module, set the access option when publishing it. This option will remain set for all subsequent publishes.
  * To publish scope modules use for first time comand: npm publish --access=public . After you can use comand:  npm publish .
## Using a Scoped Package
  * To use a scoped package, simply include the scope wherever you use the package name.
  * In package.json:

    {
      "dependencies": {
        "@username/project-name": "^1.0.0"
      }
    }
  * On the command line:
    npm install @username/project-name --save
  * In a require statement:
    var projectName = require("@username/project-name")