<template>
  <div class="banner primary-bg-100-color">
    <div class="banner-con margin-0-auto">
      <div class="margin-0-auto content-box">
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/quote-left.png?raw=true"
          alt="裝飾符號left"
          class="quo-left"
        />
        <div class="bannerp-style1">
          <p class="fs-4 txtindex">
            讓使用者在觀賞與使用的旅程中，發現設計的價值
          </p>
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/mark.png?raw=true"
            alt="mark-01"
            class="mark-01"
          />
        </div>
        <div class="bannerp-style2">
          <p class="fs-4 txtindex">而我在設計與開發的過程中，看見自己的價值</p>
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/mark.png?raw=true"
            alt="mark-01"
            class="mark-02"
          />
        </div>
        <div class="mark2-box">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/quote-right.png?raw=true"
            alt="裝飾符號right"
            class="quo-right"
          />
        </div>
      </div>
      <div class="banner-bottom">
        <div class="bottom-box">
          <p class="primary-600-color fs-6">2B經驗</p>
          <div class="bot-line"></div>
          <p class="primary-700-color fs-6">
            內部監控系統、庫存系統、採購系統、行銷整合系統
          </p>
        </div>
        <div class="bottom-box">
          <p class="primary-600-color fs-6">2C經驗</p>
          <div class="bot-line"></div>
          <p class="primary-700-color fs-6">
            跨國美妝保養電商、個人品牌網站、醫美網站、電子商務
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="works">
      <ul class="works-row">
        <li class="col-my-6 col-m-12 works-item">
          <div class="card-my border-0">
            <div class="img-box">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image1.png?raw=true"
                class="card-img-top"
                alt="work1"
                @click="openModal()"
              />
            </div>
            <div class="modal fade" tabindex="-1" ref="ItemModal">
              <div class="modal-dialog">
                <div class="modal-content border-0">
                  <div class="modal-header flex-column">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      @click="hideModal"
                    ></button>
                    <div class="header-box">
                      <h5
                        class="modal-title fs-3 d-flex justify-content-center pb-2"
                      >
                        星際旅行訂票平台
                      </h5>
                      <p class="text-center primary-500-color fs-6">
                        遊宇宙的夢想，從這裡開始實現
                      </p>
                      <div class="row d-flex justify-content-between">
                        <div class="col-my-7 col-m-12 pe-md-3 p-0">
                          STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。<br />
                          主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。
                        </div>
                        <div
                          class="col-my-5 col-m-12 ps-md-4 mt-4 pt-4 d-flex flex-column justify-content-center primary-600-color"
                        >
                          <p class="mb-2">
                            <span>設計原則：</span
                            >宇宙旅行、深色背景、強烈視覺效果
                          </p>
                          <p class="mb-2">
                            <span>開發方式：</span>Bootstrap、Javascript、RWD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-body">
                    <div>
                      <img
                        src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/modal-image1.png?raw=true"
                        alt=""
                        class="modal-img"
                      />
                      <h4
                        class="text-center modal-body-title fs-4 fw-bold primary-800-color"
                      >
                        主視覺
                      </h4>
                      <div
                        class="text-md-center text-start primary-600-color pt-2"
                      >
                        可直接設定日期、起迄星球、張數，快速查詢可購買的票券。
                      </div>
                    </div>
                    <div>
                      <img
                        src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/modal-image2.png?raw=true"
                        alt=""
                        class="modal-img"
                      />
                      <h4
                        class="text-center modal-body-title fs-4 fw-bold primary-800-color"
                      >
                        推薦查詢
                      </h4>
                      <div
                        class="text-md-center text-start primary-600-color pt-2"
                      >
                        給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h2 class="card-title lh-12">星際旅行訂票平台</h2>
              <p class="card-text primary-500-color">
                悠遊宇宙的夢想，從這裡開始實現
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
                  >響應式設計</a
                >
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >Bootstrap</a
                >
              </div>
            </div>
            <!-- Modal -->
          </div>
        </li>
        <li class="col-my-6 col-m-12 works-item">
          <div class="card-my border-0">
            <div class="img-box">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image2.png?raw=true"
                class="card-img-top"
                alt="work2"
              />
            </div>
            <div class="card-body">
              <h2 class="card-title lh-12">理財App</h2>
              <p class="card-text primary-500-color">
                連動帳戶與行動支付，讓 AI 提供您最好的理財建議
              </p>
              <div class="card-round-btn">
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >APP設計</a
                >
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >iOS</a
                >
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >React</a
                >
              </div>
            </div>
          </div>
        </li>
        <li class="col-my-6 col-m-12 works-item">
          <div class="card-my border-0">
            <div class="img-box">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image3.png?raw=true"
                class="card-img-top"
                alt="work3"
              />
            </div>

            <div class="card-body">
              <h2 class="card-title lh-12">醫美診所官網</h2>
              <p class="card-text primary-500-color">
                永保青春的秘密，從粹究開始
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
                  >響應式設計</a
                >
                <a
                  href="#"
                  class="primary-700-color primary-bg-200-color"
                  @click.prevent="linkClick"
                  >ＷordPress</a
                >
              </div>
            </div>
          </div>
        </li>
        <li class="col-my-6 col-m-12 works-item">
          <div class="card-my border-0">
            <div class="img-box">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image4.png?raw=true"
                class="card-img-top"
                alt="work4"
              />
            </div>

            <div class="card-body">
              <h2 class="card-title fw-bold">美美美早餐店 POS 機 UI Design</h2>
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
        <li class="col-my-6 col-m-12 works-item">
          <div class="card-my border-0">
            <div class="img-box">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image5.png?raw=true"
                class="card-img-top"
                alt="work5"
              />
            </div>

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
        <li class="col-my-6 col-m-12 works-item">
          <div class="card-my border-0">
            <div class="img-box">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image6.png?raw=true"
                class="card-img-top"
                alt="work6"
              />
            </div>

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
                  >UI 設計</a
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
      </ul>
      <div class="page-box">
        <nav class="page">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link fs-4 primary-700-color" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link fs-4 primary-700-color" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link fs-4 primary-700-color" href="#">3</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default {
  data() {
    return {
      myModal: null,
      cardDetail: null,
    };
  },
  methods: {
    linkClick(e) {
      e.preventDefault();
    },
    openModal() {
      this.myModal.show();
    },
    hideModal() {
      this.myModal.hide();
    },
  },
  mounted() {
    this.myModal = new Modal(this.$refs.ItemModal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
};
</script>
