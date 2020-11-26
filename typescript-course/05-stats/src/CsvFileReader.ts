import fs from 'fs';

import { MatchResult } from './matchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader<TypeOfData> {
  data: TypeOfData[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): TypeOfData;

  read(): void {
    this.data = fs
      .readFileSync(`${this.filename}`, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
