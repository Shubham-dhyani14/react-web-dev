import 'dotenv'

export const API_KEY = process.env.API_KEY ;
console.log('dotenv key' , API_KEY); 
const maxResults = 25;
export const API_YT_VID_DATA = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=In&maxResults=${maxResults}&key=${API_KEY}` ;
export const API_YT_CHANNEL_DATA = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics` ;

export const API_SEARCH_RESULTS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&regionCode=In&key=${API_KEY}&q=`

export const API_AUTOCOMPLETE = `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&key=${API_KEY}&q=`

export const API_VIDEO_BY_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`