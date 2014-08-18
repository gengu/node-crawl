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
       'Referer':'http://www.umei.cc/'
    }
};
request(options).pipe((fs.createWriteStream('customer2.jpg')));