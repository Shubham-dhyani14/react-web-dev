export const API_KEY = 'AIzaSyCXP2aoOcs1oju8wER87wA8ZkTvT_-asO0' ;
const maxResults = 35;
export const API_YT_VID_DATA = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=In&maxResults=${maxResults}&key=${API_KEY}` ;
export const API_YT_CHANNEL_DATA = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics` ;