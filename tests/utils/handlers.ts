import { rest } from 'msw';

const allNewPostsURL = 'https://www.reddit.com/r/all/new.json?nsfw=0&limit=10';
const failureURL = 'https://www.reddit.com/r/failure/new.json?nsfw=0&limit=10';

const handlers = [
  rest.get(
    'https://www.reddit.com/api/subreddit_autocomplete.json?query=reactjs&include_over_18=0&include_profiles=0',
    (req, res, context) => {
      console.log(`MSW sent reactjsUrl response`);
      return res(
        context.status(200),
        context.json({
          subreddits: [
            {
              numSubscribers: 201304,
              name: 'reactjs',
              allowedPostTypes: {
                images: false,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_2zldd',
              primaryColor: '#014980',
              communityIcon:
                'https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png',
              icon: ''
            },
            {
              numSubscribers: 1158,
              name: 'ReactJSLearn',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_3iadr',
              primaryColor: '',
              communityIcon: '',
              icon: ''
            },
            {
              numSubscribers: 542,
              name: 'reactjsdevelopers',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_3e9j3',
              primaryColor: '',
              communityIcon: '',
              icon: ''
            },
            {
              numSubscribers: 1753,
              name: 'reactjs_beginners',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_3c0ga',
              primaryColor: '',
              communityIcon: '',
              icon: ''
            }
          ]
        })
      );
    }
  ),
  rest.get(
    'https://www.reddit.com/api/subreddit_autocomplete.json?query=ireland&include_over_18=0&include_profiles=0',
    (req, res, context) => {
      console.log(`MSW sent irelandUrl response`);
      return res(
        context.status(200),
        context.json({
          subreddits: [
            {
              numSubscribers: 287677,
              name: 'ireland',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_2qhb9',
              primaryColor: '#00725f',
              communityIcon: '',
              icon:
                'https://b.thumbs.redditmedia.com/MUI-HukVZzYG2eNButTBJOrOxqCXwRtRIvzwKuYzp3o.png'
            },
            {
              numSubscribers: 912,
              name: 'IrelandGaming',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_3itw1',
              primaryColor: '#bbbdbf',
              communityIcon: '',
              icon:
                'https://b.thumbs.redditmedia.com/DwlkGDFaU6o9WX_0AZoOLtUFj7fAAhQ081LpZRia1Xg.png'
            },
            {
              numSubscribers: 5908,
              name: 'IrelandBaldwin',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_2vloo',
              primaryColor: '',
              communityIcon: '',
              icon:
                'https://a.thumbs.redditmedia.com/IC0mejkWqT4Z1Wd-MMffGm_p-yNp_6ScpHqmPOQL148.png'
            },
            {
              numSubscribers: 300,
              name: 'IrelandIncorrectlyUK',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_21s7xl',
              primaryColor: '',
              communityIcon: '',
              icon: ''
            },
            {
              numSubscribers: 191,
              name: 'IrelandR4R',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_31r3i',
              primaryColor: '',
              communityIcon: '',
              icon: ''
            },
            {
              numSubscribers: 5835,
              name: 'IrelandPics',
              allowedPostTypes: {
                images: true,
                text: false,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_3616f',
              primaryColor: '',
              communityIcon: '',
              icon: ''
            },
            {
              numSubscribers: 4981,
              name: 'IrelandonReddit',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_3odcd',
              primaryColor: '',
              communityIcon: '',
              icon: ''
            },
            {
              numSubscribers: 120,
              name: 'IrelandSimpsonsFans',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_utius',
              primaryColor: '',
              communityIcon: '',
              icon: ''
            }
          ]
        })
      );
    }
  ),
  rest.get(allNewPostsURL, (req, res, context) => {
    return res(
      context.status(200),
      context.json({
        kind: 'Listing',
        data: {
          modhash: '',
          dist: 1,
          children: [
            {
              kind: 't3',
              data: {
                approved_at_utc: null,
                subreddit: 'u_Fun65Turnip',
                selftext: 'Картинки на прозрачном фоне - Авто skoda',
                author_fullname: 't2_5twpxmqj',
                saved: false,
                mod_reason_title: null,
                gilded: 0,
                clicked: false,
                title: 'Картинки на прозрачном фоне - Авто skoda',
                link_flair_richtext: [],
                subreddit_name_prefixed: 'u/Fun65Turnip',
                hidden: false,
                pwls: null,
                link_flair_css_class: null,
                downs: 0,
                thumbnail_height: null,
                top_awarded_type: null,
                hide_score: true,
                name: 't3_hitznz',
                quarantine: false,
                link_flair_text_color: 'dark',
                upvote_ratio: 1.0,
                author_flair_background_color: null,
                subreddit_type: 'user',
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
                link_flair_text: null,
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
                created: 1593573117.0,
                link_flair_type: 'text',
                wls: null,
                removed_by_category: null,
                banned_by: null,
                author_flair_type: 'text',
                domain: 'self.Fun65Turnip',
                allow_live_comments: false,
                selftext_html:
                  '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Картинки на прозрачном фоне - Авто skoda&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;',
                likes: null,
                suggested_sort: 'qa',
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
                distinguished: null,
                subreddit_id: 't5_2gt43v',
                mod_reason_by: null,
                removal_reason: null,
                link_flair_background_color: '',
                id: 'hitznz',
                is_robot_indexable: true,
                report_reasons: null,
                author: 'Fun65Turnip',
                discussion_type: null,
                num_comments: 1,
                send_replies: true,
                whitelist_status: null,
                contest_mode: false,
                mod_reports: [],
                author_patreon_flair: false,
                author_flair_text_color: null,
                permalink:
                  '/r/u_Fun65Turnip/comments/hitznz/картинки_на_прозрачном_фоне_авто_skoda/',
                parent_whitelist_status: null,
                stickied: false,
                url:
                  'https://www.reddit.com/r/u_Fun65Turnip/comments/hitznz/картинки_на_прозрачном_фоне_авто_skoda/',
                subreddit_subscribers: 0,
                created_utc: 1593544317.0,
                num_crossposts: 0,
                media: null,
                is_video: false
              }
            }
          ],
          after: 't3_hitznc',
          before: null
        }
      })
    );
  })
];

export { handlers, rest, allNewPostsURL, failureURL };
