import {expectType} from 'tsd';
import inRange = require('.');

expectType<boolean>(inRange(30, {end: 100}));
expectType<boolean>(inRange(30, {start: 10, end: 100}));
