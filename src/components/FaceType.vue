<template>
    <section class="face-type">
        <h2 class="face-type__title">Welche Gesichtsform haben Sie?</h2>
        <form class="face-type-form">
            <ul class="face-type-list">
                <li class="face-type-list-item">
                    <img alt="Eckig" src="../assets/img/face1.png" class="face-type-list-item__img">
                    <div class="face-type-list-item__box">
                        <label class="face-type-list-item__label label-checkbox control-checkbox">
                            <input type="checkbox" class="face-type-list-item__checkbox checkbox"/>
                            <div class="checkbox-indicator"></div>
                            Eckig <span class="face-type-list-item__tooltip">i</span>
                        </label>

                    </div>
                </li>
                <li class="face-type-list-item">
                    <img alt="Eckig" src="../assets/img/face2.png" class="face-type-list-item__img">
                    <div class="face-type-list-item__box">
                        <label class="face-type-list-item__label label-checkbox control-checkbox">
                            <input type="checkbox" class="face-type-list-item__checkbox checkbox"/>
                            <div class="checkbox-indicator"></div>
                            Rund <span class="face-type-list-item__tooltip">i</span>
                        </label>

                    </div>
                </li>
                <li class="face-type-list-item">
                    <img alt="Eckig" src="../assets/img/face3.png" class="face-type-list-item__img">
                    <div class="face-type-list-item__box">
                        <label class="face-type-list-item__label label-checkbox control-checkbox">
                            <input type="checkbox" class="face-type-list-item__checkbox checkbox"/>
                            <div class="checkbox-indicator"></div>
                            Oval <span class="face-type-list-item__tooltip">i</span>
                        </label>

                    </div>
                </li>
                <li class="face-type-list-item">
                    <img alt="Eckig" src="../assets/img/face4.png" class="face-type-list-item__img">
                    <div class="face-type-list-item__box">
                        <label class="face-type-list-item__label label-checkbox control-checkbox">
                            <input type="checkbox" class="face-type-list-item__checkbox checkbox"/>
                            <div class="checkbox-indicator"></div>
                            Herzformig <span class="face-type-list-item__tooltip">i</span>
                        </label>

                    </div>
                </li>
            </ul>
            <div class="pagination">
                <router-link to="glasses-type"
                             class="pagination-arrow pagination-arrow__next face-type__next icon-right-open-big">
                    weiter
                </router-link>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'FaceType',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .face-type {
        padding: 22px 0 5px;
        &__title {
            text-align: center;
            font-size: 1.45rem;
            color: $theme-color;
            transition: all .2s linear .5s;

        }
    }

    .face-type-list {
        display: flex;
        margin: 0 -10px;
    }

    .face-type-list-item {
        text-align: center;
        font-size: 1.45rem;
        margin: 16px 10px 10px;
        width: 216px;
        max-width: 100%;
        font-size: 0;
        background: $grey;
        transition: all .2s linear .5s;
        &__box {
            min-height: 47px;
            text-align: left;
            overflow: hidden;
            padding: 0 5px;
            display: flex;
            align-items: center;
        }
        &__label {
            margin: 0;
        }
        &__tooltip {
            font-size: 1rem;
            font-style: italic;
            color: #fff;
            background: $theme-color;
            border-radius: 50%;
            display: inline-block;
            height: 16px;
            line-height: 16px;
            width: 16px;
            font-size: 10px;
            text-align: center;
            vertical-align: super;
            margin-left: 5px;
            transition: all .2s ease-in-out .2s;

        }
    }

    @media (max-width: 991px) {
        .face-type-list {
            flex-flow: row wrap;
            max-width: 500px;
            margin: 0 auto;
            justify-content: center;
        }

    }
</style>
