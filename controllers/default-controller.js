'use strict';

let conversion = require('phantom-html-to-pdf')()
let streamLength = require('stream-length')
let fs = require('fs')

module.exports = {
    hello: function (req, res) {
        res.json({
            message: 'hello world'
        })
    },
    demo: function (req, res) {
        let opt = {
            url: 'http://www.sce.pccu.edu.tw'
        }
        conversion(opt, function(err, pdf){
            streamLength(pdf.stream, {}, function(err, result) {
                res.setHeader('Content-Length', result)
                res.setHeader('Content-Type', 'application/pdf')

                pdf.stream.pipe(res)
            })
        })
    }
}