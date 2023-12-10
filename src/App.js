import React from 'react';
import './App.css'

const VideoGallery = () => {
  const videoData = [
    {
      id: 1,
      title: 'BIGG BOSS OR YOUTUBE? The Final Verdict | CARRYMINATI Q&A 2023 ',
      channelName: 'carryMinati',
      channelLogo: 'https://yt3.googleusercontent.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s176-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i3.ytimg.com/vi/9VdFCP6nC-g/hqdefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 2,
      title: 'HORIZON ZERO DAWN HINDI DUBBED GAME MOVIE PART #1',
      channelName: 'Total Gaming',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKY8wf5AURpsURfn9d6LezFBWzku4lauBVGyoqK7rA=s176-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i3.ytimg.com/vi/V0aHmcCcmQo/hqdefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 3,
      title: ' We Made Real Remote Controlled Car - सपना सच हो गया 😎 ',
      channelName: ' MR. INDIAN HACKER',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZKHyhbC8N40uH8643_dvZiVjmLNZiKCCGi4l7miQ=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/Dlvbit15yMk/sddefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 4,
      title: ' Chidiya Ghar - Amit Bhadana | Rajpal Yadav ',
      channelName: ' Amit Bhadana',
      channelLogo: 'https://yt3.googleusercontent.com/1vX1mZYVJJcNlU_X1jwHJYqelk9Q1Z4u65wYDlhDwsRrwlg601-Wuql_DSYO_Ogkt86DA8WU=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i3.ytimg.com/vi/CLNd2XY_01k/hqdefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 5,
      title: ' Craziest Mobile Phone Ever🔥🔥🔥',
      channelName: 'Technical Guruji',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZJdGQNLYbmqI68IQOrz_4iHbWbt5dSYNUoNv6IWf8=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/UljtSgJAIZI/sddefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 6,
      title: ' MUMMY KHAO PAPA BATAO | Funny Family Eating Challenge | Guess the food | Aayu an',
      channelName: 'Aayu and Pihu Show',
      channelLogo: 'https://yt3.googleusercontent.com/cMx_YLwN48sP34SDmGoSdV_IFIMmz9jYH27eENqdksTL9nNKPx0HfmryRizEn6wkW1wQgx6ZOmA=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i3.ytimg.com/vi/gW21Mp916J8/hqdefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 7,
      title: 'mushroom veg blas ka nasthaa aur ?',
      channelName: 'NishaMadhulika',
      channelLogo: 'https://yt3.googleusercontent.com/CEZg0lcDv4L0q3zwjU-ITbXqWoSFDWUA8wHZOXAwWaXg9jBGmAsOsHkdl1Y46gVoaPxNUnH5=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/AjoAsh9oaiY/sddefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 8,
      title: 'How to make mango-pickle',
      channelName: 'Kabitas Kitchen',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKY4xB_Zce9J16j680Pv4ndErdcqRVtnB740TFwpcQ=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i3.ytimg.com/vi/nOliLT2Wj94/hqdefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 9,
      title: ' Sab Tera Mahadev | Main Tera Tu mera | Hansraj Raghuwanshi | Official Video | Dj ',
      channelName: 'Hansraj Raghuwanshi ',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZkYazQzcKyNMg1nibGZ5QqUu7n0tG5EMy2NDt6xg=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i3.ytimg.com/vi/4EnbN_oCJ3M/hqdefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 10,
      title: ' Is Taj Mahal a Temple? | The Mystery Explained by Dhruv Rathee ',
      channelName: ' Dhruv Rathee',
      channelLogo: 'https://yt3.googleusercontent.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/pH5uKjcP5GE/sddefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 11,
      title: ' Crispy Chowli Chaat | क्रिस्पी चवली चाट | Chaat Re',
      channelName: ' Sanjeev Kapoor Khazana',
      channelLogo: 'https://yt3.googleusercontent.com/GVTtEiBD6Mt1FR_Y5FKgYa8mHXcJiNfzDTa991tu1LZ3OrOANZC4J1-kSMmuaEys86yY336pcg=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/E6nx5LkzULM/sddefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 12,
      title: ' Full Day Of Eating To Get Shredded | Road To Sheru Classic | Ep. 15 ',
      channelName: ' Rohit Khatri Fitness',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKYdcARmalTXLheCvkJTNQI_RkIwSsjDtUn2RKrJ=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/AFgk3TqOQVY/sddefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 13,
      title: 'Buzz | Melvin Louis ft. Esha Gupta',
      channelName: ' Melvin Louis',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKaqFfBTANZBqfO_vspoTo-3PBTCey0CJ0cUtKfsPA=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i3.ytimg.com/vi/Y1IVyMQUE20/hqdefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 14,
      title: ' MY MAKEUP COLLECTION & STORAGE 2019 | Rinkal Soni ',
      channelName: 'Rinkal Parekh',
      channelLogo: 'https://yt3.googleusercontent.com/Az_BybO4Iwi5LMF66DsI1c4FNwT1F32R-TVJ4IPjDUNocVhK3GS8KcszE2dRjv7LU1YMEBWLlw=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/eenG6gsq5Sg/sddefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 15,
      title: 'we are plyaing with cute dog ',
      channelName: 'Sambhavna Seth',
      channelLogo: 'https://yt3.googleusercontent.com/rvC4qHbICXIJuj5l0ehQCEGiFWLfrTaHdpQHXXgb_IwbobBf77-zPNYm6FOmpENhFT3s9mXVJA=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/sG6lkiXbuL8/sddefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 16,
      title: 'Simple night skin care routine for repairs and renew skin/Reduce acne & scars ',
      channelName: 'INDIANGIRL TRISHA',
      channelLogo: 'https://yt3.googleusercontent.com/uVhmjRkq99emN6R799qhbh7g65YOurvwA5CG68wP3B5SGXHNFNFiSH6RF0BD95QzLiJgOCVdb8A=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i3.ytimg.com/vi/1y8LF5ATSf0/hqdefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 17,
      title: ' 4% Body Fat at Age 40 (NATURAL) - Guru Mann',
      channelName: 'Guru Mann Fitness ',
      channelLogo: 'https://yt3.googleusercontent.com/bJqTYerwxsBAme_ll_Hdxk-f-xO4F5Dm54AfTd0CYZQp4lTODtfOlVBN4GSWYB4xlYJ2SCZw=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/E0zibYRHQC4/sddefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 18,
      title: ' पुरानी साड़ी Reuse करने के 8 तरीके | Ho ',
      channelName: ' Perkymegs Hindi',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKbm0AdgJfSx4sziNgWetZ7bQWaJbz4Faq9ldkP3=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/AvthVUOw3oA/sddefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 19,
      title: ' 5 Fashion Hacks Every Indian Man Should Know | Clothing Fit Guide | Be Ghent ',
      channelName: ' Be Ghent',
      channelLogo: 'https://yt3.googleusercontent.com/fTES9XCoe4CoHoqHcaQz6C1deFRX_yyLIOmmDyZ0WgpORreP5G3IX_ZGU86Omz_VzpmqwS36=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/djClhgsQMZk/sddefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
    {
      id: 20,
      title: ' Ep 1| Travelling through North East India | Off To Arunachal | The Journey Begin',
      channelName: ' Tanya Khanijow',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZ7XWBpopRdU9v-pXmxHCrjpTeSPFOmZj4xA3gH6BY=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/ehmsJLZlCZ0/sddefault.jpg',
      likes: "2.7M",
      views: "16M",
    },
  ];

  
  return (
    <div>
      <div>
        
      <h1 className='youtube-gallery'>YouTube Gallery</h1></div>
    <div className="video-gallery">
      {videoData.map((video) => (
        <div key={video.id} className="video">
          <div className="video-thumbnail">
            <img src={video.thumbnail} alt={video.title} />
          </div>
          <div className="video-info">
            <div className="channel-logo-title">
            <img className="channel-logo" src={video.channelLogo} alt={video.channelName} />
            <h3 className="video-title">{video.title}</h3>
                </div>
            <p className="channel-name">{video.channelName }</p>
            <div className="video-stats">
              <span className="likes">{video.likes} likes</span>
              <span>.</span>
              <span className="views">{video.views} views</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};


export default VideoGallery;