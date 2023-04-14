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



