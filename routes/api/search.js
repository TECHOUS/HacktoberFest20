const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * @access public
 * @author gauravw
 * @copyright techous
 * @description this is the search API for checking hacktober fest 20
 * @param username
 **/
router.get('/search', (req, res) => {
    const { username } = req.query;

    // `https://api.github.com/search/issues?q=+is:pr+user:${username}+is:public+author:${username}+created:2020-10-01T00:01:00Z..2020-10-30T23:59:00Z&sort=created&order=desc`
    if (!username || username === '') {
        res.send({ message: 'Invalid username' });
    } else {
        axios
            .get(
                `https://api.github.com/search/issues?q=+is:pr+user:${username}+is:public+author:${username}+created:2019-09-01T00:01:00Z..2019-09-30T23:59:00Z&sort=created&order=desc`
            )
            .then((response) => {
                if(response.status === 200){
                    res.json(response.data);
                }else{
                    res.status(400).json({ status: 400, message: 'Bad Request'});
                }
            })
            .catch((err) => {
                res.status(404).json({ status: 404, message: 'No Data Found'});
            });
    }
});

module.exports = router;
