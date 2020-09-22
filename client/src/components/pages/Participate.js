import React from 'react';
import ParticipateData from '../common/ParticipateData';
import List from '../common/List';
import Disclaimer from '../common/Disclaimer';
import '../styles/Participate.css';
import AnchorList from '../common/AnchorList';

const Participate = () => {
    return (
        <div className="sectionPage" id="participate">
            <ParticipateData
                h="Getting Started with Hacktoberfest"
                para="We ask all participants to read through the details to ensure that the global community is working toward a shared
                goal. Thank you for honoring the values and following the rules of participation."
            />
            <div className="dataDiv">
                <h2>Participation details</h2>
                <hr className="hrUnderline" />
                <ul>
                    <List
                        list={[
                            'Hacktoberfest is open to everyone in our global community. Whether you’re a seasoned contributor or looking for projects to contribute to for the first time, you’re welcome to participate.',
                            'Pull requests can be made in any GitHub-hosted repositories/projects. As long as the project is public and GitHub-hosted, your pull requests will count toward your participation.',
                            'You can sign up anytime between October 1 and October 31. Just be sure to sign up on the official Hacktoberfest website for your pull requests to count.',
                        ]}
                    />
                </ul>
            </div>
            <ParticipateData
                h="Participation rules"
                para="To get a shirt, you must make four pull requests (PRs)
                between October 1–31 in any time zone. Pull requests can be
                to any public repository on GitHub, not just the ones
                highlighted. The pull request must contain commits you made
                yourself. If a maintainer reports your pull request as spam,
                it will not be counted toward your participation in
                Hacktoberfest. If a maintainer reports behavior that’s not
                in line with the project’s code of conduct, you will be
                ineligible to participate. This year, the first 75,000
                participants can earn a T-shirt."
            />
            <div className="dataDiv">
                <ParticipateData
                    h="Quality standards"
                    para="In line with Hacktoberfest value #2 (Quantity is fun,
                quality is key), we have provided examples of pull requests
                that we consider to be low-quality contributions (which we
                discourage)."
                />
                <ul>
                    <List
                        list={[
                            'Pull requests that are automated (e.g. scripted opening pull requests to remove whitespace/fix typos/optimize images).',
                            "Pull requests that are disruptive (e.g. taking someone else's branch/commits and making a pull request).",
                            'Pull requests that are regarded by a project maintainer as a hindrance vs. helping.',
                            "Something that's clearly an attempt to simply +1 your pull request count for October.",
                        ]}
                    />
                </ul>
                <p>
                    Last but not least, one pull request to fix a typo is fine,
                    but 5 pull requests to remove a stray whitespace is not.
                </p>
            </div>
            <div className="dataDiv">
                <h2>Important Resources for the Participation</h2>
                <hr className="hrUnderline" />
                <ul>
                    <AnchorList
                        list={[
                            'Understanding the GitHub flow',
                            'How to Contribute to Open Source',
                            'Git Cheatsheets',
                            'An Introduction to Open Source',
                            'How to write the perfect pull request',
                            'How to write a good commit message'
                        ]}
                        links={[
                            'https://guides.github.com/introduction/flow/',
                            'https://opensource.guide/how-to-contribute/',
                            'https://training.github.com/',
                            'https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source',
                            'https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/',
                            'https://dev.to/chrissiemhrk/git-commit-message-5e21'
                        ]}
                    />
                </ul>
            </div>
            <div className="dataDiv">
                <h2>Hacktober Fest 2020 Contribution steps</h2>
                <hr className="hrUnderline" />
            </div>
            <Disclaimer />
        </div>
    );
};

export default Participate;
