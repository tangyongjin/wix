import ConfigStore from '../mobx/ConfigStore'

import AnnounceStore from '../mobx/AnnounceStore'

export const ACCESS_TOKEN= "access_token"
export const API_ROOT = 'http://47.92.72.19/'

global.API_ROOT = 'http://47.92.72.19/'
global.ConfigStore=ConfigStore
global.AnnounceStore=AnnounceStore
