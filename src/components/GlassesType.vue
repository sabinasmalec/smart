<template>
  <section class="face-type red">
    <h2 class="face-type__title">Welche Anforderungen stallen Sie an die Fassung?</h2>
    <form class="face-type-form">
      <ul class="face-type-list">
        <li class="face-type-list-item face-type-list-item--glasses">
          <img alt="Eckig" src="../assets/img/glasses1.png" class="face-type-list-item__img">
          <div class="face-type-list-item__box">
            <label class="face-type-list-item__label label-checkbox control-checkbox">
              <input type="checkbox" class="face-type-list-item__checkbox checkbox"/>
              <div class="checkbox-indicator"></div>
              Bruchsicher & rostfrei:
              Metall-Fassungen <span class="face-type-list-item__tooltip">i</span>
            </label>

          </div>
        </li>
        <li class="face-type-list-item face-type-list-item--glasses">
          <img alt="Eckig" src="../assets/img/glasses2.png" class="face-type-list-item__img">
          <div class="face-type-list-item__box">
            <label class="face-type-list-item__label label-checkbox control-checkbox">
              <input type="checkbox" class="face-type-list-item__checkbox checkbox"/>
              <div class="checkbox-indicator"></div>
              Farbenfroh & extravagant:
              Kunststoff-Fassungen <span class="face-type-list-item__tooltip">i</span>
            </label>

          </div>
        </li>
        <li class="face-type-list-item face-type-list-item--glasses">
          <img alt="Eckig" src="../assets/img/glasses3.png" class="face-type-list-item__img">
          <div class="face-type-list-item__box">
            <label class="face-type-list-item__label label-checkbox control-checkbox">
              <input type="checkbox" class="face-type-list-item__checkbox checkbox"/>
              <div class="checkbox-indicator"></div>
              Leicht & stabil:
              Titan-Fassungen <span class="face-type-list-item__tooltip">i</span>
            </label>

          </div>
        </li>
      </ul>
      <div class="pagination">
        <router-link to="/">
          <a href="" class="pagination-arrow pagination-arrow--rewerse-color pagination-arrow__prev face-type__next icon-left-open-big">
            zurück
          </a>
        </router-link>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'GlassesType',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .face-type-list-item {
    &--glasses {
      width: 295px;
      max-width: 100%;
    }
  }
</style>
