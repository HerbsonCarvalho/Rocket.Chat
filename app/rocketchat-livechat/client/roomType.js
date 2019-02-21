import { roomTypes } from '/app/rocketchat-utils';
import LivechatRoomType from '../lib/LivechatRoomType';

roomTypes.add(new LivechatRoomType());
