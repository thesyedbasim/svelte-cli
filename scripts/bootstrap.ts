import { exec } from 'child_process';
import { readdirSync, cpSync } from 'fs';
import path from 'path';

const copyDirContentToAnother = (src: string, dest: string): void => {
	cpSync(src, dest, { recursive: true });
};

const getDirContent = (path: string): string[] => {
	return readdirSync(path);
};

const isDirEmpty = (dirContent: string[]): boolean => {
	return dirContent.length === 0;
};

const installDep = (packageManager: string): void => {
	exec(`${packageManager} install`, (err) => {
		if (err) {
			console.error(err);

			process.exitCode = 1;
			return;
		}
	});
};

const setupTypeScript = (setupTsFile: string) => {
	exec(`node ${setupTsFile}`);
};

const rootDir = path.join(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');
const svelteTemplateDir = path.join(packagesDir, 'svelte-template');
const setupTsFile = path.resolve('./scripts/setupTypeScript.js');

export const bootstrap = ({
	projectInstallationDir,
	packageManager,
	isTypeScript = false
}: {
	projectInstallationDir: string;
	packageManager: string;
	isTypeScript?: boolean;
}) => {
	const dirContent = getDirContent(projectInstallationDir);

	if (!isDirEmpty(dirContent)) {
		console.error('Destination directory is not empty. Aborting.');
		process.exitCode = 1;

		return;
	}

	copyDirContentToAnother(svelteTemplateDir, projectInstallationDir);
	console.log(
		'Files generated. Now installing dependencies. This may take a while...'
	);

	installDep(packageManager);

	console.log('Project setup done. Now converting to TypeScript');

	if (isTypeScript) setupTypeScript(setupTsFile);
};
