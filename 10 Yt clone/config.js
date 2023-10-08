export const API_KEY = 'AIzaSyCXP2aoOcs1oju8wER87wA8ZkTvT_-asO0' ;
const maxResults = 35;
export const API_YT_VID_DATA = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=In&maxResults=${maxResults}&key=${API_KEY}` ;
export const API_YT_CHANNEL_DATA = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics` ;

export const API_SEARCH_RESULTS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&regionCode=In&q=surfing&key=`

export const API_AUTOCOMPLETE = `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=`