<template>
  <div>
    <el-menu default-active="2" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Main</el-menu-item>
      <el-menu-item index="2">About</el-menu-item>
    </el-menu>
    <section class="section__about">
      <div class="container">
        <div class="about__header">
          <h1 class="about__title"><span class="colour_span_about">ИНФОРМ</span>ЗАЩИТА</h1>
          <div class="about__subtitle">Компания «Информзащита» — ведущий российский системный интегратор в области информационной безопасности.
            Компания предоставляет своим клиентам профессиональные услуги по защите автоматизированных систем различного назначения и любого уровня сложности.
          </div>
          <div class="row about__body">
            <div class="col-12 order-last order-lg-first col-sm-3 col-lg-2  about__Featured">
              <div class="featured__block">
                <div class="item__featured__block">
                  <button type="button" class="link__featured pos">
                    <img class="img__featured " src="@/assets/aboutImg/about_1.png" alt="about-diagramma">
                  </button>
                </div>
                <div class="item__featured__block">
                  <button type="button" class="link__featured">
                    <img class="img__featured" src="@/assets/aboutImg/about_2.png" alt="about-wears">
                  </button>
                </div>
                <div class="item__featured__block">
                  <button type="button" class="link__featured">
                    <img class="img__featured" src="@/assets/aboutImg/about_3.png" alt="about-search">
                  </button>
                </div>
                <div class="item__featured__block">
                  <button type="button" class="link__featured pos">
                    <img class="img__featured " src="@/assets/aboutImg/about_4.png" alt="about-diagramma">
                  </button>
                </div>
              </div>
            </div>
            <div class="col-9 col-lg-6 order-sm-last  about__content">
              <div class="content__block">
                <h3 class="title__content__block">Структура Группы компаний «Информзащита»</h3>
                <p class="text__content__block">НИП «ИНФОРМЗАЩИТА» - ведущий российский системный интегратор в области информационной безопасности.</p>
                <p class="text__content__block">«ИНФОРМЗАЩИТА - СЕРВИС» - сервисный центр, оказывающий услуги в области технической поддержки и обслуживания комплексных систем обеспечения и управления информационной безопасностью.</p>
                <p class="text__content__block">«КОД БЕЗОПАСНОСТИ» - российский разработчик программных и аппаратных средств, обеспечивающих безопасность информационных систем, а также их соответствие требованиям российских, отраслевых и международных стандартов.</p>
                <p class="text__content__block">УЧЕБНЫЙ ЦЕНТР «ИНФОРМЗАЩИТА» - ведущий российский специализированный центр обучения и повышения квалификации специалистов по защите информации.</p>
              </div>
            </div>
            <div class="col-12 col-lg-4 order-first order-lg-last about__mainImg">
              <div class="block__mainImg">
                <img src="@/assets/aboutImg/apple.png" alt="apple-watch" class="about_mainIMG">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.el-menu-item {
  padding: 0 20px
}
</style>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  },
  methods: {
    handleSelect(key) {
      if (key === '1') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
</style>