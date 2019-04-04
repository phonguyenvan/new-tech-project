import { readFileSync } from 'fs';
import { resolve } from 'path';
import * as Polyglot from 'node-polyglot';

export class I18n {
    private polyglot: Polyglot;
    constructor(locale: string) {
        this.polyglot = new Polyglot({ locale });
        const languagePath = resolve(__dirname, '../languages') + '/' + locale + '.json'
        const data = this.readJSONFile(languagePath);
        this.polyglot.extend(data);
    }

    private readJSONFile(file: string) {
        return JSON.parse(readFileSync(file, 'utf8'))
    }

    t(key: string, interpolation: {} = {}) {
        return this.polyglot.t(key, interpolation);
    }
}
