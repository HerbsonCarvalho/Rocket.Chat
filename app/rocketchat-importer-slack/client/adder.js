import { Importers } from '/app/rocketchat-importer';
import { SlackImporterInfo } from '../lib/info';

Importers.add(new SlackImporterInfo());
