// Plop generators configurations
module.exports = function (/** @type {import('plop').NodePlopAPI} */ plop) {
  // Welcome message
  plop.setWelcomeMessage('Select a generator');

  // Registering custom generators
  plop.setGenerator('controller', {
    description: 'generate controller',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'controller name: ',
        validate: function (value) {
          if (/controller/i.test(value)) {
            return 'controller name should not contain the word "controller"';
          }
          return value ? true : 'controller name is required';
        },
      },
      {
        type: 'input',
        name: 'model',
        message:
          'model name (capital case, ex: "User"), leave blank if not needed',
        default: '',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/controllers/{{dashCase name}}-controller.js',
        templateFile: './plop-templates/controller.js.hbs',
      },
    ],
  });
  plop.setGenerator('middleware', {
    description: 'generate middleware',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'file name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/middleware/{{dashCase name}}.js',
        templateFile: './plop-templates/middleware.js.hbs',
      },
    ],
  });
  plop.setGenerator('model', {
    description: 'generate model',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'model name: ',
        validate: (value) => (value ? true : 'model name is required'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/models/{{titleCase name}}.js',
        templateFile: './plop-templates/model.js.hbs',
      },
    ],
  });
  plop.setGenerator('router', {
    description: 'generate router',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'router name:',
        validate: function (value) {
          if (/router/i.test(value)) {
            return 'router name should not contain the word "router"';
          }
          return value ? true : 'router name is required';
        },
      },
      {
        type: 'input',
        name: 'controller',
        message: 'enter the name of the controller (e.g., auth):',
        default: '',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/routes/{{dashCase name}}-router.js',
        templateFile: './plop-templates/router.js.hbs',
      },
    ],
  });
  plop.setGenerator('utility', {
    description: 'generate utility function file',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'utility name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/utils/{{dashCase name}}.js',
        templateFile: './plop-templates/util.js.hbs',
      },
    ],
  });
};
