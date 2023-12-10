import React from "react";
import "./App.css";

const VideoGallery = () => {
  const videoData = [
    {
      id: 1,
      title:"Complete React Course in Hindi #1",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "	https://i.ytimg.com/vi/-mJFZp84TIY/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLB-xKz554go0O4Ypk0Zkr75ns1lfw",
      likes: "2.3M",
      views: "1M",
    },
    {
      id: 2,
      title:"Complete React Course in Hindi #2",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/-mJFZp84TIY/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLB-xKz554go0O4Ypk0Zkr75ns1lfw",
      likes: "2.7M",
      views: "2M",
    },
    {
      id: 3,
      title:"Complete React Course in Hindi #3",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/kFe-RRaOy48/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLB3UFXaUeurh8yP56mqi5moB821yQ",
      likes: "6.9M",
      views: "2.3M",
    },
    {
      id: 4,
      title: " Complete React Course in Hindi #4 ",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/JvC7aA24m4Q/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLBjN2ts4Dm27H3joU6u1pKdUQnzaA",
      likes: "6.7M",
      views: "5M",
    },
    {
      id: 5,
      title: "Complete React Course in Hindi #5",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.googleusercontent.com/ytc/APkrFKZJdGQNLYbmqI68IQOrz_4iHbWbt5dSYNUoNv6IWf8=s80-c-k-c0x00ffffff-no-rj",
      thumbnail: "	https://i.ytimg.com/vi/wa0IVAIqbo0/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLCwBEj_lS_0areL3qZWdWqpOKbHwg",
      likes: "9M",
      views: "12M",
    },
    {
      id: 6,
      title:
        " Complete React Course in Hindi #6",
      channelName: "Aayu and Pihu Show",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/xvm3X1oyTL8/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLCAj6uxLvQXdskIqs8IQECDqyeMHQ",
      likes: "2M",
      views: "2.9M",
    },
    {
      id: 7,
      title: "Complete React Course in Hindi #7",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/leBpCqU8wdg/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLBs-_Iy1TS5OdBoz9eKN1rTGGRpDg",
      likes: "3.5M",
      views: "16M",
    },
    {
      id: 8,
      title: "Complete React Course in Hindi #8",
      channelName: "CodeWithHarry",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/7BsjAdjx2Z0/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLDEjUp9iSP3cnOmFTthizoJnDPJRQ",
      likes: "1.1M",
      views: "12.4M",
    },
    {
      id: 9,
      title:
        "Complete React Course in Hindi #9 ",
      channelName: "Hansraj Raghuwanshi ",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/KislX1yzZOQ/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLBz0O_Onuwetk_9kLHMkY1e6fBmJQ",
      likes: "2.7M",
      views: "12M",
    },
    {
      id: 10,
      title: "Complete React Course in Hindi #10",
      channelName: " Dhruv Rathee",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/Sx2y4TjRZ9g/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLC53hHQbKALYq8ivMAfoFOb3Oo3eg",
      likes: "2.7M",
      views: "6M",
    },
    {
      id: 11,
      title: "Complete React Course in Hindi #11",
      channelName: " Sanjeev Kapoor Khazana",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/-mJFZp84TIY/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLB-xKz554go0O4Ypk0Zkr75ns1lfw",
      likes: "1.7M",
      views: "9M",
    },
    {
      id: 12,
      title:
        "Complete React Course in Hindi #12 ",
      channelName: " Rohit Khatri Fitness",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/vEzt66n2LZY/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLA8rwM78Y-GllsqlP2AEtz4LI3pDA",
      likes: "1.3M",
      views: "2M",
    },
    {
      id: 13,
      title: "Complete React Course in Hindi #13",
      channelName: " Melvin Louis",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/n_KtBVxBTb4/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLAAN-ghhZpGvmSRcwIkVoJAMt1jrg",
      likes: "2.7M",
      views: "4M",
    },
    {
      id: 14,
      title: "Complete React Course in Hindi #14",
      channelName: "Rinkal Parekh",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/n_KtBVxBTb4/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLAAN-ghhZpGvmSRcwIkVoJAMt1jrg",
      likes: "2.7M",
      views: "3M",
    },
    {
      id: 15,
      title: "Complete React Course in Hindi #15",
      channelName: "Sambhavna Seth",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/8eSQ1o6zir0/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLD2mX8tKySLVVnt75RmQY1NhJ6XEg",
      likes: "1.7M",
      views: "5M",
    },
    {
      id: 16,
      title:
        "Complete React Course in Hindi #16",
      channelName: "INDIANGIRL TRISHA",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/WNU1BEZIjxg/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLDi5w8DpM2vh9k5uLBsgXjSThE7kg",
      likes: "1.5M",
      views: "5M",
    },
    {
      id: 17,
      title: " Complete React Course in Hindi #18",
      channelName: "Guru Mann Fitness ",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/Fi75tq9JikI/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLCtVwIMDQLzDn1RE9DM2uANgeCdxQ",
      likes: "1.2M",
      views: "5M",
    },
    {
      id: 18,
      title: "Complete React Course in Hindi #18 ",
      channelName: " Perkymegs Hindi",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/YYVY1bPHaWE/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLDuEluCSv2bKc9fXnJW8tByjchBTQ",
      likes: "1.2M",
      views: "5M",
    },
    {
      id: 19,
      title:
        "Complete React Course in Hindi #19",
      channelName: " Be Ghent",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/kEvfVw5Sq5c/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLB2mwULtifeuy3qhWhzzuzOKLheMw",
      likes: "1.2M",
      views: "4M",
    },
    {
      id: 20,
      title:
        "Complete React Course in Hindi #20",
      channelName: " Tanya Khanijow",
      channelLogo:
        "https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s48-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/Ghp1Mi43dxQ/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLCy3UaaWpQpvdgs6DDTl5B_mVtLSQ",
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
