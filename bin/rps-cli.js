#!/usr/bin/env node

import minimist from 'minimist';
import { rps } from "../lib/rpsls.js";

var args = minimist(process.argv.slice(2));

const help = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)
  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit
Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`;

const rules = `Rules for Rock Paper Scissors:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors`;

if (args.h || args.help) {
	console.log(help);
	process.exit(0);
}

if (args.r || args.rules) {
    console.log(rules);
	process.exit(0);
}

let shot = args._[0];

try {
    let result = rps(shot);
    console.log(JSON.stringify(result));
} catch (e) {
    console.log(help);
    console.log(rules);
}