/**
 * Created by John on 2014/8/11.
 */
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = '';
var options = {
    url: 'http://ix.umei.cc//img2012/XR_VIP04/XR20140809N00201/0059.jpg',
    headers: {
       'Referer':'http://www.umei.cc/'  // 必须添加Referer，否则会被拒绝下载
    }
};
request(options).pipe((fs.createWriteStream('demo.jpg')));