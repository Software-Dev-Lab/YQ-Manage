//用户信息数据
function createUserList() {
    return [
        {
            userId: 1,
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'admin',
            password: '111111',
            desc: '平台管理员',
            roles: ['平台管理员'],
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'Admin Token',
        },
        {
            userId: 2,
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'system',
            password: '111111',
            desc: '系统管理员',
            roles: ['系统管理员'],
            buttons: ['cuser.detail', 'cuser.user'],
            routes: ['home'],
            token: 'System Token',
        },
    ]
}

//品牌信息数据
// function createBrandList() {
//     return [
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 1,
//             tmName: '华为',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 2,
//             tmName: '苹果',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 3,
//             tmName: '小米',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 4,
//             tmName: 'OPPO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//         {
//             id: 5,
//             tmName: 'VIVO',
//             logoUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F09%2F20200909171809_qxhjm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f'
//         },
//
//     ]
//
// }

export default [
    // 用户登录接口
    {
        url: '/api/admin/acl/index/login',//请求地址
        method: 'post',//请求方式
        response: ({body}) => {
            //获取请求体携带过来的用户名与密码
            const {username, password} = body;
            //调用获取用户信息函数,用于判断是否有此用户
            const checkUser = createUserList().find(
                (item) => item.username === username && item.password === password,
            )
            //没有用户返回失败信息
            if (!checkUser) {
                return {code: 201, data: {message: '账号或者密码不正确'}}
            }
            //如果有返回成功信息
            const token = checkUser.token
            return {code: 200, data: token}
        },
    },
    // 获取用户信息
    {
        url: '/api/admin/acl/index/info',
        method: 'get',
        response: (request) => {
            //获取请求头携带token
            const token = request.headers.token;
            //查看用户信息是否包含有次token用户
            const checkUser = createUserList().find((item) => item.token === token)
            //没有返回失败的信息
            if (!checkUser) {
                return {code: 201, data: {message: '获取用户信息失败!!!!!'}}
            }
            //如果有返回成功信息
            return {
                code: 200, data: {
                    username: checkUser.username,
                    roles: checkUser.roles,
                    buttons: checkUser.buttons,
                    routes: checkUser.routes,
                    avatar: checkUser.avatar
                }
            }
        },
    },
    //用户退出登录
    {
        url: '/api/admin/acl/index/logout',
        method: 'post',
        response: () => {
            return {code: 200, data: {message: '退出成功'}}
        },
    },

    // //获取品牌列表
    // {
    //     url: '/api/admin/product/baseTrademark/:page/:limit',
    //     method: 'get',
    //     response: (req) => {
    //         const match = req.url.match(/baseTrademark\/(\d+)\/(\d+)/); // 提取 page 和 limit
    //         const page = match ? parseInt(match[1], 10) : 1;
    //         const limit = match ? parseInt(match[2], 10) : 10;
    //
    //         const brandList = createBrandList();
    //
    //
    //         const startIndex = (page - 1) * limit;
    //         const endIndex = startIndex + limit;
    //         const pageList = brandList.slice(startIndex, endIndex);
    //
    //         return {
    //             code: 200,
    //             data: {
    //                 records: pageList,
    //                 total: brandList.length,
    //             },
    //         };
    //     },
    // },


    //test
    {
        url: '/api/test',
        method: 'get',
        response: () => {
            return {code: 200, data: {message: 'test'}}
        },
    },
]

