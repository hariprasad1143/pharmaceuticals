<template>
    <div class="login__container">
        <div class="login__content">
            <div class="header">
                <img src="../../../common/www/launcher/logo-blibli-no-word-64.png"/>
                <h2 class="title">{{ $t("app.login.title") }}</h2>
            </div>
            <a class="login__button login__button--facebook" @click="doLoginFb">
                <i class="flash-facebook"></i>
                <span>{{$t('app.login.facebook')}}</span>
            </a>
            <a class="login__button login__button--google">
                <svg width="1em" height="1em" viewBox="0 0 48 48" class="google__svg"> <g> <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path> <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path> <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path> <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                <span>{{$t('app.login.google')}}</span>
            </a>
            <div class="login__content--grid">
                <span> atau </span>
            </div>
            <form class="form" id="gdn-login-form" autocomplete="on">
                <div class="grid__row">
                    <i class="flash-email"></i>
                    <input
                        type="email"
                        class="input input--email"
                        :placeholder="$t('app.login.placeholder.username')"
                        name="email"
                        v-model="loginData.username"
                        @blur="checkEmail"
                        :class="{ 'input--error': errorData.username.error }"
                        tabindex="1"
                    />
                </div>

                <div class="error error-email" v-show="errorData.username.error">{{ errorData.username.text }}</div>

                <div class="grid__row margin-top-10">
                    <i class="flash-locked"></i>
                    <input
                            :type=passwordType
                            class="input input--password"
                            :placeholder="$t('app.login.placeholder.password')"
                            name="password"
                            tabindex="2"
                            @blur="checkPassword"
                            v-model="loginData.password"
                            :class="{ 'input--error': errorData.password.error }"
                    />
                    <a @click="togglePassword">
                        <i
                            class="icon--right"
                            :class="{'flash-eye-close': !isVisiblePassword, 'flash-eye-open': isVisiblePassword}"></i>
                    </a>
                </div>

                <div class="error error-password" v-show="errorData.password.error">{{ errorData.password.text }}</div>

                <div
                        class="error error--dashed gdnLoginErrorLabel"
                        id="gdnLoginErrorLabel"
                        v-show="errorData.general.error"
                        v-html="errorData.general.text">
                </div>

                <button class="button button--big button--orange" @click.prevent="doLogin">
                    {{ $t("app.login.submit") }}
                </button>

                <div class="link link--center">
                <span>
                  <!-- {{ $t("app.login.have_no_acc") }}
                  <a href="https://www.blibli.com/registrasi">
                    {{ $t("app.login.register_here") }}
                  </a> -->
                </span>
                </div>
            </form>
        </div>
    </div>
</template>

<script src="./js/login.js"></script>

<style lang="scss" scoped>
$gray: #999999;
$blue: #0096D9;
$red: #F8011E;
$facebook-color: #4C66A4;
$gray-dark: #666666;
$gray-lighter: #DDDDDD;
$white: #fff;

@font-face{
    font-family:'flash icon';
    src: url(data:application/font-ttf;charset=utf-8;base64,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)
    format('truetype');
}
[class^="flash-"], [class*=" flash-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'flash icon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    display: inline-block;
    vertical-align: middle;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.flash-email:before {
  content: "\31";
}
.flash-facebook{
    margin-top: -0.5em;
    &:before {
        content: "\58";
    }
}
.flash-locked:before {
  content: "\e911";
}
.flash-eye-close:before {
  content: "\e912";
}
.flash-eye-open:before {
  content: "\e913";
}
.login{
    &__container{
        background: $white;
        height: 100vh;
        @media only screen and (max-width: 768px) {
            height: auto;
        }
    }
    &__content {
        width: 30%;
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #ddd;
        padding: 20px 40px;
        @media only screen and (max-width: 1024px) {
            position: relative;
            top: 0;
            left: 0;
            transform: translate(0, 0);
            width: 95%;
            padding: 0;
            margin: 0 auto;
            border: none;
            padding: 0 0 10px 0;
        }
        &--grid {
            width: 92%;
            display: block;
            text-align: center;
            margin-bottom: 20px;
            margin-left: 15px;
            &:before{
                content: '';
                width: 100%;
                height: 1px;
                display: inline-block;
                background-color: #999;
                margin-bottom: -11px;
            }
            span {
                background: #fff;
                padding: 5px 10px;
            }
        }
    }
    &__button{
        font-size: 16px;
        margin: 10px 1em;
        padding: 10px 20px;
        display: block;
        border-radius: 0.2rem;
        text-align: center;
        border: 1px solid;
        cursor: pointer;
        &--facebook{
             background: $facebook-color;
             color: #fff;
             border-radius: 0.2rem;
             border-color: $facebook-color;
        }
        &--google{
            border-color: $gray-lighter;
        }
    }

}

@mixin clearfix()
{
    *zoom: 1;
    &:before,
    &:after
     {
         display: table;
         content: ' ';
     }
    &:after
     {
         clear: both;
     }
}
@mixin transition($transition...)
{
    -webkit-transition: $transition;
    -moz-transition: $transition;
    -ms-transition: $transition;
    -o-transition: $transition;
    transition: $transition;
}
@mixin box-shadow($shadow...)
{
    -webkit-box-shadow: $shadow;
    -moz-box-shadow: $shadow;
    box-shadow: $shadow;
}

.margin-top-10 {
    margin-top: 20px;
}

.header {
    text-align: center;
    img{
        display: none;
        @media screen and (max-width: 768px){
            display: block;
            border: solid 0.5px #cccccc;
            border-radius: 100%;
            margin: 0 auto;
        }
    }
    @media screen and (max-width: 768px) {
        padding-top: 15px;
    }
}

.logo {
    border: $gray 1px solid;
    border-radius: 50%;
}

.title {
    font-size: 2.4rem;
    font-weight: 300;
    margin-top: 0;
    padding-top: 15px;
}

.form{
    padding: 0 2em;
}

.input{
    width: calc(100% - 30px);
    padding: 10px 0 10px 30px;
    border:none;
    border-bottom: #eee 1px solid;
    outline: none;
    font-size: 1.6rem;
    -webkit-appearance: none;

    @include transition(all 0.3s ease-in-out);
    @include box-shadow(0 0 0px 1000px white inset);

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
         transition: background-color 5000s ease-in-out 0s;
     }

    &:focus{
         border-bottom: 1px solid $blue;
     }

    &--error{
         border-bottom: 1px solid $red;
     }

    &-icon--left{
         position: relative;
         height: 0;
         margin-left: 5px;
         font-size: 2.1rem;
         top: 35px;
         z-index: 5;
     }

    &-icon--right{
         position: relative;
         height: 0;
         margin-top: -30px;
         font-size: 2rem;
         float: right;
         margin-right: 10px;
         cursor: pointer;
     }
     &:focus{
        outline: 0;
     }
    }

    .button {
        text-align: center;
        margin: 10px auto;
        display: block;
        border: none;
        border-radius: 0.2rem;
        width: 100%;
        margin-top: 20px;
        background-color: #f7931e;
        padding: 15px;
        color: white;
        font-size: 18px;
        cursor: pointer;
    }

    .error{
        @include clearfix();
        color: $red;
        font-size: 1.2rem;
        line-height: 1.5;
        padding-top: 5px;

        &--dashed{
             border: 1px dashed $red;
             margin-top: 10px;
             padding: 10px;
             text-align: center;
         }

        a{
            color: $blue;
            text-decoration: none;

        &:hover{
             text-decoration: underline;
         }

        }
    }

        .link{
        @include clearfix();
            font-size: 1.3rem;
            padding-top: 10px;
            color: $gray-dark;

        &--center{
            text-align: center;

            a{
                color: $blue;
                text-decoration: none;
            }
        }

        &--left{
            float: left;

            a{
                color: $blue;
                text-decoration: none;
            }
        }

        &--right{
             float: right;

            a{
                color: $blue;
                text-decoration: none;
            }
        }

    }
    .footer {
        text-align: center;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        font-size: 1.4rem;
        padding: 10px;
        background-color: $gray-lighter;
        color: $gray-dark;

    a{
        color: $blue;
        text-decoration: none;
    }
}
.grid__row{
    position: relative;
    i{
        color:#B6B6B6;
        font-size: 24px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        &.icon--right{
            left: auto;
            right: 0;
            cursor: pointer;
        }
    }
}
</style>
