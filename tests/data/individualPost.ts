// export { postTitleOnly, postTitleImage };
// export postTitleOnly;
import { PostProps } from 'components/Root/Post';

import { PostData } from 'tests/data/postInterfaces';

export const postTitleOnly = {
  id: 'postTitleOnly',
  author: 'postTitleOnly',
  title:
    'Smoked a pork butt for 11hrs made my own sugar free rub and it came out perfect',
  selftext:
    "Hi everyone,\n\nMyself and my housemate are looking to play tennis at Prospect Park, but I can't it on any booking system or find any number that is picking up. Does anyone know if the courts there are currently open?",
  over18: false,
  urltext: 'https://www.bbc.co.uk/news/uk-england-berkshire-53254282'
};

export const postTitleImage = {
  id: 'postTitleImage',
  author: 'postTitleOnly',

  title:
    'Smoked a pork butt for 11hrs made my own sugar free rub and it came out perfect',
  image:
    'https://preview.redd.it/yyvst6zqc5951.jpg?width=640&height=853&crop=smart&auto=webp&s=6c761da7af6402d2be28dcfb5b73d1fcd397f17c',
  over18: false,
  selftext: ''
};

interface BeforeAfter {
  before: PostData;
  after: PostProps;
}

export const postBeforeAfter1: BeforeAfter = {
  before: {
    post_hint: 'video',
    preview: null,
    approved_at_utc: null,
    subreddit: 'keto',
    selftext:
      "Hey guys!\n\n6th day on keto and 3rd on OMAD here.\n\nSo, yeah it's in the title. \n\nWhenever I think of food I feel sick, nauseated and about to vomit.This only happens when I think of food (especially healthy food full of green leaves.)\n\nMy suggested caloric intake is 1200 and I only eat up to 500-700. I'm not trying to starve myself but I just get full, and if I think about forcing myself to eat more I get nauseated. \n\nOtherwise I just feel okay, kind of weaker then what I am used to, but I am able to perform my daily tasks.\n\nIs this normal? And would it last forever?",
    author_fullname: 't2_5ai4ezhy',
    saved: false,
    mod_reason_title: null,
    gilded: 0,
    clicked: false,
    title: 'Thinking of food makes me sick.',
    link_flair_richtext: [
      {
        e: 'text',
        t: 'Help'
      }
    ],
    subreddit_name_prefixed: 'r/keto',
    hidden: false,
    pwls: 6,
    link_flair_css_class: 'SOS',
    downs: 0,
    thumbnail_height: null,
    top_awarded_type: null,
    hide_score: true,
    name: 't3_hmsrju',
    quarantine: false,
    link_flair_text_color: 'dark',
    upvote_ratio: 1.0,
    author_flair_background_color: null,
    subreddit_type: 'public',
    ups: 1,
    total_awards_received: 0,
    media_embed: {},
    thumbnail_width: null,
    author_flair_template_id: null,
    is_original_content: false,
    user_reports: [],
    secure_media: null,
    is_reddit_media_domain: false,
    is_meta: false,
    category: null,
    secure_media_embed: {},
    link_flair_text: 'Help',
    can_mod_post: false,
    score: 1,
    approved_by: null,
    author_premium: false,
    thumbnail: 'self',
    edited: false,
    author_flair_css_class: null,
    author_flair_richtext: [],
    gildings: {},
    content_categories: null,
    is_self: true,
    mod_note: null,
    created: 1594149942.0,
    link_flair_type: 'richtext',
    wls: 6,
    removed_by_category: null,
    banned_by: null,
    author_flair_type: 'text',
    domain: 'self.keto',
    allow_live_comments: false,
    selftext_html:
      '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Hey guys!&lt;/p&gt;\n\n&lt;p&gt;6th day on keto and 3rd on OMAD here.&lt;/p&gt;\n\n&lt;p&gt;So, yeah it&amp;#39;s in the title. &lt;/p&gt;\n\n&lt;p&gt;Whenever I think of food I feel sick, nauseated and about to vomit.This only happens when I think of food (especially healthy food full of green leaves.)&lt;/p&gt;\n\n&lt;p&gt;My suggested caloric intake is 1200 and I only eat up to 500-700. I&amp;#39;m not trying to starve myself but I just get full, and if I think about forcing myself to eat more I get nauseated. &lt;/p&gt;\n\n&lt;p&gt;Otherwise I just feel okay, kind of weaker then what I am used to, but I am able to perform my daily tasks.&lt;/p&gt;\n\n&lt;p&gt;Is this normal? And would it last forever?&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;',
    likes: null,
    suggested_sort: null,
    banned_at_utc: null,
    view_count: null,
    archived: false,
    no_follow: true,
    is_crosspostable: false,
    pinned: false,
    over_18: false,
    all_awardings: [],
    awarders: [],
    media_only: false,
    link_flair_template_id: '715fe9ae-abe7-11e8-8938-0ef2dfd48a7e',
    can_gild: false,
    spoiler: false,
    locked: false,
    author_flair_text: null,
    treatment_tags: [],
    visited: false,
    removed_by: null,
    num_reports: null,
    distinguished: null,
    subreddit_id: 't5_2rske',
    mod_reason_by: null,
    removal_reason: null,
    link_flair_background_color: '',
    id: 'hmsrju',
    is_robot_indexable: true,
    report_reasons: null,
    author: 'rik9698',
    discussion_type: null,
    num_comments: 0,
    send_replies: true,
    whitelist_status: 'all_ads',
    contest_mode: false,
    mod_reports: [],
    author_patreon_flair: false,
    author_flair_text_color: null,
    permalink: '/r/keto/comments/hmsrju/thinking_of_food_makes_me_sick/',
    parent_whitelist_status: 'all_ads',
    stickied: false,
    url:
      'https://www.reddit.com/r/keto/comments/hmsrju/thinking_of_food_makes_me_sick/',
    subreddit_subscribers: 1889617,
    created_utc: 1594121142.0,
    num_crossposts: 0,
    media: null,
    is_video: false
  },
  after: {
    id: 'hmsrju',
    author: 'rik9698',
    title: 'Thinking of food makes me sick.',
    over18: false,
    selftext:
      "Hey guys!\n\n6th day on keto and 3rd on OMAD here.\n\nSo, yeah it's in the title. \n\nWhenever I think of food I feel sick, nauseated and about to vomit.This only happens when I think of food (especially healthy food full of green leaves.)\n\nMy suggested caloric intake is 1200 and I only eat up to 500-700. I'm not trying to starve myself but I just get full, and if I think about forcing myself to eat more I get nauseated. \n\nOtherwise I just feel okay, kind of weaker then what I am used to, but I am able to perform my daily tasks.\n\nIs this normal? And would it last forever?"
  }
};

export const postBeforeAfter2: BeforeAfter = {
  before: {
    approved_at_utc: null,
    subreddit: 'funny',
    selftext: '',
    author_fullname: 't2_zni9y',
    saved: false,
    mod_reason_title: null,
    gilded: 0,
    clicked: false,
    title: "I'm glad I had a sign to tell me how to stand.",
    link_flair_richtext: [],
    subreddit_name_prefixed: 'r/funny',
    hidden: false,
    pwls: 6,
    link_flair_css_class: null,
    downs: 0,
    thumbnail_height: 140,
    top_awarded_type: null,
    hide_score: true,
    name: 't3_hmuqai',
    quarantine: false,
    link_flair_text_color: 'dark',
    upvote_ratio: 1.0,
    author_flair_background_color: null,
    subreddit_type: 'public',
    ups: 7,
    total_awards_received: 0,
    media_embed: {},
    thumbnail_width: 140,
    author_flair_template_id: null,
    is_original_content: false,
    user_reports: [],
    secure_media: null,
    is_reddit_media_domain: true,
    is_meta: false,
    category: null,
    secure_media_embed: {},
    link_flair_text: null,
    can_mod_post: false,
    score: 7,
    approved_by: null,
    author_premium: false,
    thumbnail:
      'https://a.thumbs.redditmedia.com/J3xTzVBMTB3KQAS66qL-GeAAYo52w3lR2cn5ItuXtv0.jpg',
    edited: false,
    author_flair_css_class: null,
    author_flair_richtext: [],
    gildings: {},
    post_hint: 'image',
    content_categories: null,
    is_self: false,
    mod_note: null,
    created: 1594158056.0,
    link_flair_type: 'text',
    wls: 6,
    removed_by_category: null,
    banned_by: null,
    author_flair_type: 'text',
    domain: 'i.redd.it',
    allow_live_comments: false,
    selftext_html: null,
    likes: null,
    suggested_sort: null,
    banned_at_utc: null,
    url_overridden_by_dest: 'https://i.redd.it/g7y75277vf951.jpg',
    view_count: null,
    archived: false,
    no_follow: false,
    is_crosspostable: false,
    pinned: false,
    over_18: false,
    preview: {
      images: [
        {
          source: {
            url:
              'https://preview.redd.it/g7y75277vf951.jpg?auto=webp&amp;s=bec6ab932f655f4ff33751c654b0566691f6a99c',
            width: 2268,
            height: 2569
          },
          resolutions: [
            {
              url:
                'https://preview.redd.it/g7y75277vf951.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=e2ca29df565c061717bbca40c80a83051e00da42',
              width: 108,
              height: 122
            },
            {
              url:
                'https://preview.redd.it/g7y75277vf951.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=ad1a6f9233c83ed6525d1d5a8599b259c764040c',
              width: 216,
              height: 244
            },
            {
              url:
                'https://preview.redd.it/g7y75277vf951.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=811812ad2e4394b2a2f2a9552dded78b43f5456d',
              width: 320,
              height: 362
            },
            {
              url:
                'https://preview.redd.it/g7y75277vf951.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=02c5c99d5a785b302fb04f22a39e31880ba9e3da',
              width: 640,
              height: 724
            },
            {
              url:
                'https://preview.redd.it/g7y75277vf951.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=8dc7d727a90ef91ec8e3f17cb805166f0b688854',
              width: 960,
              height: 1087
            },
            {
              url:
                'https://preview.redd.it/g7y75277vf951.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=8145cc134d0aeec14320e6dfbb5718efb6b78ec2',
              width: 1080,
              height: 1223
            }
          ],
          variants: {},
          id: 'd6VeYkgZJIiOYMx2LE-IE9hQ9IXmM2LgIalrhwTqPuU'
        }
      ],
      enabled: true
    },
    all_awardings: [],
    awarders: [],
    media_only: false,
    can_gild: false,
    spoiler: false,
    locked: false,
    author_flair_text: null,
    treatment_tags: [],
    visited: false,
    removed_by: null,
    num_reports: null,
    distinguished: null,
    subreddit_id: 't5_2qh33',
    mod_reason_by: null,
    removal_reason: null,
    link_flair_background_color: '',
    id: 'hmuqai',
    is_robot_indexable: true,
    report_reasons: null,
    author: 'Gnarly_Sarley',
    discussion_type: null,
    num_comments: 1,
    send_replies: true,
    whitelist_status: 'all_ads',
    contest_mode: false,
    mod_reports: [],
    author_patreon_flair: false,
    author_flair_text_color: null,
    permalink:
      '/r/funny/comments/hmuqai/im_glad_i_had_a_sign_to_tell_me_how_to_stand/',
    parent_whitelist_status: 'all_ads',
    stickied: false,
    url: 'https://i.redd.it/g7y75277vf951.jpg',
    subreddit_subscribers: 31519361,
    created_utc: 1594129256.0,
    num_crossposts: 0,
    media: null,
    is_video: false
  },
  after: {
    id: 'hmuqai',
    author: 'Gnarly_Sarley',
    title: "I'm glad I had a sign to tell me how to stand.",
    over18: false,
    image: 'https://i.redd.it/g7y75277vf951.jpg'
  }
};

export const postBeforeAfter3: BeforeAfter = {
  before: {
    approved_at_utc: null,
    subreddit: 'funny',
    selftext: '',
    author_fullname: 't2_3idfxdiw',
    saved: false,
    mod_reason_title: null,
    gilded: 0,
    clicked: false,
    title: 'Low in iron',
    link_flair_richtext: [],
    subreddit_name_prefixed: 'r/funny',
    hidden: false,
    pwls: 6,
    link_flair_css_class: null,
    downs: 0,
    thumbnail_height: 140,
    top_awarded_type: null,
    hide_score: true,
    name: 't3_hmur82',
    quarantine: false,
    link_flair_text_color: 'dark',
    upvote_ratio: 1.0,
    author_flair_background_color: null,
    subreddit_type: 'public',
    ups: 2,
    total_awards_received: 0,
    media_embed: {},
    thumbnail_width: 140,
    author_flair_template_id: null,
    is_original_content: false,
    user_reports: [],
    secure_media: null,
    is_reddit_media_domain: false,
    is_meta: false,
    category: null,
    secure_media_embed: {},
    link_flair_text: null,
    can_mod_post: false,
    score: 2,
    approved_by: null,
    author_premium: false,
    thumbnail:
      'https://a.thumbs.redditmedia.com/P0NU6ZAgn9bU5eAlbRzN0UnPYDfSgiVVfKc3kNl0T50.jpg',
    edited: false,
    author_flair_css_class: null,
    author_flair_richtext: [],
    gildings: {},
    post_hint: 'link',
    content_categories: null,
    is_self: false,
    mod_note: null,
    created: 1594158151.0,
    link_flair_type: 'text',
    wls: 6,
    removed_by_category: null,
    banned_by: null,
    author_flair_type: 'text',
    domain: 'imgur.com',
    allow_live_comments: false,
    selftext_html: null,
    likes: null,
    suggested_sort: null,
    banned_at_utc: null,
    url_overridden_by_dest: 'https://imgur.com/6w6414C',
    view_count: null,
    archived: false,
    no_follow: true,
    is_crosspostable: false,
    pinned: false,
    over_18: false,
    preview: {
      images: [
        {
          source: {
            url:
              'https://external-preview.redd.it/pB7DPkNFj6n0DcDfNzjIGk3o08A08zze2JlYmCvhSvI.jpg?auto=webp&amp;s=61f49b70d87599ac15998b23beb8453ac6439c0f',
            width: 1080,
            height: 1233
          },
          resolutions: [
            {
              url:
                'https://external-preview.redd.it/pB7DPkNFj6n0DcDfNzjIGk3o08A08zze2JlYmCvhSvI.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=f87dc50721f22b393aba039fc9ba6c0c438cf034',
              width: 108,
              height: 123
            },
            {
              url:
                'https://external-preview.redd.it/pB7DPkNFj6n0DcDfNzjIGk3o08A08zze2JlYmCvhSvI.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=0c04bce1163a9155ceef02295367139b9b322626',
              width: 216,
              height: 246
            },
            {
              url:
                'https://external-preview.redd.it/pB7DPkNFj6n0DcDfNzjIGk3o08A08zze2JlYmCvhSvI.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=f7c9ee581ab99db705d6d27dd50419f467120331',
              width: 320,
              height: 365
            },
            {
              url:
                'https://external-preview.redd.it/pB7DPkNFj6n0DcDfNzjIGk3o08A08zze2JlYmCvhSvI.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=9a0f473be28fe443eff8b531f295d12cab78e0ea',
              width: 640,
              height: 730
            },
            {
              url:
                'https://external-preview.redd.it/pB7DPkNFj6n0DcDfNzjIGk3o08A08zze2JlYmCvhSvI.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=f79512d51722235366dcff3c88211d3fe3206c96',
              width: 960,
              height: 1096
            },
            {
              url:
                'https://external-preview.redd.it/pB7DPkNFj6n0DcDfNzjIGk3o08A08zze2JlYmCvhSvI.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=1aade9bae2b1d70ebb93b2e3e8579dbc30dd6085',
              width: 1080,
              height: 1233
            }
          ],
          variants: {},
          id: 'PAP1UFGl7gvTpmrU2e00kiV6v8sWMrOmybTU0ZKKpXw'
        }
      ],
      enabled: false
    },
    all_awardings: [],
    awarders: [],
    media_only: false,
    can_gild: false,
    spoiler: false,
    locked: false,
    author_flair_text: null,
    treatment_tags: [],
    visited: false,
    removed_by: null,
    num_reports: null,
    distinguished: null,
    subreddit_id: 't5_2qh33',
    mod_reason_by: null,
    removal_reason: null,
    link_flair_background_color: '',
    id: 'hmur82',
    is_robot_indexable: true,
    report_reasons: null,
    author: 'Necessarycontroversy',
    discussion_type: null,
    num_comments: 0,
    send_replies: true,
    whitelist_status: 'all_ads',
    contest_mode: false,
    mod_reports: [],
    author_patreon_flair: false,
    author_flair_text_color: null,
    permalink: '/r/funny/comments/hmur82/low_in_iron/',
    parent_whitelist_status: 'all_ads',
    stickied: false,
    url: 'https://imgur.com/6w6414C',
    subreddit_subscribers: 31519361,
    created_utc: 1594129351.0,
    num_crossposts: 0,
    media: null,
    is_video: false
  },
  after: {
    id: 'hmur82',
    title: 'Low in iron',
    author: 'Necessarycontroversy',
    over18: false,
    image: 'https://imgur.com/6w6414C',
    urltext: 'https://imgur.com/6w6414C'
  }
};

export const postBeforeAfter4: BeforeAfter = {
  before: {
    approved_at_utc: null,
    subreddit: 'funny',
    selftext: '',
    author_fullname: 't2_4t6th1a0',
    saved: false,
    mod_reason_title: null,
    gilded: 0,
    clicked: false,
    title: "Mosting likely to a club in my 30's.",
    link_flair_richtext: [],
    subreddit_name_prefixed: 'r/funny',
    hidden: false,
    pwls: 6,
    link_flair_css_class: null,
    downs: 0,
    thumbnail_height: 105,
    top_awarded_type: null,
    hide_score: true,
    name: 't3_hmuo40',
    quarantine: false,
    link_flair_text_color: 'dark',
    upvote_ratio: 0.75,
    author_flair_background_color: null,
    subreddit_type: 'public',
    ups: 4,
    total_awards_received: 0,
    media_embed: {},
    thumbnail_width: 140,
    author_flair_template_id: null,
    is_original_content: false,
    user_reports: [],
    secure_media: null,
    is_reddit_media_domain: false,
    is_meta: false,
    category: null,
    secure_media_embed: {},
    link_flair_text: null,
    can_mod_post: false,
    score: 4,
    approved_by: null,
    author_premium: false,
    thumbnail:
      'https://a.thumbs.redditmedia.com/6YKmvKP2gNBkDqFUbpVNFrYxkq2UbF5BmOShjYxsOs0.jpg',
    edited: false,
    author_flair_css_class: null,
    author_flair_richtext: [],
    gildings: {},
    post_hint: 'link',
    content_categories: null,
    is_self: false,
    mod_note: null,
    created: 1594157829.0,
    link_flair_type: 'text',
    wls: 6,
    removed_by_category: null,
    banned_by: null,
    author_flair_type: 'text',
    domain: 'i.imgur.com',
    allow_live_comments: false,
    selftext_html: null,
    likes: null,
    suggested_sort: null,
    banned_at_utc: null,
    url_overridden_by_dest: 'https://i.imgur.com/k3jzzWy.gifv?TwYqa=PseQo',
    view_count: null,
    archived: false,
    no_follow: true,
    is_crosspostable: false,
    pinned: false,
    over_18: false,
    preview: {
      images: [
        {
          source: {
            url:
              'https://external-preview.redd.it/zn9_56lNFUGf6W2StRNK8MvS_gQd3d4I2QJ6bR_lJyo.gif?format=png8&amp;s=bde47a79cd51387fbe26defae526b18201cfbb77',
            width: 480,
            height: 360
          },
          resolutions: [
            {
              url:
                'https://external-preview.redd.it/zn9_56lNFUGf6W2StRNK8MvS_gQd3d4I2QJ6bR_lJyo.gif?width=108&amp;crop=smart&amp;format=png8&amp;s=a188721cdf6562d4ec5f73029eaa06cb58806497',
              width: 108,
              height: 81
            },
            {
              url:
                'https://external-preview.redd.it/zn9_56lNFUGf6W2StRNK8MvS_gQd3d4I2QJ6bR_lJyo.gif?width=216&amp;crop=smart&amp;format=png8&amp;s=0c0f1bc01c5b64484ec68df7185b0c00f949c812',
              width: 216,
              height: 162
            },
            {
              url:
                'https://external-preview.redd.it/zn9_56lNFUGf6W2StRNK8MvS_gQd3d4I2QJ6bR_lJyo.gif?width=320&amp;crop=smart&amp;format=png8&amp;s=37aca6d70dc2fd20fc0f97a19e3ba52996e4d3a2',
              width: 320,
              height: 240
            }
          ],
          variants: {
            gif: {
              source: {
                url:
                  'https://external-preview.redd.it/zn9_56lNFUGf6W2StRNK8MvS_gQd3d4I2QJ6bR_lJyo.gif?s=caab5f569fe11b4e72cdb7f50fe7a0ba3ddc1624',
                width: 480,
                height: 360
              },
              resolutions: [
                {
                  url:
                    'https://external-preview.redd.it/zn9_56lNFUGf6W2StRNK8MvS_gQd3d4I2QJ6bR_lJyo.gif?width=108&amp;crop=smart&amp;s=da5d27a9de7bc255fe5e4b38d337b716364043c0',
                  width: 108,
                  height: 81
                },
                {
                  url:
                    'https://external-preview.redd.it/zn9_56lNFUGf6W2StRNK8MvS_gQd3d4I2QJ6bR_lJyo.gif?width=216&amp;crop=smart&amp;s=d5e9592ebfa11c7007f92487cf6b9afc8acd54b3',
                  width: 216,
                  height: 162
                },
                {
                  url:
                    'https://external-preview.redd.it/zn9_56lNFUGf6W2StRNK8MvS_gQd3d4I2QJ6bR_lJyo.gif?width=320&amp;crop=smart&amp;s=d587e357557df734a686442bf6ed7e553339f7dd',
                  width: 320,
                  height: 240
                }
              ]
            },
            mp4: {
              source: {
                url:
                  'https://external-preview.redd.it/zn9_56lNFUGf6W2StRNK8MvS_gQd3d4I2QJ6bR_lJyo.gif?format=mp4&amp;s=0eddafbb42cd0b772a93a13e2be2400ec810348e',
                width: 480,
                height: 360
              },
              resolutions: [
                {
                  url:
                    'https://external-preview.redd.it/zn9_56lNFUGf6W2StRNK8MvS_gQd3d4I2QJ6bR_lJyo.gif?width=108&amp;format=mp4&amp;s=1d73210d109fc809c5f7b0c230409fea6f0e4755',
                  width: 108,
                  height: 81
                },
                {
                  url:
                    'https://external-preview.redd.it/zn9_56lNFUGf6W2StRNK8MvS_gQd3d4I2QJ6bR_lJyo.gif?width=216&amp;format=mp4&amp;s=013b7b25f6bb9442782c98054e544fd2190b46ea',
                  width: 216,
                  height: 162
                },
                {
                  url:
                    'https://external-preview.redd.it/zn9_56lNFUGf6W2StRNK8MvS_gQd3d4I2QJ6bR_lJyo.gif?width=320&amp;format=mp4&amp;s=e9560fac589e2043c91a6bac716e7774b37c51bc',
                  width: 320,
                  height: 240
                }
              ]
            }
          },
          id: 'SDSKArgAGWbuTiiAldtlUD1s87vAyLiKhf__13LV7GU'
        }
      ],
      reddit_video_preview: {
        fallback_url: 'https://v.redd.it/hz2g9hqjuf951/DASH_360.mp4',
        height: 360,
        width: 480,
        scrubber_media_url: 'https://v.redd.it/hz2g9hqjuf951/DASH_96.mp4',
        dash_url: 'https://v.redd.it/hz2g9hqjuf951/DASHPlaylist.mpd',
        duration: 6,
        hls_url: 'https://v.redd.it/hz2g9hqjuf951/HLSPlaylist.m3u8',
        is_gif: true,
        transcoding_status: 'completed'
      },
      enabled: true
    },
    all_awardings: [],
    awarders: [],
    media_only: false,
    can_gild: false,
    spoiler: false,
    locked: false,
    author_flair_text: null,
    treatment_tags: [],
    visited: false,
    removed_by: null,
    num_reports: null,
    distinguished: null,
    subreddit_id: 't5_2qh33',
    mod_reason_by: null,
    removal_reason: null,
    link_flair_background_color: '',
    id: 'hmuo40',
    is_robot_indexable: true,
    report_reasons: null,
    author: 'River_Equation',
    discussion_type: null,
    num_comments: 1,
    send_replies: true,
    whitelist_status: 'all_ads',
    contest_mode: false,
    mod_reports: [],
    author_patreon_flair: false,
    author_flair_text_color: null,
    permalink: '/r/funny/comments/hmuo40/mosting_likely_to_a_club_in_my_30s/',
    parent_whitelist_status: 'all_ads',
    stickied: false,
    url: 'https://i.imgur.com/k3jzzWy.gifv?TwYqa=PseQo',
    subreddit_subscribers: 31519361,
    created_utc: 1594129029.0,
    num_crossposts: 0,
    media: null,
    is_video: false
  },
  after: {
    id: 'hmuo40',
    title: "Mosting likely to a club in my 30's.",
    author: 'River_Equation',
    over18: false,
    image: 'https://i.imgur.com/k3jzzWy.gifv?TwYqa=PseQo',
    urltext: 'https://i.imgur.com/k3jzzWy.gifv?TwYqa=PseQo'
  }
};
