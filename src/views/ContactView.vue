<template>
  <div class="container">
    <div class="form-style">
      <h2 class="fs-2 fw-bold primary-700-color">請填寫聯絡表單</h2>
      <VeeForm
        @submit="onSubmit"
        v-slot="{ errors, resetForm }"
        class="form-row row gx-5"
      >
        <div class="col-12">
          <label for="name" class="form-label w-100 primary-600-color fs-5"
            >公司 or 個人單位名稱</label
          >
          <VeeField
            field
            id="name"
            name="名稱"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['名稱'] }"
            placeholder="請輸入公司或個人單位名稱"
            rules="required"
          ></VeeField>
          <ErrorMessage
            name="名稱"
            class="invalid-feedback"
            :class="{ 'is-invalid': errors['名稱'] }"
          ></ErrorMessage>
        </div>
        <div class="col-md-6 col-12 mt-4">
          <label
            for="contactPerson"
            class="form-label w-100 primary-600-color fs-5"
            >聯絡人</label
          >
          <VeeField
            field
            id="contactPerson"
            name="聯絡人"
            type="text"
            class="form-control w-100"
            :class="{ 'is-invalid': errors['聯絡人'] }"
            placeholder="請輸入聯絡人"
            rules="required"
          ></VeeField>
          <ErrorMessage
            name="聯絡人"
            class="invalid-feedback text-start"
            :class="{ 'is-invalid': errors['聯絡人'] }"
          ></ErrorMessage>
        </div>
        <div class="col-md-6 col-12 mt-4">
          <label for="phone" class="form-label w-100 primary-600-color fs-5"
            >電話</label
          >
          <VeeField
            field
            id="phone"
            name="phone"
            type="email"
            class="form-control w-100"
            :class="{ 'is-invalid': errors['phone'] }"
            placeholder="請輸入電話號碼"
            :rules="isPhone"
          ></VeeField>
          <ErrorMessage
            name="phone"
            class="invalid-feedback text-start"
            :class="{ 'is-invalid': errors['phone'] }"
          ></ErrorMessage>
        </div>
        <div class="col-md-6 col-12 mt-4">
          <label for="email" class="form-label w-100 primary-600-color fs-5"
            >Email 電子信箱</label
          >
          <VeeField
            field
            id="email"
            name="email"
            type="email"
            class="form-control w-100"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
          ></VeeField>
          <ErrorMessage
            name="email"
            class="invalid-feedback"
            :class="{ 'is-invalid': errors['email'] }"
          ></ErrorMessage>
        </div>
        <div class="col-md-6 col-12 mt-4">
          <label for="price" class="form-label w-100 primary-600-color fs-5"
            >預算</label
          >
          <VeeField
            field
            id="price"
            name="預算"
            class="form-control"
            :class="{ 'is-invalid': errors['預算'] }"
            placeholder="請輸入預算"
            rules="required"
            as="select"
          >
            <option value="">請選擇預算</option>
            <option value="3萬以下">3萬以下</option>
            <option value="3萬到5萬">3萬到5萬</option>
            <option value="5萬以上">5萬以上</option>
            <option value="請聯繫討論">請聯繫討論</option>
          </VeeField>
          <error-message name="預算" class="invalid-feedback"></error-message>
        </div>
        <div class="col-12 mt-4 ckebock">
          <label for="needed" class="form-label w-100 primary-600-color fs-5"
            >服務需求</label
          >
          <VeeField
            field
            id="needed"
            name="服務需求"
            type="checkedbox"
            class="form-control d-flex"
            :class="{ 'is-invalid': errors['服務需求'] }"
            placeholder="請勾選服務需求"
            rules="required"
          >
            <label>
              <input
                type="checkbox"
                name="gender"
                v-bind="field"
                value="webdesign"
              />
              網站設計
            </label>
            <label>
              <input
                type="checkbox"
                name="gender"
                v-bind="field"
                value="coding"
              />
              程式設計
            </label>
            <label>
              <input
                type="checkbox"
                name="gender"
                v-bind="field"
                value="port"
              />
              主機/網址相關資訊
            </label>
            <label>
              <input
                type="checkbox"
                name="gender"
                v-bind="field"
                value="marketing"
              />
              行銷服務相關諮詢
            </label>
            <label>
              <input
                type="checkbox"
                name="gender"
                v-bind="field"
                value="other"
              />
              其他問題
            </label>
          </VeeField>
          <ErrorMessage
            name="服務需求"
            class="invalid-feedback"
            :class="{ 'is-invalid': errors['服務需求'] }"
          ></ErrorMessage>
        </div>
        <div class="col-md-12 col-12 mt-4 mb-3 text-start">
          <label for="message" class="form-label fs-5 primary-600-color"
            >備註留言</label
          >
          <textarea
            id="message"
            class="form-control"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div class="col-md-12">
          <button class="btn btn-outline-dark" @click="resetForm">
            送出表單
          </button>
        </div>
      </VeeForm>
    </div>
  </div>
</template>

<script type="module">
import Swal from 'sweetalert2';
import 'axios';

export default {
  date() {
    return {
      form: {
        user: {
          componeyname: '',
          contactPerson: '',
          email: '',
          phone: '',
          needed: '',
          price: '',
        },
        message: '',
      },
    };
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value)
        ? true
        : '請輸入以「09」開頭的行動電話號碼';
    },
    onSubmit() {
      Swal.fire({
        title: 'Hello!',
        text: 'This is a SweetAlert2 alert.',
        icon: 'success',
        confirmButtonText: 'Cool',
        // }).then((result) => {
        //   const infor = this.form;
        //   const url = 'https://todolist-fc06.onrender.com/todos';
        //   axios.post(url, { data: infor });
      });
    },
    resetForm() {},
  },
};
</script>

<style>
@import 'bootstrap/scss/bootstrap.scss';
@import '../assets/scss/helper/_contact.scss';
</style>
