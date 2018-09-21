<template>
    <section class="product-list">
        <h2 class="product-list__title">
            Produkte, die Ihren Wunschen entsprechen
        </h2>
        <div class="product-list__container">
            <article class="product-list-item">
                <div class="product-list-item__col">
                    <img alt="Vue logo" src="./../assets/img/product1.png" class="product-list-item__img">
                </div>
                <div class="product-list-item__col">
                    <h3 class="product-list-item__title">
                        funchal
                    </h3>
                    <ul class="product-features">
                        <li class="product-features__item product-features__item--checked">
                            Brillentyp: Damen, Herren
                        </li>
                        <li class="product-features__item product-features__item--checked">
                            Rahmentyp: Randlose Brille
                        </li>
                        <li class="product-features__item product-features__item--checked">
                            Eckiger Rahmen
                        </li>
                        <li class="product-features__item product-features__item--checked">
                            Ovaler Rahmen
                        </li>
                        <li class="product-features__item product-features__item--checked">
                            Runder Rahmen
                        </li>
                        <li class="product-features__item product-features__item--checked">
                            Stil: casual, extravagant
                        </li>
                        <li class="product-features__item product-features__item--unchecked">
                            Einstarkenbrille
                        </li>
                        <li class="product-features__item product-features__item--unchecked">
                            Material: Metall
                        </li>
                    </ul>
                    <a class="icon-down-open product-features__see-more">
                        meht Attribute anzeigen
                    </a>
                </div>
                <div class="product-list-item__col">
                    <div class="product-list-item__price-box">
                        <p class="product-list-item__price-info">
                            Rahmen inkl. Glaser & Service
                        </p>
                        <span class="product-list-item__price">ab 39,90 	&euro;</span>
                    </div>
                    <a href="" class="product-list-item__go-to-product icon-basket">Zum Product</a>
                </div>
            </article>
            <article class="product-list-item">
                <div class="product-list-item__col">
                    <img alt="Vue logo" src="./../assets/img/product1.png" class="product-list-item__img">
                </div>
                <div class="product-list-item__col">
                    <h3 class="product-list-item__title">
                        funchal
                    </h3>
                    <ul class="product-features">
                        <li class="product-features__item product-features__item--checked">
                            Brillentyp: Damen, Herren
                        </li>
                        <li class="product-features__item product-features__item--checked">
                            Rahmentyp: Randlose Brille
                        </li>
                        <li class="product-features__item product-features__item--checked">
                            Eckiger Rahmen
                        </li>
                        <li class="product-features__item product-features__item--checked">
                            Ovaler Rahmen
                        </li>
                        <li class="product-features__item product-features__item--checked">
                            Runder Rahmen
                        </li>
                        <li class="product-features__item product-features__item--checked">
                            Stil: casual, extravagant
                        </li>
                        <li class="product-features__item product-features__item--unchecked">
                            Einstarkenbrille
                        </li>
                        <li class="product-features__item product-features__item--unchecked">
                            Material: Metall
                        </li>
                    </ul>
                    <a class="icon-down-open product-features__see-more">
                        meht Attribute anzeigen
                    </a>
                </div>
                <div class="product-list-item__col">
                    <div class="product-list-item__price-box">
                        <p class="product-list-item__price-info">
                            Rahmen inkl. Glaser & Service
                        </p>
                        <span class="product-list-item__price">ab 39,90 	&euro;</span>
                    </div>
                    <a href="" class="product-list-item__go-to-product icon-basket">Zum Product</a>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ProductList',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .product-list {
        &__title {
            color: #fff;
            background: $theme-color;
            text-align: center;
            padding: 13px;
            font-weight: bold;
            font-size: 1.1rem;
            transition: all .2s ease-in-out .2s;
        }
    }

    .product-list-item {
        display: flex;
        border: 1px solid $grey-border2;
        margin-top: 1rem;
        &__col {
            padding: 1rem;
        }
        &__title {
            text-transform: uppercase;
            font-size: 1.2rem;
            font-weight: bold;
            padding-bottom: 12px;
            border-bottom: 1px solid $grey-border2;
            margin-bottom: 20px;
        }
        &__price-box {
            border: 1px solid $grey-border2;
            padding: 1rem;
            border-radius: 4px;
            margin-bottom: 1rem;
            text-align: center;
        }
        &__price-info {
            font-size: .8rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        &__price {
            font-size: 1.5rem;
            font-weight: bold;
            color: $theme-color;
            transition: all .2s ease-in-out .2s;
        }
        &__go-to-product {
            line-height: 40px;
            background: #1ca638;
            text-decoration: none;
            color: #fff;
            background: #297600;
            background: -moz-linear-gradient(top, #3c9100 0%, #2a7700 100%);
            background: -webkit-linear-gradient(top, #3c9100 0%, #2a7700 100%);
            background: linear-gradient(to bottom, #3c9100 0%, #2a7700 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3c9100', endColorstr='#2a7700', GradientType=0);
            line-height: 45px;
            display: block;
            text-align: center;
            font-weight: bold;
            font-size: 1.3rem;
            border-radius: 7px;
            transition: all .2s ease-in-out .2s;
            &::before {
                margin-right: 1rem;
            }
        }
    }

    .product-features {
        &__item {
            position: relative;
            padding: 0 20px 0;
            &--checked {
                &::before {
                    content: '';
                    position: absolute;
                    left: 5px;
                    top: 2px;
                    width: 5px;
                    height: 8px;
                    border: solid #fff;
                    border-width: 0 3px 3px 0;
                    transform: rotate(45deg);
                    z-index: 1;
                }
                &::after {
                    content: '';
                    top: 0;
                    background: $green;
                    left: 0;
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    z-index: 0;
                }

            }
            &--unchecked {
                &::after {
                    content: '';
                    top: 0;
                    background: $grey-border2;
                    left: 0;
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    z-index: 0;
                }
                &::before {
                    content: '';
                    position: absolute;
                    left: 4px;
                    top: 4px;
                    width: 7px;
                    height: 7px;
                    background: #fff;
                    z-index: 1;
                    border-radius: 50%;
                }
            }
            margin-bottom: .5rem;
        }
        &__see-more {
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-end;
            font-weight: bold;
        }
    }

    @media (max-width: 991px) {
        .product-list-item {
            flex-flow: row wrap;

            &__col {
                flex: 1 0 40%;
            }
            &__img {
                max-width: 100%;
                margin: 0 auto;
                display: block;
            }
        }
    }

    @media (max-width: 576px) {
        .product-list-item {
            flex-direction: column;
        }
    }
</style>
