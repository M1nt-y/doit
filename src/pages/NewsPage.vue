<template>
  <main class="main news">
    <div class="container">
      <div class="row">
        <h2 class="title">News</h2>

        <GameTabs />
      </div>

      <div class="news__cards">
        <div class="news__card" v-for="card in news" :key="card.id">
          <img class="news__card-img" :src="card.image" alt="">

          <div class="news__card-content">
            <h4 class="news__card-title">{{ card.title }}</h4>

            <p class="news__card-text">{{ card.text }}</p>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
import GameTabs from '@/components/GameTabs.vue'


const news = [
  {
    id: 0,
    image: new URL('../assets/images/one-news-1.png', import.meta.url),
    title: 'Brazil end 12-year wait for Copa America',
    text: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company. A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.'
  },
  {
    id: 1,
    image: new URL('../assets/images/one-news-2.png', import.meta.url),
    title: 'Brazil end 12-year wait for Copa America',
    text: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company. A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.'
  },
  {
    id: 2,
    image: new URL('../assets/images/one-news-3.png', import.meta.url),
    title: 'Brazil end 12-year wait for Copa America',
    text: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.'
  },
  {
    id: 3,
    image: new URL('../assets/images/one-news-4.png', import.meta.url),
    title: 'Brazil end 12-year wait for Copa America',
    text: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.'
  },
  {
    id: 4,
    image: new URL('../assets/images/one-news-5.png', import.meta.url),
    title: 'Brazil end 12-year wait for Copa America',
    text: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.'
  },
  {
    id: 5,
    image: new URL('../assets/images/one-news-6.png', import.meta.url),
    title: 'Brazil end 12-year wait for Copa America',
    text: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company. '
  }
]
</script>

<style scoped lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.container {
  padding: 0;
  max-width: 1224px;

  @include media-breakpoint-down(lg) {
    padding: 0 23px;
  }
}

.news {
  margin: 60px 0;

  @include media-breakpoint-down(xs) {
    margin: 20px 0;
  }

  & .tabs {
    margin-top: 4px;
    margin-left: 48px;
    justify-content: flex-start;

    @include media-breakpoint-down(sm) {
      margin-left: 0;
      margin-top: 25px;
    }
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    margin-top: 32px;

    @include media-breakpoint-down(xs) {
      margin-top: 24px;
    }
  }

  &__card {
    display: flex;
    margin-right: 24px;
    background: #10171F;
    flex-direction: column;
    width: calc(25% - 18px);

    @include media-breakpoint-down(md) {
      width: calc(50% - 12px);
    }

    @include media-breakpoint-down(sm) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 16px;
      flex-direction: row;
    }

    @include media-breakpoint-down(xs) {
      flex-direction: column;
    }

    &-img {
      object-fit: cover;

      @include media-breakpoint-down(xs) {
        aspect-ratio: 1 / 0.486;
      }
    }

    &-content {
      padding: 24px 24px 34px;

      @include media-breakpoint-down(xs) {
        padding: 22px 16px 30px;
      }
    }

    &-title {
      opacity: 0.88;
      color: #F5F5F5;
      font-size: 18px;
      font-weight: 500;
      line-height: 150%;
      margin-bottom: 14px;

      @include media-breakpoint-down(md) {
        font-size: 24px;
        line-height: 32px;
      }

      @include media-breakpoint-down(md) {
        font-size: 18px;
        line-height: 130%;
      }
    }

    &-text {
      color: #67707A;
      font-size: 16px;
      line-height: 24px;

      @include media-breakpoint-down(xs) {
        font-size: 14px;
        line-height: 150%;
      }
    }

    &:nth-child(1) {

      @include media-breakpoint-down(lg) {
        margin-right: 0;
      }
    }

    &:nth-child(4) {

      @include media-breakpoint-down(md) {
        margin-right: 0;
      }
    }

    &:nth-child(1),
    &:nth-child(2) {
      flex-direction: row;
      margin-bottom: 24px;
      width: calc(50% - 12px);

      .news__card-content {
        padding: 24px 34px 34px;
      }

      .news__card-img {
        min-height: 328px;

        @include media-breakpoint-down(sm) {
          min-height: 160px;
        }
      }

      @include media-breakpoint-down(lg) {
        width: 100%;
        margin-bottom: 16px;

        .news__card-img {
          min-width: 288px;
        }

        .news__card-content {
          padding: 24px 24px 34px;
        }
      }

      @include media-breakpoint-down(xs) {
        flex-direction: column;

        .news__card-img {
          object-position: center -76px;
        }

        .news__card-content {
          padding: 22px 16px 30px;
        }
      }

      .news__card-title {
        font-size: 24px;
        line-height: 32px;

        @include media-breakpoint-down(md) {
          font-size: 18px;
          line-height: 130%;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(6) {
      margin-right: 0;
    }
  }
}

.row {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @include media-breakpoint-down(sm) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.title {
  font-size: 48px;
}
</style>
