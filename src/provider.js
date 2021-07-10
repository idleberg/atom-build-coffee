import { configSchema, getConfig } from './config';
import { EventEmitter } from 'events';
import { satisfyDependencies } from 'atom-satisfy-dependencies';
import Logger from './log';
import { name } from '../package.json';
import which from 'which';

export { configSchema as config };

export function provideBuilder() {
  return class CoffeeProvider extends EventEmitter {
    constructor(cwd) {
      super();

      this.cwd = cwd;
      atom.config.observe('build-coffee.customArguments', () => this.emit('refresh'));
    }

    getNiceName() {
      return 'CoffeeScript';
    }

    isEligible() {
      if (getConfig('alwaysEligible') === true) {
        Logger.log('Always eligible');
        return true;
      }

      if (which.sync('coffee', { nothrow: true })) {
        Logger.log('Build provider is eligible');
        return true;
      }

      Logger.error('Build provider isn\'t eligible');
      return false;
    }

    settings() {
      const errorMatch = [
        '(?<file>([^:]+)):(?<line>\\d+):(?<col>\\d+): error: (?<message>.+)'
      ];

      const warningMatch = [
        '(?<file>([^:]+)):(?<line>\\d+):(?<col>\\d+): warning: (?<message>.+)'
      ];

      // User settings
      const customArguments = getConfig('customArguments').trim().split(' ');
      customArguments.push('{FILE_ACTIVE}');

      return [
        {
          name: 'CoffeeScript',
          exec: 'coffee',
          args: [ '--compile', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-b',
          atomCommandName: 'coffeescript:compile',
          errorMatch: errorMatch,
          warningMatch: warningMatch
        },
        {
          name: 'CoffeeScript --bare',
          exec: 'coffee',
          args: [ '--compile', '--bare', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-shift-b',
          atomCommandName: 'coffeescript:compile-bare',
          errorMatch: errorMatch,
          warningMatch: warningMatch
        },
        {
          name: 'CoffeeScript --map',
          exec: 'coffee',
          args: [ '--compile', '--map', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-cmd-b',
          atomCommandName: 'coffeescript:compile-and-create-map',
          errorMatch: errorMatch,
          warningMatch: warningMatch
        },
        {
          name: 'CoffeeScript (user)',
          exec: 'coffee',
          args: customArguments,
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'coffeescript:compile-with-user-settings',
          errorMatch: errorMatch,
          warningMatch: warningMatch
        }
      ];
    }
  };
}

export function activate() {
  Logger.log('Activating package');

  // This package depends on build, make sure it's installed
  if (getConfig('manageDependencies') === true) {
    satisfyDependencies(name);
  }
}

export function deactivate() {
  Logger.log('Deactivating package');
}
