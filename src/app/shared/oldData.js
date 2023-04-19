import reactLakeImg from '../assets/img/react-lake.jpg';
import chromeRiverImg from '../assets/img/chrome-river.jpg';
import breadCrumbImg from '../assets/img/breadcrumb-trail.jpg';
import reduxWoodsImg from '../assets/img/redux-woods.jpg';

export const CAMPSITES = [
    {
        id: 0,
        name: 'React Lake Campground',
        image: reactLakeImg,
        elevation: 1233,
        featured: false,
        description:
            'Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.'
    },
    {
        id: 1,
        name: 'Chrome River Campground ',
        image: chromeRiverImg,
        elevation: 877,
        featured: false,
        description:
            'Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.'
    },
    {
        id: 2,
        name: 'Breadcrumb Trail Campground',
        image: breadCrumbImg,
        elevation: 2901,
        featured: false,
        description:
            'Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.'
    },
    {
        id: 3,
        name: 'Redux Woods Campground',
        image: reduxWoodsImg,
        elevation: 42,
        featured: true,
        description:
            "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
    }
];


import bootStrapLogo from '../assets/img/bootstrap-logo.png';
import gitLogo from '../assets/img/git-logo.png';
import mongoLogo from '../assets/img/mongo-logo.png';
import nodeLogo from '../assets/img/node-logo.png';

export const PARTNERS = [
    {
        id: 0,
        name: 'Bootstrap Outfitters',
        image: bootStrapLogo,
        featured: false,
        description:
            "Bootstrap Outfitters supplies you with the gear you need at prices you can't beat."
    },
    {
        id: 1,
        name: 'Git Out Expeditions',
        image: gitLogo,
        featured: false,
        description:
            'Join Git Out Expeditions to explore new horizons with a group of other adventurers!'
    },
    {
        id: 2,
        name: 'Mongo Fly Shop',
        image: mongoLogo,
        featured: false,
        description:
            'Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop.'
    },
    {
        id: 3,
        name: 'Node Outdoor Apparel',
        image: nodeLogo,
        featured: true,
        description:
            'From polar fleeces to swimsuits, hiking boots to waders, a visit to Node will be sure to get you covered.'
    }
];

import breadCrumbImg from '../assets/img/breadcrumb-trail.jpg';
//Photo by Jonny Caspari on Unsplash
import weedsImg from '../assets/img/weeds.jpg';
// Photo by LoboStudio Hamburg on Unsplash
import bootsImg from '../assets/img/boots.jpg';
// Photo by Jonathan Gallegos on Unsplash
import asyncImg from '../assets/img/mount-promise.jpg';

export const PROMOTIONS = [
    {
        id: 0,
        name: 'Mountain Adventure',
        image: breadCrumbImg,
        featured: true,
        description:
            'Book a 5-day mountain trek with a seasoned outdoor guide! Fly fishing equipment and lessons provided.'
    },
    {
        id: 1,
        name: 'Into The Weeds',
        image: weedsImg,
        featured: false,
        description:
            '5 days deep in the Redux National Monument, far from the beaten path, with only a reducer in your backpack. Guide provided.'
    },
    {
        id: 2,
        name: 'Bootstrap Teardown',
        image: bootsImg,
        featured: false,
        description: `In this weekend workshop, we'll rebuild your bootstraps from scratch, so you're ready for next-level excursions.`
    },
    {
        id: 3,
        name: 'Asynchronous Rendezvous',
        image: asyncImg,
        featured: false,
        description:
            'Meet up with your guide at the top of Promise Mountain. Or, try to. Good luck!'
    }
];

export const COMMENTS = [
    {
        id: 0,
        campsiteId: 0,
        rating: 5,
        text: 'The grass was indeed greener here than our last campsite.',
        author: 'Simon Hunt',
        date: '2018-10-25T16:30Z'
    },
    {
        id: 1,
        campsiteId: 0,
        rating: 3,
        text: 'This lone monkey kept following us back to our tent.',
        author: 'Zandra Katherine',
        date: '2017-06-17T03:33Z'
    },
    {
        id: 2,
        campsiteId: 0,
        rating: 4,
        text: 'Do not feed the wildlife. They will follow you back to the tent.',
        author: 'Amy Keophilavong',
        date: '2019-02-18T18:12Z'
    },
    {
        id: 3,
        campsiteId: 0,
        rating: 3,
        text: "Avoid Sundays; couldn't relax and play my flute with all the noisy kids.",
        author: 'Jean Luc',
        date: '2019-08-04T20:11Z'
    },
    {
        id: 4,
        campsiteId: 0,
        rating: 5,
        text: "This has been our favorite campsite for over 7 years. It is an absolutely beautiful site. The hosts are very friendly and helpful. Don't forget to try out the lake.",
        author: 'R. E. Osariemen',
        date: '2018-07-23T19:44Z'
    },
    {
        id: 5,
        campsiteId: 1,
        rating: 4,
        text: "There's nothing more fun than setting up a tent in a rainstorm.",
        author: 'Juan Cortez',
        date: '2017-06-17T03:33Z'
    },
    {
        id: 6,
        campsiteId: 1,
        rating: 5,
        text: 'I caught a world-record-breaking trout here on my last visit.',
        author: 'McKenzie Sebastian',
        date: '2019-02-18T18:12Z'
    },
    {
        id: 7,
        campsiteId: 1,
        rating: 5,
        text: 'The campground was beautiful, but the bugs could bite sometimes.',
        author: 'Brennen Ech',
        date: '2019-08-04T20:11Z'
    },
    {
        id: 8,
        campsiteId: 1,
        rating: 4,
        text: "Love the river but I didn't catch any fish.",
        author: 'Amy Keophilavong',
        date: '2018-07-23T19:44Z'
    },
    {
        id: 9,
        campsiteId: 1,
        rating: 5,
        text: 'A wonderful place to reconnect with nature.',
        author: 'Jordan Runn',
        date: '2019-08-04T20:11Z'
    },
    {
        id: 10,
        campsiteId: 2,
        rating: 5,
        text: 'The Frozen Tundra is great place for family and friends camping!',
        author: 'Olaf the Snowman',
        date: '2019-02-18T18:12Z'
    },
    {
        id: 11,
        campsiteId: 2,
        rating: 1,
        text: 'We had to leave about 2am to go back to the city because the quiet was just too much!',
        author: 'Vincent and Mona Lisa Gambini',
        date: '2018-10-25T16:30Z'
    },
    {
        id: 12,
        campsiteId: 2,
        rating: 5,
        text: 'The stars at night were a revelation!',
        author: 'Ann Dabramov',
        date: '2018-07-23T19:44Z'
    },
    {
        id: 13,
        campsiteId: 2,
        rating: 4,
        text: 'Great scenic hiking trails but it was challenging to go up the mountain.',
        author: 'Amy Keophilavong',
        date: '2018-10-25T16:30Z'
    },
    {
        id: 14,
        campsiteId: 2,
        rating: 5,
        text: 'Perfect scenery for a smoked kipper breakfast with friends!',
        author: 'Dave Lister',
        date: '2019-08-04T20:11Z'
    },
    {
        id: 15,
        campsiteId: 3,
        rating: 4,
        text: 'Just remember a bear can run and climb faster than you...',
        author: 'Markell Richards',
        date: '2017-06-17T03:33Z'
    },
    {
        id: 16,
        campsiteId: 3,
        rating: 5,
        text: 'Excellent site to recharge from the city.',
        author: 'Amy Keophilavong',
        date: '2018-07-23T19:44Z'
    },
    {
        id: 17,
        campsiteId: 3,
        rating: 5,
        text: 'What a magnificent view!',
        author: 'Tinus Lorvaldes',
        date: '2018-10-25T16:30Z'
    },
    {
        id: 18,
        campsiteId: 3,
        rating: 4,
        text: 'The sites are huge! We felt like we were in the middle of nowhere, in a good way.',
        author: 'Chloe Haskins',
        date: '2017-06-17T03:33Z'
    },
    {
        id: 19,
        campsiteId: 3,
        rating: 5,
        text: "The photos don't do justice to the beauty of this place.",
        author: 'Minae Lee',
        date: '2019-02-18T18:12Z'
    }
];



