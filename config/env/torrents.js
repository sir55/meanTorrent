'use strict';

module.exports = {
  meanTorrentConfig: {
    app: {
      domain: 'http://chd.im:3000',
      showDemoWarningPopup: true
    },
    language: [
      {name: 'en', index: 0, class: 'flag-icon-gb', title: 'English'},
      {name: 'zh', index: 1, class: 'flag-icon-cn', title: '中文'}
    ],
    announce: {
      url: 'http://chd.im:3000/announce',
      comment: 'meanTorrent group',
      announceInterval: 60 * 1000,
      announcePrefix: '{CHD.im}.',
      admin: 'admin@chd.im',
      baseUrl: 'http://chd.im:3000',
      clientBlackListUrl: 'http://chd.im:3000/client_black_list',
      privateTorrentCmsMode: false
    },

    /**
     * @scrapeTorrentsStatus
     *
     * this option used only when public cms mode (announce.privateTorrentCmsMode = false),
     * this defines the timing of scrape torrent status from other tracker server
     *
     * @scrapeInterval:     scrape interval with torrent last_scrape, Avoid frequent scrape, unit in hours
     * @onTorrentUpload:    scrape status at server side when the torrent uploaded by a user (= init the status info)
     * @onTorrentInHome:    scrape each torrent status at client side when load into home page (= update the status info)
     * @onTorrentInList:    scrape each torrent status at client side when load into torrent list page (= update the status info)
     *                      if too more items list in one page, this will make efficiency very low
     * @onTorrentInDetail:  scrape current torrent status at client side when load torrent detail info,
     *                      if onTorrentInHome and onTorrentInList is true, this value recommend to false
     */
    scrapeTorrentStatus: {
      scrapeInterval: 2,
      onTorrentUpload: true,
      onTorrentInHome: true,
      onTorrentInList: true,
      onTorrentInDetail: false
    },
    ircAnnounce: {
      enable: true,
      debug: false,
      server: 'chd.im',
      port: 16667,
      nick: 'chdAnnounce',
      userName: 'meanTorrent',
      realName: 'IRC announce client',
      channel: '#chdAnnounce',
      defaultMsgFormat: '%s upload - torrent: %s, type: %s, size: %d, sale: %s, at %s',
      tvserialMsgFormat: '%s upload - torrent: %s, type: %s, size: %d, seasons: %d, episodes: %s, sale: %s, at %s',
      showErrors: true,
      autoRejoin: true,
      autoConnect: true,
      retryCount: 86400,
      retryDelay: 5000,
      encoding: 'UTF-8'
    },
    sign: {
      openSignup: true,
      allowSocialSignin: false,
      showDemoSignMessage: true
    },
    invite: {
      openInvite: true,
      scoreExchange: 10000,
      expires: 60 * 60 * 1000 * 24
    },
    score: {
      levelStep: 500,
      action: {
        signEveryday: {name: 'signEveryday', value: 10, enable: true},
        uploadTorrent: {name: 'uploadTorrent', value: 50, enable: true},
        uploadTorrentBeDeleted: {name: 'uploadTorrentBeDeleted', value: -50, enable: true},
        uploadTorrentBeRecommend: {name: 'uploadTorrentBeRecommend', value: 10, enable: true},
        uploadSubtitle: {name: 'uploadSubtitle', value: 20, enable: true},
        uploadSubtitleBeDeleted: {name: 'uploadSubtitleBeDeleted', value: -20, enable: true},

        seedAnnounce: {
          name: 'seedAnnounce',
          additionSize: 1024 * 1024 * 1024 * 10,  //10G
          perlSize: 1024 * 1024 * 1024,   //1G
          value: 5,
          enable: true
        }
      },
      thumbsUpScore: {
        torrent: 10,
        topic: 10
      }
    },
    messages: {
      type: {
        name: 'TYPE',
        value: [
          {name: 'USER', value: 'user'},
          {name: 'SYSTEM', value: 'system'},
          {name: 'ADVERT', value: 'advert'},
          {name: 'NOTICE', value: 'notice'}
        ]
      }
    },
    trace: {
      action: {
        AdminUpdateUserRole: {name: 'AdminUpdateUserRole', enable: true},
        AdminUpdateUserStatus: {name: 'AdminUpdateUserStatus', enable: true},
        AdminUpdateUserScore: {name: 'AdminUpdateUserScore', enable: true},
        AdminUpdateUserUploaded: {name: 'AdminUpdateUserUploaded', enable: true},
        AdminUpdateUserDownloaded: {name: 'AdminUpdateUserDownloaded', enable: true},
        AdminUserDelete: {name: 'AdminUserDelete', enable: true},
        AdminUserEdit: {name: 'AdminUserEdit', enable: true},
        userPasswordReset: {name: 'userPasswordReset', enable: true},
        userSignUp: {name: 'userSignUp', enable: true},

        AdminTorrentDelete: {name: 'AdminTorrentDelete', enable: true},
        AdminTorrentSetSaleType: {name: 'AdminTorrentSetSaleType', enable: true},
        AdminTorrentSetRecommendLevel: {name: 'AdminTorrentSetRecommendLevel', enable: true},
        AdminTorrentSetReviewedStatus: {name: 'AdminTorrentSetReviewedStatus', enable: true},

        userInvitationExchange: {name: 'userInvitationExchange', enable: true},

        userAnnounceData: {name: 'userAnnounceData', enable: true},
        userScoreChange: {name: 'userScoreChange', enable: true},

        forumDeleteTopic: {name: 'forumDeleteTopic', enable: true},
        forumDeleteReply: {name: 'forumDeleteReply', enable: true}
      }
    },
    torrentType: {
      name: 'TYPE',
      value: [
        {name: 'MOVIE', value: 'movie'},
        {name: 'TVSERIAL', value: 'tvserial'},
        {name: 'MUSIC', value: 'music'},
        {name: 'OTHER', value: 'other'}
      ]
    },
    torrentStatus: {
      name: 'STATUS',
      value: [
        {name: 'NEW', value: 'new'},
        {name: 'REVIEWED', value: 'reviewed'},
        {name: 'DELETED', value: 'deleted'}
      ]
    },
    torrentRecommendLevel: {
      name: 'RECOMMENDLEVEL',
      value: [
        {name: 'LEVEL0', value: 'none'},
        {name: 'LEVEL1', value: 'level1'},
        {name: 'LEVEL2', value: 'level2'},
        {name: 'LEVEL3', value: 'level3'}
      ]
    },
    userStatus: {
      name: 'STATUS',
      value: [
        {name: 'NORMAL', value: 'normal'},
        {name: 'BANNED', value: 'banned'},
        {name: 'SEALED', value: 'sealed'}
      ]
    },
    userRoles: ['user', 'oper', 'admin'],
    clientBlackList: [
      {name: 'Transmission/2.93'},
      {name: 'Mozilla'},
      {name: 'AppleWebKit'},
      {name: 'Safari'},
      {name: 'Chrome'},
      {name: 'Lynx'},
      {name: 'Opera'}
    ],
    torrentSalesType: {
      name: 'SALESTYPE',
      value: [
        {name: 'U1/FREE', desc: 'Upload * 1, Download Free'},
        {name: 'U1/D.3', desc: 'Upload * 1, Download * 0.3'},
        {name: 'U1/D.5', desc: 'Upload * 1, Download * 0.5'},
        {name: 'U1/D.8', desc: 'Upload * 1, Download * 0.8'},
        {name: 'U1/D1', desc: 'Upload * 1, Download * 1'},
        {name: 'U2/FREE', desc: 'Upload * 2, Download Free'},
        {name: 'U2/D.3', desc: 'Upload * 2, Download * 0.3'},
        {name: 'U2/D.5', desc: 'Upload * 2, Download * 0.5'},
        {name: 'U2/D.8', desc: 'Upload * 2, Download * 0.8'},
        {name: 'U2/D1', desc: 'Upload * 2, Download * 1'},
        {name: 'U3/FREE', desc: 'Upload * 3, Download Free'},
        {name: 'U3/D.3', desc: 'Upload * 3, Download * 0.3'},
        {name: 'U3/D.5', desc: 'Upload * 3, Download * 0.5'},
        {name: 'U3/D.8', desc: 'Upload * 3, Download * 0.8'},
        {name: 'U3/D1', desc: 'Upload * 3, Download * 1'}
      ],
      expires: {size: 1024 * 1024 * 1024, time: 60 * 60 * 1000}
    },
    torrentSalesValue: {
      global: undefined,
      vip: {
        Ur: 1.25,
        Dr: 0
      }
    },
    chat: {
      ban: {
        expires: 60 * 60 * 1000 * 1
      }
    },
    tmdbConfig: {
      tmdbHome: 'https://www.themoviedb.org',
      tmdbMovieLinkUrl: 'https://www.themoviedb.org/movie/',
      tmdbTvserialLinkUrl: 'https://www.themoviedb.org/tv/',
      //please change it to your api key from themoviedb.org
      key: '7888f0042a366f63289ff571b68b7ce0',
      backdropImgBaseUrl: 'http://image.tmdb.org/t/p/w1280',
      backdropImgBaseUrl_300: 'http://image.tmdb.org/t/p/w300',
      posterImgBaseUrl: 'http://image.tmdb.org/t/p/w500',
      posterListBaseUrl: 'http://image.tmdb.org/t/p/w92',
      castImgBaseUrl: 'http://image.tmdb.org/t/p/w132_and_h132_bestv2'
    },
    imdbConfig: {
      imdbLinkUrl: 'http://www.imdb.com/title/'
    },
    forumsConfig: {
      category: [
        {name: 'AFFAIRS', value: 'affairs', index: 0},
        {name: 'DISCUSS', value: 'discuss', index: 1},
        {name: 'BUSINESS', value: 'business', index: 2}
      ],
      showThumbsUpUserList: true
    },
    itemsPerPage: {
      topicsPerPage: 10,
      repliesPerPage: 10,
      topicsSearchPerPage: 10,
      torrentsPerPage: 15,
      torrentsCommentsPerPage: 10,
      tracesPerPage: 30
    },
    resourcesTags: {
      radio: [
        {
          name: 'TYPE',
          cats: ['movie', 'tvserial', 'other'],
          value: [
            {name: 'BLU_RAY', icon: ''},
            {name: 'REMUX', icon: ''},
            {name: 'WEB_DL', icon: ''},
            {name: 'ENCODE', icon: ''}
          ]
        },
        {
          name: 'RESOLUTION',
          cats: ['movie', 'tvserial', 'other'],
          value: [
            {name: 'S4K', icon: ''},
            {name: 'S1080P', icon: ''},
            {name: 'S1080I', icon: ''},
            {name: 'S720P', icon: ''}
          ]
        },
        {
          name: 'VIDEO',
          cats: ['movie', 'tvserial', 'other'],
          value: [
            {name: 'AVC', icon: ''},
            {name: 'X265', icon: ''},
            {name: 'X264', icon: ''}
          ]
        },
        {
          name: 'AUDIO',
          cats: ['movie', 'tvserial', 'music', 'other'],
          value: [
            {name: 'AAC', icon: ''},
            {name: 'AC3', icon: ''},
            {name: 'LPCM', icon: ''},
            {name: 'DTS', icon: ''},
            {name: 'DTS_HD', icon: ''},
            {name: 'ATMOS_TRUEHD', icon: ''}
          ]
        },
        {
          name: 'CHANNEL',
          cats: ['movie', 'tvserial', 'music', 'other'],
          value: [
            {name: 'C20', icon: ''},
            {name: 'C51', icon: ''},
            {name: 'C71', icon: ''}
          ]
        },
        {
          name: 'THREED',
          cats: ['movie'],
          value: [
            {name: 'T3D', icon: ''},
            {name: 'T2D', icon: ''},
            {name: 'T2D_3D', icon: ''}
          ]
        },
        {
          name: 'REGION',
          cats: ['movie', 'tvserial', 'music', 'other'],
          value: [
            {name: 'USA', icon: ''},
            {name: 'CHINA', icon: ''},
            {name: 'JAPAN', icon: ''},
            {name: 'KOREA', icon: ''},
            {name: 'INDIA', icon: ''},
            {name: 'ARAB', icon: ''}
          ]
        }
      ],
      checkbox: [
        {
          name: 'MODIFY',
          cats: ['movie', 'tvserial'],
          value: [
            {name: 'DIY', icon: ''},
            {name: 'GUOPEI', icon: ''},
            {name: 'ZHONGZI', icon: ''}
          ]
        },
        {
          name: 'RANKING',
          cats: ['movie', 'tvserial'],
          value: [
            {name: 'IMDB_TOP100', icon: ''},
            {name: 'IMDB_TOP250', icon: ''},
            {name: 'DOUBAN_TOP100', icon: ''},
            {name: 'DOUBAN_TOP250', icon: ''}
          ]
        }
      ]
    }
  }
};
