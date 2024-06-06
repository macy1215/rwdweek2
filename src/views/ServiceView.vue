<template>
  <div class="container">
    <div class="section-box section-first">
      <div class="title-box">
        <h2>
          <span class="title fs-2 primary-bg-white-color">服務項目</span>
        </h2>
      </div>
      <div class="content">
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
      </div>
    </div>
  </div>
  <div class="server-flw">
    <div class="container section-box">
      <div class="title-box">
        <h2>
          <span class="title fs-2 primary-bg-black-color">服務流程</span>
        </h2>
      </div>
      <ul>
        <template v-for="item in serverList" :key="item.num">
          <li class="list-fram primary-bg-700-color">
            <div class="tourney num primary-500-color">{{ item.num }}</div>
            <div class="w100">
              <h3 class="fs-3 fw-bold primary-white-color">{{ item.title }}</h3>
              <div class="p-t-8">
                <div class="white-space primary-300-color fs-5">
                  {{ changeLine(item.content) }}
                </div>
              </div>
            </div>
          </li>
          <span
            class="material-symbols-outlined primary-600-color arrow-down fw-bold"
          >
            arrow_downward
          </span>
        </template>
      </ul>
    </div>
  </div>
  <div class="container">
    <div class="section-box">
      <div class="design-box">
        <div class="title-box">
          <h2>
            <span class="title fs-2 primary-bg-white-color">價格表</span>
          </h2>
        </div>
        <div class="list">
          <ul>
            <li class="list-box">
              <div class="list-title">
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/price-item-visual.svg"
                  alt="平面設計"
                />
                <div class="fs-3 item-title primary-600-color fw-bold">
                  平面設計
                </div>
              </div>
              <div class="border-line"></div>
              <div class="item-price">
                <span class="fs-2">6,000</span>
                <span>起</span>
              </div>
            </li>
            <li class="list-box">
              <div class="list-title">
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/price-item-ui.svg"
                  alt="UI設計"
                />
                <div class="fs-3 item-title primary-600-color fw-bold">
                  UI設計
                </div>
              </div>
              <div class="border-line"></div>
              <div class="item-price">
                <span class="fs-2">15,000</span>
                <span>起</span>
              </div>
            </li>
            <li class="list-box">
              <div class="list-title">
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/price-item-front-end.svg"
                  alt="前端開發"
                />
                <div class="fs-3 item-title primary-600-color fw-bold">
                  前端開發
                </div>
              </div>
              <div class="border-line"></div>
              <div class="item-price">
                <span class="fs-2">22,000</span>
                <span>起</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="primary-bg-100-color">
    <div class="container section-box product-box">
      <div class="title-box">
        <h2>
          <span class="title fs-2 primary-bg-100-color">客戶案例</span>
        </h2>
      </div>
      <ul class="works-row">
        <li class="col-my-6 col-m-12">
          <div class="card-my border-0">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image4.png?raw=true"
              class="card-img-top"
              alt="work1"
            />
            <div class="card-body">
              <h2 class="card-title lh-12">美美美早餐店 POS 機 UI Design</h2>
              <p class="card-text primary-500-color">
                訂單送單一目瞭然，自動報表分析好輕鬆
              </p>
              <div class="card-round-btn">
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >UI 設計</a
                >
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >前端開發</a
                >
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >Wix</a
                >
              </div>
            </div>
          </div>
        </li>
        <li class="col-my-6 col-m-12">
          <div class="card-my border-0">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image5.png?raw=true"
              class="card-img-top"
              alt="work2"
            />
            <div class="card-body">
              <h2 class="card-title lh-12">巧克巧克形象官網設計</h2>
              <p class="card-text primary-500-color">
                三步驟完成訂票，電腦手機都支援
              </p>
              <div class="card-round-btn">
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >UI設計</a
                >
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >設計系統</a
                >
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >網路電商</a
                >
              </div>
            </div>
          </div>
        </li>
        <li class="col-my-6 col-m-12">
          <div class="card-my border-0">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image6.png?raw=true"
              class="card-img-top"
              alt="work3"
            />
            <div class="card-body">
              <h2 class="card-title lh-12">電影院訂票系統</h2>
              <p class="card-text primary-500-color">
                三步驟完成訂票，電腦手機都支援
              </p>
              <div class="card-round-btn">
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >前端開發</a
                >
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >後端支援</a
                >
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >Vue</a
                >
              </div>
            </div>
          </div>
        </li>
        <li class="col-my-6 col-m-12">
          <div class="card-my border-0">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image7.png?raw=true"
              class="card-img-top"
              alt="work4"
            />
            <div class="card-body">
              <h2 class="card-title fw-bold">
                2023 餉茶坊飲料旗艦店活動官網設計
              </h2>
              <p class="card-text primary-500-color">
                主打水果主題，冰鎮夏天暑氣
              </p>
              <div class="card-round-btn">
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >網頁設計</a
                >
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >切版服務</a
                >
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >Javascript</a
                >
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="container">
    <div class="section-box qa-box">
      <div class="title-box">
        <h2>
          <span class="title fs-2 primary-bg-white-color">常見問題</span>
        </h2>
      </div>
      <div class="qa-list">
        <div class="col-my-6 col-m-12 qa-item">
          <h4>時程很趕的話可以加快作業嗎？</h4>
          <div class="primary-600-color">
            每提早一天，只要支付總報價的 5%，我們即會視為急件為您趕工！
          </div>
        </div>
        <div class="col-my-6 col-m-12 qa-item">
          <h4>白天可以開會討論嗎？</h4>
          <div class="primary-600-color">
            每週一三五的白天，可以約定開會時間！
          </div>
        </div>
        <div class="col-my-6 col-m-12 qa-item">
          <h4>有實際開發的網站可以參考嗎？</h4>
          <div class="primary-600-color">
            請填寫表單或來信索取，部分合作有簽保密協定，無法於網路上公開喔。
          </div>
        </div>
        <div class="col-my-6 col-m-12 qa-item">
          <h4>提供比稿服務嗎？</h4>
          <div class="primary-600-color">
            只要支付費用，設計提供比稿服務，但切版與前端開發恕不提供該服務內容。
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
      serverList: [
        {
          num: 1,
          title: '初步接洽',
          content:
            '透過表單或其他社群軟體與我聯絡\n根據難易度與複雜度，後續可能需要電話/線上討論',
        },
        {
          num: 2,
          title: '需求釐清',
          content: '透過訪談與問卷，解析客戶需求，並針對痛點給予實際建議',
        },
        {
          num: 3,
          title: '委託簽約',
          content:
            '合約雙方用印後，即正式開始合作\n可提供發票或勞務報酬單，須支付 20% 訂金',
        },
        {
          num: 4,
          title: '版本呈現',
          content: '根據合約內容進行設計或開發',
        },
        {
          num: 5,
          title: '來回修正',
          content: '依據合約規定之修正次數進行，次數計算以 mail 為準',
        },
        {
          num: 6,
          title: '終版確認',
          content: '雙方同意後即為最終版',
        },
        {
          num: 7,
          title: '結案',
          content: '客戶簽署驗收單，並於約定日期支付尾款',
        },
      ],
    };
  },
  methods: {
    // 更換 \n 在html 上時變成 <br/>
    changeLine(str) {
      return str.replace(/<br>/g, '\n');
    },
  },
};
</script>

<style>
@import '../assets/scss/helper/_server.scss';
</style>
