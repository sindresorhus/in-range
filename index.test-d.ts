import {expectType} from 'tsd';
import inRange = require('.');

expectType<boolean>(inRange(30, 100));
expectType<boolean>(inRange(30, 10, 100));
