<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <div class="box-in">
          <div class="footer-logo">
            <a href="#">Noel</a>
          </div>
          <div class="footer-txt fs-5 fs-md-6 primary-700-color">
            <p>若有數位產品設計和開發相關問題</p>
            <p>歡迎填寫表單，或直接與我聯絡！</p>
          </div>
          <div>
            <a
              href="service@hexschool.com?bcc=service@hexschool.com"
              class="fs-5 primary-500-color lh-12 fs-md-6"
              >service@hexschool.com</a
            >
          </div>
        </div>
        <div class="box-in">
          <ul>
            <RouterLink to="/">
              <li class="form primary-bg-black-color">
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/list.svg"
                  alt="list"
                />
                <span class="primary-white-color">填寫表單</span>
              </li>
            </RouterLink>
            <RouterLink to="/">
              <li class="form primary-bg-white-color border-gray">
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/instagram.svg"
                  alt="list"
                />
                <span class="primary-700-color">hexschool_demo</span>
              </li>
            </RouterLink>
            <RouterLink to="/">
              <li class="form primary-bg-white-color border-gray">
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/facebook.svg"
                  alt="list"
                />
                <span class="primary-700-color">hexschoolTW</span>
              </li>
            </RouterLink>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {};
  },
};
</script>

<style>
@import '@/assets/scss/helper/_footer.scss';
</style>
