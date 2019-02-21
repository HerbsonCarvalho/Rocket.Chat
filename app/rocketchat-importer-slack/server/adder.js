import { Importers } from '/app/rocketchat-importer';
import { SlackImporterInfo } from '../lib/info';
import { SlackImporter } from './importer';

Importers.add(new SlackImporterInfo(), SlackImporter);
