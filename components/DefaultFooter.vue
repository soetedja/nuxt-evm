<template>
  <div class="wrapper footer-wrapper">
    <div class="row footer">
      <div class="col six company">
        <div class="company-details">
          <div class="row company-logo">
            <NuxtLogo />
            <span class="company-name">Nuxt EVM</span>
          </div>
          <div class="row address">
            <span>Jalan Kusuma Negara, 01, Umbulharjo, Kota Yogyakarta, Yogyakarta, 55234</span>
          </div>
          <div class="social">
            <font-awesome-icon :icon="['fab', 'twitter-square']" size="2x" />
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
            <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" />
            <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
          </div>
        </div>
      </div>
      <div class="col three">
        <div class="customer-service">
          <h3>Customer Service</h3>
          <a href>Customer</a>
          <a href>Seller</a>
          <a href>Help</a>
          <a href>Application</a>
          <a href>Careers</a>
          <a href>Site Map</a>
          <a href>FAQ</a>
        </div>
      </div>
      <div class="col three">
        <div class="about-us">
          <h3>About Us</h3>
          <p>
            Bring your in-store and online sales together with Shopify. Gain insights about your business from one view
            so you can work smarter, move faster, and think bigger.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NuxtLogo from './NuxtLogo.vue'
export default {
  name: 'DefaultFooter',
  components: { NuxtLogo },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    openNav () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
.footer-wrapper {
  background-color: #f9f9f9;
}

.footer {
  margin: 75px 0;
  padding-top: 20px
}

.company {
  display: flex;
  justify-content: space-around;
}

.company-details {
  width: 350px;
  margin-bottom: 20px;
  text-align: center;

  .company-logo {
    margin-top: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .address {
    margin-top: 20px
  }

  .social {
    margin-top: 30px;
    display: flex;
    color: #0f5185;
    align-items: center;
    flex-direction: row;
    align-content: flex-end;
    justify-content: space-around;
  }

  .nuxt-logo {
    height: 50px;
  }

  .company-name {
    font-size: 2.5rem;
    font-weight: bold;
  }
}

.customer-service {
  display: flex;
  flex-direction: column;
  margin-left: 20px
}

.about-us {
  margin-left: 20px;
}
</style>
