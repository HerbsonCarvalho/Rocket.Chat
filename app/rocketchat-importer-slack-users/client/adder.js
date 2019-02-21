import { Importers } from '/app/rocketchat-importer';
import { SlackUsersImporterInfo } from '../lib/info';

Importers.add(new SlackUsersImporterInfo());
