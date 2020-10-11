const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * EndPoint: /api/v1/search?username=<username>
 * 
 * @access public
 * @author gauravw
 * @copyright techous
 * @description this is the search API for checking hacktober fest 20
 * @param username
 * 
 **/
router.get('/search', (req, res) => {
    const { username } = req.query;

    if (!username || username === '') {
        res.status(400).send({ status: 400, message: 'Invalid User Name' });
    } else {
        let url = process.env.url.replace('${username}', username);
        
        axios
            .get(
                url
                ,{
                    headers: {
                        'Authorization': `token ${process.env.token}`
                    }
                }
            )
            .then((response) => {
                if(response.status === 200){
                    res.json({...response.data,"status":200});
                }else{
                    res.status(400).json({ status: 400, message: 'Bad Request'});
                }
            })
            .catch((err) => {
                res.status(404).json({ status: 404, message: 'No Data Found'});
            });
    }
});

// API for testing purposes only
router.get('/search/mock', (req,res)=>{
    const { username } = req.query;

    if (!username || username === '') {

        setTimeout(()=>{
            res.status(400).send({ status: 400, message: 'Invalid User Name' })
        }, 4000);
    } else {
        res.json({
            "total_count": 3,
            "incomplete_results": false,
            "status": 200,
            "items": [
                {
                    "url": "https://api.github.com/repos/GauravWalia19/Data-Structures/issues/17",
                    "repository_url": "https://api.github.com/repos/GauravWalia19/Data-Structures",
                    "labels_url": "https://api.github.com/repos/GauravWalia19/Data-Structures/issues/17/labels{/name}",
                    "comments_url": "https://api.github.com/repos/GauravWalia19/Data-Structures/issues/17/comments",
                    "events_url": "https://api.github.com/repos/GauravWalia19/Data-Structures/issues/17/events",
                    "html_url": "https://github.com/GauravWalia19/Data-Structures/pull/17",
                    "id": 500497198,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0MzIyOTUzMTE4",
                    "number": 17,
                    "title": "Merge pull request #41 from GauravWalia19/master",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2019-09-30T20:09:28Z",
                    "updated_at": "2019-09-30T20:09:37Z",
                    "closed_at": "2019-09-30T20:09:37Z",
                    "author_association": "OWNER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/GauravWalia19/Data-Structures/pulls/17",
                        "html_url": "https://github.com/GauravWalia19/Data-Structures/pull/17",
                        "diff_url": "https://github.com/GauravWalia19/Data-Structures/pull/17.diff",
                        "patch_url": "https://github.com/GauravWalia19/Data-Structures/pull/17.patch"
                    },
                    "body": "Added array rotation in java",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/GauravWalia19/RAINBOW/issues/4",
                    "repository_url": "https://api.github.com/repos/GauravWalia19/RAINBOW",
                    "labels_url": "https://api.github.com/repos/GauravWalia19/RAINBOW/issues/4/labels{/name}",
                    "comments_url": "https://api.github.com/repos/GauravWalia19/RAINBOW/issues/4/comments",
                    "events_url": "https://api.github.com/repos/GauravWalia19/RAINBOW/issues/4/events",
                    "html_url": "https://github.com/GauravWalia19/RAINBOW/pull/4",
                    "id": 500480664,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0MzIyOTQxMjM2",
                    "number": 4,
                    "title": "Merge pull request #3 from GauravWalia19/dev",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2019-09-30T19:37:53Z",
                    "updated_at": "2019-09-30T19:38:00Z",
                    "closed_at": "2019-09-30T19:38:00Z",
                    "author_association": "OWNER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/GauravWalia19/RAINBOW/pulls/4",
                        "html_url": "https://github.com/GauravWalia19/RAINBOW/pull/4",
                        "diff_url": "https://github.com/GauravWalia19/RAINBOW/pull/4.diff",
                        "patch_url": "https://github.com/GauravWalia19/RAINBOW/pull/4.patch"
                    },
                    "body": "Sync commit for Code update for RAINBOW for java\r\n",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/GauravWalia19/RAINBOW/issues/3",
                    "repository_url": "https://api.github.com/repos/GauravWalia19/RAINBOW",
                    "labels_url": "https://api.github.com/repos/GauravWalia19/RAINBOW/issues/3/labels{/name}",
                    "comments_url": "https://api.github.com/repos/GauravWalia19/RAINBOW/issues/3/comments",
                    "events_url": "https://api.github.com/repos/GauravWalia19/RAINBOW/issues/3/events",
                    "html_url": "https://github.com/GauravWalia19/RAINBOW/pull/3",
                    "id": 500479987,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0MzIyOTQwNzcz",
                    "number": 3,
                    "title": "Code update for RAINBOW for java",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2019-09-30T19:36:35Z",
                    "updated_at": "2019-09-30T19:36:59Z",
                    "closed_at": "2019-09-30T19:36:58Z",
                    "author_association": "OWNER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/GauravWalia19/RAINBOW/pulls/3",
                        "html_url": "https://github.com/GauravWalia19/RAINBOW/pull/3",
                        "diff_url": "https://github.com/GauravWalia19/RAINBOW/pull/3.diff",
                        "patch_url": "https://github.com/GauravWalia19/RAINBOW/pull/3.patch"
                    },
                    "body": "## CHANGES\r\n\r\nnow we have full library for using colors with java on cli",
                    "performed_via_github_app": null,
                    "score": 1.0
                }
            ]
        });
    }
})

module.exports = router;
