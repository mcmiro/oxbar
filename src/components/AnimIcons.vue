<template>
  <div>
    <div class="anim-icon" 
      :style="{ 
        height: img.height + 'px', 
        width: img.height + 'px',
        top: position.top + 'px',
        right: position.right + 'px',
        animationDuration: animation.duration + 's',
      }">
      <img :src="img.url">
    </div>
    
  </div>
</template>

<script>
  export default {
    props: {
      img: {
        url: String,
        height: Number,
        required: true
      },
      position: {
        top: Number,
        right: Number,
        required: true
      },
      animation: {
        start: Number,
        duration: Number,
        required: true
      }
    },
    name: 'AnimIcons'
  }
</script>

<style lang="scss" scoped>

  .anim-icon {
    position: absolute;
    padding: 12px;
    background-color: #F9F9F9;
    border-radius: 50%;
    animation-name: iconAnimation;
    img {
      width: 100%;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @keyframes iconAnimation {
    0% {
      transform: rotate(0deg);
      opacity: 0;
    }
    100% {
      
    }
  }

  @media only screen and (max-width: 768px) {
    .anim-icon {
      display: none;
    }
  }

</style>