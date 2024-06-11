<template>
  <div class="container">
    <div class="form-style">
      <h2 class="fs-2 fw-bold primary-700-color">請填寫聯絡表單</h2>
      <VeeForm
        ref="form"
        @submit.prevent="onSubmit"
        v-slot="{ errors }"
        class="form-row row gx-md-5"
      >
        <div class="col-12">
          <label for="name" class="form-label w-100 primary-600-color fs-5"
            >公司 or 個人單位名稱</label
          >
          <VeeField
            id="name"
            name="名稱"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['名稱'] }"
            placeholder="請輸入公司或個人單位名稱"
            rules="required"
            v-model="form.user.companyName"
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
            id="contactPerson"
            name="聯絡人"
            type="text"
            class="form-control w-100"
            :class="{ 'is-invalid': errors['聯絡人'] }"
            placeholder="請輸入聯絡人"
            rules="required"
            v-model="form.user.contactPerson"
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
            id="phone"
            name="phone"
            type="email"
            class="form-control w-100"
            :class="{ 'is-invalid': errors['phone'] }"
            placeholder="請輸入電話號碼"
            :rules="isPhone"
            v-model="form.user.phone"
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
            id="email"
            name="email"
            type="email"
            class="form-control w-100"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
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
            id="price"
            name="預算"
            class="form-control"
            :class="{ 'is-invalid': errors['預算'] }"
            placeholder="請輸入預算"
            rules="required"
            as="select"
            v-model="form.user.price"
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
            id="needed"
            name="服務需求"
            value="5"
            type="checkbox"
            class="form-control d-flex"
            :class="{ 'is-invalid': errors['服務需求'] }"
            placeholder="請勾選服務需求"
            rules="required"
          >
            <label class="form-check-label">
              <VeeField
                class="form-check-input"
                type="checkbox"
                name="gender"
                value="網站設計"
                rules="required"
                v-model="form.user.services.isCheck1"
              />
              網站設計
            </label>
            <label>
              <VeeField
                class="form-check-input"
                type="checkbox"
                name="gender"
                value="程式設計"
                rules="required"
                v-model="form.user.services.isCheck2"
              />
              程式設計
            </label>
            <label>
              <VeeField
                class="form-check-input"
                type="checkbox"
                name="gender"
                rules="required"
                value="主機/網址相關資訊"
                v-model="form.user.services.isCheck3"
              />
              主機/網址相關資訊
            </label>
            <label>
              <VeeField
                class="form-check-input"
                type="checkbox"
                name="gender"
                rules="required"
                value="行銷服務相關諮詢"
                v-model="form.user.services.isCheck4"
              />
              行銷服務相關諮詢
            </label>
            <label>
              <VeeField
                class="form-check-input"
                type="checkbox"
                name="gender"
                value="其他問題"
                v-model="form.user.services.isCheck5"
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
          <button class="btn btn-outline-dark" type="submit">送出表單</button>
        </div>
      </VeeForm>
    </div>
  </div>
</template>

<script type="module">
import Swal from 'sweetalert2';
import 'axios';

export default {
  data() {
    return {
      form: {
        user: {
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          services: {
            isCheck1: false,
            isCheck2: false,
            isCheck3: false,
            isCheck4: false,
            isCheck5: false,
          },
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
    isServise(value) {
      if (value && value.length) {
        return true;
      }
      return '請幫我至少勾選一個';
    },
    onSubmit() {
      console.log(this.form, '點到了');
      Swal.fire({
        position: 'center',
        title: '謝謝您的來信，將有專員與您聯繫',
        text: '工作日1-3日回覆',
        icon: 'success',
        confirmButtonText: 'Cool',
        timer: 1500,
      });
      setTimeout(() => {
        this.$router.push('/');
      }, 2000);
    },
  },
};
</script>

<style>
@import 'bootstrap/scss/bootstrap.scss';
@import '../assets/scss/helper/_contact.scss';
</style>

<!-- {
  "companyName":"花花",
  "contactPerson":"阿明",
  "email":"123@gmail.com",
  "phone": "0911111111",
  "services":{
          "isCheck1": false,
          "isCheck2": false,
          "isCheck3": false,
          "isCheck4": false,
          "isCheck5": false
        },
  "message":""
} -->
