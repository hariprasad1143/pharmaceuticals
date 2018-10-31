<template>
  <div class="paymentPunchout">
    <div v-if="paymentData.paymentData && paymentData.paymentData.httpMethod === 'post'">
      <form ref="blibliForm" id="blibliForm" name="blibliForm" method="POST" :action=paymentData.redirectUrl>
        <input v-for="(value, key) in formData" type="hidden" :id=key :name=key :value=value>
      </form>
    </div>
  </div>
</template>

<script src="./js/payment-punchout.js"></script>
