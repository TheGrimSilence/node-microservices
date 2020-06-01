const request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY || 'JElywQw189vYhuy7zZAlmKfimaOteOobDRBowyN5uEwZmy6PAB5MHu0bml3HONCT';
const zipCodeUrl = 'https://www.zipcodeapi.com/rest/';

const distance = {
    find: (req, res, next) => {
        request(
            `${zipCodeUrl}${apiKey}/distance.json/${req.params.zipCode1}/${req.params.zipCode2}/mile`,
            (err, response, body) => {
                if (!err && response.statusCode == 200) {
                    response = JSON.parse(body)
                    res.send(response)
                } else {
                    console.log(`${response.statusCode}${response.body}`);
                    res.send({distance: -1})
                }
            }
        )
    }
}

module.exports = distance
