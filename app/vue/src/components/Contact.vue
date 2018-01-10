<template>
  <div id="contact">
    <h1>Contact</h1>
    <div class="row">
        <div class="column column-6">
            <form>
                <label for="name">Naam</label>
                <input type="text" id="name" name="name" placeholder="Jouw naam...">
                <label for="email">Emailadres</label>
                <input type="email" id="email" name="email" placeholder="Jouw emailadres...">
                <label for="subject">Onderwerp</label>
                <input type="text" id="subject" name="subject" placeholder="Onderwerp van je bericht...">
                <label for="message">Bericht</label>
                <textarea id="message" name="message" placeholder="Jouw bericht..."></textarea>
                <button type="submit" class="btn">Verzenden</button>
            </form>
        </div>
        <div class="column column-6">
            <section class="contactinfo">
                <div class="row">
                    <div class="column column-4">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div class="column column-4">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div class="column column-4">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                </div>
            </section>            
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10024.575031936614!2d3.6686911!3d51.0873544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x47f9e1d923e07a64!2sCampus+Mariakerke+Arteveldehogeschool!5e0!3m2!1snl!2sbe!4v1515588725446" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Contact',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
