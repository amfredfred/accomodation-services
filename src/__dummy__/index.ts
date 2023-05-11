import BGSlideOne from '../Assets/images/slide-1.jpg'
import BGSlideTwo from '../Assets/images/bg-slider-2.jpg'
import BGSlideThree from '../Assets/images/florian-giorgio-mbB_e6M1Zso-unsplash.jpg'
import BGSlideFour from '../Assets/images/exterior.jpg'
import BGSlideFive from '../Assets/images/gallery-about-1.png'
import BGSlideSix from '../Assets/images/aprtment-one.webp'
import BGSlideSeven from '../Assets/images/hotel-one.webp'
import BGSlideEight from '../Assets/images/motel-port.webp'
import BGSlideNine from '../Assets/images/aprtment-one.webp'
import BGSlideTen from '../Assets/images/vista.webp'
import BGSlideEleven from '../Assets/images/new-aprtment.webp'



export const rooms = [
    {
        title: 'queen room',
        id: 'ROOM_0',
        type: 'holiday and vacation',
        description: 'It is a long established fact that a reader will be distracted.',
        photos: [BGSlideSix, BGSlideOne, BGSlideTwo],
        avaiability: {},
        price: '672',
        term: 'night',
        rating: [2, 3, 4, 1, 5, 1, 3, 4, 5, 5, 5],
        features: {
            wifi: true,
            atmMachine: true,
            restaurant: true,
            spar: true,
        },
        bookedTill: 1685700000000
    },
    {
        title: 'browood room',
        id: 'ROOM_1',
        type: 'vacation',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        photos: [BGSlideSeven, BGSlideTwo],
        avaiability: {},
        price: '2342',
        term: 'night',
        rating: [2, 3, 4, 1, 5, 1, 3, 1, 4, 5],
        features: {
            atmMachine: true,
            restaurant: true,
            swimmingPool: true,
        },
        bookedTill: 1683576778932
    },
    {
        title: 'delux room',
        id: 'ROOM_2',
        type: 'holiday hotel vacation',
        description: ' It combines the peace and quiet of the Maldives with seven top-notch restaurants, a wide range of recreational activities, and exotic spa and wellness facilities. ',
        photos: [BGSlideEight, BGSlideThree, BGSlideTen],
        avaiability: {},
        price: '23321',
        term: 'night',
        rating: [2, 3, 4, 4, 4, 2, 1, 0, 1, 1,],
        features: {
            wifi: true,
            swimmingPool: true,
            spar: true,
        },
        bookedTill: 1685000000000
    }, {
        title: 'delux room',
        id: 'ROOM_3',
        type: 'holiday hotel vacation',
        description: 'Experience a dreamy island getaway in the remote Maldives refuge of JA Manafaru. A tropical private paradise can be found in the crystal-clear waters of the Indian Ocean.',
        photos: [BGSlideEleven, BGSlideNine, BGSlideFour],
        avaiability: {},
        price: '674',
        term: 'night',
        rating: [1, 5, 5, 5, 5, 5, 5, 5, 5],
        features: {
            wifi: true,
            bars: true,
            atmMachine: true,
            restaurant: true,
            swimmingPool: true,
            spar: true,
        },
        bookedTill: 1683576775423
    }, {
        title: 'delux room',
        id: 'ROOM_4',
        type: 'holiday hotel vacation',
        description: 'Magical moments are documented, and romance comes to life against a gorgeous landscape.',
        photos: [BGSlideFive, BGSlideTwo, BGSlideFour],
        avaiability: {},
        price: '231',
        term: 'night',
        rating: [2, 3, 3, 1, 1, 1, 1],
        features: {
            wifi: true
        },
        bookedTill: 168357679999
    }
    , {
        title: 'delux room',
        id: 'ROOM_5',
        type: 'holiday hotel vacation',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        photos: [BGSlideSeven, BGSlideFive, BGSlideFour],
        avaiability: {},
        price: '1231',
        term: 'night',
        rating: [2, 3, 3, 1, 1, 1, 1],
        features: {
            wifi: true
        },
        bookedTill: 1683576752312
    }
]