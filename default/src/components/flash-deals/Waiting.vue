<template>
  <div class="mi waiting">
    <section class="mi__box mi__box-header row">
      <img src="~assets/images/flash-sale/icon-queue.png" alt="waiting" />
    </section>
    <section class="mi__box mi__box-content row">
			<div>
        <h2>Sedang Dalam Antrian...</h2>
        <p>Stok Flash Sale terjual cepat! Kami harus cek dulu stok buat Anda. Sambil menunggu, ucapkan</p>
        <p>“Sisain stoknya dong!” Semoga harapan Anda terkabul.</p><br>
        <p v-if="!waitingFlag">Antrian akan diperbarui setelah</p>
        <div v-else>
          <p>Uh, belum berhasil masuk</p>
          <a @click="refreshTimer" class="btn-refresh">
            <img src="~assets/images/flash-sale/icon-refresh-white.svg" alt="waiting" />
            Coba antri lagi
          </a>
        </div>
			</div>
			<div v-if="!waitingFlag">
				<h2>{{ minutes | leftPad('0', 2) }} : {{ seconds | leftPad('0', 2) }}</h2>
			</div>
      <a class="go-back" v-else href="/">Keluar dari antrian</a>
    </section>
  </div>
</template>

<script src="./js/waiting.js"></script>
<style lang="scss" scoped>
.mi {
	color: #333;
  padding-bottom: 270px;
	padding-top: 30px;
  background-color: #fff;
  &__box {
    margin-bottom: 2%;
		margin-top: 2%;
		&-header {
			display: flex;
      margin-top: 5%;
      align-items: center;
      justify-content: space-between;
		}
		&-content {
			display: block;
      text-align: center;
			div {
				margin-bottom: 22px;
			}
			.refresh {
				background: rgba(0, 149, 220, 1);
				border: none;
				padding: 10px 0;
				color: #fff;
				font-size: 1.286em;
				cursor: pointer;
				img {
					width: 13%;
					vertical-align: top;
					padding-right: 10px;
				}
			}
      .btn-disabled {
        background: rgba(0, 149, 220, 1);
        cursor: not-allowed;
      }
		}
		h2 {
			font-size: 1.714em;
      margin-top: 15px;
      margin-bottom: 10px;
		}
    a {
      text-decoration: none;
      color: #0095dc;
    }
		p {
			font-size: 1.143em;
		}
    .go-back {
      text-decoration: underline;
    }
    .btn {
      &-refresh {
        background: #0095dc;
        padding: 10px 20px;
        margin: 40px;
        color: #FFF !important;
        cursor: pointer;
        img {
          position: relative;
          top: 6px;
          left: -4px;
        }
      }
    }
	}
}
</style>
