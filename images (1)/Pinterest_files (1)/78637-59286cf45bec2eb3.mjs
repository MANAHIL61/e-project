"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[78637,20128],{897328:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"AdReasonsModalContainer_pin",selections:[{alias:null,args:null,concreteType:"AdTargetingAttribution",kind:"LinkedField",name:"adTargetingAttribution",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isCustomerListMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActalikeMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEngagementMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isExpandTargetingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isFromGpsLocation",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isVisitorMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isShoppingProspectingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPlPersonaMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedAgeBucket",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedLocale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedInterest",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedGender",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedDevice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedKeyword",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"geoRegion",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"geoPostalCode",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isFirstPartyAdPersonalizationEnabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isThirdPartyAdPersonalizationEnabled",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedPartnershipAdvertiserName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedPartnershipAttributionName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPromotedPartnership",storageKey:null}],type:"Pin",abstractKey:null};t.hash="fa046c614510fee948f27e5b22c916b0";let o=t},827896:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(616550),o=a(768559),i=a(350118);function l(){let e=(0,i.S6)(),n=(0,t.TH)();return(a,t)=>{let i;let l=e(a);if(t?.shouldTrackForPrevLocation){let e=l?.tracking_params_map||{},n=Object.keys(e),a=n.find(e=>"PinResource"!==e);l&&(i=a?e[a]:e.PinResource)}else l&&(i=(0,o.Z)({boardUrl:l.board?.url,location:n,pinId:l.id,pinnerUserName:l.pinner?.username,storyPinDataId:l.story_pin_data_id,trackingParams:l.tracking_params,trackingParamsMap:l.tracking_params_map}));return i}}},915446:(e,n,a)=>{a.d(n,{Z:()=>o});let t={REPIN_BOARD:1,USER_ACTIVITY:4,CLICKTHROUGH:9,FRESH_REPIN_BOARD:47,FRESH_CLICKTHROUGH:48,FRESH_USER_ACTIVITY:49,LOCAL_REPIN_BOARD:13,LOCAL_CLICKTHROUGH:32,LOCAL_USER_ACTIVITY:33,P2P_CLICKTHROUGH:28,INSTANT_PFY_NON_MATERIALIZABLE:36,FOLLOWED_INTEREST:5,TOPIC_BEST_PINS:70,EMBEDDING_BASED_BEST_PINS:173,RECOMMENDED_TOPICS:65,RECOMMENDED_GEO_INTERESTS:192,USER_SEQUENCE_INTERESTS_PINS:193,U2I_DNN_INTERESTS_PINS:196,PINNERSAGE_INTERESTS_PINS:197,GRAPHSAGE_USER_EMBEDDINGS_TO_ORGANIC_PINS:109,NAVBOOST_PFY:89,NAVBOOST_P2P:88,NOTIFICATION_NEWS_HUB:138,GEMINI_INTERESTS_FRESH:104,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_STORY_PIN:100,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_STORY_PIN_ENGAGEMENT:175,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_VIDEO:95,INTENTIONAL_DISTRIBUTION_DOMAIN:86,INTENTIONAL_DISTRIBUTION_TOPICS_STORY_PINS:91,INTENTIONAL_DISTRIBUTION_TOPICS_VIDEO:98,GRAPHSAGE_MULTI_PINS_TO_CREATOR_PINS_REALTIME:135,GRAPHSAGE_MULTI_PINS_TO_VIDEO_PINS_REALTIME:139,GRAPHSAGE_MULTI_PINS_TO_STORY_PINS_REALTIME:140,INTENTIONAL_DISTRIBUTION_MANUAL_TAGGEED_INTERESTS_VIDEO:118,INTENTIONAL_DISTRIBUTION_MANUAL_TAGGED_INTERESTS_STORY_PIN:130,CREATOR_DIRECT_INJECT:148,USER_INTERESTS_TO_LONGTERM_CREATOR_PINS:141,GRAPHSAGE_PRODUCT_PINS:97,GRAPHSAGE_TML_PRODUCT_PINS:212,GRAPHSAGE_USER_EMBEDDINGS_TO_PINS:108,PROMOTED_PIN:15,UNKNOWN:0,RECOMMENDED_CATEGORY:2,COOKIE_MONSTER:3,REALTIME_P2B:6,REALTIME_P2B_CLOSEUP:22,RECOMMENDED_INTEREST:7,VISUALLY_SIMILAR:8,BOARD_FOLLOW:35,USER_FOLLOW:45,RECOMMENDED_COMMERCE:10,EVERYTHING_FEED:11,RECOMMENDED_LOCAL_PIN:12,SEARCH:46,P2P_USER_COMMERCE:16,COMMERCE_EDUCATION:17,LANDING_PAGE_PINS:18,FOLLOWING_FEED:19,POPULAR_FEED:20,P2P_DYNAMIC_GRID:23,LANDING_PAGE_INTEREST_PINS:24,FRESH_PIN_FROM_PIN:25,FRESH_PIN_FROM_INTEREST:26,FRESH_PIN_FROM_BOARD:27,SIFTER_VIDEO_FROM_INTEREST:39,SIFTER_PRODUCTS:57,SIFTER_DISTRIBUTION_A:50,SIFTER_DISTRIBUTION_B:51,SIFTER_DISTRIBUTION_C:52,SIFTER_DISTRIBUTION_D:53,SIFTER_DISTRIBUTION_E:54,SIFTER_ACTIVATION_EXPERIMENT:58,SIFTER_FRESHMAKER_PIN_FROM_INTEREST:40,P2P_CLOSEUP:29,P2P_LIKE:30,P2P_PIN_CREATE:31,INSTANT_PFY:34,DYNAMIC_INSERTION:37,DYNAMIC_INSERTION_BOARD_FOLLOW:38,HYPERLOCAL_INTEREST_BOARD:41,NUX_BOARD_FOLLOW_P2P:42,INDIRECT_DOMAIN_PIN:43,PIXIE_PINS_FOR_BOARD:44,SCREENSHOT_SAVE:55,TEXT_EMBEDDINGS:56,FRESH_TEXT_EMBEDDINGS:67,PREFETCH_LOAD:60,DIVERSE_TOPICS:62,QUIZ_RESULTS:63,INTENTIONAL_DISTRIBUTION_TOPICS:64,INTENTIONAL_DISTRIBUTION_TOPICS_THIRD_PARTY:90,INTENTIONAL_DISTRIBUTION_GEMINI:73,INTENTIONAL_DISTRIBUTION_GEMINI_V5:120,INTENTIONAL_DISTRIBUTION_SHOP_STYLE_STL:74,INTENTIONAL_DISTRIBUTION_GRAPHSAGE:78,INTENTIONAL_DISTRIBUTION_REPIN_BOARD:80,INTENTIONAL_DISTRIBUTION_CLICKTHROUGH:81,INTENTIONAL_DISTRIBUTION_USER_ACTIVITY:82,INTENTIONAL_DISTRIBUTION_CREATOR_BASELINE:92,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS:102,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS_STORY_PIN:103,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS_DIVERSITY:105,PIXIE_RECENT_ACTION:66,NATIVE_CONTENT_TOPICS:68,BUBBLE_OPEN_TOPICS:69,TOPIC_BEST_PINS_V2:77,DAILY_BEST_PINS:79,TOPIC_BEST_PINS_V3:101,TOPIC_BEST_STORY_PINS:164,REC_SEQ_STORY_PIN_CLS:165,DARK_PROMOTED_PIN:71,POST_EXPLORE_TOPICS:72,GRAPHSAGE_EMBEDDINGS:75,DEMOGRAPHIC_PFY:76,SHOPPING_STL:83,UNAUTH_PIXIE_P2B:84,UNAUTH_PIXIE_P2P:85,VIDEO_EMBEDDINGS:87,VIDEO_EMBEDDINGS_GEMINI_V5:121,GEMINI_V5_EMBEDDINGS_STATIC:93,GEMINI_V5_EMBEDDINGS_FRESH:94,GEMINI_V5_EMBEDDINGS_REALTIME:106,GEMINI_V5_EMBEDDINGS_STORYPIN:107,CURATED_VIDEO_INTEREST:96,GRAPHSAGE_PRODUCT_PINS_LONGER_HISTORY:112,GRAPHSAGE_SHOPPABLE_INSPIRATION:126,GRAPHSAGE_PRODUCT_PINS_EXPERIMENTAL:134,NUX_GRAPHSAGE:99,GRAPHSAGE_USER_EMBEDDINGS_TO_PRODUCT_PINS:110,GRAPHSAGE_VIDEO_PINS:113,RECBOOST_REPIN_BOARD:114,RECBOOST_CLICKTHROUGH:115,RECBOOST_USER_ACTIVITY:116,RECBOOST_CREATOR_BOARDS:129,RECOMMENDED_BOARDS:117,RECOMMENDED_ANNOTATION_BOARDS:136,RECOMMENDED_GRAPHSAGE_BOARDS:153,INTENTIONAL_DISTRIBUTION_RECOMMENDED_GRAPHSAGE_BOARDS:191,RECOMMENDED_CREATOR_BOARDS:124,ANNOTATION_REC_CREATOR_BOARDS:127,INTENTIONAL_DISTRIBUTION_MANUAL_INTERESTS_VIDEO:119,INTENTIONAL_DISTRIBUTION_INTERESTS_VIDEO:143,INTENTIONAL_DISTRIBUTION_INTERESTS_STORY_PIN:144,REPIN_CREATOR_BOARD:122,GRAPHSAGE_USER_EMBEDDINGS_TO_CREATOR_PINS:123,GRAPHSAGE_USER_EMBEDDINGS_TO_CREATOR_PINS_REALTIME:131,FRESH_SIG_FROM_BOARD:125,RECENT_ENGAGED_CREATOR_BOARDS:128,RECENT_ENGAGED_BOARDS:132,SHOPPING_CREATOR_REALTIME:133,GRAPHSAGE_BASED_RECOMMENDED_CREATOR_BOARDS:137,PIXIE_P2P:142,NEW_USE_CASE_PINS:145,RECBOOST_NEW_USE_CASES:146,SEARCHSAGE_PFY:147,SEARCHSAGE_SHOPPING_PFY:155,INTEREST_EXPLORATION:149,INTEREST_EXPLORATION_TRENDY_QUERIES:150,INTEREST_EXPLORATION_RELATED_INTERESTS:151,RECBOOST_INTERESTS:152,HF_STORY_SHOPPING_RETARGETING:154,RECBOOST_STORY_PINS:156,RECBOOST_STORY_BOARDS:157,PINNABILITY_EMBEDDINGS:158,PINNABILITY_FRESH_STORY_EMBEDDINGS:159,PINNABILITY_STORY_EMBEDDINGS:160,PINNABILITY_PRODUCT_PIN_EMBEDDINGS:195,PINNABILITY_FRESH_PRODUCT_PIN_EMBEDDINGS:209,PINNABILITY_TML_PRODUCT_PIN_EMBEDDINGS:213,PINNABILITY_MULTI_EMBEDDINGS:210,EXPLORATION_STORY_PINS:161,EXPLORATION_STORY_PINS_BASELINE:162,EXPLOITATION_STORY_PINS:163,ANNOTATION_REC_CREATOR_STORY_PINS:166,GRAPHSAGE_MULTI_PINS_TO_STORY_PINS:167,IDEASTREAM_GRAPHSAGE_STORY_PINS:168,HF_EDUCATION_PIN_INSERTION:169,RP_EDUCATION_PIN_INSERTION:170,USER_TO_CREATOR_STORY_PINS:171,USER_TO_CREATOR_STORY_PINS_ENGAGEMENT:176,COENGAGEMENT_STORY_PINS:172,ANNOTATION_STORY_PINS:177,DISCOVER_STREAM_DEMOGRAPHIC_FALLBACK:178,DISCOVER_STREAM_CELEBRITY:179,GRAPHSAGE_SHOPIFY_VMP_PRODUCT_PINS:180,CREATOR_BEST_IDEA_PINS:181,INTEREST_BEST_IDEA_PINS:182,NAVBOOST_STORY_PINS:183,SHOPPING_DISTRIBUTION_PINS:185,WATCH_TAB_EHQ_STORIES:186,NOTIF_LEARNED_RETRIEVAL:187,NOTIF_DIRECT_INJECT:207,LANDING_PAGE_PIN_RECOMMENDATIONS:188,PINNERSAGE_LEARNED_EMBEDDINGS:189,RECGPT_CG_USER_TO_PINS:206,TOPIC_FEED:190,ORGANIC_COENGAGEMENT:211,RECBOOST_SHOPPING:214,RTC_IMPROVEMENT_TEST_1:501,RTC_IMPROVEMENT_TEST_2:502,RTC_IMPROVEMENT_TEST_3:503,RTC_IMPROVEMENT_TEST_4:504,RTC_IMPROVEMENT_TEST_5:505,RTC_IMPROVEMENT_TEST_6:506,RTC_IMPROVEMENT_TEST_7:507,RTC_IMPROVEMENT_TEST_8:508,RTC_IMPROVEMENT_TEST_9:509,RTC_IMPROVEMENT_TEST_10:510,RTC_IMPROVEMENT_TEST_11:511,RTC_IMPROVEMENT_TEST_12:512,RTC_IMPROVEMENT_TEST_13:513,RTC_IMPROVEMENT_TEST_14:514,RTC_IMPROVEMENT_TEST_15:515,RTC_BLENDER_TEST:516,P2P_COMMERCE:21,P2P:14,LENS_CAMERA_VISUALLY_SIMILAR:111,RECENT_FOLLOWED_INTEREST:59,RECENT_FOLLOWED_BOARD:61,GRAPHSAGE_SHOPIFY_VMP_MERCHANT_ACTIVATION_PRODUCT_PINS:174,FOLLOWED_INTEREST_SEO_BESPIN_EXPORATION:184,XPIXIE_TO_PRODUCT_PINS:194,SHOPPING_RECENTLY_VIEWED_MODULE_PINS:198,SHOPPING_RECENTLY_SAVED_MODULE_PINS:199,SHOPPING_BEST_SELLING_RECOMMENDED_BRAND_MODULE_PINS:200,SHOPPING_SHOP_THE_BOARD_MODULE_PINS:203,SHOPPING_ON_SALE_MODULE_PINS:204,SHOPPING_PRODUCT_CATEGORY_BASED_MODULE_PINS:205,SHOPPING_SHOP_SEARCH_MODULE_PINS:208,RECENTLY_VIEWED_ORGANIC_MODULE_PINS:201,RECENTLY_SAVED_ORGANIC_MODULE_PINS:202};function o({feedbackData:e,feedbackType:n,pinId:a,pinFeedbackType:o,recommendationReason:i,complaintReason:l,clientTrackingParams:s,isThirdPartyAd:r}){switch(n){case"search":return{action:"unrelatedSearchPin",actionOptions:{query:e?.query,pin_id:a}};case"related":return{action:"relatedPinHide",actionOptions:{pin:a}};case"newsHub":return{action:"newsHubPinHide",actionOptions:{pin_id:a,news_id:e?.newsId}};default:var _;let c="promoted"===n,d=(_=i?.reason)&&t[_],E=i?.reasonId??i?.board?.entityId,I={complaint_reason:l||0,pin_id:a,feedback_type:o||1,promoted:c};return d&&(I.recommendation_reason_id=d),E&&(I.through_id=E),i?.throughProperties&&(I.through_properties=i.throughProperties.reduce((e,n)=>{let{key:a,data:t}=n;return a&&(e[a]=[...e[a]||[],...t||[]]),e},{})),s&&(I.client_tracking_params=s),r&&(I.is_third_party_ad=r),{action:c?"promotedComplaint":"complaint",actionOptions:I}}}},170168:(e,n,a)=>{a.d(n,{Ag:()=>i,C0:()=>r,L1:()=>E,Vi:()=>l,YD:()=>d,kS:()=>o,oo:()=>s,p3:()=>I,vC:()=>_,vI:()=>c});var t=a(401060);let o="https://www.pinterest.com/business/hub/",i="https://www.pinterest.com/homefeed/",l="www.pinterest.com",s="https://help.pinterest.com",r=`${(0,t.Z)({site:"www"})}`,_=(0,t.Z)({site:"developers"}),c=`${(0,t.Z)({site:"sterling"})}`,d=`${(0,t.Z)({site:"analytics"})}`,E=`${(0,t.Z)({site:"trends"})}`,I=`${(0,t.Z)({site:"www",path:"/product-catalogs/data-source/?advertiserId="})}`},112891:(e,n,a)=>{a.d(n,{Z:()=>i});var t=a(883119),o=a(785893);function i({iconAccessibilityLabel:e,icon:n,linkAccessibilityLabel:a,showNavigationIcon:i,text:l}){return(0,o.jsxs)(t.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,o.jsx)(t.xu,{"data-test-id":"ad-reason-icon",children:(0,o.jsx)(t.Sj,{accessibilityLabel:e,bgColor:"lightGray",icon:n,iconColor:"darkGray"})}),(0,o.jsx)(t.xu,{alignSelf:"center","data-test-id":"ad-location-targeting-reason",height:"100%",marginStart:2,children:(0,o.jsx)(t.xv,{children:l})}),i&&a&&(0,o.jsx)(t.kC,{direction:"column",justifyContent:"center",children:(0,o.jsx)(t.JO,{accessibilityLabel:a,color:"default",icon:"arrow-forward"})})]})}},493633:(e,n,a)=>{a.d(n,{ZP:()=>b,K1:()=>M,we:()=>C,nn:()=>x,zn:()=>D});var t,o=a(667294);a(167912);var i=a(407043),l=a(916117),s=a(780280),r=a(784590),_=a(19121),c=a(883119),d=a(121151),E=a(898781),I=a(349700),T=a(966113),P=a(170168),R=a(112891),A=a(698330),N=a(785893);function S({brandName:e,language:n,geoRegion:a,geoPostalCode:t,ageBucketMatch:o,localeMatch:i,genderMatch:l,deviceMatch:s,isCustomerListMatched:r,isActAlikeMatched:d,isEngagementMatched:T,isFromGPSLocation:P,gender:S,isFirstPartyAdPersonalizationEnabled:g,isThirdPartyAdPersonalizationEnabled:p,keywordMatch:m}){let h=(0,E.ZP)(),{id:O}=(0,_.Z)(),u=(0,A.mN)()(O??""),M=u?.gender??"";return(0,N.jsx)(c.xu,{"data-test-id":"ad-reasons",children:(0,N.jsxs)(c.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[!g&&(0,N.jsx)(R.Z,{icon:"pinterest",iconAccessibilityLabel:h._('Icon for ad targeting context', 'app.common.react.components.PinRep.components.AdReasons.context', 'Icon for ad targeting context'),text:(0,I.nk)(h._('Based on the context of the content you see in a session {{ onPinterest }}', 'app.common.react.components.PinRep.components.AdReasonsModal.context', 'Ad explanation for targeting context of content, onPinterest: on Pinterest Platform'),{onPinterest:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:"on Pinterest"},"ad-reasons-platform-bucket")})}),""!==m&&(0,N.jsx)(R.Z,{icon:"search",iconAccessibilityLabel:h._('Icon for ad targeting keyword search', 'app.common.react.components.PinRep.components.AdReasons.keywordSearchIcon', 'Icon for ad targeting keyword search'),text:(0,I.nk)(h._('Because you searched for {{ keyword }}', 'app.common.react.components.PinRep.components.AdReasonsModal.keywordSearch', 'Ad explanation for targeting keyword search, keyword: Search keyword'),{keyword:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:m},"ad-reasons-keyword-bucket")})}),(g||p)&&(0,N.jsx)(R.Z,{icon:"cog",iconAccessibilityLabel:h._('Icon for ad targeting user settings', 'app.common.react.components.PinRep.components.AdReasons.settings', 'Icon for ad targeting user settings'),text:h._('Depending on your privacy settings, because of your activities on and/or off Pinterest', 'app.common.react.components.PinRep.components.AdReasonsModal.settings', 'Ad explanation for targeting user settings')}),(""!==o||""!==l&&"unspecified"!==M||""!==s||""!==i||g&&T||g&&d||""!==a||g&&""!==t)&&(0,N.jsx)(R.Z,{icon:"person",iconAccessibilityLabel:h._('Icon for ad targeting advertiser name', 'app.common.react.components.PinRep.components.AdReasons.advertiserName', 'Icon for ad targeting advertiser name'),text:(0,I.nk)(h._('Because {{ advertiserName }} is trying to reach people:', 'app.common.react.components.PinRep.components.AdReasonsModal.advertiserName', 'Ad explanation for targeting advertiser name, advertiserName: advertiser name'),{advertiserName:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-advertiserName-bucket")})}),(0,N.jsxs)(c.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[""!==o&&(0,N.jsx)(c.xu,{marginBottom:1,marginStart:12,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(h._('{{ bulletPoint }} Who have set their age within the {{ ageBucketMatch }} age range', 'app.common.react.components.PinRep.components.AdReasonsModal.ageBucketRangeMatch', 'Ad explanation for targeting age range, ageBucketMatch: Users age range, bulletPoint: leading bullet point'),{bulletPoint:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:"•"},"bullent-point"),ageBucketMatch:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:o},"ad-reasons-age-bucket")})})}),!g&&""!==i&&(0,N.jsx)(c.xu,{marginBottom:1,marginStart:12,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(h._('{{ bulletPoint }} Who have set their language to {{ language }}', 'app.common.react.components.PinRep.components.AdReasonsModal.languageMatch', 'Ad explanation for targeting language, language: Users language, bulletPoint: leading bullet point'),{bulletPoint:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:"•"},"bullent-point"),language:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:n},"ad-reasons-language")})})}),g&&""!==i&&(0,N.jsx)(c.xu,{marginBottom:1,marginStart:12,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(h._('{{ bulletPoint }} Primary language is {{ language }}', 'app.common.react.components.PinRep.components.AdReasonsModal.primarylLanguageMatch', 'Ad explanation for targeting language, language: Users languag, bulletPoint: leading bullet point'),{bulletPoint:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:"•"},"bullent-point"),language:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:n},"ad-reasons-language")})})}),!g&&""!==l&&"unspecified"!==M&&(0,N.jsx)(c.xu,{marginBottom:1,marginStart:12,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(h._('{{ bulletPoint }} Who have set their gender to {{ gender }}', 'app.common.react.components.PinRep.components.AdReasonsModal.setGenderMatch', 'Ad explanation for targeting gender, gender: Users gender, bulletPoint: leading bullet point'),{bulletPoint:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:"•"},"bullent-point"),gender:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:S},"ad-reasons-gender")})})}),g&&""!==l&&"unspecified"!==M&&(0,N.jsx)(c.xu,{marginBottom:1,marginStart:12,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(h._('{{ bulletPoint }} {{ gender }}', 'app.common.react.components.PinRep.components.AdReasonsModal.genderMatch', 'Ad explanation for targeting gender, gender: Users gender, bulletPoint: leading bullet point'),{bulletPoint:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:"•"},"bullent-point"),gender:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:S},"ad-reasons-gender")})})}),""!==s&&(0,N.jsx)(c.xu,{marginBottom:1,marginStart:12,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(h._('{{ bulletPoint }} With your device type', 'app.common.react.components.PinRep.components.AdReasonsModal.deviceMatch', 'Ad explanation for targeting device, bulletPoint: leading bullet point'),{bulletPoint:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:"•"},"bullent-point")})})}),!g&&""!==a&&(0,N.jsx)(c.xu,{marginBottom:1,marginStart:12,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(h._('{{ bulletPoint }} In {{ country }}', 'app.common.react.components.PinRep.components.AdReasonsModal.countryMatch', 'Ad explanation for targeting country, country: Users country, bulletPoint: leading bullet point'),{bulletPoint:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:"•"},"bullent-point"),country:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:a},"ad-reasons-country")})})}),g&&""!==a&&(0,N.jsx)(c.xu,{marginBottom:1,marginStart:12,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(h._('{{ bulletPoint }} Based in {{ geoRegion }}', 'app.common.react.components.PinRep.components.AdReasonsModal.geoRegionMatch', 'Ad explanation for targeting geoRegion, geoRegion: Users geoRegion, bulletPoint: leading bullet point'),{bulletPoint:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:"•"},"bullent-point"),geoRegion:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:a},"ad-reasons-geoRegion")})})}),g&&""!==t&&(0,N.jsx)(c.xu,{marginBottom:1,marginStart:12,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(h._('{{ bulletPoint }} Based in {{ geoPostalCode }}', 'app.common.react.components.PinRep.components.AdReasonsModal.geoPostalCodeMatch', 'Ad explanation for targeting geoPostalCode, geoPostalCode: Users geoPostalCode, bulletPoint: leading bullet point'),{bulletPoint:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:"•"},"bullent-point"),geoPostalCode:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:t},"ad-reasons-geoPostalCode")})})}),g&&T&&(0,N.jsx)(c.xu,{marginBottom:1,marginStart:12,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(h._('{{ bulletPoint }} Who have interacted with their content on Pinterest', 'app.common.react.components.PinRep.components.AdReasonsModal.engagementMatch', 'Ad explanation for targeting engagement, bulletPoint: leading bullet point'),{bulletPoint:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:"•"},"bullent-point")})})}),g&&d&&(0,N.jsx)(c.xu,{marginBottom:1,marginStart:12,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(h._('{{ bulletPoint }} With similar demographic or interests as other {{ brandName }} customers', 'app.common.react.components.PinRep.components.AdReasonsModal.actAlikeMatch', 'Ad explanation for targeting act alike, brandName: brand name, bulletPoint: leading bullet point'),{bulletPoint:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:"•"},"bullent-point"),brandName:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-act-alike")})})})]}),g&&r&&(0,N.jsx)(R.Z,{icon:"menu",iconAccessibilityLabel:h._('Icon for ad targeting user on an audience list', 'app.common.react.components.PinRep.components.AdReasons.listIcon', 'Icon for ad targeting customer list'),text:(0,I.nk)(h._('Because you are on a list provided by {{brandName}}', 'app.common.react.components.PinRep.components.AdReasonsModal.onCustomerListTargeting', 'Ad explanation for targeting customer list , brandName: promoter name'),{brandName:(0,N.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-customer-list")})}),g&&P&&(0,N.jsx)(R.Z,{icon:"location",iconAccessibilityLabel:h._('Icon for ad targeting user on GPS', 'app.common.react.components.PinRep.components.AdReasons.GPS', 'Icon for ad targeting GPS'),text:h._('Because of your GPS Location', 'app.common.react.components.PinRep.components.AdReasonsModal.GPSLocation', 'Ad explanation for targeting GPS')})]})})}function g({onDismiss:e,brandName:n,country:a,language:t,geoRegion:o,geoPostalCode:l,ageBucketMatch:s,localeMatch:r,interestMatch:_,genderMatch:R,deviceMatch:A,isCustomerListMatched:g,isActAlikeMatched:p,isEngagementMatched:m,isExpandTargetingMatched:h,isFromGPSLocation:O,isVisitorMatched:u,isShoppingProspectingMatched:M,isPlPersonaMatched:x,isFirstPartyAdPersonalizationEnabled:C,isThirdPartyAdPersonalizationEnabled:b,keywordMatch:L,thirdPartyAdAttributes:B}){let{logContextEvent:G}=(0,i.v)(),y=(0,E.ZP)(),k=D(R,y),U=g||m||p||h||O||u||x||M||""!==s||""!==r||""!==k||""!==o||""!==l||""!==L,v=B?.isEligibleForPromotedPartnership??!1;return(0,N.jsx)(d.ZP,{accessibilityModalLabel:y._('Why am I seeing this Ad?', 'app.common.react.components.PinRep.components.AdReasonsModal', 'Modal for explaining the reasons an advertiser is targeting a user'),onDismiss:e,children:(0,N.jsxs)(c.xu,{paddingX:8,paddingY:6,children:[(0,N.jsxs)(c.xu,{display:"flex",justifyContent:"center",marginBottom:6,position:"relative",children:[(0,N.jsx)(c.xu,{left:!0,position:"absolute",children:(0,N.jsx)(c.hU,{accessibilityLabel:y._('Close', 'app.common.react.components.PinRep.components.AdReasonsModal.closeModal', 'Close ad reasons modal'),icon:"cancel",iconColor:"darkGray",onClick:()=>{G({event_type:102,element:11925,component:13756}),e()},size:"sm"})}),(0,N.jsx)(c.X6,{align:"center",size:"500",children:y._('Why you\'re seeing this ad', 'Heading for promoted Pins explanation', 'Heading for promoted pins explanation, WAISTA ')})]}),(0,N.jsxs)(c.xu,{children:[(0,N.jsxs)(c.kC,{direction:"column",gap:{row:0,column:4},children:[U&&v&&(0,N.jsx)(c.xu,{"data-test-id":"waista-reason-pre-text-partnership",marginBottom:4,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(y._('{{ promotedPartnershipAdvertiserName }} paid, through a partnership with {{ promotedPartnershipAttributionName }}, to have this Pin show up where you\'d be more likely to notice it. Based on what you\'ve told us or other information, we think you fit some of those groups:', 'app.common.react.components.PinRep.components.AdReasonsModal.WAISTAaudienceExplanation', 'Text informing the user about who should be the advertiser\'s target audience, for WAISTA promotedPartnershipAdvertiserName: Name of advertiser, promotedPartnershipAttributionName:Name of promoted partner'),{promotedPartnershipAdvertiserName:B?.promotedPartnershipAdvertiserName,promotedPartnershipAttributionName:B?.promotedPartnershipAttributionName})})}),U&&!v&&(0,N.jsx)(c.xu,{"data-test-id":"waista-reason-pre-text",marginBottom:4,children:(0,N.jsx)(c.xv,{children:y._('You may be seeing this ad:', 'app.common.react.components.PinRep.components.AdReasonsModal.WAISTAReasonExplanation', 'text informing below will be WAISTA explanation')})})]}),(0,N.jsx)(c.xu,{"data-test-id":"ad-reasons",children:(0,N.jsxs)(c.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[(0,N.jsx)(S,{ageBucketMatch:s,brandName:n,country:a,deviceMatch:A,gender:k,genderMatch:R,geoPostalCode:l,geoRegion:o,interestMatch:_,isActAlikeMatched:p,isCustomerListMatched:g,isEngagementMatched:m,isExpandTargetingMatched:h,isFirstPartyAdPersonalizationEnabled:C,isFromGPSLocation:O,isPlPersonaMatched:x,isShoppingProspectingMatched:M,isThirdPartyAdPersonalizationEnabled:b,isVisitorMatched:u,keywordMatch:L,language:t,localeMatch:r}),U&&(0,N.jsx)(c.xu,{marginBottom:1,children:(0,N.jsx)(c.xv,{children:y._('There could also be more factors not listed here.', 'app.common.react.components.PinRep.components.AdReasonsModal.moreFactorsText', 'text informing there could also be more factors')})}),U&&(0,N.jsx)(c.xu,{marginBottom:1,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(y._('If this isn\'t right, {{ changeUserSettings }}', 'app.common.react.components.PinRep.components.AdReasonsModal.changeUserSettingsText', 'Text explaining how to update personal information, changeUserSettings: link to personal settings'),{changeUserSettings:(0,N.jsx)(c.xv,{inline:!0,weight:"normal",children:(0,N.jsx)(c.rU,{display:"inline",href:`${P.C0}${T.AHp}`,onClick:()=>{G({event_type:101,component:13756,element:13361})},target:"blank",children:y._('update your personal information', 'app.common.react.components.PinRep.components.AdReasonsModal.changeUserSettings', 'Link for updating personal information')})},"ad-reasons-change-user-settings")})})})]})}),(0,N.jsxs)(c.kC,{direction:"column",gap:{row:0,column:1},children:[(0,N.jsx)(c.xu,{marginBottom:1,marginTop:1,children:(0,N.jsx)(c.X6,{size:"400",children:y._('Ads on Pinterest', 'app.common.react.components.PinRep.components.AdReasonsModal.adsOnPinterestHeading', 'Text for explaining Ads on Pinterest')})}),(0,N.jsx)(c.xu,{marginBottom:4,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(y._('Review your {{adPreferencesLink}} to change your ad preferences.', 'app.common.react.components.PinRep.components.AdReasonsModal.change.adPreferencesText', 'Text showing where to change your ad preferences, adPreferencesLink: link to privacy settings'),{adPreferencesLink:(0,N.jsx)(c.xu,{"data-test-id":"ad-reasons-review-ad-preferences",display:"inlineBlock",children:(0,N.jsx)(c.xv,{inline:!0,weight:"normal",children:(0,N.jsx)(c.rU,{display:"inline",href:`${P.C0}${T.Gxc}`,onClick:()=>{G({event_type:101,component:13756,element:13401})},target:"blank",children:y._('Privacy Settings', 'app.common.react.components.PinRep.components.AdReasonsModal.privacy.settings', 'Privacy settings link')})},"ad-reasons-review-ad-preferences")})})})}),(0,N.jsx)(c.xu,{marginBottom:4,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(y._('For more about how we collect and use data, read our {{ privacyPolicyLink }}', 'app.common.react.components.PinRep.components.AdReasonsModal.readPrivacyPolicyText', 'Text explaining how we collect and use data, privacyPolicyLink: link to privacy policy Page'),{privacyPolicyLink:(0,N.jsx)(c.xu,{"data-test-id":"ad-reasons-privacy-policy",children:(0,N.jsx)(c.xv,{inline:!0,weight:"normal",children:(0,N.jsx)(c.rU,{display:"inline",href:T.R_9,onClick:()=>{G({event_type:101,component:13756,element:13402})},target:"blank",children:y._('Privacy Policy', 'app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyLinkUrl', 'Privacy policy link about how data is collected and used')})},"ad-reasons-privacy-policy")})})})}),(0,N.jsx)(c.xu,{marginBottom:4,children:(0,N.jsx)(c.xv,{children:(0,I.nk)(y._('To stop seeing content from an advertiser, {{ blockAccounts }}', 'app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyText', 'Text explaining how to block an advertiser profile, blockAccounts: link to how to block accounts'),{blockAccounts:(0,N.jsx)(c.xu,{"data-test-id":"ad-reasons-block-accounts",children:(0,N.jsx)(c.xv,{inline:!0,weight:"normal",children:(0,N.jsx)(c.rU,{display:"inline",href:T.K_Y,onClick:()=>{G({event_type:101,component:13756,element:12058})},target:"blank",children:y._('learn how to block accounts', 'app.common.react.components.PinRep.components.AdReasonsModal.blockAccountLink', 'Link for how to block accounts')})},"ad-reasons-block-accounts")})})})})]})]})]})})}let p=void 0!==t?t:t=a(897328),m=e=>e._('Female', 'waista.modal.attribute.female', 'Gender attribute for female'),h=e=>e._('Male', 'waista.modal.attribute.male', 'Gender attribute for male'),O=e=>e._('Web', 'waista.modal.attribute.web', 'device attribute for web'),u=e=>e._('Mobile Web', 'waista.modal.attribute.mWeb', 'device attribute for mobile web');function M(e,n){let{name:a=""}=e.find(e=>e.key===n)??{};return a}function D(e,n){return"FEMALE"===e?m(n):"MALE"===e?h(n):""}function x(e,n){return"AppType_WEB"===e||"AppType_WEB_DENZEL"===e?O(n):"AppType_WEB_MOBILE"===e?u(n):""}function C(e,n){let{name:a=""}=e.find(e=>e.key===n)??{};return a}function b({pinKey:e,onDismiss:n}){let{logContextEvent:a}=(0,i.v)(),{locale:t}=(0,s.B)(),{country:c=""}=(0,_.Z)(),d=(0,r.Z)({name:"CountriesResource",options:{hasEmptyState:!0}}),E=(0,r.Z)({name:"LocalesResource"}),I=(0,l.Z)(p,e);(0,o.useEffect)(()=>{a({event_type:120,component:13756})},[a]);let T=I?.adTargetingAttribution?.isFirstPartyAdPersonalizationEnabled??!1,P=I?.adTargetingAttribution?.isThirdPartyAdPersonalizationEnabled??!1,{promoter:R,isEligibleForPromotedPartnership:A,promotedPartnershipAttributionName:S,promotedPartnershipAdvertiserName:m}=I??{},h={isCustomerListMatched:I?.adTargetingAttribution?.isCustomerListMatched??!1,isActalikeMatched:I?.adTargetingAttribution?.isActalikeMatched??!1,isEngagementMatched:I?.adTargetingAttribution?.isEngagementMatched??!1,isExpandTargetingMatched:I?.adTargetingAttribution?.isExpandTargetingMatched??!1,isFromGpsLocation:I?.adTargetingAttribution?.isFromGpsLocation??!1,isVisitorMatched:I?.adTargetingAttribution?.isVisitorMatched??!1,isShoppingProspectingMatched:I?.adTargetingAttribution?.isShoppingProspectingMatched??!1,isPlPersonaMatched:I?.adTargetingAttribution?.isPlPersonaMatched??!1,matchedAgeBucket:I?.adTargetingAttribution?.matchedAgeBucket??"",matchedLocale:I?.adTargetingAttribution?.matchedLocale??"",matchedInterest:I?.adTargetingAttribution?.matchedInterest??"",matchedGender:I?.adTargetingAttribution?.matchedGender??"",matchedDevice:I?.adTargetingAttribution?.matchedDevice??"",matchedKeyword:I?.adTargetingAttribution?.matchedKeyword??"",geoRegion:I?.adTargetingAttribution?.geoRegion??"",geoPostalCode:I?.adTargetingAttribution?.geoPostalCode??""},{isCustomerListMatched:O=!1,isActalikeMatched:u=!1,isEngagementMatched:D=!1,isExpandTargetingMatched:x=!1,isFromGpsLocation:b=!1,isVisitorMatched:L=!1,isShoppingProspectingMatched:B=!1,isPlPersonaMatched:G=!1,matchedAgeBucket:y="",matchedLocale:k="",matchedInterest:U="",matchedGender:v="",matchedDevice:f="",matchedKeyword:j="",geoRegion:w="",geoPostalCode:F=""}=function(e=null,n=4){return e&&Object.keys(e).filter(n=>"boolean"==typeof e[n]||"string"==typeof e[n]).filter(n=>!1!==e[n]&&""!==e[n]).slice(0,n).reduce((n,a)=>({...n,[a]:e[a]}),{})}(h)??{},H=R?.fullName??"",z=M(d.data??[],c),Y=C(E.data??[],t),V=R?.username??"";return(0,N.jsx)(g,{ageBucketMatch:y,brandName:H,country:z,deviceMatch:f,genderMatch:v,geoPostalCode:F,geoRegion:w,interestMatch:U,isActAlikeMatched:u,isCustomerListMatched:O,isEngagementMatched:D,isExpandTargetingMatched:x,isFirstPartyAdPersonalizationEnabled:T,isFromGPSLocation:b,isPlPersonaMatched:G,isShoppingProspectingMatched:B,isThirdPartyAdPersonalizationEnabled:P,isVisitorMatched:L,keywordMatch:j,language:Y,localeMatch:k,onDismiss:n,thirdPartyAdAttributes:{isEligibleForPromotedPartnership:A,promotedPartnershipAttributionName:S,promotedPartnershipAdvertiserName:m},userName:V})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/78637-59286cf45bec2eb3.mjs.map