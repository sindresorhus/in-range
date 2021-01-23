import {expectType} from 'tsd';
import inRange from './index.js';

expectType<boolean>(inRange(30, {end: 100}));
expectType<boolean>(inRange(30, {start: 10, end: 100}));
// @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
expectType<boolean>(inRange(30n, {start: 10n, end: 100n}));
