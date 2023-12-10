import React from "react";
import "./App.css";

const VideoGallery = () => {
  const videoData = [
    {
      id: 1,
      title: "BIGG BOSS OR YOUTUBE? The Final Verdict | CARRYMINATI Q&A 2023 ",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i3.ytimg.com/vi/9VdFCP6nC-g/hqdefault.jpg",
      likes: "2.3M",
      views: "1M",
    },
    {
      id: 2,
      title: "HORIZON ZERO DAWN HINDI DUBBED GAME MOVIE PART #1",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i3.ytimg.com/vi/V0aHmcCcmQo/hqdefault.jpg",
      likes: "2.7M",
      views: "2M",
    },
    {
      id: 3,
      title: " We Made Real Remote Controlled Car - सपना सच हो गया 😎 ",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://img.youtube.com/vi/Dlvbit15yMk/sddefault.jpg",
      likes: "6.9M",
      views: "2.3M",
    },
    {
      id: 4,
      title: " Chidiya Ghar - Amit Bhadana | Rajpal Yadav ",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i3.ytimg.com/vi/CLNd2XY_01k/hqdefault.jpg",
      likes: "6.7M",
      views: "5M",
    },
    {
      id: 5,
      title: " Craziest Mobile Phone Ever🔥🔥🔥",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.googleusercontent.com/ytc/APkrFKZJdGQNLYbmqI68IQOrz_4iHbWbt5dSYNUoNv6IWf8=s80-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://img.youtube.com/vi/UljtSgJAIZI/sddefault.jpg",
      likes: "9M",
      views: "12M",
    },
    {
      id: 6,
      title:
        " MUMMY KHAO PAPA BATAO | Funny Family Eating Challenge | Guess the food | Aayu an",
      channelName: "Aayu and Pihu Show",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i3.ytimg.com/vi/gW21Mp916J8/hqdefault.jpg",
      likes: "2M",
      views: "2.9M",
    },
    {
      id: 7,
      title: "mushroom veg blas ka nasthaa aur ?",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://img.youtube.com/vi/AjoAsh9oaiY/sddefault.jpg",
      likes: "3.5M",
      views: "16M",
    },
    {
      id: 8,
      title: "How to make mango-pickle",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i3.ytimg.com/vi/nOliLT2Wj94/hqdefault.jpg",
      likes: "1.1M",
      views: "12.4M",
    },
    {
      id: 9,
      title:
        " Sab Tera Mahadev | Main Tera Tu mera | Hansraj Raghuwanshi | Official Video | Dj ",
      channelName: "Hansraj Raghuwanshi ",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i3.ytimg.com/vi/4EnbN_oCJ3M/hqdefault.jpg",
      likes: "2.7M",
      views: "12M",
    },
    {
      id: 10,
      title: " Is Taj Mahal a Temple? | The Mystery Explained by Dhruv Rathee ",
      channelName: " Dhruv Rathee",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://img.youtube.com/vi/pH5uKjcP5GE/sddefault.jpg",
      likes: "2.7M",
      views: "6M",
    },
    {
      id: 11,
      title: " Crispy Chowli Chaat | क्रिस्पी चवली चाट | Chaat Re",
      channelName: " Sanjeev Kapoor Khazana",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://img.youtube.com/vi/E6nx5LkzULM/sddefault.jpg",
      likes: "1.7M",
      views: "9M",
    },
    {
      id: 12,
      title:
        " Full Day Of Eating To Get Shredded | Road To Sheru Classic | Ep. 15 ",
      channelName: " Rohit Khatri Fitness",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://img.youtube.com/vi/AFgk3TqOQVY/sddefault.jpg",
      likes: "1.3M",
      views: "2M",
    },
    {
      id: 13,
      title: "Buzz | Melvin Louis ft. Esha Gupta",
      channelName: " Melvin Louis",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i3.ytimg.com/vi/Y1IVyMQUE20/hqdefault.jpg",
      likes: "2.7M",
      views: "4M",
    },
    {
      id: 14,
      title: " MY MAKEUP COLLECTION & STORAGE 2019 | Rinkal Soni ",
      channelName: "Rinkal Parekh",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://img.youtube.com/vi/eenG6gsq5Sg/sddefault.jpg",
      likes: "2.7M",
      views: "3M",
    },
    {
      id: 15,
      title: "we are plyaing with cute dog ",
      channelName: "Sambhavna Seth",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://img.youtube.com/vi/sG6lkiXbuL8/sddefault.jpg",
      likes: "1.7M",
      views: "5M",
    },
    {
      id: 16,
      title:
        "Simple night skin care routine for repairs and renew skin/Reduce acne & scars ",
      channelName: "INDIANGIRL TRISHA",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i3.ytimg.com/vi/1y8LF5ATSf0/hqdefault.jpg",
      likes: "1.5M",
      views: "5M",
    },
    {
      id: 17,
      title: " 4% Body Fat at Age 40 (NATURAL) - Guru Mann",
      channelName: "Guru Mann Fitness ",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://img.youtube.com/vi/E0zibYRHQC4/sddefault.jpg",
      likes: "1.2M",
      views: "5M",
    },
    {
      id: 18,
      title: " पुरानी साड़ी Reuse करने के 8 तरीके | Ho ",
      channelName: " Perkymegs Hindi",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://img.youtube.com/vi/AvthVUOw3oA/sddefault.jpg",
      likes: "1.2M",
      views: "5M",
    },
    {
      id: 19,
      title:
        " 5 Fashion Hacks Every Indian Man Should Know | Clothing Fit Guide | Be Ghent ",
      channelName: " Be Ghent",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://img.youtube.com/vi/djClhgsQMZk/sddefault.jpg",
      likes: "1.2M",
      views: "4M",
    },
    {
      id: 20,
      title:
        " Ep 1| Travelling through North East India | Off To Arunachal | The Journey Begin",
      channelName: " Tanya Khanijow",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://img.youtube.com/vi/ehmsJLZlCZ0/sddefault.jpg",
      likes: "1.2M",
      views: "2M",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="youtube-gallery">YouTube</h1>
      </div>
      <div className="video-gallery">
        {videoData.map((video) => (
          <div key={video.id} className="video">
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
            </div>
            <div className="video-info">
              <div className="channel-logo-title">
                <img
                  className="channel-logo"
                  src={video.channelLogo}
                  alt={video.channelName}
                />
                <h3 className="video-title">{video.title}</h3>
              </div>
              <p className="channel-name">{video.channelName}</p>
              <div className="video-stats">
                <span className="likes">{video.likes} likes</span>
                <span></span>
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
