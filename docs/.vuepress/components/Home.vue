<template>
  <div class="home-container">
    <div class="hero">
      <img class="hero-image" src="/img/logo.png" alt="Logo">
      <div class="action-buttons">
        <a class="primary-button" href="/guide/">开始阅读</a>
      </div>
    </div>
    
    <div class="latest-posts">
      <h2>最新文章</h2>
      <div class="post-grid">
        <div class="post-card" v-for="post in posts" :key="post.title">
          <div class="post-info">
            <h3>{{ post.title }}</h3>
            <p class="post-desc">{{ post.description }}</p>
            <div class="post-meta">
              <span class="post-date">{{ post.date }}</span>
              <span class="post-tags" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          title: 'Base64编码原理与应用',
          description: 'Base64编码原理与在实际开发中的应用场景',
          date: '2024-03-21',
          tags: ['编码', '开发']
        },
        {
          title: 'Java异步编程',
          description: '深入理解Java异步编程原理与实践',
          date: '2024-03-20',
          tags: ['Java', '并发']
        },
        {
          title: 'Stream流式处理',
          description: 'Java Stream API的使用与最佳实践',
          date: '2024-03-19',
          tags: ['Java', '函数式编程']
        }
      ]
    }
  }
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.hero {
  text-align: center;
  padding: 6rem 0;
  background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.8));
}

.hero-image {
  width: 180px;
  height: 180px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.hero h1 {
  font-size: 3rem;
  margin: 1rem 0;
  background: linear-gradient(120deg, #3eaf7c, #2c3e50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  font-size: 1.4rem;
  color: #666;
  margin: 1.5rem 0 3rem;
  font-style: italic;
}

.action-buttons a {
  padding: 1rem 2.5rem;
  border-radius: 25px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.primary-button {
  background-color: #3eaf7c;
  color: white;
  box-shadow: 0 4px 12px rgba(62, 175, 124, 0.3);
}

.primary-button:hover {
  background-color: #2c8f63;
  transform: translateY(-2px);
}

.latest-posts {
  padding: 4rem 0;
}

.latest-posts h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: #2c3e50;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.post-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.post-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #2c3e50;
}

.post-desc {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.post-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  font-size: 0.9rem;
}

.post-date {
  color: #999;
}

.post-tags {
  background: #f0f0f0;
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  color: #666;
}

@media (max-width: 719px) {
  .hero {
    padding: 3rem 0;
  }
  
  .hero-image {
    width: 140px;
    height: 140px;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .description {
    font-size: 1.2rem;
  }
}
</style>


