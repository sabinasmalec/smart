<template>
    <div id="app" v-bind:class="{ active: isActive }">
        <header class="header">
            <div class="header__clear-outher">
                <button class="header__clear icon-ccw" v-on:click="toggleActive">Neu starten</button>
            </div>
            <h1 class="header__title">brillenberater</h1>
            <p class="header__subtitle">In wenigen Schritten zur perfekten Brille</p>
        </header>
        <ul class="steps">
            <li class="steps__item">1
            </li>
            <li class="steps__item">2
            </li>
            <li class="steps__item">3
            </li>
            <li class="steps__item">4
            </li>
            <li class="steps__item steps__item--active">5
            </li>
        </ul>
        <v-content>
            <router-view></router-view>
        </v-content>
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <ProductList msg="Welcome to Your Vue.js App"/>

        <!--<img alt="Vue logo" src="./assets/logo.png">-->
    </div>
</template>

<script>
    import FaceType from './components/FaceType.vue'
    import ProductList from './components/ProductList.vue'

    export default {
        name: 'app',
        components: {
            FaceType,
            ProductList
        },
        data () {
            return {
                isActive: false
            }
        },
        methods: {
            toggleActive: function () {
                this.isActive = !this.isActive
            }
        }
    }
</script>

<style lang="scss">
    @import "assets/font/css/fontello.css";

    .header {
        background: transparent url('assets/img/header-bg.png') no-repeat right center;
        background-size: contain;
        overflow: hidden;
        margin-bottom: 13px;
        transition: all .2s ease-in-out .2s;

        &__title {
            font-size: 3rem;
            text-transform: uppercase;
            color: $theme-color;
            margin: 21px 12px 4px;
            transition: all .2s ease-in-out .2s;

        }
        &__subtitle {
            color: $theme-color;
            font-size: 1.15rem;
            margin: 0 12px 48px;
            transition: all .2s ease-in-out .2s;

        }
        &__clear-outher {
            display: flex;
            justify-content: flex-end;
        }
        &__clear {
            background-color: $theme-color-light;
            color: #fff;
            border: none;
            font-size: .9rem;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            line-height: 2rem;
            &::before {
                font-size: 1.2rem;
                padding-left: 5px;
            }
        }
    }

    .steps {
        display: flex;
        &__item {
            background-color: $theme-color-light;
            flex: 1;
            font-size: 1.1rem;
            text-align: center;
            color: #fff;
            line-height: 2.7rem;
            position: relative;
            transition: all .2s ease-in-out .2s;

            &::after {
                content: '';
                background-image: url('assets/img/arrow-right.png');
                width: 24px;
                height: 43px;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                background-repeat: no-repeat;
                background-size: contain;
            }
            &:first-child::after {
                content: none;
            }
            &--active {
                background: $theme-color;
            }
        }
    }

    #app.active {
        .header__title, .product-list-item__price, .face-type__title, .header__subtitle {
            color: $green;
        }
        .product-list__title, .steps__item--active, .face-type-list-item__tooltip, .header__clear {
            background: $green;
        }
        .product-list-item__go-to-product {
            background: $theme-color;
        }
    }

    @media (max-width: 576px) {
        .header {
            background: transparent;
            &__title {
                font-size: 1.7rem;
            }
        }
    }
</style>
