/*
* author: mamingyang@baofeng.com
* date: 2019/2/26
*/

import request from '../utils/request';

export const getNum = () => request.post('http://rap2api.taobao.org/app/mock/3706/mimosa/product/client/tcztHomeProducts');
