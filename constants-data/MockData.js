const recentChats = [
    {
        name:'Samir Goel',
        user_image:'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
        time:'13:00',
        last_message:'some message goes here'
    },
    {
        name:'Samir Goel',
        user_image:'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
        time:'13:00',
        last_message:'some message goes here'
    },
    {
        name:'Samir Goel',
        user_image:'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
        time:'13:00',
        last_message:'some message goes here'
    }
]

const contactOnNetwork = [
    {
        name:'Samir Goel',
        user_image:'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
        last_message:''
    },
    {
        name:'Pankaj Tripathi',
        user_image:'https://images.news18.com/ibnlive/uploads/2019/01/Pankaj-Tripathi-Feature.jpg',
        last_message:'Have you checked this algo, this is quite cool algorithm'
    },
    {
        name:'Amit Kasana',
        user_image:'https://starsunfolded.com/wp-content/uploads/2018/04/Amit-Bhadana-2.jpg',
        last_message:'keep going and dont forget to post update over my channel, eager;y waiting for your response :)'
    },
    {
        name:'Amrika vaishnavi',
        user_image:'https://starsunfolded.com/wp-content/uploads/2019/12/Srishti-Ganguli-Rindani.jpg',
        last_message:''
    },
    {
        name:'Jitu Bhayia',
        user_image:'https://www.tubebite.com/wp-content/uploads/2021/06/Jeetendra-Kumar-Biography-In-Hindi-Wiki-Jeetu-Bhaiya-ki-jivni.jpg',
        last_message:'i cannot see that stuff man'
    },
    {
        name:'Suraj Prakash jhunjhunvala',
        user_image:'https://qph.fs.quoracdn.net/main-qimg-d044104aa2eb78effffb8af3a6895fac-c',
        last_message:''
    },
    {
        name:'Mahima Chaudhary',
        user_image:'https://2.bp.blogspot.com/-D33tAaIOVKM/XL8XccImnzI/AAAAAAAABwk/HGVktm1599gkUbACCPnX93KEBa3MZ91TgCLcBGAs/s1600/Youtube%2Bbest%2Bbeautiful%2Bactress%2BAkansha%2BThakur%2BJeetu%2527s%2Bwife.jpg',
        last_message:'hello'
    },

]

const favourite_contacts = [
    "","","","","","","","","","",""
]

const favourites_algos= [
    {
        backGround:'https://i.ibb.co/258Z5VQ/array-colour.png',
        category_name:'Array',
        algos:[ {
            problem_statement:'Problem: Given a sorted array arr[] of n elements, write a function to search a given element x in arr[] and return the index of x in array.',
            algo_level:1,
        },{
            problem_statement:'Type 2. Finding address of an element with given base address When an array is declared, a contiguous block of memory is assigned to it which helps in finding address of elements from base address.',
            algo_level:2,
        },{
            problem_statement:'Given an unsorted array of integers, sort the array into a wave like array. An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >=',
            algo_level:3,
        }],
    },
    {
        backGround:'https://i.ibb.co/6RsChMj/sets-colour.png',
        category_name:'Sets',
        algos:[ {
            problem_statement:'Problem: Given a sorted array arr[] of n elements, write a function to search a given element x in arr[] and return the index of x in array.',
            algo_level:1,
        },{
            problem_statement:'Type 2. Finding address of an element with given base address When an array is declared, a contiguous block of memory is assigned to it which helps in finding address of elements from base address.',
            algo_level:2,
        },{
            problem_statement:'Given an unsorted array of integers, sort the array into a wave like array. An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >=',
            algo_level:2,
        }],
    }
]

const algo_Categories = [
    {backGround:'https://i.ibb.co/258Z5VQ/array-colour.png', category_name:'Array', algo_count:45},
    {backGround:'https://i.ibb.co/xMWNtDy/hashmap-colour.png', category_name:'Hash Maps', algo_count:5},
    {backGround:'https://i.ibb.co/6RsChMj/sets-colour.png', category_name:'Sets', algo_count:9},
    {backGround:'https://i.ibb.co/KLztCZP/string-colour.png', category_name:'String', algo_count:65},
    {backGround:'https://i.ibb.co/8252F7t/tree-color.png', category_name:'Tree', algo_count:3},
]

const latest_algos = [
    {
        algo_category:"Array",
        algo_level:2,
        release_date:'09 Aug 2022',
        problem_statement:'Problem: Given a sorted array arr[] of n elements, write a function to search a given element x in arr[] and return the index of x in array.'
    }
]


export default { recentChats, favourite_contacts, algo_Categories, latest_algos, contactOnNetwork, favourites_algos}
