var express = require('express')
var router = express.Router()
var request = require('request')
var md5 = require('md5')

var headers = {'Content-Type': 'application/x-www-form-urlencoded'},
    dvt = 2,
	ver = 1.0;

router.get('/aa',function(req,res,next){
    req.session.name = 'zhangsan';
    var goodsid = 18799,
        userid = '',
        key = 'sdl#^kfj83*&(247D*()!@KutePaoebw',
        goodsDetailKey = md5(dvt + '' + goodsid + '' + userid + ''+ ver + '' + key);
        
    var post_data = {
        'goodsid': goodsid,
        'userid':userid,
        'ver': ver,
        'dvt': dvt,
        'key': goodsDetailKey
    };
    console.log(post_data);
     request.post({
        url: 'http://uatapi.wolianw.com/v2/index.php/home/Product/getGoodsDetail',
        headers: headers,
        form: post_data,
        timeout: 30000
    }, function (err, response, result) {
        // console.log(err,result)
        console.log(111,req.session);
        res.send(result)
    })
});

module.exports = router ;