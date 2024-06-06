<template>
  <header>
    <div class="container header-inner">
      <!-- LOGO -->
      <div class="logostyle">
        <RouterLink to="/">
          <h1>
            <a class="navbar-brand">Noel</a>
          </h1>
        </RouterLink>
      </div>
      <!-- MENU 特效，使用Css選擇器寫法 -->
      <input type="checkbox" name="" id="menu-control" class="menu-control" />
      <!-- label icon 顯示Menu 或是 close -->
      <label for="menu-control" class="menu-btn">
        <span class="material-symbols-outlined menu-icon open"> menu</span>
        <span class="material-symbols-outlined menu-icon close"> close </span>
      </label>

      <!-- NAVLIST-->
      <ul class="navbar-navList">
        <li class="nav-item">
          <RouterLink class="primary-800-color" aria-current="page" to="/"
            ><span>首頁</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="primary-800-color" aria-current="page" to="/works"
            ><span>作品集</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            class="primary-800-color"
            aria-current="page"
            to="/service"
            ><span>服務項目</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="primary-800-color" aria-current="page" to="/blogs"
            ><span>部落格</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            class="primary-800-color"
            aria-current="page"
            to="/contact"
            >聯絡我
          </RouterLink>
        </li>
      </ul>

      <!-- <nav class="navbar-humber">
        
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
              
            </button>
          </div>
        </div>
        
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
      </nav> -->
    </div>
  </header>
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
