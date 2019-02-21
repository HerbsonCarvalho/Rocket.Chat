import { Importers } from '/app/rocketchat-importer';
import { HipChatEnterpriseImporterInfo } from '../lib/info';

Importers.add(new HipChatEnterpriseImporterInfo());
