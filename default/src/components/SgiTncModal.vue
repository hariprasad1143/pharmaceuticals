<template>
  <div class="wrap wrap--shown tnc-modal" @click="onWrapClose">
    <div class="content">
      <div class="close" @click="close">
        &#9587;
      </div>
      <div class="content__caption">{{ $t("app.tnc.caption") }}</div>
      <div class="sgi-tnc-modal__list" v-html="tncContent"></div>
    </div>
  </div>
</template>

<script src="./js/sgi-tnc-modal.js"></script>

<style lang="scss" scoped>
.close{
  cursor: pointer;
  font-size: 12px;
  text-align: right;
  position: absolute;
  right: 15px;
  top: 15px;
}
.wrap {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: none;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);

  &--shown {
    display: flex;
    align-items: center;
    .content {
        animation-name: zoomIn;
        animation-duration: .3s;
        animation-fill-mode: both;
    }
  }
}

.content{
  position: relative;
  margin: 0 auto;
  padding: 40px 30px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: left;
  border-radius: 4px;

  &__caption {
    margin-bottom: 1em;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }

  @media (min-width: 769px) {
    width: 80%;
    max-width: 500px;
    max-height: 700px;
    text-align: left;
  }
}

.field-wrap{
  line-height: 2;
  & > ul {
    padding: 5px 0;
  }
}

.field-wrap{
  line-height: 2;
  & > ul {
    padding: 5px 0;
  }
}

@keyframes zoomIn {
  from {
    transform: scale3d(0.3, 0.3, 0.3);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}


.sgi-tnc-modal{
  &__list {
    padding-right: 10px;
    line-height: 1.5;
    overflow-y: auto;
    font-size: 12px;
    text-align: justify;
    height: 95%;

    @media (min-width: 769px) {
      max-height: 550px;
    }
  }
}

.sgi-tnc-modal__list /deep/ a {
  font-weight: bold;
  color: #0072c5;
  text-decoration: none;
  &:hover{
      text-decoration: underline;
    }
}

.sgi-tnc-modal__list /deep/ ol {
  margin: 0;
  -moz-column-count: 2;
  -moz-column-gap: 50px;
  -webkit-column-count: 2;
  -webkit-column-gap: 50px;
  column-count: 2;
  column-gap: 50px;
  li {
    padding-bottom: 1em;
    list-style: lower-alpha;
  }
}

.table-scroll{
  overflow-x: auto;
  width: 100%;
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    border: 1px solid #ddd;
    thead {
      td {
        font-weight: bold;
        padding: 0px 10px;
        border: 1px solid #ddd;
      }
    }
    tbody{
      td {
        padding: 0px 10px;
        border: 1px solid #ddd;
      }
      td:nth-child(1) {
        text-align: left;
      }
      tr:nth-child(odd) {
        background-color: #eee;
      }
    }
  }
}
</style>

