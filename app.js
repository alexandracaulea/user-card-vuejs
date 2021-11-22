// The original project was built using HTML and CSS:
// https://codepen.io/alexandracaulea/pen/wvBLyqJ

const app = Vue.createApp({
  data() {
    return {
      name: 'Alexandra Caulea',
      imageURL: 'https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg',
      introText: 'I enjoy drinking a cup of coffee every day',
      numOfPosts: 172,
      numOfFollowers: 47,
      numOfFollowing: 20
    }
  }
});

app.mount('#user-card');