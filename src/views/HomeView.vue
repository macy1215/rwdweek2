<template>
  <!-- Banner -->
  <div class="banner-bg">
    <div class="container">
      <div class="banner-home">
        <div class="col-my-4 col-m-12">
          <h2 class="fw-bold fs-1 lh-12 primary-700-color">Hi！我是 Noel</h2>
          <div class="mt-4 primary-600-color fs-5 mobil-layout">
            <span>具有 10 年經驗的</span>
            <span>資深 UI 設計師</span>
            <span>兼</span>
            <span>前端工程師</span>
            <span>技術雙修並行，</span>
            <span>熱衷於優化使用者的網頁體驗</span>
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/mark.png?raw=true"
              alt="mark"
              class="mark-pos1"
            />
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/mark.png?raw=true"
              alt="mark"
              class="mark-pos2"
            />
          </div>
          <div class="mt-3 primary-400-color">
            WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN
          </div>
          <div>
            <ul class="icon">
              <li class="ig">
                <a href="#" @click.prevent="linkClick">instagram</a>
              </li>
              <li class="fb">
                <a href="#" @click.prevent="linkClick">facebook</a>
              </li>
              <li class="yt">
                <a href="#" @click.prevent="linkClick">youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-8 col-m-12">
          <div class="rightImg">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/hero-sm.png?raw=true"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 設計項目 -->
  <div class="content">
    <div class="content-text">
      <h3>
        <span class="title fs-2 primary-bg-white-color">作品介紹</span>
      </h3>
    </div>
    <div class="content-body">
      <div class="box-1">
        <div class="container h-100">
          <div
            class="box-row justify-content-space-between mobil-flex-dir h-100"
          >
            <div class="col-my-7 col-m-12">
              <div class="box-product h-100 position-relative">
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-work1.png?raw=true"
                  alt="作品圖1"
                  class="position-absolute"
                />
              </div>
            </div>
            <div
              class="col-5 box-row align-items-center justify-content-center col-m-12"
            >
              <div class="box-content">
                <h4 class="fs-3 primary-white-color">星際旅行訂票平台</h4>
                <p class="primary-white-color p-t-8">
                  悠遊宇宙的夢想，從這裡開始實現
                </p>
                <ul class="p-top-24">
                  <li><a href="#" @click.prevent="linkClick">網頁設計</a></li>
                  <li><a href="#" @click.prevent="linkClick">響應式設計</a></li>
                  <li><a href="#" @click.prevent="linkClick">Bootstrap</a></li>
                </ul>
                <div class="button-box">
                  <button
                    type="button"
                    class="button primary-bg-black-color primary-white-color fs-5"
                  >
                    完整介紹
                    <span><i class="bi bi-arrow-right"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-2">
        <div class="container h-100">
          <div
            class="box-row justify-content-space-between align-items-stretch mobil-flex-dir h-100"
          >
            <div
              class="col-5 col-m-12 box-row align-items-center justify-content-center col-m-12"
            >
              <div class="box-content">
                <h4 class="fs-3 primary-white-color">理財APP</h4>
                <p class="primary-white-color p-t-8">
                  連動帳戶與行動支付，讓 AI 提供您最好的理財建議
                </p>
                <ul class="p-top-24">
                  <li><a href="" @click.prevent="linkClick">APP設計</a></li>
                  <li><a href="" @click.prevent="linkClick">iOS</a></li>
                  <li><a href="" @click.prevent="linkClick">React</a></li>
                </ul>
                <div class="button-box">
                  <button
                    type="button"
                    class="button primary-bg-black-color primary-white-color fs-5"
                  >
                    完整介紹
                    <span><i class="bi bi-arrow-right"></i></span>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-7 col-m-12">
              <div class="box-product">
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-work2-sm.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-3">
        <div class="container h-100">
          <div
            class="box-row justify-content-space-between mobil-flex-dir h-100"
          >
            <div class="col-7 col-m-12">
              <div class="box-product-3">
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-work3.png?raw=true"
                  alt="作品圖3"
                  class="position-relative"
                />
              </div>
            </div>
            <div
              class="col-5 row align-items-center justify-content-center col-m-12"
            >
              <div class="box-content">
                <h4 class="fs-3 primary-white-color">醫美診所官網</h4>
                <p class="primary-white-color p-t-8">
                  永保青春的秘密，從粹究開始
                </p>
                <ul class="p-top-24">
                  <li><a href="" @click.prevent="linkClick">網頁設計</a></li>
                  <li><a href="" @click.prevent="linkClick">響應式設計</a></li>
                  <li><a href="" @click.prevent="linkClick">ＷordPress</a></li>
                </ul>
                <div class="button-box">
                  <button
                    type="button"
                    class="button primary-bg-black-color primary-white-color fs-5"
                  >
                    完整介紹
                    <span><i class="bi bi-arrow-right"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 服務項目 -->
  <div class="serve-bg primary-bg-100-color">
    <div class="container">
      <div class="content-text">
        <h3>
          <span class="title fs-2 primary-bg-100-color">服務項目</span>
        </h3>
      </div>
      <div class="content-body">
        <ul>
          <li>
            <a
              href="#"
              class="primary-white-color list-bg fs-3 fw-bold"
              @click.prevent="linkClick"
              ><img
                src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/service-item-visual.svg"
                alt=""
              />平面設計</a
            >
          </li>
          <li>
            <a
              href="#"
              class="primary-white-color list-bg fs-3 fw-bold"
              @click.prevent="linkClick"
            >
              <img
                src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/service-item-ui.svg"
                alt=""
              />UI 設計</a
            >
          </li>
          <li>
            <a
              href="#"
              class="primary-white-color list-bg fs-3 fw-bold"
              @click.prevent="linkClick"
            >
              <img
                src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/service-item-html%26css.svg"
                alt=""
              />切版服務</a
            >
          </li>
          <li>
            <a
              href="#"
              class="primary-white-color list-bg fs-3 fw-bold"
              @click.prevent="linkClick"
            >
              <img
                src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/service-item-front-end.svg"
                alt=""
              />
              前端開發</a
            >
          </li>
        </ul>
        <div class="p-t-80">
          <div class="fs-3 text-center">想要合作或瞭解更多？</div>
          <div class="mt-40 box-row justify-content-center">
            <button
              type="button"
              class="button primary-bg-black-color primary-white-color fs-5 margin-0-auto"
            >
              詳細內容與合作流程
              <span><i class="bi bi-arrow-right fw-bold"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 精選文章 -->

  <div class="py-120px py-m-80">
    <div class="container">
      <div class="content-text">
        <h3>
          <span class="title fs-2 primary-bg-white-color">精選文章</span>
        </h3>
      </div>
      <!-- 文章列表 -->
      <div class="article">
        <!-- Slider main container -->
        <Swiper
          :grid="{
            rows: 3,
          }"
          :modules="modules"
          :slidesPerView="1"
          :breakpoints="{
            768: {
              grid: { rows: 1 },
              slidesPerView: 3,
              spaceBetween: 24,
              pagination: {
                el: swiper - pagination,
                clickable: true,
              },
            },
          }"
          class="mySwiper"
        >
          <template v-for="item in article" :key="item.item">
            <swiper-slide class="swiper-slide-set">
              <div class="swiper-box">
                <img :src="item.imgUrl" :alt="item.title" />
              </div>
              <h4 class="fs-5 fw-bold">{{ item.title }}</h4>
              <div class="swiper-btn-grop">
                <span
                  ><a
                    href="#"
                    class="primary-700-color primary-bg-200-color round-pill"
                    @click.prevent="linkClick"
                    >{{ item.tag.tag1 }}</a
                  >
                </span>
                <span
                  ><a
                    href="#"
                    class="primary-600-color"
                    @click.prevent="linkClick"
                    >{{ item.date }}</a
                  ></span
                >
              </div>
            </swiper-slide>
          </template>
        </Swiper>
        <div class="mobil-show mt-40 row justify-content-center">
          <button
            type="button"
            class="button primary-bg-black-color primary-white-color fs-5 margin-0-auto"
          >
            更多文章
            <span><i class="bi bi-arrow-right fw-bold"></i></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="module">
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles

import { Pagination } from 'swiper/modules';

export default {
  data() {
    return {
      modules: [Pagination],
      article: [
        {
          item: 1,
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image1.png?raw=true',
          title: 'Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)',
          tag: { tag1: 'UI/UX 新知' },
          date: '2024/02/10',
        },
        {
          item: 2,
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image2.png?raw=true',
          title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)',
          tag: { tag1: 'UI/UX 新知' },
          date: '2023/11/20',
        },
        {
          item: 3,
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image3.png?raw=true',
          title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)',
          tag: { tag1: 'UI/UX 新知' },
          date: '2023/10/18',
        },
        {
          item: 4,
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image4.png?raw=true',
          title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)',
          tag: { tag1: 'UI/UX 新知' },
          date: '2023/10/18',
        },
        {
          item: 5,
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image5.png?raw=true',
          title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)',
          tag: { tag1: 'UI/UX 新知' },
          date: '2023/10/18',
        },
        {
          item: 6,
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image6.png?raw=true',
          title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)',
          tag: { tag1: 'UI/UX 新知' },
          date: '2023/10/18',
        },
        {
          item: 7,
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image7.png?raw=true',
          title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)',
          tag: { tag1: 'UI/UX 新知' },
          date: '2023/10/18',
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  // 2.created 生命週期(涵示)
  created() {},
  mounted() {
    $('.ig').hover(
      function show() {
        $(this).addClass('icon-hover');
      },
      function hide() {
        $(this).removeClass('icon-hover');
      },
    );
    $('.fb').hover(
      function show() {
        $(this).addClass('icon-hover');
      },
      function hide() {
        $(this).removeClass('icon-hover');
      },
    );
    $('.yt').hover(
      function show() {
        $(this).addClass('icon-hover');
      },
      function hide() {
        $(this).removeClass('icon-hover');
      },
    );
  },
  // 3.methods 方法(物件)
  methods: {
    linkClick(e) {
      e.preventDefault();
    },
  },
};
</script>

<style>
@import '../assets/scss/helper/_home.scss';
</style>
