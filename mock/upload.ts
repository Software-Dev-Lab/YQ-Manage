export default [
    //图片上传
    {
        url: '/api1/admin/product/fileUpload',
        method: 'post',
        response: () => {
            return {
                code: 200,
                data: {
                    logoUrl: 'https://consumer.huawei.com/etc/designs/huawei-cbg-site/clientlib-campaign-v4/common-v4/images/logo.svg',
                },
            };
        },
    },


]