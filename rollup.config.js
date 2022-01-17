import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import shebang from 'rollup-plugin-preserve-shebang';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
	input: 'main.ts',
	output: {
		dir: 'dist/bin',
		format: 'cjs'
	},
	plugins: [
		copy({ targets: [{ src: 'packages', dest: 'dist/' }] }),
		resolve(),
		commonjs(),
		shebang(),
		typescript(),
		json()
	]
};

export default config;
