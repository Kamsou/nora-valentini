<script setup>

const images = [
  {
    src: 'https://picsum.photos/id/237/200/300',
    alt: 'A nature scene',
  },
  {
    src: 'https://picsum.photos/id/238/600/300',
    alt: 'A city scene',
  },
  {
    src: 'https://picsum.photos/id/240/200/300',
    alt: 'A nature scene',
  },
  {
    src: 'https://picsum.photos/id/241/200/300',
    alt: 'A city scene',
  },
  {
    src: 'https://picsum.photos/id/243/600/300',
    alt: 'A nature scene',
  },
  {
    src: 'https://picsum.photos/id/244/200/300',
    alt: 'A city scene',
  },
  {
    src: 'https://picsum.photos/id/247/200/300',
    alt: 'A city scene',
  },
  {
    src: 'https://picsum.photos/id/249/600/300',
    alt: 'A nature scene',
  },
  {
    src: 'https://picsum.photos/id/250/600/300',
    alt: 'A city scene',
  },
  {
    src: 'https://picsum.photos/id/251/600/300',
    alt: 'A mountain scene',
  },
  {
    src: 'https://picsum.photos/id/252/200/300',
    alt: 'A nature scene',
  },
  {
    src: 'https://picsum.photos/id/253/200/300',
    alt: 'A city scene',
  },
  {
    src: 'https://picsum.photos/id/254/200/300',
    alt: 'A city scene',
  },
  {
    src: 'https://picsum.photos/id/255/200/300',
    alt: 'A city scene',
  },
  {
    src: 'https://picsum.photos/id/256/200/300',
    alt: 'A city scene',
  },
    {
    src: 'https://picsum.photos/id/256/200/300',
    alt: 'A city scene',
  },
    {
    src: 'https://picsum.photos/id/256/200/300',
    alt: 'A city scene',
  },
    {
    src: 'https://picsum.photos/id/256/600/300',
    alt: 'A city scene',
  },
    {
    src: 'https://picsum.photos/id/256/600/300',
    alt: 'A city scene',
  },
    {
    src: 'https://picsum.photos/id/256/600/300',
    alt: 'A city scene',
  },
  {
    src: 'https://picsum.photos/id/256/600/300',
    alt: 'A city scene',
  },
  {
    src: 'https://picsum.photos/id/256/200/300',
    alt: 'A city scene',
  }, 
]



</script>

<template>
  <div class="relative h-[100vh] overflow-hidden">
    <div class="slider">
      <div class="slider-inner no-scrollbar">
        <div class="slide" v-for="(img, index) in images" :key="index">
          <img class="img" :src="img.src" :alt="img.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.slider {
  max-width: 1440px;
  overflow: hidden;
  margin: 10px auto 0;
  padding: 0 10px;
}

.slider-inner {
  display: flex;
  gap: 3px;
  overflow: hidden;
  cursor: default;
  overflow-x: scroll;
}

.slide {
  min-width: fit-content;
  height: 60px;
  display: flex;
  align-items: center;
}

.img {
  height: 100%;
}

</style>