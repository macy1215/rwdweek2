<template>
  <div class="backColor">
    <div class="container">
      <nav class="navbar">
        <div class="logostyle">
          <RouterLink to="/">
            <h1>
              <a class="navbar-brand">Noel</a>
            </h1>
          </RouterLink>
        </div>
        <!-- PC -->
        <div class="nav-list margin-0-auto">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center mx-auto my-0"
          >
            <li class="nav-item nav-page">
              <RouterLink
                class="nav-link primary-800-color"
                aria-current="page"
                to="/"
                ><span>首頁</span>
              </RouterLink>
            </li>
            <li class="nav-item nav-page">
              <RouterLink
                class="nav-link primary-800-color"
                aria-current="page"
                to="/works"
                ><span>作品集</span>
              </RouterLink>
            </li>
            <li class="nav-item nav-page">
              <RouterLink
                class="nav-link primary-800-color"
                aria-current="page"
                to="/service"
                ><span>服務項目</span>
              </RouterLink>
            </li>
            <li class="nav-item nav-page">
              <RouterLink
                class="nav-link primary-800-color"
                aria-current="page"
                to="/blog"
                ><span>部落格</span>
              </RouterLink>
            </li>
            <li class="nav-item nav-page">
              <RouterLink
                class="nav-link primary-800-color"
                aria-current="page"
                to="/"
                >聯絡我
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="navbar-humber">
        <!-- 手機版本 三 按鈕 -->
        <div class="nav-mobil-list">
          <div class="logostyle">
            <RouterLink to="/">
              <h1>
                <a class="navbar-brand">Noel</a>
              </h1>
            </RouterLink>
          </div>
          <div class="hambuger">
            <button class="navbar-toggler" type="button">
              <span class="material-symbols-outlined hamber-icon"> menu</span>
              <span class="material-symbols-outlined close-icon close">
                close
              </span>
            </button>
          </div>
        </div>
        <!-- Mobil -->
        <div class="margin-0-auto mobil-nav close">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center mx-auto my-0"
          >
            <li class="nav-item nav-mobil-page">
              <RouterLink
                class="nav-link primary-800-color"
                aria-current="page"
                to="/"
                ><span>首頁</span>
              </RouterLink>
            </li>
            <li class="nav-item nav-mobil-page">
              <RouterLink
                class="nav-link primary-800-color"
                aria-current="page"
                to="/works"
                ><span>作品集</span>
              </RouterLink>
            </li>
            <li class="nav-item nav-mobil-page">
              <RouterLink
                class="nav-link primary-800-color"
                aria-current="page"
                to="/service"
                ><span>服務項目</span>
              </RouterLink>
            </li>
            <li class="nav-item nav-mobil-page">
              <RouterLink
                class="nav-link primary-800-color"
                aria-current="page"
                to="/blog"
                ><span>部落格</span>
              </RouterLink>
            </li>
            <li class="nav-item nav-mobil-page">
              <RouterLink
                class="nav-link primary-800-color"
                aria-current="page"
                to="/"
                >聯絡我
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line func-names
    $('.navbar-toggler').click(function () {
      $('.hamber-icon').toggleClass('active');
      $('.hamber-icon').toggleClass('close');
      $('.close-icon').toggleClass('close');
      $('.mobil-nav').toggleClass('close');
    });
  },
};

// if (window.jQuery) {
//   console.log('jQuery 成功引入');
//   $('#test-element').text('jQuery 引入成功！');
// } else {
//   console.log('jQuery 引入失敗');
// }
</script>

<style>
@import '@/assets/scss/helper/_navbar.scss';
</style>
