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
  } as PostData,
  after: {
    id: 'hmsrju',
    author: 'rik9698',
    title: 'Thinking of food makes me sick.',
    over18: false,
    selftext:
      "Hey guys!\n\n6th day on keto and 3rd on OMAD here.\n\nSo, yeah it's in the title. \n\nWhenever I think of food I feel sick, nauseated and about to vomit.This only happens when I think of food (especially healthy food full of green leaves.)\n\nMy suggested caloric intake is 1200 and I only eat up to 500-700. I'm not trying to starve myself but I just get full, and if I think about forcing myself to eat more I get nauseated. \n\nOtherwise I just feel okay, kind of weaker then what I am used to, but I am able to perform my daily tasks.\n\nIs this normal? And would it last forever?"
  } as PostProps
};

export const postBeforeAfter2: BeforeAfter = {
  before: {
    post_hint: 'video',
    preview: null,
    link_flair_template_id: '',
    approved_at_utc: null,
    subreddit: 'keto',
    selftext:
      "Hello /r/keto Community!\n\nPlease use this support thread to talk freely and support each other. **We've switched up the format to last 2 days so that there's more time for interaction on questions and answers.**\n\nAll visitors, new and old, are kindly reminded to observe the sidebar rules, check the FAQ, and use the Search Bar before creating new posts.\n\nAnd if you're new to /r/keto and need some info, start with [Keto in a Nutshell](https://www.reddit.com/r/keto/wiki/keto_in_a_nutshell) and [the FAQ](https://www.reddit.com/r/keto/wiki/faq). Or, if you have a question that doesn't seem to be covered, post a comment below in the Community Support thread and ask the community!",
    author_fullname: 't2_6l4z3',
    saved: false,
    mod_reason_title: null,
    gilded: 0,
    clicked: false,
    title: '[2020-07-07] - /r/keto Beginners &amp; Community Support Thread',
    link_flair_richtext: [],
    subreddit_name_prefixed: 'r/keto',
    hidden: false,
    pwls: 6,
    link_flair_css_class: null,
    downs: 0,
    thumbnail_height: null,
    top_awarded_type: null,
    hide_score: true,
    name: 't3_hmruxs',
    quarantine: false,
    link_flair_text_color: 'dark',
    upvote_ratio: 1.0,
    author_flair_background_color: null,
    subreddit_type: 'public',
    ups: 2,
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
    link_flair_text: null,
    can_mod_post: false,
    score: 2,
    approved_by: null,
    author_premium: true,
    thumbnail: 'self',
    edited: false,
    author_flair_css_class: null,
    author_flair_richtext: [],
    gildings: {},
    content_categories: null,
    is_self: true,
    mod_note: null,
    created: 1594145523.0,
    link_flair_type: 'text',
    wls: 6,
    removed_by_category: null,
    banned_by: null,
    author_flair_type: 'text',
    domain: 'self.keto',
    allow_live_comments: false,
    selftext_html:
      '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Hello &lt;a href="/r/keto"&gt;/r/keto&lt;/a&gt; Community!&lt;/p&gt;\n\n&lt;p&gt;Please use this support thread to talk freely and support each other. &lt;strong&gt;We&amp;#39;ve switched up the format to last 2 days so that there&amp;#39;s more time for interaction on questions and answers.&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;All visitors, new and old, are kindly reminded to observe the sidebar rules, check the FAQ, and use the Search Bar before creating new posts.&lt;/p&gt;\n\n&lt;p&gt;And if you&amp;#39;re new to &lt;a href="/r/keto"&gt;/r/keto&lt;/a&gt; and need some info, start with &lt;a href="https://www.reddit.com/r/keto/wiki/keto_in_a_nutshell"&gt;Keto in a Nutshell&lt;/a&gt; and &lt;a href="https://www.reddit.com/r/keto/wiki/faq"&gt;the FAQ&lt;/a&gt;. Or, if you have a question that doesn&amp;#39;t seem to be covered, post a comment below in the Community Support thread and ask the community!&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;',
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
    can_gild: false,
    spoiler: false,
    locked: false,
    author_flair_text: null,
    treatment_tags: [],
    visited: false,
    removed_by: null,
    num_reports: null,
    distinguished: 'moderator',
    subreddit_id: 't5_2rske',
    mod_reason_by: null,
    removal_reason: null,
    link_flair_background_color: '',
    id: 'hmruxs',
    is_robot_indexable: true,
    report_reasons: null,
    author: 'AutoModerator',
    discussion_type: null,
    num_comments: 0,
    send_replies: false,
    whitelist_status: 'all_ads',
    contest_mode: false,
    mod_reports: [],
    author_patreon_flair: false,
    author_flair_text_color: null,
    permalink:
      '/r/keto/comments/hmruxs/20200707_rketo_beginners_community_support_thread/',
    parent_whitelist_status: 'all_ads',
    stickied: true,
    url:
      'https://www.reddit.com/r/keto/comments/hmruxs/20200707_rketo_beginners_community_support_thread/',
    subreddit_subscribers: 1889617,
    created_utc: 1594116723.0,
    num_crossposts: 0,
    media: null,
    is_video: false
  },
  after: {
    id: 'hmruxs',
    author: 'AutoModerator',
    title: '[2020-07-07] - /r/keto Beginners &amp; Community Support Thread',
    over18: false,
    selftext:
      "Hello /r/keto Community!\n\nPlease use this support thread to talk freely and support each other. **We've switched up the format to last 2 days so that there's more time for interaction on questions and answers.**\n\nAll visitors, new and old, are kindly reminded to observe the sidebar rules, check the FAQ, and use the Search Bar before creating new posts.\n\nAnd if you're new to /r/keto and need some info, start with [Keto in a Nutshell](https://www.reddit.com/r/keto/wiki/keto_in_a_nutshell) and [the FAQ](https://www.reddit.com/r/keto/wiki/faq). Or, if you have a question that doesn't seem to be covered, post a comment below in the Community Support thread and ask the community!"
  }
};

export const postBeforeAfter3: BeforeAfter = {
  before: {
    link_flair_template_id: '',
    post_hint: 'hosted:video',
    url_overridden_by_dest: 'https://v.redd.it/41px150x9f951',
    approved_at_utc: null,
    subreddit: 'funny',
    selftext: '',
    author_fullname: 't2_61quby5f',
    saved: false,
    mod_reason_title: null,
    gilded: 0,
    clicked: false,
    title: 'Ratatouille deleted scene',
    link_flair_richtext: [],
    subreddit_name_prefixed: 'r/funny',
    hidden: false,
    pwls: 6,
    link_flair_css_class: null,
    downs: 0,
    thumbnail_height: 140,
    top_awarded_type: null,
    hide_score: true,
    name: 't3_hmszw7',
    quarantine: false,
    link_flair_text_color: 'dark',
    upvote_ratio: 0.91,
    author_flair_background_color: null,
    subreddit_type: 'public',
    ups: 9,
    total_awards_received: 0,
    media_embed: {},
    thumbnail_width: 140,
    author_flair_template_id: null,
    is_original_content: false,
    user_reports: [],
    secure_media: {
      reddit_video: {
        fallback_url:
          'https://v.redd.it/41px150x9f951/DASH_360.mp4?source=fallback',
        height: 400,
        width: 400,
        scrubber_media_url: 'https://v.redd.it/41px150x9f951/DASH_96.mp4',
        dash_url:
          'https://v.redd.it/41px150x9f951/DASHPlaylist.mpd?a=1596714564%2CY2Y0NDc5Y2NhYjYzMGY0ZTMyM2JiMjQ3Y2RmNjE0ZjMwNzU3NDJiM2QwZjE3YTBjZWIwMzRlNTg0M2MwMjE1OQ%3D%3D&amp;v=1&amp;f=sd',
        duration: 21,
        hls_url:
          'https://v.redd.it/41px150x9f951/HLSPlaylist.m3u8?a=1596714564%2CZGM1YTMxODAxNjJhYTI3ODNhYjAwNDBmYWFhMjFlOTgzYzU0MDQ5OTAyYWJhMDgyMmYyZTgyMDg2NGFhMDkzOQ%3D%3D&amp;v=1&amp;f=sd',
        is_gif: false,
        transcoding_status: 'completed'
      }
    },
    is_reddit_media_domain: true,
    is_meta: false,
    category: null,
    secure_media_embed: {},
    link_flair_text: null,
    can_mod_post: false,
    score: 9,
    approved_by: null,
    author_premium: false,
    thumbnail:
      'https://b.thumbs.redditmedia.com/ddVdmqu79BtmiayyxO5IXTJyHwsnPl3T5DhwD3ViSNo.jpg',
    edited: false,
    author_flair_css_class: null,
    author_flair_richtext: [],
    gildings: {},
    content_categories: null,
    is_self: false,
    mod_note: null,
    created: 1594151030.0,
    link_flair_type: 'text',
    wls: 6,
    removed_by_category: null,
    banned_by: null,
    author_flair_type: 'text',
    domain: 'v.redd.it',
    allow_live_comments: false,
    selftext_html: null,
    likes: null,
    suggested_sort: null,
    banned_at_utc: null,
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
              'https://external-preview.redd.it/_gxM1iwSzisyn7bwOqGqHhC8pC1E2PgqUrsPp3vQWfA.png?format=pjpg&amp;auto=webp&amp;s=037a034c1a7c7402444dd41845c79f6a9e794c2f',
            width: 400,
            height: 400
          },
          resolutions: [
            {
              url:
                'https://external-preview.redd.it/_gxM1iwSzisyn7bwOqGqHhC8pC1E2PgqUrsPp3vQWfA.png?width=108&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=b598c8fa72288310c79ac8bdeee7270991b6214b',
              width: 108,
              height: 108
            },
            {
              url:
                'https://external-preview.redd.it/_gxM1iwSzisyn7bwOqGqHhC8pC1E2PgqUrsPp3vQWfA.png?width=216&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=49d4b1082db899e3e1cfa5cef160f15d1cde4997',
              width: 216,
              height: 216
            },
            {
              url:
                'https://external-preview.redd.it/_gxM1iwSzisyn7bwOqGqHhC8pC1E2PgqUrsPp3vQWfA.png?width=320&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=06db44f942ce612b7741e90cdd3e5a31f6ba0c75',
              width: 320,
              height: 320
            }
          ],
          variants: {},
          id: 'r3Bj4sqEPRw3If7xVgW8Gdd0jxzrAIHTPZtKtlxwk-k'
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
    id: 'hmszw7',
    is_robot_indexable: true,
    report_reasons: null,
    author: 'ChouChewie',
    discussion_type: null,
    num_comments: 2,
    send_replies: true,
    whitelist_status: 'all_ads',
    contest_mode: false,
    mod_reports: [],
    author_patreon_flair: false,
    author_flair_text_color: null,
    permalink: '/r/funny/comments/hmszw7/ratatouille_deleted_scene/',
    parent_whitelist_status: 'all_ads',
    stickied: false,
    url: 'https://v.redd.it/41px150x9f951',
    subreddit_subscribers: 31517895,
    created_utc: 1594122230.0,
    num_crossposts: 0,
    media: {
      reddit_video: {
        fallback_url:
          'https://v.redd.it/41px150x9f951/DASH_360.mp4?source=fallback',
        height: 400,
        width: 400,
        scrubber_media_url: 'https://v.redd.it/41px150x9f951/DASH_96.mp4',
        dash_url:
          'https://v.redd.it/41px150x9f951/DASHPlaylist.mpd?a=1596714564%2CY2Y0NDc5Y2NhYjYzMGY0ZTMyM2JiMjQ3Y2RmNjE0ZjMwNzU3NDJiM2QwZjE3YTBjZWIwMzRlNTg0M2MwMjE1OQ%3D%3D&amp;v=1&amp;f=sd',
        duration: 21,
        hls_url:
          'https://v.redd.it/41px150x9f951/HLSPlaylist.m3u8?a=1596714564%2CZGM1YTMxODAxNjJhYTI3ODNhYjAwNDBmYWFhMjFlOTgzYzU0MDQ5OTAyYWJhMDgyMmYyZTgyMDg2NGFhMDkzOQ%3D%3D&amp;v=1&amp;f=sd',
        is_gif: false,
        transcoding_status: 'completed'
      }
    },
    is_video: true
  },
  after: {
    id: 'hmszw7',
    title: 'Ratatouille deleted scene',
    author: 'ChouChewie',
    over18: false,
    selftext: '',
    image: 'https://v.redd.it/41px150x9f951/DASH_96.mp4'
  }
};
