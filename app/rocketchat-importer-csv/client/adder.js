import { Importers } from '/app/rocketchat-importer';
import { CsvImporterInfo } from '../lib/info';

Importers.add(new CsvImporterInfo());
