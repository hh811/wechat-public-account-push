/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8bb7dd44fdae9bfd',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c388398b0cddca38580480ef4ae9bce1',

  PROVINCE: '贵州',
  CITY: '黔东南',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4pza57BZBav3kc_XuoA6y2cgw94',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	OM_bsY0UQotVwy2HrzsTE4brg2IoXME-C1UjFlWNPyQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '08-11',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2002', date: '09-17',
        },
        {
          type: '节日', name: '纪念日', year: '2021', date: '10-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-10-01' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2028-10-01' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	OM_bsY0UQotVwy2HrzsTE4brg2IoXME-C1UjFlWNPyQ	',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4pza55gelO6-6r-sNXAhNvIvHnk',
    }
  ],

}

module.exports = USER_CONFIG

