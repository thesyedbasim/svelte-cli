#! /usr/bin/env node

import { bootstrap } from './scripts/bootstrap';

import { program } from 'commander';

const acceptedPackageMangers = ['npm', 'pnpm', 'yarn'];

program
	.name('svelte')
	.version('0.1.0')
	.command('create [destination_directory]')
	.description('initializes a new Svelte project')
	.option(
		'-p, --package-manager [type]',
		'the package manager to be used when installing dependencies',
		'npm'
	)
	.option('--ts, --typescript', 'set up TypeScript for Svelte', false)
	.action((destDir, options) => {
		bootstrap({
			projectInstallationDir: (destDir as string) || '.',
			packageManager: acceptedPackageMangers.includes(options.packageManager)
				? options.packageManager
				: 'npm',
			isTypeScript: options.typescript as boolean
		});
	});

program.parse(process.argv);
