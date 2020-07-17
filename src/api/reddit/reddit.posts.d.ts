/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
export interface PostListResponse {
  kind: string;
  data: PostListData;
}

export interface PostListData {
  modhash: string;
  dist: number;
  children: PostResponse[];
  after: string;
  before: null;
}

export interface PostResponse {
  kind: Kind;
  data: PostData;
}

export interface PostData {
  approved_at_utc: null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: string | null;
  downs: number;
  thumbnail_height: number | null;
  top_awarded_type: null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: null;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: MediaEmbed;
  thumbnail_width: number | null;
  author_flair_template_id: null;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: Media | null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null;
  secure_media_embed: MediaEmbed;
  link_flair_text: string | null;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: null;
  author_flair_richtext: any[];
  gildings: Gildings;
  post_hint: string | null;
  content_categories: null;
  is_self: boolean;
  mod_note: null;
  created: number;
  link_flair_type: string | null;
  wls: number;
  removed_by_category: null;
  banned_by: null;
  author_flair_type: string | null;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: string | null;
  likes: null;
  suggested_sort: null;
  banned_at_utc: null;
  url_overridden_by_dest?: string;
  view_count: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: Preview | null;
  all_awardings: any[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null;
  treatment_tags: any[];
  visited: boolean;
  removed_by: null;
  num_reports: null;
  distinguished: string | null;
  subreddit_id: string;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null;
  author: string;
  discussion_type: null;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: null;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: Media | null;
  is_video: boolean;
  link_flair_template_id?: string;
}

export enum FlairType {
  Text = 'text'
}

export interface Gildings {}

export enum LinkFlairTextColor {
  Dark = 'dark'
}

export interface Media {
  reddit_video?: RedditVideo;
  type?: string;
  oembed?: Oembed;
}

export interface Oembed {
  provider_url: string;
  version: string;
  title: string;
  type: string;
  thumbnail_width: number;
  height: number;
  width: number;
  html: string;
  author_name: string;
  provider_name: string;
  thumbnail_url: string;
  thumbnail_height: number;
  author_url: string;
}

export interface RedditVideo {
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export interface MediaEmbed {
  content?: string;
  width?: number;
  scrolling?: boolean;
  height?: number;
  media_domain_url?: string;
}

export enum WhitelistStatus {
  AllAds = 'all_ads'
}

export enum PostHint {
  HostedVideo = 'hosted:video',
  Image = 'image',
  Link = 'link',
  RichVideo = 'rich:video'
}

export interface Preview {
  images: Image[];
  enabled: boolean;
  reddit_video_preview?: RedditVideo;
}

export interface Image {
  source: Source;
  resolutions: Source[];
  variants: Variants;
  id: string;
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface Variants {
  gif?: GIF;
  mp4?: GIF;
}

export interface GIF {
  source: Source;
  resolutions: Source[];
}

export enum Subreddit {
  Funny = 'funny'
}

export enum SubredditID {
  T52Qh33 = 't5_2qh33'
}

export enum SubredditNamePrefixed {
  RFunny = 'r/funny'
}

export enum SubredditType {
  Public = 'public'
}

export enum Kind {
  T3 = 't3'
}
