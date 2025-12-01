const reels = [
  {
    username: "tech_vibes",
    likeCount: 12450,
    isLiked: false,
    commentCount: 320,
    caption: "Coding nights hit different 🔥",
    video: "./vid/vid1.mp4",
    userProfile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    shareCount: 210,
    isFollowed: true
  },
  {
    username: "travel_with_me",
    likeCount: 45210,
    isLiked: true,
    commentCount: 980,
    caption: "Sunsets are therapy 🌅",
    video: "./vid/vid2.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 540,
    isFollowed: false
  },
  {
    username: "foodie_feast",
    likeCount: 23100,
    isLiked: false,
    commentCount: 410,
    caption: "This pizza is illegal 🤤🍕",
    video: "./vid/vid3.mp4",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 150,
    isFollowed: true
  },
  {
    username: "fitness_freak",
    likeCount: 8750,
    isLiked: false,
    commentCount: 220,
    caption: "No excuses. Just grind 💪",
    video: "./vid/vid4.mp4",
    userProfile: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    shareCount: 90,
    isFollowed: false
  },
  {
    username: "dance_world",
    likeCount: 52000,
    isLiked: true,
    commentCount: 1600,
    caption: "Groove mode activated 🔥💃",
    video: "./vid/vid5.mp4",
    userProfile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    shareCount: 720,
    isFollowed: true
  },
  {
    username: "daily_quotes",
    likeCount: 6400,
    isLiked: false,
    commentCount: 75,
    caption: "Be your own motivation ✨",
    video: "./vid/vid2.mp4",
    userProfile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    shareCount: 40,
    isFollowed: false
  },
  {
    username: "gaming_hub",
    likeCount: 30210,
    isLiked: true,
    commentCount: 540,
    caption: "New game dropped 🎮🔥",
    video: "./vid/vid4.mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 310,
    isFollowed: true
  },
  {
    username: "pet_paradise",
    likeCount: 14890,
    isLiked: false,
    commentCount: 260,
    caption: "This dog is too cute 🐶❤️",
    video: "./vid/vid5.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 180,
    isFollowed: true
  },
  {
    username: "style_corner",
    likeCount: 38400,
    isLiked: true,
    commentCount: 880,
    caption: "New outfit check 😎👗",
    video: "./vid/vid1.mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    shareCount: 500,
    isFollowed: false
  },
  {
    username: "music_wave",
    likeCount: 26800,
    isLiked: false,
    commentCount: 330,
    caption: "Vibes only 🎶✨",
    video: "./vid/vid2.mp4",
    userProfile: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    shareCount: 260,
    isFollowed: true
  }
];

var sum='';
reels.forEach(function(elem){
    sum = sum +`<div class="reel">
                   <video autoplay loop muted src="${elem.video}"></video>            
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?"Unfollow":"Follow"}</button>
                            <!-- <h3>Germany room heaters are radiators </h3> -->
                        </div>
                        <h3>${elem.caption}h3>

                    </div>

                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="Comment-icon icon"><i class="ri-chat-3-line"></i>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
                
})
var allreels = document.querySelector('.all-reels');
allreels.innerHTML = sum;